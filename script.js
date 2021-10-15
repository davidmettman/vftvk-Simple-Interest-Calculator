principal = document.getElementById("principal").value;
interest = principal * years * rate /100;
year = new Date().getFullYear()+parseInt(years);
total = interest + principal;
rateval = document.getElementById("rate").value;

function compute() {
        document.getElementById("deposit").innerText=principal;
        document.getElementById("total").innerText=total;
        document.getElementById("time").innerText=year;
        document.getElementById("result").innerText=interest;
}
        
function updateRate() 
{
    document.getElementById("rate_val").innerText=rateval;
}
