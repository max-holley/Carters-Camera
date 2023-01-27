const menuButton = document.querySelector(".menu");
const navBar = document.querySelector(".nav");
const barOne = document.querySelector(".bar1");
const barTwo = document.querySelector(".bar2");
const barThree = document.querySelector(".bar3");

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

//This section opens the modal and populates it with the image that was clicked on.
const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
const closeModal = document.getElementById("close-modal");
const modalContent = document.querySelector(".modal-content");

const images = document.querySelectorAll(".open-image-modal");

images.forEach(image => {
    image.addEventListener("click", () => {
        if(modalContainer.classList.contains("show-modal-bg")) {
            return
        } else {
            modalContainer.classList.add("show-modal-bg");
            modalContainer.classList.remove("hide-modal-bg");
            modal.classList.add("show-modal");
            modal.classList.remove("hide-modal");
    
            var img = document.createElement("img");
            img.src = image.getAttribute("src");
            img.classList.add("slide-show-image");
            img.classList.add("popup-image");
            modalContent.appendChild(img);
        
        }
        
        
    })
})

closeModal.addEventListener("click", () => {
    modalContainer.classList.remove("show-modal-bg");
    modalContainer.classList.add("hide-modal-bg");
    modal.classList.remove("show-modal");
    modal.classList.add("hide-modal");

    let popupImage = document.querySelector(".popup-image");
    setTimeout(() => {
        modalContent.removeChild(popupImage)
    },1000);
   
})

//Gets all of my gallery itens and applies a class to each
const gallerys = document.querySelectorAll(".gallery-grid");

//If statement prevents errors if a gallery-grid item isn't on the page.
if(gallerys !== null) {
    gallerys.forEach(gallery => {
        let galleryItems = gallery.getElementsByTagName("*");
        for(let i = 1; i < galleryItems.length; i++) {
            galleryItems[i].classList.add("item");
        }
    })
}

function sliderChange(val) {
    document.getElementById('sliderVal').innerHTML = val;
    }

function locationChange(locVal) {
    if (locVal === "other") {
        document.getElementById("location-other-detail").style.display = "block";
        document.getElementById("more-detail").style.display = "block";
        let moreDetail = document.getElementById("more-detail");
        moreDetail.addEventListener('click', () => {
            document.getElementById("location-ellaborate").style.display = "block";
            document.getElementById("location-other-detail").style.display = "none";
            moreDetail.style.display = "none";
    })
    } else {
        document.getElementById("location-other-detail").style.display = "none";
        document.getElementById("location-ellaborate").style.display = "none";
        document.getElementById("more-detail").style.display = "none";
    }
}


function typeChange(typeVal) {
    if (typeVal === "please-select") {
        document.getElementById("guests").style.display = "none";
        document.getElementById("location").style.display = "none";
    } else if (typeVal === "Wedding") {
        document.getElementById("guests").style.display = "flex";
        document.getElementById("location").style.display = "none";

    } else {
        document.getElementById("guests").style.display = "none";
        document.getElementById("location").style.display = "flex";
    }
}

//Intersection observer fades items in as you scroll through the page.
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


// const logo = document.querySelector(".logo");

// logo.addEventListener('click', () => {
//     window.location.href = "/cartersacamera/index.html";
// })

const submitButton = document.querySelector('.submit-button');
const loader = document.querySelector('.loader-container');
submitButton.addEventListener('click', () => {
    loader.style.display = "flex";
})
