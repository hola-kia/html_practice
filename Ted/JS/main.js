
// @ts-check
/* const acc = document.getElementsByClassName('event');

const eventHandlerFunction = () => {
    this.classList.toggle('active');
    const accordionWomen = document.getElementsByClassName('accordion-women');
    if(accordionWomen.style.display === 'none') {
    accordionWomen.style.display = 'block';
    } else {
    accordionWomen.style.display = 'none';
    };
};

acc.onclick = eventHandlerFunction(); */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 28 || document.documentElement.scrollTop > 28) {
      document.getElementById("scroll-top").style.position = "fixed";
      document.getElementById("scroll-bottom").style.position = "fixed";
      document.getElementById("scroll-top").style.top = "0";
      document.getElementById("scroll-bottom").style.top = "62px";
      document.querySelector('header').style.margin = "110px 0";
    } else {
      document.getElementById("scroll-top").style.position = "relative";
      document.getElementById("scroll-bottom").style.position = "relative";
      document.getElementById("scroll-bottom").style.top = "0";
      document.querySelector("header").style.margin = "0";
    }
};


function mouseoverWomen() {
    const accordionWomen = document.getElementById('accordion-women');
    if(accordionWomen.style.display === 'none') {
        accordionWomen.style.display = 'block';
        //document.getElementById("scroll-bottom").style.display = "relative";
        //document.getElementById("scroll-bottom").style.top = "450px";
    } else {
        accordionWomen.style.display = 'block';
    }
}

function mouseoutWomen() {
    const accordionWomen = document.getElementById('accordion-women');
    if(accordionWomen.style.display === 'block') {
        accordionWomen.style.display = 'none';
    } else {
        accordionWomen.style.display = 'none';
    }
}


// ACCORDION MEN //

function mouseoverMen() {
    const accordionMen = document.getElementById('accordion-men');
    if(accordionMen.style.display === 'none') {
        accordionMen.style.display = 'block';
    } else {
        accordionMen.style.display = 'block';
   }
}

function mouseoutMen() {
    const accordionMen = document.getElementById('accordion-men');
    if(accordionMen.style.display === 'block') {
        accordionMen.style.display = 'none';
    } else {
        accordionMen.style.display = 'none';
    }
}


// ACCORDION HOME //

function mouseoverHome() {
    const accordionHome = document.getElementById('accordion-home');
    if(accordionHome.style.display === 'none') {
        accordionHome.style.display = 'block';
    } else {
        accordionHome.style.display = 'block';
    }
}

function mouseoutHome() {
    const accordionHome = document.getElementById('accordion-home');
    if(accordionHome.style.display === 'block') {
        accordionHome.style.display = 'none';
    } else {
        accordionHome.style.display = 'none';
    }
}

// ACCORDION OFFERS //

function mouseoverOffers() {
    const accordionOffer = document.getElementById('accordion-offers');
    if(accordionOffer.style.display === 'none') {
        accordionOffer.style.display = 'block';
    } else {
       accordionOffer.style.display = 'block';
    }
}

function mouseoutOffers() {
    const accordionOffer = document.getElementById('accordion-offers');
    if(accordionOffer.style.display === 'block') {
        accordionOffer.style.display = 'none';
    } else {
        accordionOffer.style.display = 'none';
    }
}



// CAROUSEL SECTION //

const carousel = document.querySelector('.carousel');
const cards = Array.from(carousel.children);
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

//get card width
const cardWidth = cards[0].getBoundingClientRect().width;

//arrange cards next to each other with position:absolute;

/*cards[0].style.left = 412.5 + 'px';
cards[1].style.left = cardWidth + 412.5 + 'px';
cards[2].style.left = (2 * cardWidth) + 412.5 + 'px'; */

/*cards.forEach((card, index) => {
  card.style.left = (cardWidth * index) + 412.5 + 'px';
}); */

const setCardsPosition = (card, index) => {
  card.style.left = cardWidth * index + 'px';
};

cards.forEach(setCardsPosition);

//console.log(card);
//console.log(cardWidth);

const moveToCard = (carousel, currentCard, targetCard) => {
  carousel.style.transform = 'translateX(-' + targetCard.style.left + ')';
  currentCard.classList.remove('current');
  targetCard.classList.add('current');
}

const hideArrows = (cards, next, prev, targetIndex) => {
  if(targetIndex === 0) {
    prev.classList.add('is-hidden');
    next.classList.remove('is-hidden');
  } else if(targetIndex === cards.length - 1) {
    prev.classList.remove('is-hidden');
    next.classList.add('is-hidden');
  } else {
    prev.classList.remove('is-hidden');
    next.classList.remove('is-hidden');
  }
};

//add event listeners on buttons

next.addEventListener('click', event => {
  const currentCard = carousel.querySelector('.current');
  const nextCard = currentCard.nextElementSibling;
  const nextIndex = cards.findIndex(card => card === nextCard);
  
  moveToCard(carousel, currentCard, nextCard);
  hideArrows(cards, next, prev, nextIndex);
})

