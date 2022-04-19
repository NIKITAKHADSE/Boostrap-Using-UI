// Get the button
mybutton = document.getElementById("myBtn");


// 
window.onscroll= function() {scrollfunction()};

function scrollfunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
}

// user click the buttom, scroll to the top of the documnent

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}