# ProjectCOO

Vous aimez DnD ? Vous aimez le TypeScript ? Alors vous allez aimer notre projet

## Prérequis
- Node v22.x ou plus
- NPM v10.8.1 ou plus

Cette version de Node est nécessaire au minimum, car nous utilisons le paramètre `env-file-if-exists` disponible qu'à partir des version 22.x

## Installation

Après le clonage du repo, il suffit d'installer les dépendances.

```bash
git clone https://github.com/edouardhoest/projectcoo.git
cd projectcoo
npm install
```

## Utilisation

```bash
npm start
```

Par défaut, le port de l'API est 8080. Il peut être changé avec l'aide d'un fichier **.env**, avec la valeur suivante :

```
SERVER_PORT=80
```

De cette façon, l'API écoutera sur le port 80.

### Swagger

Pour obtenir les informations de création d'un personnage, il faut utiliser la route **/character/character-creation-information** qui vous retournera le JSON suivant
```json
{
    "_job": [
        "Barbarian",
        "Bard",
        "Cleric",
        "Druid",
        "Fighter",
        "Monk",
        "Paladin",
        "Ranger",
        "Rogue",
        "Sorcerer",
        "Warlock",
        "Wizard"
    ],
    "_specy": [
        "Dragonborn",
        "Dwarf - hill-dwarf",
        "Elf - high-elf",
        "Gnome - rock-gnome",
        "Half-Elf",
        "Half-Orc",
        "Halfling - lightfoot-halfling",
        "Human",
        "Tiefling"
    ],
    "_name": "YOUR NAME",
    "_picture": "YOUR PICTURE URL",
    "_alignment": [
        "Chaotic Evil",
        "Chaotic Good",
        "Chaotic Neutral",
        "Lawful Evil",
        "Lawful Good",
        "Lawful Neutral",
        "Neutral",
        "Neutral Evil",
        "Neutral Good"
    ]
}
```
Afin de créer votre personnage, il faut modifier le **\_name** ainsi que **\_picture** mais également supprimer les lignes non souhaité dans **\_specy** et **\_jobs**, jusqu'à ce qu'il reste une ligne dans chaque partie, comme montrez ci-dessous

```json
{
    "_job": "barbarian",
    "_specy": "dragonborn",
    "_name": "Dovahkiin",
    "_picture": "https://vignette3.wikia.nocookie.net/p__/images/c/ca/Dovahkiin.png/revision/latest?cb=20160916154950&path-prefix=protagonist",
    "_alignment": "Chaotic Good"
}
```

Vous pouvez également choisir si vous souhaitez que votre personnage possède on non une sous classe, comme montré ci-dessous:
```json
{
    "_job": "barbarian",
    "_specy": "Elf - high-elf",
    "_name": "Dovahkiin",
    "_picture": "https://vignette3.wikia.nocookie.net/p__/images/c/ca/Dovahkiin.png/revision/latest?cb=20160916154950&path-prefix=protagonist",
    "_alignment": "Chaotic Good"
}
```

```json
{
    "_job": "barbarian",
    "_specy": "Elf",
    "_name": "Dovahkiin",
    "_picture": "https://vignette3.wikia.nocookie.net/p__/images/c/ca/Dovahkiin.png/revision/latest?cb=20160916154950&path-prefix=protagonist",
    "_alignment": "Chaotic Good"
}
```

Une fois que vous avez créer votre personnage au travers du JSON, vous l'envoyer en **POST** sur la route **/character/save**.

```bash
curl --header "Content-Type: application/json" --request POST --data '$(cat my_character.json)' localhost:8080/character/save
```

L'exemple ci-dessus montre l'utilisation de la commande cURL pour faire une requête POST avec les données de notre personnage se trouvant dans le fichier **my_character.json**.

## Auteurs

- Edouard Hoest
- Michel Carrion
- Korentin Kolazek
- Hugo Assoignon

## Le diagramme est t-il SOLID ? Argumentez

S(Single responsability) :  Chacune de nos classes ne font qu'une seule action.

O(Open/Close) : Notre code est fermé à la modification mais ouvert a l'amélioration/ajout.

L(Liscov substitution) : La seule classe pouvant poser problème sont les classes users et ses classes parent et enfant, qui ne possèdent pas d'attribut ou de methode spécifique.

I(Interface segregation) : Toutes nos classes pouvant posséder une interface en possède une.

D(Dependency inversion) : Nous ne sommes pas lié à une dépendance, et elles sont facilement remplaçable tout en respectant les autres lettres.
