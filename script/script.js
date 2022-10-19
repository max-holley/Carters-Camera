console.log("hello there");

const menuButton = document.querySelector(".menu");
const navBar = document.querySelector(".nav");
const barOne = document.querySelector(".bar1");
const barTwo = document.querySelector(".bar2");
const barThree = document.querySelector(".bar3");

// menuButton.addEventListener('mouseout', () => {

//         navBar.classList.remove("show-nav");
//         navBar.classList.add("hide-nav");
        
//         barOne.classList.remove("bar1-show");
//         barOne.classList.add("bar1-return");

//         barTwo.classList.remove("bar2-show");
//         barTwo.classList.add("bar2-return");

//         barThree.classList.remove("bar3-show");
//         barThree.classList.add("bar3-return");
// })
//     menuButton.addEventListener('mouseover', () => {
//         navBar.classList.add("show-nav");
//         navBar.classList.remove("hide-nav");

//         barOne.classList.add("bar1-show");
//         barOne.classList.remove("bar1-return");

//         barTwo.classList.add("bar2-show");
//         barTwo.classList.remove("bar2-return");

//         barThree.classList.add("bar3-show");
//         barThree.classList.remove("bar3-return");
//     })


menuButton.addEventListener('click', () => {
    
        if (navBar.classList.contains("show-nav")) {
            navBar.classList.remove("show-nav");
            navBar.classList.add("hide-nav");
            
            barOne.classList.remove("bar1-show");
            barOne.classList.add("bar1-return");
    
            barTwo.classList.remove("bar2-show");
            barTwo.classList.add("bar2-return");
    
            barThree.classList.remove("bar3-show");
            barThree.classList.add("bar3-return");
        } else {
            navBar.classList.add("show-nav");
            navBar.classList.remove("hide-nav");
    
            barOne.classList.add("bar1-show");
            barOne.classList.remove("bar1-return");
    
            barTwo.classList.add("bar2-show");
            barTwo.classList.remove("bar2-return");
    
            barThree.classList.add("bar3-show");
            barThree.classList.remove("bar3-return");
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
        threshold: 0.2
    }
)

items.forEach(item => {
    observer.observe(item)
})