// javascript code for temperature convention


function resetinput(){
    document.getElementById("input").value='';
    document.getElementById("output").value='';
}


function ctf(){
    let c=document.getElementById("input").value;
    document.getElementById("output").innerHTML=c+" °C  =  " +((c*9/5)+32)+" °F";
}


function ftc(){
    let f=document.getElementById("input").value;
    document.getElementById("output").innerHTML=f+" °F  =  "+((f-32)*5/9)+" °C";
}