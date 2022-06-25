import {vetor} from "../vetor/vetor.js"

export const create = (app)=>{
    app.post('/criarDica', (req, res)=>{
        const body = req.body
        const bodyDica = body
        vetor.dicas.push(bodyDica)
        res.send({"Dica": bodyDica})
    })
}