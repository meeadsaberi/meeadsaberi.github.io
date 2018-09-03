 var val=0;

        var timer=setInterval(function(){ 
          
          
          if (val <32){
            
            
            document.getElementById('myRange').value=val;
            document.getElementById("demo").innerHTML=time[val];
            slider.stepUp();
            
            val=val+1;
            
          }
          else 
          {
            val=0;
            
                      

            
          }
            




          }, 2000);
        $(document).ready(function(){
    $('#myRange').click(function(){
       clearInterval(timer);
       
    });
})


   