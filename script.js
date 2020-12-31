function compute()
{
    var d = new Date();
    //amount
    let p = document.getElementById("principal").value;
    // years
    let y = document.getElementById("years").value;
    // rate
    let r = document.getElementById("rate").value;
    
    let deposit = p;
    let interest = y;
    let rating = r;

    let calcul = (p * r) / 100;
    let year = d.getFullYear();
    let annee = year + y;

    console.log( 'deposit :'+ deposit, 'interest :' +interest, 'calcul:' +calcul, 'year:'+ annee, 'rating :' +rating, );

    return p;
    

}
        