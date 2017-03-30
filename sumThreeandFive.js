var num = 1000; 
var sum = 0;
function summer(number){
  for(var i = 0; i < number; i++){
    if(i % 3 === 0){
      sum += i;       
    }else if(i % 5 === 0){
      sum += i;
    }
  } 
  console.log(sum); 
}; 

summer(num); 
