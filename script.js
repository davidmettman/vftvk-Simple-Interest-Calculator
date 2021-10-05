function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    var total = interest + principal;
    
        document.getElementById("deposit").innerText=principal;
        document.getElementById("total").innerText=total;
        document.getElementById("time").innerText=year;
        document.getElementById("result").innerText=interest;
}
        
function updateRate() {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
        document.getElementById("irate").innerText=rateval;

}
