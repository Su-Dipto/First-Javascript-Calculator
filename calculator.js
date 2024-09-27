const display=document.getElementById("display")

function append(tap){

 display.value+=tap;

}
function clearDisplay(){
   
    display.value = "";

}

function result(){

    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error found"}
    

}

function del(){
    display.value=display.value.slice(0,-1)

}
function credito(){
display.value="Dev:Sudipto"
}