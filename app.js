
function add(){
var text = document.getElementById('input').value;

if(text == "" || text == " "){
    alert("Aise Nhh Chlega..")
}
else{
var print = document.getElementById('demo').innerHTML = text;
return document.getElementById("input").value = "";

}
}

