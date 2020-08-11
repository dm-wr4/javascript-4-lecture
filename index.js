console.log('I am working')

// Use document.querySelector to grab a DOM Node (HTML Element)
const headerText = document.querySelector('.title')

//.innerText controls the text displayed by the element
headerText.innerText = 'Scott Loves Fish Tanks'

//.style allows you to set the style attribute directly
headerText.style = 'color: red; text-decoration: underline;'

//You can also dig in to set specific style properties.
//These are seen as inline styles so they override anything in your linked .css file
headerText.style.fontSize = '16px'

headerText.style.fontSize = '32px'

//.classList gives you a list of all classes assigned to that element.
//You can access .add, .remove, and .toggle methods to modify this list
headerText.classList.add('dark-mode')

// const dynamicDiv = document.getElementById('dynamic-div')

//You can set innerHtml directly as well
// dynamicDiv.innerHTML = `
//   <ul>
//     <li>One</li>
//     <li>Two</li>
//     <li>Three</li>
//   </ul>
// `

const storyButton = document.getElementById('story-button')

const availableColors = ['red', 'blue', 'rebeccapurple', 'orange', 'tomato']

function changeColor(e) {
  //Default behavior of a form tag is to reload the page, this prevents that
  e.preventDefault()

  //This prevents the event from bubbling up the DOM
  e.stopPropagation()
  console.log('I got clicked')

  const content = document.querySelector('.content-hold')

  const colorInput = document.getElementById('color-input')

  //When we access an input element, we can access the .value property to check what has been typed into the element
  //In this case we are checking if our input matches one of the available colors defined above.
  if (availableColors.includes(colorInput.value)) {
    //If what the user typed in is an available color, we set the background css property of our content div to be what they typed in.
    content.style.background = colorInput.value
  } else {
    alert('Invalid color')
  }

  colorInput.value = ''
}

//This is how we connect our button to the changeColor function
//.addEventListener takes two arguments: the event we want to listen for and a callback function to be invoked when the event happens
storyButton.addEventListener('click', changeColor)

const content = document.querySelector('.story-hold')
content.addEventListener('click', () => {
  console.log('CLICKED ON CONTENT HOLD')
})

// storyButton.addEventListener('mouseenter', () => {
//   console.log('The mouse entered')
// })

document.getElementById('part-button').addEventListener('click', (e) => {
  e.stopPropagation()

  const input = document.getElementById('part-input')

  //We first check if the user has typed anything into our input box
  if (input.value) {
    //We use .createElement to make a new <li> element and then assign it various attributes
    const newLi = document.createElement('li')

    //We set the innerText to match what the user types
    newLi.innerText = input.value

    //We give the option to delete an item that the user created by double clicking on it
    newLi.addEventListener('dblclick', () => {
      console.log(newLi.parentNode)
      newLi.remove()
    })

    //We need a place to put our <li> so we grab the <ol> with an id of part-list
    const list = document.getElementById('part-list')
    //We use the .appendChild method to attach our <li> as a child of the <ol>
    list.appendChild(newLi)

    //This resets the value of the input box
    input.value = ''

    // This relates to the next part, we first check if an empty field notification has been previously displayed
    // If it has we remove it
    const notification = document.getElementById('empty-field-notification')
    if (notification) {
      notification.remove()
    }
  } else {
    // We want to give some feedback if the user has not typed anything in.

    // We first check if the notification has already been displayed
    const notification = document.getElementById('empty-field-notification')

    // If it has not, we go about creating a new one
    if (!notification) {
      // We use .createElement to make a new <p>
      const newP = document.createElement('p')

      // We set the .innerText to reflect what we want the notification to say
      newP.innerText = 'Please input a story'

      // We give it a class of .notification (this has already been set up in our .css file)
      newP.classList.add('notification')

      // We also assign it an id of empty-field-notification so we can easily find it later.
      newP.setAttribute('id', 'empty-field-notification')

      // We need a place to put our notification so we grab the container and then append our notification to it.
      const container = document.querySelector('.part-form')
      container.appendChild(newP)
    }
  }

  console.log('YOU CLICKED THE THING GOOD JOB')
})
