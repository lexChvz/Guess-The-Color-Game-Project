var numOfBoxes = 6;
var colors = generateRandomColor(numOfBoxes);
var box = document.querySelectorAll(".box");
var correctColor = pickColor();
var rgbDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.getElementsByTagName("h1")[0];
var newGame = document.querySelector("button");
var modes = document.querySelectorAll(".mode");

for (var i = 0; i < modes.length; i++)
{
    modes[i].addEventListener("click", function(){
        modes[0].classList.remove("selected");
        modes[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy")
        {
            numOfBoxes = 3;
        }
        else
        {
            numOfBoxes = 6;
        }
        reset();
    });
}

function reset()
{
    colors = generateRandomColor(numOfBoxes);
    correctColor = pickColor();
    rgbDisplay.textContent = correctColor;
    message.textContent = "";
        for(var i = 0; i < box.length; i++)
        {
            if(colors[i])
            {
                box[i].style.display = "block";
               box[i].style.backgroundColor = colors[i]; 
            }
            else
            {
                box[i].style.display = "none"
            }
        }
        h1.style.backgroundColor = "rgb(200, 95, 50)";
}

rgbDisplay.textContent = correctColor;
for(var i = 0; i < box.length; i++)
{
    box[i].style.backgroundColor = colors[i];
    box[i].addEventListener("click", function()
    {
        var selectedColor = this.style.backgroundColor;

        if(selectedColor === correctColor)
        {
            message.textContent = "Correct!";
            changeColors(selectedColor);
            h1.style.background = selectedColor;
            newGame.textContent = "Play Again?";
            newGame.addEventListener("click", function(){
                newGame.textContent = "New Colors";
            });
        }
        else
        {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!";
        };
    });
} 
newGame.addEventListener("click", function()
{
    reset();
});

function changeColors(color)
{
    for(var i = 0; i < box.length; i++)
    {
        box[i].style.backgroundColor = color;
    }
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
function generateRandomColor(num)
{
    var arr = [];
    for(var i = 0; i < num; i++)
    {
        arr.push(randomColor());
    }
    return arr;
}

