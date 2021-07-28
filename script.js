function checkData(){

var p=document.getElementById("principal").value;
if (p==0){
    alert('Please enter a positive number');
    document.getElementById("principal").focus();
    return false
}
}
function compute()
{
    var p = document.getElementById("principal").value;
    if (p<1){
        document.getElementById("amount_alert").innerHTML=`<span style="color:red">Please enter a positive number</span>`;
        alert("Please enter a positive number!")
        document.getElementById("principal").focus();
        return false
    }
    
    var r=document.getElementById("rate").value;
    var t=document.getElementById("years").value;
    var amount= p*r*t/100;
    var year = new Date().getFullYear()
    var futureYear=parseFloat(year)+parseFloat(t);

    document.getElementById("result").innerHTML = `If you deposit <mark> ${p}</mark>\
    ,at an interest rate of <mark> ${r}</mark> for <mark> ${t}</mark> years. You will receive an amount of <mark> ${amount}</mark>,in the year<mark> ${futureYear}</mark>`; 

}

function updateRate() 
{
    document.getElementById("rate_val").innerHTML = `${document.getElementById("rate").value}%`;
    
}