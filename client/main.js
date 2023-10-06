const complimentBtn = document.getElementById("complimentButton")

const postForm = document.getElementById('postPerson')
const nameInput = document.getElementById('nameInput')
const powerInput = document.getElementById('powerInput')
const myDiv = document.getElementById('results')


const baseURL = "http://localhost:4000"





const getCompliment = () => {
    axios.get(`${baseURL}/api/get`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const postCharacter = (event) => {
    event.preventDefault()

    let maBod = {
        name: nameInput.value,
        power: powerInput.value,
    }

    // console.log(maBod)

    axios.post(`${baseURL}/api/post`, maBod)
    .then((res) => {

        // console.log(res.data)
        let characters = res.data

        myDiv.textContent = "";
        
        for (let i = 0; i < characters.length; i++) {

            // let nameP = document.createElement('p')
            // nameP.textContent = characters[i].name
            // myDiv.appendChild(nameP)
            
            // let powerP = document.createElement('p')
            // powerP.textContent = characters[i].power
            // myDiv.appendChild(powerP)

            let nameP = document.createElement('p')
            nameP.textContent = characters[i].name + "'s power level = " + " " + characters[i].power
            myDiv.appendChild(nameP)
        }
    })

    .catch(() => {

    })


    
    
}


const updateCharacter = () => {
    axios.get(`${baseURL}/api/update`)
    // .then(res) => {
           
    // }
    // .catch(() => {
        
    // })
}




const deleteCharacter = () => {
    axios.get(`${baseURL}/api/delete/name`)
    // .then(res) => {
            
    // }
    // .catch(() => {

    // })
}

const getCharacters = () => {
    axios.get(`${baseURL}/api/getCharacters`)
}

complimentBtn.addEventListener('click', getCompliment)
postForm.addEventListener('submit', postCharacter)
