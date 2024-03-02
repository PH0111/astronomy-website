let textP_2 = document.getElementById('textP2');
let textP_3 = document.getElementById('textP3');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
  
    if(value > 400){
      textP_2.style.marginTop = '0%';
      textP_2.style.opacity = '1';
    }
    if(value < 200){
      textP_2.style.marginTop= '5%';
      textP_2.style.opacity = '.5';
    }
    
    if(value > 1100) {
      textP_3.style.marginTop = '0%';
      textP_3.style.opacity = '1';
    }
    if(value < 600) {
        textP_3.style.marginTop = '5%';
      textP_3.style.opacity = '.4';
    }  
});