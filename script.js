function ouvrirLienUnique() {
    window.location.href = 'messagerie.html';
}
// Fonction pour basculer de l'écran cadeau à la surprise
        function ouvrirCadeau() {
            const audio = document.getElementById('mon-audio');
            
            // Force le chargement de la source audio avant la lecture
            audio.load(); 
            
            // Lancement de la musique
            audio.play().then(() => {
                console.log("Musique lancée avec succès !");
            }).catch(error => {
                console.log("Erreur lors de la lecture audio :", error);
            });

            document.getElementById('gift-screen').style.display = 'none';
            document.getElementById('surprise-screen').style.display = 'block';
        }
 // 2. FONCTION POUR REVENIR EN ARRIÈRE (Celle qui manquait !)
        function fermerSurprise() {
            const audio = document.getElementById('mon-audio');
            if (audio) {
                audio.pause();
                audio.currentTime = 0; // Remet la musique au début
            }

            document.getElementById('gift-screen').style.display = 'flex';
            document.getElementById('surprise-screen').style.display = 'none';
            document.getElementById('global-back-btn').style.display = 'none'; // Cache le bouton retour
        }