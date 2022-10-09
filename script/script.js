console.log("hello there");

const menuButton = document.querySelector(".menu");
const navBar = document.querySelector(".nav");

menuButton.addEventListener('click', () => {
    if (navBar.classList.contains("show-nav")) {
        navBar.classList.remove("show-nav");
        navBar.classList.add("hide-nav");
    } else {
        navBar.classList.add("show-nav");
        navBar.classList.remove("hide-nav");
    }

})

const items = document.querySelectorAll(".item");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show-item", entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    },
    {
        threshold: 0.5
    }
)

items.forEach(item => {
    observer.observe(item)
})