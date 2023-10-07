let dataBase = []



module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    postCharacter: (req, res) => {

        let {name, power} = req.body

        let person = {
            name,
            power
        }

        dataBase.push(person)

        // console.log(dataBase)
        res.status(200).send('Character has been submitted.') 

    },

    deleteCharacter: (req, res) => {


        let charName  = req.params.name
        for (let i = 0; i < users.length; i++) {
          if (dataBase[i].name === charName) {
            dataBase.splice(i, 1)
            res.status(200).send(dataBase)
            return
          }


        }

    },





//     updateCharacter: (req, res) => {
// // assign everyone a new power level using math.floor stuff 

// // use req.body
//     },






    getCharacters: (req, res) => {

        
        res.status(200).send(dataBase);
    }
}