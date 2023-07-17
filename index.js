// const users = [
//     { name: "John", age: 25, occupation: "gardener" },
//     { name: "Lenny", age: 51, occupation: "programmer" },
//     { name: "Andrew", age: 43, occupation: "teacher" },
//     { name: "Peter", age: 81, occupation: "teacher" },
//     { name: "Anna", age: 43, occupation: "teacher" },
//     { name: "Albert", age: 76, occupation: "programmer" },
//     { name: "Adam", age: 47, occupation: "teacher" },
//     { name: "Robert", age: 72, occupation: "driver" },
// ];

function main() {
    const rootElement = document.getElementById("root");
    const heading = document.createElement("h1");
    heading.textContent = "FREELANCERS";
    rootElement.appendChild(heading);
}
const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];
    const listContainer = document.createElement("ul");
users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`;
    listContainer.appendChild(listItem);
});


main();





// function main() {
//     const root = document.getElementById("root");
//     const title = document.createElement("h1");
//     title.setAttribute('Freelancers');
//     for(let i = 0; i<= root.length -1; i++){
//         const li = document.createElement('li');

//         li.innerHTML = root[i];
//         ul.appendChild(li);
//     }
// }






































//console.dir(document);

// function main() {
//     const root = document.getElementById("root");
//     const name = document.createElement("h1");
//     name.innerHTML = "FREELANCERS";
//     root.appendChild(name);
//     return this.root + this.name;
//     }
//     users.main.call(root);



//call the main function
//main();













//function main() {
    //     const root = document.getElementById("root");
    //     const name = document.createElement("h1");
    //     name.innerHTML = "FREELANCERS";
    //     root.appendChild(name);
    //     return this.root + this.name;
    //     }
    //     users.main.call(root);














//function users()  {
    //     const occupation = document.createElement("occupation")
    //     const p = document.createElement("p")
    //     const title = document.createElement('h1')
    //     const root = docu