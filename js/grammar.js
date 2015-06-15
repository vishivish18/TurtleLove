function checkCommand(){


if(document.getElementById("commandBox").value.toUpperCase() == "RT 90")
{
console.log('in here');
$('#commandBox').val("in here"); 


}
else if(document.getElementById("commandBox").value.toUpperCase() == "LT 90")
{
console.log('in here');
    

}    
    
    else{
    console.log("error");
    }

}

