let numberDisplay = document.getElementById('display'); // store the screen values
let btns = document.querySelectorAll('button'); // catches all the button 
let str = ""; // take a empty string
btns.forEach(element => {  // take  a loop for each buttons called forEach() 
    element.addEventListener('click',(b)=>{ // using a addListener   
        if(b.target.innerText == '='){  // using a logic if anyone click "=" button
            try{
                str = String(eval(str))
                numberDisplay.value = str;
            }
            catch(error){
                numberDisplay.value = "Error"; // we using a try and catch for avoid the errors 

            }
        }
        else if(b.target.innerText == 'AC') { //// using a logic if anyone click "AC" button
          str = '';
          numberDisplay.value = str;
        }
        else if(b.target.innerText == 'DEL'){ // using a logic if anyone click "DEL" button
           str = str.substring(0,str.length-1);
           numberDisplay.value  = str;
        }
        else{  // using a logic if anyone input the values 
            str += b.target.innerText;
            numberDisplay.value = str;
        }
    })
});
let blackMode = document.getElementById('mode')
blackMode.addEventListener('click',function(){
   let  bodyColor = document.body;
    bodyColor.style.backgroundColor = 'black';
})
let whiteMode = document.getElementById('mode_1')
whiteMode.addEventListener('click',function(){
   let  bodyColor = document.body;
    bodyColor.style.backgroundColor = '#96CDFF';
})