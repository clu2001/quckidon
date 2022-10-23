class Character {

    name: string; 
    age: string; 
    gender: string; 
    features: string; 
    bio: string; 

    constructor (
        name: string, 
        age: string, 
        gender: string, 
        features: string, 
        bio: string, 
    ) {
        this.name = name; 
        this.age = age; 
        this.gender = gender; 
        this.features = features; 
        this.bio = bio; 
    };

}



// convert json information to character object 
export function initalizeChar(name, age, gender, features, bio) {
    return new Character(name, age, gender, features, bio); 
}