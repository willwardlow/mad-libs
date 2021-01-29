const url = "http://madlibz.herokuapp.com/api/random"

// Axios Call for Madlib game:
let template
let title
const play = document.querySelector('#start')
const read = document.querySelector('#reveal')
const form = document.querySelector('.player-input')
const getTemplate = async () => {
  try {
    const response = await axios.get(url)
    const prompts = response.data.blanks
    title = response.data.title
    // The array below ends with a zero, stripping that off before I proceed with a slice method.
    template = response.data.value.slice(0, -1)
    play.addEventListener('click', enterWords(prompts, 0))
    console.log(template)
  } catch (error) {
    console.log(error)
  }
}
getTemplate()
// writeStory(template,fillIn)

// fillIn: array of user choices

let fillIn = []
 // Capturing DOM elements
const submit = document.querySelector('#submit')
let answer = document.querySelector('#entries')
let request = document.querySelector('#prompt')
 
function enterWords(prompts, i) {

  // Created a click function to push the responses in a array while refreshing the HTML Label. The function will call itself again.
  request.innerHTML = `${prompts[i]} :`
  submit.onclick = (e) => {
    e.preventDefault()
    if (answer.value.length === 0) {
      console.log('Please enter a word')
    } else {
      fillIn.push(answer.value)
      enterWords(prompts, i += 1)
    }
    // Resetting values before moving on to next item
    answer.value = ''
  }
  // Escape function to notify user of all necessary words are received.
  if (fillIn.length === prompts.length) {
    // Removing Label & button
    form.style.display = 'none'
    // console.log('Now let\'s read your story')
    
  }
  writeStory(template,fillIn)
}


// writeStory function joins the two arrays into one complete array.

let story = []
function writeStory(template, words) {
  story.length = 0
  for (let i = 0; i < words.length; i++) {
    story.push(template[i])
    story.push(words[i])
  }
  story.toString()
  console.log(story)
  // Escape function to return finished story
  // if (story.length === (template.length + words.length)) {
  //   console.log(`Your story is ready!`)
  // }
}

// Showing the story on a click event
const show = document.querySelector('#reveal')
const storyTitle = document.createElement('h4')
storyTitle.style.textAlign = 'center'
const storyText = document.createElement('p')
let page = document.querySelector('.story')
show.addEventListener('click', () => {
  storyTitle.innerHTML = title
  storyText.innerText = story
  page.append(storyTitle)
  page.append(storyText)
})
