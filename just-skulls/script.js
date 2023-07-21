function move_right() {

    let block = document.getElementById("block_1");

    if (block.name != "walks") {

        block.name = "walks";
        block.src = "character/walks.gif";

        //technical info
        document.getElementById("condition").innerHTML = "The person " + block.name;

    }

    if (block.style.marginLeft != "600px") {

        block.style.marginLeft = String(parseInt(block.style.marginLeft) + 5) + "px";

        //technical info
        document.getElementById("margin").innerHTML = "Margin Left is " + block.style.marginLeft;
    
    }

    else if (parseInt(block.style.marginTop) <= parseInt(document.getElementsByClassName("board")[0].style.height) - 140) {

       block.style.marginLeft = 0 + "px";
       block.style.marginTop =  (parseInt(block.style.marginTop) + 80) + "px";
       //technical info
       document.getElementById("condition").innerHTML = "The person " + block.name; 
    }

    hp_loss();
    finish();
}

function move_left() {

    let block = document.getElementById("block_1");

    if (block.name != "walks_back") {

        block.name = "walks_back";
        block.src = "character/walks_back.gif";

        //technical info
        document.getElementById("condition").innerHTML = "The person " + String(block.name).replace("_", " ");

    }

    if (block.style.marginLeft != "0px") {

        block.style.marginLeft = String(parseInt(block.style.marginLeft) - 5) + "px";
        //technical info

        document.getElementById("margin").innerHTML = "Margin Left is " + block.style.marginLeft;

    }

    else if (parseInt(block.style.marginTop) >= 70) {

        //technical info
        document.getElementById("condition").innerHTML = "The person " + String(block.name).replace("_", " ");

        block.style.marginLeft = 600 + "px";
        block.style.marginTop =  (parseInt(block.style.marginTop) - 80) + "px"; 
    }

    hp_loss();

}

function move(event) {

    let key = event.key;

    // technical info
    document.getElementById("text").innerHTML = "The key is pressed: " + key;

    if (key == "ArrowRight") move_right()

    else if (key == "ArrowLeft") move_left();

}

function stop(event) {
    
    let block = document.getElementById("block_1");
    let key = event.key;

    // technical info
    document.getElementById("text").innerHTML = "The key is released: " + key;

    if (key == "ArrowRight") {

        block.src = "character/stands.jpg";
        block.name = "stands";

        //technical info
        document.getElementById("condition").innerHTML = "The person " + block.name;

    }

    else if (key == "ArrowLeft") {

        block.src = "character/stands_back.jpg";
        block.name = "stands_back";

        //technical info
        document.getElementById("condition").innerHTML = "The person " + String(block.name).replace("_", " ");

    }

}

function reload_page() {
   location.reload();
}

let count_losses = 0;

function hp_loss() {

    let skull_num = document.getElementsByClassName("skull").length;
    let block = document.getElementById("block_1");

    for (let i = 1; i <= skull_num; ++i) {

        let skull = document.getElementById("skull_" + i);
        if ((parseInt(skull.style.marginTop) == parseInt(block.style.marginTop) + 30 ) && (parseInt(block.style.marginLeft) + parseInt(block.style.width) == parseInt(skull.style.marginLeft) + 60))    {
            
            count_losses += 1;

            //technical info
            document.getElementById("hp_condition").innerHTML = "Your losses are: " + count_losses;
            break;
        } 
    }

    if (count_losses == 3) {
        document.getElementById("hp_text").innerHTML = "GAME OVER";
        setTimeout(reload_page, 2000);
    }

    if (count_losses > 0) document.getElementById("hp_" + count_losses).style.display = "none";

}

function rand_int(min, max) {
    
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);

}

function flicker() {
    
    let skull_num = document.getElementsByClassName("skull").length + document.getElementsByClassName("invisible").length;
    
    for (let i = 1; i <= skull_num; ++i) {
        if (document.getElementById("skull_" + i).className == "skull") document.getElementById("skull_" + i).className = "invisible"
        else document.getElementById("skull_" + i).className = "skull";
    }
}

function generate_skulls() {
    
    num_of_skulls = rand_int(5, 10);

    while (true) {
        document.getElementById("skull_1").style.marginLeft = rand_int(100, 600) + "px"; 
        if (parseInt(document.getElementById("skull_1").style.marginLeft) % 5 == 0) break;
    }

    mt = 40; //начальное значение MarginTop для черепков
    for (let i = 1; i <= num_of_skulls; ++i) {

        new_skull = document.getElementsByClassName("skull")[0].cloneNode();
        new_skull.id = "skull_" + (i + 1);

        while (true) {
            new_skull.style.marginLeft = rand_int(100, 550) + "px"; 
            if (parseInt(new_skull.style.marginLeft) % 5 == 0) break;
        }
    
        new_skull.style.marginTop = mt + "px";
        mt += 80;
        document.getElementsByClassName("board")[0].appendChild(new_skull);
        if (mt > 360) mt = 40;
    }

    //черепа начинают моргать
    setInterval(flicker, 1000);
}

function finish() {

    let block = document.getElementById("block_1");

    if ((block.style.marginLeft == "600px") && (block.style.marginTop == "330px")) {

        document.getElementById("hp_text").innerHTML = "CONGRATS!";
        setTimeout(reload_page, 2000);
    }
}

addEventListener("keydown", move);
addEventListener("keyup", stop);
addEventListener("DOMContentLoaded", generate_skulls);