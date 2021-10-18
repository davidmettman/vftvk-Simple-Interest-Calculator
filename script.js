
years = parseInt(document.getElementById("years").value);
rateval = parseInt(document.getElementById("rate").value);
year = new Date().getFullYear()+years;
interest = principal * rateval / 100 * years;
total = interest + principal;

function compute()
{    
        principal = parseInt(document.getElementById("principal").value);
        document.getElementById("deposit").innerText = principal;
        document.getElementById("total").innerText=total;
        document.getElementById("time").innerText=year;
        document.getElementById("result").innerText=interest;
}

function updateRate()
{
    document.getElementById("rate_val").innerText=rateval;
}
       
