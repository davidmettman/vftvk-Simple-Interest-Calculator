function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    var total = interest + principal;
    
        document.getElementById("deposit").innerText=principal;
        document.getElementById("irate").innerText=rate;
        document.getElementById("total").innerText=total;
}
        
function updateRate() {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;

}
