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
        res.status(200).send(dataBase)

    },

    deleteCharacter: (req, res) => {

        for (let i = 0; i < dataBase.length; i++){
            let index = dataBase.findIndex(dataBase => dataBase.name === req.name)
            dataBase.splice(index, 1)
            res.status(200).send(dataBase)
        }

    }

    // updateCharacter: (req, res) => {
    //     const powerLevel = req.body
    //     let index = dataBase.findIndex(dataBase => dataBase.id === +req.params.name)
    //     dataBase[index].power = 
    // }

    // getCharacters: (req, res) => {
    //     res.status(200).send(dataBase);
    // }
}