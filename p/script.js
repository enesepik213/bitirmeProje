const btn=document.querySelectorAll(".btn")
const baslik=document.querySelectorAll(".card-title")
const fiyat=document.querySelectorAll(".fiyat")
const box=document.querySelector(".box")
const game=document.querySelector(".game")
const trash=document.querySelector(".fa-trash")
const total=document.querySelector(".total")


const bucket=document.querySelector(".btn-cart")




for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener("click",()=>{
        const title=baslik[i].textContent
        const price=fiyat[i].textContent
        let span1=document.createElement("div")
        let span2=document.createElement("div")

        span1.innerHTML=title
        span2.innerHTML=price

        span2.classList.add="inactive"

        game.appendChild(span1)
        game.appendChild(span2)


 
    })
    
}

bucket.addEventListener("click",()=>{
    box.classList.toggle("active")
})

trash.addEventListener("click",()=>{
   game.innerHTML=" "
})
const navShow = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
  
    burger.addEventListener('click',()=>{
      nav.classList.toggle('nav-active');
  
      links.forEach((link,index)=>{
        if (link.style.animation) {
          link.style.animation = '';
        }else{
          link.style.animation = `linksFade 0.5s ease forwards ${index / 5 + 0.2}s`;
        }
      });
  
      burger.classList.toggle('close');
    });
  }
  
  navShow();
  