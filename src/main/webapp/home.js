let content = document.querySelector(".content-interface");
let section = document.querySelector(".side-section");
let main = document.querySelector(".main-section");
let sectionR = document.querySelector(".current-play-section");
let playbar = document.querySelector(".playbar").querySelector(".container");
let currentSong = new Audio();
let play = document.querySelector(".play");
let songs;

function hideSidebar() {
    let content = document.querySelector(".content-interface");
    content.style.gridTemplateColumns = "3fr 94fr 3fr";
    // content.style.transition = "grid-template-columns 0.5s ease";

    // icon ko click karne pe side-section ka width minimize ho jaayega allowing only the icon visible baaki saare components/containers ko don't display aur waapis width retain karne ke liye icon click karna padega.

    let section = document.querySelector(".side-section");
    let title = document.getElementById("left-side-section-title");
    let container = document.getElementById("left-side-section-inner-container");
    title.style.display = "none";
    container.style.display = "none";

    // Creating an open sidebar button if it already doesn't exist.
    if (!section.querySelector(".openButton")) {
        let button = document.createElement("button");
        button.className = "openButton";
        section.append(button);
        button.innerHTML = '<svg fill="#000000" width="18px" height="18px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve"><path d="M20,24H4c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v16C24,22.2,22.2,24,20,24z M4,2C2.9,2,2,2.9,2,4v16 c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2H4z"></path><path d="M8,24c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v22C9,23.6,8.6,24,8,24z"></path><path d="M17,13c-0.3,0-0.5-0.1-0.7-0.3l-3-3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3,3c0.4,0.4,0.4,1,0,1.4C17.5,12.9,17.3,13,17,13z"></path><path d="M14,16c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l3-3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-3,3C14.5,15.9,14.3,16,14,16z"></path></svg>';
        button.style.backgroundColor = "transparent";
        button.style.border = "none";
        button.style.cursor = "pointer"; button.addEventListener("click", () => {
            content.style.gridTemplateColumns = "20fr 77fr 3fr";
            title.style.display = "flex";
            container.style.display = "block";
        });
    }

    // Scaling the openSidebar svg button when hover into section
    section.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.3)';
    });

    section.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
}

function hidePlayMenu() {
    let content = document.querySelector(".content-interface");
    content.style.gridTemplateColumns = "3fr 94fr 3fr";
    // content.style.transition = "grid-template-columns 0.5s ease";

    // icon ko click karne pe side-section ka width minimize ho jaayega allowing only the icon visible baaki saare components/containers ko don't display aur waapis width retain karne ke liye icon click karna padega.

    let rSection = document.querySelector(".current-play-section");
    let rContainer = rSection.querySelector(".container");
    rContainer.style.display = "none";

    // Creating an open sidebar button if it already doesn't exist.
    if (!rSection.querySelector(".openButton")) {
        let rButton = document.createElement("button");
        rButton.className = "openButton";
        rSection.append(rButton);
        rButton.innerHTML = '<svg fill="#000000" width="18px" height="18px" version="1.1" id="Layer_1" xmlns:x="&amp;ns_extend;" xmlns:i="&amp;ns_ai;" xmlns:graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><g><path d="M20,24H4c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v16C24,22.2,22.2,24,20,24z M4,2C2.9,2,2,2.9,2,4v16 c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2H4z"></path></g></g><g><g><path d="M8,24c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v22C9,23.6,8.6,24,8,24z"></path></g></g><g><g><path d="M14,13c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l3-3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-3,3C14.5,12.9,14.3,13,14,13z"></path></g></g><g><g><path d="M17,16c-0.3,0-0.5-0.1-0.7-0.3l-3-3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3,3c0.4,0.4,0.4,1,0,1.4C17.5,15.9,17.3,16,17,16z"></path></g></g></g></g></svg>';
        rButton.style.backgroundColor = "transparent";
        rButton.style.border = "none";
        rButton.style.cursor = "pointer";
        rButton.style.margin = "20px 10px";
        rButton.addEventListener("click", () => {
            content.style.gridTemplateColumns = "3fr 77fr 20fr";
            rContainer.style.display = "block";
        });
    }

    // Scaling the openSidebar svg button when hover into section
    rSection.addEventListener('mouseenter', () => {
        rButton.style.transform = 'scale(1.3)';
    });

    rSection.addEventListener('mouseleave', () => {
        rButton.style.transform = 'scale(1)';
    });
}

function fullMain() {
    let content = document.querySelector(".content-interface");
    content.style.gridTemplateColumns = "1fr 98fr 1fr";
    let section = document.querySelector(".side-section");
    let title = document.getElementById("left-side-section-title");
    let container = document.getElementById("left-side-section-inner-container");
    title.style.display = "none";
    container.style.display = "none";
    let rSection = document.querySelector(".current-play-section");
    let rContainer = rSection.querySelector(".container");
    rContainer.style.display = "none";

    let full = content.querySelector(".main-section").querySelector(".heading").getElementsByTagName("button")[0];
    full.innerHTML = `<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ic_fluent_full_screen_zoom_24_regular</title><desc>Created with Sketch.</desc><g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="ic_fluent_full_screen_zoom_24_regular" fill="#212121" fill-rule="nonzero"><path d="M16.25,15.5 L20.25,15.5 C20.6642136,15.5 21,15.8357864 21,16.25 C21,16.6296958 20.7178461,16.943491 20.3517706,16.9931534 L20.25,17 L17,17 L17,20.25 C17,20.6642136 16.6642136,21 16.25,21 C15.8703042,21 15.556509,20.7178461 15.5068466,20.3517706 L15.5,20.25 L15.5,16.25 C15.5,15.8703042 15.7821539,15.556509 16.1482294,15.5068466 L16.25,15.5 L20.25,15.5 L16.25,15.5 Z M3.75,15.5 L7.75,15.5 C8.12969577,15.5 8.44349096,15.7821539 8.49315338,16.1482294 L8.5,16.25 L8.5,20.25 C8.5,20.6642136 8.16421356,21 7.75,21 C7.37030423,21 7.05650904,20.7178461 7.00684662,20.3517706 L7,20.25 L7,17 L3.75,17 C3.33578644,17 3,16.6642136 3,16.25 C3,15.8703042 3.28215388,15.556509 3.64822944,15.5068466 L3.75,15.5 L7.75,15.5 L3.75,15.5 Z M7.75,3 C8.12969577,3 8.44349096,3.28215388 8.49315338,3.64822944 L8.5,3.75 L8.5,7.75 C8.5,8.12969577 8.21784612,8.44349096 7.85177056,8.49315338 L7.75,8.5 L3.75,8.5 C3.33578644,8.5 3,8.16421356 3,7.75 C3,7.37030423 3.28215388,7.05650904 3.64822944,7.00684662 L3.75,7 L7,7 L7,3.75 C7,3.33578644 7.33578644,3 7.75,3 Z M16.25,3 C16.6296958,3 16.943491,3.28215388 16.9931534,3.64822944 L17,3.75 L17,7 L20.25,7 C20.6642136,7 21,7.33578644 21,7.75 C21,8.12969577 20.7178461,8.44349096 20.3517706,8.49315338 L20.25,8.5 L16.25,8.5 C15.8703042,8.5 15.556509,8.21784612 15.5068466,7.85177056 L15.5,7.75 L15.5,3.75 C15.5,3.33578644 15.8357864,3 16.25,3 Z"></path></g></g></g></svg>`;

    full.addEventListener("click", () => {
        hideSidebar();
        hidePlayMenu();
        full.innerHTML = `<svg width="20px" height="20px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="48" height="48" fill="white" fill-opacity="0.01"></rect><path d="M6 6L16 15.8995" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 41.8995L16 32" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M42.0001 41.8995L32.1006 32" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M41.8995 6L32 15.8995" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33 6H42V15" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M42 33V42H33" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 42H6V33" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 15V6H15" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`;
        full.addEventListener("click", () => { fullMain(); });
    });
}

