let c=0;
// rock(1)=1,paper(2)=2,sciss=3
//rock(1)-paper(2),,,,rock(1)-scissor(3)(3),,,
// rock(1) > scissor(3)(3)
// <br> 
//    rock(1) < paper(2)
//    <br>
//    paper(2)< scissor(3)(3)
// -----------
// rock(1) paper(2)-----loss
// rock(1) Scrissor3 ----win
// paper(2) rock(1)---win
// paper(2) Scrissor3--loss
// scissor(3) rock(1) --loss
// scissro paper(2)
function sc(){
    c=3;
}
function rock(){
    c=1;
}
function paper(){
    c=2;
}
function fun(){
    if(c==0){
        alert("selct your option");
        return;
    }
    let x = Math.floor((Math.random() * 3) + 1);
    {
    if(x==1){
        alert("i chose rock");
    }
    else if(x==2){
        alert("ic hose paper");
    }
    else if(x==3){
        alert("i chose scissro");
    }
}
{

}
    if(x==c){
        alert("it is a draw");
    }
    else if((c==1 && x==3) || c==2 && x==1){
        alert("you won")
    }
    else{
        alert("u lose");
    }


}