// Function to compute simple interest
function compute()
{    
        //Retrieving input values
        principal = +document.getElementById("principal").value;
        years = +document.getElementById("years").value;
        rateval = +document.getElementById("rate").value;
        year = new Date().getFullYear()+years;
        
        //Calculating interest and total (principal + interest)
        interest = principal * rateval / 100 * years;
        
        //Setting the label values
        if(principal < 1)
        {
                alert("Enter a positive number");
                document.getElementById("principal").focus();
        }
        else {
                document.getElementById("output_section").style.visibility = visible;
                document.getElementById("deposit").innerText = principal;
                document.getElementById("time").innerText=year;
                document.getElementById("result").innerText=interest;
                document.getElementById("irate").innerText=rateval;
        }
}

//Function to update interest rate
function updateRate()
{
    rateval2 = +document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval2;
}
       
