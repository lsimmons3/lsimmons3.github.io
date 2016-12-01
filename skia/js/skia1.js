function modaltest() {    
    var modal = document.getElementById('emailinput1');
    var btn = document.getElementById('button1');
    var span = document.getElementById('close')[0];
    
    btn.onclick = function() {
    modal.style.display = "block";
    }
    span.onclick = function() {
    modal.style.display = "none";
    }
   
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
} 