import { SalvarFilme } from "../repository/filmerepository";


import { Router } from "express";
const endpoints = Router()


endpoints.post('/filme', async (req,resp) =>{
    let filmeOBJ = req.body;//lê o body do filme

    let id =await SalvarFilme(filmeOBJ)

    resp.send({
        id:id

    }
    )
    
})


export default endpoints