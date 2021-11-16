function mostrarmedia(){
    var trs = document.getElementsByClassName('Linha');
    var x = 0;

    while(trs[x]){
        var linhaAluno = trs[x];
        console.log(linhaAluno);
        x++

        var n1, n2, n3, n4, media;
        var tds = linhaAluno.getElementsByTagName('td');
        console.log(tds);

        n1 = pegaNota(tds[1]);
        n2 = pegaNota(tds[2]);
        n3 = pegaNota(tds[3]);
        n4 = pegaNota(tds[4]);

        media = calcularMedia(n1, n2, n3, n4);

        linhaAluno.querySelector('.aluno-m').textContent = media;

    }
}
function pegaNota(td){
    return parseFloat(td.textContent);
}
function calcularMedia(){
    var soma = 0;
    var x = 0;
    var qtd = arguments.length;

    while(typeof arguments[x] === 'number'){
        soma += arguments[x];
        x++
    }
    return soma / qtd;
}