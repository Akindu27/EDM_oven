const splash =document.querySelector('.splash');

//animation for page logo
document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    },2600)
})

let intro=document.querySelector('.intro');
let logo=document.querySelector('.name-header');
let logoSpan=document.querySelectorAll('.name');

//animation for the welcome message and page name
window.addEventListener('DOMContentLoaded',()=>{

    setTimeout(()=>{

        logoSpan.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx+1)*500)
        });

        setTimeout(()=>{
            logoSpan.forEach((span,idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx+1)*100)   
            })
        },2500);

        setTimeout(()=>{
            intro.style.top='-100vh'
        },3000)

    })
})

//linking the home page after splash screen to appear
setTimeout(function(){
    window.location.href="home.html";
},6000);