function userLogoPanel() {
    let navbar = document.querySelector(".navbar");
    let panel = navbar.querySelector(".user-logo-panel");
    panel.style.display = "block";
    let button = navbar.querySelector(".profile").querySelector(".logo").getElementsByTagName("button");
}

function userLogoPanelClose() {
    let navbar = document.querySelector(".navbar");
    let panel = navbar.querySelector(".user-logo-panel");
    let close = panel.querySelector(".close");
    close.addEventListener("click", () => {
        panel.style.display = "none";
    });
}

function setBg1() {
    section.style.backgroundImage = `url("mb1.png")`;
    main.style.backgroundImage = `url("mb1.png")`;
    sectionR.style.backgroundImage = `url("mb1.png")`;
    playbar.style.backgroundImage = `url("mb1.png")`;
}

function setBg2() {
    section.style.backgroundImage = `url("mb2.jpg")`;
    main.style.backgroundImage = `url("mb2.jpg")`;
    sectionR.style.backgroundImage = `url("mb2.jpg")`;
    playbar.style.backgroundImage = `url("mb2.jpg")`;
}

function setBg3() {
    section.style.backgroundImage = `url("mb3.jpg")`;
    main.style.backgroundImage = `url("mb3.jpg")`;
    sectionR.style.backgroundImage = `url("mb3.jpg")`;
    playbar.style.backgroundImage = `url("mb3.jpg")`;
}

function setBg4() {
    section.style.backgroundImage = `url("mb4.jpeg")`;
    main.style.backgroundImage = `url("mb4.jpeg")`;
    sectionR.style.backgroundImage = `url("mb4.jpeg")`;
    playbar.style.backgroundImage = `url("mb4.jpeg")`;
}

function setBg5() {
    section.style.backgroundImage = `url("mb5.png")`;
    main.style.backgroundImage = `url("mb5.png")`;
    sectionR.style.backgroundImage = `url("mb5.png")`;
    playbar.style.backgroundImage = `url("mb5.png")`;
}

function setBg6() {
    section.style.backgroundImage = `url("mb6.jpg")`;
    main.style.backgroundImage = `url("mb6.jpg")`;
    sectionR.style.backgroundImage = `url("mb6.jpg")`;
    playbar.style.backgroundImage = `url("mb6.jpg")`;
}

function setBg7() {
    section.style.backgroundImage = `url("mb7.jpg")`;
    main.style.backgroundImage = `url("mb7.jpg")`;
    sectionR.style.backgroundImage = `url("mb7.jpg")`;
    playbar.style.backgroundImage = `url("mb7.jpg")`;
}

