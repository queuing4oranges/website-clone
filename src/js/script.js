const tags = [
    {
        id: "1", 
        title: "Comic",
        pic: "./images/brain.png",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "2", 
        title: "Funny",
        pic: "./images/autumn.jpg",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "3", 
        title: "Otters",
        pic: "./images/couple.jpg",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "4", 
        title: "Space",
        pic: "./images/fashion.jpg",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "5", 
        title: "Dog",
        pic: "./images/onion.jpg",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "6", 
        title: "Staff Picks",
        pic: "./images/autumn.jpg",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "7", 
        title: "Rick And Morty",
        pic: "./images/brain.png",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "8", 
        title: "Unmuted",
        pic: "./images/couple.jpg",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "9", 
        title: "Cat",
        pic: "./images/fashion.jpg",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "10", 
        title: "Science And Tech",
        pic: "./images/onion.jpg",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "11", 
        title: "Awesome",
        pic: "./images/autumn.jpg",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "12", 
        title: "Gaming",
        pic: "./images/brain.png",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "13", 
        title: "Wholesome",
        pic: "./images/couple.jpg",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "14", 
        title: "Movies and TV",
        pic: "./images/fashion.jpg",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "15", 
        title: "Current Events",
        pic: "./images/onion.jpg",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "16", 
        title: "Crab",
        pic: "./images/autumn.jpg",
        posts: "2324", 
        color: "#c2e28"
    },
    {
        id: "17", 
        title: "Uplifting",
        pic: "./images/brain.png",
        posts: "2324", 
        color: "#c2e28"
    },


]

tags.forEach((tag) => {


//upper half of single "tag" card
let contTop = document.querySelector(".tags__cont-bottom");
let topTag = document.createElement("div");
topTag.classList.add("top__tag");
contTop.appendChild(topTag);

let topElement = document.createElement("img");
topElement.setAttribute("src", tag.pic);
topElement.classList.add("tag-pic");
contTop.appendChild(topElement);

//lower half of single "tag" card
let contBottom = document.querySelector(".tags__cont-bottom");
let bottomTag = document.createElement("div");
bottomTag.classList.add("bottom__tag");
contBottom.appendChild(bottomTag);

let bottomElement = document.createElement("h3");
bottomElement.textContent=tag.title;
bottomTag.appendChild(bottomElement);

bottomElement = document.createElement("p");
bottomElement.textContent=tag.posts;
bottomTag.appendChild(bottomElement);

})





