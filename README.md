Here’s a **clean, professional, engineering‑grade README rewrite** of your content — written the way a real civil engineering firm or construction tech company would present it.  
No AI‑style fluff, no emojis, no casual tone — just crisp, industry‑standard documentation.

---

# Road Construction Materials Calculator

A web‑based application designed to estimate material quantities, workforce requirements, and cost projections for road construction projects. The tool supports standard civil engineering inputs and provides a structured breakdown of all materials required for bituminous road works.

## Overview

This application enables engineers, contractors, and project planners to quickly determine the quantities of bitumen, aggregates, sand, safety equipment, and tools required for road construction. It also provides cost estimates based on configurable material rates and density values.

The calculator is built as a standalone front‑end application and can be used directly in any modern web browser.

## Key Features

- Automated calculation of material quantities based on road dimensions  
- Cost estimation for each material category  
- Support for multiple construction materials, including:
  - Bitumen (Hot Mix Asphalt)
  - Gravel/Aggregate
  - Sand
  - Safety equipment and consumables
  - Tools and auxiliary items
- Workforce and duration estimation based on standard productivity rates  
- Export options for printing and CSV generation  
- Responsive layout suitable for desktop and mobile use  

## Input Parameters

The calculator accepts the following inputs:

1. **Road Length (m)**  
2. **Road Width (m)**  
3. **Bitumen Layer Thickness (cm)** — default: 5 cm  
4. **Base Layer Thickness (cm)** — default: 15 cm  

## Calculation Methodology

### Area and Volume
- **Road Area** = Length × Width  
- **Bitumen Volume** = Area × Bitumen Thickness  
- **Gravel Volume** = Area × Base Layer Thickness  
- **Sand Volume** = Area × 5 cm (standard sub‑base thickness)

### Material Quantities
Material weights are calculated using standard density values:

- Bitumen: 2.3 tonnes/m³  
- Gravel: 1.5 tonnes/m³  
- Sand: 1.6 tonnes/m³  

### Additional Requirements
- Rubber gloves: 1 pair per 5 m²  
- Safety equipment: 1 set per 20 m²  
- Tools: 1 set per 100 m²  

### Workforce and Duration
- Workforce requirement: 1 worker per 50 m²  
- Estimated duration: 100 m²/day with a standard crew  

## Cost Parameters

Default pricing (modifiable in `script.js`):

| Material/Item       | Rate (USD) |
|---------------------|------------|
| Bitumen             | 80/tonne   |
| Gravel              | 20/tonne   |
| Sand                | 15/tonne   |
| Rubber Gloves       | 2/pair     |
| Safety Equipment    | 50/set     |
| Tools               | 30/unit    |

These values can be adjusted to match regional pricing or supplier quotations.

## Usage Instructions

1. Open `index.html` in any modern browser.  
2. Enter the required road dimensions and layer thickness values.  
3. Select **Calculate Materials** to generate the material and cost breakdown.  
4. Use the export options to print or download the results.

No installation or backend setup is required.

## Project Structure

```
grey2green/
├── index.html       # Application interface
├── style.css        # Layout and styling
├── script.js        # Core calculation logic
├── README.md        # Documentation
└── package.json     # Project metadata
```

## Customization

Material rates and density values can be modified in `script.js`:

```javascript
const MATERIAL_RATES = {
    bitumen: 80,
    gravel: 20,
    sand: 15,
    gloves: 2,
    safety: 50,
    tools: 30
};

const MATERIAL_DENSITY = {
    bitumen: 2.3,
    gravel: 1.5,
    sand: 1.6
};
```

## Example Output

**Input:**  
- Length: 100 m  
- Width: 10 m  
- Bitumen Thickness: 5 cm  
- Base Thickness: 15 cm  

**Output:**  
- Road Area: 1,000 m²  
- Bitumen: ~115 tonnes  
- Gravel: ~225 tonnes  
- Sand: ~80 tonnes  
- Gloves: 200 pairs  
- Safety Equipment: 50 sets  
- Estimated Cost: ~USD 10,000+  

## Technology Stack

- HTML5  
- CSS3  
- Vanilla JavaScript  

