import con from "./connection.js";

export async function SalvarFilme(filme) {
    let comando = `
    INSERT INTO tb_filme(nm_filme,ds_sinopse,vl_avaliacao, dt_lancamento,bt_disponivel)
	    VALUES(?,?,?,?,?);
    `

    let resposta = await con.query(comando, [filme.nome,filme.sinopse,filme.avaliacao,filme.lancamento,filme.disponivel])
    let info = resposta[0]; // as informações sempre estarão na resposta 0 desse vetor

    let idFilme = info.insertId; // filtra o ID do filme
    return idFilme;
}