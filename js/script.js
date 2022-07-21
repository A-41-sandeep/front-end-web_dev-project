let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : '../images/stay.png',
        name : 'Stay',
        artist : 'The Kid LAROI, Justin Bieber',
        music : "../music/stay-official-video.mp3"
        
    },
    {
        img : '../images/fallingdown.jpg',
        name : 'Falling Down',
        artist : 'Wid Cards',
        music : '../music/falling-down-lyrics-lyric-video-ft-james-delaney.mp3'
    },
    {
        img : '../images/faded.png',
        name : 'Faded',
        artist : 'Alan Walker',
        music : '../music/faded.mp3'
    },
    {
        img : '../images/ratherbe.jpg',
        name : 'Rather Be',
        artist : 'Clean Bandit',
        music : '../music/rather-be-lyrics-feat-jess-glynne.mp3'
    },
    {
        img : '../images/senorita.jpg',
        name : 'Senorita',
        artist : ' Camila Cabello, Shawn Mendes',
        music : '../music/senorita.mp3'
    },
    {

        img : '../images/shiddat.jpg',
        name : 'Shiddat',
        artist : 'Manan Bhardwaj',
        music : '../music/music_shiddat.mp3'
    },
    
    {
        img : '../images/chitta.jpg',
        name : 'Chitta',
        artist : 'Manan Bhardwaj',
        music : '../music/music_chitta.mp3'
    },
    {
        img : '../images/Barbaadiyan.jpg',
        name : 'Barbaadiyan',
        artist : ' Nikhita Gandhi, Madhubanti Bagchi, Sachet Tandon, Sachin–Jigar',
        music : '../music/barbaadiyan.mp3'
    },
    {
        img : '../images/jigar.jpg',
        name : 'Jug Jug Jeeve',
        artist : ' Sachet–Parampara, Sachet Tandon, Sachin–Jigar',
        music : '../music/Jug Jug Jeeve.mp3'
    },
    {
        img : '../images/kesariya.jpg',
        name : 'Kesariya',
        artist : 'Arjit Singh',
        music : '../music/music_kesariya.mp3'
    },
    {
        img : '../images/ranjha.jpg',
        name : 'Ranjha',
        artist : 'Anvita Dutt Guptan, Jasleen Royal, B Praak, Romy',
        music : '../music/ranjha.mp3'
    },
    
    {
        img : '../images/gypsy.jpg',
        name : 'Gypsy(Balam Thanedar)',
        artist : 'GD Kaur',
        music : '../music/gypsy.mp3'
    },
    {
        img : '../images/letmedownslowly.jpg',
        name : 'Let-me-down-slowly',
        artist : 'Alec Benjamin',
        music : '../music/let-me-down-slowly-official-music-video.mp3'
    },
    {
        img : '../images/lovemelikeyoudo.jpg',
        name : 'love-me-like-you-do',
        artist : 'Ellie Goulding',
        music : '../music/love-me-like-you-do-lyrics.mp3'
    },
    {
        img : '../images/tu-aake-dekhle.webp',
        name : 'Tu-aake-dekhle',
        artist : 'King',
        music : '../music/tu-aake-dekhle.mp3'
    },
    {
        img : '../images/pasoori.jpg',
        name : 'Pasoori',
        artist : 'Shae Gill, Ali Sethi',
        music : '../music/pasoori.mp3'
    },
    {
        img : '../images/kehndi.jpg',
        name : 'Kehndi Hundi Si',
        artist : 'AP Dhillon',
        music : '../music/kehndi-hundi-si.mp3'
    },
    {
        img : '../images/banaras.jpg',
        name : 'Tu-banja-gali-banaras-ki',
        artist : 'Asees Kaur',
        music : '../music/tu bnja gali banaras ki.mp3'
    },
    {
        img : '../images/burjkhalifa.jpg',
        name : 'Burj-Khalifa',
        artist : 'DJ Khushi, Shashi, Nikhita Gandhi, Madhubanti Bagchi',
        music : '../music/burj-khalifa.mp3'
    },
    {    img : '../images/yehraateyehmausam.jpg',
        name : 'Yeh raate Yeh Mausam',
        artist : 'Kishore Kumar, Asha Bhosle',
        music : '../music/kishore-kumar-asha-bhosle-at-dilli-ka-thug-kishore-kumar-nutan.mp3'
    },
    {
        img : '../images/zindagieksafarhaisuhana.jpg',
        name : 'Zindagi Ek Safar Hai Suhana',
        artist : 'Kishore Kumar',
        music : '../music/zindagi-ek-safar-andaz-1971-hema-malini-rajesh-khanna-kishore-kumar-hits-hd.mp3'
    },
    {
        img : '../images/haiapnadiltohaawara.jpg',
        name : 'Hai Apna Dil Toh Aawara',
        artist : 'Hemant Kumar',
        music : '../music/hai-apna-dil-to-awara-dev-anand-waheeda-rehman-hemant-kumar-solva-saal-ishtar-music.mp3'
    },
    {
        img : '../images/perfect.jpg',
        name : 'Perfect',
        artist : 'Ed Sheeran',
        music : '../music/perfect-lyrics.mp3'
    },
    {
        img : '../images/memories.jpg',
        name : 'Memories',
        artist : 'Maroon 5',
        music : '../music/memories-lyrics.mp3'
    },
    {
        img : '../images/attention.jpg',
        name : 'Attention',
        artist : 'Charlie Puth',
        music : '../music/charlie-puth-lyrics.mp3'
    },
    {
        img : '../images/dekha-ek-khwab.jpg',
        name : 'Dekha Ek Khwab',
        artist : 'Kishore Kumar, Lata Mangeshkar',
        music : '../music/hari.mp3'
    },
    {
        img : '../images/say-shava-shava.jpg',
        name : 'Say "Shava Shava"',
        artist : 'Udit Narayan, Alka Yagnik',
        music : '../music/k3g-amitabh-bachchan-shah-rukh-rani-kajol-alka-yagnik.mp3'
    },
    {
        img : '../images/yeh-ishq-hai.jpg',
        name : 'Yeh Ishq Hai',
        artist : 'Shreya Ghoshal',
        music : '../music/full-video-yeh-ishq-hai-jab-we-met-kareena-kapoor-shahid-kapoor-pritam-shreya-ghoshal.mp3'
    },
    {
        img : '../images/namo-namo.jpg',
        name : 'Namo Namo',
        artist : 'Amit Trivedi',
        music : '../music/full-video-kedarnath-sushant-rajput-sara-ali-khan-amit-trivedi-amitabh-b.mp3'
    },
    {
        img : '../images/woh-kisna-hai.jpg',
        name : 'Woh Kisna Hai',
        artist : ' Ayesha Darbar, Sukhwinder Singh, M. Shailaja',
        music : '../music/woh-kisna-hai-sukhwinder-singh-vivek-oberoi-isha-sharvani-javed-akhtar-kisna-movie-songs.mp3'
    },
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}