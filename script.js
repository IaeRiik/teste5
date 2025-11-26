const nome = document.querySelector("#name");
const numero = document.querySelector("#numero");
const  msg = document.querySelector("#msg");
const form = document.querySelector("#form");

form.addEventListener('submit',(e)=>{
let enviarForm = true;
    if(!nome.value  || !numero.value || !msg.value){
        alert("CAMPO VAZIO! TROCARA MENSAGEM")
    }else{
        alert("DEU CERTP! TROCA A PORRA DA MENSAGEM")
        renderizar()
    }

e.preventDefault()
})
const botaoTema = document.getElementById("tema");

// Carregar tema salvo
if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark-mode");
}

// Evento de clique para trocar o tema
botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Salvar preferência
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }
});


document.querySelectorAll("#jobs-item img").forEach(img =>{
   img.addEventListener("mouseenter", () => img.classList.add("zoom"));
    img.addEventListener("mouseleave",()=> img.classList.remove("zoom") );
});

document.querySelectorAll("#tecs").forEach(tecs =>{
   tecs.addEventListener("mouseenter", () => tecs.classList.add("zoom"));
    tecs.addEventListener("mouseleave",()=> tecs.classList.remove("zoom") );
});

let index = 0;
const galeria = document.querySelectorAll(".jobs-item");

function slideShow() {
  galeria.forEach(e => e.style.display = "none");
  galeria[index].style.display = "block";
  index = (index + 1) % galeria.length;
}

slideShow();
setInterval(slideShow, 3000);











document.getElementById("topo").addEventListener("click",function(){

    window.scrollTo({
        top:0, behavior: "smooth"
    })

})
