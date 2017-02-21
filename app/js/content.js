var filter = {
    "initial_date": "",
    "final_date": "",
    "period_type": 0,
    "include_content": 0
};

(function() {

	var chart5 = 'chart-content1';

    var data1 = [
                    {
                        "label": "Shared Views",
                        "value": "45"
                    }, 
                    {
                        "label": "Standard Views",
                        "value": "15"
                    }
                ];

    render(chart5, data1);

    function render(div, data){
        var revenueChart = new FusionCharts({
            type: 'doughnut2d',
            renderAt: div,
            width: '390',
            height: '260',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "paletteColors": "#37929c,#3e6c6f",
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
                    "defaultCenterLabel": " Total Views",
                    "showTooltip": "1",
                    "decimals": "0"
                },
                "data": data
            }
        }).render();
    }

    setHtml('../partials/dateSelector.html','dateSelector');

    function loadDoc(dname) {
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        } else {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhttp.open("GET",dname,false);
        xhttp.send("");
        return xhttp.responseText;
    }

    function setHtml(HTML, id) {
        var html = loadDoc(HTML);

        document.getElementById(id).innerHTML = html;
    }

})();