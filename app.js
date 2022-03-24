/******************************************/
//              Consigne                  //
/******************************************/

/**
 * Etape
 *
 * 1. Enregistrer les bonnes reponses dans un tableau
 * 2. Créer 1 tableaux vide pour avoir les réponses de l'utilisateur
 * 3. Faire un querySelector du formulaire
 * 4. Ecouter l'evenement "Submit" du *formulaire* (n'oubliez pas de faire attention au refresh de la page avec 'event')
 * doc : https://developer.mozilla.org/fr/docs/Web/API/HTMLFormElement/submit_event_
 *
 * Suite
 *
 * 1. Faire une boucle for sur la longeur du tableau des réponses juste.
 * 2. *Push* les informations récuperer dans le tableau RESPONSE_USER.
 * 3. Fonction ' checkIsTrue' qui prend en paramètre le tableau de RESPONSE_USER
 *
 * La fonction 'checkIsTrue' va comparer dans une boucle for si les reponses sont juste ou fausse.
 * Si oui, push 'true' sinon push 'false
 */

/********************** Exercice **********************/

//                       R1,  R2,  R3
const bonnesReponses = ["a", "b", "c"];
let reponseUtilisateur = [];
let compteurDeBonneReponse = 0;

const formulaire = document.querySelector(".form-quiz");
const titre = document.querySelector(".resultats h2");
const aide = document.querySelector(".aide");
const note = document.querySelector(".note");

formulaire.addEventListener("submit", (evenement) => {
	/**
	 * e      => evenement
	 * event  => evenement
	 */
	evenement.preventDefault();

	for (let i = 1; i <= bonnesReponses.length; i++) {
		reponseUtilisateur.push(
			document.querySelector(`input[name="q${i}"]:checked`).value
		);
	}

	/**
	 * Je dois checker si les réponses envoyé sont juste ou fausse
	 */
	//console.log(reponseUtilisateur);

	checkReponseUtilisateur(reponseUtilisateur);
	/**
	 * Quoi qu'il arrive, mon tableau se vide
	 */
	reponseUtilisateur = [];
});

function checkReponseUtilisateur(tableauDeReponse) {
	for (let i = 0; i < tableauDeReponse.length; i++) {
		/**
		 *
		 * tableauDeReponse = ["a", "d"]
		 *
		 * bonnesReponses = ["a", "b"]
		 *
		 */
		if (tableauDeReponse[i] === bonnesReponses[i]) {
			compteurDeBonneReponse++;
		}
	}

	/**
	 * J'utilise la fonction render pour afficher dans mon HTML
	 */
	//console.log(compteurDeBonneReponse);
	afficheHTML(compteurDeBonneReponse);

	compteurDeBonneReponse = 0;
}

function afficheHTML(compteur) {
	if (compteur === bonnesReponses.length) {
		/** Bien joué */
		titre.innerText = "🚀 Tu as tout bon !!!!";
		aide.innerHTML = "";
		note.innerHTML = `${compteur}/${bonnesReponses.length}`;
	} else if (compteur === 0) {
		/** Tu as tout faux */
		titre.innerText = "😭 Tu as rien compris !!!!";
		aide.innerHTML = "C'est de ma faute, regarde la doc'";
		note.innerHTML = `${compteur}/${bonnesReponses.length}`;
	} else {
		/** Tu as x bonnes réponses */
		titre.innerHTML = "<strong>Tu y es presque !</strong>";
		aide.innerHTML = "Retente une autre réponse !   ";
		note.innerHTML = `${compteur}/${bonnesReponses.length}`;
	}
}