prev.addEventListener('click', event => {
  const currentCard = carousel.querySelector('.current');
  const prevCard = currentCard.previousElementSibling;
  const prevIndex = cards.findIndex(card => card === prevCard);

  moveToCard(carousel, currentCard, prevCard);
  hideArrows(cards, next, prev, prevIndex);
})

/*const amountToMove = nextCard.style.left;
  
  carousel.style.transform = 'translateX(-' + amountToMove + ')';
  currentCard.classList.remove('current');
  nextCard.classList.add('current');*/





/*
//carousel = (function(){
  
  const box = document.getElementsByClassName('carousel-wrapper');
  //var next = box.querySelector('.carousel__button--next');
  //var prev = box.querySelector('.carousel__button--prev');
  let items = document.getElementsByClassName('carousel-card');
  console.log(items);
  let counter = 0;
  const amount = items.length;
  let current = items[0];

  

  function navigate(direction) {
    //box.classList.add('active');
    console.log(items);
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 && counter < 0) { 
      counter = amount - 1; 
    }
    if (direction === 1 && !items[counter]) { 
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }
  /*next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);
//});

*/

/*
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("top-pics-section.carousel");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
} */

/*
let slideIndex = -1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("top-pics-section.carousel");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  };
  /*for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides.style.display = "block";
  //dots[slideIndex-1].className += " active";
}




let slideIndex = -1;
const slides = document.getElementsByClassName("top-pics-section.carousel");
for (let i = 0; i < slides.length; i++)  //hide all of the one by one
{
  slides[i].style.display = "none";
}

showSlides();

function showSlides() 
{
  if ( slideIndex >= 0 )
  {
     slides[ slideIndex ].style.display = "none"; //hide last image
  }     
  if ( slideIndex >= (slides.length - 1) ) 
  {
    slideIndex = -1; //make it -1 as index starts from 0
  }

  slides[ ++slideIndex ].style.display = "block"; //show next image
  setTimeout(showSlides, 2000); // Change image every 4 seconds
}
*/

/* !(function(d){
    // All code will go in here. We've renamed 'document' to 'd'.
    
    const itemClassName = "top-pics-section.carousel";
    const items = document.getElementsByClassName(itemClassName);
    const totalItems = items.length;
    let slide = 0;
    let moving = true;

    // Set classes
   function setInitialClasses() {
    // Targets the previous, current, and next items
    // This assumes there are at least three items.
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
   }

   // Set event listeners
   function setEventListeners() {
    const next = d.getElementsByClassName('carousel__button--next')[0],
          prev = d.getElementsByClassName('carousel__button--prev')[0];
    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  }

  // Next navigation handler
function moveNext() {
    // Check if moving
    if (!moving) {
      // If it's the last slide, reset to 0, else +1
      if (slide === (totalItems - 1)) {
        slide = 0;
      } else {
        slide++;
      }
      // Move carousel to updated slide
      moveCarouselTo(slide);
    }
  }
  // Previous navigation handler
  function movePrev() {
    // Check if moving
    if (!moving) {
      // If it's the first slide, set as the last slide, else -1
      if (slide === 0) {
        slide = (totalItems - 1);
      } else {
        slide--;
      }
            
      // Move carousel to updated slide
      moveCarouselTo(slide);
    }
  }

  function disableInteraction() {
    // Set 'moving' to true for the same duration as our transition.
    // (0.5s = 500ms)
    
    moving = true;
    // setTimeout runs its function once after the given time
    setTimeout(function(){
      moving = false
    }, 500);
  }

  function moveCarouselTo(slide) {
    // Check if carousel is moving, if not, allow interaction
    if(!moving) {
      // temporarily disable interactivity
      disableInteraction();
      // Update the "old" adjacent slides with "new" ones
      const newPrevious = slide - 1,
            newNext = slide + 1,
            oldPrevious = slide - 2,
            oldNext = slide + 2;
      // Test if carousel has more than three items
      if ((totalItems - 1) > 3) {
        // Checks and updates if the new slides are out of bounds
        if (newPrevious <= 0) {
          oldPrevious = (totalItems - 1);
        } else if (newNext >= (totalItems - 1)){
          oldNext = 0;
        }
        // Checks and updates if slide is at the beginning/end
        if (slide === 0) {
          newPrevious = (totalItems - 1);
          oldPrevious = (totalItems - 2);
          oldNext = (slide + 1);
        } else if (slide === (totalItems -1)) {
          newPrevious = (slide - 1);
          newNext = 0;
          oldNext = 1;
        }
        // Now we've worked out where we are and where we're going, 
        // by adding/removing classes we'll trigger the transitions.
        // Reset old next/prev elements to default classes
        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName;
        // Add new classes
        items[newPrevious].className = itemClassName + " prev";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";
      }
    }
  }

  function initCarousel() {
    setInitialClasses();
    setEventListeners();
    // Set moving to false so that the carousel becomes interactive
    moving = false;
  }

  initCarousel();

  }(document)); */



