// Madlib API URL
const url = "http://madlibz.herokuapp.com/api/random"


// Variables to use in Axios Call
let template
let title

// All relevant DOM Elements:
const play = document.querySelector('#start')
const form = document.querySelector('.player-input')
const again = document.querySelector('#again')
const submit = document.querySelector('#submit')
let answer = document.querySelector('#entries')
let request = document.querySelector('label')

// fillIn: array of user choices
let fillIn = []

// Variable to append both template and user choices:
let story = []

// Setting up story attributes when appending to div:
const show = document.querySelector('#reveal')
const storyTitle = document.createElement('h2')
storyTitle.style.textAlign = 'center'
const storyText = document.createElement('p')
let page = document.querySelector('.story')

// Axios Call for Madlib game:
const getTemplate = async () => {
  try {
    const response = await axios.get(url)
    const prompts = response.data.blanks
    title = response.data.title
    // The targeted array has a trailing zero. Stripping off before I begin with a slice method.
    template = response.data.value.slice(0, -1)
    play.addEventListener('click', enterWords(prompts, 0))
    console.log(template)
    console.log(prompts)
  } catch (error) {
    console.log(error)
  }
}

play.addEventListener('click', () => {
  getTemplate()
  form.style.visibility = 'initial'
  
})

// enterWords is a function that prompts the user to enter their selections and creating the fillIn array with those choices.
function enterWords(prompts, i) {
  
  // The prompts suppliled by the response will be used for the input label
  request.innerHTML = `${prompts[i]} :`
  
  submit.onclick = (e) => {
    e.preventDefault()
    document.querySelector('#alert').style.display = 'none'
    if (answer.value.length === 0) {
      document.querySelector('#alert').style.display = 'initial'
      console.log('Please enter a word')
    } else {
      fillIn.push(answer.value)
      enterWords(prompts, i += 1)
      console.log(fillIn)
    }
    // Resetting values before moving on to next item
    answer.value = ''
  }
  // Escape function to notify user of all necessary words are received.
  if (fillIn.length === prompts.length) {
    // Form will disapper once all choices have been received.
    form.style.display = 'none'
    show.style.visibility = 'visible'
    
  }
  writeStory(template,fillIn)
}


// writeStory function joins the two arrays into one complete array.


function writeStory(template, words) {
  story.length = 0
  for (let i = 0; i <= words.length; i++) {
    story.push(template[i])
    story.push(words[i])
  }
  newStory = story.join('')
  console.log(newStory)
}

// Click event to show story
show.addEventListener('click', () => {
  page.style.visibility = 'visible'
  storyTitle.innerHTML = title
  storyTitle.style.textDecoration = 'underline'
  storyText.innerHTML = newStory
  page.append(storyTitle)
  page.append(storyText)
  show.style.visibility = 'hidden'
  again.style.display = 'inline-block'
})

// "Play again" click function to restart game
again.addEventListener('click', () => {
  location.reload();
  
})