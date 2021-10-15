/*
    Task: Add an event listener for 'keyup'
    1. Capture the event in a 'let' called 'searchQuery' - storing the value
    2. Make sure the captured value is lowercase
    3. Log to the console to demonstrate it works
*/

document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    console.log(searchQuery)
});

/*
    Task: Get all the name elements from the DOM
    1. Create a new 'let' called 'allNamesDOMCollection'
    2. Store all the elements of class name 'name' in 'allNamesDOMCollection'
    3. Log to the console 'allNamesDOMCollection' to demonstrate that an HTMLCollection exists
    4. Log out the first index of allNamesDOMCollection and add 'textContent' to view a name
*/

// My notes -- there is another method/element called .getElementsByClassName that the instructor mentioned.

let allNamesDOMCollection = document.getElementsByClassName("name")


for (let i = 0; i < allNamesDOMCollection.length; i++) {
    let name = allNamesDOMCollection[i]
    console.log(name)
}


console.log(allNamesDOMCollection)
console.log(name)