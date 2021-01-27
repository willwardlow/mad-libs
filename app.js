const url = "http://madlibz.herokuapp.com/api/random"

// Axios Call for Madlib game:

const getTemplate = async () => {
  try {
    const response = await axios.get(url)
    const play = document.querySelector('#start')
    // enterWords(response.data.blanks, 0)
    let story = writeStory(response.data.value, response.data.blanks)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

getTemplate()







let fillIn = []

function enterWords(prompts, i) {
  // fillIn: array of user choices


  // Capturing DOM elements
  const submit = document.querySelector('#submit')
  let answer = document.querySelector('#entries')
  let request = document.querySelector('#prompt')
  // Creating forEach loop to cycle through prompts received from API and capturing user's responses. The responses will be pushed into an array.

  request.innerHTML = `${prompts[i]} :`
  submit.onclick = (e) => {
    e.preventDefault()
    console.log('here', fillIn, i)
    if (answer.value.length === 0) {
      console.log('Please enter a word')
    } else {
      fillIn.push(answer.value)
      enterWords(prompts, i += 1)
    }
    // Resetting values before moving on to next item
    answer.value = ''
    console.log(prompts)
    console.log(fillIn)
  }


}

function writeStory(template, words) {
  const story = template.join(words)
}