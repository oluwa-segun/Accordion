//DOM CALLS
const li = document.querySelectorAll("li")

const arrow = document.querySelectorAll("#arrow")

console.log(arrow)

var j
for (j = 0; j < arrow.length; j++){
    arrow[j].addEventListener('click', function (){
        let turn = this.classList.toggle("turn");
        console.log(hover)
    })
}

let i;

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function() {
        let active = this.classList.toggle("active");
        const panel = this.nextElementSibling
      
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    })
    
}