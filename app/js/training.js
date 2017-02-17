(function() {

    var modal;

	var chart1 = 'chart-training1';
    var chart2 = 'chart-training2';
    
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

    var div1 = document.getElementById('1');
    var div2 = document.getElementById('2');
    var div3 = document.getElementById('3');
    var div4 = document.getElementById('4');
    var div5 = document.getElementById('5');
    var div6 = document.getElementById('6');
    var div7 = document.getElementById('7');
    var div8 = document.getElementById('8');

    div_clic(div1);
    div_clic(div2);
    div_clic(div3);
    div_clic(div4);
    div_clic(div5);
    div_clic(div6);
    div_clic(div7);
    div_clic(div8);

    function div_clic(div){
        div.onclick = function(event)
        {
            var i = 1;
            if(parseInt(event.srcElement.id) <= 5){
                for(i=1; i<=5; i++){
                    document.getElementById(i.toString()).classList.remove("list-group-item-new");
                    document.getElementById(i.toString()).className = "list-group-item";
                }
            }
            else{
                i = 6;
                for(i=6; i<=8; i++){
                    document.getElementById(i.toString()).classList.remove("list-group-item-new");
                    document.getElementById(i.toString()).className = "list-group-item";
                }
            }

            document.getElementById(event.srcElement.id).className = "list-group-item-new";

        } ;   
    }

    document.getElementById('popup').onclick = function(event)
    {
        modal = document.getElementById('myModal');
        modal.style.display = "block";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
})();