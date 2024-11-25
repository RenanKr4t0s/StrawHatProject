import express from 'express'
import ejs from "ejs"

import characters from '../assets/characters.js';

const app = express();
const PORT = process.env.PORT ?? 3000

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

//Graphic CRUD
app.get("/",(req, res)=>{
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
    console.log("Straw Hat Project na porta "+PORT)
})