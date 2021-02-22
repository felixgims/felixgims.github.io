function leerpdf (referencia,ruta){
    fetch(ruta)
    .then(response => {
        if (response.ok){
            if(document.getElementById(referencia).innerHTML == "Abrir Guia Docente"){
                document.getElementById(referencia).innerHTML =  "Cerrar Guia Docente";
                var pdf = document.createElement("iframe");
                pdf.setAttribute("src", ruta);
                console.log(ruta);
                pdf.setAttribute("type","application/pdf");
                pdf.setAttribute("width","90%");
                pdf.setAttribute("height","550rem");
                var id = referencia + "pdf";
                pdf.setAttribute("id", id);
                document.getElementById(referencia).insertAdjacentElement("beforebegin",pdf);
            }else{
                var id = referencia + "pdf";
                document.getElementById(referencia).innerHTML = "Abrir Guia Docente";
                document.getElementById(id).remove();
            }
        }
    })    

    .catch(e => {
        console.error("Error " + e);
    })

    
}

