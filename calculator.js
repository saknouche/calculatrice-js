//les fonctions
function Addition(nombreA, nombreB){
    return nombreA + nombreB;  
}
function Multiplication(nombreA, nombreB){
    return nombreA * nombreB;
}
function Soustraction(nombreA, nombreB){
    return nombreA - nombreB;
}
function Division(nombreA, nombreB){
    if(nombreB == 0){
        throw new Error("Impossible de diviser par 0 !");
    }
    return nombreA / nombreB;
}
//script
do {
    do {
        var choix = Number(prompt("Que souhaitez-vous faire?\n\n 1- Addition\n 2- Multiplication\n 3- Soustraction\n 4- Division\n"));
        
    } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);
    
    //demander deux nombres
    do {
        var premierNombre = Number(prompt("Entrez le premier nombre"));
        var deuxiemeNombre = Number(prompt("Entrez le deuxième nombre"));
    } while (isNaN(premierNombre) || isNaN(deuxiemeNombre));
    
    //Switch
    //try catch pour afficher l'erreur
    try {
        switch(choix){
            case 1:
            var resultat = Addition(premierNombre, deuxiemeNombre);
            break;
        
            case 2:
                var resultat = Multiplication(premierNombre, deuxiemeNombre);
            break;
        
            case 3:
                var resultat = Soustraction(premierNombre, deuxiemeNombre);
            break;
        
            case 4:
                var resultat = Division(premierNombre, deuxiemeNombre );
            break; 
        
            default:
                throw new Error("Une erreur est survenue!");
        }
        alert("Voici le résultat: " + resultat); 
    } catch (error) {
            alert(error);
    }

    var restart = confirm("Voulez-vous refaire le calcul?");
    
} while (restart);
