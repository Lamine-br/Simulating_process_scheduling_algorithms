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
        console.log("\n-----------Processeur-----------") ;
        console.log("Num : "+this.#Num) ;
        console.log("Processus ID : "+this.#Processus.getPCB().getPID()) ;
        console.log("Contexte du processus : "+this.#Processus.getPCB().getContexte()) ;
        console.log("Temps d'utilisation : "+this.#Temps_utilisation +"s") ; 
        console.log("--------------------------------") ;

    bloquer = function() {

    }

    activer =function() {

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
        console.log("\n-----------PCB-----------") ;
        console.log("PID : ",this.#PID) ;
        console.log("Etat : ",this.#Etat) ;
        console.log("Contexte : ",this.#Contexte) ;
        console.log("-------------------------") ;
    }
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
        let tab = [] ;
        for (let i=0 ; i < this.#PCB_processus.length ; i++){
            let p = new PCB(this.#PCB_processus[i].getPID(), this.#PCB_processus[i].getEtat() , this.#PCB_processus[i].getContexte()) ;
            tab.push(p) ;
        }
        return tab ;
    }
    getNbChangementContexte = function(){
        return this.#NbChangementContexte ;
    }
    getSignal = function(){
        return this.#Signal ;
    }

    /* Setters */
    setPCB_processus = function(tab) {
        for (let i=0 ; i < tab.length ; i++){
            let p = new PCB(tab[i].getPID(), tab[i].getEtat() , tab[i].getContexte()) ;
            this.#PCB_processus.push(p) ;
        }
    }
    setNbChangementContexte = function(nb){
        this.#NbChangementContexte = nb ;
    }
    setSignal = function(etat) {
        this.#Signal = etat ;
    }

    /* Méthodes */
    AjouterPCB = function(pcb) {
        let p = new PCB(pcb.getPID() , pcb.getEtat() , pcb.getContexte()) ;
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
}

/*---------------------------------------------------------------------------*/
/* Main */
