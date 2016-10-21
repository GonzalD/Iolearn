# Iolearn

  Apprentissage Ionic dans le cadre d'un développement pour un appareil Android.
  

## Installation de l'environnement de travail

  - Telecharger et installer [Ionic](http://ionicframework.com/)
  - Telecharger et installer l'émulateur Android [Genymotion](https://www.genymotion.com/) (l'édition personnelle nécessite la création d'un compte).
  - Création d'un projet, en ligne de commande : `ionic start "nomduprojet" blank`. Se placer dans le dossier créé.
  - Activer la plateforme Android : `ionic platform add android`.

## Building et Test du projet

  - A la racine du projet, build pour Android avec `ionic build android`. Cela va créer un fichier apk dans le dossier `ionic/[VotreProjet]/platforms/android/build/outputs/apk/` .
  - Ouvrir un terminal virtuel android sur Genymotion.
  - L'application Ionic peut être testée sur le terminal virtuel en tapant dans la CLI à la racine du projet : `ionic run android` (le terminal virtuel doit être ouvert) ou alors en glissant le fichier apk , créé lors du build, dans la fenêtre du terminal virtuel android ouvert.









## Ressources

http://ionicframework.com/docs/guide/
