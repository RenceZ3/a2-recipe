let btnCollapse = document.getElementsByClassName("collapse-item");
let viewDetails = document.querySelector('.ingredients');

for(let i = 0; i<btnCollapse.length; i++) {
    console.log(btnCollapse[i]);

    btnCollapse[i].addEventListener("click", function(){
        this.classList.toggle("active");
        let content = this.nextElementSibling;

        if(content.style.maxHeight) {
            content.style.maxHeight = null;
        }else {
            content.style.maxHeight = content.scrollHeight + 900 + "px";
            document.body.scrollTop = 0;
        }
    });
}


function crossLabel() {
    let temp = document.querySelectorAll('.collapse-item');
    let idName = document.querySelectorAll('.ingredients label *[id]');
    let lblId = document.querySelectorAll(".ingredients label:not(input)");

    for(let i=0; i<idName.length; i++) {
        let listId = idName[i];

        listId.addEventListener("change", function() {
            if(this.checked) {
                document.querySelector(`#${this.parentElement.id}`).style.cssText = "text-decoration: line-through";
            }else {
                document.querySelector(`#${this.parentElement.id}`).style.cssText = "text-decoration: none";
            }
        });
        
    }
}


crossLabel();

