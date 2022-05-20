// Question1
const favFoods = (person) => {
    for (let key in person){
        // console.log(key)
        if ((person[key]) instanceof Array == false){
            console.log(person[key])
        }else if ((person[key]) instanceof Array == true){
            if((person[key]) instanceof Array == true){
                let foods = person[key].forEach((name_)=>console.log(name_))
            }
            else if ((person[key]) instanceof Array == false){
                newDic = (person[key])
                for (key in newDic){
                    console.log(newDic[key])
                }

            }
        }
    }
}


let person1 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(favFoods(person1))


//Qestion2

function MyPerson(firstName, age){
    this.firstName = firstName;
    this.age = age;
    

    this.addYear=function(){
        return this.age+=1;
    }

    this.printInfo = () =>{
        console.log(`My name is ${this.firstName} and I am ${this.age} years old`)
        
    }
}


let person2 = new MyPerson('John', 32)

let person3 = new MyPerson('Maria',38)

console.log(person2.addYear()) 
console.log(person2.addYear()) 
console.log(person2.age) 
console.log(person3.age) 

console.log(person2.printInfo())
console.log(person3.printInfo())

// Question3

const lenghtFun = (string) =>{
    return new Promise(
        (resolve, reject)=>{
            if(string.length()> 10){
                resolve(console.log('Big Word'))
            }else{
                reject(console.log('Small word'))
            }
        }
    )
}

console.log('hello')




