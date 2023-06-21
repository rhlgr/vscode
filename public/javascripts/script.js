var filecreateicon = document.querySelector("#filecreate")
var foldercreateicon = document.querySelector("#foldercreate")

function turnOff(){
var allelems = [...document.querySelectorAll(".formfile")]
allelems.forEach(function(elem){
    elem.style.display = "none"
})
}

filecreateicon.addEventListener("click", function(){
turnOff()
    document.querySelector("#fileform").style.display= "initial"
});

foldercreateicon.addEventListener("click", function(){
turnOff()
    document.querySelector("#folderform").style.display= "initial"
});