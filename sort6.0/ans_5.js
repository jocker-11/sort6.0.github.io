document.getElementById("ans_submit").addEventListener("click", test);
var lookans = document.getElementById("look_ans");
var i = 0;

function test(){
    var x_1 = document.getElementById("if_1").value;
    var x_2 = document.getElementById("if_2").value;

    var ans_1 = "if(box[n]>box[n+1]){";
    var ans_2 = "}";

    if(x_1 == ans_1){
       if(x_2 == ans_2){
            document.getElementById("if_1").style.backgroundColor="black";
            document.getElementById("if_2").style.backgroundColor="black";
            alert("答對了");
        }
        else{
            alert("再想想喔");
            document.getElementById("if_1").style.backgroundColor="black";
            document.getElementById("if_2").style.backgroundColor="#C62828";
        }
    }
    else{
        alert("再想想喔");
        document.getElementById("if_1").style.backgroundColor="#C62828";
    }
}

lookans.onclick=function(){
    i++;
    if(i%2 == 1){
        document.getElementById("if_1").value = "if(box[n]>box[n+1]){";
        document.getElementById("if_2").value = "}";
    }
    else{
        document.getElementById("if_1").value = "// if判斷式";
        document.getElementById("if_2").value = "// if的大括弧";
    }  
}