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
  ordonnanceur_sjf() {
    if (this.#file.length > 1) {
      /// si la file n'est pas vide et il y a plus d'un processus dedans
      for (var i = 0; i < this.#file.length - 2; i++) {
        for (var j = i + 1; j < this.#file.length - 1; j++) {
          if (
            this.#file[i].getTempsExecution() >
            this.#file[j].getTempsExecution()
          ) {
            this.Permut(i, j);
          }
        }
      }
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
  Ordonnanceur_PRIOS() {
    let pos = 0,
      min = 0;
    if (this.getFile().length > 0) {
      min = this.getFile()[0].getPriorite();
      pos = 0;
      for (let i = 0; i < this.getFile().length; i++) {
        if (this.getFile()[i].getPriorite() < min) {
          pos = i;
        }
      }
      this.Permut(0, pos);
      return 0;
    } else {
      return -1;
    }
  }

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
    let pos = 0,
      min = 0;
    if (this.#files[0].getFile().length > 0) {
      min = this.#files[0].getFile()[0].getPriorite();
      pos = 0;
      for (let i = 0; i < this.#files[0].getFile().length; i++) {
        if (this.#files[0].getFile()[i].getPriorite() < min) {
          pos = i;
        }
      }
      this.#files[0].Permut(0, pos);
      return 0;
    } else {
      return -1;
    }
  }
  /*Ordonnanceur_FMSR() */
  Ordonnanceur_FMSR() {
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
  }

  // position : sa position dans la tableau de processus[]
  // num_file : numero de la file ou le mettre (0 dans les cas à file simple)
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
  }

  // num_file : numero de la file d'ou défiler le processus en question
  ActiverProcessus(num_file , temps) {
      
      let process = new Processus();
      this.#files.getFile(num_file).Defiler(process);
      this.#processeur.setProcessus(process);
      this.#dispatcher.setSignal(false);
      process.getPCB().setEtat("Actif");
  }

  // num_file : numero de la file ou enfiler le processus
  DesactiverProcessus(num_file , temps) {

      // Changement de Contexte
      this.#processeur.getProcessus().getPCB().setEtat("Pret");
      let a = this.#processeur.getProcessus().getPCB().getContexte();
      let b = a[4];
      let c = this.#processeur.getProcessus().getPCB().getPID() ;
      this.#processeur.getProcessus().getPCB().setContexte('Tour' + String.fromCharCode(b.charCodeAt() + 1));

      this.#files.getFile(num_file).Enfiler(this.#processeur.getProcessus());
      this.#processeur.setProcessus(undefined);
      this.#dispatcher.setSignal(true) ;
  }
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
  }

  // num_file : numero de la file ou enfiler le processus
  // pos : position du processus dans la file des processus bloqués
  ReveillerProcessus(position, num_file , temps) {
      let process = new Processus();
      this.#fileBloquee.Permut(0, position);
      this.#fileBloquee.Defiler(process);
      this.#files.getFile(num_file).Enfiler(process);
      process.getPCB().setEtat("Pret");

  }

  DetruireProcessus(temps) {
      delete (this.#processeur.getProcessus());
      this.#processeur.setProcessus(undefined);
      this.#dispatcher.setSignal(true);
  }
        /***********************************Ordonnanceur FIFO***************************************************/
        Ordonnanceur_FIFO() {
        /*-----------------------------------------------------------------------------*/
          var TableauFIFO = Array(4);
          for(var i1=0; i1<4; i1++)
          {
            TableauFIFO[i1]= [];
          }
        /*-----------------------------------------------------------------------------*/

          let i = this.#processus.length,
            j = 0,
            t = 0,
            h = 0,
            arret = false,
            cpt = 0,
            num_file = 0;
          while (j !== i) {
            // Vérifier les Temps d'arrivée des processus
            while (h < this.#processus.length) {
              if (this.#processus[h].getTempsArrive() === t) {
                console.log(
                  "t = " +
                    t +
                    " : " +
                    "Création du processus" +
                    this.#processus[h].getPCB().getPID()
                );
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
                /*----------------------------------------------------------------------*/
                TableauFIFO[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                /*----------------------------------------------------------------------*/
                this.#dispatcher.IncrementerNb();
                console.log(
                  "t = " +
                    t +
                    " : " +
                    "Activation du processus" +
                    this.#processeur.getProcessus().getPCB().getPID()
                );
                if (
                  this.#processeur.getProcessus().getTempsExecution() ===
                  this.#processeur.getProcessus().getTempsRestant()
                ) {
                  this.#processeur
                    .getProcessus()
                    .setTempsReponse(
                      this.#processeur.getProcessus().getTempsAttente()
                    );
                  console.log(
                    "Temps de reponse = " +
                      this.#processeur.getProcessus().getTempsReponse()
                  );
                }
                this.#dispatcher.setSignal(false);
              } else {
                console.log("t = " + t + " : " + "Aucun processus à activer !");
              }
            } else {
              //Si le processeur est actif
              if (this.#processeur.ProcesseurActif()) {
                if (this.#processeur.getProcessus().getTempsRestant() === 0) {
                  /*----------------------------------------------------------------------*/
                  TableauFIFO[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                  /*----------------------------------------------------------------------*/
                  console.log(
                    "t = " +
                      t +
                      " : " +
                      "Destruction du processus" +
                      this.#processeur.getProcessus().getPCB().getPID()
                  );
                  console.log(
                    "Temps de sejour : " +
                      this.#processeur.getProcessus().getTempsSejour()
                  );
                  console.log(
                    "Temps de Attente : " +
                      this.#processeur.getProcessus().getTempsAttente()
                  );
                  this.DetruireProcessus();
                  j++;
                  this.#dispatcher.setSignal(true);
                  cpt = 0;
                  arret = true;
                } else {
                  if (
                    this.#processeur.getProcessus().getInterruptions().length >
                    0
                  ) {
                    if (
                      this.#processeur
                        .getProcessus()
                        .getInterruptions()[0]
                        .getTempsDeclenchement() ===
                      this.#processeur.getProcessus().getTempsExecution() -
                        this.#processeur.getProcessus().getTempsRestant()
                    ) {
                      this.#processeur.getProcessus().setPriorite(num_file);
                      /*----------------------------------------------------------------------*/
                      TableauFIFO[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                      /*----------------------------------------------------------------------*/
                      console.log(
                        "t = " +
                          t +
                          " : " +
                          "Bloquage du processus" +
                          this.#processeur.getProcessus().getPCB().getPID() +
                          ": Interruption"
                      );
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
                if (
                  this.#fileBloquee
                    .getFile()
                    [j].getInterruptions()[0]
                    .getTempsBlocage() === 0
                ) {
                  console.log(
                    "t = " +
                      t +
                      " : " +
                      "Réveil du processus" +
                      this.#fileBloquee.getFile()[j].getPCB().getPID()
                  );
                  this.#fileBloquee.getFile()[j].DetruireInterruption(0);
                  this.ReveillerProcessus(
                    j,
                    this.#fileBloquee.getFile()[j].getPriorite()
                  );
                  arret = true;
                }
              }
              if (!arret) {
                for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                  this.#fileBloquee
                    .getFile()
                    [j].getInterruptions()[0]
                    .setTempsBlocage(
                      this.#fileBloquee
                        .getFile()
                        [j].getInterruptions()[0]
                        .getTempsBlocage() - 1
                    );
                  this.#fileBloquee
                    .getFile()
                    [j].setTempsSejour(
                      this.#fileBloquee.getFile()[j].getTempsSejour() + 1
                    );
                }
                for (let j = 0; j < this.#files.getFiles().length; j++) {
                  for (
                    let k = 0;
                    k < this.#files.getFile(j).getFile().length;
                    k++
                  ) {
                    this.#files
                      .getFile(j)
                      .getFile()
                      [k].setTempsAttente(
                        this.#files.getFile(j).getFile()[k].getTempsAttente() +
                          1
                      );
                    this.#files
                      .getFile(j)
                      .getFile()
                      [k].setTempsSejour(
                        this.#files.getFile(j).getFile()[k].getTempsSejour() + 1
                      );
                    console.log(
                      "Processus" +
                        this.#files.getFile(j).getFile()[k].getPCB().getPID() +
                        " --> " +
                        "Temps d'attente : " +
                        this.#files.getFile(j).getFile()[k].getTempsAttente() +
                        "  ,  Temps de sejour : " +
                        this.#files.getFile(j).getFile()[k].getTempsSejour()
                    );
                  }
                }
                if (this.#processeur.ProcesseurActif()) {
                  this.#processeur
                    .getProcessus()
                    .setTempsSejour(
                      this.#processeur.getProcessus().getTempsSejour() + 1
                    );
                }
              }
            }
            if (!arret) {
              if (this.#processeur.ProcesseurActif()) {
                this.#processeur
                  .getProcessus()
                  .setTempsRestant(
                    this.#processeur.getProcessus().getTempsRestant() - 1
                  );
                cpt++;
                this.#processeur.setTempsUtilisation(
                  this.#processeur.getTempsUtilisation() + 1
                );
              }
              t++;
            } else {
              arret = false;
            }
          }
          console.log(
            "Nombre de changements de contexte : " +
              this.#dispatcher.getNbChangementContexte()
          );
          /*---------------------------------------------------------------*/
          return TableauFIFO;
          /*---------------------------------------------------------------*/
          // console.log("\n--------Fin de l'éxecution---------");
        }

        /***********************************Ordonnanceur SJF***************************************************/
        Ordonnanceur_SJF() {
          /*--------------------------------------------------------------------------------*/
          var TableauSJF = new Array(4);
          for(var i1=0; i1<TableauSJF.length;i1++)
          {
            TableauSJF[i1]= [];
          }
          /*--------------------------------------------------------------------------------*/
          let i = this.#processus.length,
            j = 0,
            t = 0,
            h = 0,
            arret = false,
            cpt = 0,
            num_file = 0;
          while (j !== i) {
            // Vérifier les Temps d'arrivée des processus
            while (h < this.#processus.length) {
              if (this.#processus[h].getTempsArrive() === t) {
                console.log(
                  "t = " +
                    t +
                    " : " +
                    "Création du processus" +
                    this.#processus[h].getPCB().getPID()
                );
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
                this.ActiverProcessus(num_file);
                this.#dispatcher.IncrementerNb();
                /*----------------------------------------------------------------------*/
                TableauSJF[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                /*----------------------------------------------------------------------*/
                console.log(
                  "t = " +
                    t +
                    " : " +
                    "Activation du processus" +
                    this.#processeur.getProcessus().getPCB().getPID()
                );
                if (
                  this.#processeur.getProcessus().getTempsExecution() ===
                  this.#processeur.getProcessus().getTempsRestant()
                ) {
                  this.#processeur
                    .getProcessus()
                    .setTempsReponse(
                      this.#processeur.getProcessus().getTempsAttente()
                    );
                  console.log(
                    "Temps de reponse = " +
                      this.#processeur.getProcessus().getTempsReponse()
                  );
                }
                this.#dispatcher.setSignal(false);
              } else {
                console.log("t = " + t + " : " + "Aucun processus à activer !");
              }
            } else {
              //Si le processeur est actif
              if (this.#processeur.ProcesseurActif()) {
                if (this.#processeur.getProcessus().getTempsRestant() === 0) {
                  /*----------------------------------------------------------------------*/
                  TableauSJF[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                  /*----------------------------------------------------------------------*/
                  console.log(
                    "t = " +
                      t +
                      " : " +
                      "Destruction du processus" +
                      this.#processeur.getProcessus().getPCB().getPID()
                  );
                  console.log(
                    "Temps de sejour : " +
                      this.#processeur.getProcessus().getTempsSejour()
                  );
                  console.log(
                    "Temps de Attente : " +
                      this.#processeur.getProcessus().getTempsAttente()
                  );
                  this.DetruireProcessus();
                  j++;
                  this.#dispatcher.setSignal(true);
                  cpt = 0;
                  arret = true;
                } else {
                  if (
                    this.#processeur.getProcessus().getInterruptions().length >
                    0
                  ) {
                    if (
                      this.#processeur
                        .getProcessus()
                        .getInterruptions()[0]
                        .getTempsDeclenchement() ===
                      this.#processeur.getProcessus().getTempsExecution() -
                        this.#processeur.getProcessus().getTempsRestant()
                    ) {
                      this.#processeur.getProcessus().setPriorite(num_file);
                       /*----------------------------------------------------------------------*/
                        TableauSJF[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                      /*----------------------------------------------------------------------*/
                      console.log(
                        "t = " +
                          t +
                          " : " +
                          "Bloquage du processus" +
                          this.#processeur.getProcessus().getPCB().getPID() +
                          ": Interruption"
                      );
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
                if (
                  this.#fileBloquee
                    .getFile()
                    [j].getInterruptions()[0]
                    .getTempsBlocage() === 0
                ) {
                  console.log(
                    "t = " +
                      t +
                      " : " +
                      "Réveil du processus" +
                      this.#fileBloquee.getFile()[j].getPCB().getPID()
                  );
                  this.#fileBloquee.getFile()[j].DetruireInterruption(0);
                  this.ReveillerProcessus(
                    j,
                    this.#fileBloquee.getFile()[j].getPriorite()
                  );
                  arret = true;
                }
              }
              if (!arret) {
                for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                  this.#fileBloquee
                    .getFile()
                    [j].getInterruptions()[0]
                    .setTempsBlocage(
                      this.#fileBloquee
                        .getFile()
                        [j].getInterruptions()[0]
                        .getTempsBlocage() - 1
                    );
                  this.#fileBloquee
                    .getFile()
                    [j].setTempsSejour(
                      this.#fileBloquee.getFile()[j].getTempsSejour() + 1
                    );
                }
                for (let j = 0; j < this.#files.getFiles().length; j++) {
                  for (
                    let k = 0;
                    k < this.#files.getFile(j).getFile().length;
                    k++
                  ) {
                    this.#files
                      .getFile(j)
                      .getFile()
                      [k].setTempsAttente(
                        this.#files.getFile(j).getFile()[k].getTempsAttente() +
                          1
                      );
                    this.#files
                      .getFile(j)
                      .getFile()
                      [k].setTempsSejour(
                        this.#files.getFile(j).getFile()[k].getTempsSejour() + 1
                      );
                    console.log(
                      "Processus" +
                        this.#files.getFile(j).getFile()[k].getPCB().getPID() +
                        " --> " +
                        "Temps d'attente : " +
                        this.#files.getFile(j).getFile()[k].getTempsAttente() +
                        "  ,  Temps de sejour : " +
                        this.#files.getFile(j).getFile()[k].getTempsSejour()
                    );
                  }
                }
                if (this.#processeur.ProcesseurActif()) {
                  this.#processeur
                    .getProcessus()
                    .setTempsSejour(
                      this.#processeur.getProcessus().getTempsSejour() + 1
                    );
                }
              }
            }
            if (!arret) {
              if (this.#processeur.ProcesseurActif()) {
                this.#processeur
                  .getProcessus()
                  .setTempsRestant(
                    this.#processeur.getProcessus().getTempsRestant() - 1
                  );
                cpt++;
                this.#processeur.setTempsUtilisation(
                  this.#processeur.getTempsUtilisation() + 1
                );
              }
              t++;
            } else {
              arret = false;
            }
          }
          console.log(
            "Nombre de changements de contexte : " +
              this.#dispatcher.getNbChangementContexte()
          );
           /*----------------------------------------------------------------------*/
           return TableauSJF;
           /*----------------------------------------------------------------------*/
          console.log("\n--------Fin de l'éxecution---------");
        }
        /*************************Ordonnanceur Round Robin*************************/
        Ordonnanceur_RR() {
        /*--------------------------------------------------------------------------------*/
          var TableauRR = new Array(4);
          for(var i1=0; i1<TableauRR.length;i1++)
          {
            TableauRR[i1]= [];
          }
        /*--------------------------------------------------------------------------------*/
          let i = this.#processus.length,
            j = 0,
            t = 0,
            h = 0,
            quantum = 0,
            arret = false,
            cpt = 0,
            num_file = 0;
          while (j !== i) {
            // Vérifier les Temps d'arrivée des processus
            while (h < this.#processus.length) {
              if (this.#processus[h].getTempsArrive() === t) {
                console.log(
                  "t = " +
                    t +
                    " : " +
                    "Création du processus" +
                    this.#processus[h].getPCB().getPID()
                );
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
                this.#dispatcher.setNbChangementContexte(
                  this.#dispatcher.getNbChangementContexte() + 1
                );
               /*----------------------------------------------------------------------*/
                TableauRR[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
               /*----------------------------------------------------------------------*/
                console.log(
                  "t = " +
                    t +
                    " : " +
                    "Activation du processus" +
                    this.#processeur.getProcessus().getPCB().getPID()
                );
                if (
                  this.#processeur.getProcessus().getTempsExecution() ===
                  this.#processeur.getProcessus().getTempsRestant()
                ) {
                  this.#processeur
                    .getProcessus()
                    .setTempsReponse(
                      this.#processeur.getProcessus().getTempsAttente()
                    );
                  console.log(
                    "Temps de reponse = " +
                      this.#processeur.getProcessus().getTempsReponse()
                  );
                }
                quantum = this.#files.getFile(0).getQuantum();
                this.#dispatcher.setSignal(false);
              } else {
                console.log("t = " + t + " : " + "Aucun processus à activer !");
              }
            } else {
              //Si le processeur est actif
              if (this.#processeur.ProcesseurActif()) {
                if (this.#processeur.getProcessus().getTempsRestant() === 0) {
                   /*----------------------------------------------------------------------*/
                    TableauRR[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                  /*----------------------------------------------------------------------*/
                  console.log(
                    "t = " +
                      t +
                      " : " +
                      "Destruction du processus" +
                      this.#processeur.getProcessus().getPCB().getPID()
                  );
                  this.#processeur.getProcessus().afficher();
                  this.DetruireProcessus();
                  j++;
                  this.#dispatcher.setSignal(true);
                  cpt = 0;
                  arret = true;
                } else {
                  if (cpt === quantum) {
                     /*----------------------------------------------------------------------*/
                    TableauRR[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                    /*----------------------------------------------------------------------*/
                    console.log(
                      "t = " +
                        t +
                        " : " +
                        "Désactivation du processus" +
                        this.#processeur.getProcessus().getPCB().getPID()
                    );
                    this.DesactiverProcessus(0);
                    this.#dispatcher.setSignal(true);
                    cpt = 0;
                    arret = true;
                  } else {
                    if (
                      this.#processeur.getProcessus().getInterruptions()
                        .length > 0
                    ) {
                      if (
                        this.#processeur
                          .getProcessus()
                          .getInterruptions()[0]
                          .getTempsDeclenchement() ===
                        this.#processeur.getProcessus().getTempsExecution() -
                          this.#processeur.getProcessus().getTempsRestant()
                      ) {
                         /*----------------------------------------------------------------------*/
                          TableauRR[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                        /*----------------------------------------------------------------------*/
                        console.log(
                          "t = " +
                            t +
                            " : " +
                            "Bloquage du processus" +
                            this.#processeur.getProcessus().getPCB().getPID() +
                            ": Interruption"
                        );
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
                if (
                  this.#fileBloquee
                    .getFile()
                    [j].getInterruptions()[0]
                    .getTempsBlocage() === 0
                ) {
                  console.log(
                    "t = " +
                      t +
                      " : " +
                      "Réveil du processus" +
                      this.#fileBloquee.getFile()[j].getPCB().getPID()
                  );
                  this.#fileBloquee.getFile()[j].DetruireInterruption(0);
                  this.ReveillerProcessus(j, 0);
                  arret = true;
                }
              }
              if (!arret) {
                for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                  this.#fileBloquee
                    .getFile()
                    [j].getInterruptions()[0]
                    .setTempsBlocage(
                      this.#fileBloquee
                        .getFile()
                        [j].getInterruptions()[0]
                        .getTempsBlocage() - 1
                    );
                  this.#fileBloquee
                    .getFile()
                    [j].setTempsSejour(
                      this.#fileBloquee.getFile()[j].getTempsSejour() + 1
                    );
                }
                for (let j = 0; j < this.#files.getFiles().length; j++) {
                  for (
                    let k = 0;
                    k < this.#files.getFile(j).getFile().length;
                    k++
                  ) {
                    this.#files
                      .getFile(j)
                      .getFile()
                      [k].setTempsAttente(
                        this.#files.getFile(j).getFile()[k].getTempsAttente() +
                          1
                      );
                    this.#files
                      .getFile(j)
                      .getFile()
                      [k].setTempsSejour(
                        this.#files.getFile(j).getFile()[k].getTempsSejour() + 1
                      );
                    console.log(
                      "Processus" +
                        this.#files.getFile(j).getFile()[k].getPCB().getPID() +
                        " --> " +
                        "Temps d'attente : " +
                        this.#files.getFile(j).getFile()[k].getTempsAttente() +
                        "  ,  Temps de sejour : " +
                        this.#files.getFile(j).getFile()[k].getTempsSejour()
                    );
                  }
                }
                if (this.#processeur.ProcesseurActif()) {
                  this.#processeur
                    .getProcessus()
                    .setTempsSejour(
                      this.#processeur.getProcessus().getTempsSejour() + 1
                    );
                }
              }
            }
            if (!arret) {
              if (this.#processeur.ProcesseurActif()) {
                this.#processeur
                  .getProcessus()
                  .setTempsRestant(
                    this.#processeur.getProcessus().getTempsRestant() - 1
                  );
                cpt++;
                this.#processeur.setTempsUtilisation(
                  this.#processeur.getTempsUtilisation() + 1
                );
              }
              t++;
            } else {
              arret = false;
            }
          }
          console.log(
            "Nombre de changements de contexte : " +
              this.#dispatcher.getNbChangementContexte()
          );
           /*----------------------------------------------------------------------*/
           return TableauRR;
           /*----------------------------------------------------------------------*/
          console.log("\n--------Fin de l'éxecution---------");
        }

        /*****************Ordonnanceur Par Priorite Statique*****************/
        Ordonnanceur_PRIOS_NonPreemptif() {
          /*--------------------------------------------------------------------------------*/
          var TableauPNP = new Array(4);
          for(var i1=0; i1<TableauPNP.length;i1++)
          {
            TableauPNP[i1]= [];
          }
          var i2=0; var i3=0; var i4=0; var i5=0;
          /*--------------------------------------------------------------------------------*/
          let i = this.#processus.length,
            j = 0,
            t = 0,
            h = 0,
            quantum = 0,
            arret = false,
            cpt = 0,
            num_file = 0;
          while (j !== i) {
            // Vérifier les Temps d'arrivée des processus
            while (h < this.#processus.length) {
              if (this.#processus[h].getTempsArrive() === t) {
                console.log(
                  "t = " +
                    t +
                    " : " +
                    "Création du processus" +
                    this.#processus[h].getPCB().getPID()
                );
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
              if (num_file !== -1) {
                this.ActiverProcessus(num_file);
                this.#dispatcher.IncrementerNb();
                /*----------------------------------------------------------------------*/
                TableauPNP[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                /*----------------------------------------------------------------------*/
                console.log(
                  "t = " +
                    t +
                    " : " +
                    "Activation du processus" +
                    this.#processeur.getProcessus().getPCB().getPID()
                );
                if (
                  this.#processeur.getProcessus().getTempsExecution() ===
                  this.#processeur.getProcessus().getTempsRestant()
                ) {
                  this.#processeur
                    .getProcessus()
                    .setTempsReponse(
                      this.#processeur.getProcessus().getTempsAttente()
                    );
                  console.log(
                    "Temps de reponse = " +
                      this.#processeur.getProcessus().getTempsReponse()
                  );
                }
                this.#dispatcher.setSignal(false);
              } else {
                console.log("t = " + t + " : " + "Aucun processus à activer !");
              }
            } else {
              //Si le processeur est actif
              if (this.#processeur.ProcesseurActif()) {
                if (this.#processeur.getProcessus().getTempsRestant() === 0) {
                  /*----------------------------------------------------------------------*/
                  TableauPNP[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                  /*----------------------------------------------------------------------*/
                  console.log(
                    "t = " +
                      t +
                      " : " +
                      "Destruction du processus" +
                      this.#processeur.getProcessus().getPCB().getPID()
                  );
                  console.log(
                    "Temps de sejour : " +
                      this.#processeur.getProcessus().getTempsSejour()
                  );
                  console.log(
                    "Temps de Attente : " +
                      this.#processeur.getProcessus().getTempsAttente()
                  );
                  this.DetruireProcessus();
                  j++;
                  this.#dispatcher.setSignal(true);
                  cpt = 0;
                  arret = true;
                } else {
                  if (
                    this.#processeur.getProcessus().getInterruptions()
                      .length !== 0
                  ) {
                    if (
                      this.#processeur.getProcessus().getInterruptions()
                        .length > 0
                    ) {
                      if (
                        this.#processeur
                          .getProcessus()
                          .getInterruptions()[0]
                          .getTempsDeclenchement() ===
                        this.#processeur.getProcessus().getTempsExecution() -
                          this.#processeur.getProcessus().getTempsRestant()
                      ) {
                        /*----------------------------------------------------------------------*/
                        TableauPNP[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                        /*----------------------------------------------------------------------*/
                        console.log(
                          "t = " +
                            t +
                            " : " +
                            "Bloquage du processus" +
                            this.#processeur.getProcessus().getPCB().getPID() +
                            ": Interruption"
                        );
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
                if (
                  this.#fileBloquee
                    .getFile()
                    [j].getInterruptions()[0]
                    .getTempsBlocage() === 0
                ) {
                  console.log(
                    "t = " +
                      t +
                      " : " +
                      "Réveil du processus" +
                      this.#fileBloquee.getFile()[j].getPCB().getPID()
                  );
                  this.#fileBloquee.getFile()[j].DetruireInterruption(0);
                  this.ReveillerProcessus(j, 0);
                  arret = true;
                }
              }
              if (!arret) {
                for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                  this.#fileBloquee
                    .getFile()
                    [j].getInterruptions()[0]
                    .setTempsBlocage(
                      this.#fileBloquee
                        .getFile()
                        [j].getInterruptions()[0]
                        .getTempsBlocage() - 1
                    );
                  this.#fileBloquee
                    .getFile()
                    [j].setTempsSejour(
                      this.#fileBloquee.getFile()[j].getTempsSejour() + 1
                    );
                }
                for (let j = 0; j < this.#files.getFiles().length; j++) {
                  for (
                    let k = 0;
                    k < this.#files.getFile(j).getFile().length;
                    k++
                  ) {
                    this.#files
                      .getFile(j)
                      .getFile()
                      [k].setTempsAttente(
                        this.#files.getFile(j).getFile()[k].getTempsAttente() +
                          1
                      );
                    this.#files
                      .getFile(j)
                      .getFile()
                      [k].setTempsSejour(
                        this.#files.getFile(j).getFile()[k].getTempsSejour() + 1
                      );
                    console.log(
                      "Processus" +
                        this.#files.getFile(j).getFile()[k].getPCB().getPID() +
                        " --> " +
                        "Temps d'attente : " +
                        this.#files.getFile(j).getFile()[k].getTempsAttente() +
                        "  ,  Temps de sejour : " +
                        this.#files.getFile(j).getFile()[k].getTempsSejour()
                    );
                  }
                }
                if (this.#processeur.ProcesseurActif()) {
                  this.#processeur
                    .getProcessus()
                    .setTempsSejour(
                      this.#processeur.getProcessus().getTempsSejour() + 1
                    );
                }
              }
            }
            if (!arret) {
              if (this.#processeur.ProcesseurActif()) {
                this.#processeur
                  .getProcessus()
                  .setTempsRestant(
                    this.#processeur.getProcessus().getTempsRestant() - 1
                  );
                cpt++;
                this.#processeur.setTempsUtilisation(
                  this.#processeur.getTempsUtilisation() + 1
                );
              }
              t++;
            } else {
              arret = false;
            }
          }
          console.log(
            "Nombre de changements de contexte : " +
              this.#dispatcher.getNbChangementContexte()
          );
          /*----------------------------------------------------------------------*/
          return TableauPNP;
          /*----------------------------------------------------------------------*/
          console.log("\n--------Fin de l'éxecution---------");
        }

        /*****************Ordonnanceur Par Priorite Statique*****************/
        Ordonnanceur_PRIOS_Preemptif() {
          /*--------------------------------------------------------------------------------*/
          var TableauPP = new Array(4);
          for(var i1=0; i1<TableauPP.length;i1++)
          {
            TableauPP[i1]= [];
          }
          var i2=0; var i3=0; var i4=0; var i5=0;
          /*--------------------------------------------------------------------------------*/
          let i = this.#processus.length,
            j = 0,
            t = 0,
            h = 0,
            quantum = 0,
            arret = false,
            cpt = 0,
            num_file = 0;
          while (j !== i) {
            // Vérifier les Temps d'arrivée des processus
            while (h < this.#processus.length) {
              if (this.#processus[h].getTempsArrive() === t) {
                console.log(
                  "t = " +
                    t +
                    " : " +
                    "Création du processus" +
                    this.#processus[h].getPCB().getPID()
                );
                if (this.#processeur.ProcesseurActif()) {
                  if (
                    this.#processus[h].getPriorite() <
                    this.#processeur.getProcessus().getPriorite()
                  ) {
                    /*----------------------------------------------------------------------*/
                    TableauPP[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                    /*----------------------------------------------------------------------*/
                    console.log(
                      "t = " +
                        t +
                        " : " +
                        "Désactivation du processus" +
                        this.#processeur.getProcessus().getPCB().getPID()
                    );
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
              if (num_file !== -1) {
                this.ActiverProcessus(num_file);
                /*----------------------------------------------------------------------*/
                TableauPP[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                /*----------------------------------------------------------------------*/
                this.#dispatcher.IncrementerNb();
                console.log(
                  "t = " +
                    t +
                    " : " +
                    "Activation du processus" +
                    this.#processeur.getProcessus().getPCB().getPID()
                );
                if (
                  this.#processeur.getProcessus().getTempsExecution() ===
                  this.#processeur.getProcessus().getTempsRestant()
                ) {
                  this.#processeur
                    .getProcessus()
                    .setTempsReponse(
                      this.#processeur.getProcessus().getTempsAttente()
                    );
                  console.log(
                    "Temps de reponse = " +
                      this.#processeur.getProcessus().getTempsReponse()
                  );
                }
                this.#dispatcher.setSignal(false);
              } else {
                console.log("t = " + t + " : " + "Aucun processus à activer !");
              }
            } else {
              //Si le processeur est actif
              if (this.#processeur.ProcesseurActif()) {
                if (this.#processeur.getProcessus().getTempsRestant() === 0) {
                  /*----------------------------------------------------------------------*/
                  TableauPP[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                  /*----------------------------------------------------------------------*/
                  console.log(
                    "t = " +
                      t +
                      " : " +
                      "Destruction du processus" +
                      this.#processeur.getProcessus().getPCB().getPID()
                  );
                  console.log(
                    "Temps de sejour : " +
                      this.#processeur.getProcessus().getTempsSejour()
                  );
                  console.log(
                    "Temps de Attente : " +
                      this.#processeur.getProcessus().getTempsAttente()
                  );
                  this.DetruireProcessus();
                  j++;
                  this.#dispatcher.setSignal(true);
                  cpt = 0;
                  arret = true;
                } else {
                  if (
                    this.#processeur.getProcessus().getInterruptions()
                      .length !== 0
                  ) {
                    if (
                      this.#processeur.getProcessus().getInterruptions()
                        .length > 0
                    ) {
                      if (
                        this.#processeur
                          .getProcessus()
                          .getInterruptions()[0]
                          .getTempsDeclenchement() ===
                        this.#processeur.getProcessus().getTempsExecution() -
                          this.#processeur.getProcessus().getTempsRestant()
                      ) {
                        /*----------------------------------------------------------------------*/
                        TableauPP[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                        /*----------------------------------------------------------------------*/
                        console.log(
                          "t = " +
                            t +
                            " : " +
                            "Bloquage du processus" +
                            this.#processeur.getProcessus().getPCB().getPID() +
                            ": Interruption"
                        );
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
                if (
                  this.#fileBloquee
                    .getFile()
                    [j].getInterruptions()[0]
                    .getTempsBlocage() === 0
                ) {

                  console.log(
                    "t = " +
                      t +
                      " : " +
                      "Réveil du processus" +
                      this.#fileBloquee.getFile()[j].getPCB().getPID()
                  );
                  this.#fileBloquee.getFile()[j].DetruireInterruption(0);
                  if (this.#processeur.ProcesseurActif()) {
                    if (
                      this.#fileBloquee.getFile()[j].getPriorite() <
                      this.#processeur.getProcessus().getPriorite()
                    ) {
                      /*----------------------------------------------------------------------*/
                      TableauPP[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                      /*----------------------------------------------------------------------*/
                      console.log(
                        "t = " +
                          t +
                          " : " +
                          "Désactivation du processus" +
                          this.#processeur.getProcessus().getPCB().getPID()
                      );
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
                  this.#fileBloquee
                    .getFile()
                    [j].getInterruptions()[0]
                    .setTempsBlocage(
                      this.#fileBloquee
                        .getFile()
                        [j].getInterruptions()[0]
                        .getTempsBlocage() - 1
                    );
                  this.#fileBloquee
                    .getFile()
                    [j].setTempsSejour(
                      this.#fileBloquee.getFile()[j].getTempsSejour() + 1
                    );
                }
                for (let j = 0; j < this.#files.getFiles().length; j++) {
                  for (
                    let k = 0;
                    k < this.#files.getFile(j).getFile().length;
                    k++
                  ) {
                    this.#files
                      .getFile(j)
                      .getFile()
                      [k].setTempsAttente(
                        this.#files.getFile(j).getFile()[k].getTempsAttente() +
                          1
                      );
                    this.#files
                      .getFile(j)
                      .getFile()
                      [k].setTempsSejour(
                        this.#files.getFile(j).getFile()[k].getTempsSejour() + 1
                      );
                    console.log(
                      "Processus" +
                        this.#files.getFile(j).getFile()[k].getPCB().getPID() +
                        " --> " +
                        "Temps d'attente : " +
                        this.#files.getFile(j).getFile()[k].getTempsAttente() +
                        "  ,  Temps de sejour : " +
                        this.#files.getFile(j).getFile()[k].getTempsSejour()
                    );
                  }
                }
                if (this.#processeur.ProcesseurActif()) {
                  this.#processeur
                    .getProcessus()
                    .setTempsSejour(
                      this.#processeur.getProcessus().getTempsSejour() + 1
                    );
                }
              }
            }
            if (!arret) {
              if (this.#processeur.ProcesseurActif()) {
                this.#processeur
                  .getProcessus()
                  .setTempsRestant(
                    this.#processeur.getProcessus().getTempsRestant() - 1
                  );
                cpt++;
                this.#processeur.setTempsUtilisation(
                  this.#processeur.getTempsUtilisation() + 1
                );
              }
              t++;
            } else {
              arret = false;
            }
          }
          console.log(
            "Nombre de changements de contexte : " +
              this.#dispatcher.getNbChangementContexte()
          );
          /*---------------------------------------------------------------*/
          return TableauPP;
          /*---------------------------------------------------------------*/
          console.log("\n--------Fin de l'éxecution---------");
        }

        /*****************Ordonnanceur Files Multiniveaux Avec Recyclage*****************/
        Ordonnanceur_FMAR() {
          /*--------------------------------------------------------------------------------*/
          var TableauFMAR = new Array(4);
          for(var i1=0; i1<TableauFMAR.length;i1++)
          {
            TableauFMAR[i1]= [];
          }
          var i2=0; var i3=0; var i4=0; var i5=0;
          /*--------------------------------------------------------------------------------*/
          let i = this.#processus.length,
            j = 0,
            t = 0,
            h = 0,
            quantum = 0,
            arret = false,
            cpt = 0,
            num_file = 0;
          while (j !== i) {
            // Vérifier les Temps d'arrivée des processus
            while (h < this.#processus.length) {
              if (this.#processus[h].getTempsArrive() === t) {
                console.log(
                  "t = " +
                    t +
                    " : " +
                    "Création du processus" +
                    this.#processus[h].getPCB().getPID()
                );
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
                /*----------------------------------------------------------------------*/
                TableauFMAR[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                /*----------------------------------------------------------------------*/
                console.log(
                  "t = " +
                    t +
                    " : " +
                    "Activation du processus" +
                    this.#processeur.getProcessus().getPCB().getPID()
                );
                if (
                  this.#processeur.getProcessus().getTempsExecution() ===
                  this.#processeur.getProcessus().getTempsRestant()
                ) {
                  this.#processeur
                    .getProcessus()
                    .setTempsReponse(
                      this.#processeur.getProcessus().getTempsAttente()
                    );
                  console.log(
                    "Temps de reponse = " +
                      this.#processeur.getProcessus().getTempsReponse()
                  );
                }
                quantum = this.#files.getFile(num_file).getQuantum();
                this.#dispatcher.setSignal(false);
              } else {
                console.log("t = " + t + " : " + "Aucun processus à activer !");
              }
            } else {
              //Si le processeur est actif
              if (this.#processeur.ProcesseurActif()) {
                if (this.#processeur.getProcessus().getTempsRestant() === 0) {
                  /*----------------------------------------------------------------------*/
                  TableauFMAR[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                  /*----------------------------------------------------------------------*/
                  console.log(
                    "t = " +
                      t +
                      " : " +
                      "Destruction du processus" +
                      this.#processeur.getProcessus().getPCB().getPID()
                  );
                  console.log(
                    "Temps de sejour : " +
                      this.#processeur.getProcessus().getTempsSejour()
                  );
                  console.log(
                    "Temps de Attente : " +
                      this.#processeur.getProcessus().getTempsAttente()
                  );
                  this.DetruireProcessus();
                  j++;
                  this.#dispatcher.setSignal(true);
                  cpt = 0;
                  arret = true;
                } else {
                  if (cpt === quantum) {
                    if (num_file < this.#files.getFiles().length - 1) {
                      /*----------------------------------------------------------------------*/
                      TableauFMAR[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                      /*----------------------------------------------------------------------*/
                      console.log(
                        "t = " +
                          t +
                          " : " +
                          "Désactivation du processus" +
                          this.#processeur.getProcessus().getPCB().getPID()
                      );
                      this.DesactiverProcessus(num_file + 1);
                    } else {
                      console.log(
                        "t = " +
                          t +
                          " : " +
                          "Désactivation du processus" +
                          this.#processeur.getProcessus().getPCB().getPID()
                      );
                      this.DesactiverProcessus(num_file);
                    }
                    this.#dispatcher.setSignal(true);
                    cpt = 0;
                    arret = true;
                  } else {
                    if (
                      this.#processeur.getProcessus().getInterruptions()
                        .length > 0
                    ) {
                      if (
                        this.#processeur
                          .getProcessus()
                          .getInterruptions()[0]
                          .getTempsDeclenchement() ===
                        this.#processeur.getProcessus().getTempsExecution() -
                          this.#processeur.getProcessus().getTempsRestant()
                      ) {
                        this.#processeur.getProcessus().setPriorite(num_file);
                        /*----------------------------------------------------------------------*/
                      TableauFMAR[this.#processeur.getProcessus().getPCB().getPID()-1].push(t);
                      /*----------------------------------------------------------------------*/
                        console.log(
                          "t = " +
                            t +
                            " : " +
                            "Bloquage du processus" +
                            this.#processeur.getProcessus().getPCB().getPID() +
                            ": Interruption"
                        );
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
                if (
                  this.#fileBloquee
                    .getFile()
                    [j].getInterruptions()[0]
                    .getTempsBlocage() === 0
                ) {
                  console.log(
                    "t = " +
                      t +
                      " : " +
                      "Réveil du processus" +
                      this.#fileBloquee.getFile()[j].getPCB().getPID()
                  );
                  this.#fileBloquee.getFile()[j].DetruireInterruption(0);
                  this.ReveillerProcessus(
                    j,
                    this.#fileBloquee.getFile()[j].getPriorite()
                  );
                  arret = true;
                }
              }
              if (!arret) {
                for (let j = 0; j < this.#fileBloquee.getFile().length; j++) {
                  this.#fileBloquee
                    .getFile()
                    [j].getInterruptions()[0]
                    .setTempsBlocage(
                      this.#fileBloquee
                        .getFile()
                        [j].getInterruptions()[0]
                        .getTempsBlocage() - 1
                    );
                  this.#fileBloquee
                    .getFile()
                    [j].setTempsSejour(
                      this.#fileBloquee.getFile()[j].getTempsSejour() + 1
                    );
                }
                for (let j = 0; j < this.#files.getFiles().length; j++) {
                  for (
                    let k = 0;
                    k < this.#files.getFile(j).getFile().length;
                    k++
                  ) {
                    this.#files
                      .getFile(j)
                      .getFile()
                      [k].setTempsAttente(
                        this.#files.getFile(j).getFile()[k].getTempsAttente() +
                          1
                      );
                    this.#files
                      .getFile(j)
                      .getFile()
                      [k].setTempsSejour(
                        this.#files.getFile(j).getFile()[k].getTempsSejour() + 1
                      );
                    console.log(
                      "Processus" +
                        this.#files.getFile(j).getFile()[k].getPCB().getPID() +
                        " --> " +
                        "Temps d'attente : " +
                        this.#files.getFile(j).getFile()[k].getTempsAttente() +
                        "  ,  Temps de sejour : " +
                        this.#files.getFile(j).getFile()[k].getTempsSejour()
                    );
                  }
                }
                if (this.#processeur.ProcesseurActif()) {
                  this.#processeur
                    .getProcessus()
                    .setTempsSejour(
                      this.#processeur.getProcessus().getTempsSejour() + 1
                    );
                }
              }
            }
            if (!arret) {
              if (this.#processeur.ProcesseurActif()) {
                this.#processeur
                  .getProcessus()
                  .setTempsRestant(
                    this.#processeur.getProcessus().getTempsRestant() - 1
                  );
                cpt++;
                this.#processeur.setTempsUtilisation(
                  this.#processeur.getTempsUtilisation() + 1
                );
              }
              t++;
            } else {
              arret = false;
            }
          }
          console.log(
            "Nombre de changements de contexte : " +
              this.#dispatcher.getNbChangementContexte()
          );
          /*----------------------------------------------------------------------*/
          return TableauFMAR;
          /*----------------------------------------------------------------------*/
          console.log("\n--------Fin de l'éxecution---------");
        }
        Ordonnanceur_PRIOS_NonPreemptif_bar()
        {
            var barchar=new Array(4);
            for(var m=0;m<barchar.length;m++)
            {
                barchar[m]=[];
            }
            let i = this.#processus.length , j = 0 , t = 0 , h = 0 , quantum = 0 , arret = false , cpt = 0 , num_file = 0 ;
            let somme_rep=0,somme_sej=0,somme_at=0,somme_fin=0;
            console.log("la taille est:"+i);
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
                    if(this.getFiles().getFile(0).getFile().length!==0){
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
                            somme_sej=somme_sej+this.#processeur.getProcessus().getTempsSejour();
                            console.log("Temps de Attente : "+this.#processeur.getProcessus().getTempsAttente()) ;
                            somme_at=somme_at+this.#processeur.getProcessus().getTempsAttente();
                            somme_rep=somme_rep+this.#processeur.getProcessus().getTempsReponse();
                            somme_fin=somme_fin+((this.#processeur.getProcessus().getTempsArrive())+(this.#processeur.getProcessus().getTempsSejour()));
                            if(j==i-1)/*SI on est arrivé à la fin */
                            {
                                barchar[0]=(somme_at)/i;
                                console.log ("le temps moyen d attente est:"+barchar[0]);
                                barchar[1]=(somme_sej)/i;
                                console.log ("le temps moyen de sejour  est:"+barchar[1]);  
                                barchar[2]=(somme_rep)/i;
                                console.log ("le temps moyen de reponse est:"+barchar[2]);
                                barchar[3]=(somme_fin)/i;
                                console.log ("le temps moyen fin d execution est:"+barchar[3]);
                            }
                            this.DetruireProcessus() ;
                            console.log("la valeur de j est:"+j);
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
            return barchar;
        }
        /*************************************************************************************************** */
        Ordonnanceur_PRIOS_Preemptif_bar() {
          var barcharP=new Array(4);
            for(var m=0;m<barcharP.length;m++)
            {
                barcharP[m]=[];
            }
          let somme_rep=0,somme_sej=0,somme_at=0,somme_fin=0;
          let i = this.#processus.length, j = 0, t = 0, h = 0, quantum = 0, arret = false, cpt = 0, num_file = 0;
          while (j !== i) {
              // Vérifier les Temps d'arrivée des processus 
              while (h < this.#processus.length) {
                  if (this.#processus[h].getTempsArrive() === t) {
                      console.log('t = ' + t + ' : ' + 'Création du processus' + this.#processus[h].getPCB().getPID());
                      this.CreerProcessus(h, 0);
                      if (this.#processeur.ProcesseurActif()) {
                          if (this.#files.getFile(0).getFile()[this.#files.getFile(0).getFile().length - 1].getPriorite() < this.#processeur.getProcessus().getPriorite()) {
                              console.log('t = ' + t + ' : ' + 'Désactivation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                              this.DesactiverProcessus(0);
                              this.#dispatcher.setSignal(true);
                              cpt = 0;
                              arret = true;
                          }
                      }
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
                          somme_sej=somme_sej+this.#processeur.getProcessus().getTempsSejour();
                          somme_at=somme_at+this.#processeur.getProcessus().getTempsAttente();
                          somme_rep=somme_rep+this.#processeur.getProcessus().getTempsReponse();
                          somme_fin=somme_fin+((this.#processeur.getProcessus().getTempsArrive())+(this.#processeur.getProcessus().getTempsSejour()));
                          if(j==i-1)/*SI on est arrivé à la fin */
                          {
                              barcharP[0]=(somme_at)/i;
                              barcharP[1]=(somme_sej)/i;
                              barcharP[2]=(somme_rep)/i;
                              barcharP[3]=(somme_fin)/i;
                          }
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
                          if (this.#processeur.ProcesseurActif()) {
                              if (this.#files.getFile(0).getFile()[this.#files.getFile(0).getFile().length - 1].getPriorite() < this.#processeur.getProcessus().getPriorite()) {
                                  console.log('t = ' + t + ' : ' + 'Désactivation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                                  this.DesactiverProcessus(0);
                                  this.#dispatcher.setSignal(true);
                                  cpt = 0;
                                  arret = true;
                              }
                          }
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
          return barcharP;
      }
      /*********************************************************************************************************************** */
      Ordonnanceur_SJF_Preemptif_bar() {
        var barcharSRTF=new Array(4);
        for(var m=0;m<barcharSRTF.length;m++)
        {
            barcharSRTF[m]=[];
        }
      let somme_rep=0,somme_sej=0,somme_at=0,somme_fin=0;
        let i = this.#processus.length, j = 0, t = 0, h = 0, arret = false, cpt = 0
        while (j !== i) {
            // Vérifier les Temps d'arrivée des processus 
            while (h < this.#processus.length) {
                if (this.#processus[h].getTempsArrive() === t) {
                    console.log('t = ' + t + ' : ' + 'Création du processus' + this.#processus[h].getPCB().getPID());
                    this.CreerProcessus(h, 0);
                    if (this.#processeur.ProcesseurActif()) {
                        if (this.#files.getFile(0).getFile()[this.#files.getFile(0).getFile().length - 1].getTempsRestant() < this.#processeur.getProcessus().getTempsRestant()) {
                            console.log('t = ' + t + ' : ' + 'Désactivation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                            this.DesactiverProcessus(0);
                            this.#dispatcher.setSignal(true);
                            cpt = 0;
                            arret = true;
                        }
                    }
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
                        somme_sej=somme_sej+this.#processeur.getProcessus().getTempsSejour();
                        somme_at=somme_at+this.#processeur.getProcessus().getTempsAttente();
                        somme_rep=somme_rep+this.#processeur.getProcessus().getTempsReponse();
                        somme_fin=somme_fin+((this.#processeur.getProcessus().getTempsArrive())+(this.#processeur.getProcessus().getTempsSejour()));
                        if(j==i-1)/*SI on est arrivé à la fin */
                        {
                            barcharSRTF[0]=(somme_at)/i;
                            barcharSRTF[1]=(somme_sej)/i;
                            barcharSRTF[2]=(somme_rep)/i;
                            barcharSRTF[3]=(somme_fin)/i;
                        }
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
                        if (this.#processeur.ProcesseurActif()) {
                            if (this.#files.getFile(0).getFile()[this.#files.getFile(0).getFile().length - 1].getTempsRestant() < this.#processeur.getProcessus().getTempsRestant()) {
                                console.log('t = ' + t + ' : ' + 'Désactivation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                                this.DesactiverProcessus(0);
                                this.#dispatcher.setSignal(true);
                                cpt = 0;
                                arret = true;
                            }
                        }
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
        return barcharSRTF;
    }
  
        Ordonnanceur_RR_bar(){
          var barcharRR=new Array(4);
          for(var m=0;m<barcharRR.length;m++)
          {
              barcharRR[m]=[];
          }
          let somme_rep=0,somme_sej=0,somme_at=0,somme_fin=0;
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
                  if(this.getFiles().getFile(0).getFile().length!==0){
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
                          console.log("Temps de sejour : "+this.#processeur.getProcessus().getTempsSejour()) ;
                          somme_sej=somme_sej+this.#processeur.getProcessus().getTempsSejour();
                          console.log("Temps de Attente : "+this.#processeur.getProcessus().getTempsAttente()) ;
                          somme_at=somme_at+this.#processeur.getProcessus().getTempsAttente();
                          somme_rep=somme_rep+this.#processeur.getProcessus().getTempsReponse();
                          somme_fin=somme_fin+((this.#processeur.getProcessus().getTempsArrive())+(this.#processeur.getProcessus().getTempsSejour()));
                          if(j==i-1)/*SI on est arrivé à la fin */
                          {
                              console.log("c'est fait");
                              barcharRR[0]=(somme_at)/i;
                              barcharRR[1]=(somme_sej)/i;
                              barcharRR[2]=(somme_rep)/i;
                              barcharRR[3]=(somme_fin)/i;
                          }
                          console.log('t = '+t+' : '+'Destruction du processus'+this.#processeur.getProcessus().getPCB().getPID()) ;
                          console.log("la valeur de j avant  est:"+j);
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
          return barcharRR;
      }
      /*****************************Ordonnanceur file multiniveaux avec recyclage **************************/
      Ordonnanceur_FMAR_bar(){
        var barcharFM=new Array(4);
          for(var m=0;m<barcharFM.length;m++)
          {
              barcharFM[m]=[];
          }
          let somme_rep=0,somme_sej=0,somme_at=0,somme_fin=0;
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
                      somme_sej=somme_sej+this.#processeur.getProcessus().getTempsSejour();
                      console.log("Temps de Attente : "+this.#processeur.getProcessus().getTempsAttente()) ;
                      somme_at=somme_at+this.#processeur.getProcessus().getTempsAttente();
                      somme_rep=somme_rep+this.#processeur.getProcessus().getTempsReponse();
                      somme_fin=somme_fin+((this.#processeur.getProcessus().getTempsArrive())+(this.#processeur.getProcessus().getTempsSejour()));
                      if(j==i-1)/*SI on est arrivé à la fin */
                      {
                          console.log("c'est fait");
                          barcharFM[0]=(somme_at)/i;
                          barcharFM[1]=(somme_sej)/i;
                          barcharFM[2]=(somme_rep)/i;
                          barcharFM[3]=(somme_fin)/i;
                      }
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
        return barcharFM;
    }
     /********************************Algorithme shortest job first ***************************************** */
     Ordonnanceur_SJF_bar(){
      var barcharSJ=new Array(4);
          for(var m=0;m<barcharSJ.length;m++)
          {
              barcharSJ[m]=[];
          }
          let somme_rep=0,somme_sej=0,somme_at=0,somme_fin=0;

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
              if(this.getFiles().getFile(0).getFile().length!==0)
              {
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
                      somme_sej=somme_sej+this.#processeur.getProcessus().getTempsSejour();
                      somme_at=somme_at+this.#processeur.getProcessus().getTempsAttente();
                      somme_rep=somme_rep+this.#processeur.getProcessus().getTempsReponse();
                      somme_fin=somme_fin+((this.#processeur.getProcessus().getTempsArrive())+(this.#processeur.getProcessus().getTempsSejour()));
                      if(j==i-1)/*SI on est arrivé à la fin */
                      {
                          console.log("c'est fait");
                          barcharSJ[0]=(somme_at)/i;
                          barcharSJ[1]=(somme_sej)/i;
                          barcharSJ[2]=(somme_rep)/i;
                          barcharSJ[3]=(somme_fin)/i;
                      }
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
      return barcharSJ;
  }
  /********************************Ordonnanceur first come first served*******************/
  Ordonnanceur_FIFO_bar(){
    var barcharFF=new Array(4);
          for(var m=0;m<barcharFF.length;m++)
          {
              barcharFF[m]=[];
          }
          let somme_rep=0,somme_sej=0,somme_at=0,somme_fin=0;
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
            if(this.getFiles().getFile(0).getFile().length!==0){
                this.ActiverProcessus(0) ;
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
                    somme_sej=somme_sej+this.#processeur.getProcessus().getTempsSejour();
                    somme_at=somme_at+this.#processeur.getProcessus().getTempsAttente();
                    somme_rep=somme_rep+this.#processeur.getProcessus().getTempsReponse();
                    somme_fin=somme_fin+((this.#processeur.getProcessus().getTempsArrive())+(this.#processeur.getProcessus().getTempsSejour()));
                    if(j==i-1)/*SI on est arrivé à la fin */
                    {
                        console.log("c'est fait");
                        barcharFF[0]=(somme_at)/i;
                        barcharFF[1]=(somme_sej)/i;
                        barcharFF[2]=(somme_rep)/i;
                        barcharFF[3]=(somme_fin)/i;
                    }
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
    return barcharFF;
}
/************************************************************************************************************ */
Ordonnanceur_FMSR_NonPreemptif_bar() {
  var barcharSRNP=new Array(4);
          for(var m=0;m<barcharSRNP.length;m++)
          {
              barcharSRNP[m]=[];
          }
          let somme_rep=0,somme_sej=0,somme_at=0,somme_fin=0;
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
          num_file = this.#files.Ordonnanceur_FMSR();
          if(num_file == 2){
              this.#files.getFile(num_file).Ordonnanceur_PRIOS() ;
          }
          if (num_file !== -1) {
              this.ActiverProcessus(num_file);
              this.#dispatcher.IncrementerNb();
              console.log('t = ' + t + ' : ' + 'Activation du processus' + this.#processeur.getProcessus().getPCB().getPID());
              if (this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()) {
                  this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente());
                  console.log("Temps de reponse = " + this.#processeur.getProcessus().getTempsReponse());
              }
              if(num_file == 0){
                  quantum = scheduler.getFiles().getFile(num_file).getQuantum();
              }else{
                  quantum = undefined ;
              }
              console.log(quantum) ;
              scheduler.getDispatcher().setSignal(false);
          } else {
              console.log('t = ' + t + ' : ' + 'Aucun processus à activer !');
          }
      } else { //Si le processeur est actif
          if (this.#processeur.ProcesseurActif()) {
              if (this.#processeur.getProcessus().getTempsRestant() === 0) {
                  console.log('t = ' + t + ' : ' + 'Destruction du processus' + this.#processeur.getProcessus().getPCB().getPID());
                  console.log("Temps de sejour : " + this.#processeur.getProcessus().getTempsSejour());
                  console.log("Temps de Attente : " + this.#processeur.getProcessus().getTempsAttente());
                    somme_sej=somme_sej+this.#processeur.getProcessus().getTempsSejour();
                    somme_at=somme_at+this.#processeur.getProcessus().getTempsAttente();
                    somme_rep=somme_rep+this.#processeur.getProcessus().getTempsReponse();
                    somme_fin=somme_fin+((this.#processeur.getProcessus().getTempsArrive())+(this.#processeur.getProcessus().getTempsSejour()));
                    if(j==i-1)/*SI on est arrivé à la fin */
                    {
                        console.log("c'est fait");
                        barcharSRNP[0]=(somme_at)/i;
                        barcharSRNP[1]=(somme_sej)/i;
                        barcharSRNP[2]=(somme_rep)/i;
                        barcharSRNP[3]=(somme_fin)/i;
                    }
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
  return barcharSRNP;
}
/******************************************************************************************* */
Ordonnanceur_FMSR_Preemptif_bar() {
  var barcharSRP=new Array(4);
  for(var m=0;m<barcharSRP.length;m++)
  {
      barcharSRP[m]=[];
  }
  let somme_rep=0,somme_sej=0,somme_at=0,somme_fin=0;
    let i = this.#processus.length, j = 0, t = 0, h = 0, quantum = 0, arret = false, cpt = 0, num_file = 0;
    console.log("la valeur de j est:"+j);
    console.log("la valeur de h est:"+h);
    console.log("la valeur de i est:"+i);
    while (j !== i) {
        // Vérifier les Temps d'arrivée des processus 
        while (h < this.#processus.length) {
            if (this.#processus[h].getTempsArrive() === t) {
                console.log('t = ' + t + ' : ' + 'Création du processus' + this.#processus[h].getPCB().getPID());
                this.CreerProcessus(h, 0);
                if (this.#processeur.ProcesseurActif()) {
                    if ((this.#files.getFile(0).getFile()[this.#files.getFile(0).getFile().length - 1].getPriorite() % 3) < (this.#processeur.getProcessus().getPriorite() % 3)) {
                        console.log('t = ' + t + ' : ' + 'Désactivation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                        this.DesactiverProcessus(this.#processeur.getProcessus().getPriorite() % 3);
                        this.#dispatcher.setSignal(true);
                        cpt = 0;
                        arret = true;
                    }
                }
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
            num_file = this.#files.Ordonnanceur_FMSR();
            if(num_file == 2){
                this.#files.getFile(num_file).Ordonnanceur_PRIOS() ;
            }
            if (num_file !== -1) {
                this.ActiverProcessus(num_file);
                this.#dispatcher.IncrementerNb();
                console.log('t = ' + t + ' : ' + 'Activation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                if (this.#processeur.getProcessus().getTempsExecution() === this.#processeur.getProcessus().getTempsRestant()) {
                    this.#processeur.getProcessus().setTempsReponse(this.#processeur.getProcessus().getTempsAttente());
                    console.log("Temps de reponse = " + this.#processeur.getProcessus().getTempsReponse());
                }
                if(num_file == 0){
                    quantum = scheduler8.getFiles().getFile(num_file).getQuantum();
                }else{
                    quantum = undefined ;
                }
                console.log(quantum) ;
                scheduler8.getDispatcher().setSignal(false);
            } else {
                console.log('t = ' + t + ' : ' + 'Aucun processus à activer !');
            }
        } else { //Si le processeur est actif
            if (this.#processeur.ProcesseurActif()) {
                if (this.#processeur.getProcessus().getTempsRestant() === 0) {
                    console.log('t = ' + t + ' : ' + 'Destruction du processus' + this.#processeur.getProcessus().getPCB().getPID());
                    console.log("Temps de sejour : " + this.#processeur.getProcessus().getTempsSejour());
                    console.log("Temps de Attente : " + this.#processeur.getProcessus().getTempsAttente());
                    somme_sej=somme_sej+this.#processeur.getProcessus().getTempsSejour();
                    somme_at=somme_at+this.#processeur.getProcessus().getTempsAttente();
                    somme_rep=somme_rep+this.#processeur.getProcessus().getTempsReponse();
                    somme_fin=somme_fin+((this.#processeur.getProcessus().getTempsArrive())+(this.#processeur.getProcessus().getTempsSejour()));
                    if(j==i-1)/*SI on est arrivé à la fin */
                    {
                        console.log("c'est fait");
                        barcharSRP[0]=(somme_at)/i;
                        barcharSRP[1]=(somme_sej)/i;
                        barcharSRP[2]=(somme_rep)/i;
                        barcharSRP[3]=(somme_fin)/i;
                    }
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
                    let num2 = this.#fileBloquee.getFile()[j].getPriorite() ;
                    this.ReveillerProcessus(j, this.#fileBloquee.getFile()[j].getPriorite());
                    let num1 = (this.#files.getFile(num2).getFile()[this.#files.getFile(num2).getFile().length - 1].getPriorite() % 3) ;
                    if (this.#processeur.ProcesseurActif()) {
                        if (num1 < (this.#processeur.getProcessus().getPriorite() % 3)) {
                            console.log('t = ' + t + ' : ' + 'Désactivation du processus' + this.#processeur.getProcessus().getPCB().getPID());
                            this.DesactiverProcessus(num1);
                            this.#dispatcher.setSignal(true);
                            cpt = 0;
                            arret = true;
                        }
                    }
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
    return  barcharSRP;
}
}

/*-------------------------------------------------------------------*/
function Init1(scheduler) {
    let str1 = localStorage.getItem("TA");
    let str2 = localStorage.getItem("TE");
    let str3 = localStorage.getItem("Prio");
    let str4 = localStorage.getItem("Its");
    let TAs = str1.split(' ');
    let TEs = str2.split(' ');
    let Prios = str3.split(' ');
    let Its = str4.split(' | ') ;
    let quantum = parseInt(localStorage.getItem("Quantum") , 10) ;
    scheduler.getFiles().getFile(0).setQuantum(quantum) ;
    for (let i = 0; i < TAs.length; i++) {
        let ta = parseInt(TAs[i], 10);
        let te = parseInt(TEs[i], 10);
        let prio = parseInt(Prios[i], 10);
        let pcb = new PCB(i + 1, "Pret", "Tour1");
        let str_its = Its[i].split('-') ;
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
        let process = new Processus(pcb, ta, te, prio, its);
        scheduler.AjouterProcessus(process);
    }
}

function Init2(scheduler) {
    let str1 = localStorage.getItem("TA");
    let str2 = localStorage.getItem("TE");
    let str3 = localStorage.getItem("Prio");
    let str4 = localStorage.getItem("Its");
    let str5 = localStorage.getItem("Files") ;
    let quantums = [] ;
    let tmp = str5.split(' ') ;
    for(let j=0 ; j<tmp.length ; j++){
        quantums.push(parseInt(tmp[j] , 10)) ;
    }
    scheduler.setFiles(new File_Multiniveaux(quantums.length)) ;
    console.log(quantums) ;
    for(let j=0 ; j<quantums.length ; j++){
        scheduler.getFiles().getFile(j).setQuantum(quantums[j]) ;
    }
    let TAs = str1.split(' ');
    let TEs = str2.split(' ');
    let Prios = str3.split(' ');
    let Its = str4.split(' | ') ;
    for (let i = 0; i < TAs.length; i++) {
        let ta = parseInt(TAs[i], 10);
        let te = parseInt(TEs[i], 10);
        let prio = parseInt(Prios[i], 10);
        let pcb = new PCB(i + 1, "Pret", "Tour1");
        let str_its = Its[i].split('-') ;
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
                if(its[k-1].getTempsDeclenchement() > its[k].getTempsDeclenchement()){
                    let tmp = its[k-1] ;
                    its[k-1] = its[k] ;
                    its[k] = tmp ;
                }
            }
        }
        let process = new Processus(pcb, ta, te, prio, its);
        scheduler.AjouterProcessus(process);
    }
}
function Init_FMSR(scheduler) {
  let str1 = localStorage.getItem("TA");
  let str2 = localStorage.getItem("TE");
  let str3 = localStorage.getItem("Prio");
  let str4 = localStorage.getItem("Its");
  scheduler.setFiles(new File_Multiniveaux(3));
  let quantum = parseInt(localStorage.getItem("Quantum"),10);
   scheduler.getFiles().getFile(0).setQuantum(quantum) ;
  let TAs = str1.split(' ');
  let TEs = str2.split(' ');
  let Prios = str3.split(' ');
  let Its = str4.split(' | ') ;
  for (let i = 0; i < TAs.length; i++) {
      let ta = parseInt(TAs[i], 10);
      let te = parseInt(TEs[i], 10);
      let prio = parseInt(Prios[i], 10);
      let pcb = new PCB(i + 1, "Pret", "Tour1");
      let str_its = Its[i].split('-') ;
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
              if(its[k-1].getTempsDeclenchement() > its[k].getTempsDeclenchement()){
                  let tmp = its[k-1] ;
                  its[k-1] = its[k] ;
                  its[k] = tmp ;
              }
          }
      }
      let process = new Processus(pcb, ta, te, prio, its);
      scheduler.AjouterProcessus(process);
  }
}


/* Main */

/* FIFO */
let files1 = new File_Multiniveaux(3) ;
let processeur1 = new Processeur() ;
let dispatcher1 = new Dispatcher() ;
let fileBloquee1 = new File() ;
let processus1 = [] ;
let scheduler1 = new Scheduler(processeur1 , dispatcher1 , files1 , fileBloquee1 , processus1) ;

Init1(scheduler1) ;
var barcharFF=scheduler1.Ordonnanceur_FIFO_bar();

/* SJF */
let files2 = new File_Multiniveaux(3) ;
let processeur2 = new Processeur() ;
let dispatcher2 = new Dispatcher() ;
let fileBloquee2 = new File() ;
let processus2 = [] ;
let scheduler2 = new Scheduler(processeur2 , dispatcher2 , files2 , fileBloquee2 , processus2) ;

Init1(scheduler2) ;
var barcharSJF=scheduler2.Ordonnanceur_SJF_bar();  

/* Round-Robin */
let files3 = new File_Multiniveaux(3) ;
let processeur3 = new Processeur() ;
let dispatcher3 = new Dispatcher() ;
let fileBloquee3 = new File() ;
let processus3 = [] ;
let scheduler3 = new Scheduler(processeur3 , dispatcher3 , files3 , fileBloquee3 , processus3) ;

Init1(scheduler3) ;
var barcharRO=scheduler3.Ordonnanceur_RR_bar();

/* PNP */
let files4 = new File_Multiniveaux(3) ;
let processeur4 = new Processeur() ;
let dispatcher4 = new Dispatcher() ;
let fileBloquee4 = new File() ;
let processus4 = [] ;
let scheduler4 = new Scheduler(processeur4 , dispatcher4 , files4 , fileBloquee4 , processus4) ;

Init1(scheduler4) ;
var barcharPR=scheduler4.Ordonnanceur_PRIOS_NonPreemptif_bar();

/* PP */
let files5 = new File_Multiniveaux(3) ;
let processeur5 = new Processeur() ;
let dispatcher5 = new Dispatcher() ;
let fileBloquee5 = new File() ;
let processus5 = [] ;
let scheduler5 = new Scheduler(processeur5 , dispatcher5 , files5 , fileBloquee5 , processus5) ;

Init1(scheduler5) ;
var barcharpp = scheduler5.Ordonnanceur_PRIOS_Preemptif_bar();

/* FMAR */
let files6 = new File_Multiniveaux(3) ;
let processeur6 = new Processeur() ;
let dispatcher6 = new Dispatcher() ;
let fileBloquee6 = new File() ;
let processus6 = [] ;
let scheduler6 = new Scheduler(processeur6 , dispatcher6 , files6 , fileBloquee6 , processus6) ;

Init2(scheduler6) ;
var barcharFM=scheduler6.Ordonnanceur_FMAR_bar();
/* SRTF */
let files7 = new File_Multiniveaux(3) ;
let processeur7 = new Processeur() ;
let dispatcher7 = new Dispatcher() ;
let fileBloquee7 = new File() ;
let processus7 = [] ;
let scheduler7 = new Scheduler(processeur7 , dispatcher7 , files7 , fileBloquee7 , processus7) ;

Init1(scheduler7) ;
var barcharSRTF=scheduler7.Ordonnanceur_SJF_Preemptif_bar();  
/* FMSRNP */
let files = new File_Multiniveaux(3) ;
let processeur= new Processeur() ;
let dispatcher = new Dispatcher() ;
let fileBloquee = new File() ;
let processus = [] ;
let scheduler = new Scheduler(processeur , dispatcher , files , fileBloquee , processus) ;

Init2(scheduler) ;
var barcharFMSRNP=scheduler.Ordonnanceur_FMSR_NonPreemptif_bar();
/* FMSRP */
let files8 = new File_Multiniveaux(3) ;
let processeur8= new Processeur() ;
let dispatcher8 = new Dispatcher() ;
let fileBloquee8 = new File() ;
let processus8 = [] ;
let scheduler8 = new Scheduler(processeur8 , dispatcher8 , files8 , fileBloquee8 , processus8) ;

Init_FMSR(scheduler8) ;
var barcharFMSRP=scheduler8.Ordonnanceur_FMSR_Preemptif_bar();

      
     console.log("=====================FIFO==================================")
     console.log("**********Le temps moyen d'attente est :"+barcharFF[0]);
     console.log("**********Le temps moyen de sejour  est :"+barcharFF[1]);
     console.log("**********Le temps moyen de reponse est :"+barcharFF[2]);
     console.log("**********Le temps moyen de fin d'execution est :"+barcharFF[3]);
     console.log("=====================SJF==================================")
     console.log("**********Le temps moyen d'attente est :"+barcharSJF[0]);
     console.log("**********Le temps moyen de sejour  est :"+barcharSJF[1]);
     console.log("**********Le temps moyen de reponse est :"+barcharSJF[2]);
     console.log("**********Le temps moyen de fin d'execution est :"+barcharSJF[3]);
     console.log("=====================RR==================================")
     console.log("**********Le temps moyen d'attente est :"+barcharRO[0]);
     console.log("**********Le temps moyen de sejour  est :"+barcharRO[1]);
     console.log("**********Le temps moyen de reponse est :"+barcharRO[2]);
     console.log("**********Le temps moyen de fin d'execution est :"+barcharRO[3]);
     console.log("=====================FMSRP==================================")
     console.log("**********Le temps moyen d'attente est :"+barcharFMSRP[0]);
     console.log("**********Le temps moyen de sejour  est :"+barcharFMSRP[1]);
     console.log("**********Le temps moyen de reponse est :"+barcharFMSRP[2]);
     console.log("**********Le temps moyen de fin d'execution est :"+barcharFMSRP[3]);
     console.log("=====================PRIOP==================================")
     console.log("**********Le temps moyen d'attente est :"+barcharpp[0]);
     console.log("**********Le temps moyen de sejour  est :"+barcharpp[1]);
     console.log("**********Le temps moyen de reponse est :"+barcharpp[2]);
     console.log("**********Le temps moyen de fin d'execution est :"+barcharpp[3]);


/*********************************************the bar chart ******************************************************** */
$(document).ready(function () {

	var ctx = $("#bar-chartcanvas");

	var data = {
		labels : ["PAPS", "PCTED","PCTRD", "TOURNIQUET", "PRIONP", "PRIOP","FMSRNP","FMSRP","FMAR"],
		datasets : [
			{
				label : "temps moyen d'attente",
				data : [barcharFF[0], barcharSJF[0],barcharSRTF[0], barcharRO[0], barcharPR[0],barcharpp[0],barcharFMSRNP[0],barcharFMSRP[0], barcharFM[0]],
				backgroundColor :'#3366CC' ,
			},
			{
				label : "Temps moyen de sejour",
				data : [barcharFF[1], barcharSJF[1],barcharSRTF[1], barcharRO[1], barcharPR[1],barcharpp[1],barcharFMSRNP[1],barcharFMSRP[1], barcharFM[1] ],
				backgroundColor :'#DC3912' ,
			},
			{
				label : "Temps moyen de reponse",
				data : [barcharFF[2], barcharSJF[2],barcharSRTF[2], barcharRO[2], barcharPR[2],barcharpp[2],barcharFMSRNP[2],barcharFMSRP[2], barcharFM[2] ],
				backgroundColor :'#FF9900' ,
			},
			{
				label : "Temps moyen de la fin d'execution",
				data : [barcharFF[3], barcharSJF[3],barcharSRTF[3], barcharRO[3], barcharPR[3],barcharpp[3],barcharFMSRNP[3],barcharFMSRP[3], barcharFM[3] ],
				backgroundColor : '#109618',
			},
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Comparaison des differents temps d'evaluation de performance :[ fin d'execution , sejour, attente et reponse]",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : true,
			position : "bottom"
		},
		scales : {
			yAxes : [{
				ticks : {
					min : 0
				}
			}]
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

});