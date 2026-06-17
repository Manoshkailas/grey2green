// Constants for material calculations
const MATERIAL_RATES = {
    bitumen: 80, // USD per tonne
    gravel: 20, // USD per tonne
    sand: 15, // USD per tonne
    gloves: 2, // USD per pair
    safety: 50, // USD per set
    tools: 30 // USD per item
};

const MATERIAL_DENSITY = {
    bitumen: 2.3, // tonnes/m³
    gravel: 1.5, // tonnes/m³
    sand: 1.6 // tonnes/m³
};

const WORKFORCE_RATIO = 1; // workers per 50 m²

// Form submission handler
document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    calculateMaterials();
});

// Main calculation function
function calculateMaterials() {
    // Get input values
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const thickness = parseFloat(document.getElementById('thickness').value) / 100; // convert to meters
    const baseThickness = parseFloat(document.getElementById('baseThickness').value) / 100; // convert to meters

    // Validate inputs
    if (!length || !width || !thickness || !baseThickness || length <= 0 || width <= 0) {
        alert('Please enter valid values for all fields');
        return;
    }

    // Calculate area
    const area = length * width;

    // Calculate volumes
    const bitumenVolume = area * thickness;
    const gravelVolume = area * baseThickness;
    const sandVolume = area * 0.05; // 5cm sand layer

    // Calculate quantities
    const bitumenQty = bitumenVolume * MATERIAL_DENSITY.bitumen;
    const gravelQty = gravelVolume * MATERIAL_DENSITY.gravel;
    const sandQty = sandVolume * MATERIAL_DENSITY.sand;

    // Calculate other requirements
    const glovesQty = Math.ceil(area / 5); // 1 pair per 5 m²
    const safetyQty = Math.ceil(area / 20); // 1 set per 20 m²
    const toolsQty = Math.ceil(area / 100); // 1 set per 100 m²

    // Calculate workforce
    const workersQty = Math.ceil(area / 50);
    const estimatedDays = Math.ceil(area / 100); // Approximately 100 m² per day with 10 workers

    // Calculate costs
    const costs = {
        bitumen: bitumenQty * MATERIAL_RATES.bitumen,
        gravel: gravelQty * MATERIAL_RATES.gravel,
        sand: sandQty * MATERIAL_RATES.sand,
        gloves: glovesQty * MATERIAL_RATES.gloves,
        safety: safetyQty * MATERIAL_RATES.safety,
        tools: toolsQty * MATERIAL_RATES.tools
    };

    const totalCost = Object.values(costs).reduce((a, b) => a + b, 0);

    // Update results display
    updateResults(
        bitumenQty,
        gravelQty,
        sandQty,
        glovesQty,
        safetyQty,
        toolsQty,
        area,
        workersQty,
        estimatedDays,
        totalCost,
        bitumenVolume,
        gravelVolume,
        sandVolume,
        costs
    );

    // Show results
    document.getElementById('resultsContainer').classList.remove('hidden');
    
    // Scroll to results
    document.getElementById('resultsContainer').scrollIntoView({ behavior: 'smooth' });
}

// Update results in the UI
function updateResults(
    bitumen,
    gravel,
    sand,
    gloves,
    safety,
    tools,
    area,
    workers,
    days,
    totalCost,
    bitumenVolume,
    gravelVolume,
    sandVolume,
    costs
) {
    // Update main results
    document.getElementById('bitumenResult').textContent = bitumen.toFixed(2);
    document.getElementById('bitumenVolume').textContent = `Volume: ${bitumenVolume.toFixed(2)} m³`;

    document.getElementById('gravelResult').textContent = gravel.toFixed(2);
    document.getElementById('gravelVolume').textContent = `Volume: ${gravelVolume.toFixed(2)} m³`;

    document.getElementById('sandResult').textContent = sand.toFixed(2);
    document.getElementById('sandVolume').textContent = `Volume: ${sandVolume.toFixed(2)} m³`;

    document.getElementById('glovesResult').textContent = gloves;
    document.getElementById('safetyResult').textContent = safety;
    document.getElementById('toolsResult').textContent = tools;

    // Update summary
    document.getElementById('areaResult').textContent = `${area.toFixed(2)} m²`;
    document.getElementById('workersResult').textContent = workers;
    document.getElementById('daysResult').textContent = days;
    document.getElementById('costResult').textContent = `$${totalCost.toFixed(2)}`;

    // Update breakdown table
    updateBreakdownTable(bitumen, gravel, sand, gloves, safety, tools, costs);
}

