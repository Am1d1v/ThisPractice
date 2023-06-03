"use strict"


/*

const user = {
    name: "Dima",
    birthYear: 1999,
    getAge: function(){
        console.log(2023 - this.birthYear);
    }
}

user.getAge();

*/

//console.log(this);

/*

const getYear = function(birthYear){
    console.log(2023 - birthYear);
    console.log(this);
}

getYear(2000);

*/

/*

const user = {
    birthYear: 1999,
    getAge: function(){
        //console.log(this);
        console.log(2023 - this.birthYear);
    }
}

//user.getAge();

const anotherUser = {
    birthYear: 2000
}

anotherUser.getAge = user.getAge;
anotherUser.getAge();

const f = user.getAge;
//console.log(f);

*/

const user = {
    name: "Dima",
    birthYear: 1999,
    getAge: function(){
        console.log(2023 - this.birthYear);
    },
    sayHello: () => {
        console.log(`Hello, I am ${this.name}`)
    }
}

user.getAge();
user.sayHello();
//console.log(this.name);