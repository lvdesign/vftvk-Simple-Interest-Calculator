function compute()
{
    var d = new Date();
    //amount
    let p = document.getElementById("amount").value;
    // years
    let y = document.getElementById("years").value;
    // rate
    let r = document.getElementById("rate").value;
    //
    result  = document.getElementById("result");

   console.log(r);

    let calcul = p * r ;
    let year = d.getFullYear();
    let annee = year + y;

    console.log( 'deposit :' + p, 'interest :' + r, 'calcul:' + calcul, 'year:'+ annee, );

    result.innerHTML =`if your deposit ${p}, at an interest rate of ${y}.
    You will receive an amount of ${calcul} in the year ${annee}`;
    

}
        
function showValue(newValue) { 
    document.getElementById("rate").innerHTML=newValue +"%"; } 