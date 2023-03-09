var btnTranslate = document.querySelector('#btn-translate');
var inptxt= document.querySelector('#txt-input');
var outputDiv = document.querySelector("#output");

var klingonUrl="https://api.funtranslations.com/translate/klingon.json";

function getTransalationURL(input){
    return klingonUrl +"?"+ "text="+input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

btnTranslate.addEventListener("click", 
    function clickEventHandler() {
        var txtinp=inptxt.value;

        fetch(getTransalationURL(txtinp)).then(response=>response.json())
        .then (json=> {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
           .catch(errorHandler)
})
        