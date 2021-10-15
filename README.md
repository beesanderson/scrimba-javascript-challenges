# Scrimba JavaScript Challenges: 

## Challenge Code Blocks: 

### Building a Modal: 
#### index.JS =>

```
// Open Modal------ 

document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
});


// Close Modal------

document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
});

```

#### styles.CSS =>

```
html, body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

#modal {
  background: white;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  height: 200px;
  position: relative;
  top: 30%;
}

#overlay {
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background: black; */
  background: rgba(0, 0, 0, .3);
}

#open-modal,
#close-modal {
  background: royalblue;
  cursor: pointer;
  padding: 15px;
  font-size: 25px;
  color: white;
}

```


### Building a searchbar:  
#### index.JS =>

```
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName("name")
    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase()
        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[counter].textContent.style.display = "block";
        } else {
            allNamesDOMCollection[counter].textContent.style.display = "none";
        }
    }
});

```


# EXTRA Code Block Examples: 

### Simple Event Listener Example: 
```
document.getElementById("usernameInput").addEventListener("keyup", function(event) {
    let username = event.target.value.toLowerCase;
    console.log(username)
})

```



## "For/Of" Loop 
### -- **Syntactic Sugar** -- 
##### Cleaner Code 

## Example of "For/Of" Loop

#### Standard FOR Loop Example: 
```
const names = ['Karl', 'John', 'Steve'];
const people = [{ name: 'Karl', location: 'UK' }, { name: 'Steve', location: 'US' }];

// looping using 'for' loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
```
#### FOR OF Loop Example: 
``` 
// looping using 'for of' loop
for (let name of names) {
    console.log(name);
}
```
- You can also use const instead of let as we don't expect it to be mutating in any way.

#### How to Access an Object with Standard FOR Loop: 
```
// looping through an array of objects using 'for' loop
for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
    console.log(people[i].location);
}

```

#### How to Access an Object with FOR OF Loop:
```
for (const person of people) {
    console.log(person.name);
    console.log(person.location)
}

```
- You are basically saying we know you have an array and for each iteration we are just going to store what ever you call this particular variable (in this case person) then access the name in this case. 