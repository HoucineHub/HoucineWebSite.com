var typed = new Typed(".typing" , {
    strings:["","Intern in Ntic Rabat Hay Riyad","Web Designer","Front-End Developer","Graphic Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    for(let i=0 ; i<totalNavList ; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function(){
            for(let j=0 ; j<totalNavList ; j++){
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
        })
    }

const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click",()=>{
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
        }
        

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll",navHighlighter);
function navHighlighter(){
    let scrollY = window.pageYOffset;
    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
        if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
            document.querySelector('.nav a[href*='+ sectionId + ']').classList.add("active")
        }
        else{
            document.querySelector('.nav a[href*='+ sectionId + ']').classList.remove("active")
        }
    })
}

// const st = ScrollReveal({
//     origin: 'left',
//     distance: '80px',
//     duration: 2000,
//     reset: false     
// })

// st.reveal('.nav',{delay:200})
// st.reveal('.logo',{delay:200})
// st.reveal('.nav-toggler',{delay:200})




const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false    
})

sr.reveal('.hello',{delay: 100})
sr.reveal('.home-info',{delay: 200})
sr.reveal('.home-img',{delay: 300})
sr.reveal('.personal-info',{delay: 300})
sr.reveal('.about-text',{delay: 300})
sr.reveal('.contact-title',{delay: 300})
sr.reveal('.contact-sub-title',{delay: 300})






const sp = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset:false  
})

sp.reveal('.section-title',{delay: 200})
sp.reveal('.service-item',{delay: 200})
sp.reveal('.portfolio-heading',{delay: 200})
sp.reveal('.education',{delay: 200})


const sl = ScrollReveal({
    origin: 'right',
    distance: '30px',
    duration: 2000,
    reset: false
})

sl.reveal('.portfolio-item',{delay: 200})
sl.reveal('.skills',{delay: 200})
sl.reveal('.experience',{delay: 200})
sl.reveal('.form-item',{delay: 200})


const sa = ScrollReveal({
    origin: 'right',
    distance: '50px',
    duration: 2000,
    reset: false
})

sa.reveal('.contact-info-item',{delay: 200})

