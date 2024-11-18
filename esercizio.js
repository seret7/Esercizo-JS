/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
I datatype sono dati ben definiti da inserire nelle variabili. 
Sono: - Stringhe, ovvero del testo
      - Numeri decimali o interi
      - Booleani, sono il risultato del verificarsi di determinate condizioni e possono avere solo due valori che sono True o False
      -Null, la variabile con questo dato, sono vuote
      -Undefined, le variabili con dato indefinito sono variabili a cui non sono stati assegnati valori*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
Gli oggetti sono dati strutturali, dichiarati con parentesi graffe, che contengono coppie Chiave-Valore ovvero due elementi correlati in cui la chiave è costante e il valore cambia in base al dato principale. */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 12
let numero2 = 20
let addizione = numero1 + numero2
console.log("la somma è" + addizione)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Serena"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero3 = 4
let sottrazione = numero3 - x
console.log ("il risultato della sottrazione è" + sottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"
let diversi = name1 !== name2
console.log (diversi)
let name1Lowercase = name1.toLowerCase
let name2Lowercase = name2.toLowerCase
console.log (name1Lowercase === name2Lowercase)
