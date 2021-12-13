function insert(num) 
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    // vai pegar o numero que já tinha e acresentar os outros que forem selecionados
}
function clean() 
{
    document.getElementById('resultado').innerHTML = "";
    // vai limpar oque está no resultado
}

function back() //apagar ou voltar um numero
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
    
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada p/ calcular"
    }
}