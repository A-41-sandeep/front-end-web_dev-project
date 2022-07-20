//Initialize
let songIndex=0;
let audioElement=new Audio("../songs/1.mp3");
let masterPlay=document.getElementById("masterPlay");
let progressBar=document.getElementById('progressBar');
let gif=document.getElementById("gif");
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName("songItem"));

let songs=[
    {songName:"Perfect",filePath:"../music/perfect-lyrics.mp3",coverPath:"../images/perfect.jpg"},
    {songName:"Memories",filePath:"../music/memories-lyrics.mp3",coverPath:"../images/memories.jpg"},
    {songName:"Love me Like you do",filePath:"../music/love-me-like-you-do-lyrics.mp3",coverPath:"../images/lovemelikeyoudo.jpg"},
    {songName:"Stay",filePath:"../music/stay-official-video.mp3",coverPath:"../images/stay.png"},
    {songName:"Let me down slowly",filePath:"../music/let-me-down-slowly-official-music-video.mp3",coverPath:"../images/letmedownslowly.jpg"},
    {songName:"Kehndi Hundi Si",filePath:"../music/kehndi-hundi-si.mp3",coverPath:"../images/kehndi.jpg"},
    {songName:"Pasoori",filePath:"../music/pasoori.mp3",coverPath:"../images/pasoori.jpg"},
    {songName:"Tu aake Dekhle",filePath:"../music/tu-aake-dekhle.mp3",coverPath:"../images/tu-aake-dekhle.webp"},


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
audioElement.addEventListener("timeupdate",()=>{

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})
progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
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


