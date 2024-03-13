let sliderimg=document.getElementById('slider-img');
let next=document.getElementById('next');
let prev=document.getElementById('prev');
let text=document.getElementById('textforskills');
let display=[
    {
        sliderimg:'./icons8-css-48.png',
        text:'CSS'
    },
    {
        sliderimg:'./icons8-docker-48.png',
        text:'DOCKER'
    },
    {
        sliderimg:'./icons8-javascript-48.png',
        text:'JAVASCRIPT'
    },
    {
        sliderimg:'./icons8-css-48.png',
        text:'CSS'
    },
    {
        sliderimg:'./icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png',
        text:'MONGODB'
    },
    {
        sliderimg:'./icons8-mysql-48.png',
        text:'MYSQL'
    },
    {
        sliderimg:'./icons8-amazon-web-services-48.png',
        text:'AWS'
    },

];
let count=0;

function counter()
{
    let p=display[count];
    sliderimg.src=p.sliderimg;
    text.textContent=p.text;

}

prev.addEventListener('click',function(){
    count++;
    if(count>display.length-1)
    {
        count=0;
    }
    counter();
});
next.addEventListener('click',function(){
    count--;
    if(count==0)
    {
        count=display.length-1;
    }
    counter();
});