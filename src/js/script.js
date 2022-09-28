const tags = [
    {
        id: "1", 
        title: "Comic",
        pic: "./images/autumn.jpg",
        posts: "2324348 Posts", 
        color: "#633875"
    },
    {
        id: "2", 
        title: "Funny",
        pic: "./images/papercat.png",
        posts: "23243234 Posts", 
        color: "#008261"
    },
    {
        id: "3", 
        title: "Otters",
        pic: "./images/couple.jpg",
        posts: "2324090 Posts", 
        color: "#263BA7"
    },
    {
        id: "4", 
        title: "Space",
        pic: "./images/fashion.jpg",
        posts: "232423 Posts", 
        color: "#171544"
    },
    {
        id: "5", 
        title: "Dog",
        pic: "./images/onion.jpg",
        posts: "278298 Posts", 
        color: "#328D67"
    },
    {
        id: "6", 
        title: "Staff Picks",
        pic: "./images/autumn.jpg",
        posts: "2324 Posts", 
        color: "#8472BD"
    },
    {
        id: "7", 
        title: "Rick And Morty",
        pic: "./images/papercat.png",
        posts: "234982 Posts", 
        color: "#26606E"
    },
    {
        id: "8", 
        title: "Unmuted",
        pic: "./images/couple.jpg",
        posts: "232424 Posts", 
        color: "#E47D57"
    },
    {
        id: "9", 
        title: "Cat",
        pic: "./images/fashion.jpg",
        posts: "2324234 Posts", 
        color: "#132D31"
    },
    {
        id: "10", 
        title: "Science And Tech",
        pic: "./images/onion.jpg",
        posts: "232423 Posts", 
        color: "#26606E"
    },
    {
        id: "11", 
        title: "Awesome",
        pic: "./images/autumn.jpg",
        posts: "2324 Posts", 
        color: "#263BA7"
    },
    {
        id: "12", 
        title: "Gaming",
        pic: "./images/papercat.png",
        posts: "232409 Posts", 
        color: "#df0e73"
    },
    {
        id: "13", 
        title: "Wholesome",
        pic: "./images/couple.jpg",
        posts: "232489797 Posts", 
        color: "#4D549A"
    },
    {
        id: "14", 
        title: "Movies and TV",
        pic: "./images/fashion.jpg",
        posts: "2324123 Posts", 
        color: "#edab3e"
    },
    {
        id: "15", 
        title: "Current Events",
        pic: "./images/onion.jpg",
        posts: "232423 Posts", 
        color: "#e07844"
    },
    {
        id: "16", 
        title: "Crab",
        pic: "./images/autumn.jpg",
        posts: "23243434 Posts", 
        color: "#633875"
    },
    // {
    //     id: "17", 
    //     title: "Uplifting",
    //     pic: "./images/papercat.png",
    //     posts: "2324234 Posts", 
    //     color: "#d4005e"
    // },


]


tags.forEach((tag) => {

let oneTag = document.querySelector(".one-tag");
let cont = document.createElement("div");
cont.classList.add("tag-cont")
cont.style.backgroundColor = `${tag.color}`;
oneTag.appendChild(cont)

let image = document.createElement("img");
    image.setAttribute("src", tag.pic);
    image.classList.add("tag-pic");
    cont.appendChild(image);

let tagTitle = document.createElement("h3");
    tagTitle.classList.add("tag-title");
    tagTitle.textContent=tag.title;
    cont.appendChild(tagTitle);

let tagPosts = document.createElement("p")
    tagPosts.classList.add("tag-text")
    tagPosts.textContent=tag.posts;
    cont.appendChild(tagPosts);

})

let moreTags = document.querySelector(".more");
moreTags.addEventListener("click", allVisible);

function allVisible(){
    let container = document.querySelector(".tags__container");
    container.classList.toggle("show");

}



// }

// let tagTitle = document.querySelector(".more");
// tagTitle.addEventListener("click", showAll);







