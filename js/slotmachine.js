var slot1;
var slot2;
var slot3;
var tid = 0;
var speed = 100;
var cash = 200;
var interval;
var images = 0;
var imgToBlink;
var cashLabel = document.getElementById("cashLabel");
var isSpinPressed = false;
var buttonToSpin = document.getElementById("startSpinner");
buttonToSpin.addEventListener("mousedown",toggleOn,false);
buttonToSpin.addEventListener("mouseup",toggleOff,false);


function toggleOn(){
    if(tid ==0)
        tid=setInterval(spin,speed);
}
function toggleOff(){
    if(tid !=0){
        clearInterval(tid);
        tid=0;
        checkRow(slot1);
        checkRow(slot2);
        checkRow(slot3);     
    }
}


function getRandom(){
 return Math.round(Math.random() * 5 + 1);
}

function spin(){ 
    clearInterval(interval);
    var img1row1 = getRandom();
    var img2row1 = getRandom();
    var img3row1 = getRandom();

 //   slot1 = [img1row1, img2row1, img3row1];

    var img1row2 = getRandom();
    var img2row2 = getRandom();
    var img3row2 = getRandom();

   // slot2 = [ img1row2, img2row2, img3row2];

    var img1row3 = getRandom();
    var img2row3 = getRandom();
    var img3row3 = getRandom();
    
   // slot3 = [ img1row3, img2row3, img3row3];


    var slot1Column1 = document.getElementById("slotrow1column1");
    var slot1Column2 = document.getElementById("slotrow1column2");
    var slot1Column3 = document.getElementById("slotrow1column3");

    var slot2Column1 = document.getElementById("slotrow2column1");
    var slot2Column2 = document.getElementById("slotrow2column2");
    var slot2Column3 = document.getElementById("slotrow2column3");



    var slot3Column1 = document.getElementById("slotrow3column1");
    var slot3Column2 = document.getElementById("slotrow3column2");
    var slot3Column3 = document.getElementById("slotrow3column3");



    slot1Column1.innerHTML="<img src='../img/slot" + img1row1 +".png' />";
    slot1Column2.innerHTML="<img src='../img/slot" + img2row1 +".png' />";
    slot1Column3.innerHTML="<img src='../img/slot" + img3row1 +".png' />";

   slot1 = [ slot1Column1,
    slot1Column2,
    slot1Column3
    ];

 

    
    slot2Column1.innerHTML="<img src='../img/slot" + img1row2 +".png' />";
    slot2Column2.innerHTML="<img src='../img/slot" + img2row2 +".png' />";
    slot2Column3.innerHTML="<img src='../img/slot" + img3row2 +".png' />";

    slot2 = [
            slot2Column1,
    slot2Column2,
    slot2Column3
    ];
        slot3Column1.innerHTML="<img src='../img/slot" + img1row3 +".png' />";
    slot3Column2.innerHTML="<img src='../img/slot" + img2row3 +".png' />";
    slot3Column3.innerHTML="<img src='../img/slot" + img3row3 +".png' />";

    slot3 = [slot3Column1,
    slot3Column2,
    slot3Column3];

    

    cashLabel.innerHTML="Cash: "+ cash;
    }

    
    


function checkRow(slot){
    console.log(slot);
    if(slot[0].innerHTML == slot[1].innerHTML && slot[1].innerHTML == slot[2].innerHTML){
        cash += 200;
        images = [slot[0],slot[1],slot[2]];
        blink(images);
        return true;

    }
    else{
        cash -= 0.5;
        return false;
    }
}

function blink(images){
    console.log(images);
    for (var i = 0; i < images.length; i++){
        var id = images[i];
        var imgToBlink = document.getElementById(id.id);
        setBlinkInterval(imgToBlink);
    }
}

        function setBlinkInterval(imgToBlink){interval = window.setInterval(function(){
        if(imgToBlink.style.visibility == "hidden"){
            imgToBlink.style.visibility = "visible";
            }
        else{
            imgToBlink.style.visibility ="hidden";
            }
        }, 900);}




