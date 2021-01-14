$(document).ready(function () {
    
    var modal = document.getElementById("vid-modal");
    var modalVid = document.getElementById("modal-vid");

    $(".vg-img").click(function(event) {
        modalVid.src = "https://www.youtube-nocookie.com/embed/-i424bKe-kY";
        //modal.style.display = "block";
    });
    
    var span = document.getElementById("close-vid");

    function nextImg(n){

    }

    span.onclick = function() {
        modal.style.display = "none";
    } 
})