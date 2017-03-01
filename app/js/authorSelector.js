var authorModal;

(function() {

    var groups = [
        {
            "id": "1",
            "name":"Engeeniering"
        },
        {
            "id": "2",
            "name": "Marketing"
        }
    ];

    var authors = [
        {
            "id": "1",
            "name": "James Morse",
            "image": "img/James.png"
        },
        {
            "id": "2",
            "name": "Ellen Patterson",
            "image": "img/James.png"
        }
    ];

    process();
    mapping();

    function clicAuthor(div){
        div.onclick = function(event)
        {
            var author;

            for(var i=0; i<authors.length; i++){
                author = authors[i];
                document.getElementById('author_' + author.id).classList.remove("list-group-item-new");
                document.getElementById('author_' + author.id).className = "list-group-item";
            }

            if(event.srcElement.parentElement.id === 'author'){
                document.getElementById(event.srcElement.id).className = "list-group-item-new";
                filter.individual = parseInt(event.srcElement.id.split("author_")[1]);
            }
            else{
                document.getElementById(event.srcElement.parentElement.id).className = "list-group-item-new";
                filter.individual = parseInt(event.srcElement.parentElement.id.split("author_")[1]);
            }
        } ;   
    }

    function clicGroup(div){
        div.onclick = function(event)
        {
            var group;

            for(var i=0; i<groups.length; i++){
                group = groups[i];

                document.getElementById('group_' + group.id).classList.remove("list-group-item-new");
                document.getElementById('group_' + group.id).className = "list-group-item";
            }

            if(event.srcElement.parentElement.id === 'group'){
                document.getElementById(event.srcElement.id).className = "list-group-item-new";
                filter.group = parseInt(event.srcElement.id.split("group_")[1]);
            }
            else{
                document.getElementById(event.srcElement.parentElement.id).className = "list-group-item-new";
                filter.group = parseInt(event.srcElement.parentElement.id.split("group_")[1]);
            }
        } ;   
    }

    function process(){
        var i;
        var group;
        var author;
        var htmlAuthors = '';
        var htmlGroups = '';
        var div;

        for(i=0; i< authors.length; i++){
            author = authors[i];

            div = '<div id="author_' + author.id + 
                '" class="list-group-item">' + 
                '<img src="'+ 
                    author.image +
                '" alt="'+ 
                    author.image +
                '" height="40" width="40" style="float: left; display: inline;">' + 
                '<H6 style="margin-left: 50px; color: blue;">' + author.name + '</H6>' +
                '</div>';

            htmlAuthors = htmlAuthors + div;
        }

        for(i=0; i< groups.length; i++){
            group = groups[i];

            div = '<div id="group_' + group.id + 
                '" class="list-group-item">' + 
                '<img src="img/Group.png" alt="img/Group.png"' + 
                ' height="40" width="40" style="float: left; display: inline;">' + 
                '<H6 style="margin-left: 50px; color: blue;">' + group.name + '</H6>' +
                '</div>';

            htmlGroups = htmlGroups + div;
        }

        document.getElementById('author').innerHTML = htmlAuthors;
        document.getElementById('group').innerHTML = htmlGroups;

        var divClic;

        for(i=0; i< authors.length; i++){
            author = authors[i];

            divClic = document.getElementById('author_' + author.id);
            clicAuthor(divClic);
        }

        for(i=0; i< groups.length; i++){
            group = groups[i];

            divClic = document.getElementById('group_' + group.id);
            clicGroup(divClic);
        }
    }

    function mapping(){
        document.getElementById("authorSelect").innerHTML = 'James Morse';   
    }

    document.getElementById('authorPopup').onclick = function()
    {
        authorModal = document.getElementById('authorModal');
        authorModal.style.display = "block";
    };

})();