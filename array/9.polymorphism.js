class Animal{
    constructor(name){
        this.name=name;
    }
    makeSound(){
        console.log("animal spound")
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    makeSound(){
        console.log("dog barks")
    }
}

const a1= new Animal("Suhel")
const a2=new Dog("shaik")

console.log(a1)
console.log(a2)
a1.makeSound()
a2.makeSound()