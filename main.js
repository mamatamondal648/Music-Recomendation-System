console.log("Welcome to Sangeet app");
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('img-cont'));
let songs=[
    {songName:"Dil Ne",filePath:"audio/no1.mp3",coverPath:"music pics/dil-ne.jpg"},
    {songName:"Pani Di Gal",filePath:"audio/no2.mp3",coverPath:"music pics/size_m.jpg"},
    {songName:"Flowers-Preet Vidhate",filePath:"audio/no3.mp3",coverPath:"music pics/Flowers.jpg"},
    {songName:"Oh Sanam",filePath:"audio/no4.mp3",coverPath:"music pics/Oh Sanam"},
    {songName:"Ke Tui Bol",filePath:"audio/no5.mp3",coverPath:"music pics/Arijit Singh.jpg"},
    {songName:"Ankhan Meech Ke",filePath:"audio/no6.mp3",coverPath:"music pics/Ankhan Meech Ke.jpg"},
    {songName:"Sab Gazab",filePath:"audio/no7.mp3",coverPath:"music pics/Sab Gazab.jpg"},
    {songName:"Jhoome Jo Pathaan",filePath:"audio/no8.mp3",coverPath:"music pics/Pathaan.jpg"},
    {songName:"Silicone",filePath:"audio/no9.mp3",coverPath:"music pics/Silicone.jpg"},
    {songName:"Yaad Aati Hai",filePath:"audio/no10.mp3",coverPath:"music pics/yaad aati hai.jpg"},
    {songName:"Chaha Tha Tujhe",filePath:"audio/no11.mp3",coverPath:"music pics/Bollywood 2000s.webp"},
    {songName:"Khabbi Seat",filePath:"audio/no12.mp3",coverPath:"music pics/Khabbi Seat.webp"},
    {songName:"Galat",filePath:"audio/no13.mp3",coverPath:"music pics/Galat.webp"},
    {songName:"Heartbreak Hits-Kahani Suno",filePath:"audio/no14.mp3",coverPath:"music pics/Heartbreak Hits.webp"},
    {songName:"Mann Meri Jaan",filePath:"audio/no15.mp3",coverPath:"music pics/Viral Hits -English.webp"},
    {songName:"Dilbar",filePath:"audio/no16.mp3",coverPath:"music pics/Bollywood Hot Remix.webp"},
    {songName:"Sajani",filePath:"audio/no17.mp3",coverPath:"music pics/bengali Love Hits.jpg"},
    {songName:"Workout Punjabi Hits",filePath:"audio/no18.mp3",coverPath:"music pics/Workout.webp"},
    {songName:"Reels Te Hit",filePath:"audio/no19.mp3",coverPath:"music pics/Reels Te Hit.webp"},
    {songName:"Bollywood Wala Dance",filePath:"audio/no20.mp3",coverPath:"music pics/Latest In Dance.webp"},
    {songName:"O-Bedardeya",filePath:"audio/no21.mp3",coverPath:"music pics/Arijit.webp"},
    {songName:"Bas Ke Bahar",filePath:"audio/no22.mp3",coverPath:"music pics/badshah.webp"},
    {songName:"Param Sundari",filePath:"audio/no23.mp3",coverPath:"music pics/Sreya Ghosal.jpg"},
    {songName:"Hawa Hawai",filePath:"audio/no24.mp3",coverPath:"music pics/kavita krishnamurthy.jpg"},
    {songName:"O Sajna",filePath:"audio/no25.mp3",coverPath:"music pics/Neha Kakkar.webp"},
    {songName:"Ashiqui-2-Love-Anthem",filePath:"audio/no26.mp3",coverPath:"music pics/Bollywood-Love-Anthem.jpg"},
    {songName:"First-Love",filePath:"audio/no27.mp3",coverPath:"music pics/First-Love.jpg"},
    {songName:"Tum To Ho Chadni Si",filePath:"audio/no28.mp3",coverPath:"music pics/size_m_1664444046.jpg"},
    {songName:"Sach Keh Raha Hai-B-Praak_Romantic",filePath:"audio/no29.mp3",coverPath:"music pics/B-Praak-Romantic (1).jpg"},
    {songName:"Piya Re",filePath:"audio/no30.mp3",coverPath:"music pics/bengali Love Hits.jpg"},
    {songName:"Srimad Bhagabat Gita Chanting",filePath:"audio/no31.mp3",coverPath:"music pics/Practically Gita.webp"},
    {songName:"Jai Mata Di",filePath:"audio/no32.mp3",coverPath:"music pics/Jai Mata Di.webp"},
    {songName:"Popular Hanuman Chalisa",filePath:"audio/no33.mp3",coverPath:"music pics/Popular Collection of Hanuman.webp"},
    {songName:"Padabali Kirtan-bengali",filePath:"audio/no34.mp3",coverPath:"music pics/krishna.jpg"},
    {songName:"Ram Ram Dhun",filePath:"audio/no35.mp3",coverPath:"music pics/Popular Collection bhajan.webp"}


]
songItems.forEach((element,i)=>{

element.getElementsByTagName("img")[0].src=songs[i].coverPath;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`audio/no${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=34){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    audioElement.src=`audio/no${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=34
    }
    else{
        songIndex-=1
    }
    audioElement.src=`audio/no${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})