$(document).ready(function () {
    
    var modal = document.getElementById("ig-modal");
    var modalImg = document.getElementById("modal-img");
    //var modal = $("#ig-modal")
    $(".ig-img").click(function(event) {
        modalImg.src = $(event.target).attr('src');
        modal.style.display = "block";
        //modalImg.src = this.src;
    });
    
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    } 
})