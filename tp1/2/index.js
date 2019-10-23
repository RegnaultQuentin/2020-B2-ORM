const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE

    // récuper le nombre de cartons
    nbcartons = input[0]
    // console.log(input)
    nballerretour = 1

    for (let a = 1; a < input.length; ++a){
      //calcul du poids de tous les cartons
      poidcartons = nbcartons * input[a]
      
      if (poidcartons <= 100){
        nballerretour = 1
      }
      // il faudrait incrémenter +1 à chaque fois mais j'ai pas eu le temps de trouver 
      else if(poidcartons > 100){
        nballerretour += 1
      }

    }
    return nballerretour
    // console.log(poidcartons)
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