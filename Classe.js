
//               Créer la classe Process et ses methodes

class Processes {

    #PID;
    #ArrivTime;
    #ExecTime;
    #WaitTime;
    #TurnAroundTime;
    #prio;

    constructor (PID,ArrivTime,ExecTime,WaitTime,TurnAroundTime,prio)
    {
        this.#PID=PID;
        this.#ArrivTime=ArrivTime;
        this.#ExecTime=ExecTime;
        this.#WaitTime=WaitTime;
        this.#TurnAroundTime=TurnAroundTime;
        this.#prio=prio;
       // this.nbIT=nbIT;
    }; 

    get ArrivalTime (){
        return this.#ArrivTime;
    };
    set ArrivalTime(ArrivalT){
      this.#ArrivTime=ArrivalT;   
    };
    get ProcessID(){
        return this.#PID;
    };
    set ProcessID(ID){
        this.#PID=ID;
    };
    get ExecutionTime(){
        return this.#ExecTime;
    };
    set ExecutionTime(ETime){
        this.#ExecTime=ETime;
    };
    get waitingTime(){
        return this.#WaitTime;
            };
    set WaitingTime(WTime){
        this.#WaitTime=WTime;
    };        
    get priorite(){
        return this.#prio;
    };
    set priorite(Pr){
        this.#prio=Pr;
    };
    /*get NumofIT(){
        return this.#nbIT
    };
    set NumofIT(){
        this.#nbIT=NumIT;
    };*/
    get Turnaroundtime(){
        return this.#TurnAroundTime;
    };
    set Turnaroundtime(TAtime){
        this.#TurnAroundTime=TAtime;
    };

   
};    
    

  //*****************Simple methode pour créer et afficher le processus***********
    
    
function afficher(){
       let process = new Processes("aghiles",18,15,23,50,1); 
       console.log('ProcessID: '+process.ProcessID);
       console.log( 'ArrivalTime:'+ process.ArrivalTime);
       console.log('ExecutionTime:'+process.ExecutionTime);
       console.log('WaitingTime:'+ process.waitingTime);
       console.log('Turnaroundtime:'+ process.Turnaroundtime);
       console.log( 'priority:'+process.priorite);

        };   
       
//                     Definition de Class PCB


class PCB{
    #PID;
    #Etat;
    #Contexte;

    constructor (PID,Etat,Contexte){
        this.#PID=PID;
        this.#Etat=Etat;
        this.#Contexte=Contexte;
    };

    get PID (){
        return this.#PID;
    };
    set PID(Id){
        this.#PID=Id;
    };
    get Etat(){
        return this.#Etat;
    };
    set Etat(state) {
        this.#Etat=state;
    };
    get Contexte (){
        return this.#Contexte;
    };
    set Contexte(Con){
        this.#Contexte=Con;
    };
};

 