function toggleMenu() {
    collapse.classList.toggle("collapse"), collapse.classList.toggle("in")
}

function closeMenus() {
    for (var a = 0; a < dropdowns.length; a++) dropdowns[a].getElementsByClassName("dropdown-toggle")[0].classList.remove("dropdown-open"), dropdowns[a].classList.remove("open")
}

function closeMenusOnResize() {
    document.body.clientWidth >= 768 && (closeMenus(), collapse.classList.add("collapse"), collapse.classList.remove("in"))
}
for (var toggle = document.getElementsByClassName("navbar-toggle")[0], collapse = document.getElementsByClassName("navbar-collapse")[0], dropdowns = document.getElementsByClassName("dropdown"), i = 0; i < dropdowns.length; i++) dropdowns[i].addEventListener("click", function() {
    if (document.body.clientWidth < 768) {
        var a = this.classList.contains("open");
        closeMenus(), a || (this.getElementsByClassName("dropdown-toggle")[0].classList.toggle("dropdown-open"), this.classList.toggle("open"))
    }
});
window.addEventListener("resize", closeMenusOnResize, !1), toggle.addEventListener("click", toggleMenu, !1);