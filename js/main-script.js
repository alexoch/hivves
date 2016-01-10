var logg=document.getElementById("logg");
var inp=document.getElementById("inp");
var out=document.getElementById("out");
var last_coordx=null;
var last_coordy=null;
function getCoords(evt,exp){
    if(exp!=="move"){
    logg.innerHTML+=("<hr>"+"X value: " + evt.clientX  +
    " Y value: " + evt.clientY + "<br>"+
    "event: " +exp+ "<br>"+"<hr>");
    }else{
        logg.innerHTML+=("X value: " + evt.clientX  +
    " Y value: " + evt.clientY + "<br>");
    }
}

function paintCoords(evt,exp){
    coorX=evt.clientX+out.offsetLeft;
    coorY=evt.clientY+out.offsetTop;
    console.log(coorX+" "+coorY);
    if (out.getContext) {
        var ctx = out.getContext("2d");
        if (exp==="enter"){
            ctx.beginPath();
            ctx.moveTo(coorX,coorY);
            last_coordx=coorX;
            last_coordy=coorY;
        }
        if (exp==="move"){
            ctx.lineTo(coorX,coorY);
             ctx.stroke();
            last_coordx=coorX;
            last_coordy=coorY;
        }
        if (exp==="out"){
            ctx.lineTo(coorX,coorY);
            ctx.stroke();
            last_coordx=null;
            last_coordy=null;
        }
    }
    
}

    inp.addEventListener("mouseenter", function( event ){
        // highlight the mouseenter target
        event.target.style.backgroundColor= "aqua";
        var exp="enter";
        getCoords(event,exp);    
        paintCoords(event,exp);
        // reset the color after a short delay
        setTimeout(function() {
          event.target.style.backgroundColor = "";
        }, 500);
    }
    ,false);
    inp.addEventListener("mousemove", function( event ){
        // highlight the mouseenter target
        var exp="move";
        getCoords(event,exp);  
        paintCoords(event,exp);
    }
    ,false);
    inp.addEventListener("mouseout", function( event ){
        // highlight the mouseenter target
        event.target.style.backgroundColor= "orange";
        var exp="out";
        getCoords(event,exp);  
        paintCoords(event,exp);    
        // reset the color after a short delay
        setTimeout(function() {
          event.target.style.backgroundColor = "";
        }, 500);
    }
    ,false);