const url = "http://madlibz.herokuapp.com/api/random"

// Axios Call for Madlib game:
let template
let title
const play = document.querySelector('#start')
const read = document.querySelector('#reveal')
const getTemplate = async () => {
  try {
    const response = await axios.get(url)
    
    const prompts = response.data.blanks
    title = response.data.title
    template = response.data.value
    enterWords(prompts, 0)
  
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
    // Removing Label
    request.innerHTML = ''
    // console.log('Now let\'s read your story')
    return fillIn
    
  }
  writeStory(template,fillIn)
}


let story = []
function writeStory(template, words){
  for (let i = 0; i < words.length; i++) {
    story.push(template[i], words[i])
    // story.push(words[i])
    // Escape function to return finished story
    if (story.length === (template.length + words.length)) {
      return story
    }
  }
  console.log(`Your story is ready!`)
}


const show = document.querySelector('#reveal')
const storyTitle = document.createElement('h4')
const storyText = document.createElement('p')
let page = document.querySelector('.story')
show.addEventListener('click', () => {
  storyTitle.innerHTML = title
  storyText.innerText = story
  page.append(storyTitle)
  page.append(storyText)
})

