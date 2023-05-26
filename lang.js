// var n;
// function reply_click(clicked_id){
//     n= clicked_id;

//     // FOR DOTHRAKI
//     if(n==1){
  
let page= document.body.id;
switch(page){

    case 'doth': 
    var txtInput= document.querySelector("#text-input");
var btnTranslate= document.querySelector("#btn-Translate")
var outputDiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/dothraki.json";

function getTranslationURL(text){
    return serverURL+"?"+ "text=" + text;
}

function errorHandler(error){
    console.log("error occured", error)
    alert("something went wrong with server! Try again after some time.")
}

function clickHandler(){
    var inputText=txtInput.value;  //taking input 


//call server for processing

fetch(getTranslationURL(inputText))
    .then(response =>response.json())
    .then( json => {
        var translatedText= json.contents.translated;
        outputDiv.innerText= translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)

break;

case 'val':
    var txtInput= document.querySelector("#text-input");
    var btnTranslate= document.querySelector("#btn-Translate")
    var outputDiv=document.querySelector("#output");
    
    var serverURL="https://api.funtranslations.com/translate/valyrian.json";
    
    function getTranslationURL(text){
        return serverURL+"?"+ "text=" + text;
    }
    
    function errorHandler(error){
        console.log("error occured", error)
        alert("something went wrong with server! Try again after some time.")
    }
    
    function clickHandler(){
        var inputText=txtInput.value;  //taking input 
    
    
    //call server for processing
    
    fetch(getTranslationURL(inputText))
        .then(response =>response.json())
        .then( json => {
            var translatedText= json.contents.translated;
            outputDiv.innerText= translatedText;
        })
        .catch(errorHandler)
    };
    
    btnTranslate.addEventListener("click", clickHandler)
    
    break;

    case 'sin':
        var txtInput= document.querySelector("#text-input");
        var btnTranslate= document.querySelector("#btn-Translate")
        var outputDiv=document.querySelector("#output");
        
        var serverURL="https://api.funtranslations.com/translate/sindarin.json";
        
        function getTranslationURL(text){
            return serverURL+"?"+ "text=" + text;
        }
        
        function errorHandler(error){
            console.log("error occured", error)
            alert("something went wrong with server! Try again after some time.")
        }
        
        function clickHandler(){
            var inputText=txtInput.value;  //taking input 
        
        
        //call server for processing
        
        fetch(getTranslationURL(inputText))
            .then(response =>response.json())
            .then( json => {
                var translatedText= json.contents.translated;
                outputDiv.innerText= translatedText;
            })
            .catch(errorHandler)
        };
        
        btnTranslate.addEventListener("click", clickHandler)
        
        break;


default:
    
}



























//     }











//     else if( n==2){
//         alert('hello');
//     }
//     else{
//         alert('bye');
//     }
// }