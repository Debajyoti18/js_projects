const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
//as buttons contains the nodelist .so we can iterate nodelist through the nodelist

buttons.forEach(element =>{
    element.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target);//gives the which color is clicked by thr mouse
        switch(e.target.id){
            case "grey":
                body.style.backgroundColor = e.target.id;
                break;
            case "white":
                body.style.backgroundColor = e.target.id;
                break; 
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;   
            case "pink":
                body.style.backgroundColor = e.target.id;
                break;                   
        }
    });
});