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
    setPID = function(processus) {
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
   
    /* Affichage */
    afficher = function(){
        console.log("\n**************** Processus ****************") ;
        this.#PCB.afficher();
        console.log("Temps d'arrivée : "+this.#TempsArrive) ;
        console.log("Temps d'exécution : "+this.#TempsExecution) ;
        console.log("Temps restant d'exécution : "+this.#TempsRestant) ;
        console.log("Priorité : "+this.#Priorite) ;
        console.log("Interruptions : ") ;
        for (let i=0 ; i<this.#Interruptions.length ; i++){
            this.#Interruptions[i].afficher() ;
        }   
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
        return PCB_processus ;
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

/*---------------------------------------------------------------------------*/
/* Main */


