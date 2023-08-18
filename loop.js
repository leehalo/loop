const lugaresQueVisitei=['Campos do jordão', 'Curitiba', 
'Minas Gerais', 'Jaraguá', 'Ubatuba', 'itú' ];

for(let i=0; i<lugaresQueVisitei.length; i++) {
    console.log(`Eu já visitei ${lugaresQueVisitei[i]}.`);

    const lugaresAmiguinho=['Porto de Galinhas', 'São sebastião', 'itú', 'mylink']

    const lugaresEmComum=['']

    for(let i=0; i<lugaresQueVisitei.length; i++){
        for(let j=0; i<lugaresAmiguinho.length; j++){
            if (lugaresQueVisitei[i]===lugaresAmiguinho[j]){
                lugaresEmComum.push(lugaresQueVisitei[i]);
                
            }
        }
    }
};

console.log(`Eu e a giullia visitamos em comum'${lugaresEmComum}`)

const amigosFace = ['Giullia', 'joão', 'vitória','tigas', 'gabriel'];
const amigoKaian =['maria', 'vitória', 'bia', 'andré', 'joão'];
const amigosEmComum=[];
for(let i=0; i<amigosFace.length; i++){
    for (let i=0; i<amigoKaian.length; j++){
        amigosEmComum.push(amigosFace[i])
    }
};
console.log(`Os dois tem ${amigosEmComum}, como amigos em comum`);

const numeroSecreto = 4;
let tentativas = 0;
for(let i = 0; i < 10; i++) {
    let palpiteAtual = parseInt(window.prompt('Digite o valor'));
   //laço de repetição !=
    if (palpiteAtual === numeroSecreto) {
        document.write(`Adivinhou era ${numeroSecreto}`)
        break
    } else {
        if (tentativas <= 5) {
            tentativas++;
            if(tentativas == 5){
                document.write(`Você passou das tentativas`);
                break;
            }
            
        }
    }
}