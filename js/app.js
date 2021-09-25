/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

const sections = [...document.querySelectorAll('section')]
const navBar = document.getElementById('navbar__list')
for (section of sections) {
  let linkName = section.getAttribute('data-nav')
  let linkValue = section.getAttribute('id')
  let listItem = document.createElement('li')
  listItem.innerHTML = `<a class="menu__link" data-link="${linkValue}" href="#${linkValue}" >${linkName}</a>`
  navBar.appendChild(listItem)
}

// Scroll to section on link click

let secLinks = [...document.querySelectorAll('li a')]
secLinks.forEach((secLink) => {
  secLink.addEventListener('click', function (event) {
    event.preventDefault()
    let sec = document.getElementById(secLink.getAttribute('data-link'))
    sec.scrollIntoView({ behavior: 'smooth', block: 'center' })
  })
})
// Set sections as active

let options = {
  root: null,
  rootMargin: '-250px 0px',
  threeshold: 0.1,
}
let observer = new IntersectionObserver(beActive, options)
for (section of sections) {
  observer.observe(section)
}
function beActive(sections) {
  for (section of sections) {
    if (section.isIntersecting) {
      section.target.classList.add('your-active-class')
    } else {
      section.target.classList.remove('your-active-class')
    }
  }
}
