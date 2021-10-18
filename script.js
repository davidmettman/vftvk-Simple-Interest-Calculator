function compute()
{    
        principal = +document.getElementById("principal").value;
        years = +document.getElementById("years").value;
        rateval = +document.getElementById("rate").value;
        year = new Date().getFullYear()+years;
        interest = principal * rateval / 100 * years;
        total = interest + principal;
        document.getElementById("deposit").innerText = principal;
        document.getElementById("total").innerText=total;
        document.getElementById("time").innerText=year;
        document.getElementById("result").innerText=interest;
}

function updateRate()
{
    document.getElementById("rate_val").innerText=rateval;
}
       
