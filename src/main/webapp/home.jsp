<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="jakarta.servlet.http.HttpSession" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Bozify</title>
<link rel="icon" href="icon.ico" type="image/png/ico">
<link rel="stylesheet" type="text/css" href="home.css">
</head>
<body>
<div class="window">
        <div class="navbar">
            <div class="logo">
                <img src="icon.png" alt="">
            </div>
            
            <%
HttpSession sessionHome = request.getSession(false);
// Agar current session exist karta hai toh usey get karne ka kaam karta hai.
// "false" ka matlab yeh ki agar session exist nahi karta hai toh woh new session create NAHI karega.
// Since LoginServlet.java mein bhi session name ka hi object hai so yaha name change karna padega session to sessionHome so that error na aaye of having the same name.
// Importing HttpSession at the top is mandatory.

if (sessionHome != null && sessionHome.getAttribute("username") != null){
	String username = (String) sessionHome.getAttribute("username");
	// Existing session se username attribute ka value as a string leke usko string variable mein store kar dega.
	
	username = username.substring(0,1).toUpperCase() + username.substring(1).toLowerCase();
	char logo = username.charAt(0);
%>

            <div class="headings">
                <p>Hey <%= username %>, let's get Bozified !!!</p>
            </div>

            <div class="profile">
                <div class="logout">
                    <a href="Logout">
                        <button><span>Logout</span></button>
                    </a>
                </div>
                <div class="logo"><button onclick="userLogoPanel()"><%= logo %></button></div>
            </div>
            <div class="user-logo-panel">
                <button class="close" onclick="userLogoPanelClose()">X</button>
                <ul>
                    <li><button onclick="setBg1()">Aesthetic Music</button></li>
                    <li><button onclick="setBg2()">Water Droplets</button></li>
                    <li><button onclick="setBg3()">Faint Bubbles</button></li>
                    <li><button onclick="setBg4()">Micro Bubbles</button></li>
                    <li><button onclick="setBg5()">Zoro</button></li>
                    <li><button onclick="setBg6()">Sand Pebbles</button></li>
                    <li><button onclick="setBg7()">Ocean Floor</button></li>
                    <li><button onclick="setBg8()">Smoke Screen</button></li>
                </ul>
            </div>
        </div>

<%
} else{
	response.sendRedirect("index.html");
	// Agar koi link ke through or any unauthorized means ke through home.jsp ko access karne ka try karega toh woh waapis index.html pe redirect ho jaayega.
}
%>

        <div class="content-interface">
            <div class="side-section">
                <div class="title" id="left-side-section-title">
                    <div class="icon">
                        <button class="hide-button" onclick="hideSidebar()">
                            <svg data-encore-id="icon" role="img" aria-hidden="true"
                                class="e-91000-icon e-91000-baseline e-91000-icon--auto-mirror" viewBox="0 0 16 16"
                                style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                                <path
                                    d="M10.97 5.47a.75.75 0 1 1 1.06 1.06L10.56 8l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z">
                                </path>
                                <path
                                    d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm.5 1.5H5v13H1.5zm13 13h-8v-13h8z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <p>Your Library</p>
                </div>
                <div class="container" id="left-side-section-inner-container">
                </div>
            </div>
            
            <div class="main-section">
                <div class="heading">
                    <p>Pick Play Repeat</p>
                    <button onclick="fullMain()">
                        <svg width="64px" height="64px" viewBox="0 0 48 48" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect>
                                <path d="M6 6L16 15.8995" stroke="#000000" stroke-width="4" stroke-linecap="round"
                                    stroke-linejoin="round">
                                </path>
                                <path d="M6 41.8995L16 32" stroke="#000000" stroke-width="4" stroke-linecap="round"
                                    stroke-linejoin="round">
                                </path>
                                <path d="M42.0001 41.8995L32.1006 32" stroke="#000000" stroke-width="4"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M41.8995 6L32 15.8995" stroke="#000000" stroke-width="4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M33 6H42V15" stroke="#000000" stroke-width="4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M42 33V42H33" stroke="#000000" stroke-width="4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M15 42H6V33" stroke="#000000" stroke-width="4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M6 15V6H15" stroke="#000000" stroke-width="4" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </g>
                        </svg>
                    </button>
                </div>
                <div class="cards-container">
                    <div class="title">
                        <p>Recommended for you</p>
                    </div>
                    <div class="cards">
                        
                    </div>
                </div>
            </div>

            <div class="current-play-section">
                <div class="container">
                    <div class="preview-clip">
                    </div>
                    <div class="title">
                        <div class="icon">
                            <button class="hide-button" onclick="hidePlayMenu()">
                                <svg fill="#000000" width="18px" height="18px" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve">
                                    <path
                                        d="M20,24H4c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v16C24,22.2,22.2,24,20,24z M4,2C2.9,2,2,2.9,2,4v16 c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2H4z">
                                    </path>
                                    <path d="M8,24c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v22C9,23.6,8.6,24,8,24z">
                                    </path>
                                    <path
                                        d="M17,13c-0.3,0-0.5-0.1-0.7-0.3l-3-3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3,3c0.4,0.4,0.4,1,0,1.4C17.5,12.9,17.3,13,17,13z">
                                    </path>
                                    <path
                                        d="M14,16c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l3-3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-3,3C14.5,15.9,14.3,16,14,16z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <p id="current-song-name">The Magical Sorting Hat</p>
                    </div>
                    <div class="info">
                        <div class="current-info-title">The Magical Sorting Hat</div>
                        <div class="current-info-artist">Leslie Phillips</div>
                    </div>
                    <div class="about-artist">
                        <div class="about-title">About the artist</div>
                        <img src="images/artist/leslie-phillips.jpg" alt="">
                        <div class="artist-details">
                            <div class="current-artist-name">Leslie Phillips</div>
                            <div class="description">Leslie Phillips was a British actor known for his charming voice
                                and comedic roles. He gained fame for his work in the Carry On films and later voice
                                roles like the Sorting Hat in Harry Potter.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="playbar">
            <div class="container">
                <div class="info">
                    <div class="cover-image"></div>
                    <div class="song-info">
                        <div class="name" id="playbar-song-name"></div>
                        <div class="artist" id="playbar-artist-name"></div>
                    </div>
                </div>
                <div class="controls">
                    <div class="control-buttons">
                        <button class="previous">
                            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M5 18C5 18 4.5 16 4.5 12C4.5 8 5 6 5 6M19 18C19 18 19.5 16 19.5 12C19.5 8 19 6 19 6C19 6 17 6.5 13.5 8.5C10 10.5 9 12 9 12C9 12 10 13.5 13.5 15.5C17 17.5 19 18 19 18Z"
                                        stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </button>

                        <button class="play">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 363.025 363.024"
                                xml:space="preserve" fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <g>
                                            <path style="fill:#030303;"
                                                d="M155.859,241.706c-3.605,0-7.188-0.863-10.37-2.499c-7.682-3.899-12.459-11.699-12.459-20.339 v-74.717c0-8.631,4.777-16.431,12.479-20.353c7.582-3.823,16.991-3.062,23.795,1.898l51.308,37.355 c5.878,4.286,9.389,11.182,9.389,18.455s-3.511,14.175-9.389,18.457l-51.308,37.362 C165.382,240.19,160.73,241.706,155.859,241.706z M155.868,133.032c-1.747,0-3.497,0.415-5.055,1.207 c-3.742,1.907-6.072,5.709-6.072,9.912v74.723c0,4.208,2.33,8.005,6.078,9.909c3.666,1.881,8.246,1.515,11.587-0.915 l51.311-37.367c2.859-2.081,4.574-5.443,4.574-8.988c0-3.543-1.715-6.902-4.574-8.995l-51.311-37.355 C160.496,133.77,158.238,133.032,155.868,133.032z">
                                            </path>
                                        </g>
                                        <g>
                                            <path style="fill:#030303;"
                                                d="M181.512,363.024C81.427,363.024,0,281.601,0,181.513C0,81.43,81.427,0,181.512,0 c100.089,0,181.513,81.43,181.513,181.513C363.025,281.601,281.601,363.024,181.512,363.024z M181.512,11.71 C87.88,11.71,11.71,87.883,11.71,181.513c0,93.627,76.17,169.802,169.802,169.802c93.627,0,169.803-76.175,169.803-169.802 C351.315,87.883,275.139,11.71,181.512,11.71z">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </button>

                        <button class="next">
                            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M5 18C5 18 4.5 16 4.5 12C4.5 8 5 6 5 6M19 18C19 18 19.5 16 19.5 12C19.5 8 19 6 19 6C19 6 17 6.5 13.5 8.5C10 10.5 9 12 9 12C9 12 10 13.5 13.5 15.5C17 17.5 19 18 19 18Z"
                                        stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div class="seekbar">
                        <div class="current-time"></div>
                        <div class="total-time"></div>
                        <div class="tracker"></div>
                    </div>
                </div>
                <div class="options">
                    <div class="volume">
                        <div class="vol-img">
                            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12.1402 4.90978C11.426 5.25674 10.5209 5.85164 9.2311 6.70205L9.01216 6.84641C8.9955 6.8574 8.97905 6.86824 8.96283 6.87895C8.58263 7.12974 8.31931 7.30343 8.03077 7.43078C7.74641 7.55627 7.44756 7.64593 7.14108 7.69768C6.83009 7.7502 6.51464 7.75013 6.05918 7.75004C6.03974 7.75004 6.02004 7.75003 6.00008 7.75003C4.55641 7.75003 4.06911 7.76631 3.6548 7.958C3.25445 8.14323 2.82804 8.54443 2.6188 8.93278C2.40052 9.33789 2.36045 9.75309 2.2834 11.0173C2.26225 11.3642 2.25 11.6968 2.25 12C2.25 12.3033 2.26225 12.6358 2.2834 12.9828C2.36045 14.247 2.40052 14.6622 2.6188 15.0673C2.82804 15.4556 3.25445 15.8568 3.6548 16.0421C4.06911 16.2338 4.55641 16.25 6.00008 16.25C6.02004 16.25 6.03973 16.25 6.05917 16.25C6.51464 16.2499 6.83009 16.2499 7.14108 16.3024C7.44756 16.3541 7.74641 16.4438 8.03077 16.5693C8.31931 16.6966 8.58263 16.8703 8.96282 17.1211C8.97905 17.1318 8.99549 17.1427 9.01216 17.1537L9.2311 17.298C10.5209 18.1484 11.426 18.7433 12.1402 19.0903C12.8525 19.4363 13.2087 19.4502 13.4578 19.3651C13.5952 19.3183 13.7297 19.2498 13.8485 19.1664C14.0651 19.0141 14.2626 18.7195 14.4015 17.9482C14.541 17.1733 14.5924 16.1014 14.6635 14.5706C14.7156 13.451 14.75 12.5118 14.75 12C14.75 11.4883 14.7156 10.549 14.6635 9.42946C14.5924 7.89871 14.541 6.82677 14.4015 6.05188C14.2626 5.28052 14.0651 4.98595 13.8485 4.8337C13.7297 4.75023 13.5952 4.68181 13.4578 4.63492C13.2087 4.54989 12.8525 4.56376 12.1402 4.90978ZM11.4848 3.56055C12.3108 3.15928 13.1241 2.9361 13.9423 3.21531C14.2142 3.30809 14.4759 3.44128 14.7109 3.60646C15.417 4.10266 15.7159 4.88667 15.8778 5.78612C16.037 6.67048 16.0914 7.84243 16.1592 9.30232L16.1619 9.35983C16.2137 10.4748 16.25 11.448 16.25 12C16.25 12.552 16.2137 13.5253 16.1619 14.6402L16.1592 14.6977C16.0914 16.1576 16.037 17.3296 15.8778 18.2139C15.7159 19.1134 15.417 19.8974 14.7109 20.3936C14.4759 20.5588 14.2142 20.692 13.9423 20.7848C13.1241 21.064 12.3108 20.8408 11.4848 20.4395C10.6712 20.0443 9.68413 19.3934 8.45327 18.5819L8.18647 18.4059C7.73856 18.1106 7.58448 18.0119 7.42513 17.9416C7.25452 17.8663 7.0752 17.8125 6.89132 17.7814C6.71956 17.7524 6.5366 17.75 6.00008 17.75C5.94569 17.75 5.89203 17.7501 5.83907 17.7501C4.62215 17.7507 3.77659 17.7512 3.02496 17.4034C2.33016 17.082 1.66141 16.4527 1.29828 15.7788C0.905663 15.0501 0.859593 14.2881 0.794087 13.2045C0.791489 13.1615 0.788861 13.1181 0.786179 13.0741C0.763733 12.7058 0.75 12.3416 0.75 12C0.75 11.6585 0.763733 11.2943 0.786179 10.926C0.788861 10.882 0.791489 10.8385 0.794087 10.7955C0.859593 9.712 0.905663 8.94996 1.29828 8.22128C1.66141 7.54732 2.33016 6.9181 3.02496 6.59664C3.77659 6.24889 4.62215 6.24933 5.83906 6.24998C5.89203 6.25 5.94569 6.25003 6.00008 6.25003C6.5366 6.25003 6.71956 6.24762 6.89132 6.21862C7.0752 6.18757 7.25452 6.13377 7.42513 6.05848C7.58448 5.98815 7.73856 5.88945 8.18647 5.59411L8.45328 5.4182C9.68414 4.60662 10.6712 3.95576 11.4848 3.56055ZM19.5199 5.42408C19.8381 5.1589 20.311 5.2019 20.5762 5.52011L20 6.00024C20.5762 5.52011 20.5762 5.52011 20.5762 5.52011L20.5773 5.52148L20.5786 5.52303L20.5816 5.52664L20.5891 5.53591C20.5948 5.543 20.6018 5.55194 20.6102 5.56272C20.6269 5.5843 20.6486 5.6133 20.6748 5.64986C20.727 5.723 20.7966 5.8264 20.8775 5.96125C21.0394 6.23106 21.2462 6.62623 21.45 7.15601C21.8582 8.21738 22.25 9.80868 22.25 12.0002C22.25 14.1918 21.8582 15.7831 21.45 16.8445C21.2462 17.3743 21.0394 17.7694 20.8775 18.0392C20.7966 18.1741 20.727 18.2775 20.6748 18.3506C20.6486 18.3872 20.6269 18.4162 20.6102 18.4378C20.6052 18.4442 20.6007 18.45 20.5966 18.4551C20.5939 18.4586 20.5914 18.4617 20.5891 18.4646L20.5816 18.4739L20.5786 18.4775L20.5773 18.479C20.5773 18.479 20.5762 18.4804 20 18.0002L20.5762 18.4804C20.311 18.7986 19.8381 18.8416 19.5199 18.5764C19.2032 18.3125 19.1591 17.8429 19.42 17.5247M19.42 17.5247C19.42 17.5247 19.4218 17.5224 19.4235 17.5202C19.4288 17.5134 19.4393 17.4996 19.4542 17.4788C19.4839 17.4371 19.5315 17.367 19.5913 17.2675C19.7106 17.0686 19.8788 16.7512 20.05 16.306C20.3918 15.4174 20.75 14.0087 20.75 12.0002C20.75 9.99181 20.3918 8.58311 20.05 7.69448C19.8788 7.24926 19.7106 6.93192 19.5913 6.73299C19.5315 6.63347 19.4839 6.56343 19.4542 6.52172C19.4393 6.50086 19.4288 6.48709 19.4235 6.48024C19.4218 6.47803 19.42 6.47578 19.42 6.47578L19.4235 6.48024L19.422 6.47812L19.42 6.47578C19.1591 6.15763 19.2032 5.68797 19.5199 5.42408M17.6358 8.34463C17.9979 8.14347 18.4545 8.27392 18.6556 8.63601L18.0276 8.9849C18.6556 8.63602 18.6556 8.63601 18.6556 8.63601L18.6563 8.63732L18.6571 8.63872L18.6588 8.64176L18.6626 8.64888L18.6723 8.66723C18.6795 8.6813 18.6884 8.69906 18.6986 8.72057C18.7191 8.76359 18.7451 8.82159 18.7745 8.89514C18.8333 9.0423 18.9059 9.25124 18.9765 9.52646C19.1178 10.0774 19.25 10.8901 19.25 12.0002C19.25 13.1104 19.1178 13.9231 18.9765 14.474C18.9059 14.7492 18.8333 14.9582 18.7745 15.1053C18.7451 15.1789 18.7191 15.2369 18.6986 15.2799C18.6884 15.3014 18.6795 15.3192 18.6723 15.3333L18.6626 15.3516L18.6588 15.3587L18.6571 15.3618L18.6563 15.3632C18.6563 15.3632 18.6556 15.3645 18.0276 15.0156L18.6556 15.3645C18.4545 15.7266 17.9979 15.857 17.6358 15.6559C17.2768 15.4564 17.1455 15.0058 17.3393 14.6453L17.3443 14.635C17.3512 14.6206 17.3643 14.5919 17.3818 14.5483C17.4167 14.4611 17.4691 14.3137 17.5235 14.1015C17.6322 13.6774 17.75 12.9901 17.75 12.0002C17.75 11.0104 17.6322 10.3231 17.5235 9.89902C17.4691 9.68675 17.4167 9.53944 17.3818 9.45222C17.3643 9.40858 17.3512 9.37986 17.3443 9.36547L17.3393 9.35523C17.1455 8.99465 17.2768 8.54408 17.6358 8.34463Z"
                                        fill="#1C274C"></path>
                                </g>
                            </svg>
                        </div>
                        <div class="vol-adjust">
                            <input class="slider" type="range" name="volume">
                        </div>
                    </div>
                    <div class="full-lyrics">
                    <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" id="music-lyric-2" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="secondary" d="M20,16a2.9,2.9,0,0,0-3-3v6" style="fill: none; stroke: #2ca9bc; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path id="secondary-2" data-name="secondary" d="M17,19a2,2,0,1,1-2-2A2,2,0,0,1,17,19ZM8,11h5M8,15h3" style="fill: none; stroke: #2ca9bc; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path id="primary" d="M9,19H5a1,1,0,0,1-1-1V4A1,1,0,0,1,5,3H16a1,1,0,0,1,1,1V9" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></g></svg>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="lyrics-window">
        <div class="close-lyrics">X</div>
        <div class="lyrics-animation">
        <div class="astronaut">
            <div class="helmet"></div>
            <div class="face-outer"></div>
            <div class="face-inner">
                <div class="shine-1"></div>
                <div class="jugaad"></div>
                <div class="reflect"></div>
                <div class="reflect-shine"></div>
                <div class="shine-2"></div>
                <div class="shine-3"></div>
                <div class="shine-4"></div>
            </div>
            <div class="ear-left"></div>
            <div class="ear-right"></div>
            <div class="pipe">
                <div class="line pipeline-1"></div>
                <div class="line pipeline-2"></div>
                <div class="line pipeline-3"></div>
                <div class="line pipeline-4"></div>
                <div class="line pipeline-5"></div>
            </div>
            <div class="arm-left"></div>
            <div class="arm-right"></div>
            <div class="hand-left">
                <div class="fingers"></div>
                <div class="joint"></div>
                <div class="palm"></div>
            </div>
            <div class="hand-right">
                <div class="fingers"></div>
                <div class="joint"></div>
                <div class="palm"></div>
            </div>
            <div class="heart">
                <div class="left"></div>
                <div class="right"></div>
                <div class="box-left"></div>
                <div class="box-right"></div>
                <div class="shine-1"></div>
                <div class="shine-2"></div>
            </div>
            <div class="foot-left">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="line-3"></div>
                <div class="line-4"></div>
                <div class="line-5"></div>
                <div class="line-6"></div>
                <div class="line-7"></div>
            </div>
            <div class="foot-right">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="line-3"></div>
                <div class="line-4"></div>
                <div class="line-5"></div>
                <div class="line-6"></div>
                <div class="line-7"></div>
            </div>
            <div class="butt"></div>
            <div class="jupiter">
                <div class="skin">
                    <div class="skin-1"></div>
                    <div class="skin-2"></div>
                    <div class="skin-3"></div>
                    <div class="skin-4"></div>
                    <div class="skin-5"></div>
                    <div class="skin-6"></div>
                    <div class="skin-7"></div>
                    <div class="skin-8"></div>
                    <div class="skin-9"></div>
                    <div class="skin-10"></div>
                    <div class="skin-11"></div>
                    <div class="skin-12"></div>
                    <div class="skin-13"></div>
                    <div class="skin-14"></div>
                    <div class="skin-15"></div>
                    <div class="skin-16"></div>
                    <div class="skin-17"></div>
                    <div class="skin-18"></div>
                    <div class="skin-19"></div>
                    <div class="skin-20"></div>
                    <div class="skin-21"></div>
                    <div class="skin-22"></div>
                    <div class="skin-23"></div>
                </div>
                <div class="ring">
                    <div class="layer-out"></div>
                    <div class="layer-mid"></div>
                    <div class="layer-in"></div>
                    <div class="layer-up"></div>
                </div>
            </div>
        </div>
        </div>
        <div class="lyrics-container">
        <div class="content">
        <!-- <audio id="audio" src="/songs/The_Magical_Sorting_Hat-Leslie_Phillips.mp3"></audio> --></div>
        </div>
        </div>

    </div>

    <script src="home.js"></script>
</body>
</html>