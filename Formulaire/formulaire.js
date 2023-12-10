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
    constructor(pcb,T1,T2,prio,It)
    {
        this.#PCB = pcb ;
        this.#TempsArrive = T1 ;
        this.#TempsExecution = T2 ;
        this.#TempsRestant = T2 ;
        this.#Priorite = prio ;
        this.#Interruptions = [] ;
        this.#Interruptions = It ;
        this.#TempsAttente = 0 ;
        this.#TempsSejour = 0 ;
        this.#TempsReponse = 0 ;
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

    /* ----------------------------- */
    DetruireInterruption(pos){
        delete(this.#Interruptions.splice(pos, 1)) ;
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

   FileVide = function (){
   if ( this.#file.length === 0) {
       return(true);
   }else{
       return(false);
   }
   }
   
   Enfiler = function (processus) {
        this.#Queue += 1 ;
        if (this.FileVide()){
            this.#Tete += 1 ;
        }
        this.#file.push(processus) ;
        return (true);
       }
   
   Defiler = function (processus) {
   if (this.FileVide()){
       console.log('done') ;
       return false ;
   } else{
       let b = this.#file.shift() ;
       processus.setPCB(b.getPCB()) ;
       processus.setTempsArrive(b.getTempsArrive()) ;
       processus.setTempsExecution(b.getTempsExecution()) ;
       processus.setTempsRestant(b.getTempsRestant()) ;
       processus.setPriorite(b.getPriorite()) ;
       processus.setInterruptions(b.getInterruptions()) ;
       processus.setTempsSejour(b.getTempsSejour()) ;
       processus.setTempsAttente(b.getTempsAttente()) ;
       processus.setTempsReponse(b.getTempsReponse()) ;
       this.#Queue -= 1;
       if ( this.FileVide()){
           this.#Tete -= 1;
       }
       return true;
   }
   }

   Permut(pos1 , pos2) {
        let p1 = new Processus() ;
        p1 = this.#file[pos1] ;
        this.#file[pos1] = this.#file[pos2] ;
        this.#file[pos2] = p1 ;
   }
   
   /*Ordonnanceur_FIFO() */
 ordonnanceur_FIFO()
{
    if(this.#file.length > 1 ) /// si la file n'est pas vide et il y a plus d'un processus dedans
    {
     for (var i = 0; i < this.#file.length-2; i++) 
     {
         for(var j=i+1;j<this.#file.length-1;j++)
         {
             if(this.#file[i].getTempsArrivee() > this.#file[j].getTempsArrivee())
             {
                 this.Permut(i,j);
             }
         }
     }
  } 
}
/*-----------------------------------------------------------------------------------------------------*/
   /*Ordonnanceur_SJF() */
    ordonnanceur_sjf()
{
    if(this.#file.length > 1 ) /// si la file n'est pas vide et il y a plus d'un processus dedans
    {
     for (var i = 0; i < this.#file.length-2; i++) 
     {
         for(var j=i+1;j<this.#file.length-1;j++)
         {
             if(this.#file[i].getTempsExecution() > this.#file[j].getTempsExecution())
             {
                 this.Permut(i,j);
             }
         }
     }
  } 
 }
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
    #files ;
    
    /* Constructeur */
    constructor(nombre_files){
        this.#files = new Array(nombre_files) ;
        for(let i=0 ; i<nombre_files ; i++){
            this.#files[i] = new File_Attente() ;
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
   
   /*Ordonnanceur_FMAR() */
   Ordonnanceur_FMAR(){
        let i = 0;
        for( i=0 ; i < this.#files.length ; i++){
            if(this.#files[i].FileVide()){
                continue ;
            }else{
                return i ;
            }
        }
        return -1 ;
        
   }
   
   /*Ordonnanceur_Prio()*/
   Ordonnanceur_PRIOS()
   {
        let pos = 0 , min = 0 ;
        if(this.#files[0].getFile().length > 0){
            min = this.#files[0].getFile()[0].getPriorite() ;
            pos = 0 ;
            for(let i=0 ; i<this.#files[0].getFile().length ; i++){
                if(this.#files[0].getFile()[i].getPriorite() < min){
                    pos = i ;
                }
            }
            this.#files[0].Permut(0 , pos) ;
            return 0 ;
        }else{
            return -1 ;
        }
   }
   /*Ordonnanceur_FMSR() */
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
        this.#Signal = true ;
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
        this.#PCB_processus.splice(this.#PCB_processus.indexOf(pcb),1) ;
        return true ;
    }
    IncrementerNb = function() {
        this.#NbChangementContexte ++ ;
        return true ;
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
    setProcesseur = function(processeur){
        this.#processeur = processeur ;
    }
    setDispatcher = function(dispatcher){
        this.#dispatcher = dispatcher ;
    }
    setFiles = function(files){
        this.#files = files ;
    }
    setFileBloquee = function(file){
        this.#fileBloquee = file ;
    }
    setProcessus = function(processus){
        this.#processus = processus ;
    }

    // Rajoute le processus dans le tableau en le gardant tjrs trié
    AjouterProcessus(process){
        let t = process.getTempsArrive() ;
        let min = 0 ;
        let max = this.#processus.length - 1 ;
        let stop = false ; 
        let j = 0 ;
        if(this.#processus.length === 0){
            j = 0 ;
        }else{
            while(min <= max && !stop){
                j = Math.trunc((min + max) / 2)  ;
                if(t = this.#processus[j].getTempsArrive())
                {
                    stop = true ;
                }else
                {
                    if(t < this.#processus[j].getTempsArrive()){
                        max = j - 1 ;
                    }else{
                        min = j + 1 ;
                    }
                }
            }
            if (min > max){
                j = min ;
            }
        }
        this.#processus.splice(j , 0 , process) ;
        ///////////////////////////
        let tableau = document.querySelector('body table.tableau tbody tr') ;
        let td = document.createElement('td') ;
        td.className = 'tableau rond' ;
        td.textContent = process.getPCB().getPID() ;
        tableau.insertBefore(td,tableau.children[j]) ;
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
        this.#files.getFile(num_file).Enfiler(process) ;
    }

    // num_file : numero de la file d'ou défiler le processus en question
    ActiverProcessus(num_file){
        let process = new Processus() ;
        this.#files.getFile(num_file).Defiler(process) ;
        console.log(process) ;
        this.#processeur.setProcessus(process) ;
        this.#dispatcher.setSignal(false) ;
        process.getPCB().setEtat("Actif") ;
    }

    // num_file : numero de la file ou enfiler le processus
    DesactiverProcessus(num_file){

        // Changement de Contexte
        this.#processeur.getProcessus().getPCB().setEtat("Pret") ;
        let a = this.#processeur.getProcessus().getPCB().getContexte() ;
        let b = a [4] ;
        this.#processeur.getProcessus().getPCB().setContexte('Tour'+String.fromCharCode(b.charCodeAt()+1)) ;

        this.#files.getFile(num_file).Enfiler(this.#processeur.getProcessus()) ;
        this.#processeur.setProcessus(undefined) ;
        this.#dispatcher.setSignal(true) ;
    }

    BloquerProcessus(){

        // Changement de Contexte
        this.#processeur.getProcessus().getPCB().setEtat("Bloque") ;
        let a = this.#processeur.getProcessus().getPCB().getContexte() ;
        let b = a [4] ;
        this.#processeur.getProcessus().getPCB().setContexte('Tour'+String.fromCharCode(b.charCodeAt()+1)) ; 

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
        this.#files.getFile(num_file).Enfiler(process) ;
        process.getPCB().setEtat("Pret") ;
    }

    DetruireProcessus(){
        delete (this.#processeur.getProcessus()) ;
        this.#processeur.setProcessus(undefined) ;
        this.#dispatcher.setSignal(true) ;
    }

/***********************************Ordonnanceur FIFO***************************************************/
         Ordonnanceur_FIFO(){
        let i = this.#processus.length , j = 0 , t = 0 , h = 0 ,  arret = false , cpt = 0 , num_file = 0 ;
        while(j !== i){
            // Vérifier les Temps d'arrivée des processus 
             while(h < this.#processus.length){
                if(this.#processus[h].getTempsArrive() === t){
                    console.log('t = '+t+' : '+'Création du processus'+this.#processus[h].getPCB().getPID()) ;
                    this.CreerProcessus(h , 0) ;
    
                }else{
                    if(this.#processus[h].getTempsArrive() > t){
                        break ;
                    }
                    h++ ;
                }
            }
            h = 0 ;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true){
                 this.#files.getFile(0).ordonnanceur_FIFO() ;
                 // L'activation de processus
                if(num_file !== -1){
                    this.ActiverProcessus(num_file) ;
                    this.#dispatcher.IncrementerNb() ;
                    console.log('t = '+t+' : '+'Activation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                    if(this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()){
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente()) ;
                        console.log("Temps de reponse = "+ this.#processeur.getProcessus().getTempsReponse()) ;
                    }
                    this.#dispatcher.setSignal(false) ;
                }else{
                    console.log('t = '+t+' : '+'Aucun processus à activer !') ;
                }
            }
            else{ //Si le processeur est actif
                if(this.#processeur.ProcesseurActif()){
                    // La destruction d'un processus
                    if(this.#processeur.getProcessus().getTempsRestant() === 0){
                        console.log('t = '+t+' : '+'Destruction du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                        console.log("Temps de sejour : "+this.#processeur.getProcessus().getTempsSejour()) ;
                        console.log("Temps de Attente : "+this.#processeur.getProcessus().getTempsAttente()) ;
                        this.DetruireProcessus() ;
                        j++ ;
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                    }
                    else{
                            if(this.#processeur.getProcessus().getInterruptions().length > 0){
                                // Le Blocage d'un processus
                                if(this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()){
                                    this.#processeur.getProcessus().setPriorite(num_file) ;
                                    console.log('t = '+t+' : '+'Bloquage du processus'+this.#processeur.getProcessus().getPCB().getPID()+': Interruption') ;
                                    this.BloquerProcessus() ;
                                    cpt = 0 ;
                                    this.#dispatcher.setSignal(true) ;
                                    arret = true ;
                                }
                             }
                        }
                    }
                }
            
            if (!arret){
                for (let j = 0 ; j<this.#fileBloquee.getFile().length ; j++){
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0){
                        // Le reveil d'un processus
                        console.log('t = '+(t)+' : '+'Réveil du processus'+this.#fileBloquee.getFile()[j].getPCB().getPID()) ;
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0) ;
                        this.ReveillerProcessus(j , this.#fileBloquee.getFile()[j].getPriorite()) ;
                        arret = true ;
                    }
                }
                if(!arret){
                    for (let j = 0 ;j<this.#fileBloquee.getFile().length ; j++){
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1) ;
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1) ;
                    }
                    for(let j = 0 ; j<this.#files.getFiles().length ; j++){
                        for(let k = 0 ; k<this.#files.getFile(j).getFile().length ; k++){
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente()+1) ;
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour()+1) ;
                            console.log("Processus"+this.#files.getFile(j).getFile()[k].getPCB().getPID()+" --> "+"Temps d'attente : "+this.#files.getFile(j).getFile()[k].getTempsAttente()+ "  ,  Temps de sejour : "+this.#files.getFile(j).getFile()[k].getTempsSejour()) ;
                        }
                    }
                    if(this.#processeur.ProcesseurActif()){
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1) ;
                    }
                }
            }
            if(!arret){
                if(this.#processeur.ProcesseurActif()){
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1) ;
                    cpt++ ;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation()+1) ;
                }
                t++ ;
            }else{
                arret = false ;
            }
        }
        console.log('Nombre de changements de contexte : '+this.#dispatcher.getNbChangementContexte()) ;
        console.log("\n--------Fin de l'éxecution---------") ;
    }
    
       /***********************************Ordonnanceur SJF***************************************************/
         Ordonnanceur_SJF(){
        let i = this.#processus.length , j = 0 , t = 0 , h = 0 ,  arret = false , cpt = 0 , num_file = 0 ;
        while(j !== i){
            // Vérifier les Temps d'arrivée des processus 
             while(h < this.#processus.length){
                if(this.#processus[h].getTempsArrive() === t){
                    console.log('t = '+t+' : '+'Création du processus'+this.#processus[h].getPCB().getPID()) ;
                    this.CreerProcessus(h , 0) ;
    
                }else{
                    if(this.#processus[h].getTempsArrive() > t){
                        break ;
                    }
                    h++ ;
                }
            }
            h = 0 ;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true){
                 this.#files.getFile(0).ordonnanceur_sjf() ;
                if(num_file !== -1){
                    this.ActiverProcessus(num_file) ;
                    this.#dispatcher.IncrementerNb() ;
                    console.log('t = '+t+' : '+'Activation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                    if(this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()){
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente()) ;
                        console.log("Temps de reponse = "+ this.#processeur.getProcessus().getTempsReponse()) ;
                    }
                    this.#dispatcher.setSignal(false) ;
                }else{
                    console.log('t = '+t+' : '+'Aucun processus à activer !') ;
                }
            }
            else{ //Si le processeur est actif
                if(this.#processeur.ProcesseurActif()){
                    if(this.#processeur.getProcessus().getTempsRestant() === 0){
                        console.log('t = '+t+' : '+'Destruction du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                        console.log("Temps de sejour : "+this.#processeur.getProcessus().getTempsSejour()) ;
                        console.log("Temps de Attente : "+this.#processeur.getProcessus().getTempsAttente()) ;
                        this.DetruireProcessus() ;
                        j++ ;
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                    }
                    else{
                            if(this.#processeur.getProcessus().getInterruptions().length > 0){
                                if(this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()){
                                    this.#processeur.getProcessus().setPriorite(num_file) ;
                                    console.log('t = '+t+' : '+'Bloquage du processus'+this.#processeur.getProcessus().getPCB().getPID()+': Interruption') ;
                                    this.BloquerProcessus() ;
                                    cpt = 0 ;
                                    this.#dispatcher.setSignal(true) ;
                                    arret = true ;
                                }
                             }
                        }
                    }
                }
            
            if (!arret){
                for (let j = 0 ; j<this.#fileBloquee.getFile().length ; j++){
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0){
                        console.log('t = '+(t)+' : '+'Réveil du processus'+this.#fileBloquee.getFile()[j].getPCB().getPID()) ;
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0) ;
                        this.ReveillerProcessus(j , this.#fileBloquee.getFile()[j].getPriorite()) ;
                        arret = true ;
                    }
                }
                if(!arret){
                    for (let j = 0 ;j<this.#fileBloquee.getFile().length ; j++){
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1) ;
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1) ;
                    }
                    for(let j = 0 ; j<this.#files.getFiles().length ; j++){
                        for(let k = 0 ; k<this.#files.getFile(j).getFile().length ; k++){
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente()+1) ;
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour()+1) ;
                            console.log("Processus"+this.#files.getFile(j).getFile()[k].getPCB().getPID()+" --> "+"Temps d'attente : "+this.#files.getFile(j).getFile()[k].getTempsAttente()+ "  ,  Temps de sejour : "+this.#files.getFile(j).getFile()[k].getTempsSejour()) ;
                        }
                    }
                    if(this.#processeur.ProcesseurActif()){
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1) ;
                    }
                }
            }
            if(!arret){
                if(this.#processeur.ProcesseurActif()){
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1) ;
                    cpt++ ;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation()+1) ;
                }
                t++ ;
            }else{
                arret = false ;
            }
        }
        console.log('Nombre de changements de contexte : '+this.#dispatcher.getNbChangementContexte()) ;
        console.log("\n--------Fin de l'éxecution---------") ;
    }
    

         /*************************Ordonnanceur Round Robin*************************/
    Ordonnanceur_RR(){
        let i = this.#processus.length , j = 0 , t = 0 , h = 0 , quantum = 0 , arret = false , cpt = 0 , num_file = 0 ;
        while(j !== i){
            // Vérifier les Temps d'arrivée des processus 
             while(h < this.#processus.length){
                if(this.#processus[h].getTempsArrive() === t){
                    console.log('t = '+t+' : '+'Création du processus'+this.#processus[h].getPCB().getPID()) ;
                    this.CreerProcessus(h , 0) ;

                }else{
                    if(this.#processus[h].getTempsArrive() > t){
                        break ;
                    }
                    h++ ;
                }
            }
            h = 0 ;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true){
                if(num_file !== -1){
                    this.ActiverProcessus(0) ;
                    this.#dispatcher.setNbChangementContexte(this.#dispatcher.getNbChangementContexte()+1) ;
                    console.log('t = '+t+' : '+'Activation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                    if(this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()){
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente()) ;
                        console.log("Temps de reponse = "+ this.#processeur.getProcessus().getTempsReponse()) ;
                    }
                    quantum = this.#files.getFile(0).getQuantum() ;
                    this.#dispatcher.setSignal(false) ;
                }else{
                    console.log('t = '+t+' : '+'Aucun processus à activer !') ;
                }
            }else{ //Si le processeur est actif
                if(this.#processeur.ProcesseurActif()){
                    if(this.#processeur.getProcessus().getTempsRestant() === 0){
                        console.log('t = '+t+' : '+'Destruction du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                        this.#processeur.getProcessus().afficher() ;
                        this.DetruireProcessus() ;
                        j++ ;
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                    }else{
                        if(cpt === quantum){
                        console.log('t = '+t+' : '+'Désactivation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                        this.DesactiverProcessus(0) ;                       
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                        }else{
                            if(this.#processeur.getProcessus().getInterruptions().length > 0){
                                if(this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()){
                                    console.log('t = '+t+' : '+'Bloquage du processus'+this.#processeur.getProcessus().getPCB().getPID()+': Interruption') ;
                                    this.BloquerProcessus() ;
                                    cpt = 0 ;
                                    this.#dispatcher.setSignal(true) ;
                                    arret = true ;
                                }
                             }
                        }
                    }
                }
            }
            if (!arret){
                for (let j = 0 ; j<this.#fileBloquee.getFile().length ; j++){
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0){
                        console.log('t = '+(t)+' : '+'Réveil du processus'+this.#fileBloquee.getFile()[j].getPCB().getPID()) ;
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0) ;
                        this.ReveillerProcessus(j , 0) ;
                        arret = true ;
                    }
                }
                if(!arret){
                    for (let j = 0 ;j<this.#fileBloquee.getFile().length ; j++){
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1) ;
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1) ;
                    }
                    for(let j = 0 ; j<this.#files.getFiles().length ; j++){
                        for(let k = 0 ; k<this.#files.getFile(j).getFile().length ; k++){
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente()+1) ;
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour()+1) ;
                            console.log("Processus"+this.#files.getFile(j).getFile()[k].getPCB().getPID()+" --> "+"Temps d'attente : "+this.#files.getFile(j).getFile()[k].getTempsAttente()+ "  ,  Temps de sejour : "+this.#files.getFile(j).getFile()[k].getTempsSejour()) ;
                        }
                    }
                    if(this.#processeur.ProcesseurActif()){
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1) ;
                    }
                }
            }
            if(!arret){
                if(this.#processeur.ProcesseurActif()){
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1) ;
                    cpt++ ;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation()+1) ;
                }
                t++ ;
            }else{
                arret = false ;
            }
        }
        console.log('Nombre de changements de contexte : '+this.#dispatcher.getNbChangementContexte()) ;
        console.log("\n--------Fin de l'éxecution---------") ;
    }
           

/*****************Ordonnanceur Par Priorite Statique*****************/ 
    Ordonnanceur_PRIOS_NonPreemptif()
    {
        let i = this.#processus.length , j = 0 , t = 0 , h = 0 , quantum = 0 , arret = false , cpt = 0 , num_file = 0 ;
        while(j !== i){
            // Vérifier les Temps d'arrivée des processus 
             while(h < this.#processus.length){
                if(this.#processus[h].getTempsArrive() === t){
                    console.log('t = '+t+' : '+'Création du processus'+this.#processus[h].getPCB().getPID()) ;
                    this.CreerProcessus(h , 0) ;
                }else{
                    if(this.#processus[h].getTempsArrive() > t){
                        break ;
                    }
                    h++ ;
                }
            }
            h = 0 ;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true){
                num_file = this.#files.Ordonnanceur_PRIOS() ;
                if(num_file !== -1){
                    this.ActiverProcessus(num_file) ;
                    this.#dispatcher.IncrementerNb() ;
                    console.log('t = '+t+' : '+'Activation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                    if(this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()){
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente()) ;
                        console.log("Temps de reponse = "+ this.#processeur.getProcessus().getTempsReponse()) ;
                    }
                    this.#dispatcher.setSignal(false) ;
                }else{
                    console.log('t = '+t+' : '+'Aucun processus à activer !') ;
                }
            }else{ //Si le processeur est actif
                if(this.#processeur.ProcesseurActif()){
                    if(this.#processeur.getProcessus().getTempsRestant() === 0){
                        console.log('t = '+t+' : '+'Destruction du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                        console.log("Temps de sejour : "+this.#processeur.getProcessus().getTempsSejour()) ;
                        console.log("Temps de Attente : "+this.#processeur.getProcessus().getTempsAttente()) ;
                        this.DetruireProcessus() ;
                        j++ ;
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                    }else{
                        if(this.#processeur.getProcessus().getInterruptions().length !== 0){
                            if(this.#processeur.getProcessus().getInterruptions().length > 0){
                                if(this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()){
                                    console.log('t = '+t+' : '+'Bloquage du processus'+this.#processeur.getProcessus().getPCB().getPID()+': Interruption') ;
                                    this.BloquerProcessus() ;
                                    cpt = 0 ;
                                    this.#dispatcher.setSignal(true) ;
                                    arret = true ;
                                }
                             }
                        }
                    }
                }
            }
            if (!arret){
                for (let j = 0 ; j<this.#fileBloquee.getFile().length ; j++){
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0){
                        console.log('t = '+(t)+' : '+'Réveil du processus'+this.#fileBloquee.getFile()[j].getPCB().getPID()) ;
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0) ;
                        this.ReveillerProcessus(j , 0) ;
                        arret = true ;
                    }
                }
                if(!arret){
                    for (let j = 0 ;j<this.#fileBloquee.getFile().length ; j++){
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1) ;
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1) ;
                    }
                    for(let j = 0 ; j<this.#files.getFiles().length ; j++){
                        for(let k = 0 ; k<this.#files.getFile(j).getFile().length ; k++){
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente()+1) ;
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour()+1) ;
                            console.log("Processus"+this.#files.getFile(j).getFile()[k].getPCB().getPID()+" --> "+"Temps d'attente : "+this.#files.getFile(j).getFile()[k].getTempsAttente()+ "  ,  Temps de sejour : "+this.#files.getFile(j).getFile()[k].getTempsSejour()) ;
                        }
                    }
                    if(this.#processeur.ProcesseurActif()){
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1) ;
                    }
                }
            }
            if(!arret){
                if(this.#processeur.ProcesseurActif()){
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1) ;
                    cpt++ ;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation()+1) ;
                }
                t++ ;
            }else{
                arret = false ;
            }
        }
        console.log('Nombre de changements de contexte : '+this.#dispatcher.getNbChangementContexte()) ;
        console.log("\n--------Fin de l'éxecution---------") ;
    }
                
    
/*****************Ordonnanceur Par Priorite Statique*****************/ 
Ordonnanceur_PRIOS_Preemptif()
{
    let i = this.#processus.length , j = 0 , t = 0 , h = 0 , quantum = 0 , arret = false , cpt = 0 , num_file = 0 ;
    while(j !== i){
        // Vérifier les Temps d'arrivée des processus 
         while(h < this.#processus.length){
            if(this.#processus[h].getTempsArrive() === t){
                console.log('t = '+t+' : '+'Création du processus'+this.#processus[h].getPCB().getPID()) ;
                if(this.#processeur.ProcesseurActif()){
                    if(this.#processus[h].getPriorite() < this.#processeur.getProcessus().getPriorite()){
                        console.log('t = '+t+' : '+'Désactivation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                        this.DesactiverProcessus(0) ;
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                    }
                }
                this.CreerProcessus(h , 0) ;
            }else{
                if(this.#processus[h].getTempsArrive() > t){
                    break ;
                }
                h++ ;
            }
        }
        h = 0 ;
        // Si le processeur n'est pas actif
        if (this.#dispatcher.getSignal() === true){
            num_file = this.#files.Ordonnanceur_PRIOS() ;
            if(num_file !== -1){
                this.ActiverProcessus(num_file) ;
                this.#dispatcher.IncrementerNb() ;
                console.log('t = '+t+' : '+'Activation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                if(this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()){
                    this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente()) ;
                    console.log("Temps de reponse = "+ this.#processeur.getProcessus().getTempsReponse()) ;
                }
                this.#dispatcher.setSignal(false) ;
            }else{
                console.log('t = '+t+' : '+'Aucun processus à activer !') ;
            }
        }else{ //Si le processeur est actif
            if(this.#processeur.ProcesseurActif()){
                if(this.#processeur.getProcessus().getTempsRestant() === 0){
                    console.log('t = '+t+' : '+'Destruction du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                    console.log("Temps de sejour : "+this.#processeur.getProcessus().getTempsSejour()) ;
                    console.log("Temps de Attente : "+this.#processeur.getProcessus().getTempsAttente()) ;
                    this.DetruireProcessus() ;
                    j++ ;
                    this.#dispatcher.setSignal(true) ;
                    cpt = 0 ;
                    arret = true ;
                }else{
                    if(this.#processeur.getProcessus().getInterruptions().length !== 0){
                        if(this.#processeur.getProcessus().getInterruptions().length > 0){
                            if(this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()){
                                console.log('t = '+t+' : '+'Bloquage du processus'+this.#processeur.getProcessus().getPCB().getPID()+': Interruption') ;
                                this.BloquerProcessus() ;
                                cpt = 0 ;
                                this.#dispatcher.setSignal(true) ;
                                arret = true ;
                            }
                         }
                    }
                }
            }
        }
        if (!arret){
            for (let j = 0 ; j<this.#fileBloquee.getFile().length ; j++){
                if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0){
                    console.log('t = '+(t)+' : '+'Réveil du processus'+this.#fileBloquee.getFile()[j].getPCB().getPID()) ;
                    this.#fileBloquee.getFile()[j].DetruireInterruption(0) ;
                    if(this.#processeur.ProcesseurActif()){
                        if(this.#fileBloquee.getFile()[j].getPriorite() < this.#processeur.getProcessus().getPriorite()){
                            console.log('t = '+t+' : '+'Désactivation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                            this.DesactiverProcessus(0) ;
                            this.#dispatcher.setSignal(true) ;
                            cpt = 0 ;
                            arret = true ;
                        }
                    }
                    this.ReveillerProcessus(j , 0) ;
                    arret = true ;
                }
            }
            if(!arret){
                for (let j = 0 ;j<this.#fileBloquee.getFile().length ; j++){
                    this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1) ;
                    this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1) ;
                }
                for(let j = 0 ; j<this.#files.getFiles().length ; j++){
                    for(let k = 0 ; k<this.#files.getFile(j).getFile().length ; k++){
                        this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente()+1) ;
                        this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour()+1) ;
                        console.log("Processus"+this.#files.getFile(j).getFile()[k].getPCB().getPID()+" --> "+"Temps d'attente : "+this.#files.getFile(j).getFile()[k].getTempsAttente()+ "  ,  Temps de sejour : "+this.#files.getFile(j).getFile()[k].getTempsSejour()) ;
                    }
                }
                if(this.#processeur.ProcesseurActif()){
                    this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1) ;
                }
            }
        }
        if(!arret){
            if(this.#processeur.ProcesseurActif()){
                this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1) ;
                cpt++ ;
                this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation()+1) ;
            }
            t++ ;
        }else{
            arret = false ;
        }
    }
    console.log('Nombre de changements de contexte : '+this.#dispatcher.getNbChangementContexte()) ;
    console.log("\n--------Fin de l'éxecution---------") ;
}

    /*****************Ordonnanceur Files Multiniveaux Avec Recyclage*****************/
    Ordonnanceur_FMAR(){
        let i = this.#processus.length , j = 0 , t = 0 , h = 0 , quantum = 0 , arret = false , cpt = 0 , num_file = 0 ;
        while(j !== i){
            // Vérifier les Temps d'arrivée des processus 
             while(h < this.#processus.length){
                if(this.#processus[h].getTempsArrive() === t){
                    console.log('t = '+t+' : '+'Création du processus'+this.#processus[h].getPCB().getPID()) ;
                    this.CreerProcessus(h , 0) ;

                }else{
                    if(this.#processus[h].getTempsArrive() > t){
                        break ;
                    }
                    h++ ;
                }
            }
            h = 0 ;
            // Si le processeur n'est pas actif
            if (this.#dispatcher.getSignal() === true){
                num_file = this.#files.Ordonnanceur_FMAR() ;
                if(num_file !== -1){
                    this.ActiverProcessus(num_file) ;
                    this.#dispatcher.IncrementerNb() ;
                    console.log('t = '+t+' : '+'Activation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                    if(this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()){
                        this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente()) ;
                        console.log("Temps de reponse = "+ this.#processeur.getProcessus().getTempsReponse()) ;
                    }
                    quantum = this.#files.getFile(num_file).getQuantum() ;
                    this.#dispatcher.setSignal(false) ;
                }else{
                    console.log('t = '+t+' : '+'Aucun processus à activer !') ;
                }
            }else{ //Si le processeur est actif
                if(this.#processeur.ProcesseurActif()){
                    if(this.#processeur.getProcessus().getTempsRestant() === 0){
                        console.log('t = '+t+' : '+'Destruction du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                        console.log("Temps de sejour : "+this.#processeur.getProcessus().getTempsSejour()) ;
                        console.log("Temps de Attente : "+this.#processeur.getProcessus().getTempsAttente()) ;
                        this.DetruireProcessus() ;
                        j++ ;
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                    }else{
                        if(cpt === quantum){
                        if(num_file < this.#files.getFiles().length - 1){
                            console.log('t = '+t+' : '+'Désactivation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                            this.DesactiverProcessus(num_file + 1) ;
                        }else{
                            console.log('t = '+t+' : '+'Désactivation du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                            this.DesactiverProcessus(num_file) ;
                        }
                        this.#dispatcher.setSignal(true) ;
                        cpt = 0 ;
                        arret = true ;
                        }else{
                            if(this.#processeur.getProcessus().getInterruptions().length > 0){
                                if(this.#processeur.getProcessus().getInterruptions()[0].getTempsDeclenchement() === this.#processeur.getProcessus().getTempsExecution() - this.#processeur.getProcessus().getTempsRestant()){
                                    this.#processeur.getProcessus().setPriorite(num_file) ;
                                    console.log('t = '+t+' : '+'Bloquage du processus'+this.#processeur.getProcessus().getPCB().getPID()+': Interruption') ;
                                    this.BloquerProcessus() ;
                                    cpt = 0 ;
                                    this.#dispatcher.setSignal(true) ;
                                    arret = true ;
                                }
                             }
                        }
                    }
                }
            }
            if (!arret){
                for (let j = 0 ; j<this.#fileBloquee.getFile().length ; j++){
                    if (this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() === 0){
                        console.log('t = '+(t)+' : '+'Réveil du processus'+this.#fileBloquee.getFile()[j].getPCB().getPID()) ;
                        this.#fileBloquee.getFile()[j].DetruireInterruption(0) ;
                        this.ReveillerProcessus(j , this.#fileBloquee.getFile()[j].getPriorite()) ;
                        arret = true ;
                    }
                }
                if(!arret){
                    for (let j = 0 ;j<this.#fileBloquee.getFile().length ; j++){
                        this.#fileBloquee.getFile()[j].getInterruptions()[0].setTempsBlocage(this.#fileBloquee.getFile()[j].getInterruptions()[0].getTempsBlocage() - 1) ;
                        this.#fileBloquee.getFile()[j].setTempsSejour(this.#fileBloquee.getFile()[j].getTempsSejour() + 1) ;
                    }
                    for(let j = 0 ; j<this.#files.getFiles().length ; j++){
                        for(let k = 0 ; k<this.#files.getFile(j).getFile().length ; k++){
                            this.#files.getFile(j).getFile()[k].setTempsAttente(this.#files.getFile(j).getFile()[k].getTempsAttente()+1) ;
                            this.#files.getFile(j).getFile()[k].setTempsSejour(this.#files.getFile(j).getFile()[k].getTempsSejour()+1) ;
                            console.log("Processus"+this.#files.getFile(j).getFile()[k].getPCB().getPID()+" --> "+"Temps d'attente : "+this.#files.getFile(j).getFile()[k].getTempsAttente()+ "  ,  Temps de sejour : "+this.#files.getFile(j).getFile()[k].getTempsSejour()) ;
                        }
                    }
                    if(this.#processeur.ProcesseurActif()){
                        this.#processeur.getProcessus().setTempsSejour(this.#processeur.getProcessus().getTempsSejour() + 1) ;
                    }
                }
            }
            if(!arret){
                if(this.#processeur.ProcesseurActif()){
                    this.#processeur.getProcessus().setTempsRestant(this.#processeur.getProcessus().getTempsRestant() - 1) ;
                    cpt++ ;
                    this.#processeur.setTempsUtilisation(this.#processeur.getTempsUtilisation()+1) ;
                }
                t++ ;
            }else{
                arret = false ;
            }
        }
        console.log('Nombre de changements de contexte : '+this.#dispatcher.getNbChangementContexte()) ;
        console.log("\n--------Fin de l'éxecution---------") ;
    }
}

/* main */

let nombre_processus = 0 ;
let tableau = new Array(nombre_processus) ;
let pos = 0 ;
let selection = undefined ;
let indice = 0 ;
let input_Its = undefined ;
let nb_Its = 0 ;

let pcb1 = new PCB(1 , "Pret" , "Tour1") ;
let pcb2 = new PCB(2 , "Pret" , "Tour1") ;
let pcb3 = new PCB(3 , "Pret" , "Tour1") ;
let pcb4 = new PCB(4 , "Pret" , "Tour1") ;
let pcb5 = new PCB(5 , "Pret" , "Tour1") ;
let it1 = new Interruption("Lecture Disque" , 5 , 2) ;
let It1 = [it1] ;
let it2 = new Interruption("Lecture Mémoire" , 4 , 2) ;
let it3 = new Interruption("Lecture Mémoire" , 2 , 19) ;
let It2 = [it2,it3] ;
let process1 = new Processus(pcb1 , 4 , 20 , 2 , It1) ;
let process2 = new Processus(pcb2 , 3 , 30 , 3 , It2) ;
let process3 = new Processus(pcb3 , 2 , 10 , 0 , []) ;
let process4 = new Processus(pcb4 , 1 , 10 , 0 , []) ;

let files = new File_Multiniveaux(1) ;
let processeur = new Processeur() ;
let dispatcher = new Dispatcher() ;
let tab = [pcb1 , pcb2] ;
dispatcher.setPCB_processus(tab) ;
let fileBloquee = new File() ;
let processus = [] ;

let scheduler = new Scheduler(processeur , dispatcher , files , fileBloquee , processus) ;

function Submit(){
    let input = document.getElementById('nb_processus') ;
    if(input.value == "" || input.value <= 0){
        alert('Le nombre de processus doit être entre 1 et 100') ;
    }else
    {
        nombre_processus = parseInt(input.value , 10) ;
        tableau = new Array(nombre_processus) ;
    for(let i=0 ; i<nombre_processus ; i++){
        tableau[i] = new Processus() ;
    }
    // Supression de l'input précédent en cas de plusieurs entrées
    let ancien = document.getElementsByClassName('partie2') ;
    for(let j=0 ; j<ancien.length ;j++){
        ancien[j].parentElement.removeChild(ancien[j]) ;
    }
    let anciens = document.getElementsByClassName('row') ;
    for(let j=0 ; j<anciens.length ;j++){
        anciens[j].parentElement.removeChild(anciens[j]) ;
    }
    let brs = document.querySelectorAll('br') ;
    for(let i=1 ; i<brs.length ; i++){
        brs[i].parentElement.removeChild(brs[i]) ;
    }

    //insertion des deux divs
    let row = document.createElement('div') ;
    row.className = 'row Degrade' ;
    let containers = document.getElementsByClassName('container') ;
    cont = containers[1] ;
    cont.appendChild(row) ;
    let colonne1 = document.createElement('div') ;
    colonne1.className = 'col-8' ;
    let colonne2 = document.createElement('div') ;
    colonne2.className = 'col-4' ;
    row.appendChild(colonne1) ;
    row.appendChild(colonne2) ;

    // Creation de l'input de la selection de processus
    let divs = document.getElementsByClassName('col-8') ;
    let div1 = document.createElement("div") ;
    div1.className = 'partie2' ;
    let select = document.createElement("select") ;
    select.className = 'form-control' ;
    select.id = 'selection' ;
    for(let i =0 ; i<nombre_processus ;i++){
        let option = document.createElement('option') ;
        option.textContent = "Processus " + (i+1) ;
        select.appendChild(option) ;
    }
    let label = document.createElement('label') ;
    label.textContent = 'Selection du processus à entrer : ' ;
    div1.appendChild(label) ;
    div1.appendChild(select) ;
    divs[0].appendChild(div1) ;
    selection  = document.querySelector('select') ;   
    
    // Creation des inputs pour l'entrée de données
    let pere = document.createElement('div') ;
    pere.className = 'row mb-4' ;

    // ajout de l'input "temps d'arrivee"
    let fils1 = document.createElement('div') ;
    fils1.className = 'col' ;
    let label1 = document.createElement('label') ;
    label1.textContent = "Temps d'arrivée" ;
    let input1 = document.createElement('input') ;
    input1.className = "form-control" ;
    input1.type = 'number' ;
    input1.placeholder = "Temps d'arrivée" ;
    fils1.appendChild(label1) ;
    fils1.appendChild(input1) ;
    pere.appendChild(fils1) ;
    
    // ajout de l'input "temps d'execution"
    let fils2 = document.createElement('div') ;
    fils2.className = 'col' ;
    let label2 = document.createElement('label') ;
    label2.textContent = "Temps d'exécution" ;
    let input2 = document.createElement('input') ;
    input2.className = "form-control" ;
    input2.type = 'number' ;
    input2.placeholder = "Temps d'exécution" ;
    fils2.appendChild(label2) ;
    fils2.appendChild(input2) ;
    pere.appendChild(fils2) ;

    // ajout de l'input "priorite"
    let fils3 = document.createElement('div') ;
    fils3.className = 'col' ;
    let label3 = document.createElement('label') ;
    label3.textContent = "Priorité" ;
    let input3 = document.createElement('input') ;
    input3.className = "form-control" ;
    input3.type = 'number' ;
    input3.placeholder = "Priorité" ;
    fils3.appendChild(label3) ;
    fils3.appendChild(input3) ;
    pere.appendChild(fils3) ;

    div1.appendChild(pere) ;

    
    let its = document.createElement('div') ;
    its.className = 'row mb-4' ;
    // ajout de l'input "nombre des interruptions"
    let it1 = document.createElement('div') ;
    it1.className = 'col' ;
    let labela = document.createElement('label') ;
    labela.textContent = "Nombre d'interruptions" ;
    let inputa = document.createElement('input') ;
    inputa.className = "form-control" ;
    inputa.id = "nb_its" ;
    inputa.type = 'number' ;
    inputa.placeholder = "Nombre d'interruptions" ;
    it1.appendChild(labela) ;
    it1.appendChild(inputa) ;
    its.appendChild(it1) ;
    div1.appendChild(its) ;
    input_Its = document.getElementById('nb_its') ;

    /////////////////////////////
    let divB = document.createElement('div') ;
    divB.className = "btn-group btn-block" ;
    divB.setAttribute('role' , 'group') ;

    // Creation des bouttons 
    let bouton1 = document.createElement('button') ;
    bouton1.className = "btn btn-dark" ;
    bouton1.id = 'button' ;
    bouton1.textContent = '>' ;
    bouton1.setAttribute('onclick' , 'Suivant()') ;

    let bouton2 = document.createElement('button') ;
    bouton2.className = "btn btn-dark" ;
    bouton2.id = 'button' ;
    bouton2.textContent = '<' ;
    bouton2.setAttribute('onclick' , 'Precedent()') ;

    let bouton3 = document.createElement('button') ;
    bouton3.className = "btn btn-primary" ;
    bouton3.id = 'button2' ;
    bouton3.textContent = 'Sauvegarde' ;
    bouton3.setAttribute('onclick' , 'Sauvegarde()') ;

    let bouton4 = document.createElement('button') ;
    bouton4.className = "btn btn-secondary" ;
    bouton4.id = 'button2' ;
    bouton4.textContent = 'Processus aléatoire' ;
    bouton4.setAttribute('onclick' , 'Random2()') ;

    divB.className = "container" ;

    divB.appendChild(bouton2) ;
    divB.appendChild(bouton3) ;
    divB.appendChild(bouton4) ;
    divB.appendChild(bouton1) ;
    div1.appendChild(divB) ;
    divs[0].style.border = '3px solid black' ; 

    // Creation de la partie "files"
    let cols = document.getElementsByClassName('col-4') ;
    let col2 = cols[0] ;
    col2.classList.add('Degrade') ;
    col2.style.border = '3px solid black' ;

    let lab = document.createElement('label') ;
    lab.textContent = "Quantum" ;
    let inp = document.createElement('input') ;
    inp.className = 'form-control' ;
    inp.id = 'quantum' ;
    inp.type = "number" ;
    let help = document.createElement('div') ;
    help.className = "form-text" ;
    help.textContent = "Pour le Round-Robin" ;
    col2.appendChild(lab) ;
    col2.appendChild(inp) ;
    col2.appendChild(help) ;
    col2.appendChild(document.createElement('br')) ;

    let sel = document.createElement('select') ;
    sel.className = 'form-select' ;
    sel.id = "nb_files" ;
    let lab2 = document.createElement('label') ;
    lab2.textContent = "Nombre de files " ;
    for(let i = 0 ; i<10 ; i++){
        let option = document.createElement('option') ;
        option.textContent = i + 1 ;
        sel.appendChild(option) ;
    }
    let help2 = document.createElement('div') ;
    help2.className = "form-text" ;
    help2.textContent = "Pour le Multi-niveaux" ;
    col2.appendChild(lab2) ;
    col2.appendChild(sel) ;
    col2.appendChild(help2) ;

    let divq = document.createElement('div') ;
    divq.className = "row mb-4" ;
    col2.appendChild(divq) ;
    let divq1 = document.createElement('div') ;
    divq1.className = "col" ;
    let sel1 = document.createElement("select") ;
    sel1.className = 'form-select' ;
    sel1.id = "file" ;
    let option1 = document.createElement('option') ;
    option1.textContent = "File 0" ;
    sel1.appendChild(option1) ;
    divq1.appendChild(sel1) ;
    divq.appendChild(divq1) ;
    let divq2 = document.createElement('div') ;
    divq2.className = 'col' ;
    let inp1 = document.createElement('input') ;
    inp1.className = 'form-control' ;
    inp1.placeholder = 'Quantum' ;
    inp1.id = "file_quantum" ;
    divq2.appendChild(inp1) ;
    divq.appendChild(divq2) ;

    let but = document.createElement('button') ;
    but.className = 'btn btn-secondary col' ;
    but.textContent = "✔" ;
    but.setAttribute('onclick' , 'Sauvegarde_file()') ;
    but.id = "file_suivante" ;
    let divq3 = document.createElement('div') ;
    divq3.className = 'col' ;
    divq3.appendChild(but) ;
    divq.appendChild(divq3) ;

    divq.parentElement.appendChild(document.createElement('h7')) ;
    divq.parentElement.appendChild(document.createElement('br')) ;
    divq.parentElement.appendChild(document.createElement('br')) ;
    divq.parentElement.appendChild(document.createElement('br')) ;

    let bouton5 = document.createElement('button') ;
    bouton5.className = "glow-on-hover" ;
    bouton5.textContent = 'Simulation' ;
    bouton5.id = "continuer" ;
    bouton5.setAttribute('onclick' , 'Continuer()') ;
    divq.parentElement.appendChild(bouton5) ;

    let bouton6 = document.createElement('button') ;
    bouton6.className = "glow-on-hover" ;
    bouton6.textContent = 'Compraison' ;
    bouton6.id = "continuer" ;
    bouton6.setAttribute('onclick' , 'Comparaison()') ;
    divq.parentElement.appendChild(bouton6) ;
    }
}

function Random1(){
    nombre_processus = Math.floor(Math.random()*20) + 1 ;
    tableau = new Array(nombre_processus) ;
    for(let i=0 ; i<nombre_processus ; i++){
        tableau[i] = new Processus() ;
    }
    pos = 0 ;
    console.log(nombre_processus) ;
    document.querySelector('input').value = nombre_processus ;

    // Supression de l'input précédent en cas de plusieurs entrées
    let ancien = document.getElementsByClassName('partie2') ;
    for(let j=0 ; j<ancien.length ;j++){
        ancien[j].parentElement.removeChild(ancien[j]) ;
    }
    let anciens = document.getElementsByClassName('row') ;
    for(let j=0 ; j<anciens.length ;j++){
        anciens[j].parentElement.removeChild(anciens[j]) ;
    }
    let brs = document.querySelectorAll('br') ;
    for(let i=1 ; i<brs.length ; i++){
        brs[i].parentElement.removeChild(brs[i]) ;
    }

    //insertion des deux divs (partie Processus et partie files)
    let row = document.createElement('div') ;
    row.className = 'row Degrade' ;
    let containers = document.getElementsByClassName('container') ;
    cont = containers[1] ;
    cont.appendChild(row) ;
    let colonne1 = document.createElement('div') ;
    colonne1.className = 'col-8' ;
    let colonne2 = document.createElement('div') ;
    colonne2.className = 'col-4' ;
    row.appendChild(colonne1) ;
    row.appendChild(colonne2) ;

    // Creation de l'input de la selection de processus
    let divs = document.getElementsByClassName('col-8') ;
    let div1 = document.createElement("div") ;
    div1.className = 'partie2' ;
    let select = document.createElement("select") ;
    select.className = 'form-control' ;
    select.id = 'selection' ;
    for(let i =0 ; i<nombre_processus ;i++){
        let option = document.createElement('option') ;
        option.textContent = "Processus " + (i+1) ;
        select.appendChild(option) ;
    }
    let label = document.createElement('label') ;
    label.textContent = 'Selection du processus à entrer : ' ;
    div1.appendChild(label) ;
    div1.appendChild(select) ;
    divs[0].appendChild(div1) ;
    selection  = document.querySelector('select') ;   
    
    // Creation des inputs pour l'entrée de données
    let pere = document.createElement('div') ;
    pere.className = 'row mb-4' ;
    let fils1 = document.createElement('div') ;
    fils1.className = 'col' ;
    let label1 = document.createElement('label') ;
    label1.textContent = "Temps d'arrivée" ;
    let input1 = document.createElement('input') ;
    input1.className = "form-control" ;
    input1.type = 'number' ;
    input1.placeholder = "Temps d'arrivée" ;
    fils1.appendChild(label1) ;
    fils1.appendChild(input1) ;
    pere.appendChild(fils1) ;
    
    let fils2 = document.createElement('div') ;
    fils2.className = 'col' ;
    let label2 = document.createElement('label') ;
    label2.textContent = "Temps d'exécution" ;
    let input2 = document.createElement('input') ;
    input2.className = "form-control" ;
    input2.type = 'number' ;
    input2.placeholder = "Temps d'exécution" ;
    fils2.appendChild(label2) ;
    fils2.appendChild(input2) ;
    pere.appendChild(fils2) ;

    let fils3 = document.createElement('div') ;
    fils3.className = 'col' ;
    let label3 = document.createElement('label') ;
    label3.textContent = "Priorité" ;
    let input3 = document.createElement('input') ;
    input3.className = "form-control" ;
    input3.type = 'number' ;
    input3.placeholder = "Priorité" ;
    fils3.appendChild(label3) ;
    fils3.appendChild(input3) ;
    pere.appendChild(fils3) ;

    div1.appendChild(pere) ;

    
    let its = document.createElement('div') ;
    its.className = 'row mb-4' ;
    let it1 = document.createElement('div') ;
    it1.className = 'col' ;
    let labela = document.createElement('label') ;
    labela.textContent = "Nombre d'interruptions" ;
    let inputa = document.createElement('input') ;
    inputa.className = "form-control" ;
    inputa.id = "nb_its" ;
    inputa.type = 'number' ;
    inputa.placeholder = "Nombre d'interruptions" ;
    it1.appendChild(labela) ;
    it1.appendChild(inputa) ;
    its.appendChild(it1) ;
    div1.appendChild(its) ;
    input_Its = document.getElementById('nb_its') ;

    /////////////////////////////
    let divB = document.createElement('div') ;
    divB.className = "btn-group btn-block" ;
    divB.setAttribute('role' , 'group') ;

    let bouton1 = document.createElement('button') ;
    bouton1.className = "btn btn-dark" ;
    bouton1.id = 'button' ;
    bouton1.textContent = '>' ;
    bouton1.setAttribute('onclick' , 'Suivant()') ;

    let bouton2 = document.createElement('button') ;
    bouton2.className = "btn btn-dark" ;
    bouton2.id = 'button' ;
    bouton2.textContent = '<' ;
    bouton2.setAttribute('onclick' , 'Precedent()') ;

    let bouton3 = document.createElement('button') ;
    bouton3.className = "btn btn-primary" ;
    bouton3.id = 'button2' ;
    bouton3.textContent = 'Sauvegarde' ;
    bouton3.setAttribute('onclick' , 'Sauvegarde()') ;

    let bouton4 = document.createElement('button') ;
    bouton4.className = "btn btn-secondary" ;
    bouton4.id = 'button2' ;
    bouton4.textContent = 'Processus aléatoire' ;
    bouton4.setAttribute('onclick' , 'Random2()') ;

    divB.className = "container" ;

    divB.appendChild(bouton2) ;
    divB.appendChild(bouton3) ;
    divB.appendChild(bouton4) ;
    divB.appendChild(bouton1) ;
    div1.appendChild(divB) ;
    divs[0].style.border = '3px solid black' ; 

    let cols = document.getElementsByClassName('col-4') ;
    let col2 = cols[0] ;
    col2.classList.add('Degrade') ;
    col2.style.border = '3px solid black' ;

    let lab = document.createElement('label') ;
    lab.textContent = "Quantum" ;
    let inp = document.createElement('input') ;
    inp.className = 'form-control' ;
    inp.id = 'quantum' ;
    inp.type = "number" ;
    let help = document.createElement('div') ;
    help.className = "form-text" ;
    help.textContent = "Pour le Round-Robin" ;
    col2.appendChild(lab) ;
    col2.appendChild(inp) ;
    col2.appendChild(help) ;
    col2.appendChild(document.createElement('br')) ;

    let sel = document.createElement('select') ;
    sel.className = 'form-select' ;
    sel.id = "nb_files" ;
    let lab2 = document.createElement('label') ;
    lab2.textContent = "Nombre de files " ;
    for(let i = 0 ; i<10 ; i++){
        let option = document.createElement('option') ;
        option.textContent = i + 1 ;
        sel.appendChild(option) ;
    }
    let help2 = document.createElement('div') ;
    help2.className = "form-text" ;
    help2.textContent = "Pour le Multi-niveaux" ;
    col2.appendChild(lab2) ;
    col2.appendChild(sel) ;
    col2.appendChild(help2) ;

    let divq = document.createElement('div') ;
    divq.className = "row mb-4" ;
    col2.appendChild(divq) ;
    let divq1 = document.createElement('div') ;
    divq1.className = "col" ;
    let sel1 = document.createElement("select") ;
    sel1.className = 'form-select' ;
    sel1.id = "file" ;
    let option1 = document.createElement('option') ;
    option1.textContent = "File 0" ;
    sel1.appendChild(option1) ;
    divq1.appendChild(sel1) ;
    divq.appendChild(divq1) ;
    let divq2 = document.createElement('div') ;
    divq2.className = 'col' ;
    let inp1 = document.createElement('input') ;
    inp1.className = 'form-control' ;
    inp1.placeholder = 'Quantum' ;
    inp1.id = "file_quantum" ;
    divq2.appendChild(inp1) ;
    divq.appendChild(divq2) ;

    let but = document.createElement('button') ;
    but.className = 'btn btn-secondary col' ;
    but.textContent = "✔" ;
    but.setAttribute('onclick' , 'Sauvegarde_file()') ;
    but.id = "file_suivante" ;
    let divq3 = document.createElement('div') ;
    divq3.className = 'col' ;
    divq3.appendChild(but) ;
    divq.appendChild(divq3) ;

    divq.parentElement.appendChild(document.createElement('h7')) ;
    divq.parentElement.appendChild(document.createElement('br')) ;
    divq.parentElement.appendChild(document.createElement('br')) ;
    divq.parentElement.appendChild(document.createElement('br')) ;

    let bouton5 = document.createElement('button') ;
    bouton5.className = "glow-on-hover" ;
    bouton5.textContent = 'Simulation' ;
    bouton5.id = "continuer" ;
    bouton5.setAttribute('onclick' , 'Continuer()') ;
    divq.parentElement.appendChild(bouton5) ;

    let bouton6 = document.createElement('button') ;
    bouton6.className = "glow-on-hover" ;
    bouton6.textContent = 'Compraison' ;
    bouton6.id = "continuer" ;
    bouton6.setAttribute('onclick' , 'Comparaison()') ;
    divq.parentElement.appendChild(bouton6) ;
}

function Sauvegarde(){
    let select = document.querySelector('select') ;
    let inputs = document.querySelectorAll("input") ;
    let pcb = new PCB(select.selectedIndex + 1 , "Pret" , "Tour1") ;
    tableau[select.selectedIndex].setPCB(pcb) ;
    tableau[select.selectedIndex].setTempsArrive(parseInt(inputs[1].value,10)) ;
    tableau[select.selectedIndex].setTempsExecution(parseInt(inputs[2].value,10)) ;
    tableau[select.selectedIndex].setTempsRestant(parseInt(inputs[2].value,10)) ;
    tableau[select.selectedIndex].setPriorite(parseInt(inputs[3].value,10)) ; 
    if(inputs.length > 7){
        tableau[select.selectedIndex].getInterruptions()[document.getElementById('Its_selection').selectedIndex].setTempsBlocage(parseInt(inputs[5].value,10)) ; 
        tableau[select.selectedIndex].getInterruptions()[document.getElementById('Its_selection').selectedIndex].setTempsDeclenchement(parseInt(inputs[6].value,10)) ; 
        tableau[select.selectedIndex].getInterruptions()[document.getElementById('Its_selection').selectedIndex].setType(document.getElementById('Its_type').value) ; 
    }
    Suivant() ;
}

function Suivant(){
    let it_input = document.getElementById('nb_its') ;
    let select = document.querySelector('select') ;
    select.selectedIndex = (select.selectedIndex + 1) % select.length ;
    it_input.placeholder = "Nombre d'interruptions" ;
    console.log(it_input) ;
}

function Precedent(){
    let select = document.querySelector('select') ;
    if(select.selectedIndex == 0){
        select.selectedIndex = select.selectedIndex + select.length - 1 ;
    }else{
        select.selectedIndex = select.selectedIndex - 1 ;
    }
    let it_input = document.getElementById('nb_its') ;
    it_input.value = "" ;
    it_input.placeholder = "Nombre d'interruptions" ;
}

function Random2(){
    let inputs = document.querySelectorAll('input') ;
    inputs[1].value = Math.floor(Math.random()*20 + 1) ;
    inputs[2].value = Math.floor(Math.random()*30 + 1) ;
    inputs[3].value = Math.floor(Math.random()*10) ;
    inputs[4].value = Math.floor(Math.random()*5) ;
    setTimeout(function(){
        if(parseInt(inputs[4].value , 10) > 0){
            let inputs = document.querySelectorAll('input') ;
            inputs[5].value = Math.floor(Math.random()*10 + 1) ;
            inputs[6].value = Math.floor(Math.random()*parseInt(inputs[2].value , 10) + 1) ;
            let select = document.getElementById('Its_type') ;
            select.selectedIndex = Math.floor(Math.random()*2) ;
            tableau[document.querySelector('select').selectedIndex].getInterruptions()[0].setTempsBlocage(parseInt(inputs[5].value, 10)) ;
            tableau[document.querySelector('select').selectedIndex].getInterruptions()[0].setTempsDeclenchement(parseInt(inputs[6].value , 10)) ;
            tableau[document.querySelector('select').selectedIndex].getInterruptions()[0].setType(document.getElementById('Its_type').options[select.selectedIndex].value) ;
        }
        for(let i=1 ; i<parseInt(inputs[4].value , 10) ; i++){
            let t1 = Math.floor(Math.random()*10 + 1) ;
            let t2 = Math.floor(Math.random()*parseInt(inputs[2].value , 10) + 1) ;
            let ind = Math.floor(Math.random()*2) ;
            tableau[document.querySelector('select').selectedIndex].getInterruptions()[i].setTempsBlocage(t1) ;
            tableau[document.querySelector('select').selectedIndex].getInterruptions()[i].setTempsDeclenchement(t2) ;
            tableau[document.querySelector('select').selectedIndex].getInterruptions()[i].setType(document.getElementById('Its_type').options[ind].value) ;
        }
    }, 0) ;
}

function Continuer(){
    localStorage.clear() ;
    for(let i=0 ; i<tableau.length ; i++){
        if(i == 0){
            localStorage.setItem("TA" , tableau[i].getTempsArrive()) ;
            localStorage.setItem("TE" , tableau[i].getTempsExecution()) ;
            localStorage.setItem("Prio" , tableau[i].getPriorite()) ;
        }else{
            localStorage.setItem("TA" , localStorage.getItem("TA") + " " + tableau[i].getTempsArrive()) ;
            localStorage.setItem("TE" , localStorage.getItem("TE") + " " + tableau[i].getTempsExecution()) ;
            localStorage.setItem("Prio" , localStorage.getItem("Prio") + " " + tableau[i].getPriorite()) ;
        }
        for(let j=0 ; j<tableau[i].getInterruptions().length ; j++){
            if(i == 0 && j == 0){
                localStorage.setItem("Its" , tableau[i].getInterruptions()[j].getTempsBlocage()) ;
                localStorage.setItem("Its" , localStorage.getItem("Its") + "$" + tableau[i].getInterruptions()[j].getTempsDeclenchement()) ;
                localStorage.setItem("Its" , localStorage.getItem("Its") + "$" + tableau[i].getInterruptions()[j].getType()) ;
            }else{
                localStorage.setItem("Its" , localStorage.getItem("Its") + tableau[i].getInterruptions()[j].getTempsBlocage()) ;
                localStorage.setItem("Its" , localStorage.getItem("Its") + "$" + tableau[i].getInterruptions()[j].getTempsDeclenchement()) ;
                localStorage.setItem("Its" , localStorage.getItem("Its") + "$" + tableau[i].getInterruptions()[j].getType()) ;
            } 
            if(j != tableau[i].getInterruptions().length - 1){
                localStorage.setItem("Its" , localStorage.getItem("Its") + "-") ;
            }
        }
        if(i != tableau.length - 1){
            localStorage.setItem("Its" , localStorage.getItem("Its") + " | ") ;
        }
    }
    for (let h=0 ; h<scheduler.getFiles().getFiles().length ; h++){
        if(h == 0){
            localStorage.setItem('Files' , '' + scheduler.getFiles().getFile(h).getQuantum()) ;
        }else{
            localStorage.setItem('Files' , localStorage.getItem('Files') + ' ' + scheduler.getFiles().getFile(h).getQuantum()) ;
        }
    }
    localStorage.setItem('Quantum' , document.getElementById('quantum').value) ;
    window.location = '../Choix_Algorithmes_Statique.html' ;
    return tableau ;
}

setInterval(function(){
    if(selection != undefined){
        if(selection.selectedIndex != indice){
            if(tableau.length > 0){
                let inputs = document.querySelectorAll('input') ;
                inputs[1].value = tableau[selection.selectedIndex].getTempsArrive() ;
                inputs[2].value = tableau[selection.selectedIndex].getTempsExecution() ;
                inputs[3].value = tableau[selection.selectedIndex].getPriorite() ;
                if(tableau[selection.selectedIndex].getInterruptions() != undefined ){ 
                    inputs[4].value = tableau[selection.selectedIndex].getInterruptions().length ;
                }else{
                    inputs[4].value = "" ;
                    inputs[4].placeholder = "Nombre d'interruptions" ;
                }
                indice = selection.selectedIndex ;
            }
        }
    }
    if(input_Its != undefined){
        if(parseInt(input_Its.value , 10) > 0 && parseInt(input_Its.value , 10) != nb_Its){
            let ancien = document.getElementById('Its') ;
            if(ancien != undefined){
                ancien.parentElement.removeChild(ancien) ;
            }
            let It = document.createElement('div') ;
            It.className = 'row mb-4' ;
            It.id = 'Its' ;
            let div1 = document.createElement('div') ;
            div1.className = 'col' ;
            let select = document.createElement("select") ;
            select.className = 'form-control' ;
            select.id = 'Its_selection' ;
            for(let i = 0 ; i<input_Its.value ;i++){
                let option = document.createElement('option') ;
                option.textContent = "Interruption " + (i+1) ;
                select.appendChild(option) ;
            }
            let label = document.createElement('label') ;
            div1.appendChild(label) ;
            div1.appendChild(select) ;
            It.appendChild(div1) ;
            input_Its.parentElement.parentElement.appendChild(It) ;
            nb_Its = parseInt(input_Its.value , 10) ;

            if(tableau[document.querySelector('select').selectedIndex].getInterruptions().length == 0){
                let processus = tableau[document.querySelector('select').selectedIndex] ;
                Its = new Array(parseInt(nb_Its, 10)) ;
                for(let i=0 ;i<Its.length ; i++){
                    Its[i] = new Interruption() ;
                }
                processus.setInterruptions(Its) ;
            }

            let div2 = document.createElement('div') ;
            div2.className = 'col' ;
            let input2 = document.createElement('input') ;
            input2.className = "form-control" ;
            input2.type = 'number' ;
            let label2 = document.createElement('label') ;
            label2.textContent = 'T-Blocage' ;
            div2.appendChild(label2) ;
            div2.appendChild(input2) ;
            It.appendChild(div2) ;

            let div3 = document.createElement('div') ;
            div3.className = 'col' ;
            let input3 = document.createElement('input') ;
            input3.className = "form-control" ;
            input3.type = 'number' ;
            let label3 = document.createElement('label') ;
            label3.textContent = 'T-Déclenchement' ;
            div3.appendChild(label3) ;
            div3.appendChild(input3) ;
            It.appendChild(div3) ;

            let div4 = document.createElement('div') ;
            div4.className = 'col' ;
            let select2 = document.createElement('select') ;
            select2.className = 'form-control' ;
            select2.id = 'Its_type' ;
            let option1 = document.createElement('option') ;
            option1.textContent = "Appel de fonction ";
            select2.appendChild(option1) ;
            let option2 = document.createElement('option') ;
            option2.textContent = "Lecture Disque ";
            select2.appendChild(option2) ;
            let label4 = document.createElement('label') ;
            label4.textContent = "Type " ;
            div4.appendChild(label4) ;
            div4.appendChild(select2) ;
            It.appendChild(div4) ;

            let inputs = document.querySelectorAll('input') ;
            inputs[4].value = tableau[selection.selectedIndex].getInterruptions().length ;
            inputs[5].value = tableau[selection.selectedIndex].getInterruptions()[document.getElementById('Its_selection').selectedIndex].getTempsBlocage() ;
            inputs[6].value = tableau[selection.selectedIndex].getInterruptions()[document.getElementById('Its_selection').selectedIndex].getTempsDeclenchement() ;
            document.getElementById('Its_type').value = tableau[selection.selectedIndex].getInterruptions()[document.getElementById('Its_selection').selectedIndex].getType() ;
            
        }else{
            if(parseInt(input_Its.value , 10) <= 0  || input_Its.value == "") {
                let ancien = document.getElementById('Its') ;
                if(ancien != undefined){
                    ancien.parentElement.removeChild(ancien) ;
                }
                nb_Its = 0 ;
                tableau[document.querySelector('select').selectedIndex].setInterruptions([]) ;
            }
        }
        if(parseInt(input_Its.value , 10) > 0 && document.getElementById('Its') != undefined){
            let select = document.getElementById('Its_selection');
            let select2 = document.getElementById('Its_type') ;
            select.addEventListener('change' , function(e){
                if(document.querySelector('select').selectedIndex >=0){
                    let process = tableau[document.querySelector('select').selectedIndex] ;
                    let inputs2 = document.querySelectorAll('input') ;
                    if(process.getInterruptions()[select.selectedIndex].getTempsBlocage() != undefined){
                        inputs2[5].value = process.getInterruptions()[select.selectedIndex].getTempsBlocage() ;
                    }else{
                        inputs2[5].value = "" ;
                    }
                    if(process.getInterruptions()[select.selectedIndex].getTempsDeclenchement() != undefined){
                        inputs2[6].value = process.getInterruptions()[select.selectedIndex].getTempsDeclenchement() ;
                    }else{
                        inputs2[6].value = "" ;
                    }
                    if(process.getInterruptions()[select.selectedIndex].getType() != undefined){
                        select2.value = process.getInterruptions()[select.selectedIndex].getType() ;
                    }else{
                        select2.value = "" ;
                    }
                }
            }) 

            let inputs = document.querySelectorAll('input') ;
            let input2 = inputs[5] ;
            let input3 = inputs[6] ;
            input2.addEventListener('input' , function(){
                if(parseInt(input2.value , 10) > 0){
                    tableau[document.querySelector('select').selectedIndex].getInterruptions()[select.selectedIndex].setTempsBlocage(parseInt(input2.value , 10)) ; 
                }
            })

            input3.addEventListener('input' , function(e){
                if(parseInt(e.target.value , 10) >= 0 && parseInt(e.target.value , 10) < parseInt(document.querySelectorAll('input')[2].value , 10)){
                    tableau[document.querySelector('select').selectedIndex].getInterruptions()[select.selectedIndex].setTempsDeclenchement(parseInt(e.target.value , 10)) ; 
                }else{
                    if(parseInt(e.target.value , 10) >= parseInt(document.querySelectorAll('input')[2].value , 10)){
                        alert("Le temps de déclenchement de l'interruption doit être inférieure au temps d'éxecution du processus") ;
                        e.target.value = 0 ;
                    }
                }
            })

            tableau[document.querySelector('select').selectedIndex].getInterruptions()[select.selectedIndex].setType(select2.value) ;
            select2.addEventListener('change', function(e){
                tableau[document.querySelector('select').selectedIndex].getInterruptions()[select.selectedIndex].setType(e.target.value) ;
            })
        }
    }
} , 0) ;

let inp = document.querySelector('input') ;
    inp.addEventListener('keydown' , function(e){
        console.log(e) ;
        if(e.key == "Enter"){
            Submit() ;
        }
    })

setInterval(function(){
    if(document.getElementById('nb_files') != undefined ){
        let sel = document.getElementById('nb_files') ;
            sel.addEventListener('change' , function(e){
                let sel2 = document.getElementById('file') ;
                for(let j=0 ; j<sel.length ; j++){
                    sel2.remove(sel2.options[j]);
                }
                for(let i=0 ; i<parseInt(sel.value , 10) ; i++){
                    let option = document.createElement('option') ;
                    option.textContent = "File " + (i) ;
                    sel2.appendChild(option) ;
                }
            sel2.selectedIndex = 0 ;
            scheduler.setFiles(new File_Multiniveaux(parseInt(sel.value , 10)) );
        })

        let input = document.getElementById('quantum') ;
        input.addEventListener('input' , function(){
            localStorage.setItem("Quantum" , input.value) ;
        })

        let file = document.getElementById('file') ;
        file.addEventListener('change' , function(){
            let quantum = document.getElementById('file_quantum') ;
            if(scheduler.getFiles().getFile(file.selectedIndex).getQuantum() == undefined){
                quantum.value = "" ;
                quantum.placeholder = "Quantum" ;
            }else{
                quantum.value = scheduler.getFiles().getFile(file.selectedIndex).getQuantum() ;
            }
        })
    }
    
} , 1000) ;

function Sauvegarde_file(){
    let input = document.getElementById("file_quantum") ;
    let sel2 = document.getElementById('file') ; 
    let h = document.querySelector('h7') ;

    let erreur = false ; 
    let quantum = parseInt(input.value , 10) ; 
    let num_file = sel2.selectedIndex ;
    if(num_file !=0){
        if(quantum <= scheduler.getFiles().getFile((num_file - 1) % sel2.length).getQuantum()){
            h.style.color  = "red" ;
            h.textContent = "Le quantum de la file" + sel2.selectedIndex + " doit etre supérieur à celui de la file" + ((sel2.selectedIndex - 1) % sel2.length) ;
            erreur = true ;
            anime({
                targets : h ,
                opacity : ['1', '0.9', '0.8' , '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0'] ,
                duration : 2000 ,
            });
            console.log('erreur') ;
        }
    }

    if(!erreur){
        scheduler.getFiles().getFile(sel2.selectedIndex).setQuantum(parseInt(input.value , 10)) ;
        sel2.selectedIndex = (sel2.selectedIndex + 1) % sel2.length ;
        if(scheduler.getFiles().getFile(sel2.selectedIndex).getQuantum() != undefined){
            input.value = scheduler.getFiles().getFile(sel2.selectedIndex).getQuantum() ;
        }else{
            input.value = "" ;
        }
        h.style.color = "green" ;
        if(sel2.selectedIndex - 1 < 0){
            h.textContent = "Le quantum de la file " + (sel2.length - 1) + " est : " +  scheduler.getFiles().getFile(sel2.length - 1).getQuantum() ;
            console.log('done') ;
        }else{
            h.textContent = "Le quantum de la file " + (sel2.selectedIndex - 1) + " est : " +  scheduler.getFiles().getFile(sel2.selectedIndex - 1).getQuantum() ;
        }
        setTimeout(function(){
            anime({
                targets : h ,
                opacity : ['1', '0.9', '0.8' , '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0'] ,
                duration :2000 ,
            });
        }, 0) ;
    }
}

function Comparaison(){
    localStorage.clear() ;
    for(let i=0 ; i<tableau.length ; i++){
        if(i == 0){
            localStorage.setItem("TA" , tableau[i].getTempsArrive()) ;
            localStorage.setItem("TE" , tableau[i].getTempsExecution()) ;
            localStorage.setItem("Prio" , tableau[i].getPriorite()) ;
        }else{
            localStorage.setItem("TA" , localStorage.getItem("TA") + " " + tableau[i].getTempsArrive()) ;
            localStorage.setItem("TE" , localStorage.getItem("TE") + " " + tableau[i].getTempsExecution()) ;
            localStorage.setItem("Prio" , localStorage.getItem("Prio") + " " + tableau[i].getPriorite()) ;
        }
        for(let j=0 ; j<tableau[i].getInterruptions().length ; j++){
            if(i == 0 && j == 0){
                localStorage.setItem("Its" , tableau[i].getInterruptions()[j].getTempsBlocage()) ;
                localStorage.setItem("Its" , localStorage.getItem("Its") + "$" + tableau[i].getInterruptions()[j].getTempsDeclenchement()) ;
                localStorage.setItem("Its" , localStorage.getItem("Its") + "$" + tableau[i].getInterruptions()[j].getType()) ;
            }else{
                localStorage.setItem("Its" , localStorage.getItem("Its") + tableau[i].getInterruptions()[j].getTempsBlocage()) ;
                localStorage.setItem("Its" , localStorage.getItem("Its") + "$" + tableau[i].getInterruptions()[j].getTempsDeclenchement()) ;
                localStorage.setItem("Its" , localStorage.getItem("Its") + "$" + tableau[i].getInterruptions()[j].getType()) ;
            } 
            if(j != tableau[i].getInterruptions().length - 1){
                localStorage.setItem("Its" , localStorage.getItem("Its") + "-") ;
            }
        }
        if(i != tableau.length - 1){
            localStorage.setItem("Its" , localStorage.getItem("Its") + " | ") ;
        }
    }
    for (let h=0 ; h<scheduler.getFiles().getFiles().length ; h++){
        if(h == 0){
            localStorage.setItem('Files' , '' + scheduler.getFiles().getFile(h).getQuantum()) ;
        }else{
            localStorage.setItem('Files' , localStorage.getItem('Files') + ' ' + scheduler.getFiles().getFile(h).getQuantum()) ;
        }
    }
    localStorage.setItem('Quantum' , document.getElementById('quantum').value) ;
    window.location = '../Comparaison/ComparaisonFIFO.html' ;
}