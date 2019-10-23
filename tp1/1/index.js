const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    
    // console.log(input.length)
    // Récupération de la place d'arriver
    let result = 0
    for (let a = 1; a < input.length; ++a){
      
      
      // console.log(input[0] + input[a])
      // Conditions pour le résultat 
      placearrive = (input[0] += parseInt(input[a].split(' ')[0])) // <=== J'ai une question la pourquoi je peux pas le mettre sur une ligne avec un + entre les deux ? 
      placearrive = (input[0] -= parseInt(input[a].split(' ')[1])) // <===
      
      if (placearrive <= 100) {
      
        result = 1000
      }
      else if (placearrive > 100 && placearrive <= 10000){
        result = 100
      }
      else {
        result = "KO"
      }
    }
    return result
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}