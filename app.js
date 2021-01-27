const url = "http://madlibz.herokuapp.com/api/random"

// Axios Call for Madlib game:

const getTemplate = async () => {
  try {
    const response = await axios.get(url)
    const play = document.querySelector('#start')
    enterWords(response.data.blanks)
    console.log(response.data.blanks)
  } catch (error) {
    console.log(error)
  }
}

getTemplate()









function enterWords(prompts) {
  // fillIn: array of user choices
  let fillIn = []

  // Capturing DOM elements
  const submit = document.querySelector('#submit')
  let answer = document.querySelector('#entries')
  let request = document.querySelector('#prompt')
  let form = document.querySelector('#player-entries')
  // Creating forEach loop to cycle through prompts received from API and capturing user's responses. The responses will be pushed into an array.
  prompts.forEach((item) => {
    request.innerHTML = `${item} :`
    submit.onclick = (e) => {
      e.preventDefault()
      if (answer.value.length === 0) {
        console.log('Please enter a word')
      } else {
        fillIn.push(answer.value)
      }
      // Resetting values before moving on to next item
      answer.value = ''
      console.log(fillIn)
      console.log(prompts)
    }
    

  })
    
}

// play.onclick = play(response.data.blanks)