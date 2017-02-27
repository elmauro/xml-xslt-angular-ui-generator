var filter = {
    "initial_date": "",
    "final_date": "",
    "period_type": 0,
    "include_content": 0,
    "group": 0,
    "individual": 0
};

(function() {

	var chart1 = 'chart-training1';
    var chart2 = 'chart-training2';
    var modal;
    var modalDate;
    
    var data1 = [
        {
            "label": "Completed",
            "value": "31"
        }, 
        {
            "label": "Courses In Progress",
            "value": "5"
        }, 
        {
            "label": "Enrolled",
            "value": "4"
        }
    ];

    render(chart1, data1);
    render(chart2, data1);

    function render(div, data){
        var revenueChart = new FusionCharts({
            type: 'doughnut2d',
            renderAt: div,
            width: '390',
            height: '260',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "paletteColors": "#8bc34a,#37929c,#3e6c6f",
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
                    "defaultCenterLabel": " Completed",
                    "showTooltip": "1",
                    "decimals": "0"
                },
                "data": data
            }
        }).render();
    }

    document.getElementById("authorSelect").innerHTML = 'James Morse';

    //setHtml('../partials/authorSelector.html','authorSelector1');
    setHtml('../partials/dateSelector.html','dateSelector2');
    //setHtml('../partials/dateSelector.html','dateSelector1');

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