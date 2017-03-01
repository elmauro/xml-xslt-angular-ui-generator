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

    render(chart1, data1, "", " Completed", "#8bc34a,#37929c,#3e6c6f");
    render(chart2, data1, "", " Completed", "#8bc34a,#37929c,#3e6c6f");

    document.getElementById("authorSelect").innerHTML = 'James Morse';

    /*** setHtml('../partials/authorSelector.html','authorSelector1'); ***/
    setHtml('../partials/dateSelector.html','dateSelector2');
    /*** setHtml('../partials/dateSelector.html','dateSelector1'); ***/

    function loadDoc(dname) {
        var xhttp;
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