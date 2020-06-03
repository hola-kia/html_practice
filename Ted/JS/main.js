//NAVBAR//

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

// ACCRODION WOMEN //


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
