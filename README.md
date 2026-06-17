# Road Construction Materials Calculator

A comprehensive web-based application for calculating materials needed to lay roads, including bitumen, gloves, gravel, sand, and other construction requirements.

## 🎯 Features

- **Material Quantity Calculator**: Automatically calculates required quantities based on road dimensions
- **Cost Estimation**: Provides detailed cost breakdown for each material
- **Multiple Materials**: Calculates:
  - Bitumen (Hot Mix Asphalt)
  - Gravel/Aggregate
  - Sand
  - Rubber Gloves
  - Safety Equipment
  - Tools & Equipment

- **Project Insights**: Estimates:
  - Road area
  - Required workforce
  - Estimated project duration
  - Total project cost

- **Export Options**: 
  - Print reports
  - Export to CSV

- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 📋 Input Parameters

1. **Road Length**: Length of the road in meters
2. **Road Width**: Width of the road in meters
3. **Bitumen Layer Thickness**: Thickness of asphalt layer in centimeters (default: 5 cm)
4. **Base Layer Thickness**: Thickness of gravel base layer in centimeters (default: 15 cm)

## 🧮 Calculation Logic

### Volumes
- **Bitumen Volume** = Road Area × Bitumen Thickness
- **Gravel Volume** = Road Area × Base Layer Thickness
- **Sand Volume** = Road Area × 5cm (standard sub-base)

### Material Quantities
- **Bitumen** = Volume × 2.3 tonnes/m³
- **Gravel** = Volume × 1.5 tonnes/m³
- **Sand** = Volume × 1.6 tonnes/m³

### Additional Requirements
- **Rubber Gloves**: 1 pair per 5 m² of road area
- **Safety Equipment**: 1 set per 20 m² of road area
- **Tools**: 1 set per 100 m² of road area

### Workforce & Schedule
- **Estimated Workers**: 1 worker per 50 m²
- **Project Duration**: ~100 m² per day with standard workforce

## 💰 Cost Structure

Prices (USD):
- Bitumen: $80/tonne
- Gravel: $20/tonne
- Sand: $15/tonne
- Gloves: $2/pair
- Safety Equipment: $50/set
- Tools: $30/unit

*Note: Prices can be adjusted in the script.js file for your region*

## 🚀 Getting Started

### Installation

1. Clone or download this project
2. No installation required - it's a standalone web application
3. Simply open `index.html` in a web browser

### Usage

1. Open the application in your browser
2. Enter the road length and width
3. Optionally adjust the bitumen and base layer thickness
4. Click "Calculate Materials"
5. View the detailed breakdown of required materials and costs
6. Export or print the results as needed

## 🌐 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📁 Project Structure

```
grey2green/
├── index.html       # Main HTML file with form and UI
├── style.css        # Styling and responsive design
├── script.js        # Calculation logic and functionality
├── README.md        # Project documentation
└── package.json     # Project metadata
```

## 🔧 Customization

To modify material costs or densities, edit the following in `script.js`:

```javascript
const MATERIAL_RATES = {
    bitumen: 80,    // USD per tonne
    gravel: 20,     // USD per tonne
    sand: 15,       // USD per tonne
    gloves: 2,      // USD per pair
    safety: 50,     // USD per set
    tools: 30       // USD per unit
};

const MATERIAL_DENSITY = {
    bitumen: 2.3,   // tonnes/m³
    gravel: 1.5,    // tonnes/m³
    sand: 1.6       // tonnes/m³
};
```

## 📊 Example Calculation

**Input:**
- Length: 100 meters
- Width: 10 meters
- Bitumen Thickness: 5 cm
- Base Thickness: 15 cm

**Output:**
- Road Area: 1,000 m²
- Bitumen: ~115 tonnes
- Gravel: ~225 tonnes
- Sand: ~80 tonnes
- Rubber Gloves: 200 pairs
- Safety Equipment: 50 sets
- Estimated Cost: ~$10,000+

## 🖥️ Development

This is a frontend-only application using:
- **HTML5** for structure
- **CSS3** for styling and responsive design
- **Vanilla JavaScript** for calculations

No backend server or database required.

## 📝 License

This project is open source and available for educational and commercial use.

## 🤝 Support

For issues or feature requests, please reach out or create an issue in the project repository.

## 👥 Version

**Version 1.0** - Initial Release

---

**Note**: Material costs and specifications vary by region and supplier. Please verify rates with local suppliers before finalizing project budgets.
