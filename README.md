# Scrimba JavaScript Challenges: 

Welcome to my Scrimba "Code-Along" JavaScript Challenges Page! I created this repository to help my future self with reusable **code blocks** which I see as basically code snippets so I can use them as templates in the future for my own personal projects! You'll see a lot of my notes and even more of my errors throughout this repository. I still class myself as a "beginner" though I am gaining more and more confidence as time goes on! 


Happy Coding! 😃😃😃😃😃😃😃



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


### Carousel Challenge:
#### index.JS =>

```
const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;


document.getElementById("carousel-button-next").addEventListener('click', moveToNextSlide);
document.getElementById("carousel-button-prev").addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
    
}


function moveToNextSlide() {
    hideAllSlides()

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1; 
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add("carousel-item-visible");
}

```

## My Finished Carousel Project: 
https://user-images.githubusercontent.com/87204074/137555960-c4704bb2-2d65-41d8-9015-9ce8f5bd515d.mov

[carousel-snippet.mov.zip](https://github.com/beesanderson/scrimba-javascript-challenges/files/7356101/carousel-snippet.mov.zip)




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
