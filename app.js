const url = "http://madlibz.herokuapp.com/api/random"

// Axios Call for Madlib game:

const getTemplate = async () => {
  try {
    const response = await axios.get(url)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

getTemplate()