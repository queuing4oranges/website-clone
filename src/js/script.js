
//set up mock data
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
]

//display tags in DOM
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

let moreTags = document.getElementById("more");
moreTags.addEventListener("click", allVisible);

function allVisible(){
    let container = document.querySelector(".tags__container");
    container.classList.toggle("show");
}

//import secret key to hide from github
import config from "./config"
var mykey1 = config.SECRET_KEY_1;

//get random quote for h2 hero-title
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': mykey1,
		'X-RapidAPI-Host': 'pquotes.p.rapidapi.com'
	},
	body: '{"topic":"motivation"}'
};

//add quote as title to the DOM
function fetchData() {
fetch('https://pquotes.p.rapidapi.com/api/quote', options)
	.then(response => {
        return response.json();
    })
	.then(data => {
        appendData(data)
        console.log(data)
        console.log(data.by)
    });

    function appendData(data) {
        var heroTitle = document.getElementById("hero");
        for (var i=0; i<2; i++) {
            heroTitle.innerHTML = data.quote;
        }
    }
}

fetchData();


//get random media
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '87ef4bdfadmsha19117f7e173882p147106jsn5879fee115bd',
		'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
	}
};

function fetchPics(i) {
fetch('https://movies-app1.p.rapidapi.com/api/movies?page=10&limit=10&type=series', options2)
	.then(response => {
         return response.json()
    })
	.then(data => {
        let results = data.results
        // console.log(data)
        // console.log(Object.keys(data.results[0]))
        // console.log(data.results[1]['countries'][0]['name'])
        appendPic(results)

        })
	.catch(err => console.error(err));

    let cardsContainer = document.getElementById("cards__container");

    function appendPic(results) {
        results.forEach((result) => {
            let card = document.createElement("div")
            card.classList.add("card")
            cardsContainer.appendChild(card);

            let image = document.createElement("img")
            image.classList.add("card-image")
            image.setAttribute("src", result['image'])
            card.appendChild(image);

            let cardCaption = document.createElement("div")
            cardCaption.classList.add("card-caption")
            card.appendChild(cardCaption)

            let info = document.createElement("h5")
            info.classList.add("card-title")
            info.textContent = result['title']
            cardCaption.appendChild(info)


            let rating = document.createElement("div")
            rating.classList.add("card-rating")
            cardCaption.appendChild(rating)

            let review = document.createElement("p")
            review.classList.add("card-review")
            review.textContent = result['rating']
            rating.appendChild(review)

            let index = document.createElement("p")
            index.classList.add("card-index")
            index.textContent = result['index']
            rating.appendChild(index)

            let year = document.createElement("p")
            year.classList.add("card-year")
            year.textContent = result['year']
            rating.appendChild(year)        

        })
    }
}


for (let i=0; i<6; i++) {
    fetchPics();
}


