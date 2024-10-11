# TypeScript + NodeJS Starter

Votre diagramme est t-il SOLID ? Argumentez

S(Single responsability) :  Chacune de nos classes ne font qu'une seule action 
O(Open/Close) : Notre code est fermé à la modification mais ouvert a l'amélioration/ajout
L(Liscov substitution) : La seule classe pouvant poser problème sont 
                         les classes users et ses classes parent et enfant, qui ne possèdent pas 
                         d'attribut ou de methode spécifique
I(Interface segregation) : Toutes nos classes pouvant posséder une interface en possède une.
D(Dependency inversion) : Nous n'avons pas de librairie externe autre 
                          que express qui nous permet de faire les routes
