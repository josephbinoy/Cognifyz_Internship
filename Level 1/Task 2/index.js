var num1;
var num2;
var sum;
function add(){
    num1=parseInt(document.getElementById('num1').value);
    num2=parseInt(document.getElementById('num2').value);
    sum=num1+num2;
    document.getElementById('sum').value=sum;
}
var index=0;
var colours=['FF0000','FF8700','A7F05A','1C706B','89FFFA','8147B2','030D9B','F7FF00']
function changeColor(){
    index=(index+1)%colours.length;
    var hex=colours[index];
    document.getElementById('colour_btn').style.backgroundColor='#'+hex;
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    document.getElementById('colour_btn').style.color=(((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186)?'#'+newShade(hex,-99):'white';
}

const newShade = (hexColor, magnitude) => {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return (g | (b << 8) | (r << 16)).toString(16);
}

var date;
var hour,min;
function getAlert(){
    date=new Date();
    hours=date.getHours();
    min=date.getMinutes();
    if(hours<6)
        alert("Go back to sleep. Time is "+hours+": "+min+" right now!");
    else if(hours<12)
        alert("Good Morning. Have a great day ahead! Time is "+hours+": "+min+" right now!");
    else if(hours<15)
        alert("Good Afternoon. Going for lunch? Time is "+hours+": "+min+" right now!");
    else if(hours<20)
        alert("Good Evening. Hope you had a wonderful day. Time is "+hours+": "+min+" right now!");
    else
        alert("Good Night. Sleep dreams. Time is "+hours+": "+min+" right now!");

}
