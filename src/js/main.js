// #1 Créez une variable contenant un tableau du nom de tabExo avec 5 valeurs, une de type string, une variable, deux de type int et une de type booléenne
// Affichez le contenu du tableau dans un console.log()
let variable;
let tabExo = ["bonjour", variable, 56, 42, true];
console.log(tabExo);

// #2 Faite un console.log() qui renvoi la longueur du tableau dans l'exercice précedent (tabExo)
console.log(tabExo.length);

// #3 Trouvez une méthode de l'objet Array qui permet de retirer le dernier élément du tableau tabExo et afficher le tableau apres modification avec l'aide d'un console.log(), il devrait vous montrer 4 éléments
tabExo.pop();
console.log(tabExo);

// #4 Trouvez une méthode de l'objet Array qui permet de retirer le premier élément du tableau tabExo et afficher le tableau apres modification avec l'aide d'un console.log(), il devrait vous montrer 3 éléments
tabExo.shift();
console.log(tabExo);

// #5 Trouvez une méthode de l'objet Array qui permet de rajouter des éléménts au tableau tabExo, ajoutez y 2 éléménts et afficher le tableau apres modification avec l'aide d'un console.log(), il devrait vous montrez 5 éléments
tabExo.push("Bonjour", true);
console.log(tabExo);

// #6 Trouvez une méthode qui rajoute un ou des éléménts au début du tableau tabExo, ajoutez y 3 éléménts et afficher le tableau apres modification avec l'aide d'un console.log(), il devrait vous montrez 8 éléments
tabExo.unshift("agim", "coroli", "gimzredfield");
console.log(tabExo);

// #7 Trouvez une méthode qui permet de retourner le tableau et affichez le via un console.log()
tabExo.reverse();
console.log(tabExo);

// #8 Fanny est très méticuleux
// Créer lui une boite ou il pourra y stocker des choses de différens type
let tab2 = [];

// Fanny mettra son premier objet normalement dans la boite
tab2.push("obj1");
tab2.push("obj2");

// Fanny observe sa boite avec une alert.
alert(tab2);

// Pour son troisieme objet il aimerait le mettre avant les autres
tab2.unshift("obj3");

// Fanny observe sa boite avec une alert
alert(tab2);

// Il attrape 3 objets et décidera de les mettre tout au fond de la boite
tab2.push("obj4" , "obj5", "obj6");

// Je pense qu'une alert serait la bienvenue pour aider
alert(tab2);

// Fanny à savoir ce que contient sa boite car il est un peu perdu entre toutes ces choses.
console.log(tab2);

// N'étant pas satisfait de son rangement il décide de retirer les trois premiers objets
tab2.splice(0, 3);
console.log(tab2);

// D'en rajouter un
tab2.push("obj7");
console.log(tab2);

// Fanny à un petit problème il ne sait pas compter je me demande comment on pourrait afficher le nombre d'objet contenu par sa boite dans une alert...
alert(tab2.length);

// Trouvant que c'est un peu trop chargé il décide de retirer les 2 derniers objets de sa boîte
tab2.splice(tab2.length-2);

// Et pourquoi pas retirer les 2 premier...
tab2.splice(0, 2);

// Fanny observe sa boite via une alert 
alert(tab2);

// Desespéré de voir qu'il à fini par tout y retirer Fanny range sa boite et s'en va.
