function render(div, data, entry, title, colors){
  var revenueChart = new FusionCharts({
    type: 'doughnut2d',
    renderAt: div,
    width: '390',
    height: '260',
    dataFormat: 'json',
    dataSource: {
      "chart": {                    
        "paletteColors": colors,
        "bgColor": "#ffffff",
        "showBorder": "0",
        "use3DLighting": "0",
        "showShadow": "0",
        "enableSmartLabels": "0",
        "startingAngle": "160",
        "showPercentInTooltip": "0",
        "showLabels": "0",
        "legendShadow": "0",
        "legendBorderAlpha": "0",
        "defaultCenterLabel": entry + " " + title,
        "showTooltip": "1",
        "decimals": "0"
      },
      "data": data
    }
  });

  revenueChart.render();
}