//Initialize
let songIndex=0;
let audioElement=new Audio('../songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Perfect",filePath:"songs/1.mp3",coverPath:"../images/perfect.jpg"},
    {songName:"Memories",filePath:"songs/2.mp3",coverPath:"../images/memories.jpg"},
    {songName:"Love me Like you do",filePath:"songs/3.mp3",coverPath:"../images/lovemelikeyoudo.jpg"},
    {songName:"Attention",filePath:"songs/4.mp3",coverPath:"../images/attention.jpg"},
    {songName:"Let me down slowly",filePath:"songs/5.mp3",coverPath:"../images/letmedownslowly.jpg"},
    {songName:"Kehndi Hundi Si",filePath:"songs/6.mp3",coverPath:"../images/kehndi.jpg"},
    {songName:"Pasoori",filePath:"songs/7.mp3",coverPath:"../images/pasoori.jpg"},
    {songName:"Tu aake Dekhle",filePath:"songs/8.mp3",coverPath:"../images/tu-aake-dekhle.webp"},
    {songName:"Yeh Raate Yeh Mausam",filePath:"songs/9.mp3",coverPath:"../images/yehraateyehmausam.jpg"},
    {songName:"Hai Apna Dil Toh Aawara",filePath:"songs/10.mp3",coverPath:"../images/haiapnadiltohaawara.jpg"},    
    {songName:"Yeh Ishq Hai",filePath:"songs/11.mp3",coverPath:"../images/yeh-ishq-hai.jpg"},
    {songName:"Namo Namo",filePath:"songs/12.mp3",coverPath:"../images/namo-namo.jpg"},
    {songName:"Woh Kisna Hai",filePath:"songs/13.mp3",coverPath:"../images/woh-kisna-hai.jpg"},
]
songItems.forEach((element,i)=>{
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//Listen to Events

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
    myprogressBar.value=progress;
})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `../songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `../songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `../songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


