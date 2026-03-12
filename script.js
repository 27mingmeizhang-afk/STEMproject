let score = 0;

function increaseScore(){
score++;
document.getElementById("score").innerText = score;
}

function uploadFile(){

let file = document.getElementById("fileUpload").files[0];

if(file){
document.getElementById("uploadStatus").innerText =
"File uploaded: " + file.name;
}else{
document.getElementById("uploadStatus").innerText =
"Please choose a file first.";
}

}
