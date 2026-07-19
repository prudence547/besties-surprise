function playMusic(){

    let music = document.getElementById("music");

    music.play();

}

function openGift(){

    document.getElementById("welcome").style.display="none";

    document.getElementById("surprise").style.display="block";


    let music = document.getElementById("music");

    music.play();


}




function finalMessage(){

    document.getElementById("surprise").style.display="none";

    document.getElementById("final").style.display="flex";


}






let photos = [

"images/photo1.jpg",

"images/photo2.jpg",

"images/photo3.jpg",

"images/photo4.jpg",

"images/photo.jpg"

];



let names = [

"Beautiful Purity ❤️",

"Amazing Trizah ❤️",

"Our Beautiful Memories ✨",

"Forever Laughs 💕",

"My Favourite People ❤️"

];




let current = 0;



setInterval(function(){


    let image = document.getElementById("slide");

    let name = document.getElementById("name");



    if(image){


        current++;


        if(current >= photos.length){

            current = 0;

        }



        image.style.opacity = "0";



        setTimeout(function(){


            image.src = photos[current];

            name.innerHTML = names[current];


            image.style.opacity = "1";


        },500);


    }



},3000);





// Create extra floating hearts automatically

function createHeart(){


    let heart = document.createElement("span");


    heart.innerHTML = "❤️";


    heart.style.left = Math.random()*100 + "%";


    heart.style.animationDuration = 
    (Math.random()*5+5)+"s";


    heart.style.fontSize =
    (Math.random()*25+20)+"px";



    document.querySelector(".hearts").appendChild(heart);



    setTimeout(function(){

        heart.remove();

    },10000);


}



setInterval(createHeart,800);
