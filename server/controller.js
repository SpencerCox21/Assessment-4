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

        dataBase.pop();

        res.status(200).send(dataBase)




        // for (let i = 0; i < dataBase.length; i++){
        //     // let index = dataBase.findIndex(dataBase => dataBase.name === req.name)
        //     // dataBase.splice(index, 1)
        //     // res.status(200).send(dataBase)

        //     dataBase = dataBase.filter((input) => {
        //         return input.Name != req.value; 

        //     })

        //     res.status(200).send(dataBase)
        // }

    },





    // updateCharacter: (req, res) => {
// assign everyone a new power level using math.floor stuff 
    // },






    getCharacters: (req, res) => {
        res.status(200).send(dataBase);
    }
}