let stone = document.getElementById("imgg")
let paper = document.getElementById("imgg1")
let scissor = document.getElementById("imgg2")


stone.addEventListener("click",function(){
    if (stone.style.display === "block") {
        stone.style.display = "none";
        scissor.style.display = "none";
    } else {
        stone.style.display = "none";
        scissor.style.display = "none";
    }
})

paper.addEventListener("click",function(){
    if (paper.style.display === "block") {
        paper.style.display = "none";
        stone.style.display = "none";
    } else {
        paper.style.display = "none";
        stone.style.display = "none";
    }
})


scissor.addEventListener("click",function(){
    if (paper.style.display === "block") {
        paper.style.display = "none";
        scissor.style.display = "none";
    } else {
        paper.style.display = "none";
        scissor.style.display = "none";
    }
})





document.addEventListener("DOMContentLoaded", function() {
    let refreshButton = document.getElementById("refreshbtn"); 

    refreshButton.addEventListener("click", function() {
        location.reload();
    });
});
