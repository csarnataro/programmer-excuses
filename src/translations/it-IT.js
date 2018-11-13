export default (translations = [
  // Actually, that's a feature
  'Non è un bug, è una feature',
  // I broke that deliberately to do some testing
  'Lʼho rotto apposta per fare un test',
  // I can't make that a priority right now
  'Al momento ho altre priorità',
  // I can't test everything
  'Non posso testare tutto',
  // I couldn't find any examples of how that can be done anywhere else in the project
  'Non ho trovato nel progetto nessun altro esempio da copiare',
  // I didn't anticipate that I would make any errors
  'Non avevo previsto errori di questo tipo',
  // I didn't create that part of the program
  'Non ho scritto io quella parte del programma',
  // I forgot to commit the code that fixes that
  'Ho dimenticato di fare il commit del codice che sistema questa cosa',
  // I had to do the project backwards as people demanded results out of order
  'A me hanno chiesto di mostrare i risultati in un ordine diverso',
  // I haven't had any experience with that before
  'È la prima volta che mi capita qualcosa di simile in vita mia',
  // I have too many other high priority things to do right now
  'Ho altre cose da fare con priorità più alta in questo momento',
  // I heard there was a solar flare today
  'Ho sentito che oggi cʼè stata una tempesta solare',
  // I'm not familiar with it so I didn't fix it in case I made it worse
  'Non so bene come funziona, quindi non lʼho sistemato per evitare di peggiorare la situazione',
  // I'm not getting any error codes
  'Non vedo nessun codice dʼerrore',
  // I must have been stress testing our production server
  'Sto facendo degli stress test sul server di produzione',
  // In the interest of efficiency I only check my email for that on a Friday
  'Per una questione di efficienza, controllo le email solo di venerdì',
  // I thought I finished that
  'Mi sembrava di averlo già finito',
  // It must be a firewall issue
  'Forse cʼè un problema col firewall',
  // It must be because of a leap second
  'Forse cʼè un problema col secondo intercalare',
  // It must be because of a leap year
  'Forse cʼè un problema con lʼanno bisestile',
  // It's a browser compatibility issue
  'È un problema di compatibilità del browser',
  // It's a character encoding issue
  'È un problema di encoding dei caratteri',
  // It's a known bug with the server software
  'È un problema noto del server',
  // It's always been like that
  'Ha sempre funzionato così',
  // It's a remote vendor issue
  'È un problema del software del fornitore',
  // It's never done that before
  'Non è mai successo prima dʼora',
  // It works, but it's not been tested
  'Non è mai stato testato ma dovrebbe funzionare',
  // It would take too long to rewrite the code from scratch
  'Ci vuole troppo tempo per riscrivere tutto il codice da zero',
  // Management insisted we wouldn't need to waste our time writing unit tests
  'I nostri manager ci hanno detto di non perdere tempo a scrivere unit test',
  // My time was split in a way that meant I couldn't do either project properly
  'Mi hanno allocato su più progetti e non riesco a seguirli tutti come si deve',
  // Nobody asked me how long it would actually take
  'Nessuno mi ha mai chiesto quanto tempo ci vuole per completarlo',
  // Nobody has ever complained about it
  'Nessuno si è mai lamentato prima',
  // No one told me so I was forced to assume which way to do that
  'Nessuno mi ha detto come farlo, quindi ho deciso io di farlo così',
  // Oh, that was just a temporary fix
  'Ah, è solo un fix temporaneo',
  // Oh, you said you DIDN'T want that to happen?
  'Ah, mi avevi detto che NON doveva funzionare così?',
  // Our internet connection must not be working
  'La connessione internet non sta funzionando',
  // Our redundant systems must have failed as well
  'Il nostro sistema ad alta affidabilità è andato giù',
  // Somebody must have changed my code
  'Qualcuno ha cambiato il mio codice',
  // That code seemed so simple I didn't think it needed testing
  'Quel pezzo di codice sembrava talmente semplice che mi sembrava inutile testarlo',
  // That error means it was successful
  'Quellʼerrore in realtà significa che sta funzionando',
  // That feature was slated for phase two
  'Quella funzionalità è stata posticipata alla fase 2',
  // That feature would be outside of the scope
  'Quella funzionalità è out of scope',
  // That important email must have been marked as spam
  'Forse quellʼemail è finita nello spam',
  // That's already fixed it just hasn't taken effect yet
  'È già stato sistemato, ma ancora non è entrato in funzione',
  // That's the fault of the graphic designer
  'È colpa del grafico',
  // That was literally a one in a million error
  'Beh, quellʼerrore si verifica una volta su un milione',
  // That wasn't in the original specification
  'Non cʼera nelle specifiche originali',
  // The accounting department must have cancelled that subscription
  'Credo che lʼufficio acquisti abbia annullato il contratto col fornitore',
  // The client wanted it changed at the last minute
  'Il cliente mi ha chiesto una modifica allʼultimo minuto',
  // The existing design makes it difficult to do the right thing
  'Con questa grafica è impossibile fare quello che ci chiedono',
  // The marketing department made us put that there
  'Ce lʼha chiesto il marketing',
  // The original specification contained conflicting requirements
  'Le specifiche contengono requisiti in contrasto tra loro',
  // The person responsible doesn't work here anymore
  'La persona che si occupava di questa cosa non lavora più qui',
  // The program has never collected that information
  'Quellʼinformazione viene ignorata dal programma',
  // There must be something strange in your data
  'Cʼè qualcosa di sbagliato nei tuoi dati',
  // The request must have dropped some packets
  'Forse qualche pacchetto della richiesta è andato perso',
  // There's currently a problem with our hosting company
  'Ci sono dei problemi con lʼhosting',
  // There was too little data to bother with the extra functionality at the time
  'Quando abbiamo sviluppato quella funzionalità, cʼerano troppi pochi dati per testare',
  // There were too many developers working on that same thing
  'Su questa cosa ci hanno lavorato troppi programmatori',
  // The third party API is not responding
  'LʼAPI del fornitore non risponde',
  // The third party documentation doesn't exist
  'Il fornitore non ci ha dato la documentazione',
  // The unit test doesn't cover that eventuality
  'Lo unit test non copre quella casistica',
  // The WYSIWYG must have produced an invalid output
  'Lʼeditor WYSIWYG ha generato un output non valido',
  // THIS can't be the source of THAT
  'La causa non è quella che pensi tu',
  // Well, at least it displays a very pretty error
  'Beh, almeno il messaggio dʼerrore è molto chiaro',
  // Well at least we know not to try that again
  'Beh, almeno ora sappiamo che è meglio non cliccare lì',
  // Well, that's a first
  'Beh, è già un inizio',
  // We outsourced that months ago
  'Lʼabbiamo dato in outsourcing mesi fa',
  // We should have updated our software years ago
  'Avremmo dovuto aggiornare il software anni fa',
  // We spent three months debugging it because we only had one month to build it
  'Ci abbiamo messo tre mesi a debuggarlo perché avevamo solo un mese per svilupparlo',
  // What did I tell you about using parts of the system you don't understand?
  'Te lʼavevo detto che alcune funzionalità sono troppo complicate per te!',
  // What did you type in wrong to get it to crash?
  'Cosa diavolo hai fatto per farlo crashare?',
  // Why do you want to do it that way?
  'Ma sei sicuro di volerlo proprio così?',
  // You must be missing some of the dependencies
  'Ti sei sicuramente perso qualche dipendenza',
  // You must have the wrong version
  'Sicuramente stai usando la versione sbagliata',
  // Your browser must be caching the old content
  'Hai provato a pulire la cache del tuo browser?',
  // You're doing it wrong
  'Sei tu che stai sbagliando'
])
