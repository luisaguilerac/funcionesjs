function mostrar(strIdDivShow, strIdDivPos) {
    $("#" + strIdDivShow).show(500);
    //posicionarTag(strIdDivPos);
}
function ocultar(strIdDivShow, strIdDivPos) {
    $("#" + strIdDivShow).hide(500);
    //posicionarTag(strIdDivPos);
}


function posicionarTag(tag)
{
    $("html, body").animate({scrollTop: ($("#" + tag).offset().top) - 90}, 800);
    return false;
}

function vaciarPagina(divIdentificador) {
    $("#" + divIdentificador).empty();
}

function omitirAcentos(text) {
    var acentos = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
    var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
    for (var i = 0; i < acentos.length; i++) {
        text = text.replace(acentos.charAt(i), original.charAt(i));
    }
    return text;
}

function encode_utf8(s) {
    return unescape(encodeURIComponent(s));
}
function decode_utf8(s) {
    return decodeURIComponent(escape(s));
}
function cambiarPagina(pagina, divIdentificador)
{

    $.ajax({
        async: true,
        dataType: "html",
        contentType: "application/x-www-form-urlencoded",
        url: pagina + ".php",
        beforeSend: function() {
            var x = $('#' + divIdentificador);
            x.html("<br/><img width='70px' src='http://analisismercadopublico.cl/sistema/vista/img/load.gif'><br/>");

        },
        success: function(datos) {

            $('#' + divIdentificador).html(datos);

        },
        timeout: 20000,
        error: function() {
            var x = $('#' + divIdentificador);
            x.html("<br/><img width='70px' src='http://analisismercadopublico.cl/sistema/vista/img/load.gif'><br/>");

        }
    });
    return false;
}

function detalle(pagina, id, divIdentificador)
{
    $.ajax({
        async: true,
        dataType: "html",
        method: "post",
        contentType: "application/x-www-form-urlencoded",
        data: "id=" + id,
        url: pagina + ".php",
        beforeSend: function() {
            var x = $('#' + divIdentificador);
            x.html("<br/><img width='70px' src='http://analisismercadopublico.cl/sistema/vista/img/load.gif'><br/>");

        },
        success: function(datos) {

            $('#' + divIdentificador).html(datos);

        },
        timeout: 20000000,
        error: function() {
            var x = $('#' + divIdentificador);
            x.html("<br/><img width='70px' src='http://analisismercadopublico.cl/sistema/vista/img/load.gif'><br/>");

        }
    });
    return false;
}




function desaparecer()
{
    $("#success").hide("slow");
    $(".errores").hide("slow");

}

function sobreNotificacion() {
    document.getElementById("contentNotificacion").style.visibility = "visible";

}
function saleNotificacion() {
    document.getElementById("contentNotificacion").style.visibility = "hidden";

}
function clickNotificacion() {
    if (document.getElementById("notificaciones").style.left == "1%") {
        document.getElementById("notificaciones").style.left = "83%";
    } else {
        document.getElementById("notificaciones").style.left = "1%"
    }
}
