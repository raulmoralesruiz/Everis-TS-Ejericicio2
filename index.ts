// En este ejercicio debéis crear una clase "Person" con las propiedades privadas "name" y "age" y la propiedad pública "saySomething". Añadid también el método "myNameIs" para que saque por consola el valor de la propidad "name".
//En su constructor, debéis dar un valor a cada propiedad (sin contar "myNameIs") teniendo claro que sus tipos son cadena de texto, número y función que recibe cadena y no devuelve nada, respectivamente.
// Luego, cread una clase "Developer" que herede de "Person" y que tenga la propiedad pública "bestLanguage". El tipo de la propiedad "bestLanguage" es función que recibe cadena y no devuelve nada.
// En el constructor de "Developer", debéis añadir los parámetros al constructor de la clase padre (super) y setear la propiedad "bestLanguage" sabiendo que es de tipo función que recibe una cadena.
// Cuando acabéis, debéis descomentar las siguientes líneas de código y colocarlas despúes de todo lo que añadáis:

// Se crea clase Persona
class Person {

  // Atributos
  private name: string;
  private age: number;
  public saySomething: (string) => void;

  // Constructor
  constructor(
    newName: string,
    newAge: number,
    saySomethingFunc: (string) => void) {
    this.name = newName;
    this.age = newAge;
    this.saySomething = saySomethingFunc;
  }

  // Se define función myNameIs
  myNameIs(): void {
    console.log(this.name);
  }
}

// Se crea clase Developer, heredando de la clase Persona
class Developer extends Person {
  public bestLanguage: (string) => void;

  // Constructor
  constructor(
    // Atributos
    name: string,
    age: number,
    saySomethingFunc: (string) => void,
    bestLanguageFunc: (string) => void) {
    super(name, age, saySomethingFunc);
    this.bestLanguage = bestLanguageFunc;
  }
}

const developer = new Developer(
  "pedro",
  35,
  something => console.log(something),
  language => console.log(language + " is the best language")
);

developer.myNameIs();
developer.saySomething("algo");
developer.bestLanguage("Javascript");