function setBg8() {
    section.style.backgroundImage = `url("mb8.jpg")`;
    main.style.backgroundImage = `url("mb8.jpg")`;
    sectionR.style.backgroundImage = `url("mb8.jpg")`;
    playbar.style.backgroundImage = `url("mb8.jpg")`;
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

const playMusic = (music, pause = false) => {
    // var audio = new Audio(music);
    // audio.play();

    currentSong.src = music;
	currentSong.src = (currentSong.src).replace("%3C/tt%3E", "").replace("%3Ctt%3E", "");

    if (!pause) {
        currentSong.play();
        play.innerHTML = `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path clip-rule="evenodd" d="m3.75 12c0-4.55635 3.69365-8.25 8.25-8.25 4.5563 0 8.25 3.69365 8.25 8.25 0 4.5563-3.6937 8.25-8.25 8.25-4.55635 0-8.25-3.6937-8.25-8.25zm8.25-9.75c-5.38478 0-9.75 4.36522-9.75 9.75 0 5.3848 4.36522 9.75 9.75 9.75 5.3848 0 9.75-4.3652 9.75-9.75 0-5.38478-4.3652-9.75-9.75-9.75zm-2 6c.4142 0 .75.33579.75.75v6c0 .4142-.3358.75-.75.75-.41421 0-.75-.3358-.75-.75v-6c0-.41421.33579-.75.75-.75zm4 0c.4142 0 .75.33579.75.75v6c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-6c0-.41421.3358-.75.75-.75z" fill="#000000" fill-rule="evenodd"></path></g></svg>`;
    }

    document.getElementById("playbar-song-name").innerHTML = music.split("songs/")[1].split("-")[0].replaceAll("_", " ");
    document.getElementById("playbar-artist-name").innerHTML = music.split("songs/")[1].split("-")[1].replaceAll("_", " ").replaceAll(",", " , ").replace(".mp3", "");
    
    // Right Section mein bhi song name aur artist name dynamic hona chahiye.
    let currMenuTopSongName = document.getElementById("current-song-name");
    let currBelowSongName = document.querySelector(".current-info-title")
    currMenuTopSongName.innerHTML = currBelowSongName.innerHTML = (currentSong.src).split("/Bozify/songs/")[1].split("-")[0].replaceAll("_", " ");
    let currMenuTopSinger = document.querySelector(".current-info-artist");
    let currMenuBelowSinger = document.querySelector(".current-artist-name");
    currMenuTopSinger.innerHTML = currMenuBelowSinger.innerHTML = (currentSong.src).split("/Bozify/songs/")[1].split("-")[1].replaceAll("_", " ").replaceAll(",", " , ").replace(".mp3", "");
	
	// Right Section aur playbar ke images bhi dyanamically display hone chahiye.
	let currImage = document.querySelector(".preview-clip");
	let playbarImg = document.querySelector(".cover-image");
	currImage.innerHTML = playbarImg.innerHTML = `<img src="${'images/song/' + currentSong.src.split("songs/")[1].split("-")[0] + ".jpeg"}">`;
}

async function Main() {
    let rawSongs = await fetch("http://localhost:8081/Bozify/songs/");
    let rawSongsInText = await rawSongs.text();
    // Since, yeh poora song directory table text format mein hai extracted hai toh isko pahile ek HTML element bana ke uske innerHTML mein insert karna hoga aur phir uske element ke through uske tags get karke song details extract karna padega.
    
    let element = document.createElement("div");
    element.innerHTML = rawSongsInText;
    let elementList = element.getElementsByTagName("a");

    let rawImages = await fetch("http://localhost:8081/Bozify/images/song");
    let rawImagesInText = await rawImages.text();
    
    let e = document.createElement("div");
    e.innerHTML = rawImagesInText;
    let eList = e.getElementsByTagName("a");

    // console.log(elementList.innerHTML); This will give undefined value.
    // console.log(elementList[1].innerHTML); We can access the song name using this understanding.

    songs = [];
    for (let i = 1; i < elementList.length; i++) {
        songs.push(elementList[i].innerHTML);
    }
    // console.log(songs); Complete song title mil gaya ab ismein se song name and artist name separate out karna hai.
    
    images = [];
    for (let i = 1; i < eList.length; i++) {
        images.push(eList[i].innerHTML.replaceAll("<tt>","").replaceAll("</tt>", ""));
    }

    playMusic("/Bozify/songs/" + songs[0], true);

    let songName = [];
    let artistName = [];
    let imageName = [];

    for (let i = 0; i < songs.length; i++) {
        songName.push(songs[i].split("-")[0].replaceAll("_", " "));
        artistName.push(songs[i].split("-")[1].replaceAll("_", " ").replaceAll(",", " , ").replace(".mp3", ""));
        imageName.push("images/song/" + images[i]);
    }
    // console.log(songName, artistName); Yeh karke ab hume song name aur artist name ke proper strings mil gaye.
	// console.log(imageName[0]);
	
    let lcontainer = document.getElementById("left-side-section-inner-container");
    let cards = document.querySelector(".cards");
    for (let i = 0; i < songs.length; i++) {
        lcontainer.innerHTML += `<div class="lib-song-card"><div class="music-cover"><button class="play-btn"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 363.025 363.024" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><path style="fill:#030303;" d="M155.859,241.706c-3.605,0-7.188-0.863-10.37-2.499c-7.682-3.899-12.459-11.699-12.459-20.339v-74.717c0-8.631,4.777-16.431,12.479-20.353c7.582-3.823,16.991-3.062,23.795,1.898l51.308,37.355c5.878,4.286,9.389,11.182,9.389,18.455s-3.511,14.175-9.389,18.457l-51.308,37.362C165.382,240.19,160.73,241.706,155.859,241.706z M155.868,133.032c-1.747,0-3.497,0.415-5.055,1.207c-3.742,1.907-6.072,5.709-6.072,9.912v74.723c0,4.208,2.33,8.005,6.078,9.909c3.666,1.881,8.246,1.515,11.587-0.915l51.311-37.367c2.859-2.081,4.574-5.443,4.574-8.988c0-3.543-1.715-6.902-4.574-8.995l-51.311-37.355C160.496,133.77,158.238,133.032,155.868,133.032z"></path></g><g><path style="fill:#030303;" d="M181.512,363.024C81.427,363.024,0,281.601,0,181.513C0,81.43,81.427,0,181.512,0c100.089,0,181.513,81.43,181.513,181.513C363.025,281.601,281.601,363.024,181.512,363.024z M181.512,11.71C87.88,11.71,11.71,87.883,11.71,181.513c0,93.627,76.17,169.802,169.802,169.802c93.627,0,169.803-76.175,169.803-169.802C351.315,87.883,275.139,11.71,181.512,11.71z"></path></g></g></g></svg></button><img class="left-song-image" src="${imageName[i]}" alt=""></div><div class="song-info"><div class="song-name">${songName[i]}</div><div class="artist-name">${artistName[i]}</div></div></div>`;
        // lcontainer.innerHTML += `<div class="lib-song-card"><div class="music-cover"><button class="play-btn"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 363.025 363.024" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><path style="fill:#030303;" d="M155.859,241.706c-3.605,0-7.188-0.863-10.37-2.499c-7.682-3.899-12.459-11.699-12.459-20.339v-74.717c0-8.631,4.777-16.431,12.479-20.353c7.582-3.823,16.991-3.062,23.795,1.898l51.308,37.355c5.878,4.286,9.389,11.182,9.389,18.455s-3.511,14.175-9.389,18.457l-51.308,37.362C165.382,240.19,160.73,241.706,155.859,241.706z M155.868,133.032c-1.747,0-3.497,0.415-5.055,1.207c-3.742,1.907-6.072,5.709-6.072,9.912v74.723c0,4.208,2.33,8.005,6.078,9.909c3.666,1.881,8.246,1.515,11.587-0.915l51.311-37.367c2.859-2.081,4.574-5.443,4.574-8.988c0-3.543-1.715-6.902-4.574-8.995l-51.311-37.355C160.496,133.77,158.238,133.032,155.868,133.032z"></path></g><g><path style="fill:#030303;" d="M181.512,363.024C81.427,363.024,0,281.601,0,181.513C0,81.43,81.427,0,181.512,0c100.089,0,181.513,81.43,181.513,181.513C363.025,281.601,281.601,363.024,181.512,363.024z M181.512,11.71C87.88,11.71,11.71,87.883,11.71,181.513c0,93.627,76.17,169.802,169.802,169.802c93.627,0,169.803-76.175,169.803-169.802C351.315,87.883,275.139,11.71,181.512,11.71z"></path></g></g></g></svg></button><img class="left-song-image" src="${imageName[i]}" alt=""></div><div class="song-info"><div class="song-name">${songName[i]}</div><div class="artist-name">${artistName[i]}</div></div></div>`;

        // Main container ke card section ke cards mein bhi song name and artist name dynamic hona chahiye.
        cards.innerHTML += `<div class="card">
                            <div class="song-image">
                                <img src="${imageName[i]}" alt="">
                                <button class="play-button">
                                    <svg width="40px" height="40px" viewBox="0 0 481 481"
                                        xmlns="http://www.w3.org/2000/svg" stroke="none">
                                        <!-- Background Circle -->
                                        <circle cx="240.5" cy="240.5" r="240.5" fill="#79a6fa" />

                                        <!-- Play Triangle -->
                                        <path fill="#121212" d="M349.2,229.1l-152.6-97.9c-4.2-2.7-9.4-2.9-13.8-0.5
                                           c-4.3,2.4-7,6.9-7,11.8v195.7c0,4.9,2.7,9.5,7,11.8
                                           c2,1.1,4.3,1.7,6.5,1.7c2.5,0,5.1-0.7,7.3-2.1l152.6-97.9
                                           c3.9-2.5,6.2-6.8,6.2-11.4S353,231.6,349.2,229.1z
                                           M202.8,313.7V167.3l114.1,73.2L202.8,313.7z" />
                                    </svg>
                                </button>
                            </div>
                            <div class="name">${songName[i]}</div>
                            <div class="artist">${artistName[i]}</div>
                        </div>`;
        
        
    }
	

    // Setting all the images to their respective songs.
    
    // Play the first song
    // var audio = new Audio("songs/" + songName[0].replaceAll(" ", "_") + "-" + artistName[0].replace(" , ", ",").replaceAll(" ", "_") + ".mp3");
    // audio.play();
    
    // Song ke duration ke liye
    // audio.addEventListener("loadeddata", () => {
        //     let duration = audio.duration;
        //     console.log(duration, audio.src, audio.currentTime, audio.paused, audio.muted, audio.volume);
        //     // The duration variable now holds the duration (in seconds) of the audio clip.
        // });

        
    // Saare songs mein event listener daalna hoga taaki usko play/pause kar sake.
    let playButtons = document.querySelectorAll(".play-btn");
    // console.log(playButtons.length);
    for (let i = 0; i < playButtons.length; i++) {
        playButtons[i].addEventListener("click", () => {
            playMusic("/Bozify/songs/" + songName[i].replaceAll(" ", "_") + "-" + artistName[i].replaceAll(" , ", ",").replaceAll(" ", "_") + ".mp3");
        });
    }

    // Main section ke saare songs mein event listener daalna hoga taaki usko play/pause kar sake.
    let playBtns = document.querySelectorAll(".play-button");
    // console.log(playButtons.length);
    for (let i = 0; i < playBtns.length; i++) {
        playBtns[i].addEventListener("click", () => {
            playMusic("/Bozify/songs/" + songName[i].replaceAll(" ", "_") + "-" + artistName[i].replaceAll(" , ", ",").replaceAll(" ", "_") + ".mp3");
        });
    }

    // Previous, Play, Next buttons work karne ka logic
    previous = document.querySelector(".previous");
    play = document.querySelector(".play");
    next = document.querySelector(".next");
	
	//currentSong.src = (currentSong.src).replace("%3C/tt%3E", "").replace("%3Ctt%3E", "");

    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.innerHTML = `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path clip-rule="evenodd" d="m3.75 12c0-4.55635 3.69365-8.25 8.25-8.25 4.5563 0 8.25 3.69365 8.25 8.25 0 4.5563-3.6937 8.25-8.25 8.25-4.55635 0-8.25-3.6937-8.25-8.25zm8.25-9.75c-5.38478 0-9.75 4.36522-9.75 9.75 0 5.3848 4.36522 9.75 9.75 9.75 5.3848 0 9.75-4.3652 9.75-9.75 0-5.38478-4.3652-9.75-9.75-9.75zm-2 6c.4142 0 .75.33579.75.75v6c0 .4142-.3358.75-.75.75-.41421 0-.75-.3358-.75-.75v-6c0-.41421.33579-.75.75-.75zm4 0c.4142 0 .75.33579.75.75v6c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-6c0-.41421.3358-.75.75-.75z" fill="#000000" fill-rule="evenodd"></path></g></svg>`;
        }
        else {
            currentSong.pause();
            play.innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 363.025 363.024" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><path style="fill:#030303;" d="M155.859,241.706c-3.605,0-7.188-0.863-10.37-2.499c-7.682-3.899-12.459-11.699-12.459-20.339v-74.717c0-8.631,4.777-16.431,12.479-20.353c7.582-3.823,16.991-3.062,23.795,1.898l51.308,37.355c5.878,4.286,9.389,11.182,9.389,18.455s-3.511,14.175-9.389,18.457l-51.308,37.362C165.382,240.19,160.73,241.706,155.859,241.706z M155.868,133.032c-1.747,0-3.497,0.415-5.055,1.207c-3.742,1.907-6.072,5.709-6.072,9.912v74.723c0,4.208,2.33,8.005,6.078,9.909c3.666,1.881,8.246,1.515,11.587-0.915l51.311-37.367c2.859-2.081,4.574-5.443,4.574-8.988c0-3.543-1.715-6.902-4.574-8.995l-51.311-37.355C160.496,133.77,158.238,133.032,155.868,133.032z"></path></g><g><path style="fill:#030303;" d="M181.512,363.024C81.427,363.024,0,281.601,0,181.513C0,81.43,81.427,0,181.512,0c100.089,0,181.513,81.43,181.513,181.513C363.025,281.601,281.601,363.024,181.512,363.024z M181.512,11.71C87.88,11.71,11.71,87.883,11.71,181.513c0,93.627,76.17,169.802,169.802,169.802c93.627,0,169.803-76.175,169.803-169.802C351.315,87.883,275.139,11.71,181.512,11.71z"></path></g></g></g></svg>`;
        }
    })

    // Song ka duration change hona chahiye as it plays.
    currentSong.addEventListener("timeupdate", () => {
        // console.log(formatTime(currentSong.currentTime), formatTime(currentSong.duration));
        document.querySelector(".current-time").innerHTML = formatTime(currentSong.currentTime);
        document.querySelector(".total-time").innerHTML = formatTime(currentSong.duration);
        document.querySelector(".tracker").style.left = ((currentSong.currentTime / currentSong.duration) * 100) - 1 + "%";
        
        // Agar current song khatam ho jaaye toh next song autoplay hona chahiye.
        if (currentSong.currentTime == currentSong.duration) {
            let index = songs.indexOf("<tt>" + (currentSong.src).split("/Bozify/songs/")[1].replace("%3C/tt%3E", "").replace("%3Ctt%3E", "") + "</tt>");
            if ((index + 1) < songs.length) {
                // playMusic("/Bozify/songs/" + songName[index + 1].replace("<tt>", "").replaceAll(" ", "_") + "-" + artistName[index + 1].replace("</tt>", "").replaceAll(" , ", ",").replaceAll(" ", "_") + ".mp3");
				playMusic("/Bozify/songs/" + songName[index + 1].replaceAll(" ", "_") + "-" + artistName[index + 1].replaceAll(" , ", ",").replaceAll(" ", "_") + ".mp3");
            }
        }
    });

    // We can get the location by formula current_location = (current_time / total_time) * 100
    
    // Seekbar ka position change hona chahiye as it plays.
    document.querySelector(".seekbar").addEventListener("click", e => {
        let location = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".tracker").style.left = location + "%";
        currentSong.currentTime = ((currentSong.duration) * location) / 100;
    })

    // Working of previous and next buttons
    // console.log(songs);
    // console.log(songs[0]);
    // console.log(songs.length)
    // console.log(currentSong.src.split("/Bozify/songs/")[1]);
    // console.log(songs.indexOf(currentSong.src.split("/Bozify/songs/")[1]));
    // console.log(("/Bozify/songs/" + songName[0 + 1]).replaceAll(" ", "_") + "-" + artistName[0 + 1].replaceAll(" , ", ",").replaceAll(" ", "_") + ".mp3");
	
	console.log((currentSong.src).split("/Bozify/songs/")[1].replace("%3C/tt%3E", "").replace("%3Ctt%3E", ""));
    previous.addEventListener("click", () => {
        let index = songs.indexOf("<tt>" + (currentSong.src).split("/Bozify/songs/")[1].replace("%3C/tt%3E", "").replace("%3Ctt%3E", "") + "</tt>");
        // console.log(index);
        // currentSong.pause();
        if ((index - 1) >= 0) {
            playMusic("/Bozify/songs/" + songName[index - 1].replaceAll(" ", "_") + "-" + artistName[index - 1].replaceAll(" , ", ",").replaceAll(" ", "_") + ".mp3");
        }

        // if (index == 0) {
        //     previous.style.display = "none";
        // }
        // else {
        //     previous.style.display = "block";
        // }
    })

    next.addEventListener("click", () => {
        let index = songs.indexOf("<tt>" + (currentSong.src).split("/Bozify/songs/")[1].replace("%3C/tt%3E", "").replace("%3Ctt%3E", "") + "</tt>");
        // console.log(index);
        // currentSong.pause();
        if ((index + 1) < songs.length) {
            playMusic("/Bozify/songs/" + songName[index + 1].replaceAll(" ", "_") + "-" + artistName[index + 1].replaceAll(" , ", ",").replaceAll(" ", "_") + ".mp3");
        }

        // if (index == songs.length + 1) {
        //     next.style.display = "none";
        // }
        // else {
        //     next.style.display = "block";
        // }
    })

    document.querySelector(".vol-adjust").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        currentSong.volume = parseInt(e.target.value) / 100;
        // console.log(currentSong.volume);
        if (currentSong.volume == 0) {
            document.querySelector(".vol-img").innerHTML = `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5303 1.46967C22.8232 1.76256 22.8232 2.23744 22.5303 2.53033L2.53033 22.5303C2.23744 22.8232 1.76256 22.8232 1.46967 22.5303C1.17678 22.2374 1.17678 21.7626 1.46967 21.4697L5.19121 17.7481C4.30803 17.7386 3.63551 17.6859 3.02496 17.4034C2.33016 17.082 1.66141 16.4527 1.29828 15.7788C0.905663 15.0501 0.859593 14.2881 0.794087 13.2045C0.791489 13.1615 0.788861 13.1181 0.786179 13.0741C0.763733 12.7058 0.75 12.3416 0.75 12C0.75 11.6585 0.763733 11.2943 0.786179 10.926C0.788861 10.882 0.791489 10.8385 0.794087 10.7955C0.859593 9.712 0.905663 8.94996 1.29828 8.22128C1.66141 7.54732 2.33016 6.9181 3.02496 6.59664C3.77659 6.24889 4.62215 6.24933 5.83906 6.24998C5.89202 6.25 5.94569 6.25003 6.00008 6.25003C6.5366 6.25003 6.71956 6.24762 6.89132 6.21862C7.0752 6.18757 7.25452 6.13378 7.42513 6.05848C7.58448 5.98815 7.73856 5.88944 8.18647 5.59411L8.45324 5.41822C9.68412 4.60663 10.6712 3.95576 11.4848 3.56055C12.3108 3.15928 13.1241 2.9361 13.9423 3.21531C14.2142 3.30809 14.4759 3.44128 14.7109 3.60646C15.3503 4.05581 15.6552 4.74135 15.827 5.52977C15.9146 5.93197 15.9746 6.39532 16.0205 6.91886L21.4697 1.46967C21.7626 1.17678 22.2374 1.17678 22.5303 1.46967ZM14.6104 8.32893C14.5528 7.22797 14.4889 6.43466 14.3614 5.84912C14.2254 5.22532 14.0443 4.97136 13.8485 4.8337C13.7297 4.75023 13.5952 4.68181 13.4578 4.63492C13.2087 4.54989 12.8525 4.56376 12.1402 4.90978C11.426 5.25675 10.5209 5.85164 9.2311 6.70206L9.01216 6.84641C8.9955 6.85739 8.97907 6.86824 8.96284 6.87894C8.58264 7.12973 8.31931 7.30343 8.03077 7.43078C7.74641 7.55627 7.44756 7.64593 7.14108 7.69768C6.83009 7.7502 6.51464 7.75013 6.05917 7.75004C6.03973 7.75004 6.02004 7.75003 6.00008 7.75003C4.55641 7.75003 4.06911 7.76631 3.6548 7.958C3.25445 8.14323 2.82804 8.54443 2.6188 8.93278C2.40052 9.33789 2.36045 9.75309 2.2834 11.0173C2.26225 11.3642 2.25 11.6968 2.25 12C2.25 12.3033 2.26225 12.6358 2.2834 12.9828C2.36045 14.247 2.40052 14.6622 2.6188 15.0673C2.82804 15.4556 3.25445 15.8568 3.6548 16.0421C4.06911 16.2338 4.55641 16.25 6.00008 16.25C6.02004 16.25 6.03973 16.25 6.05917 16.25C6.29891 16.25 6.49985 16.2499 6.68178 16.2576L14.6104 8.32893ZM20.2645 6.3164C20.642 6.14605 21.0862 6.31403 21.2565 6.6916C21.7236 7.72674 22.25 9.45958 22.25 12C22.25 14.1916 21.8582 15.7829 21.45 16.8442C21.2462 17.374 21.0394 17.7692 20.8775 18.039C20.7966 18.1738 20.727 18.2772 20.6748 18.3504C20.6486 18.3869 20.6269 18.4159 20.6102 18.4375C20.6018 18.4483 20.5948 18.4572 20.5891 18.4643L20.5816 18.4736L20.5786 18.4772L20.5773 18.4788C20.577 18.4791 20.5762 18.4801 20 18L20.5762 18.4801C20.311 18.7983 19.8381 18.8413 19.5199 18.5762C19.2032 18.3123 19.1591 17.8426 19.42 17.5244C19.4207 17.5237 19.4218 17.5222 19.4235 17.52C19.4288 17.5132 19.4393 17.4994 19.4542 17.4785C19.4839 17.4368 19.5315 17.3668 19.5913 17.2673C19.7106 17.0683 19.8788 16.751 20.05 16.3058C20.3918 15.4171 20.75 14.0084 20.75 12C20.75 9.67366 20.2694 8.15099 19.8893 7.30849C19.7189 6.93093 19.8869 6.48676 20.2645 6.3164ZM18.164 9.26566C18.5696 9.18146 18.9666 9.44198 19.0508 9.84754C19.1609 10.378 19.25 11.0889 19.25 12C19.25 13.1101 19.1178 13.9228 18.9765 14.4738C18.9059 14.749 18.8333 14.9579 18.7745 15.1051C18.7451 15.1787 18.7191 15.2367 18.6986 15.2797C18.6884 15.3012 18.6795 15.3189 18.6723 15.333L18.6626 15.3514L18.6588 15.3585L18.6571 15.3615L18.6563 15.3629C18.6562 15.3632 18.6556 15.3642 18.0276 15.0153L18.6556 15.3642C18.4545 15.7263 17.9979 15.8568 17.6358 15.6556C17.2768 15.4562 17.1455 15.0056 17.3393 14.645L17.3443 14.6348C17.3512 14.6204 17.3643 14.5917 17.3818 14.548C17.4167 14.4608 17.4691 14.3135 17.5235 14.1012C17.6322 13.6772 17.75 12.9899 17.75 12C17.75 11.1873 17.6706 10.5787 17.5821 10.1525C17.4979 9.74689 17.7584 9.34986 18.164 9.26566ZM15.5 11.25C15.9142 11.25 16.25 11.5858 16.25 12C16.25 12.552 16.2137 13.5253 16.1619 14.6402L16.1592 14.6977C16.0914 16.1576 16.037 17.3296 15.8778 18.2139C15.7159 19.1134 15.417 19.8974 14.7109 20.3936C14.4759 20.5588 14.2142 20.692 13.9423 20.7848C13.2003 21.038 12.4627 20.8773 11.7204 20.549C10.9875 20.2248 10.1277 19.6808 9.08893 19.0001C8.74247 18.7731 8.64566 18.3082 8.87269 17.9617C9.09972 17.6153 9.56462 17.5184 9.91107 17.7455C10.9698 18.4393 11.7264 18.9114 12.3272 19.1772C12.9187 19.4389 13.2324 19.4421 13.4578 19.3651C13.5952 19.3183 13.7297 19.2498 13.8485 19.1664C14.0651 19.0141 14.2626 18.7195 14.4015 17.9482C14.541 17.1733 14.5924 16.1014 14.6635 14.5706C14.7156 13.451 14.75 12.5118 14.75 12C14.75 11.5858 15.0858 11.25 15.5 11.25Z" fill="#1C274C"></path> </g></svg>`;
        }
        else if (currentSong.volume <= 0.50) {
            document.querySelector(".vol-img").innerHTML = `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1402 4.90978C11.426 5.25674 10.5209 5.85164 9.2311 6.70205L9.01216 6.84641C8.9955 6.8574 8.97905 6.86824 8.96283 6.87895C8.58263 7.12974 8.31931 7.30343 8.03077 7.43078C7.74641 7.55627 7.44756 7.64593 7.14108 7.69768C6.83009 7.7502 6.51464 7.75013 6.05918 7.75004C6.03974 7.75004 6.02004 7.75003 6.00008 7.75003C4.55641 7.75003 4.06911 7.76631 3.6548 7.958C3.25445 8.14323 2.82804 8.54443 2.6188 8.93278C2.40052 9.33789 2.36045 9.75309 2.2834 11.0173C2.26225 11.3642 2.25 11.6968 2.25 12C2.25 12.3033 2.26225 12.6358 2.2834 12.9828C2.36045 14.247 2.40052 14.6622 2.6188 15.0673C2.82804 15.4556 3.25445 15.8568 3.6548 16.0421C4.06911 16.2338 4.55641 16.25 6.00008 16.25C6.02004 16.25 6.03973 16.25 6.05917 16.25C6.51464 16.2499 6.83009 16.2499 7.14108 16.3024C7.44756 16.3541 7.74641 16.4438 8.03077 16.5693C8.31931 16.6966 8.58263 16.8703 8.96282 17.1211C8.97905 17.1318 8.99549 17.1427 9.01216 17.1537L9.2311 17.298C10.5209 18.1484 11.426 18.7433 12.1402 19.0903C12.8525 19.4363 13.2087 19.4502 13.4578 19.3651C13.5952 19.3183 13.7297 19.2498 13.8485 19.1664C14.0651 19.0141 14.2626 18.7195 14.4015 17.9482C14.541 17.1733 14.5924 16.1014 14.6635 14.5706C14.7156 13.451 14.75 12.5118 14.75 12C14.75 11.4883 14.7156 10.549 14.6635 9.42946C14.5924 7.89871 14.541 6.82677 14.4015 6.05188C14.2626 5.28052 14.0651 4.98595 13.8485 4.8337C13.7297 4.75023 13.5952 4.68181 13.4578 4.63492C13.2087 4.54989 12.8525 4.56376 12.1402 4.90978ZM11.4848 3.56055C12.3108 3.15928 13.1241 2.9361 13.9423 3.21531C14.2142 3.30809 14.4759 3.44128 14.7109 3.60646C15.417 4.10266 15.7159 4.88667 15.8778 5.78612C16.037 6.67048 16.0914 7.84243 16.1592 9.30232L16.1619 9.35983C16.2137 10.4748 16.25 11.448 16.25 12C16.25 12.552 16.2137 13.5253 16.1619 14.6402L16.1592 14.6977C16.0914 16.1576 16.037 17.3296 15.8778 18.2139C15.7159 19.1134 15.417 19.8974 14.7109 20.3936C14.4759 20.5588 14.2142 20.692 13.9423 20.7848C13.1241 21.064 12.3108 20.8408 11.4848 20.4395C10.6712 20.0443 9.68413 19.3934 8.45327 18.5819L8.18647 18.4059C7.73856 18.1106 7.58448 18.0119 7.42513 17.9416C7.25452 17.8663 7.0752 17.8125 6.89132 17.7814C6.71956 17.7524 6.5366 17.75 6.00008 17.75C5.94569 17.75 5.89203 17.7501 5.83907 17.7501C4.62215 17.7507 3.77659 17.7512 3.02496 17.4034C2.33016 17.082 1.66141 16.4527 1.29828 15.7788C0.905663 15.0501 0.859593 14.2881 0.794087 13.2045C0.791489 13.1615 0.788861 13.1181 0.786179 13.0741C0.763733 12.7058 0.75 12.3416 0.75 12C0.75 11.6585 0.763733 11.2943 0.786179 10.926C0.788861 10.882 0.791489 10.8385 0.794087 10.7955C0.859593 9.712 0.905663 8.94996 1.29828 8.22128C1.66141 7.54732 2.33016 6.9181 3.02496 6.59664C3.77659 6.24889 4.62215 6.24933 5.83906 6.24998C5.89203 6.25 5.94569 6.25003 6.00008 6.25003C6.5366 6.25003 6.71956 6.24762 6.89132 6.21862C7.0752 6.18757 7.25452 6.13377 7.42513 6.05848C7.58448 5.98815 7.73856 5.88945 8.18647 5.59411L8.45328 5.4182C9.68414 4.60662 10.6712 3.95576 11.4848 3.56055Z" fill="#1C274C"></path> <path d="M18.6563 8.63711C18.4552 8.27502 17.9979 8.14325 17.6358 8.34441C17.2768 8.54386 17.1455 8.99444 17.3393 9.35501C17.3462 9.36941 17.3643 9.40837 17.3818 9.45201C17.4167 9.53922 17.4691 9.68653 17.5235 9.89881C17.6322 10.3229 17.75 11.0101 17.75 12C17.75 12.9899 17.6322 13.6772 17.5235 14.1013C17.4691 14.3135 17.4167 14.4608 17.3818 14.5481L17.3393 14.645C17.1455 15.0056 17.2768 15.4562 17.6358 15.6557C17.9979 15.8568 18.4711 15.6951 18.6723 15.333C18.6795 15.319 18.6884 15.3012 18.6986 15.2797C18.7191 15.2367 18.7451 15.1787 18.7745 15.1051C18.8333 14.958 18.9059 14.749 18.9765 14.4738C19.1178 13.9229 19.25 13.1102 19.25 12C19.25 10.8899 19.1178 10.0772 18.9765 9.52625C18.9059 9.25103 18.8333 9.04209 18.7745 8.89493C18.7451 8.82138 18.7191 8.76338 18.6986 8.72036C18.6884 8.69885 18.6636 8.65118 18.6563 8.63711Z" fill="#1C274C"></path> </g></svg>`;
        }
        else {
            document.querySelector(".vol-img").innerHTML = `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1402 4.90978C11.426 5.25674 10.5209 5.85164 9.2311 6.70205L9.01216 6.84641C8.9955 6.8574 8.97905 6.86824 8.96283 6.87895C8.58263 7.12974 8.31931 7.30343 8.03077 7.43078C7.74641 7.55627 7.44756 7.64593 7.14108 7.69768C6.83009 7.7502 6.51464 7.75013 6.05918 7.75004C6.03974 7.75004 6.02004 7.75003 6.00008 7.75003C4.55641 7.75003 4.06911 7.76631 3.6548 7.958C3.25445 8.14323 2.82804 8.54443 2.6188 8.93278C2.40052 9.33789 2.36045 9.75309 2.2834 11.0173C2.26225 11.3642 2.25 11.6968 2.25 12C2.25 12.3033 2.26225 12.6358 2.2834 12.9828C2.36045 14.247 2.40052 14.6622 2.6188 15.0673C2.82804 15.4556 3.25445 15.8568 3.6548 16.0421C4.06911 16.2338 4.55641 16.25 6.00008 16.25C6.02004 16.25 6.03973 16.25 6.05917 16.25C6.51464 16.2499 6.83009 16.2499 7.14108 16.3024C7.44756 16.3541 7.74641 16.4438 8.03077 16.5693C8.31931 16.6966 8.58263 16.8703 8.96282 17.1211C8.97905 17.1318 8.99549 17.1427 9.01216 17.1537L9.2311 17.298C10.5209 18.1484 11.426 18.7433 12.1402 19.0903C12.8525 19.4363 13.2087 19.4502 13.4578 19.3651C13.5952 19.3183 13.7297 19.2498 13.8485 19.1664C14.0651 19.0141 14.2626 18.7195 14.4015 17.9482C14.541 17.1733 14.5924 16.1014 14.6635 14.5706C14.7156 13.451 14.75 12.5118 14.75 12C14.75 11.4883 14.7156 10.549 14.6635 9.42946C14.5924 7.89871 14.541 6.82677 14.4015 6.05188C14.2626 5.28052 14.0651 4.98595 13.8485 4.8337C13.7297 4.75023 13.5952 4.68181 13.4578 4.63492C13.2087 4.54989 12.8525 4.56376 12.1402 4.90978ZM11.4848 3.56055C12.3108 3.15928 13.1241 2.9361 13.9423 3.21531C14.2142 3.30809 14.4759 3.44128 14.7109 3.60646C15.417 4.10266 15.7159 4.88667 15.8778 5.78612C16.037 6.67048 16.0914 7.84243 16.1592 9.30232L16.1619 9.35983C16.2137 10.4748 16.25 11.448 16.25 12C16.25 12.552 16.2137 13.5253 16.1619 14.6402L16.1592 14.6977C16.0914 16.1576 16.037 17.3296 15.8778 18.2139C15.7159 19.1134 15.417 19.8974 14.7109 20.3936C14.4759 20.5588 14.2142 20.692 13.9423 20.7848C13.1241 21.064 12.3108 20.8408 11.4848 20.4395C10.6712 20.0443 9.68413 19.3934 8.45327 18.5819L8.18647 18.4059C7.73856 18.1106 7.58448 18.0119 7.42513 17.9416C7.25452 17.8663 7.0752 17.8125 6.89132 17.7814C6.71956 17.7524 6.5366 17.75 6.00008 17.75C5.94569 17.75 5.89203 17.7501 5.83907 17.7501C4.62215 17.7507 3.77659 17.7512 3.02496 17.4034C2.33016 17.082 1.66141 16.4527 1.29828 15.7788C0.905663 15.0501 0.859593 14.2881 0.794087 13.2045C0.791489 13.1615 0.788861 13.1181 0.786179 13.0741C0.763733 12.7058 0.75 12.3416 0.75 12C0.75 11.6585 0.763733 11.2943 0.786179 10.926C0.788861 10.882 0.791489 10.8385 0.794087 10.7955C0.859593 9.712 0.905663 8.94996 1.29828 8.22128C1.66141 7.54732 2.33016 6.9181 3.02496 6.59664C3.77659 6.24889 4.62215 6.24933 5.83906 6.24998C5.89203 6.25 5.94569 6.25003 6.00008 6.25003C6.5366 6.25003 6.71956 6.24762 6.89132 6.21862C7.0752 6.18757 7.25452 6.13377 7.42513 6.05848C7.58448 5.98815 7.73856 5.88945 8.18647 5.59411L8.45328 5.4182C9.68414 4.60662 10.6712 3.95576 11.4848 3.56055ZM19.5199 5.42408C19.8381 5.1589 20.311 5.2019 20.5762 5.52011L20 6.00024C20.5762 5.52011 20.5762 5.52011 20.5762 5.52011L20.5773 5.52148L20.5786 5.52303L20.5816 5.52664L20.5891 5.53591C20.5948 5.543 20.6018 5.55194 20.6102 5.56272C20.6269 5.5843 20.6486 5.6133 20.6748 5.64986C20.727 5.723 20.7966 5.8264 20.8775 5.96125C21.0394 6.23106 21.2462 6.62623 21.45 7.15601C21.8582 8.21738 22.25 9.80868 22.25 12.0002C22.25 14.1918 21.8582 15.7831 21.45 16.8445C21.2462 17.3743 21.0394 17.7694 20.8775 18.0392C20.7966 18.1741 20.727 18.2775 20.6748 18.3506C20.6486 18.3872 20.6269 18.4162 20.6102 18.4378C20.6052 18.4442 20.6007 18.45 20.5966 18.4551C20.5939 18.4586 20.5914 18.4617 20.5891 18.4646L20.5816 18.4739L20.5786 18.4775L20.5773 18.479C20.5773 18.479 20.5762 18.4804 20 18.0002L20.5762 18.4804C20.311 18.7986 19.8381 18.8416 19.5199 18.5764C19.2032 18.3125 19.1591 17.8429 19.42 17.5247M19.42 17.5247C19.42 17.5247 19.4218 17.5224 19.4235 17.5202C19.4288 17.5134 19.4393 17.4996 19.4542 17.4788C19.4839 17.4371 19.5315 17.367 19.5913 17.2675C19.7106 17.0686 19.8788 16.7512 20.05 16.306C20.3918 15.4174 20.75 14.0087 20.75 12.0002C20.75 9.99181 20.3918 8.58311 20.05 7.69448C19.8788 7.24926 19.7106 6.93192 19.5913 6.73299C19.5315 6.63347 19.4839 6.56343 19.4542 6.52172C19.4393 6.50086 19.4288 6.48709 19.4235 6.48024C19.4218 6.47803 19.42 6.47578 19.42 6.47578L19.4235 6.48024L19.422 6.47812L19.42 6.47578C19.1591 6.15763 19.2032 5.68797 19.5199 5.42408M17.6358 8.34463C17.9979 8.14347 18.4545 8.27392 18.6556 8.63601L18.0276 8.9849C18.6556 8.63602 18.6556 8.63601 18.6556 8.63601L18.6563 8.63732L18.6571 8.63872L18.6588 8.64176L18.6626 8.64888L18.6723 8.66723C18.6795 8.6813 18.6884 8.69906 18.6986 8.72057C18.7191 8.76359 18.7451 8.82159 18.7745 8.89514C18.8333 9.0423 18.9059 9.25124 18.9765 9.52646C19.1178 10.0774 19.25 10.8901 19.25 12.0002C19.25 13.1104 19.1178 13.9231 18.9765 14.474C18.9059 14.7492 18.8333 14.9582 18.7745 15.1053C18.7451 15.1789 18.7191 15.2369 18.6986 15.2799C18.6884 15.3014 18.6795 15.3192 18.6723 15.3333L18.6626 15.3516L18.6588 15.3587L18.6571 15.3618L18.6563 15.3632C18.6563 15.3632 18.6556 15.3645 18.0276 15.0156L18.6556 15.3645C18.4545 15.7266 17.9979 15.857 17.6358 15.6559C17.2768 15.4564 17.1455 15.0058 17.3393 14.6453L17.3443 14.635C17.3512 14.6206 17.3643 14.5919 17.3818 14.5483C17.4167 14.4611 17.4691 14.3137 17.5235 14.1015C17.6322 13.6774 17.75 12.9901 17.75 12.0002C17.75 11.0104 17.6322 10.3231 17.5235 9.89902C17.4691 9.68675 17.4167 9.53944 17.3818 9.45222C17.3643 9.40858 17.3512 9.37986 17.3443 9.36547L17.3393 9.35523C17.1455 8.99465 17.2768 8.54408 17.6358 8.34463Z" fill="#1C274C"></path> </g></svg>`;
        }
    });
	
	// Lyrics Section
	lyricsWindow = document.querySelector(".lyrics-window");
	    lyrics = document.querySelector(".full-lyrics");
	    lyricsClose = document.querySelector(".close-lyrics");
	    lyrics.addEventListener("click", () => {
	        lyricsWindow.style.display = "flex";
	        //syncAudioLyrics();
	    })
	    lyricsClose.addEventListener("click", () => {
	        lyricsWindow.style.display = "none";
	    })
}

