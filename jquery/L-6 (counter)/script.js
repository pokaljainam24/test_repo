$("#counter").counter({
  autoStart: true,          
  duration: 100000 ,          
  countFrom: 10,    
  countTo: 30,               
  runOnce: false,    
  placeholder: "?",     
                      
  easing: "easeOutCubic",     
                              
  onStart: function() {},     
  onComplete: function() {},  
  // numberFormatter:            
  //   function(number) {
  //     return "$ " + number;
  //   }
});