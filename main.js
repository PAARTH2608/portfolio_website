const rem = document.getElementById("removing");
const load = document.getElementById("loader")

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector('.section');
tabsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const target = e.target.getAttribute('data-target');
        aboutSection.querySelector('.tab-content.active').classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

// project-btn
document.addEventListener('click', (e) => {
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement.parentElement);   
    }
 });
 function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    // document.body.classList.toggle("hide-scrolling");
    // document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener('click', togglePortfolioPopup);

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
})
function portfolioItemDetails(portfolioItem){
    console.log('hiyyyy');
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
    document.querySelector(".pp-header h2").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}




// scroll btn
scrollbtn = document.querySelector('.scroll-btn');
window.onscroll = function(){
    scrollFunction();
}
function scrollFunction(){
    if(document.body.scroll > 100 || document.documentElement.scrollTop > 100){
        scrollbtn.style.display = "block";
    }
    else{
        scrollbtn.style.display = "none";
    }
}
// navbar
const tog = document.querySelector(".me");
tog.addEventListener('click', () => {
    document.querySelector('.itms').classList.toggle('act');
    // display none to all for navbar
    // document.querySelector('.container1').classList.toggle('close');
    // document.querySelector('.container2').classList.toggle('close');
    // document.querySelector('#about').classList.toggle('close');
    // document.querySelector('.portfolio-item').classList.toggle('close');
    // document.querySelector('#contact').classList.toggle('close');
    // document.querySelector('.portfolio-popup').classList.toggle('close');
})




console.clear();

const fromPaths = collectPathVals(
    document.querySelectorAll('#waveball__paths--from path'), 
    true, 0
);
const toPaths = collectPathVals(
    document.querySelectorAll('#waveball__paths--to path'), 
    false, 0
);
const toLen = toPaths.length;

let timeline = anime.timeline({ 
    autoplay: true, direction: 'alternate', loop: true 
});

timeline = animatePaths(toPaths, timeline);

const fromPaths2 = collectPathVals(
    document.querySelectorAll('#waveball__paths--to path'), 
    true,
    toLen + 1
);

const toPaths2 = collectPathVals(
    document.querySelectorAll('#waveball__paths--from path'),
    false,
    toLen + 1
);

let timeline2 = anime.timeline({ 
    autoplay: true, direction: 'alternate', loop: true
});

timeline2 = animatePaths(toPaths2, timeline2, 3);

/* debugging */
window._timline = {timeline, timeline2};


/* Set up animation */
function animatePaths(pathGroup, timeline, delaySeed = 619) {
    const offsetSeed = (delaySeed / 89);
    
    return pathGroup
        .forEach(function(path, index) {
          return timeline
              .add({
                targets: '#' + path.id,
                d: {
                  value: [ path.value ],
                  duration: getDuration(index),
                  easing: 'easeInOutQuad',
                  delay: delaySeed * index,
                  endDelay: getDuration(offsetSeed, delaySeed * 89) * index,
                },
                offset: offsetSeed * index
              });
        });
}






