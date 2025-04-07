// $PluginCompiler TEW_Menus.js
// $StartCompilation
/**
 * ELOZER
 * @class Person
 */
var Person = /** @class */ (function () {
    // Constructeur
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // Méthode pour obtenir le nom complet
    /**
     *
     * @returns yolo
     */
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    // Méthode pour vérifier si la personne est majeure
    Person.prototype.isAdult = function () {
        return this.age >= 18;
    };
    // Méthode pour présenter la personne
    Person.prototype.introduce = function () {
        console.log("Bonjour, je suis ".concat(this.getFullName(), " et j'ai ").concat(this.age, " ans."));
    };
    return Person;
}());
// Exemple d'utilisation
var person = new Person("Jean", "Dupont", 25);
console.log(person.getFullName()); // Affiche : Jean Dupont
console.log(person.isAdult()); // Affiche : true
person.introduce(); // Affiche : Bonjour, je suis Jean Dupont et j'ai 25 ans.
