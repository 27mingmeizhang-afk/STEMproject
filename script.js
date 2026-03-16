let score = 0;

function addScore(){

score++;

document.getElementById("score").innerText = score;

}

function upload(){

let file = document.getElementById("fileInput").files[0];

if(file){

document.getElementById("status").innerText =
"Uploaded: " + file.name;

}

else{

document.getElementById("status").innerText =
"Please choose a file.";

}

}