// Update the cost breakdown table
function updateBreakdownTable(bitumen, gravel, sand, gloves, safety, tools, costs) {
    const tbody = document.getElementById('breakdownTableBody');
    tbody.innerHTML = '';

    const breakdownData = [
        {
            material: 'Bitumen (Hot Mix Asphalt)',
            quantity: bitumen.toFixed(2),
            unit: 'Tonnes',
            rate: `$${MATERIAL_RATES.bitumen}/tonne`,
            total: costs.bitumen.toFixed(2)
        },
        {
            material: 'Gravel/Aggregate',
            quantity: gravel.toFixed(2),
            unit: 'Tonnes',
            rate: `$${MATERIAL_RATES.gravel}/tonne`,
            total: costs.gravel.toFixed(2)
        },
        {
            material: 'Sand',
            quantity: sand.toFixed(2),
            unit: 'Tonnes',
            rate: `$${MATERIAL_RATES.sand}/tonne`,
            total: costs.sand.toFixed(2)
        },
        {
            material: 'Rubber Gloves',
            quantity: gloves,
            unit: 'Pairs',
            rate: `$${MATERIAL_RATES.gloves}/pair`,
            total: costs.gloves.toFixed(2)
        },
        {
            material: 'Safety Equipment Sets',
            quantity: safety,
            unit: 'Sets',
            rate: `$${MATERIAL_RATES.safety}/set`,
            total: costs.safety.toFixed(2)
        },
        {
            material: 'Tools & Equipment',
            quantity: tools,
            unit: 'Units',
            rate: `$${MATERIAL_RATES.tools}/unit`,
            total: costs.tools.toFixed(2)
        }
    ];

    let totalSum = 0;

    breakdownData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${item.material}</strong></td>
            <td>${item.quantity}</td>
            <td>${item.unit}</td>
            <td>${item.rate}</td>
            <td style="font-weight: bold; color: #667eea;">$${item.total}</td>
        `;
        tbody.appendChild(row);
        totalSum += parseFloat(item.total);
    });

    // Add total row
    const totalRow = document.createElement('tr');
    totalRow.style.background = '#667eea';
    totalRow.style.color = 'white';
    totalRow.style.fontWeight = 'bold';
    totalRow.innerHTML = `
        <td colspan="4" style="text-align: right; padding: 15px;">TOTAL COST</td>
        <td style="padding: 15px;">$${totalSum.toFixed(2)}</td>
    `;
    tbody.appendChild(totalRow);
}

// Export results to CSV
function exportToCSV() {
    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const bitumen = document.getElementById('bitumenResult').textContent;
    const gravel = document.getElementById('gravelResult').textContent;
    const sand = document.getElementById('sandResult').textContent;
    const gloves = document.getElementById('glovesResult').textContent;
    const safety = document.getElementById('safetyResult').textContent;
    const tools = document.getElementById('toolsResult').textContent;
    const area = document.getElementById('areaResult').textContent;
    const cost = document.getElementById('costResult').textContent;

    let csv = 'Road Construction Materials Calculator Report\n\n';
    csv += 'INPUT PARAMETERS\n';
    csv += `Road Length (m),${length}\n`;
    csv += `Road Width (m),${width}\n\n`;
    csv += 'MATERIALS REQUIRED\n';
    csv += 'Material,Quantity,Unit\n';
    csv += `Bitumen,${bitumen},Tonnes\n`;
    csv += `Gravel/Aggregate,${gravel},Tonnes\n`;
    csv += `Sand,${sand},Tonnes\n`;
    csv += `Rubber Gloves,${gloves},Pairs\n`;
    csv += `Safety Equipment,${safety},Sets\n`;
    csv += `Tools & Equipment,${tools},Units\n\n`;
    csv += 'PROJECT SUMMARY\n';
    csv += `Road Area,${area}\n`;
    csv += `Estimated Cost,${cost}\n`;

    // Create blob and download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'road-materials-report.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Reset form and hide results
document.getElementById('calculatorForm').addEventListener('reset', function() {
    document.getElementById('resultsContainer').classList.add('hidden');
    // Set default values
    document.getElementById('thickness').value = '5';
    document.getElementById('baseThickness').value = '15';
});

// Allow Enter key to submit form
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        calculateMaterials();
    }
});
