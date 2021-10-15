/*
    Task: Add an event listener for 'keyup'
    1. Capture the event in a 'let' called 'searchQuery' - storing the value
    2. Make sure the captured value is lowercase
    3. Log to the console to demonstrate it works
*/

document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName("name")
   console.log(allNamesDOMCollection[1].textContent) //so this will make all the names an array and based on the index [0-7] will list them out accordingly no matter what is typed
});



/*
    Task: Get all the name elements from the DOM
    1. Create a new 'let' called 'allNamesDOMCollection'
    2. Store all the elements of class name 'name' in 'allNamesDOMCollection'
    3. Log to the console 'allNamesDOMCollection' to demonstrate that an HTMLCollection exists
    4. Log out the first index of allNamesDOMCollection and add 'textContent' to view a name
*/

// My notes -- there is another method/element called .getElementsByClassName that the instructor mentioned.

//MY SAD SORRY ATTEMPT =>

// let allNamesDOMCollection = document.getElementsByClassName("name")


// for (let i = 0; i < allNamesDOMCollection.length; i++) {
//     let allNames = allNamesDOMCollection[i];
//     console.log(allNames)
// }


// console.log(allNamesDOMCollection)
// console.log(allNames)