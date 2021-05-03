/*------------------------- Déclaration du Processeur -------------------------*/

class Processeur {
    #Num 
    #Processus
    #Temps_utilisation

    /* Constructeur */
    constructor(num , processus , Temps){
        this.#Num = num ;
        this.#Processus = processus ;
        this.#Temps_utilisation = Temps ;
    }

    /* Getters */
    getNum = function() {
        return this.#Num ;
    }
    getProcessus = function() {
        return this.#Processus ;
    }
    getTempsUtilisation = function() {
        return this.#Temps_utilisation ;
    }

    /* Setters */
    setNum = function(num) {
        this.#Num = num ;
    }
    setProcessus = function(processus) {
        this.#Processus = processus ;
    }
    setTempsUtilisation = function(temps) {
        this.#Temps_utilisation = temps ;
    }

    /* Méthodes */
    ProcesseurActif = function() {
        if(this.#Processus === undefined){
            return false ;
        }else{
            return true ;
        }
    }
    // Des méthodes d'affichage
    afficher = function() {
        console.log("\n----------- Processeur -----------") ;
        console.log("Num : "+this.#Num) ;
        console.log("Processus ID : "+this.#Processus.getPCB().getPID()) ;
        console.log("Contexte du processus : "+this.#Processus.getPCB().getContexte()) ;
        console.log("Temps d'utilisation : "+this.#Temps_utilisation +"s") ; 
        console.log("----------------------------------") ;
    }

    bloquer = function() {

    }

    activer =function() {

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
    #TempsAttente ;
    #TempsSejour ;
    #TempsReponse ;

    /* Constructeur */
    constructor(pcb,T1,T2,T3,prio,It)
    {
        this.#PCB = pcb ;
        this.#TempsArrive = T1 ;
        this.#TempsExecution = T2 ;
        this.#TempsRestant = T3 ;
        this.#Priorite = prio ;
        this.#Interruptions = [] ;
        this.#Interruptions = It ;
    }; 

    /* Getters */

    getPCB = function(){
        return this.#PCB ;
    }
    getTempsArrive = function(){
        return this.#TempsArrive ;
    }
    getTempsExecution = function(){
        return this.#TempsExecution ;
    }
    getTempsRestant = function(){
        return this.#TempsRestant ;
    }
    getPriorite = function(){
        return this.#Priorite ;
    }
    getInterruptions = function(){
        return this.#Interruptions ;
    }
    getTempsAttente = function(){
        return this.#TempsAttente ;
    }
    getTempsSejour = function(){
        return this.#TempsSejour ;
    }
    getTempsReponse = function(){
        return this.#TempsReponse ;
    }

    /* Setters */

    setPCB = function(pcb){
        this.#PCB = pcb ;
    }
    setTempsArrive = function(T) {
        this.#TempsArrive = T ;
    }
    setTempsExecution = function(T){
        this.#TempsExecution = T ;
    }
    setTempsRestant = function(T){
        this.#TempsRestant = T ;
    }
    setPriorite = function(P){
        this.#Priorite = P ;
    }
    setInterruptions = function(It){
        this.#Interruptions = It ;
    }
    setTempsAttente = function(t){
        this.#TempsAttente = t ;
    }
    setTempsSejour = function(t){
        this.#TempsSejour = t ;
    }
    setTempsReponse = function(t){
        this.#TempsReponse = t ;
    }
    /* Affichage */
    afficher = function(){
        console.log("\n**************** Processus ****************") ;
        this.#PCB.afficher();
        console.log("Temps d'arrivée : "+this.#TempsArrive) ;
        console.log("Temps d'exécution : "+this.#TempsExecution) ;
        console.log("Temps restant d'exécution : "+this.#TempsRestant) ;
        console.log("Priorité : "+this.#Priorite) ;
        console.log("Interruptions : "+this.#Interruptions.length) ;
        for (let i=0 ; i<this.#Interruptions.length ; i++){
            this.#Interruptions[i].afficher() ;
        }   
        console.log("Temps d'attente : "+this.#TempsAttente) ;
        console.log("Temps de séjour : "+this.#TempsSejour) ;
        console.log("Temps de réponse : "+this.#TempsReponse) ;
        console.log("\n*******************************************") ;
    }
}

/*------------------------- Déclaration du PCB d'un processus -------------------------*/

class PCB {
    #PID 
    #Etat
    #Contexte

    /* Constructeur */
    constructor(pid , etat , contexte) {
        this.#PID = pid ;
        this.#Etat = etat ;
        this.#Contexte = contexte ;
    }

    /* Getters */
    getPID = function() {
        return this.#PID ;
    }
    getEtat = function() {
        return this.#Etat ;
    }
    getContexte = function() {
        return this.#Contexte ;
    }

    /* Setters */
    setPID = function(pid){
        this.#PID = pid ;
    }
    setEtat = function(etat) {
        this.#Etat = etat ;
    }
    setContexte = function(contexte) {
        this.#Contexte = contexte ;
    }

    /* Affichage */
    afficher = function() {
        console.log("\n----------- PCB -----------") ;
        console.log("PID : ",this.#PID) ;
        console.log("Etat : ",this.#Etat) ;
        console.log("Contexte : ",this.#Contexte) ;
        console.log("---------------------------") ;
    }
}

/*------------------------- Déclaration d'une Interruption -------------------------*/

class Interruption {
    #Type
    #Temps_blocage
    #Temps_declenchement

    /*Constructeur */
    constructor(type , t1 , t2) {
        this.#Type = type ;
        this.#Temps_blocage = t1 ;
        this.#Temps_declenchement = t2 ;
     }

    /* Getters */
    getType = function() {
        return this.#Type ;
    }
    getTempsBlocage = function() {
        return this.#Temps_blocage ;
    }
    getTempsDeclenchement = function() {
        return this.#Temps_declenchement ;
    }

    /* Setters */
    setType = function(type) {
        this.#Type = type ;
    }
    setTempsBlocage = function(temps) {
        this.#Temps_blocage = temps ;
    }
    setTempsDeclenchement = function(temps) {
        this.#Temps_declenchement = temps ;
    }

    /* Affichage */
    afficher = function(){
        console.log("\n--------------- Interruption ---------------") ;
        console.log("Type : "+this.#Type) ;
        console.log("Temps de blocage : "+this.#Temps_blocage) ;
        console.log("Temps de déclenchement : "+this.#Temps_declenchement ) ;
        console.log("-------------------------------------------") ;
    }
}

/*------------------------- Déclaration d'une File -------------------------*/

class File {
    #file
    #Tete
    #Queue
   
   /* Constructeur */
   constructor(){
       this.#file = new Array() ;
       this.#Tete = -1 ;
       this.#Queue = -1 ;
   }

   /* Getters */
    getFile = function(){
        return this.#file ;
    }
    getTete = function(){
        return this.#Tete ;
    }
    getQueue = function(){
        return this.#Queue ;
    }

   File_Vide = function (){
   if ( this.#file.length == 0) {
       return(true);
   }else{
       return(false);
   }
   }
   
   Enfiler = function (processus) {
        this.#Queue += 1 ;
        if (this.File_Vide()){
            this.#Tete += 1 ;
        }
        this.#file.push(processus) ;
        return (true);
       }
   
   Defiler = function (processus) {
   if (this.File_Vide()){
       return false ;
   } else{
       let b = this.#file.shift() ;
       processus.setPCB(b.getPCB()) ;
       processus.setTempsArrive(b.getTempsArrive()) ;
       processus.setTempsExecution(b.getTempsExecution()) ;
       processus.setTempsRestant(b.getTempsRestant()) ;
       processus.setPriorite(b.getPriorite()) ;
       processus.setInterruptions(b.getInterruptions()) ;
       this.#Queue -= 1;
       if ( this.File_Vide()){
           this.#Tete -= 1;
       }
       return true;
   }
   }
   
   /*Ordonnanceur_FIFO() */
   /*Ordonnanceur_SJF() */
   }
   
/*------------------------- Déclaration d'une File d'Attente -------------------------*/
   /* Héritage de la classe File */
   
   class  File_Attente extends File {
       #Priorite;
       #Quantum;

       /* Constructeur */ 
       constructor(P , Q){
           super() ;
           this.#Priorite = P ;
           this.#Quantum = Q ;
       }

       /* Getters */ 
       getPriorite = function(){
           return this.#Priorite ;
       }
       getQuantum = function(){
           return this.#Quantum ;
       }

       /* Setters */
       setPriorite = function(p){
           this.#Priorite = p ;
       }
       setQuantum = function(q){
           this.#Quantum = q ;
       }
   
   /*Ordonnanceur_RR()*/
   /*Ordonnanceur_Prio()*/

   }

/*------------------------- Déclaration d'une File Multiniveaux -------------------------*/
 
   class File_Multiniveaux {
    #files;
    
    /* Constructeur */
    constructor(nombre_files){
        this.#files = new Array(nombre_files) ;
        for(let i=0 ; i<nombre_files ; i++){
            this.#files[i] = new File() ;
        }
    }

     /* Getters */
    getFiles(){
        return this.#files ;
    }
    getFile(nb){
        return this.#files[nb] ;
    }

    /* Setters */
    setFiles(files){
        this.#files = files ;
    }

    setFile(nb , file){
        this.#files[nb] = file ;
    }
   
   /*Ordonnanceur_MNAR() */
   /*Ordonnanceur_MNSR() */
   }

/*------------------------- Déclaration du Dispatcher -------------------------*/

class Dispatcher {
    #PCB_processus ;
    #NbChangementContexte ;
    #Signal 

    /* Constructeur */
    constructor() {
        this.#PCB_processus = [] ;
        this.#NbChangementContexte = 0 ;
        this.#Signal = false ;
    }

    /* Getters */
    getPCB_Processus = function(){
        return this.#PCB_processus ;
    }
    getNbChangementContexte = function(){
        return this.#NbChangementContexte ;
    }
    getSignal = function(){
        return this.#Signal ;
    }

    /* Setters */
    setPCB_processus = function(tab) {
        this.#PCB_processus = tab ;    
    }
    setNbChangementContexte = function(nb){
        this.#NbChangementContexte = nb ;
    }
    setSignal = function(etat) {
        this.#Signal = etat ;
    }

    /* Méthodes */
    AjouterPCB = function(pcb) {
        this.#PCB_processus.push(pcb) ;
        return true ;
    }
    SupprimerPCB = function(pcb) {
        this.#PCB_processus.splice(this.#PCB_processus.indexOf(pcb)) ;
        return true ;
    }
    IncrementerNb = function() {
        this.#NbChangementContexte ++ ;
        return true ;
    }
    DispatcherPret = function() {
        if (this.#Signal === true){
            return true ;
        }else{
            return false ;
        }
    }
}

/*------------------------- Déclaration d'une classe globale --------------------------*/

class Scheduler {
    #processeur ;
    #dispatcher ;
    #files ;
    #fileBloquee ;
    #processus ;

    /* Constructeur */
    constructor(processeur, dispatcher , files , fileBloquee , processus){
        this.#processeur = processeur ;
        this.#dispatcher = dispatcher ;
        this.#files = files ;
        this.#fileBloquee = fileBloquee ;
        this.#processus = processus ;
    }

    /* Getters */
    getFiles = function(){
        return this.#files ;
    }
    getProcesseur = function(){
        return this.#processeur ;
    }
    getProcessus = function(){
        return this.#processus ;
    }
    getDispatcher = function(){
        return this.#dispatcher ;
    }
    getFileBloquee = function(){
        return this.#fileBloquee ;
    }

    /* Setters */

    // Rajoute le processus dans le tableau en le gardant tjrs trié
    AjouterProcessus(process){
        let t = process.getTempsArrive() ;
        let min = 0 ;
        let max = this.#processus.length ;
        let stop = false ; 
        let j = 0 ;
        while(min <= max && !stop){
            j = (min + max) / 2 ;
            if(t = this.#processus[j])
            {
                stop = true ;
            }else
            {
                if(t < this.#processus[j]){
                    max = j - 1 ;
                }else{
                    min = j + 1 ;
                }
            }
        }
        if (min > max){
            j = min ;
        }
        this.#processus.splice(j , 0 , process) ;
    }

    // position : sa position dans la tableau de processus[]
    // num_file : numero de la file ou le mettre (0 dans les cas à file simple)
    CreerProcessus(position , num_file){
        let process = new Processus() ;
        process.setPCB(this.#processus[position].getPCB()) ;
        process.setTempsArrive(this.#processus[position].getTempsArrive()) ;
        process.setTempsExecution(this.#processus[position].getTempsExecution()) ;
        process.setTempsRestant(this.#processus[position].getTempsRestant()) ;
        process.setPriorite(this.#processus[position].getPriorite()) ;
        process.setInterruptions(this.#processus[position].getInterruptions()) ;
        this.#processus.splice(position,1) ;
        this.#dispatcher.AjouterPCB(process.getPCB()) ;
        this.#files[num_file].Enfiler(process) ;
    }

    // num_file : numero de la file d'ou défiler le processus en question
    ActiverProcessus(num_file){
        let process = new Processus() ;
        this.#files[num_file].Defiler(process) ;
        this.#processeur.setProcessus(process) ;
        this.#dispatcher.setSignal(false) ;
        process.getPCB().setEtat("Actif") ;
    }

    // num_file : numero de la file ou enfiler le processus
    DesactiverProcessus(num_file){
        this.#processeur.getProcessus().getPCB().setEtat("Pret") ;
        this.#files[num_file].Enfiler(this.#processeur.getProcessus()) ;
        this.#processeur.setProcessus(undefined) ;
        this.#dispatcher.setSignal(true) ;
    }

    BloquerProcessus(){
        this.#processeur.getProcessus().getPCB().setEtat("Bloque") ;
        this.#fileBloquee.Enfiler(this.#processeur.getProcessus()) ;
        this.#processeur.setProcessus(undefined) ;
        this.#dispatcher.setSignal(true) ;
    }

    // num_file : numero de la file ou enfiler le processus
    // pos : position du processus dans la file des processus bloqués
    ReveillerProcessus(position , num_file){
        let process = new Processus() ;
        this.#fileBloquee.Permut(0 , position) ;
        this.#fileBloquee.Defiler(process) ;
        this.#files[num_file].Enfiler(process) ;
        process.getPCB().setEtat("Pret") ;
    }

    DetruireProcessus(){
        delete (this.#processeur.getProcessus()) ;
        this.#processeur.setProcessus(undefined) ;
        this.#dispatcher.setSignal(true) ;
    }

}
}

/*---------------------------------------------------------------------------*/
/* Main */
let pcb1 = new PCB(1 , "Pret" , "Tour1") ;
let pcb2 = new PCB(2 , "Pret" , "Tour1") ;
let pcb3 = new PCB(3 , "Pret" , "Tour1") ;
let pcb4 = new PCB(4 , "Pret" , "Tour1") ;
let it1 = new Interruption("Lecture Disque" , 5 , 2) ;
let It1 = [it1] ;
let it2 = new Interruption("Lecture Mémoire" , 4 , 2) ;
let It2 = [it2] ;
let process1 = new Processus(pcb1 , 20 , 0 , 20 , 1 , It1) ;
let process2 = new Processus(pcb2 , 30 , 2 , 15 , 2 , It2) ;
let process3 = new Processus(pcb3 , 20 , 0 , 20 , 1 ) ;
let process4 = new Processus(pcb4 , 30 , 2 , 15 , 2 ) ;
let files = new File_Multiniveaux(1) ;
let file = new File() ;
file.Enfiler(process1) ;
file.Enfiler(process2) ;
files[0] = file ;
let processeur = new Processeur() ;
let dispatcher = new Dispatcher() ;
let tab = [pcb1 , pcb2] ;
dispatcher.setPCB_processus(tab) ;
let fileBloquee = new File() ;
let processus = [process3 , process4] ;

let scheduler = new Scheduler(processeur , dispatcher , files , fileBloquee , processus) ;
scheduler.ActiverProcessus(0) ;
//console.log(scheduler.getFiles()[0].getFile()[0].afficher()) ;
//console.log(scheduler.getProcesseur().getProcessus().afficher()) ;
scheduler.DesactiverProcessus(0) ;
console.log(scheduler.getFiles()[0].getFile()[0].afficher()) ;
console.log(scheduler.getFiles()[0].getFile()[1].afficher()) ;
console.log(scheduler.getProcesseur().getProcessus()) ;
console.log(dispatcher.getPCB_Processus()[0].getEtat()) ;


