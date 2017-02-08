# Iolearn
Le but de ce projet est d'accompagner l'apprentissage Ionic dans le cadre d'un développement pour un appareil Android.
  

## Installation de l'environnement de travail

  - Git doit être installé [Git](https://git-scm.com/book/fr/v1/D%C3%A9marrage-rapide-Installation-de-Git)
  - Installer node.js avec [NVM](https://github.com/creationix/nvm) (required). 
  - Télécharger et installer [Ionic](http://ionicframework.com/) (required) `sudo npm install -g cordova ionic`.     
  - Installer l'environnement '**Android** et/ou **iOS** (required).
  - Telecharger et installer l'émulateur Android [Genymotion](www://https.genymotion.com/) (l'édition personnelle nécessite la création d'un compte).

## Usage

``` bash
 git clone https://github.com/GonzalD/Iolearn.git
 cd Iolearn
 npm install    
``` 
Pour activer la plateforme Android : `ionic platform add android`. 

### Android
Suivre la marche à suivre suivante après avoir ouvert l'émulateur (dans notre exemple Genymotion), 
``` bash
 ionic build
 ionic run android
 
 # pour voir le log spécifique à javascript et Ionic
 adb logcat CordovaLog:D *:S
``` 
> Notes
- Le build Android va créer un fichier apk dans le dossier `ionic/[VotreProjet]/platforms/android/build/outputs/apk/`
- L'application Ionic peut être testée sur le terminal virtuel en tapant à la racine du projet : `ionic run android` (le terminal virtuel doit être ouvert) ou alors en glissant le fichier apk , créé lors du build, dans la fenêtre du terminal virtuel android ouvert.

## Test du projet
> TODO, comment courrir les test unitaires de Ionic?


# Bonnes pratiques
 - Implémenter correctement les services angularjs (Controller, Service, Directive)
 - Proposer une arborescence de fichiers qui soit pratique pour le développement et performante pour le déploiement
 - utiliser les librairies externes avec bower



## Ressources

1. http://ionicframework.com/docs/guide/
2. https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
3. http://mcgivery.com/100-ionic-framework-resources/
