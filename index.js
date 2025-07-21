let  textArea = document.querySelector("#textBox")
let Btn = document.querySelector(".Btn")
let main = document.querySelector("main")
let hide =document.querySelector(".logoBottom")

Btn.disabled=true;
textArea.addEventListener("input", () => {
if (textArea.value === "") {
  Btn.disabled = true;
} else {
  Btn.disabled = false;
}
});



Btn.addEventListener("click",()=>{



  let el= document.createElement("div")
  el.setAttribute("class", "taskAdded")
  el.style.border="1px solid grey"
  el.style.margin="1rem"
  el.style.borderRadius="3px"
  el.style.width="100%"
  el.style.padding=".2rem 1rem"
  el.textContent= textArea.value
  textArea.value=""
Btn.disabled = textArea.value.trim() === ""; // <-- this line overrides everything

let check= document.createElement("div")
check.innerHTML = `<input type="checkbox" id="myCheck">
                 <label for="myCheck"></label>`;

check.addEventListener("change", () => {
    el.style.textDecoration ="line-through";
  });



let bin = document.createElement("div")
bin.innerHTML = `<i class="fa-solid fa-trash" style="color: #696969;"></i>`;
  
bin.addEventListener("click", () => {
  el.remove();
});


  el.prepend(check)
  el.append(bin)
  el.style.display="flex"
  el.style.justifyContent="space-between"
  main.append(el)
  hide.style.display="none";


})






