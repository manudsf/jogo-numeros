var msg1 = document.getElementById("message1")  
 var msg2 = document.getElementById("message2")  
 var msg3 = document.getElementById("message3")  
 var answer = Math.floor(Math.random()*100) + 1;  
 var no_of_guesses = 0;  
 var guesses_num = [];  
 function play(){  
   var user_guess = document.getElementById("guess").value;  
   if(user_guess < 1 || user_guess > 100 ){  
     alert("Não seja bobo! Insira um número de 1 a 100");  
   }  
   else{  
     guesses_num.push(user_guess);  
     no_of_guesses+= 1;  
     if(user_guess < answer){  
  msg1.textContent = "Vixi! Ta frio."  
  msg2.textContent = "Nº de tentativas: " +  
  no_of_guesses;  
  msg3.textContent = "Número adivinhado foi: " +  
  guesses_num;  
     }  
     else if(user_guess > answer){  
       msg1.textContent = "IH! Muito quente."Y"
       msg2.textContent = "Nº de tentativas: " +  
       no_of_guesses;  
       msg3.textContent = "Número adivinhado foi: " +  
       guesses_num;  
     }  
     else if(user_guess == answer){  
       msg1.textContent = "YAYYY!! Você ganhou!!!!"  
       msg2.textContent = "O número era" + answer  
       msg3.textContent = " Você tentou" +  no_of_guesses  +"números";   
     }  
   }  
 }  
