const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


const {getCompliment, postCharacter, deleteCharacter, getCharacters} = require('./controller');

app.get("/api/get", getCompliment);
app.post("/api/post", postCharacter);
app.delete("/api/delete/:name", deleteCharacter);
// app.put("/api/dataBase/:name", updateCharacter);
app.get("/api/getChar", getCharacters);


app.listen(4000, () => console.log("Server running on 4000"));
