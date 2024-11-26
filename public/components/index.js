import { sidebar, head, gebi } from "./sidebar.js";





gebi('sidebar').innerHTML = sidebar();
gebi('headPg').innerHTML = head();



let sidebarElms = document.querySelectorAll('.sidebar ul li a');
sidebarElms.forEach((el) => {
    el.addEventListener('click', (ev) => {
        let lien = el.getAttribute("data-lien")
        sidebarElms.forEach((elm) => { elm.classList.remove("active"); })
        el.classList.add('active')
    })
})