function contact(){
alert("Whatsapp no : 9433567410     or     Mail id = raaz1535y@gmail.com")
}

//  SITE UNDER CONSTRUCTION 

function construction(){
    alert("This Site is Under Construction")
}

// SITE UNDER CONSTRUCTION CLOSE 


  // SCREEN DETECTOR 

if(window.innerWidth < 1000){
    
}
window.addEventListener("load" ,function(){
    let minWidth = 1000;
    let alertkey ="screenAlert"
    if(window.innerWidth < minWidth && ! this.sessionStorage.getItem(alertkey)){
        alert("PHONE SCREEN DETECTED :\n\nSwitch to desktop site or use Landscape mode for better experience");
        sessionStorage.setItem(alertkey,"true");
    }
});

// SCREEN DETECTOR CLOSE 

