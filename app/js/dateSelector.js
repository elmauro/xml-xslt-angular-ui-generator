var modal;
var modalDate;

(function() {
    //var authorModal;

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
            var i;
            var date;

            if(parseInt(event.srcElement.id) <= 5){
                for(i=1; i<=5; i++){
                    document.getElementById(i.toString()).classList.remove("list-group-item-new");
                    document.getElementById(i.toString()).className = "list-group-item";
                }

                filter.period_type = parseInt(event.srcElement.id);
            }
            else{
                for(i=6; i<=8; i++){
                    document.getElementById(i.toString()).classList.remove("list-group-item-new");
                    document.getElementById(i.toString()).className = "list-group-item";
                }

                filter.include_content = parseInt(event.srcElement.id) - 5;
            }

            document.getElementById(event.srcElement.id).className = "list-group-item-new";
            
            if(parseInt(event.srcElement.id) <= 4){
                date = getDateRange(event.srcElement.id);
                document.getElementById('date').innerHTML = date;
            }
            else{
                if(parseInt(event.srcElement.id) === 5){
                    document.getElementById('date').innerHTML = 'Select Date';
                    picker1.setDate('');
                    picker2.setDate('');
                    filter.period_type = 0;

                    modalDate = document.getElementById('dateModal');
                    modalDate.style.display = "block";
                }
            }

            filter.initial_date = '';
            filter.final_date = '';

        } ;   
    }

    document.getElementById('popup').onclick = function()
    {
        modal = document.getElementById('myModal');
        modal.style.display = "block";
    };

    document.getElementById('done').onclick = function()
    {
        var date;

        if(modal){
            modal.style.display = "none";
        }

        if(modalDate){
            modalDate.style.display = "none";
        }

        date = getDateRange('5');
        document.getElementById('date').innerHTML = date;
        
        filter.initial_date = picker1.getDate();
        filter.final_date = picker2.getDate();
    };

    window.onclick = function(event) {
        if(modal && event.target === modal) {
            modal.style.display = "none";
        }

        if(modalDate && event.target === modalDate) {
            modalDate.style.display = "none";
        }

        if(authorModal && event.target === authorModal) {
            authorModal.style.display = "none";
        }
    };

    function getDateRange(option){
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        var objDate = new Date().toLocaleTimeString(
          "en-US", 
          { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit"}
        );

        var date = new Date(objDate);
        
        var month = date.getUTCMonth(); //months from 1-12
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();

        var strDate = monthNames[month] + " " + day + ", " + year;
        
        switch (option) {
        case '1':
            date.setDate(date.getDate()-7);
            break;
        case '2':
            date.setDate(date.getDate()-30);
            break;
        case '3':
            date.setFullYear(date.getFullYear() - 1);
            break;
        case '4':
            date.setMonth(date.getMonth() - 12);
            break;
        case '5':
            date = new Date(picker2.getDate());
        
            month = date.getUTCMonth(); //months from 1-12
            day = date.getUTCDate();
            year = date.getUTCFullYear();

            strDate = monthNames[month] + " " + day + ", " + year;
            
            date = new Date(picker1.getDate());
            break;
        default:
            date.setDate(date.getDate()-90);
            break;
        }
        
        month = date.getUTCMonth(); //months from 1-12
        day = date.getUTCDate();
        year = date.getUTCFullYear();

        date = monthNames[month] + " " + day + ", " + year + " - " + strDate; 
        
        return date;
    }

})();