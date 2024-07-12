console.log('welcome to spotify');

// initalize the variables
let songIndex=0;
let audioElement=new Audio('songs/${songIndex+1}1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementsByClassName('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: " softly", filePath : "songs/1.mp3", coverPath: "covers/pic1.jpg"},
    {songName: " She Dont Know - Millind Gaba", filePath : "songs/2.mp3", coverPath: "covers/pic2.jpg" },
    {songName: " lover", filePath : "songs/3.mp3", coverPath: "covers/pic3.jpg"},
    {songName: " The Nights ", filePath : " songs/4.mp3", coverPath: "covers/pic4.jpg "},
    {songName: " With You ", filePath : "songs/5.mp3", coverPath: "covers/pic5.jpg"},
    {songName: "  Zach_Seabaugh_-_Christmas_Lights", filePath : "songs/6.mp3 ", coverPath: " covers/pic6.jpg"},
    {songName: " Ek Ladki ko dekha ", filePath : "songs/7.mp3", coverPath: "covers/pic7.jpg"},
    {songName: " I_Guess_Im_In_Love Ko Dekha ", filePath : "songs/8.mp3", coverPath: " covers/pic8.jpg"},
    {songName: " Believer ", filePath : "songs/9.mp3", coverPath: "covers/pic9.jpg"},
    {songName: " ek din aap ", filePath : "songs/10.mp3", coverPath: "covers/pic10.jpg"},
]


songItem.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

// handle paly/pause


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate',()=>{
    
    // seek bar update
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=> {
    audioElement.currentTime=myprogressbar.value *audioElement.duration/100;
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
        audioElement.src = `songs/${songIndex+1}1.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})