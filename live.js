let moviesBigDiv = document.querySelector('.movies');
let template = document.querySelector('.template').content;

for(let i = 0; i < movies.length; i++){
    let copy = template.cloneNode(true);

    copy.querySelector('.year').textContent = movies[i].year;
    copy.querySelector('.name').textContent = movies[i].name;
    copy.querySelector('.name2').textContent = movies[i].name2;
    copy.querySelector('.rating').textContent = movies[i].rating;
    copy.querySelector('.view').textContent = movies[i].view;
    copy.querySelector('.like').textContent = movies[i].like;
    copy.querySelector('.picture').src = movies[i].img;

    moviesBigDiv.appendChild(copy);
}


let transform = document.getElementById("transform");
let transform2 = document.getElementById("transform2");
let search = document.getElementById("search");


// Server 2
let moviesBigDiv2 = document.querySelector('.server-random');
let template2 = document.querySelector('.template2').content;

for(let i = 0; i < movies2.length; i++){
    let copy2 = template2.cloneNode(true);
    
    copy2.querySelector('.rd-gif').src = movies2[i].gif;
    copy2.querySelector('.rd-name').textContent = movies2[i].name;
    copy2.querySelector('.rd-name2').textContent = movies2[i].name2;
    copy2.querySelector('.rd-year').textContent = movies2[i].year;
    copy2.querySelector('.rd-picture').src = movies2[i].img;

    moviesBigDiv2.appendChild(copy2);
}
// Server 2

// Server 3
let sr2 = document.querySelector('.sr2');

for(let i = 0; i < movies3.length; i++){
    let copy2 = template2.cloneNode(true);
    
    copy2.querySelector('.rd-name').textContent = movies3[i].name;
    copy2.querySelector('.rd-name2').textContent = movies3[i].name2;
    copy2.querySelector('.rd-year').textContent = movies3[i].year;
    copy2.querySelector('.rd-picture').src = movies3[i].img;
    copy2.querySelector('.rd-gif').src = movies3[i].gif;

    sr2.appendChild(copy2);
}
// Server 3


search.onclick = function(){
    url = "http://uzmovi.com/search?q=" + transform.value;
    window.open(url);
}


// Input Value Other input value =
transform.oninput = showValue;

function showValue(){
    transform2.value = this.value;
}

// Loading
let loader = document.getElementById("loader");

window.addEventListener('load' , function(){
    loader.style.display = "none";
});
// Loading

// Remove Add 1
var rts = document.querySelector(".random-titles");
var rt2 = document.querySelector(".random-title2");
var rt3 = document.querySelector(".random-title3");

rts.addEventListener('click' , function(){
    moviesBigDiv2.classList.toggle("server-random2");
    rt2.classList.toggle("random-title3");
    if(rt3.classList.contains("random-title3")){
        rt3.classList.remove("random-title3");
    } else {
        rt3.classList.add("random-title3");
    }
})
// Remove Add 1

// Remove Add 2
var rts_2 = document.querySelector(".rts");
var rt2_2 = document.querySelector(".rt2");
var rt3_2 = document.querySelector(".rt3");

rts_2.addEventListener('click' , function(){
    sr2.classList.toggle("server-random2");
    rt2_2.classList.toggle("random-title3");
    if(rt3_2.classList.contains("random-title3")){
        rt3_2.classList.remove("random-title3");
    } else {
        rt3_2.classList.add("random-title3");
    }
})
// Remove Add 2