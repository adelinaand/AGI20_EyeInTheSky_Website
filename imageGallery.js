$(document).ready(function () {
    
    var modal = document.getElementById("ig-modal");
    var modalImg = document.getElementById("modal-img");

    $(".ig-img").click(function(event) {
        modalImg.src = $(event.target).attr('src');
        modal.style.display = "block";
    });
    
    var span = document.getElementById("close-img");

    function nextImg(n){

    }

    span.onclick = function() {
        modal.style.display = "none";
    } 
})