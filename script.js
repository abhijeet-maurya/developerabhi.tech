let burgerclick=0;
function showmenu(){
    burgerclick++;
    var navItems = document.querySelectorAll('nav ul li');
    navItems.forEach(function(navItem) {
        if (navItem && navItem.classList) {
             navItem.classList.toggle('active');
         }
    });
    if(burgerclick%2==1){
        document.getElementById('bg4navul').setAttribute("style","display:block");
        document.getElementById('burgermenu').style.border="2px solid #7441e2";
    }
    else{
        document.getElementById('bg4navul').setAttribute("style","display:none");
        document.getElementById('burgermenu').style.border="";
    }
}
