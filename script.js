
$(document).ready(function(){

    $('#img-menu').click(function(){
        var newdiv = document.createElement('div');
        newdiv.className = "newdiv"
        newdiv.innerHTML = ""
        $('.header').append(newdiv);
        console.log('hello');
    });

});