const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displaValue");

decrementBtn.addEventListener("click", () =>
{
    const value = Number(displayValue.innerText);
    if(value>0)
    {
        displayValue.innerText = value - 1;
    }
    else
    {
        alert("Invaild");
    }
});

incrementBtn.addEventListener("click", () => 
{
    const value = Number(displayValue.innerText);
    if (value >= 10) {
        alert("Invalid");
    } else {
        displayValue.innerText = value + 1;
    }
});
resetBtn.addEventListener("click",()=>
{
    displayValue.innerText = 0;
});