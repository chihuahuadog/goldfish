//function to find tank costs
         function tank() {
          var y = Number(document.getElementById("gallons").value);
           var z = y * 1.5+ " dollars";
           document.getElementById("tank").value=z;
         }
         //function to find fish costs
         function number() {
           var x = Number(document.getElementById("fish").value);
           var r = x * 8 + " dollars";
           document.getElementById("number").value=r;
           }
         //function to find food costs
         function food() {
           var a = Number(document.getElementById("weight").value)
           var h = a*2;
           document.getElementById("food").value=h;
         } 
         //function to find filter costs
         function filter(){
           var c =Number(document.getElementById("gallons").value);      
           var d = c * 1.2 + " dollars";
           document.getElementById("filter").value=d;
           }
         //function to find total costs
         function total(){
         var t =Number(document.getElementById("gallons").value);    
         var f = Number(document.getElementById("fish").value);
         var k = Number(document.getElementById("weight").value)
         var p =  t * 1.5;
         var q =  f * 8;
         var j =  k * 2;
         var s =  t * 1.2;
         var i = p + q + s + k + " dollars";
           document.getElementById("total").value=i;
          }