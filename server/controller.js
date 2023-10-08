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

        res.status(200).send('Character has been submitted.') 

    },



    deleteCharacter: (req, res) => {


        let index = dataBase.findIndex(dataBase => dataBase.name === req.params.name);

        dataBase.splice(index, 1)

        res.status(200).send("Character has been deleted, click the 'List' button to refresh the list.")


    },





    updateCharacter: (req, res) => {


        for (let i = 0; i < dataBase.length; i++) {

            let newPower = Math.floor(Math.random() * 10000) 

            dataBase[i].power = newPower;
        }


        res.status(200).send("All characters have recieved a new power level, click the 'List' button to see the results.")


    },






    getCharacters: (req, res) => {

        res.status(200).send(dataBase);
    }
}