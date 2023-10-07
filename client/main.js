const complimentBtn = document.getElementById("complimentButton")

const postForm = document.getElementById('postPerson')
const nameInput = document.getElementById('nameInput')
const powerInput = document.getElementById('powerInput')
const myDiv = document.getElementById('results')
const updateForm = document.getElementById('updatePerson')
const deleteForm = document.getElementById('deletePerson')
const deleteInput = document.getElementById('deleteInput')
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
    axios.put(`${baseURL}/api/update/:power`)

}




const deleteCharacter = (event) => {
    event.preventDefault()
    axios.delete(`${baseURL}/api/delete/:name`)
    .then((res) => {

        let characters = res.data

        alert(characters)
       
    })

}



const getCharacters = () => {


    axios.get(`${baseURL}/api/getChar`)
    .then((res) => {
        
        let characters = res.data

        myDiv.textContent = ""

        for (let i = 0; i < characters.length; i++) {
            let nameP = document.createElement('p')
            nameP.textContent = characters[i].name + " " + characters[i].power
            myDiv.appendChild(nameP)
        }

        }) 
}








complimentBtn.addEventListener('click', getCompliment)
postForm.addEventListener('submit', postCharacter)
deleteForm.addEventListener('submit', deleteCharacter)
// updateForm.addEventListener('click', updateCharacter)
list.addEventListener('click', getCharacters)


