import { SalvarFilme } from "../../repository/filmeRepository.js";
import { validarNovoFilme } from "../../validation/filme/filmeValidation.js";

export default async function  salvarFilmeService(filmeOBJ) {
    validarNovoFilme(filmeOBJ)


    let id = await SalvarFilme(filmeOBJ)
    return id
 }