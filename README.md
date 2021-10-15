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
    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) { //oh I realize what I did I think I still had i++ instead of counter++ out of habit oops haha
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase()
        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[counter].textContent.style.display = "block";
        } else {
            allNamesDOMCollection[counter].textContent.style.display = "none";
        }
    }
});

```

### Simple Event Listener Example: 
```
document.getElementById("usernameInput").addEventListener("keyup", function(event) {
    let username = event.target.value.toLowerCase;
    console.log(username)
})

```