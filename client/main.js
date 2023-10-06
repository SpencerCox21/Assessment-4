const complimentBtn = document.getElementById("complimentButton")

const postForm = document.getElementById('postPerson')
const nameInput = document.getElementById('nameInput')
const powerInput = document.getElementById('powerInput')
const myDiv = document.getElementById('results')
const updateForm = document.getElementById('updatePerson')
const deleteForm = document.getElementById('deletePerson')
const list = document.getElementById('listBtn')






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

        alert(res.data)
       
    })

    .catch(() => {

    })


    
    
}


const updateCharacter = (event) => {
    event.preventDefault()
    axios.get(`${baseURL}/api/update/name`)
    // .then(res) => {
           
    // }
    // .catch(() => {
        
    // })
}




const deleteCharacter = (event) => {
    event.preventDefault()
    axios.get(`${baseURL}/api/delete/name`)
    // .then(res) => {
        
    // }
    // .catch(() => {

    // });
}



const getCharacters = (event) => {
    event.preventDefault()
    axios.get(`${baseURL}/api/getCharacters`)
    .then(() => {

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
}






complimentBtn.addEventListener('click', getCompliment)
postForm.addEventListener('submit', postCharacter)
deleteForm.addEventListener('submit', deleteCharacter)


