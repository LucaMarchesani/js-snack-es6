// 1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
// 2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
// 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.


const studente = {
    nome: 'Luca',
    cognome: 'Marchesani',
    eta: '32'
}

for(let key in studente){
    console.log(studente[key]);
}

/**
 * 
   Crea un array composto da 10 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
   Infine stampa separatamente i 3 array.
 */

const veichles = [
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'benzina'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'gpl'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'diesel'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'elettrica'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'diesel'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'benzina'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'gpl'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'elettrica'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'diesel'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'elettrica'
    }
];


const benz = [];
const diesel = [];
const other = [];
console.log(benz, diesel, other);

for (let i = 0; i < veichles.length; i++) {
    if (veichles[i].alimentazione === 'benzina') {
        benz.push(veichles[i]);
    } else if (veichles[i].alimentazione === 'diesel') {
        diesel.push(veichles[i]);
    } else {
        other.push(veichles[i]);
    }
}

/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
]

 * Calcola quanto pesano tutte le zucchine.
 *
 */

const zucchine = [
    {
        variety: 'nero di milano',
        weight: 20,
        size: 12
    },
    {
        variety: 'ortolano di Faenza',
        weight: 12,
        size: 22
    },
    {
        variety: 'romanesco',
        weight: 55,
        size: 45
    },
    {
        variety: 'lunga fiorentina',
        weight: 5,
        size: 32
    },
    {
        variety: 'siciliano',
        weight: 54,
        size: 63
    },
    {
        variety: 'striata di Napoli',
        weight: 73,
        size: 4
    },
    {
        variety: 'bianca triestina',
        weight: 50,
        size: 56
    },
    {
        variety: 'rigata pugliese',
        weight: 12,
        size: 24
    },
    {
        variety: 'tondo di Piacenza',
        weight: 9000,
        size: 88
    },
    {
        variety: 'tondo di Nizza',
        weight: 333,
        size: 123
    }
];

let totale = 0;

for (let i = 0; i < zucchine.length; i++) {
    totale += zucchine[i].weight;
}

console.log(totale);
