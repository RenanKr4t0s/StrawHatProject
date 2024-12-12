import express from 'express'
import ejs from "ejs"
import path from "path"

import characters from './assets/characters.js';

const app = express();
const PORT = process.env.PORT ?? 4000

app.set('view engine', 'ejs')

//API CRUD
app.get("/api", (req,res)=>{
    res.status(200).json(characters)
})
app.get("/api/:id", (req,res)=>{
    const {id} = req.params
    const charFound = characters.find(char => char.id === id)
    if(charFound){
        res.status(200).json(charFound)
    }else{
        res.status(404).send(`Personagem não encontrado, informação "${id}" incorreta`)
    }
})
app.post("/api/create",(req,res)=>{
    const {id, imgUrl, name, nickname,
            crew, position, specialSkill, 
            dream, reward, food, phrase, birthday,
            akumanomiUser, akumanomi}
    = req.body;

    const newCharacter = {id, imgUrl, name, nickname,
        crew, position, specialSkill, 
        dream, reward, food, phrase, birthday,
        akumanomiUser, akumanomi}

    characters.push(newCharacter);

    res.status(201).json({message:`personagen ${name} adicionado com sucesso!`})
})


//HTML Base
app.get("/",(req,res)=>{
    res.status(200).sendFile(path.resolve('./htmlPages/instructions.html'))
})


//Graphic CRUD
app.get("/all",(req, res)=>{
    res.status(200).render('allChar', {characters:characters})
})
app.get("/char/:id", (req,res)=>{
    const {id} = req.params
    const charFound = characters.find(char => char.id === id)
    if(charFound){
        res.status(200).render('oneChar',{char:charFound})
    }else{
        res.status(404).send(`Personagem não encontrado, informação "${id}" incorreta`)
    }
})



app.listen(PORT, ()=>{
    console.log("Straw Hat API na porta "+PORT)
})

export default app;