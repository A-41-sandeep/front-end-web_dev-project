//Initialize
let songIndex=0;
let audioElement=new Audio('../songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

// Reference of description 
let righthead=document.getElementsByClassName("righthead")[0];
let description=document.getElementsByClassName("description")[0];

let songs=[
    {songName:"Perfect",filePath:"songs/1.mp3",coverPath:"../images/perfect.jpg",content:"para/1.text",heading:"PERFECT...",desc:"'Perfect' was the first track Sheeran wrote for his third studio album.The song is a romantic ballad focusing on traditional marriage, written about his wife-to-be Cherry Seaborn, whom he knew from school and then reconnected with when she was working in New York."},

    {songName:"Memories",filePath:"songs/2.mp3",coverPath:"../images/memories.jpg",content:"para/2.text",heading:"MEMORIES..",desc:"'Memories' is a song by American band Maroon 5, released through 222 and Interscope Records on September 20, 2019, as the lead single from the band's seventh studio album Jordi.Lyrically, the song pays homage to the memories of a loved one who has since passed."},

    {songName:"Love me Like you do",filePath:"songs/3.mp3",coverPath:"../images/lovemelikeyoudo.jpg",content:"para/3.text",heading:"LOVE ME LIKE YOU DO",desc:"'Love Me like You Do' is a song recorded by English singer Ellie Goulding.The song was written by Savan Kotecha, Ilya Salmanzadeh, Tove Lo, Max Martin and Ali Payami; the latter two also produced it."},

    {songName:"Attention",filePath:"songs/4.mp3",coverPath:"../images/attention.jpg",content:"para/4.text",heading:"ATTENTION",desc:'"Attention" is a song recorded and produced by American singer-songwriter Charlie Puth for his second studio album Voicenotes (2018). It was written by Puth and Jacob Kasher. A midtempo pop rock track with elements of 1980s soft-soul and funk music, the song finds Puth singing about how he realizes his partner was "just want[ing] attention" from him instead of loving him.'},

    {songName:"Let me down slowly",filePath:"songs/5.mp3",coverPath:"../images/letmedownslowly.jpg",content:"para/5.text",heading:'LET ME DOWN SLOWLY...',desc:'"Let Me Down Slowly" is a song by American singer-songwriter Alec Benjamin, originally released as a solo version in 2018 and included on his mixtape Narrated for You before being re-released as a duet with Canadian singer Alessia Cara in early 2019. Billboard called the track Benjamins "vulnerable breakout hit".'},

    {songName:"Kehndi Hundi Si",filePath:"songs/6.mp3",coverPath:"../images/kehndi.jpg",content:"para/6.text",heading:'KEHNDI HUNDI SI...',desc:'Kehndi Hundi Si is a Punjabi album released in 2021. There is one song in Kehndi Hundi Si. The song was composed by Dhruv Rajput, a talented musician.Amritpal Singh Dhillon is a singer, rapper, and record producer associated with Punjabi music.Five of his singles have peaked on the Official Charts Company UK Asian and Punjabi charts.'},

    {songName:"Pasoori",filePath:"songs/7.mp3",coverPath:"../images/pasoori.jpg",content:"para/7.text",heading:'PASOORI..',desc:"Pasoori (Punjabi: پسوڑی, lit. 'troubles/angst'[1][2]) is a Punjabi and Urdu-language single by Pakistani singers Ali Sethi and debutant Shae Gill.[3] It was released on 6 February 2022 as the sixth song of season 14 (episode two) of Coke Studio Pakistan and was subsequently released on YouTube on 7 February 2022."},

    {songName:"Tu aake Dekhle",filePath:"songs/8.mp3",coverPath:"../images/tu-aake-dekhle.webp",content:"para/8.text",heading:"TU AAKE DEKHLE...",desc:"Tu Aake Dekhle Lyrics by King is Latest Hindi song sung by King and this brand new song is featuring Simran Kaur. Tu Aake Dekh Le song lyrics are also penned down by King while music is given by Shahbeatz and this music video is released by King himself."},

    {songName:"Yeh Raate Yeh Mausam",filePath:"songs/9.mp3",coverPath:"../images/yehraateyehmausam.jpg",content:"para/9.text",heading:"YE RAATE YEH MAUSAM...",desc:'This song appeared in 1958 New Oriental Pictures’ comic movie Dilli Ka Thug (Trickster of Delhi) produced and directed by S D Narang. The movie starred late Kishore Kumar, late Nutan, late Madan Puri, late Iftekhar, Krishnakant, late Minoo Mumtaz, etc.'},

    {songName:"Hai Apna Dil Toh Aawara",filePath:"songs/10.mp3",coverPath:"../images/haiapnadiltohaawara.jpg",content:"para/10.text",heading:'HAI APNA DIL TOH AAWARA...',desc:'ing along the lyrics of Hai Apna Dil To Aawara (Happy) Song from Solva Saal album. Hai Apna Dil To Aawara (Happy) Song from the Solva Saal album is voiced by famous singer Hemant Kumar. The lyrics of Hai Apna Dil To Aawara (Happy) Song from Solva Saal album are written by Majrooh Sultanpuri.'},

    {songName:"Yeh Ishq Hai",filePath:"songs/11.mp3",coverPath:"../images/yeh-ishq-hai.jpg",content:"para/11.text",heading:'YEH ISHQ HAI',desc:'Sing along the lyrics of Yeh Ishq Hai Song from Jab We Met album. Yeh Ishq Hai Song from the Jab We Met album is voiced by famous singer Pritam, Shreya Ghoshal. The lyrics of Yeh Ishq Hai Song from Jab We Met album are written by Irshad Kamil.'},

    {songName:"Namo Namo",filePath:"songs/12.mp3",coverPath:"../images/namo-namo.jpg",content:"para/12.text",heading:'NAMO NAMO',desc:'The song is sung and composed by Amit Trivedi while lyrics of “Namo Namo Shankara” are written by Amitabh Bhattacharya. The song is from Abhishek Kapoor’s Kedarnath starring Sushant Singh Rajput and Sara Ali Khan.'},

    {songName:"Woh Kisna Hai",filePath:"songs/13.mp3",coverPath:"../images/woh-kisna-hai.jpg",content:"para/13.text",heading:'WOH KISKA HAI',desc:'Woh Kisna Hai Lyrics in Hindi from Kisna movie. Sung by Sukhwinder Singh,S P Sailaja, Ayesha Darbar. Ismail Darbar composed the music. Picturised on Vivek Oberoi and Antonia Bernath.'},
]
songItems.forEach((element,i)=>{
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
//   element.getElementsByClassName("righthead")[0].innerText=songs[i].songName;
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
// const display=()=>{
//     Array.from(document.getElementByClassName('right')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//        element.classList.add('fa-play-circle');
//        document.getElementByClassName("right").style.display="block";
//     })
// }
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        // display();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `../songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;   
        righthead.innerText=songs[songIndex].heading;
        description.innerText=songs[songIndex].desc;
        // right.innerText=songs[songIndex].content;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=12){
        songIndex = 0;
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
        songIndex = 12;
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


