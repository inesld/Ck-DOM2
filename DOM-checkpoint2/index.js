



document.addEventListener('DOMContentLoaded', function(){
   
     var colorBox = document.getElementById('color-box')
     var changeColorBoxBtn = document.getElementById("change-color-btn")
   
   
     function getRandomColor () {
        var letters ='0123456789ABCDEF';
        let color = "#"
        for (let i = 0; i <=5 ; i++) {
           color = color + letters[Math.floor(Math.random()*16)]        
        }
        return color;
     }
  
      changeColorBoxBtn?.addEventListener("click", function () {
    
      
      if (colorBox) {
          colorBox.style.background = getRandomColor()
   
      }
      }
      )
   })