const gridItems= document.querySelectorAll('.grid-item');
const active = document.querySelector('.active');
const modal = document.querySelector('.modal');
const removeModal = document.querySelector('.fa-x'); 
const nextBtn = document.querySelector('.fa-arrow-right');
const modalBackDrop = document.querySelector('.modalBackDrop');
/*const elements = document.querySelectorAll('.back, .front'); */

/*
gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', () => {
        modal.classList.add('active');
        const lightbox = document.createElement('div')
        lightbox.id = 'lightbox'
        modal.appendChild(lightbox);
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
          }
          lightbox.appendChild('modal')
        })
    }) */



/*
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
}) */
/*
  function removeLightBox() {
    lightbox.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return
        lightbox.classList.remove('active')
      })
} */

      gridItems.forEach(gridItem => {
        gridItem.addEventListener('click', () => {
            modalBackDrop.classList.add('active')
        })
    }) 
    

removeModal.addEventListener('click', () => {
    modalBackDrop.classList.remove('active');
}) 


nextBtn.addEventListener('click', () => {
    modalBackDrop.classList.toggle('flip');
}) 

const jeopardyCategories = [
    {
        genre: 'SPORTS',
        questions: [
            {
                question: 'Who wrote the Harry Potter books?',
                answers: ['JK Rowling', 'JRR Tolkien'],
                correct: 'JK Rowling',
                level: 'easy',
            },
            {
                question: 'Who was born on Krypton',
                answers: ['Aquaman', 'Superman'],
                correct: 'Superman',
                level: 'medium',
            },
            {
                question: 'Who designed the first car?',
                answers: ['Karl Benz', 'Henry Ford'],
                correct: 'Karl Benz',
                level: 'hard',
            },
        ],
    },
    {
        genre: 'DOGS',
        questions: [
            {
                question: 'Where is Buckingham Palace?',
                answers: ['Richmond', 'London'],
                correct: 'London',
                level: 'easy',
            },
            {
                question: 'Where is the Colosseum',
                answers: ['Rome', 'Milan'],
                correct: 'Rome',
                level: 'medium',
            },
            {
                question: 'Where is Mount Kilimanjaro',
                answers: ['Zimbabwe', 'Tanzania'],
                correct: 'Tanzania',
                level: 'hard', // how can i attach the right questions to the right genre
            }, // how can I put the questions in the modal
        ],      // how can the player submit the answer and get the right answer
    },
    {
        genre: 'CATS',
        questions: [
            {
                question: 'When is Christmas?',
                answers: ['30th Dec', '24th/25th Dec'],
                correct: '24th/25th Dec',
                level: 'easy',
            },
            {
                question: 'When was JFK Shot?',
                answers: ['1963', '1961'],
                correct: '1963',
                level: 'hard',
            },
            {
                question: 'When was WW2?',
                answers: ['1932', '1941'],
                correct: '1941',
                level: 'medium',
            },
        ],
    },
    {
        genre: 'SUPERS',
        questions: [
            {
                question: 'What is the capital of Saudi Arabia?',
                answers: ['Jeddah', 'Riyadh'],
                correct: 'Riyadh',
                level: 'hard',
            },
            {
                question: 'What do Koalas eat?',
                answers: ['Straw', 'Eucalyptus'],
                correct: 'Eucalyptus',
                level: 'medium',
            },
            {
                question: 'What is a kg short for',
                answers: ['Kilojoule', 'Kilogram'],
                correct: 'Kilogram',
                level: 'easy',
            },
        ],
    },
    {
        genre: 'HISTORY',
        questions: [
            {
                question: 'How many players in a football team?',
                answers: ['15', '11'],
                correct: '11',
                level: 'easy',
            },
            {
                question: 'How many seconds in an hour?',
                answers: ['36000', '3600'],
                correct: '3600',
                level: 'medium',
            },
            {
                question: 'How many people in China?',
                answers: ['1.1 bil', '1.4 bil'],
                correct: '1.4 bil',
                level: 'hard',
            },
        ],
    },
    {
        genre: 'MUSIC',
        questions: [
            {
                question: 'How many players in a football team?',
                answers: ['15', '11'],
                correct: '11',
                level: 'easy',
            },
            {
                question: 'How many seconds in an hour?',
                answers: ['36000', '3600'],
                correct: '3600',
                level: 'medium',
            },
            {
                question: 'How many people in China?',
                answers: ['1.1 bil', '1.4 bil'],
                correct: '1.4 bil',
                level: 'hard',
            },
        ],
    },
]

jeopardyCategories.forEach(category => addCategory(category))

/*
function flipCard() {
    this.classList.add('flip');
}

flipCard();
*/

// Get the modal


// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */
/* 
window.onclick = function(event) {
    if (event.target == modal) {
      modal.className.remove = "active";
    }
  } */

/*const btna = document.querySelector('.btna')
const input = document.querySelector('.input')

btna.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})  */
