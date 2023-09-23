const doubleclick = document.getElementById("button");

const randomColor = () =>
{
    let val = "1234567890ABCDEF";
    let cons = "#";
    for(let i = 0;i < 6; i++)
    {
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};

//console.log(randomColor());

function changeRandomColor()
{
    document.body.style.backgroundColor = randomColor();
    alert("GOOD TO GO")
}

button.addEventListener("click",changeRandomColor);