    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    var total = interest + principal;
    var rateval = document.getElementById("rate").value;

function compute() {
    
        document.getElementById("deposit").innerText=principal;
        document.getElementById("total").innerText=total;
        document.getElementById("time").innerText=year;
        document.getElementById("result").innerText=interest;
}
        
function updateRate() {
        
        document.getElementById("rate_val").innerText=rateval;

}
