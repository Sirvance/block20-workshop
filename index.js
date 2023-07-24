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





function main() {
    // Grab the "root" element
    const rootElement = document.getElementById("root");
  
    // Add an h1 element with text "FREELANCERS"
    const h1Element = document.createElement("h1");
    h1Element.textContent = "FREELANCERS";
    rootElement.appendChild(h1Element);
  
    // Create an unordered list element
    const ulElement = document.createElement("ul");
  
    // Loop through the users array and create li elements
    for (const user of users) {
      const liElement = document.createElement("li");
      liElement.textContent = `${user.name} (${user.age}), ${user.occupation}`;
      ulElement.appendChild(liElement);
    }
  
    // Append the unordered list to the root element
    rootElement.appendChild(ulElement);
  }
  
  // Call the main function after the DOM is loaded
  document.addEventListener("DOMContentLoaded", main);
















































// function main() {
//     const rootElement = document.getElementById("root");
//     const heading = document.createElement("h1");
//     heading.textContent = "FREELANCERS";
//     rootElement.appendChild(heading);
// }
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
//     const listContainer = document.createElement("ul");
// users.forEach((user) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`;
//     listContainer.appendChild(listItem);
// });


//main();





