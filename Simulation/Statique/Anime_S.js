/*------------------------- Déclaration du Processeur -------------------------*/

class Processeur {
    #Num
    #Processus
    #Temps_utilisation

    /* Constructeur */
    constructor(num, processus, Temps) {
        this.#Num = num;
        this.#Processus = processus;
        this.#Temps_utilisation = Temps;
    }

    /* Getters */
    getNum = function () {
        return this.#Num;
    }
    getProcessus = function () {
        return this.#Processus;
    }
    getTempsUtilisation = function () {
        return this.#Temps_utilisation;
    }

    /* Setters */
    setNum = function (num) {
        this.#Num = num;
    }
    setProcessus = function (processus) {
        this.#Processus = processus;
    }
    setTempsUtilisation = function (temps) {
        this.#Temps_utilisation = temps;
    }

    /* Méthodes */
    ProcesseurActif = function () {
        if (this.#Processus === undefined) {
            return false;
        } else {
            return true;
        }
    }
    // Des méthodes d'affichage
    afficher = function () {
        console.log("\n----------- Processeur -----------");
        console.log("Num : " + this.#Num);
        console.log("Processus ID : " + this.#Processus.getPCB().getPID());
        console.log("Contexte du processus : " + this.#Processus.getPCB().getContexte());
        console.log("Temps d'utilisation : " + this.#Temps_utilisation + "s");
        console.log("----------------------------------");
    }

    bloquer = function () {

    }

    activer = function () {

    }
}

/*------------------------- Déclaration d'un Processus -------------------------*/

class Processus {

    #PCB;
    #TempsArrive;
    #TempsExecution;
    #TempsRestant;
    #Priorite;
    #Interruptions;
    #TempsAttente;
    #TempsSejour;
    #TempsReponse;

    /* Constructeur */
    constructor(pcb, T1, T2, prio, It) {
        this.#PCB = pcb;
        this.#TempsArrive = T1;
        this.#TempsExecution = T2;
        this.#TempsRestant = T2;
        this.#Priorite = prio;
        this.#Interruptions = [];
        this.#Interruptions = It;
        this.#TempsAttente = 0;
        this.#TempsSejour = 0;
        this.#TempsReponse = 0;
    };

    /* Getters */

    getPCB = function () {
        return this.#PCB;
    }
    getTempsArrive = function () {
        return this.#TempsArrive;
    }
    getTempsExecution = function () {
        return this.#TempsExecution;
    }
    getTempsRestant = function () {
        return this.#TempsRestant;
    }
    getPriorite = function () {
        return this.#Priorite;
    }
    getInterruptions = function () {
        return this.#Interruptions;
    }
    getTempsAttente = function () {
        return this.#TempsAttente;
    }
    getTempsSejour = function () {
        return this.#TempsSejour;
    }
    getTempsReponse = function () {
        return this.#TempsReponse;
    }

    /* Setters */

    setPCB = function (pcb) {
        this.#PCB = pcb;
    }
    setTempsArrive = function (T) {
        this.#TempsArrive = T;
    }
    setTempsExecution = function (T) {
        this.#TempsExecution = T;
    }
    setTempsRestant = function (T) {
        this.#TempsRestant = T;
    }
    setPriorite = function (P) {
        this.#Priorite = P;
    }
    setInterruptions = function (It) {
        this.#Interruptions = It;
    }
    setTempsAttente = function (t) {
        this.#TempsAttente = t;
    }
    setTempsSejour = function (t) {
        this.#TempsSejour = t;
    }
    setTempsReponse = function (t) {
        this.#TempsReponse = t;
    }

    /* ----------------------------- */
    DetruireInterruption(pos) {
        delete (this.#Interruptions.splice(pos, 1));
    }

    /* Affichage */
    afficher = function () {
        console.log("\n**************** Processus ****************");
        this.#PCB.afficher();
        console.log("Temps d'arrivée : " + this.#TempsArrive);
        console.log("Temps d'exécution : " + this.#TempsExecution);
        console.log("Temps restant d'exécution : " + this.#TempsRestant);
        console.log("Priorité : " + this.#Priorite);
        console.log("Interruptions : " + this.#Interruptions.length);
        for (let i = 0; i < this.#Interruptions.length; i++) {
            this.#Interruptions[i].afficher();
        }
        console.log("Temps d'attente : " + this.#TempsAttente);
        console.log("Temps de séjour : " + this.#TempsSejour);
        console.log("Temps de réponse : " + this.#TempsReponse);
        console.log("\n*******************************************");
    }
}

/*------------------------- Déclaration du PCB d'un processus -------------------------*/

class PCB {
    #PID
    #Etat
    #Contexte

    /* Constructeur */
    constructor(pid, etat, contexte) {
        this.#PID = pid;
        this.#Etat = etat;
        this.#Contexte = contexte;
    }

    /* Getters */
    getPID = function () {
        return this.#PID;
    }
    getEtat = function () {
        return this.#Etat;
    }
    getContexte = function () {
        return this.#Contexte;
    }

    /* Setters */
    setPID = function (pid) {
        this.#PID = pid;
    }
    setEtat = function (etat) {
        this.#Etat = etat;
    }
    setContexte = function (contexte) {
        this.#Contexte = contexte;
    }

    /* Affichage */
    afficher = function () {
        console.log("\n----------- PCB -----------");
        console.log("PID : ", this.#PID);
        console.log("Etat : ", this.#Etat);
        console.log("Contexte : ", this.#Contexte);
        console.log("---------------------------");
    }
}

/*------------------------- Déclaration d'une Interruption -------------------------*/

class Interruption {
    #Type
    #Temps_blocage
    #Temps_declenchement

    /*Constructeur */
    constructor(type, t1, t2) {
        this.#Type = type;
        this.#Temps_blocage = t1;
        this.#Temps_declenchement = t2;
    }

    /* Getters */
    getType = function () {
        return this.#Type;
    }
    getTempsBlocage = function () {
        return this.#Temps_blocage;
    }
    getTempsDeclenchement = function () {
        return this.#Temps_declenchement;
    }

    /* Setters */
    setType = function (type) {
        this.#Type = type;
    }
    setTempsBlocage = function (temps) {
        this.#Temps_blocage = temps;
    }
    setTempsDeclenchement = function (temps) {
        this.#Temps_declenchement = temps;
    }

    /* Affichage */
    afficher = function () {
        console.log("\n--------------- Interruption ---------------");
        console.log("Type : " + this.#Type);
        console.log("Temps de blocage : " + this.#Temps_blocage);
        console.log("Temps de déclenchement : " + this.#Temps_declenchement);
        console.log("-------------------------------------------");
    }
}

/*------------------------- Déclaration d'une File -------------------------*/

class File {
    #file
    #Tete
    #Queue

    /* Constructeur */
    constructor() {
        this.#file = new Array();
        this.#Tete = -1;
        this.#Queue = -1;
    }

    /* Getters */
    getFile = function () {
        return this.#file;
    }
    getTete = function () {
        return this.#Tete;
    }
    getQueue = function () {
        return this.#Queue;
    }

    FileVide = function () {
        if (this.#file.length === 0) {
            return (true);
        } else {
            return (false);
        }
    }

    Enfiler = function (processus) {
        this.#Queue += 1;
        if (this.FileVide()) {
            this.#Tete += 1;
        }
        this.#file.push(processus);
        return (true);
    }

    Defiler = function (processus) {
        if (this.FileVide()) {
            console.log('done');
            return false;
        } else {
            let b = this.#file.shift();
            processus.setPCB(b.getPCB());
            processus.setTempsArrive(b.getTempsArrive());
            processus.setTempsExecution(b.getTempsExecution());
            processus.setTempsRestant(b.getTempsRestant());
            processus.setPriorite(b.getPriorite());
            processus.setInterruptions(b.getInterruptions());
            processus.setTempsSejour(b.getTempsSejour());
            processus.setTempsAttente(b.getTempsAttente());
            processus.setTempsReponse(b.getTempsReponse());
            this.#Queue -= 1;
            if (this.FileVide()) {
                this.#Tete -= 1;
            }
            return true;
        }
    }

    Permut(pos1, pos2) {
        let p1 = new Processus();
        p1 = this.#file[pos1];
        this.#file[pos1] = this.#file[pos2];
        this.#file[pos2] = p1;
    }

    /*Ordonnanceur_FIFO() */
    /*-----------------------------------------------------------------------------------------------------*/
    /*Ordonnanceur_SJF() */
    ordonnanceur_sjf = function() {
        for (var i = this.#file.length; i > 0 ; i--) {
            for (var j = 1; j < i ; j++) {
                if (this.#file[j].getTempsRestant() < this.#file[j-1].getTempsRestant()) {
                    this.Permut(j-1, j);
                }
            }
        }
        // Affichage HTML
        let tds = document.querySelectorAll('body table.fileAttente tbody tr td') ;
        let k = 0 ;
        if(this.#file.length < 10){
            k = this.#file.length ;
        }else{
            k = 10 ;
        }
        for(let i=0 ; i<k ; i++){
            tds[9 - i].className = 'fileAttente carre orange' ;
            tds[9 - i].textContent = this.#file[i].getPCB().getPID() ;
        }
    }
}

/*------------------------- Déclaration d'une File d'Attente -------------------------*/
/* Héritage de la classe File */

class File_Attente extends File {
    #Priorite;
    #Quantum;

    /* Constructeur */
    constructor(P, Q) {
        super();
        this.#Priorite = P;
        this.#Quantum = Q;
    }

    /* Getters */
    getPriorite = function () {
        return this.#Priorite;
    }
    getQuantum = function () {
        return this.#Quantum;
    }

    /* Setters */
    setPriorite = function (p) {
        this.#Priorite = p;
    }
    setQuantum = function (q) {
        this.#Quantum = q;
    }

    /*Ordonnanceur_RR()*/
    /*Ordonnanceur_Prio()*/

}

/*------------------------- Déclaration d'une File Multiniveaux -------------------------*/

class File_Multiniveaux {
    #files;

    /* Constructeur */
    constructor(nombre_files) {
        this.#files = new Array(nombre_files);
        for (let i = 0; i < nombre_files; i++) {
            this.#files[i] = new File_Attente();
        }
    }

    /* Getters */
    getFiles() {
        return this.#files;
    }
    getFile(nb) {
        return this.#files[nb];
    }

    /* Setters */
    setFiles(files) {
        this.#files = files;
    }

    setFile(nb, file) {
        this.#files[nb] = file;
    }

    /*Ordonnanceur_FMAR() */
    Ordonnanceur_FMAR() {
        let i = 0;
        for (i = 0; i < this.#files.length; i++) {
            if (this.#files[i].FileVide()) {
                continue;
            } else {
                return i;
            }
        }
        return -1;

    }

    /*Ordonnanceur_Prio()*/
    Ordonnanceur_PRIOS() {
        if(this.#files[0].getFile().length > 0){
            for (var i = this.#files[0].getFile().length; i > 0 ; i--) {
                for (var j = 1; j < i ; j++) {
                    if (this.#files[0].getFile()[j].getPriorite() < this.#files[0].getFile()[j-1].getPriorite()) {
                        this.#files[0].Permut(j-1, j);
                    }
                }
            }
            // Affichage HTML
            let tds = document.querySelectorAll('body table.fileAttente tbody tr td') ;
            let k = 0 ;
            if(this.#files[0].getFile().length < 10){
                k = this.#files[0].getFile().length ;
            }else{
                k = 10 ;
            }
            for(let i=0 ; i<k ; i++){
                tds[9 - i].className = 'fileAttente carre orange' ;
                tds[9 - i].textContent = this.#files[0].getFile()[i].getPCB().getPID() ;
            }
            return 0 ;
        }else{
            return -1 ;
        }
    }
}

/*------------------------- Déclaration du Dispatcher -------------------------*/

class Dispatcher {
    #PCB_processus;
    #NbChangementContexte;
    #Signal

    /* Constructeur */
    constructor() {
        this.#PCB_processus = [];
        this.#NbChangementContexte = 0;
        this.#Signal = true;
    }

    /* Getters */
    getPCB_Processus = function () {
        return this.#PCB_processus;
    }
    getNbChangementContexte = function () {
        return this.#NbChangementContexte;
    }
    getSignal = function () {
        return this.#Signal;
    }

    /* Setters */
    setPCB_processus = function (tab) {
        this.#PCB_processus = tab;
    }
    setNbChangementContexte = function (nb) {
        this.#NbChangementContexte = nb;
    }
    setSignal = function (etat) {
        this.#Signal = etat;
    }

    /* Méthodes */
    AjouterPCB = function (pcb) {
        this.#PCB_processus.push(pcb);
        return true;
    }
    SupprimerPCB = function (pcb) {
        this.#PCB_processus.splice(this.#PCB_processus.indexOf(pcb), 1);
        return true;
    }
    IncrementerNb = function () {
        this.#NbChangementContexte ++;
        return true;
    }
}

/*------------------------- Déclaration d'une classe globale --------------------------*/

class Scheduler {
    #processeur;
    #dispatcher;
    #files;
    #fileBloquee;
    #processus;

    /* Constructeur */
    constructor(processeur, dispatcher, files, fileBloquee, processus) {
        this.#processeur = processeur;
        this.#dispatcher = dispatcher;
        this.#files = files;
        this.#fileBloquee = fileBloquee;
        this.#processus = processus;
    }

    /* Getters */
    getFiles = function () {
        return this.#files;
    }
    getProcesseur = function () {
        return this.#processeur;
    }
    getProcessus = function () {
        return this.#processus;
    }
    getDispatcher = function () {
        return this.#dispatcher;
    }
    getFileBloquee = function () {
        return this.#fileBloquee;
    }

    /* Setters */
    setProcesseur = function (processeur) {
        this.#processeur = processeur;
    }
    setDispatcher = function (dispatcher) {
        this.#dispatcher = dispatcher;
    }
    setFiles = function (files) {
        this.#files = files;
    }
    setFileBloquee = function (file) {
        this.#fileBloquee = file;
    }
    setProcessus = function (processus) {
        this.#processus = processus;
    }

    // Rajoute le processus dans le tableau en le gardant tjrs trié
    AjouterProcessus(process) {
        let t = process.getTempsArrive();
        let min = 0;
        let max = this.#processus.length - 1;
        let stop = false;
        let j = 0;
        while (min <= max && !stop) {
            j = Math.trunc((min + max) / 2);
            if (t == this.#processus[j].getTempsArrive()) {
                stop = true;
            } else {
                if (t < this.#processus[j].getTempsArrive()) {
                    max = j - 1;
                } else {
                    min = j + 1;
                }
            }
        }
        if (min > max) {
            j = min;
        }
        this.#processus.splice(j, 0, process);
        // Affichage HTML
        let tableau = document.querySelector('body table.tableau tbody tr');   // lecture du contenu du tableau
        let td = document.createElement('td');                          // creer une nouvelle colonne
        td.className = 'tableau rond';
        td.textContent = process.getPCB().getPID();
        tableau.insertBefore(td, tableau.children[j]);                  // inserer le processus dans la nouvelle colonne
        let th = document.querySelector('body table.tableau thead th');
        th.setAttribute('colspan', '' + document.body.querySelectorAll('td').length); 
    }

    // position : sa position dans la tableau de processus[]
    // num_file : numero de la file ou le mettre (0 dans les cas à file simple)
    //temps : pour la vitesse de simulation
    CreerProcessus(position, num_file , temps) {
           
        let process = new Processus();
        process.setPCB(this.#processus[position].getPCB());
        process.setTempsArrive(this.#processus[position].getTempsArrive());
        process.setTempsExecution(this.#processus[position].getTempsExecution());
        process.setTempsRestant(this.#processus[position].getTempsRestant());
        process.setPriorite(this.#processus[position].getPriorite());
        process.setInterruptions(this.#processus[position].getInterruptions());
        this.#processus.splice(position, 1);
        this.#dispatcher.AjouterPCB(process.getPCB());
        this.#files.getFile(num_file).Enfiler(process);
        // Affichage HTML
        let ms = document.querySelector('body .msg') ;
        ms.textContent = "Creation du processus " +process.getPCB().getPID() + " ! " ;   // Affichage d'un message de creation
        anime({
            targets : ms ,
            opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
            duration : 2000 ,
        });

        let tr1 = document.querySelector('body table.tableau tbody tr');              // Lecture du contenu du tableau des processus
        tr1.firstElementChild.classList.add("vert");
        anime({
            targets: tr1.firstElementChild,
            easing: 'easeInOutQuad',
            opacity: ['0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0'],
            duration: temps * 2 / 5 ,
        });
        let tr = document.querySelector('body table.fileAttente tbody tr') ;                  // Lecture du contenu du File d'attente
        let tds = document.querySelectorAll('body table.fileAttente tbody tr td') ;
        let i = 9;
           for( i=9 ; i>0 ;i--){   // se deplacer jusqu'à la derniere case vide
               let td = tds[i] ;
               if(td.textContent == ''){
                   break ;
               }
           }
        if (i == 0 && tds[i].textContent != ''){
            setTimeout(function(){
                tr1.removeChild(tr1.firstElementChild);
            }, temps * 2 / 5) ;
        }else{
           setTimeout(function () {
                tds[0].textContent = process.getPCB().getPID() ;
                tds[0].className = 'fileAttente carre orange' ;
                tr1.removeChild(tr1.firstElementChild);
                anime({
                    targets: tds[0],
                    opacity: ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1'],
                    duration: temps / 5,
                });
            }, temps * 2 / 5)
            setTimeout(function(){
                anime({
                    targets : tds[0] ,
                    translateX : 45*i ,
                    easing : 'linear' ,
                    duration : temps * 2 / 5,
                }) ;
                setTimeout(function(){
                    tds[i].textContent = process.getPCB().getPID() ;
                    tds[i].className = 'fileAttente carre orange' ;
                    
                    if (i != 0){
                        tr.removeChild(tr.firstElementChild) ;
                        let td = document.createElement('td') ;
                        td.className = 'filedAttente ' ;
                        tr.insertBefore(td , tr.firstElementChild) ; 
                    }
                }, temps * 2 / 5) ;
            }, temps * 3 / 5) ;
        }
    }

    // num_file : numero de la file d'ou défiler le processus en question
    //temps : pour la vitesse de simulation
    ActiverProcessus(num_file , temps) {
        
        let process = new Processus();
        this.#files.getFile(num_file).Defiler(process);
        this.#processeur.setProcessus(process);
        this.#dispatcher.setSignal(false);
        process.getPCB().setEtat("Actif");
        // Affichage HTML
        let ms = document.querySelector('body .msg') ;
        ms.textContent = "Activation du Processus " +process.getPCB().getPID() + " ! " ;  // Affichage d'un message d'activation
        anime({
            targets : ms ,
            opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
            duration : 2000 ,
        });
        let tfs = document.querySelectorAll('body table.fileAttente tbody tr td') ;          // lecture du contenu de la file d'attente
        let pr = document.querySelectorAll('body table.processeur tbody tr td') ;          // lecture du contenu du processeur
        let tf = tfs[9] ;
        anime({
            targets : tf ,
            translateX : 200 ,
            easing : 'linear' ,
            duration : temps,
        }) ;
        setTimeout(function()
        {
            pr[0].textContent = process.getPCB().getPID() ;
            pr[0].className = 'processeur carre orange' ;
            tf.parentElement.removeChild(tf) ;
            let ts = document.createElement('td') ;
            ts.className = 'filedAttente' ;
            tfs[0].parentElement.insertBefore(ts,tfs[0])
            let td = document.createElement('td') ;
            td.className = 'processeur' ;
            
            
        },temps);
        let animation = anime.timeline({
            duration: 1000, 
            easing: 'easeInOutSine',
            loop: true
          });           
            
          animation.add({
            targets: pr[0],
            rotate: 360,
              backgroundColor: [
                {value: 'rgb(0, 255, 221)'},
                {value: 'rgb(0, 128, 128)', delay: 500}
              ]
          });
          setTimeout(function(){
            if (files.getFile(0).getFile().length > 9)
            {
                let tr = document.querySelectorAll('body table.fileAttente tbody tr td') ;
                tr[0].textContent = files.getFile(0).getFile()[9].getPCB().getPID() ;
                tr[0].className = 'fileAttente carre orange' ;
            }
          },temps) ;
    }

    // num_file : numero de la file ou enfiler le processus
    //temps : pour la vitesse de simulation
    DesactiverProcessus(num_file , temps) {

        // Changement de Contexte
        this.#processeur.getProcessus().getPCB().setEtat("Pret");
        let a = this.#processeur.getProcessus().getPCB().getContexte();
        let b = a[4];
        let c = this.#processeur.getProcessus().getPCB().getPID() ;
        this.#processeur.getProcessus().getPCB().setContexte('Tour' + String.fromCharCode(b.charCodeAt() + 1));

        this.#files.getFile(num_file).Enfiler(this.#processeur.getProcessus());
        this.#processeur.setProcessus(undefined);
        this.#dispatcher.setSignal(true);

        // Affichage HTML
        let ms = document.querySelector('body .msg') ;
        ms.textContent = "Desactivation du Processus " + c + " ! " ;        // Affichage d'un message de desactivation 
        anime({
            targets : ms ,
            opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
            duration : 2000 ,
        });
        let pr = document.querySelector('body table.processeur tbody tr td') ;
        let animation = anime.timeline({
            easing : 'linear' ,
            duration : 1000 ,
        }) ;
            animation.add({
                targets : pr ,
                rotate : [
                    {value : 0 , duration : 100}
                ] ,
                width : '50' ,
                height : '50' ,
                backgroundColor: 'rgb(252, 164, 1)' ,
                translateY : [
                    {value : -80 , duration : temps / 4 }
                ] ,
                translateX : [
                    {value : -((innerWidth*718)/1536) , delay : temps / 4 , duration : temps / 4 }
                ] ,
            })
            
            animation.add({
                targets : pr ,
                backgroundColor: 'rgb(252, 164, 1)' ,
                translateY : [
                    {value : 10 , duration : temps / 4 }
                ] ,
            }) ;
        
        let tr1 = document.querySelector('body table.processeur tbody tr');   // Lecture du contenu du processeur
        tr1.firstElementChild.classList.add("orange");
        let tr = document.querySelector('body table.fileAttente tbody tr') ;     // Lecture du contenu du file d'attente
        let tds = document.querySelectorAll('body table.fileAttente tbody tr td') ;
        let i = 9;
           for( i=9 ; i>0 ;i--){    // se deplacer jusqu'à la derniere case vide
               let td = tds[i] ;
               console.log(td) ;
               console.log(i) ;
               if(td.textContent == ''){
                   break ;
               }
           }
        if (i == 0 && tds[i].textContent != ''){
            setTimeout(function(){
                tr1.removeChild(tr1.firstElementChild);
            }, temps * 3 / 4) ;
        }else{
           setTimeout(function () {
                tds[0].textContent = pr.textContent ;
                tds[0].className = 'fileAttente carre orange' ;
                tr1.removeChild(tr1.firstElementChild);
            }, temps * 3 / 4) ;
            setTimeout(function(){
                anime({
                    targets : tds[0] ,
                    translateX : 45*i ,
                    easing : 'linear' ,
                    duration : temps / 4,
                }) ;
                setTimeout(function(){
                    tds[i].textContent = pr.textContent ;
                    tds[i].className = 'fileAttente carre orange' ;
                    
                    if (i != 0){
                        tr.removeChild(tr.firstElementChild) ;
                        let td = document.createElement('td') ;
                        td.className = 'filedAttente ' ;
                        tr.insertBefore(td , tr.firstElementChild) ; 
                    }
                }, temps / 4) ;
            }, temps * 3 / 4) ;
        }
        setTimeout(function(){
            let pro = document.querySelector('body table.processeur tbody tr') ;       
            let td = document.createElement('td') ;
            td.className = 'processeur' ;
            pro.insertBefore(td,pro.firstElementChild) ;
        }, temps * 3 / 4);
    }

    //temps : pour la vitesse de simulation
    BloquerProcessus(temps) {

        // Changement de Contexte
        this.#processeur.getProcessus().getPCB().setEtat("Bloque");
        let a = this.#processeur.getProcessus().getPCB().getContexte();
        let b = a[4];
        let c = this.#processeur.getProcessus().getPCB().getPID() ;
        this.#processeur.getProcessus().getPCB().setContexte('Tour' + String.fromCharCode(b.charCodeAt() + 1));

        this.#fileBloquee.Enfiler(this.#processeur.getProcessus());
        this.#processeur.setProcessus(undefined);
        this.#dispatcher.setSignal(true);
        // Affichage HTML
        let ms = document.querySelector('body .msg') ;
        ms.textContent = "Bloquage du Processus " + c + " ! " ;     // Affichage d'un message de blocage
        anime({
            targets : ms ,
            opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
            duration : 2000 ,
        });
        let pr = document.querySelector('body table.processeur tbody tr td') ;       // lecture du contenu de processeur
        let animation = anime.timeline({
            easing : 'linear' ,
            duration : 1000 
        }) ;
        animation.add({
            targets : pr ,
            rotate : [
                {value : 0 ,duration : 0}
            ] ,
            width : '50' ,
            height : '50' ,
            backgroundColor: 'rgb(255 ,0 ,0 )' ,
            translateY : [
                {value : ((innerHeight*209)/761) , duration : temps / 3}
            ] ,
            translateX : [
                {value : -220 , delay : temps / 3 , duration : temps / 3}
            ] ,
        })
        
        let tr1 = document.querySelector('body table.processeur tbody tr');
        tr1.firstElementChild.classList.add("orange");
        let tr = document.querySelector('body table.fileblocage tbody tr') ;            // Lecture du contenu de la file de blocage
        let tds = document.querySelectorAll('body table.fileblocage tbody tr td') ;
        let i = 0;
           for( i=0 ; i<9 ;i++){            // se deplacer jusqu'à la derniere case vide
               let td = tds[i] ;
               if(td.textContent == ''){
                   break ;
               }
           }
        if (i == 9 && tds[i].textContent != ''){
            setTimeout(function(){
                tr1.removeChild(tr1.firstElementChild);
            }, temps) ;
        }else{
           setTimeout(function () {
                tds[9].textContent = pr.textContent ;
                tds[9].className = 'fileblocage carre red' ;
                tr1.removeChild(tr1.firstElementChild);
            }, temps * 2 / 3) ;
            setTimeout(function(){
                if (i != 9){
                    anime({
                        targets : tds[9] ,
                        translateX : (-40)*(10-i) ,
                        easing : 'linear' ,
                        duration : temps / 3 ,
                    }) ;
                }
                
                setTimeout(function(){
                    tds[i].textContent = pr.textContent ;
                    tds[i].className = 'fileblocage carre red' ;
                    if (i != 9){
                        console.log(i) ;
                        tr.removeChild(tr.lastElementChild) ;
                        let td = document.createElement('td') ;
                        td.className = 'filedeblocage' ;
                        tr.appendChild(td) ; 
                    }
                }, temps / 3) ;
            }, temps * 2/3) ;
        }
        setTimeout(function(){
            let pro = document.querySelector('body table.processeur tbody tr') ;
            let td = document.createElement('td') ;
            td.className = 'processeur' ;
            pro.insertBefore(td,pro.firstElementChild) ;
        }, temps);

    }

    // num_file : numero de la file ou enfiler le processus
    // pos : position du processus dans la file des processus bloqués
    //temps : pour la vitesse de simulation
    ReveillerProcessus(position, num_file , temps) {
        let process = new Processus();
        this.#fileBloquee.Permut(0, position);
        this.#fileBloquee.Defiler(process);
        this.#files.getFile(num_file).Enfiler(process);
        process.getPCB().setEtat("Pret");
        
        // Affichage HTML
        let ms = document.querySelector('body .msg') ;
        ms.textContent = "Reveil du Processus " + process.getPCB().getPID() + " ! " ;       // Affichage d'un message de reveil
        anime({
            targets : ms ,
            opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
            duration : 2000 ,
        });
        let pr = document.querySelector('body table.fileblocage tbody tr td') ;         // Lecture du contenu de la file de blocage
       
        anime({
            targets : pr ,
            translateY : -180 ,
            easing : 'linear' ,
            duration : temps / 2 ,
        })
        let tr1 = document.querySelector('body table.fileblocage tbody tr');
        tr1.firstElementChild.classList.add("orange");
        let tr = document.querySelector('body table.fileAttente tbody tr') ;            // Lecture du contenu de la file d'attente
        let tds = document.querySelectorAll('body table.fileAttente tbody tr td') ;
        let i = 9;
           for( i=9 ; i>0 ;i--){                // se deplacer jusqu'à la derniere case vide
               let td = tds[i] ;
               if(td.textContent == ''){
                   break ;
               }
           }
        if (i == 0 && tds[i].textContent != ''){
            setTimeout(function(){
                tr1.removeChild(tr1.firstElementChild);
            }, temps / 2) ;
        }else{
           setTimeout(function () {
                tds[0].textContent = pr.textContent ;
                tds[0].className = 'fileAttente carre orange' ;
                tr1.removeChild(tr1.firstElementChild);    
            }, temps / 2) ;
            setTimeout(function(){
                anime({
                    targets : tds[0] ,
                    translateX : 45*i ,
                    easing : 'linear' ,
                    duration : temps / 2,
                }) ;
                setTimeout(function(){
                    tds[i].textContent = pr.textContent ;
                    tds[i].className = 'fileAttente carre orange' ;
                    
                    if (i != 0){
                        tr.removeChild(tr.firstElementChild) ;
                        let td = document.createElement('td') ;
                        td.className = 'filedAttente ' ;
                        tr.insertBefore(td , tr.firstElementChild) ; 
                    }
                }, temps / 2) ;
            }, temps / 2) ;
        }
        setTimeout(function(){
            let tfs = document.querySelectorAll('body table.fileblocage tbody tr td') ;
            let ts = document.createElement('td') ;
            ts.className = 'filedeblocage' ;
            tfs[0].parentElement.insertBefore(ts,tfs[9]) ;
            let td = document.createElement('td') ;
            td.className = 'processeur' ;
        }, temps);
        setTimeout(function(){
            if (fileBloquee.getFile().length> 9)
            {
                let tr = document.querySelectorAll('body table.fileblocage tbody tr td') ;
                tr[9].textContent = fileBloquee.getFile()[9].getPCB().getPID() ;
                tr[9].className = 'fileblocage carre red' ;
            }
          }, temps) ;

    }

    //temps : pour la vitesse de simulation
    DetruireProcessus(temps) {
        let c = this.#processeur.getProcessus().getPCB().getPID() ;
        delete (this.#processeur.getProcessus());
        this.#processeur.setProcessus(undefined);
        this.#dispatcher.setSignal(true);
        // Affichage HTML
        let ms = document.querySelector('body .msg') ;
        ms.textContent = "Destruction du Processus " + c + " ! " ;          // Affichage d'un message de destruction
        anime({
            targets : ms ,
            opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
            duration : 2000 ,
        });
        let tr = document.querySelector('body table.processeur tbody tr') ;         // Lecture du contenu de processeur
        anime({
            targets : tr.firstElementChild ,
            translateX : 300 ,
            rotate : [
                {value : 0 , duration : 100}
            ] ,
            width : '50' ,
            height : '50' ,
            opacity: ['0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0' ],
            easing : 'easeInOutSine' ,
            duration : temps 
           
        });
        setTimeout(function(){
            let pro = document.querySelector('body table.processeur tbody tr') ;
            let td = document.createElement('td') ;
            td.className = 'processeur' ;
            pro.insertBefore(td,pro.firstElementChild) ;
        }, temps);
    }

       /***********************************Ordonnanceur FIFO***************************************************/
       Ordonnanceur_FIFO() {
        let i = this.#processus.length, j = 0, t = 0, h = 0, arret = false, cpt = 0
        while (j !== i) {
            // Vérifier les Temps d'arrivée des processus 
            while (h < this.#processus.length) {
                if (this.#processus[h].getTempsArrive() === t) {
                    console.log('t = ' + t + ' : ' + 'Création du processus' + this.#processus[h].getPCB().getPID());
                    this.CreerProcessus(h, 0);

                } else {
                    if (this.#processus[h].getTempsArrive() > t) {
                        break;
                    }
                    h++;
                }
            }
            h = 0;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true) {
                if (this.#files.getFile(0).getFile().length != 0) {
                    this.ActiverProcessus(0);
                    this.#dispatcher.IncrementerNb();
                    console.log('t = ' + t + ' : ' + 'Activation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                    if (this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()) {
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente());
                        console.log("Temps de reponse = " + this.#processeur.getProcessus().getTempsReponse());
                    }
                    this.#dispatcher.setSignal(false);
                } else {
                    console.log('t = ' + t + ' : ' + 'Aucun processus à activer !');
                }
            }
            else { //Si le processeur est actif
                if (this.#processeur.ProcesseurActif()) {
                    if (this.#processeur.getProcessus().getTempsRestant() === 0) {
                        console.log('t = ' + t + ' : ' + 'Destruction du processus' + this.#processeur.getProcessus().getPCB().getPID());
                        console.log("Temps de sejour : " + this.#processeur.getProcessus().getTempsSejour());
                        console.log("Temps de Attente : " + this.#processeur.getProcessus().getTempsAttente());
                        this.DetruireProcessus();
                        j++;
                        this.#dispatcher.setSignal(true);
                        cpt = 0;
                        arret = true;
                    }
                    else {
                        if (this.#processeur.getProcessus().getInterruptions().length > 0) {
                            if (this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()) {
                                console.log('t = ' + t + ' : ' + 'Bloquage du processus' + this.#processeur.getProcessus().getPCB().getPID() + ': Interruption');
                                this.BloquerProcessus();
                                cpt = 0;
                                this.#dispatcher.setSignal(true);
                                arret = true;
                            }
                        }
                    }
                }
            }

            if (!arret) {
                for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0) {
                        console.log('t = ' + (t) + ' : ' + 'Réveil du processus' + this.#fileBloquee.getFile()[j].getPCB().getPID());
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0);
                        this.ReveillerProcessus(j, 0);
                        arret = true;
                    }
                }
                if (!arret) {
                    for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1);
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1);
                    }
                    for (let j = 0; j < this.#files.getFiles().length; j++) {
                        for (let k = 0; k < this.#files.getFile(j).getFile().length; k++) {
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente() + 1);
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour() + 1);
                            console.log("Processus" + this.#files.getFile(j).getFile()[k].getPCB().getPID() + " --> " + "Temps d'attente : " + this.#files.getFile(j).getFile()[k].getTempsAttente() + "  ,  Temps de sejour : " + this.#files.getFile(j).getFile()[k].getTempsSejour());
                        }
                    }
                    if (this.#processeur.ProcesseurActif()) {
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1);
                    }
                }
            }
            if (!arret) {
                if (this.#processeur.ProcesseurActif()) {
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1);
                    cpt++;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation() + 1);
                }
                t++;
            } else {
                arret = false;
            }
        }
        console.log('Nombre de changements de contexte : ' + this.#dispatcher.getNbChangementContexte());
        console.log("\n--------Fin de l'éxecution---------");
    }

    /***********************************Ordonnanceur SJF***************************************************/
    Ordonnanceur_SJF() {
        let i = this.#processus.length, j = 0, t = 0, h = 0, arret = false, cpt = 0
        while (j !== i) {
            // Vérifier les Temps d'arrivée des processus 
            while (h < this.#processus.length) {
                if (this.#processus[h].getTempsArrive() === t) {
                    console.log('t = ' + t + ' : ' + 'Création du processus' + this.#processus[h].getPCB().getPID());
                    this.CreerProcessus(h, 0);

                } else {
                    if (this.#processus[h].getTempsArrive() > t) {
                        break;
                    }
                    h++;
                }
            }
            h = 0;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true) {
                this.#files.getFile(0).ordonnanceur_sjf();
                if (this.#files.getFile(0).getFile().length !== 0) {
                    this.ActiverProcessus(0);
                    this.#dispatcher.IncrementerNb();
                    console.log('t = ' + t + ' : ' + 'Activation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                    if (this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()) {
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente());
                        console.log("Temps de reponse = " + this.#processeur.getProcessus().getTempsReponse());
                    }
                    this.#dispatcher.setSignal(false);
                } else {
                    console.log('t = ' + t + ' : ' + 'Aucun processus à activer !');
                }
            }
            else { //Si le processeur est actif
                if (this.#processeur.ProcesseurActif()) {
                    if (this.#processeur.getProcessus().getTempsRestant() === 0) {
                        console.log('t = ' + t + ' : ' + 'Destruction du processus' + this.#processeur.getProcessus().getPCB().getPID());
                        console.log("Temps de sejour : " + this.#processeur.getProcessus().getTempsSejour());
                        console.log("Temps de Attente : " + this.#processeur.getProcessus().getTempsAttente());
                        this.DetruireProcessus();
                        j++;
                        this.#dispatcher.setSignal(true);
                        cpt = 0;
                        arret = true;
                    }
                    else {
                        if (this.#processeur.getProcessus().getInterruptions().length > 0) {
                            if (this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()) {
                                console.log('t = ' + t + ' : ' + 'Bloquage du processus' + this.#processeur.getProcessus().getPCB().getPID() + ': Interruption');
                                this.BloquerProcessus();
                                cpt = 0;
                                this.#dispatcher.setSignal(true);
                                arret = true;
                            }
                        }
                    }
                }
            }

            if (!arret) {
                for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0) {
                        console.log('t = ' + (t) + ' : ' + 'Réveil du processus' + this.#fileBloquee.getFile()[j].getPCB().getPID());
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0);
                        this.ReveillerProcessus(j, 0);
                        arret = true;
                    }
                }
                if (!arret) {
                    for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1);
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1);
                    }
                    for (let j = 0; j < this.#files.getFiles().length; j++) {
                        for (let k = 0; k < this.#files.getFile(j).getFile().length; k++) {
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente() + 1);
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour() + 1);
                            console.log("Processus" + this.#files.getFile(j).getFile()[k].getPCB().getPID() + " --> " + "Temps d'attente : " + this.#files.getFile(j).getFile()[k].getTempsAttente() + "  ,  Temps de sejour : " + this.#files.getFile(j).getFile()[k].getTempsSejour());
                        }
                    }
                    if (this.#processeur.ProcesseurActif()) {
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1);
                    }
                }
            }
            if (!arret) {
                if (this.#processeur.ProcesseurActif()) {
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1);
                    cpt++;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation() + 1);
                }
                t++;
            } else {
                arret = false;
            }
        }
        console.log('Nombre de changements de contexte : ' + this.#dispatcher.getNbChangementContexte());
        console.log("\n--------Fin de l'éxecution---------");
    }


    /*************************Ordonnanceur Round Robin*************************/
    Ordonnanceur_RR() {
        let i = this.#processus.length, j = 0, t = 0, h = 0, quantum = 0, arret = false, cpt = 0
        while (j !== i) {
            // Vérifier les Temps d'arrivée des processus 
            while (h < this.#processus.length) {
                if (this.#processus[h].getTempsArrive() === t) {
                    console.log('t = ' + t + ' : ' + 'Création du processus' + this.#processus[h].getPCB().getPID());
                    this.CreerProcessus(h, 0);

                } else {
                    if (this.#processus[h].getTempsArrive() > t) {
                        break;
                    }
                    h++;
                }
            }
            h = 0;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true) {
                if (this.#files.getFile(0).getFile().length !== 0) {
                    this.ActiverProcessus(0);
                    this.#dispatcher.setNbChangementContexte(this.#dispatcher.getNbChangementContexte() + 1);
                    console.log('t = ' + t + ' : ' + 'Activation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                    if (this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()) {
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente());
                        console.log("Temps de reponse = " + this.#processeur.getProcessus().getTempsReponse());
                    }
                    quantum = this.#files.getFile(0).getQuantum();
                    this.#dispatcher.setSignal(false);
                } else {
                    console.log('t = ' + t + ' : ' + 'Aucun processus à activer !');
                }
            } else { //Si le processeur est actif
                if (this.#processeur.ProcesseurActif()) {
                    if (this.#processeur.getProcessus().getTempsRestant() === 0) {
                        console.log('t = ' + t + ' : ' + 'Destruction du processus' + this.#processeur.getProcessus().getPCB().getPID());
                        this.#processeur.getProcessus().afficher();
                        this.DetruireProcessus();
                        j++;
                        this.#dispatcher.setSignal(true);
                        cpt = 0;
                        arret = true;
                    } else {
                        if (cpt === quantum) {
                            console.log('t = ' + t + ' : ' + 'Désactivation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                            this.DesactiverProcessus(0);
                            this.#dispatcher.setSignal(true);
                            cpt = 0;
                            arret = true;
                        } else {
                            if (this.#processeur.getProcessus().getInterruptions().length > 0) {
                                if (this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()) {
                                    console.log('t = ' + t + ' : ' + 'Bloquage du processus' + this.#processeur.getProcessus().getPCB().getPID() + ': Interruption');
                                    this.BloquerProcessus();
                                    cpt = 0;
                                    this.#dispatcher.setSignal(true);
                                    arret = true;
                                }
                            }
                        }
                    }
                }
            }
            if (!arret) {
                for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0) {
                        console.log('t = ' + (t) + ' : ' + 'Réveil du processus' + this.#fileBloquee.getFile()[j].getPCB().getPID());
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0);
                        this.ReveillerProcessus(j, 0);
                        arret = true;
                    }
                }
                if (!arret) {
                    for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1);
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1);
                    }
                    for (let j = 0; j < this.#files.getFiles().length; j++) {
                        for (let k = 0; k < this.#files.getFile(j).getFile().length; k++) {
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente() + 1);
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour() + 1);
                            console.log("Processus" + this.#files.getFile(j).getFile()[k].getPCB().getPID() + " --> " + "Temps d'attente : " + this.#files.getFile(j).getFile()[k].getTempsAttente() + "  ,  Temps de sejour : " + this.#files.getFile(j).getFile()[k].getTempsSejour());
                        }
                    }
                    if (this.#processeur.ProcesseurActif()) {
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1);
                    }
                }
            }
            if (!arret) {
                if (this.#processeur.ProcesseurActif()) {
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1);
                    cpt++;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation() + 1);
                }
                t++;
            } else {
                arret = false;
            }
        }
        console.log('Nombre de changements de contexte : ' + this.#dispatcher.getNbChangementContexte());
        console.log("\n--------Fin de l'éxecution---------");
    }


    /*****************Ordonnanceur Par Priorite Statique*****************/
    Ordonnanceur_PRIOS_NonPreemptif() {
        let i = this.#processus.length, j = 0, t = 0, h = 0, arret = false, cpt = 0 
        while (j !== i) {
            // Vérifier les Temps d'arrivée des processus 
            while (h < this.#processus.length) {
                if (this.#processus[h].getTempsArrive() === t) {
                    console.log('t = ' + t + ' : ' + 'Création du processus' + this.#processus[h].getPCB().getPID());
                    this.CreerProcessus(h, 0);
                } else {
                    if (this.#processus[h].getTempsArrive() > t) {
                        break;
                    }
                    h++;
                }
            }
            h = 0;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true) {
                num_file = this.#files.Ordonnanceur_PRIOS();
                if (this.#files.getFile(0).getFile().length != 0) {
                    this.ActiverProcessus(0);
                    this.#dispatcher.IncrementerNb();
                    console.log('t = ' + t + ' : ' + 'Activation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                    if (this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()) {
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente());
                        console.log("Temps de reponse = " + this.#processeur.getProcessus().getTempsReponse());
                    }
                    this.#dispatcher.setSignal(false);
                } else {
                    console.log('t = ' + t + ' : ' + 'Aucun processus à activer !');
                }
            } else { //Si le processeur est actif
                if (this.#processeur.ProcesseurActif()) {
                    if (this.#processeur.getProcessus().getTempsRestant() === 0) {
                        console.log('t = ' + t + ' : ' + 'Destruction du processus' + this.#processeur.getProcessus().getPCB().getPID());
                        console.log("Temps de sejour : " + this.#processeur.getProcessus().getTempsSejour());
                        console.log("Temps de Attente : " + this.#processeur.getProcessus().getTempsAttente());
                        this.DetruireProcessus();
                        j++;
                        this.#dispatcher.setSignal(true);
                        cpt = 0;
                        arret = true;
                    } else {
                        if (this.#processeur.getProcessus().getInterruptions().length !== 0) {
                            if (this.#processeur.getProcessus().getInterruptions().length > 0) {
                                if (this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()) {
                                    console.log('t = ' + t + ' : ' + 'Bloquage du processus' + this.#processeur.getProcessus().getPCB().getPID() + ': Interruption');
                                    this.BloquerProcessus();
                                    cpt = 0;
                                    this.#dispatcher.setSignal(true);
                                    arret = true;
                                }
                            }
                        }
                    }
                }
            }
            if (!arret) {
                for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0) {
                        console.log('t = ' + (t) + ' : ' + 'Réveil du processus' + this.#fileBloquee.getFile()[j].getPCB().getPID());
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0);
                        this.ReveillerProcessus(j, 0);
                        arret = true;
                    }
                }
                if (!arret) {
                    for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1);
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1);
                    }
                    for (let j = 0; j < this.#files.getFiles().length; j++) {
                        for (let k = 0; k < this.#files.getFile(j).getFile().length; k++) {
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente() + 1);
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour() + 1);
                            console.log("Processus" + this.#files.getFile(j).getFile()[k].getPCB().getPID() + " --> " + "Temps d'attente : " + this.#files.getFile(j).getFile()[k].getTempsAttente() + "  ,  Temps de sejour : " + this.#files.getFile(j).getFile()[k].getTempsSejour());
                        }
                    }
                    if (this.#processeur.ProcesseurActif()) {
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1);
                    }
                }
            }
            if (!arret) {
                if (this.#processeur.ProcesseurActif()) {
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1);
                    cpt++;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation() + 1);
                }
                t++;
            } else {
                arret = false;
            }
        }
        console.log('Nombre de changements de contexte : ' + this.#dispatcher.getNbChangementContexte());
        console.log("\n--------Fin de l'éxecution---------");
    }


    /*****************Ordonnanceur Par Priorite Statique*****************/
    Ordonnanceur_PRIOS_Preemptif() {
        let i = this.#processus.length, j = 0, t = 0, h = 0, quantum = 0, arret = false, cpt = 0, num_file = 0;
        while (j !== i) {
            // Vérifier les Temps d'arrivée des processus 
            while (h < this.#processus.length) {
                if (this.#processus[h].getTempsArrive() === t) {
                    console.log('t = ' + t + ' : ' + 'Création du processus' + this.#processus[h].getPCB().getPID());
                    if (this.#processeur.ProcesseurActif()) {
                        if (this.#processus[h].getPriorite() < this.#processeur.getProcessus().getPriorite()) {
                            console.log('t = ' + t + ' : ' + 'Désactivation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                            this.DesactiverProcessus(0);
                            this.#dispatcher.setSignal(true);
                            cpt = 0;
                            arret = true;
                        }
                    }
                    this.CreerProcessus(h, 0);
                } else {
                    if (this.#processus[h].getTempsArrive() > t) {
                        break;
                    }
                    h++;
                }
            }
            h = 0;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true) {
                num_file = this.#files.Ordonnanceur_PRIOS();
                if (this.#files.getFile(0).getFile().length != 0) {
                    this.ActiverProcessus(0);
                    this.#dispatcher.IncrementerNb();
                    console.log('t = ' + t + ' : ' + 'Activation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                    if (this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()) {
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente());
                        console.log("Temps de reponse = " + this.#processeur.getProcessus().getTempsReponse());
                    }
                    this.#dispatcher.setSignal(false);
                } else {
                    console.log('t = ' + t + ' : ' + 'Aucun processus à activer !');
                }
            } else { //Si le processeur est actif
                if (this.#processeur.ProcesseurActif()) {
                    if (this.#processeur.getProcessus().getTempsRestant() === 0) {
                        console.log('t = ' + t + ' : ' + 'Destruction du processus' + this.#processeur.getProcessus().getPCB().getPID());
                        console.log("Temps de sejour : " + this.#processeur.getProcessus().getTempsSejour());
                        console.log("Temps de Attente : " + this.#processeur.getProcessus().getTempsAttente());
                        this.DetruireProcessus();
                        j++;
                        this.#dispatcher.setSignal(true);
                        cpt = 0;
                        arret = true;
                    } else {
                        if (this.#processeur.getProcessus().getInterruptions().length !== 0) {
                            if (this.#processeur.getProcessus().getInterruptions().length > 0) {
                                if (this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()) {
                                    console.log('t = ' + t + ' : ' + 'Bloquage du processus' + this.#processeur.getProcessus().getPCB().getPID() + ': Interruption');
                                    this.BloquerProcessus();
                                    cpt = 0;
                                    this.#dispatcher.setSignal(true);
                                    arret = true;
                                }
                            }
                        }
                    }
                }
            }
            if (!arret) {
                for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0) {
                        console.log('t = ' + (t) + ' : ' + 'Réveil du processus' + this.#fileBloquee.getFile()[j].getPCB().getPID());
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0);
                        if (this.#processeur.ProcesseurActif()) {
                            if (this.#fileBloquee.getFile()[j].getPriorite() < this.#processeur.getProcessus().getPriorite()) {
                                console.log('t = ' + t + ' : ' + 'Désactivation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                                this.DesactiverProcessus(0);
                                this.#dispatcher.setSignal(true);
                                cpt = 0;
                                arret = true;
                            }
                        }
                        this.ReveillerProcessus(j, 0);
                        arret = true;
                    }
                }
                if (!arret) {
                    for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1);
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1);
                    }
                    for (let j = 0; j < this.#files.getFiles().length; j++) {
                        for (let k = 0; k < this.#files.getFile(j).getFile().length; k++) {
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente() + 1);
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour() + 1);
                            console.log("Processus" + this.#files.getFile(j).getFile()[k].getPCB().getPID() + " --> " + "Temps d'attente : " + this.#files.getFile(j).getFile()[k].getTempsAttente() + "  ,  Temps de sejour : " + this.#files.getFile(j).getFile()[k].getTempsSejour());
                        }
                    }
                    if (this.#processeur.ProcesseurActif()) {
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1);
                    }
                }
            }
            if (!arret) {
                if (this.#processeur.ProcesseurActif()) {
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1);
                    cpt++;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation() + 1);
                }
                t++;
            } else {
                arret = false;
            }
        }
        console.log('Nombre de changements de contexte : ' + this.#dispatcher.getNbChangementContexte());
        console.log("\n--------Fin de l'éxecution---------");
    }

    /*****************Ordonnanceur Files Multiniveaux Avec Recyclage*****************/
    Ordonnanceur_FMAR() {
        let i = this.#processus.length, j = 0, t = 0, h = 0, quantum = 0, arret = false, cpt = 0, num_file = 0;
        while (j !== i) {
            // Vérifier les Temps d'arrivée des processus 
            while (h < this.#processus.length) {
                if (this.#processus[h].getTempsArrive() === t) {
                    console.log('t = ' + t + ' : ' + 'Création du processus' + this.#processus[h].getPCB().getPID());
                    this.CreerProcessus(h, 0);

                } else {
                    if (this.#processus[h].getTempsArrive() > t) {
                        break;
                    }
                    h++;
                }
            }
            h = 0;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true) {
                num_file = this.#files.Ordonnanceur_FMAR();
                if (num_file !== -1) {
                    this.ActiverProcessus(num_file);
                    this.#dispatcher.IncrementerNb();
                    console.log('t = ' + t + ' : ' + 'Activation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                    if (this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()) {
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente());
                        console.log("Temps de reponse = " + this.#processeur.getProcessus().getTempsReponse());
                    }
                    quantum = this.#files.getFile(num_file).getQuantum();
                    this.#dispatcher.setSignal(false);
                } else {
                    console.log('t = ' + t + ' : ' + 'Aucun processus à activer !');
                }
            } else { //Si le processeur est actif
                if (this.#processeur.ProcesseurActif()) {
                    if (this.#processeur.getProcessus().getTempsRestant() === 0) {
                        console.log('t = ' + t + ' : ' + 'Destruction du processus' + this.#processeur.getProcessus().getPCB().getPID());
                        console.log("Temps de sejour : " + this.#processeur.getProcessus().getTempsSejour());
                        console.log("Temps de Attente : " + this.#processeur.getProcessus().getTempsAttente());
                        this.DetruireProcessus();
                        j++;
                        this.#dispatcher.setSignal(true);
                        cpt = 0;
                        arret = true;
                    } else {
                        if (cpt === quantum) {
                            if (num_file < this.#files.getFiles().length - 1) {
                                console.log('t = ' + t + ' : ' + 'Désactivation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                                this.DesactiverProcessus(num_file + 1);
                            } else {
                                console.log('t = ' + t + ' : ' + 'Désactivation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                                this.DesactiverProcessus(num_file);
                            }
                            this.#dispatcher.setSignal(true);
                            cpt = 0;
                            arret = true;
                        } else {
                            if (this.#processeur.getProcessus().getInterruptions().length > 0) {
                                if (this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()) {
                                    this.#processeur.getProcessus().setPriorite(num_file);
                                    console.log('t = ' + t + ' : ' + 'Bloquage du processus' + this.#processeur.getProcessus().getPCB().getPID() + ': Interruption');
                                    this.BloquerProcessus();
                                    cpt = 0;
                                    this.#dispatcher.setSignal(true);
                                    arret = true;
                                }
                            }
                        }
                    }
                }
            }
            if (!arret) {
                for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0) {
                        console.log('t = ' + (t) + ' : ' + 'Réveil du processus' + this.#fileBloquee.getFile()[j].getPCB().getPID());
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0);
                        this.ReveillerProcessus(j, this.#fileBloquee.getFile()[j].getPriorite());
                        arret = true;
                    }
                }
                if (!arret) {
                    for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1);
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1);
                    }
                    for (let j = 0; j < this.#files.getFiles().length; j++) {
                        for (let k = 0; k < this.#files.getFile(j).getFile().length; k++) {
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente() + 1);
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour() + 1);
                            console.log("Processus" + this.#files.getFile(j).getFile()[k].getPCB().getPID() + " --> " + "Temps d'attente : " + this.#files.getFile(j).getFile()[k].getTempsAttente() + "  ,  Temps de sejour : " + this.#files.getFile(j).getFile()[k].getTempsSejour());
                        }
                    }
                    if (this.#processeur.ProcesseurActif()) {
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1);
                    }
                }
            }
            if (!arret) {
                if (this.#processeur.ProcesseurActif()) {
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1);
                    cpt++;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation() + 1);
                }
                t++;
            } else {
                arret = false;
            }
        }
        console.log('Nombre de changements de contexte : ' + this.#dispatcher.getNbChangementContexte());
        console.log("\n--------Fin de l'éxecution---------");
    }
}

/* main */


let nombre_processus = 0;
let tableau = new Array(nombre_processus);
let pos = 0;

let files = new File_Multiniveaux(3);
let processeur = new Processeur();
let dispatcher = new Dispatcher();
let fileBloquee = new File();
let processus = [];

let scheduler = new Scheduler(processeur, dispatcher, files, fileBloquee, processus);

function Init() {
    let str1 = localStorage.getItem("TA");
    let str2 = localStorage.getItem("TE");
    let str3 = localStorage.getItem("Prio");
    let str4 = localStorage.getItem("Its");
    let TAs = str1.split(' ');
    let TEs = str2.split(' ');
    let Prios = str3.split(' ');
    let Its = str4.split(' | ') ;
    console.log(Its) ;
    let quantum = parseInt(localStorage.getItem("Quantum") , 10) ;
    scheduler.getFiles().getFile(0).setQuantum(quantum) ;
    for (let i = 0; i < TAs.length; i++) {
        let ta = parseInt(TAs[i], 10);
        let te = parseInt(TEs[i], 10);
        let prio = parseInt(Prios[i], 10);
        let pcb = new PCB(i + 1, "Pret", "Tour1");
        let str_its = Its[i].split('-') ;
        console.log(str_its) ;
        let its = new Array(str_its.length) ;
        if(str_its != ""){
            for(let h=0 ; h<str_its.length ; h++){
                if(str_its[h] != "null" || str_its[h] != ""){
                    let it = new Interruption(str_its[h].split('$')[2] , parseInt(str_its[h].split('$')[0], 10) , parseInt(str_its[h].split('$')[1], 10)) ;
                    its[h] = it ;
                }else{
                    its = [] ;
                }
            }
        }else{
            its = [] ;
        }
        for(let h = its.length ; h > 0 ; h--){
            for(let k = 1 ; k < h ; k++){
                if(its[k].getTempsDeclenchement() < its[k - 1].getTempsDeclenchement()){
                    let tmp = its[k-1] ;
                    its[k-1] = its[k] ;
                    its[k] = tmp ;                   
                }
            }
        }
        console.log(its) ;
        let process = new Processus(pcb, ta, te, prio, its);
        scheduler.AjouterProcessus(process);
    }
}


var intervalId = null;
function finish() {
    clearInterval(intervalId);
    if (scheduler.getProcesseur().getProcessus().getTempsRestant() == 0)
        {
            document.getElementById("bip").innerHTML = "l'execution du processus " +  scheduler.getProcesseur().getProcessus().getPCB().getPID() + " est terminée.";
        }
}
function bip() {
    counter = scheduler.getProcesseur().getProcessus().getTempsRestant() + 1;
    counter-- ;
    if(counter == 0) finish();
    else {	
        document.getElementById("bip").innerHTML = "Temps restant du Processus " + scheduler.getProcesseur().getProcessus().getPCB().getPID() + " est : " +counter +" s";
}	
}
function start(){
 intervalId = setInterval(bip, 500);
}	

let temps = 1000 ;
let ancien_temps = temps ;

Init() ;

let i = scheduler.getProcessus().length, j = 0, t = 0, h = 0, quantum = 10, arret = false, cpt = 0, num_file = 0 , creation = false;
let stop = false ;
scheduler.getFiles().getFile(0).setQuantum(10) ;

/*********************Ordannanceur_RR *********************/

function Ordonnanceur_RR() {
        let tr = document.getElementsByClassName('pro') ;
        anime({             // demarrer l'animation du processeur
            targets : tr ,
            scale: {
                value: 1.07,
                duration: 100,           
                easing: 'easeInOutQuart'
            },
            direction : 'alternate' ,
            loop : true ,
        }) ;
        let temps = parseInt(document.querySelector('select').value , 10) ;  // Lecture de la valeur de temps
        let id0 = setInterval(function(){
            Ord_RR(temps) ;
            if(stop){
                clearInterval(id0) ;
                console.log('Nombre de changements de contexte : ' + scheduler.getDispatcher().getNbChangementContexte());
                console.log("\n--------Fin de l'éxecution---------");
            }
        } , temps + 100) ;
    }


function Ord_RR(temps){
    while (h < scheduler.getProcessus().length) {
        if (scheduler.getProcessus()[h].getTempsArrive() === t) {
            console.log('t = ' + t + ' : ' + 'Création du processus' + scheduler.getProcessus()[h].getPCB().getPID());
            scheduler.CreerProcessus(h, 0 , temps);
            creation = true ;
        } else {
            if (scheduler.getProcessus()[h].getTempsArrive() > t) {
                break;
            }
            h++;
            creation = false ;
        }
    }
    h = 0;
    // Si le processeur n'est pas actif
    if(creation){
        creation = false ;
    }else{
        // Si le processeur n'est pas actif
        if (scheduler.getDispatcher().getSignal() === true) {
            if (scheduler.getFiles().getFile(0).getFile().length !== 0) {
                scheduler.ActiverProcessus(0, temps);
                start() ;
                arret = true ;
                scheduler.getDispatcher().setNbChangementContexte(scheduler.getDispatcher().getNbChangementContexte() + 1);
                console.log('t = ' + t + ' : ' + 'Activation du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                if (scheduler.getProcesseur().getProcessus().getTempsExecution() === scheduler.getProcesseur().getProcessus().getTempsRestant()) {
                    scheduler.getProcesseur().getProcessus().setTempsReponse(scheduler.getProcesseur().getProcessus().getTempsAttente());
                    console.log("Temps de reponse = " + scheduler.getProcesseur().getProcessus().getTempsReponse());
                }
                quantum = scheduler.getFiles().getFile(0).getQuantum();
                scheduler.getDispatcher().setSignal(false);
            } else {
                console.log('t = ' + t + ' : ' + 'Aucun processus à activer !');            //Affichage d'un message qui montre que la file d'attente est vide
                let ms = document.querySelector('body .msg') ;
                ms.textContent = "Aucun Processus à Activer ! " ;
                anime({
                    targets : ms ,
                    opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
                    duration : 1000 ,
                });
            }
        } else { //Si le processeur est actif
            if (scheduler.getProcesseur().ProcesseurActif()) {
                if (scheduler.getProcesseur().getProcessus().getTempsRestant() === 0) {
                    console.log('t = ' + t + ' : ' + 'Destruction du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                    scheduler.getProcesseur().getProcessus().afficher();
                    finish() ;
                    scheduler.DetruireProcessus(temps);
                    j++;
                    scheduler.getDispatcher().setSignal(true);
                    cpt = 0;
                    arret = true;
                } else {
                    if (cpt === quantum) {
                        console.log('t = ' + t + ' : ' + 'Désactivation du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                        finish() ;
                        scheduler.DesactiverProcessus(0, temps);
                        scheduler.getDispatcher().setSignal(true);
                        cpt = 0;
                        arret = true;
                    } else {
                        if (scheduler.getProcesseur().getProcessus().getInterruptions().length > 0) {
                            if (scheduler.getProcesseur().getProcessus().getInterruptions()[0].getTempsDeclenchement() === scheduler.getProcesseur().getProcessus().getTempsExecution() -scheduler.getProcesseur().getProcessus().getTempsRestant()) {
                                console.log('t = ' + t + ' : ' + 'Bloquage du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID() + ': Interruption');
                                finish() ;
                                scheduler.BloquerProcessus(temps);
                                cpt = 0;
                                scheduler.getDispatcher().setSignal(true);
                                arret = true;
                            }
                        }
                    }
                }
            }
        }
        if (!arret) {
            for (let j = 0; j < scheduler.getFileBloquee().getFile().length; j++) {
                if (scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].getTempsBlocage() === 0) {
                    console.log('t = ' + (t) + ' : ' + 'Réveil du processus' + scheduler.getFileBloquee().getFile()[j].getPCB().getPID());
                    scheduler.getFileBloquee().getFile()[j].DetruireInterruption(0);
                    scheduler.ReveillerProcessus(j, 0 , temps);
                    arret = true;
                }
            }
            if (!arret) {
                for (let j = 0; j < scheduler.getFileBloquee().getFile().length; j++) {
                    scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].setTempsBlocage(scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].getTempsBlocage() - 1);
                    scheduler.getFileBloquee().getFile()[j].setTempsSejour(scheduler.getFileBloquee().getFile()[j].getTempsSejour() + 1);
                }
                for (let j = 0; j < scheduler.getFiles().getFiles().length; j++) {
                    for (let k = 0; k < scheduler.getFiles().getFile(j).getFile().length; k++) {
                        scheduler.getFiles().getFile(j).getFile()[k].setTempsAttente(scheduler.getFiles().getFile(j).getFile()[k].getTempsAttente() + 1);
                        scheduler.getFiles().getFile(j).getFile()[k].setTempsSejour(scheduler.getFiles().getFile(j).getFile()[k].getTempsSejour() + 1);
                        console.log("Processus" + scheduler.getFiles().getFile(j).getFile()[k].getPCB().getPID() + " --> " + "Temps d'attente : " + scheduler.getFiles().getFile(j).getFile()[k].getTempsAttente() + "  ,  Temps de sejour : " + scheduler.getFiles().getFile(j).getFile()[k].getTempsSejour());
                    }
                }
                if (scheduler.getProcesseur().ProcesseurActif()) {
                    scheduler.getProcesseur().getProcessus().setTempsSejour(scheduler.getProcesseur().getProcessus().getTempsSejour() + 1);
                }
            }
        }
        if (!arret) {
            if (scheduler.getProcesseur().ProcesseurActif()) {
                scheduler.getProcesseur().getProcessus().setTempsRestant(scheduler.getProcesseur().getProcessus().getTempsRestant() - 1);
                cpt++;
                scheduler.getProcesseur().setTempsUtilisation(scheduler.getProcesseur().getTempsUtilisation() + 1);
            }
            t++;
        } else {
            arret = false;
        }
        if(i == j){
            stop = true ;
            let ms = document.querySelector('body .msg') ;      //Affichage d'un message de fin d'execution
            ms.textContent = "FIN DE L'EXECUTION ! " ;
            anime({
                targets : ms ,
                opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
                duration : 50000 ,
            }) ;
            let tr1 = document.getElementsByClassName('pro') ;      //Arreter l'animation du processus
           anime({
               targets : tr1 ,
               scale : {value : 1 , duration : 50},
               loop : true
           }) ;
        }
    }
}


/**********************Ordannanceur_PRIOS**********************/


function Ordonnanceur_PRIOS_NonPreemptif(){
    let tr = document.getElementsByClassName('pro') ;
    anime({
        targets : tr ,
        scale: {
            value: 1.07,
            duration: 100,           
            easing: 'easeInOutQuart'
        },
        direction : 'alternate' ,
        loop : true ,
    }) ;
    let temps = parseInt(document.querySelector('select').value , 10) ;
    let id0 = setInterval(function(){
        Ord_PRIO(temps) ;
        if(stop){
            clearInterval(id0) ;
            console.log('Nombre de changements de contexte : ' + scheduler.getDispatcher().getNbChangementContexte());
            console.log("\n--------Fin de l'éxecution---------");
        }
    } , temps + 100) ;
}

function Ord_PRIO(temps){
    
    // Vérifier les Temps d'arrivée des processus 
    while (h < scheduler.getProcessus().length) {
        if (scheduler.getProcessus()[h].getTempsArrive() === t) {
            console.log('t = ' + t + ' : ' + 'Création du processus' + scheduler.getProcessus()[h].getPCB().getPID());
            scheduler.CreerProcessus(h, 0 , temps);
            creation = true ;
        } else {
            if (scheduler.getProcessus()[h].getTempsArrive() > t) {
                break;
            }
            h++;
            creation = false ;
        }
    }
    h = 0;
    // Si le processeur n'est pas actif
    if(creation){
        creation = false ;
    }else{
        if (scheduler.getDispatcher().getSignal() === true) {
            num_file = scheduler.getFiles().Ordonnanceur_PRIOS();
            if (num_file !== -1) {
                start() ;
                scheduler.ActiverProcessus(num_file , temps);
                arret = true ;
                scheduler.getDispatcher().IncrementerNb();
                console.log('t = ' + t + ' : ' + 'Activation du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                if (scheduler.getProcesseur().getProcessus().getTempsExecution() === scheduler.getProcesseur().getProcessus().getTempsRestant()) {
                    scheduler.getProcesseur().getProcessus().setTempsReponse(scheduler.getProcesseur().getProcessus().getTempsAttente());
                    console.log("Temps de reponse = " + scheduler.getProcesseur().getProcessus().getTempsReponse());
                }
                scheduler.getDispatcher().setSignal(false);
            } else {
                console.log('t = ' + t + ' : ' + 'Aucun processus à activer !');
                let ms = document.querySelector('body .msg') ;
                ms.textContent = "Aucun Processus à Activer ! " ;
                anime({
                    targets : ms ,
                    opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
                    duration : 1000 ,
                });
            }
        } else { //Si le processeur est actif
            if (scheduler.getProcesseur().ProcesseurActif()) {
                if (scheduler.getProcesseur().getProcessus().getTempsRestant() === 0) {
                    console.log('t = ' + t + ' : ' + 'Destruction du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                    console.log("Temps de sejour : " + scheduler.getProcesseur().getProcessus().getTempsSejour());
                    console.log("Temps de Attente : " + scheduler.getProcesseur().getProcessus().getTempsAttente());
                    finish() ;
                    scheduler.DetruireProcessus(temps); 
                    j++;
                    scheduler.getDispatcher().setSignal(true);
                    cpt = 0;
                    arret = true;
                } else {
                    if (scheduler.getProcesseur().getProcessus().getInterruptions().length !== 0) {
                        if (scheduler.getProcesseur().getProcessus().getInterruptions().length > 0) {
                            if (scheduler.getProcesseur().getProcessus().getInterruptions()[0].getTempsDeclenchement() === scheduler.getProcesseur().getProcessus().getTempsExecution() - scheduler.getProcesseur().getProcessus().getTempsRestant()) {
                                console.log('t = ' + t + ' : ' + 'Bloquage du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID() + ': Interruption');
                                finish() ;
                                scheduler.BloquerProcessus(temps);
                                cpt = 0;
                                scheduler.getDispatcher().setSignal(true);
                                arret = true;
                            }
                        }
                    }
                }
            }
        }
        if (!arret) {
            for (let j = 0; j < scheduler.getFileBloquee().getFile().length; j++) {
                if (scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].getTempsBlocage() === 0) {
                    console.log('t = ' + (t) + ' : ' + 'Réveil du processus' + scheduler.getFileBloquee().getFile()[j].getPCB().getPID());
                    scheduler.getFileBloquee().getFile()[j].DetruireInterruption(0);
                    scheduler.ReveillerProcessus(j, 0 , temps);
                    arret = true;
                }
            }
            if (!arret) {
                for (let j = 0; j < scheduler.getFileBloquee().getFile().length; j++) {
                    scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].setTempsBlocage(scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].getTempsBlocage() - 1);
                    scheduler.getFileBloquee().getFile()[j].setTempsSejour(scheduler.getFileBloquee().getFile()[j].getTempsSejour() + 1);
                }
                for (let j = 0; j < scheduler.getFiles().getFiles().length; j++) {
                    for (let k = 0; k < scheduler.getFiles().getFile(j).getFile().length; k++) {
                        scheduler.getFiles().getFile(j).getFile()[k].setTempsAttente(scheduler.getFiles().getFile(j).getFile()[k].getTempsAttente() + 1);
                        scheduler.getFiles().getFile(j).getFile()[k].setTempsSejour(scheduler.getFiles().getFile(j).getFile()[k].getTempsSejour() + 1);
                        console.log("Processus" + scheduler.getFiles().getFile(j).getFile()[k].getPCB().getPID() + " --> " + "Temps d'attente : " + scheduler.getFiles().getFile(j).getFile()[k].getTempsAttente() + "  ,  Temps de sejour : " + scheduler.getFiles().getFile(j).getFile()[k].getTempsSejour());
                    }
                }
                if (scheduler.getProcesseur().ProcesseurActif()) {
                    scheduler.getProcesseur().getProcessus().setTempsSejour(scheduler.getProcesseur().getProcessus().getTempsSejour() + 1);
                }
            }
        }
        if (!arret) {
            if (scheduler.getProcesseur().ProcesseurActif()) {
                scheduler.getProcesseur().getProcessus().setTempsRestant(scheduler.getProcesseur().getProcessus().getTempsRestant() - 1);
                cpt++;
                scheduler.getProcesseur().setTempsUtilisation(scheduler.getProcesseur().getTempsUtilisation() + 1);
            }
            t++;
        } else {
            arret = false;
        }
        if(i == j){
            stop = true ;
            let ms = document.querySelector('body .msg') ;
            ms.textContent = "FIN DE L'EXECUTION ! " ;
            anime({
                targets : ms ,
                opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
                duration : 50000 ,
            });
            let tr1 = document.getElementsByClassName('pro') ;
            anime({
               targets : tr1 ,
               scale : {value : 1 , duration : 50},
               loop : true
           }) ;
        }
    }
}

/****************************Ordonnanceur_PRIO _Préemtif**********************/

function Ordonnanceur_PRIOS_Preemptif(){
    let tr = document.getElementsByClassName('pro') ;
    anime({
        targets : tr ,
        scale: {
            value: 1.07,
            duration: 100,           
            easing: 'easeInOutQuart'
        },
        direction : 'alternate' ,
        loop : true ,
    }) ;
    let temps = parseInt(document.querySelector('select').value , 10) ;
    let id0 = setInterval(function(){
        Ord_PRIO_Preemptif(temps) ;
        if(stop){
            clearInterval(id0) ;
            console.log('Nombre de changements de contexte : ' + scheduler.getDispatcher().getNbChangementContexte());
            console.log("\n--------Fin de l'éxecution---------");
        }
    } , temps + 100) ;
}


function Ord_PRIO_Preemptif(temps){
    
    // Vérifier les Temps d'arrivée des processus 
    while (h < scheduler.getProcessus().length) {
        if (scheduler.getProcessus()[h].getTempsArrive() === t) {
            console.log('t = ' + t + ' : ' + 'Création du processus' + scheduler.getProcessus()[h].getPCB().getPID());
            scheduler.CreerProcessus(h, 0 , temps);
            if (scheduler.getProcesseur().ProcesseurActif()) {
                if (scheduler.getFiles().getFile(0).getFile()[scheduler.getFiles().getFile(0).getFile().length - 1].getPriorite() < scheduler.getProcesseur().getProcessus().getPriorite()) {
                    console.log('t = ' + t + ' : ' + 'Désactivation du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                    scheduler.DesactiverProcessus(0, temps);
                    scheduler.getDispatcher().setSignal(true);
                    cpt = 0;
                    arret = true;
                }
            }
            creation = true ;
        } else {
            if (scheduler.getProcessus()[h].getTempsArrive() > t) {
                break;
            }
            h++;
            creation = false ;
        }
    }
    h = 0;
    // Si le processeur n'est pas actif
    if(creation){
        creation = false ;
    }else{
        if (scheduler.getDispatcher().getSignal() === true) {
            num_file = scheduler.getFiles().Ordonnanceur_PRIOS();
            if (num_file !== -1) {
                scheduler.ActiverProcessus(num_file , temps);
                start() ;
                arret = true ;
                scheduler.getDispatcher().IncrementerNb();
                console.log('t = ' + t + ' : ' + 'Activation du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                if (scheduler.getProcesseur().getProcessus().getTempsExecution() === scheduler.getProcesseur().getProcessus().getTempsRestant()) {
                    scheduler.getProcesseur().getProcessus().setTempsReponse(scheduler.getProcesseur().getProcessus().getTempsAttente());
                    console.log("Temps de reponse = " + scheduler.getProcesseur().getProcessus().getTempsReponse());
                }
                scheduler.getDispatcher().setSignal(false);
            } else {
                console.log('t = ' + t + ' : ' + 'Aucun processus à activer !');
                let ms = document.querySelector('body .msg') ;
                ms.textContent = "Aucun Processus à Activer ! " ;
                anime({
                    targets : ms ,
                    opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
                    duration : 1000 ,
                });
            }
        } else { //Si le processeur est actif
            if (scheduler.getProcesseur().ProcesseurActif()) {
                if (scheduler.getProcesseur().getProcessus().getTempsRestant() === 0) {
                    console.log('t = ' + t + ' : ' + 'Destruction du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                    console.log("Temps de sejour : " + scheduler.getProcesseur().getProcessus().getTempsSejour());
                    console.log("Temps de Attente : " + scheduler.getProcesseur().getProcessus().getTempsAttente());
                    finish() ;
                    scheduler.DetruireProcessus(temps); 
                    j++;
                    scheduler.getDispatcher().setSignal(true);
                    cpt = 0;
                    arret = true;
                } else {
                    if (scheduler.getProcesseur().getProcessus().getInterruptions().length !== 0) {
                        if (scheduler.getProcesseur().getProcessus().getInterruptions().length > 0) {
                            if (scheduler.getProcesseur().getProcessus().getInterruptions()[0].getTempsDeclenchement() === scheduler.getProcesseur().getProcessus().getTempsExecution() - scheduler.getProcesseur().getProcessus().getTempsRestant()) {
                                console.log('t = ' + t + ' : ' + 'Bloquage du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID() + ': Interruption');
                                finish() ;
                                scheduler.BloquerProcessus(temps);
                                cpt = 0;
                                scheduler.getDispatcher().setSignal(true);
                                arret = true;
                            }
                        }
                    }
                }
            }
        }
        if (!arret) {
            for (let j = 0; j < scheduler.getFileBloquee().getFile().length; j++) {
                if (scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].getTempsBlocage() === 0) {
                    console.log('t = ' + (t) + ' : ' + 'Réveil du processus' + scheduler.getFileBloquee().getFile()[j].getPCB().getPID());
                    scheduler.getFileBloquee().getFile()[j].DetruireInterruption(0);
                    scheduler.ReveillerProcessus(j, 0 , temps);
                    if (scheduler.getProcesseur().ProcesseurActif()) {
                        if (scheduler.getFiles().getFile(0).getFile()[scheduler.getFiles().getFile(0).getFile().length - 1].getPriorite() < scheduler.getProcesseur().getProcessus().getPriorite()) {
                            console.log('t = ' + t + ' : ' + 'Désactivation du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                            scheduler.DesactiverProcessus(0, temps);
                            scheduler.getDispatcher().setSignal(true);
                            cpt = 0;
                            arret = true;
                        }
                    }
                    arret = true;
                }
            }
            if (!arret) {
                for (let j = 0; j < scheduler.getFileBloquee().getFile().length; j++) {
                    scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].setTempsBlocage(scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].getTempsBlocage() - 1);
                    scheduler.getFileBloquee().getFile()[j].setTempsSejour(scheduler.getFileBloquee().getFile()[j].getTempsSejour() + 1);
                }
                for (let j = 0; j < scheduler.getFiles().getFiles().length; j++) {
                    for (let k = 0; k < scheduler.getFiles().getFile(j).getFile().length; k++) {
                        scheduler.getFiles().getFile(j).getFile()[k].setTempsAttente(scheduler.getFiles().getFile(j).getFile()[k].getTempsAttente() + 1);
                        scheduler.getFiles().getFile(j).getFile()[k].setTempsSejour(scheduler.getFiles().getFile(j).getFile()[k].getTempsSejour() + 1);
                        console.log("Processus" + scheduler.getFiles().getFile(j).getFile()[k].getPCB().getPID() + " --> " + "Temps d'attente : " + scheduler.getFiles().getFile(j).getFile()[k].getTempsAttente() + "  ,  Temps de sejour : " + scheduler.getFiles().getFile(j).getFile()[k].getTempsSejour());
                    }
                }
                if (scheduler.getProcesseur().ProcesseurActif()) {
                    scheduler.getProcesseur().getProcessus().setTempsSejour(scheduler.getProcesseur().getProcessus().getTempsSejour() + 1);
                }
            }
        }
        if (!arret) {
            if (scheduler.getProcesseur().ProcesseurActif()) {
                scheduler.getProcesseur().getProcessus().setTempsRestant(scheduler.getProcesseur().getProcessus().getTempsRestant() - 1);
                cpt++;
                scheduler.getProcesseur().setTempsUtilisation(scheduler.getProcesseur().getTempsUtilisation() + 1);
            }
            t++;
        } else {
            arret = false;
        }
        if(i == j){
            stop = true ;
            let ms = document.querySelector('body .msg') ;
            ms.textContent = "FIN DE L'EXECUTION ! " ;
            anime({
                targets : ms ,
                opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
                duration : 50000 ,
            });
            let tr1 = document.getElementsByClassName('pro') ;
            anime({
               targets : tr1 ,
               scale : {value : 1 , duration : 50},
               loop : true
           }) ;
        }
    }
}

/****************************Ordonnanceur_FIFO****************************/

function Ordonnanceur_FIFO() {
    let tr = document.getElementsByClassName('pro') ;
        anime({
            targets : tr ,
            scale: {
                value: 1.07,
                duration: 100,           
                easing: 'easeInOutQuart'
            },
            direction : 'alternate' ,
            loop : true ,
        }) ;
        let temps = parseInt(document.querySelector('select').value , 10) ;
        let id0 = setInterval(function(){
            Ord_FIFO(temps) ;
            if(stop){
                clearInterval(id0) ;
                console.log('Nombre de changements de contexte : ' + scheduler.getDispatcher().getNbChangementContexte());
                console.log("\n--------Fin de l'éxecution---------");
            }
        } , temps + 100) ;
    }


function Ord_FIFO(temps){
    while (h < scheduler.getProcessus().length) {
        if (scheduler.getProcessus()[h].getTempsArrive() === t) {
            console.log('t = ' + t + ' : ' + 'Création du processus' + scheduler.getProcessus()[h].getPCB().getPID());
            scheduler.CreerProcessus(h, 0 , temps);
            creation = true ;
        } else {
            if (scheduler.getProcessus()[h].getTempsArrive() > t) {
                break;
            }
            h++;
            creation = false ;
        }
    }
    h = 0;
    // Si le processeur n'est pas actif
    if(creation){
        creation = false ;
    }else{
        // Si le processeur n'est pas actif
        if (scheduler.getDispatcher().getSignal() === true) {
            if (scheduler.getFiles().getFile(0).getFile().length !== 0) {
                scheduler.ActiverProcessus(0, temps);
                start() ;
                arret = true ;
                scheduler.getDispatcher().IncrementerNb();
                console.log('t = ' + t + ' : ' + 'Activation du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                if (scheduler.getProcesseur().getProcessus().getTempsExecution() === scheduler.getProcesseur().getProcessus().getTempsRestant()) {
                    scheduler.getProcesseur().getProcessus().setTempsReponse(scheduler.getProcesseur().getProcessus().getTempsAttente());
                    console.log("Temps de reponse = " + scheduler.getProcesseur().getProcessus().getTempsReponse());
                }
                scheduler.getDispatcher().setSignal(false);
            } else {
                console.log('t = ' + t + ' : ' + 'Aucun processus à activer !');
                let ms = document.querySelector('body .msg') ;
                ms.textContent = "Aucun Processus à Activer ! " ;
                anime({
                    targets : ms ,
                    opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
                    duration : 1000 ,
                });
            }
        }
        else { //Si le processeur est actif
            if (scheduler.getProcesseur().ProcesseurActif()) {
                if (scheduler.getProcesseur().getProcessus().getTempsRestant() === 0) {
                    console.log('t = ' + t + ' : ' + 'Destruction du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                    console.log("Temps de sejour : " + scheduler.getProcesseur().getProcessus().getTempsSejour());
                    console.log("Temps de Attente : " + scheduler.getProcesseur().getProcessus().getTempsAttente());
                    finish() ;
                    scheduler.DetruireProcessus(temps);
                    j++;
                    scheduler.getDispatcher().setSignal(true);
                    cpt = 0;
                    arret = true;
                }
                else {
                    if (scheduler.getProcesseur().getProcessus().getInterruptions().length > 0) {
                        if (scheduler.getProcesseur().getProcessus().getInterruptions()[0].getTempsDeclenchement() ===scheduler.getProcesseur().getProcessus().getTempsExecution() - scheduler.getProcesseur().getProcessus().getTempsRestant()) {
                            scheduler.getProcesseur().getProcessus().setPriorite(num_file);
                            console.log('t = ' + t + ' : ' + 'Bloquage du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID() + ': Interruption');
                            finish() ;
                            scheduler.BloquerProcessus(temps);
                            cpt = 0;
                            scheduler.getDispatcher().setSignal(true);
                            arret = true;
                        }
                    }
                }
            }
        }

        if (!arret) {
            for (let j = 0; j < scheduler.getFileBloquee().getFile().length; j++) {
                if ( scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].getTempsBlocage() === 0) {
                    console.log('t = ' + (t) + ' : ' + 'Réveil du processus' +  scheduler.getFileBloquee().getFile()[j].getPCB().getPID());
                    scheduler.getFileBloquee().getFile()[j].DetruireInterruption(0);
                    scheduler.ReveillerProcessus(j, 0 , temps);
                    arret = true;
                }
            }
            if (!arret) {
                for (let j = 0; j <  scheduler.getFileBloquee().getFile().length; j++) {
                    scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].setTempsBlocage( scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].getTempsBlocage() - 1);
                    scheduler.getFileBloquee().getFile()[j].setTempsSejour( scheduler.getFileBloquee().getFile()[j].getTempsSejour() + 1);
                }
                for (let j = 0; j < scheduler.getFiles().getFiles().length; j++) {
                    for (let k = 0; k < scheduler.getFiles().getFile(j).getFile().length; k++) {
                        scheduler.getFiles().getFile(j).getFile()[k].setTempsAttente(scheduler.getFiles().getFile(j).getFile()[k].getTempsAttente() + 1);
                        scheduler.getFiles().getFile(j).getFile()[k].setTempsSejour(scheduler.getFiles().getFile(j).getFile()[k].getTempsSejour() + 1);
                        console.log("Processus" + scheduler.getFiles().getFile(j).getFile()[k].getPCB().getPID() + " --> " + "Temps d'attente : " + scheduler.getFiles().getFile(j).getFile()[k].getTempsAttente() + "  ,  Temps de sejour : " + scheduler.getFiles().getFile(j).getFile()[k].getTempsSejour());
                    }
                }
                if (scheduler.getProcesseur().ProcesseurActif()) {
                    scheduler.getProcesseur().getProcessus().setTempsSejour(scheduler.getProcesseur().getProcessus().getTempsSejour() + 1);
                }
            }
        }
        if (!arret) {
            if (scheduler.getProcesseur().ProcesseurActif()) {
                scheduler.getProcesseur().getProcessus().setTempsRestant(scheduler.getProcesseur().getProcessus().getTempsRestant() - 1);
                cpt++;
                scheduler.getProcesseur().setTempsUtilisation(scheduler.getProcesseur().getTempsUtilisation() + 1);
            }
            t++;
        } else {
            arret = false;
        }
        if(i == j){
            stop = true ;
            let ms = document.querySelector('body .msg') ;
            ms.textContent = "FIN DE L'EXECUTION ! " ;
            anime({
                targets : ms ,
                opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
                duration : 50000 ,
            });
            let tr1 = document.getElementsByClassName('pro') ;
            anime({
               targets : tr1 ,
               scale : {value : 1 , duration : 50},
               loop : true
           }) ;
        }
    }
}


/*********************Ordonnanceur_SJF*********************/

function Ordonnanceur_SJF_Non_Preemptif() {
    let tr = document.getElementsByClassName('pro') ;
        anime({
            targets : tr ,
            scale: {
                value: 1.07,
                duration: 100,           
                easing: 'easeInOutQuart'
            },
            direction : 'alternate' ,
            loop : true ,
        }) ;
        let temps = parseInt(document.querySelector('select').value , 10) ;
        let id0 = setInterval(function(){
            Ord_SJF_NP(temps) ;
            if(stop){
                clearInterval(id0) ;
                console.log('Nombre de changements de contexte : ' + scheduler.getDispatcher().getNbChangementContexte());
                console.log("\n--------Fin de l'éxecution---------");
            }
        } , temps + 100) ;
    }




function Ord_SJF_NP(temps){
    while (h < scheduler.getProcessus().length) {
        if (scheduler.getProcessus()[h].getTempsArrive() === t) {
            console.log('t = ' + t + ' : ' + 'Création du processus' + scheduler.getProcessus()[h].getPCB().getPID());
            scheduler.CreerProcessus(h, 0 , temps);
            creation = true ;
        } else {
            if (scheduler.getProcessus()[h].getTempsArrive() > t) {
                break;
            }
            h++;
            creation = false ;
        }
    }
    h = 0;
    if(creation){
        creation = false ;
    }else{
        // Si le processeur n'est pas actif
        if (scheduler.getDispatcher().getSignal() === true) {
            scheduler.getFiles().getFile(0).ordonnanceur_sjf();
            if (scheduler.getFiles().getFile(0).getFile().length !== 0) {
                start() ;
                arret = true ; 
                scheduler.ActiverProcessus(0,temps);
                scheduler.getDispatcher().IncrementerNb();
                console.log('t = ' + t + ' : ' + 'Activation du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                if (scheduler.getProcesseur().getProcessus().getTempsExecution() === scheduler.getProcesseur().getProcessus().getTempsRestant()) {
                    scheduler.getProcesseur().getProcessus().setTempsReponse(scheduler.getProcesseur().getProcessus().getTempsAttente());
                    console.log("Temps de reponse = " + scheduler.getProcesseur().getProcessus().getTempsReponse());
                }
                scheduler.getDispatcher().setSignal(false);
            } else {
                console.log('t = ' + t + ' : ' + 'Aucun processus à activer !');
                let ms = document.querySelector('body .msg') ;
                ms.textContent = "Aucun Processus à Activer ! " ;
                anime({
                    targets : ms ,
                    opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
                    duration : 1000 ,
                });
            }
        }
        else { //Si le processeur est actif
            if (scheduler.getProcesseur().ProcesseurActif()) {
                if (scheduler.getProcesseur().getProcessus().getTempsRestant() === 0) {
                    console.log('t = ' + t + ' : ' + 'Destruction du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                    console.log("Temps de sejour : " +scheduler.getProcesseur().getProcessus().getTempsSejour());
                    console.log("Temps de Attente : " + scheduler.getProcesseur().getProcessus().getTempsAttente());
                    finish() ;
                    scheduler.DetruireProcessus(temps);
                    j++;
                    scheduler.getDispatcher().setSignal(true);
                    cpt = 0;
                    arret = true;
                }
                else {
                    if (scheduler.getProcesseur().getProcessus().getInterruptions().length > 0) {
                        if (scheduler.getProcesseur().getProcessus().getInterruptions()[0].getTempsDeclenchement() === scheduler.getProcesseur().getProcessus().getTempsExecution() - scheduler.getProcesseur().getProcessus().getTempsRestant()) {
                            scheduler.getProcesseur().getProcessus().setPriorite(num_file);
                            console.log('t = ' + t + ' : ' + 'Bloquage du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID() + ': Interruption');
                            finish() ;
                            scheduler.BloquerProcessus(temps);
                            cpt = 0;
                            scheduler.getDispatcher().setSignal(true);
                            arret = true;
                        }
                    }
                }
            }
        }

        if (!arret) {
            for (let j = 0; j < scheduler.getFileBloquee().getFile().length; j++) {
                if (scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].getTempsBlocage() === 0) {
                    console.log('t = ' + (t) + ' : ' + 'Réveil du processus' + scheduler.getFileBloquee().getFile()[j].getPCB().getPID());
                    scheduler.getFileBloquee().getFile()[j].DetruireInterruption(0);
                    scheduler.ReveillerProcessus(j, 0,temps);
                    arret = true;
                }
            }
            if (!arret) {
                for (let j = 0; j < scheduler.getFileBloquee().getFile().length; j++) {
                    scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].setTempsBlocage(scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].getTempsBlocage() - 1);
                    scheduler.getFileBloquee().getFile()[j].setTempsSejour(scheduler.getFileBloquee().getFile()[j].getTempsSejour() + 1);
                }
                for (let j = 0; j <scheduler.getFiles().getFiles().length; j++) {
                    for (let k = 0; k < scheduler.getFiles().getFile(j).getFile().length; k++) {
                        scheduler.getFiles().getFile(j).getFile()[k].setTempsAttente(scheduler.getFiles().getFile(j).getFile()[k].getTempsAttente() + 1);
                        scheduler.getFiles().getFile(j).getFile()[k].setTempsSejour(scheduler.getFiles().getFile(j).getFile()[k].getTempsSejour() + 1);
                        console.log("Processus" + scheduler.getFiles().getFile(j).getFile()[k].getPCB().getPID() + " --> " + "Temps d'attente : " + scheduler.getFiles().getFile(j).getFile()[k].getTempsAttente() + "  ,  Temps de sejour : " + scheduler.getFiles().getFile(j).getFile()[k].getTempsSejour());
                    }
                }
                if (scheduler.getProcesseur().ProcesseurActif()) {
                    scheduler.getProcesseur().getProcessus().setTempsSejour(scheduler.getProcesseur().getProcessus().getTempsSejour() + 1);
                }
            }
        }
        if (!arret) {
            if (scheduler.getProcesseur().ProcesseurActif()) {
                scheduler.getProcesseur().getProcessus().setTempsRestant(scheduler.getProcesseur().getProcessus().getTempsRestant() - 1);
                cpt++;
                scheduler.getProcesseur().setTempsUtilisation(scheduler.getProcesseur().getTempsUtilisation() + 1);
            }
            t++;
        } else {
            arret = false;
        }
        if(i == j){
            stop = true ;
            let ms = document.querySelector('body .msg') ;
            ms.textContent = "FIN DE L'EXECUTION ! " ;
            anime({
                targets : ms ,
                opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
                duration : 50000 ,
            });
            let tr1 = document.getElementsByClassName('pro') ;
            anime({
               targets : tr1 ,
               scale : {value : 1 , duration : 50},
               loop : true
           }) ;
        }
    }
}

function Ordonnanceur_SJF_Preemptif() {
    let tr = document.getElementsByClassName('pro') ;
        anime({
            targets : tr ,
            scale: {
                value: 1.07,
                duration: 100,           
                easing: 'easeInOutQuart'
            },
            direction : 'alternate' ,
            loop : true ,
        }) ;
        let temps = parseInt(document.querySelector('select').value , 10) ;
        let id0 = setInterval(function(){
            Ord_SJF_Preemtif(temps) ;
            if(stop){
                clearInterval(id0) ;
                console.log('Nombre de changements de contexte : ' + scheduler.getDispatcher().getNbChangementContexte());
                console.log("\n--------Fin de l'éxecution---------");
            }
        } , temps + 100) ; 
    }


function Ord_SJF_Preemtif(temps){
    while (h < scheduler.getProcessus().length) {
        if (scheduler.getProcessus()[h].getTempsArrive() === t) {
            console.log('t = ' + t + ' : ' + 'Création du processus' + scheduler.getProcessus()[h].getPCB().getPID());
            scheduler.CreerProcessus(h, 0 , temps);
            if (scheduler.getProcesseur().ProcesseurActif()) {
                if (scheduler.getFiles().getFile(0).getFile()[scheduler.getFiles().getFile(0).getFile().length - 1].getTempsRestant() < scheduler.getProcesseur().getProcessus().getTempsRestant()) {
                    console.log('t = ' + t + ' : ' + 'Désactivation du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                    scheduler.DesactiverProcessus(0, temps);
                    scheduler.getDispatcher().setSignal(true);
                    cpt = 0;
                    arret = true;
                }
            }
            creation = true ;
        } else {
            if (scheduler.getProcessus()[h].getTempsArrive() > t) {
                break;
            }
            h++;
            creation = false ;
        }
    }
    h = 0;
    if(creation){
        creation = false ;
    }else{
        // Si le processeur n'est pas actif
        if (scheduler.getDispatcher().getSignal() === true) {
            scheduler.getFiles().getFile(0).ordonnanceur_sjf();
            console.log('doooooone') ;
            if (scheduler.getFiles().getFile(0).getFile().length !== 0) {
                start() ;
                scheduler.ActiverProcessus(0,temps);
                arret = true ;  
                scheduler.getDispatcher().IncrementerNb();
                console.log('t = ' + t + ' : ' + 'Activation du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                if (scheduler.getProcesseur().getProcessus().getTempsExecution() === scheduler.getProcesseur().getProcessus().getTempsRestant()) {
                    scheduler.getProcesseur().getProcessus().setTempsReponse(scheduler.getProcesseur().getProcessus().getTempsAttente());
                    console.log("Temps de reponse = " + scheduler.getProcesseur().getProcessus().getTempsReponse());
                }
                scheduler.getDispatcher().setSignal(false);
            } else {
                console.log('t = ' + t + ' : ' + 'Aucun processus à activer !');
                let ms = document.querySelector('body .msg') ;
                ms.textContent = "Aucun Processus à Activer ! " ;
                anime({
                    targets : ms ,
                    opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
                    duration : 1000 ,
                });
            }
        }
        else { //Si le processeur est actif
            if (scheduler.getProcesseur().ProcesseurActif()) {
                if (scheduler.getProcesseur().getProcessus().getTempsRestant() === 0) {
                    console.log('t = ' + t + ' : ' + 'Destruction du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                    console.log("Temps de sejour : " +scheduler.getProcesseur().getProcessus().getTempsSejour());
                    console.log("Temps de Attente : " + scheduler.getProcesseur().getProcessus().getTempsAttente());
                    finish() ;
                    scheduler.DetruireProcessus(temps);
                    j++;
                    scheduler.getDispatcher().setSignal(true);
                    cpt = 0;
                    arret = true;
                }
                else {
                    if (scheduler.getProcesseur().getProcessus().getInterruptions().length > 0) {
                        if (scheduler.getProcesseur().getProcessus().getInterruptions()[0].getTempsDeclenchement() === scheduler.getProcesseur().getProcessus().getTempsExecution() - scheduler.getProcesseur().getProcessus().getTempsRestant()) {
                            scheduler.getProcesseur().getProcessus().setPriorite(num_file);
                            console.log('t = ' + t + ' : ' + 'Bloquage du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID() + ': Interruption');
                            finish() ;
                            scheduler.BloquerProcessus(temps);
                            cpt = 0;
                            scheduler.getDispatcher().setSignal(true);
                            arret = true;
                        }
                    }
                }
            }
        }

        if (!arret) {
            for (let j = 0; j < scheduler.getFileBloquee().getFile().length; j++) {
                if (scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].getTempsBlocage() === 0) {
                    console.log('t = ' + (t) + ' : ' + 'Réveil du processus' + scheduler.getFileBloquee().getFile()[j].getPCB().getPID());
                    scheduler.getFileBloquee().getFile()[j].DetruireInterruption(0);
                    scheduler.ReveillerProcessus(j, 0,temps);
                    arret = true;
                    if (scheduler.getProcesseur().ProcesseurActif()) {
                        if (scheduler.getFiles().getFile(0).getFile()[scheduler.getFiles().getFile(0).getFile().length - 1].getPriorite() < scheduler.getProcesseur().getProcessus().getPriorite()) {
                            console.log('t = ' + t + ' : ' + 'Désactivation du processus' + scheduler.getProcesseur().getProcessus().getPCB().getPID());
                            scheduler.DesactiverProcessus(0, temps);
                            scheduler.getDispatcher().setSignal(true);
                            cpt = 0;
                            arret = true;
                        }
                    }
                }
            }
            if (!arret) {
                for (let j = 0; j < scheduler.getFileBloquee().getFile().length; j++) {
                    scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].setTempsBlocage(scheduler.getFileBloquee().getFile()[j].getInterruptions()[0].getTempsBlocage() - 1);
                    scheduler.getFileBloquee().getFile()[j].setTempsSejour(scheduler.getFileBloquee().getFile()[j].getTempsSejour() + 1);
                }
                for (let j = 0; j <scheduler.getFiles().getFiles().length; j++) {
                    for (let k = 0; k < scheduler.getFiles().getFile(j).getFile().length; k++) {
                        scheduler.getFiles().getFile(j).getFile()[k].setTempsAttente(scheduler.getFiles().getFile(j).getFile()[k].getTempsAttente() + 1);
                        scheduler.getFiles().getFile(j).getFile()[k].setTempsSejour(scheduler.getFiles().getFile(j).getFile()[k].getTempsSejour() + 1);
                        console.log("Processus" + scheduler.getFiles().getFile(j).getFile()[k].getPCB().getPID() + " --> " + "Temps d'attente : " + scheduler.getFiles().getFile(j).getFile()[k].getTempsAttente() + "  ,  Temps de sejour : " + scheduler.getFiles().getFile(j).getFile()[k].getTempsSejour());
                    }
                }
                if (scheduler.getProcesseur().ProcesseurActif()) {
                    scheduler.getProcesseur().getProcessus().setTempsSejour(scheduler.getProcesseur().getProcessus().getTempsSejour() + 1);
                }
            }
        }
        if (!arret) {
            if (scheduler.getProcesseur().ProcesseurActif()) {
                scheduler.getProcesseur().getProcessus().setTempsRestant(scheduler.getProcesseur().getProcessus().getTempsRestant() - 1);
                cpt++;
                scheduler.getProcesseur().setTempsUtilisation(scheduler.getProcesseur().getTempsUtilisation() + 1);
            }
            t++;
        } else {
            arret = false;
        }
        if(i == j){
            stop = true ;
            let ms = document.querySelector('body .msg') ;
            ms.textContent = "FIN DE L'EXECUTION ! " ;
            anime({
                targets : ms ,
                opacity : ['1', '1', '1', '1', '1', '1', '1', '1', '1', '0'] ,
                duration : 50000 ,
            });
            let tr1 = document.getElementsByClassName('pro') ;
            anime({
               targets : tr1 ,
               scale : {value : 1 , duration : 50},
               loop : true
           }) ;
        }
    }
}


