var generator = {};

generator.namespace = function( nameSpaceString ) {
    var names = nameSpaceString.split(".");

    //global object is the parent for first level nameSpace
    var parent = window;

    //if any nameSpace level doesn't exist, create it
    for ( var i=0, imax=names.length ; i < imax; i++ ) {
        if ( !parent[names[i]] ) parent[names[i]]={};
        parent = parent[names[i]];
    }
};

generator.namespace("generator.Render");

generator.Render.loadXMLDoc = function(dname) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xhttp.overrideMimeType)
        xhttp.overrideMimeType('text/xml');

    xhttp.open("GET",dname,false);
    xhttp.send("");
    return xhttp.responseXML;
};

generator.Render.xml2Html = function(XML, XSLT, id) {
    xml = generator.Render.loadXMLDoc(XML);
    xsl = generator.Render.loadXMLDoc(XSLT);

    // code for IE
    if (window.ActiveXObject) {
        ex = xml.transformNode(xsl);

        generator.Render.remove(id);
        document.getElementById(id).innerHTML = ex;
    }

    // code for Mozilla, Firefox, Opera,etc.
    else if (document.implementation &&
        document.implementation.createDocument) {
        xsltProcessor=new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml,document);

        generator.Render.remove(id);

        var element = document.getElementById(id);

        if(element)
            document.getElementById(id).appendChild(resultDocument);
    }
};

generator.Render.remove = function(id) {
    var element = document.getElementById(id);
    while (element && element.innerHTML !== '') {
        element.innerHTML = '';
    }
};

generator.Render.loadComponents = function(){
    generator.Render.xml2Html('xml/menu.xml','xslt/menu.xslt','menuBar');
    generator.Render.xml2Html('xml/company.xml','xml/crud.xslt','crudCompany');
    generator.Render.xml2Html('xml/company.xml','xml/grid.xslt','gridCompany');
};

