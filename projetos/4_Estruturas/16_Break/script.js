let nome= 'Alan'

for (let n=0; n <10; n = n + 1) {
    
    
    if(n==3) {
        nome = "João";
    }

    if ((n==5) && (nome=="João")){
        console.log(`O nome é João, pode parar.`);
        break;
    }

    console.log(nome, n);
}
