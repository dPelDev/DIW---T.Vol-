var check=document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    console.log(check.checked);
    let id=check.checked;

   if(id==true){
        location.href="indexen.html"
    }else{
        location.href="index.html"
     }
}