@@ -25,11 +25,19 @@ function checker(){
        if(ps1=="X" && ps1==ps2 && ps0==ps1){
            msg.innerText='winner is X';
            msgcon.classList.remove("hide");
            boxes.forEach((box)=>{
                     box.disabled=true;
                });

        }
        if(ps1=="O" && ps1==ps2 && ps0==ps1){
            msg.innerText='winner is O';
            msgcon.classList.remove('hide');
            boxes.forEach((box)=>{
                     box.disabled=true;
                });
        }
    }
}
