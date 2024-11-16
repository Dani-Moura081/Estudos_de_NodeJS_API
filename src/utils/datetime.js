
export default function horaAtual(){
    let agora = new Date();
    let msg = agora.toDateString() + '' + agora.toLocaleTimeString()
    return msg
}