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

    render(chart5, data1, "", " Total Views", "#37929c,#3e6c6f");

    setHtml('../partials/authorSelector.html','authorSelector1');
    setHtml('../partials/dateSelector.html','dateSelector');

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