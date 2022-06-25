import {vetor} from "../vetor/vetor.js"

export const getDicas = (app)=>{
    app.get("/dicasRandom", (req, res)=>{
        res.send(vetor.dicas[Math.floor(Math.random()*vetor.dicas.length)])
    })

    app.get("/todasDicas", (req, res)=>{
        res.send(vetor.dicas)
    })
}