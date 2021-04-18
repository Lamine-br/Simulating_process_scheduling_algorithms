// Classe Processeur 
class Processeur {
    // Déclaration des champs privés
    #nom 
    #numProcessus 
    #quantum
    /* Constructeur */
    constructor(nom , numProcessus , quantum){
        this.#nom = nom ;
        this.#numProcessus = numProcessus ;
        this.#quantum = quantum ;
    }

    /* Setters */
    setNom = (nom) => {
        this.#nom = nom ;
    }
    setNumProcessus = (num) => {
        this.#numProcessus = num ;
    }
    setQuantum = (quantum) => {
        this.#quantum = quantum ;
    }

    /* Getters */
    getNom = nom => {
        return this.#nom ;
    }
    getNumProcessus = num => {
        return this.#numProcessus ;
    }
    getQuantum = q => {
        return this.#quantum ;
    }
}

// Exemple de déclaration et affichage d'un objet de classe processeur
let a = new Processeur("proc", 1 , 0) ;
//console.log(a) ; // pour afficher l'objet a 

//Classe Processus 
class Processus {
    #num
    #Texecution 
    #Tsejour
    #Tattente
    #Tblocage
    #Etat
    /* Constructeur */
    constructor(num , Texecution , Tsejour , Tattente , Tblocage , Etat){
        this.#num = num ;
        this.#Texecution = Texecution ;
        this.#Tsejour = Tsejour ;
        this.#Tattente = Tattente ;
        this.#Tblocage = Tblocage ;
        this.#Etat = Etat ;
    }

    /* Setters */
    setNum = (num) => {
        this.#num = num ;
    }
    setTexecution = (T) => {
        this.#Texecution = T ;
    }
    setTsejour = (T) => {
        this.#Tsejour = T ;
    }
    setTattente = (T) => {
        this.#Tattente = T ;
    }
    setTblocage = (T) => {
        this.#Tblocage = T ;
    }
    setEtat = (e) => {
        this.#Etat = e ;
    }

    /* Getters */
    getNum = num => {
        return this.#num ;
    }
    getTexecution = T => {
        return this.#Texecution ;
    }
    getTsejour = T => {
        return this.#Tsejour ;
    }
    getTattente = T => {
        return this.#Tattente ;
    }
    getTblocage = T => {
        return this.#Tblocage ;
    }
    getEtat = T => {
        return this.#Etat ;
    }
}

// Exemple de déclarartion et affichage d'un objet de classe Processus
let b = new Processus(23 , '25s' , '27s' , '12s' , '5s' , 'actif') ;
// console.log(b) ; // pour afficher l'objet b 
console.log(b.getEtat()) ;
// b.#num = 3 ; // Impossible car num est un champ privé non accessible de l'exterieur
console.log(b.getNum()) ;