function syncAudioLyrics() {
            lyrics = [
                [[{ time: 2, word: "You" },
                { time: 2.5, word: "may" },
                { time: 3, word: "not" },
                { time: 3.5, word: "think" },
                { time: 4, word: "I'm" },
                { time: 4.5, word: "pretty," }],
                [{ time: 5, word: "But" },
                { time: 5.5, word: "don't" },
                { time: 6, word: "judge" },
                { time: 6.3, word: "on" },
                { time: 6.8, word: "what" },
                { time: 7, word: "you" },
                { time: 7.8, word: "see," }],
                [{ time: 8.8, word: "I'll" },
                { time: 9, word: "eat" },
                { time: 9.5, word: "myself" },
                { time: 10, word: "if" },
                { time: 10.2, word: "you" },
                { time: 10.8, word: "can" },
                { time: 11, word: "find" }],
                [{ time: 11.5, word: "A" },
                { time: 12, word: "smarter" },
                { time: 12.5, word: "hat" },
                { time: 13, word: "than" },
                { time: 13.5, word: "me." }]],

                [[{ time: 14.8, word: "You" },
                { time: 15, word: "can" },
                { time: 15.5, word: "keep" },
                { time: 16, word: "your" },
                { time: 16.5, word: "bowlers" },
                { time: 17, word: "black," }],
                [{ time: 17.5, word: "Your" },
                { time: 18, word: "top" },
                { time: 18.5, word: "hats" },
                { time: 18.8, word: "sleek" },
                { time: 19, word: "and" },
                { time: 19.5, word: "tall," }],
                [{ time: 20.5, word: "For" },
                { time: 21, word: "I'm" },
                { time: 21.5, word: "the" },
                { time: 22, word: "Hogwarts" },
                { time: 22.8, word: "Sorting" },
                { time: 23.2, word: "Hat" }],
                [{ time: 23.8, word: "And" },
                { time: 24, word: "I" },
                { time: 24.5, word: "can" },
                { time: 25, word: "cap" },
                { time: 25.5, word: "them" },
                { time: 25.8, word: "all." }]],

                [[{ time: 26.8, word: "There's" },
                { time: 27, word: "nothing" },
                { time: 27.5, word: "hidden" },
                { time: 28, word: "in" },
                { time: 29, word: "your" },
                { time: 29.3, word: "head" }],
                [{ time: 29.8, word: "The" },
                { time: 30, word: "Sorting" },
                { time: 31, word: "Hat" },
                { time: 31.2, word: "can't" },
                { time: 31.8, word: "see," }],
                [{ time: 32.8, word: "So" },
                { time: 33, word: "try" },
                { time: 33.5, word: "me" },
                { time: 34, word: "on" },
                { time: 34.3, word: "and" },
                { time: 34.8, word: "I" },
                { time: 35, word: "will" },
                { time: 35.3, word: "tell" },
                { time: 35.8, word: "you" }],
                [{ time: 36, word: "Where" },
                { time: 36.2, word: "you" },
                { time: 36.8, word: "ought" },
                { time: 37, word: "to" },
                { time: 37.8, word: "be." }]],

                [[{ time: 38.5, word: "You" },
                { time: 39, word: "might" },
                { time: 39.5, word: "belong" },
                { time: 40, word: "in" },
                { time: 40.5, word: "Gryffindor," }],
                [{ time: 41.8, word: "Where" },
                { time: 42, word: "dwell" },
                { time: 42.5, word: "the" },
                { time: 43, word: "brave" },
                { time: 43.2, word: "at" },
                { time: 43.8, word: "heart," }],
                [{ time: 44.5, word: "Their" },
                { time: 45, word: "daring," },
                { time: 46, word: "nerve" },
                { time: 46.5, word: "and" },
                { time: 47, word: "chivalry" }],
                [{ time: 47.2, word: "Set" },
                { time: 48, word: "Gryffindors" },
                { time: 49, word: "apart." }]],

                [[{ time: 50.5, word: "You" },
                { time: 51, word: "might" },
                { time: 51.5, word: "belong" },
                { time: 52, word: "in" },
                { time: 52.5, word: "Hufflepuff," }],
                [{ time: 53, word: "Where" },
                { time: 54, word: "they" },
                { time: 54.5, word: "are" },
                { time: 55, word: "just" },
                { time: 55.2, word: "and" },
                { time: 55.8, word: "loyal," }],
                [{ time: 56.5, word: "Those" },
                { time: 57, word: "patient" },
                { time: 58, word: "Hufflepuffs" },
                { time: 59, word: "are" },
                { time: 59.2, word: "true" }],
                [{ time: 59.8, word: "And" },
                { time: 60, word: "unafraid" },
                { time: 61, word: "of" },
                { time: 61.2, word: "toil." }]],

                [[{ time: 63, word: "Or" },
                { time: 63.2, word: "yet" },
                { time: 63.8, word: "in" },
                { time: 64, word: "wise" },
                { time: 64.2, word: "old" },
                { time: 64.8, word: "Ravenclaw," }],
                [{ time: 65.8, word: "If" },
                { time: 66, word: "you've" },
                { time: 66.2, word: "a" },
                { time: 66.8, word: "ready" },
                { time: 67, word: "mind," }],
                [{ time: 68.5, word: "Where" },
                { time: 69, word: "those" },
                { time: 69.2, word: "of" },
                { time: 69.8, word: "wit" },
                { time: 70, word: "and" },
                { time: 70.5, word: "learning," }],
                [{ time: 72, word: "Will" },
                { time: 72.5, word: "always" },
                { time: 73, word: "find" },
                { time: 73.3, word: "their" },
                { time: 73.8, word: "kind." }]],

                [[{ time: 75, word: "Or" },
                { time: 75.5, word: "perhaps" },
                { time: 76, word: "in" },
                { time: 76.5, word: "Slytherin" }],
                [{ time: 77.8, word: "You'll" },
                { time: 78, word: "make" },
                { time: 78.5, word: "your" },
                { time: 79, word: "real" },
                { time: 79.8, word: "friends," }],
                [{ time: 80.5, word: "Those" },
                { time: 81, word: "cunning" },
                { time: 81.5, word: "folks" },
                { time: 82, word: "use" },
                { time: 82.8, word: "any" },
                { time: 83.5, word: "means" }],
                [{ time: 84, word: "To" },
                { time: 84.5, word: "achieve" },
                { time: 85, word: "their" },
                { time: 85.5, word: "ends." }]],

                [[{ time: 86.5, word: "So" },
                { time: 87, word: "put" },
                { time: 87.2, word: "me" },
                { time: 87.8, word: "on!" },
                { time: 88, word: "Don't" },
                { time: 88.5, word: "be" },
                { time: 89, word: "afraid!" }],
                [{ time: 89.5, word: "And" },
                { time: 90, word: "don't" },
                { time: 90.5, word: "get" },
                { time: 91, word: "in" },
                { time: 91.2, word: "a" },
                { time: 91.8, word: "flap," }],
                [{ time: 92.5, word: "You're" },
                { time: 93, word: "in" },
                { time: 93.2, word: "safe" },
                { time: 93.8, word: "hands" }],
                [{ time: 94, word: "(though" },
                { time: 94.5, word: "I" },
                { time: 95, word: "have" },
                { time: 95.2, word: "none)" }],
                [{ time: 95.8, word: "For" },
                { time: 96, word: "I'm" },
                { time: 96.5, word: "a" },
                { time: 97, word: "Thinking" },
                { time: 97.5, word: "Cap!" }]]
            ]

            // Adjust seconds from each time to sync better with audio
            lyrics.forEach(stanza => {
                stanza.forEach(line => {
                    line.forEach(word => {
                        word.time = +(word.time - 0.5).toFixed(2);
                    });
                });
            });


            // Get the content div and audio element.
            content = document.querySelector('.content');
            audio = document.getElementById('audio');
            // Extract all the time and word objects from lyrics. It will be an array of objects each object having two variables time and word.
            extractedLyrics = [];
            lineArray = [];
            stanzaArray = [];

            // div.content -> div.lyric-stanza -> div.lyric-line -> span.lyric-word
            lyrics.forEach(stnz => {
                const stanza = document.createElement('div');
                stanza.classList.add('lyric-stanza');
                content.appendChild(stanza);
                stanzaArray.push(stanza);
                // Created a div for each stanza and appended it to the content div.

                stnz.forEach(ln => {
                    const line = document.createElement('div');
                    line.classList.add('lyric-line');
                    stanza.appendChild(line);
                    lineArray.push(line);

                    ln.forEach(w => {
                        const word = document.createElement('span');
                        word.textContent = w.word + " ";
                        word.classList.add('lyric-word');
                        line.appendChild(word);

                        // Extract all the time and word objects from lyrics.
                        extractedLyrics.push(w);
                    });
                });
            });

            // Selecting all the word elements.
            const stanzas = document.querySelectorAll('.lyric-stanza');
            const lines = document.querySelectorAll('.lyric-line');
            const words = document.querySelectorAll('.lyric-word');
            let i = 0;

            // NOTE: You can't use the document.querySelectorAll() like methods to iterate through an array or to return a value at a specific index value, you will have to create array for each of them and then use it as regular elements.
            /* console.log(stanzas[0]) */

            // Initially set all the stanzas hidden.
            stanzas.forEach(stanza => stanza.style.display = 'none');

            audio.addEventListener('timeupdate', () => {
                // Getting the current audio time of the audio file by using currentTime property of audio element.
                const currentTime = audio.currentTime;

                // Highlight only the next word if its time has passed
                if (i < words.length && currentTime >= extractedLyrics[i].time) {
                    // Every time set all the stanzas hidden.
                    stanzas.forEach(stanza => stanza.style.display = 'none');

                    if (currentTime < 14) {
                        stanzas[0].style.display = 'block';
                    }
                    else if (currentTime < 26.2) {
                        stanzas[1].style.display = 'block';
                    }
                    else if (currentTime < 38) {
                        stanzas[2].style.display = 'block';
                    }
                    else if (currentTime < 50.2) {
                        stanzas[3].style.display = 'block';
                    }
                    else if (currentTime < 62) {
                        stanzas[4].style.display = 'block';
                    }
                    else if (currentTime < 74.5) {
                        stanzas[5].style.display = 'block';
                    }
                    else if (currentTime < 86) {
                        stanzas[6].style.display = 'block';
                    }
                    else if (currentTime < 97.8) {
                        stanzas[7].style.display = 'block';
                    }
                    else {
                        stanzas.forEach(stanza => stanza.style.display = 'none');
                    }

                    // Remove highlight class from all words and add highlight class to the current word
                    if (i > 0) words[i - 1].classList.remove('highlight');
                    words[i].classList.add('highlight');

                    // Remove all the highlights when the audio ends
                    if (i === words.length) {
                        setTimeout(() => {
                            words[i - 1].classList.remove('highlight');
                        }, 2000);
                    }

                    i++;
                    index++;
                }
            });
            // If i< lyrics.length and current time of audio is greater than or equal to the time of the current word, then remove highlight class from all words and add highlight class to the current word and translate the content div upwards by 1.5cm for each word.
        }

Main();