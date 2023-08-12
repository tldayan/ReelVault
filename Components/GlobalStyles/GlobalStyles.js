

import {createGlobalStyle} from "styled-components"


export const StyledGlobal = createGlobalStyle`



@import url('https://fonts.googleapis.com/css2?family=Ysabeau+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Laila:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Philosopher&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

.App {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}


body {
  background-color: rgb(0, 0, 0);
}


/* MAIN WEBSITE FADE IN ANIMATION*/
.fade-in {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.fade-in.active {
  opacity: 1;
}


.animation {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}

header {
/*   border: 1px solid black; */
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 30px 15px;
  background-color: rgb(0, 0, 0);
}

/* MAIN WEBSITE SCROLLBAR */
html::-webkit-scrollbar{
  width: 5px;
}

html::-webkit-scrollbar-thumb {
  background: black;
}

html::-webkit-scrollbar-track {
  background: white;
}



/* PAGINATION STYLINGS */
.pagination {
  border: 1px solid #3333337a;
  border-radius: 5px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px ;
  margin: 50px auto 0px auto;
  padding: 10px;
  
}

.page_buttons {
  border: 1px solid #3333337a;
  background-color: #101010;
  border-radius: 5px;
  padding: 10px;
  color: white;
  cursor: pointer;
  font-family: 'Philosopher', sans-serif;
}

.page_buttons:hover {
  background-color: rgb(255, 255, 255);
  color: black;
  transition: all 0.5s;
}

.selectedPageButton {
  background-color: rgb(255, 255, 255);
  color: black;
  transition: all 0.5s;
}

























/* MAIN LOADING ANIMATION */
svg text {
  /* font-size: clamp(3rem, 15vw, 6.25rem); */
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 8px;
  fill: transparent;
  stroke: rgb(255, 255, 255);
  stroke-width: 2px;
  animation: animated-stroke 4s forwards;
  font-family: "Raleway", sans-serif;
  text-anchor: middle;
  dominant-baseline: middle;
}


@keyframes animated-stroke {
  0% {
    stroke-dasharray: 0 60%;
  }

  90% {
    fill: transparent;
  }
  
  100% {
    stroke-dasharray: 10% 0%;
    stroke-dashoffset: 25%;
    fill: rgb(255, 255, 255);

  }
}

/* API LOADING ANIMATION */
.load_animation {
  margin:  20px auto;
	width: 30px;
	height: 30px;
	border:solid 3px #ffffff;
	border-radius: 50%;
	border-right-color: transparent;
	border-bottom-color: transparent;
	 -webkit-transition: all 0.5s ease-in;
    -webkit-animation-name:             rotate; 
    -webkit-animation-duration:         1.0s; 
    -webkit-animation-iteration-count:  infinite;
    -webkit-animation-timing-function: linear;
    	
    	 transition: all 0.5s ease-in;
    animation-name:             rotate; 
    animation-duration:         1.0s; 
    animation-iteration-count:  infinite;
    animation-timing-function: linear; 
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to { 
        transform: rotate(360deg);
    }
}
 

 @-webkit-keyframes rotate {
    from {
        -webkit-transform: rotate(0deg);
    }
    to { 
        -webkit-transform: rotate(360deg);
    }
}


.category_buttons_container {
  border: 1px solid #3333337a;
  background-color: #101010;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  width: 95%;
  margin: 30px auto 0px auto;
  align-items: center;
  gap: 10px;
  justify-content: space-evenly;
}

.category_buttons {
  border: 1px solid rgba(51, 51, 51, 0.779);
  background-color: #101010;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  text-decoration: none;
  padding: 5px 15px;
  text-align: center;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-size: clamp(0.3rem, 2.5vw, 1rem);
  font-family: 'Philosopher', sans-serif;
}
.category_buttons:hover {
  background-color: white;
  color: black;
}
.category_buttons.active{
  background-color: white;
  color: black;
}





nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* border: 1px solid rgb(0, 255, 166); */
}

.nav_container {
  display: flex;
  align-self: center;
  gap: 5px ;
  font-size: 1.3rem;
}


.logo {
  padding: 0px 5px;
  border: 2px solid rgb(255, 255, 255);
  text-decoration: none;
  color: rgb(255, 255, 255);
  margin-right: auto;
  font-family: 'Cinzel', serif;
  font-size: clamp(0.4rem, 4vw, 1.5rem);
}


.nav_links {
  text-decoration: none;
  color: rgb(255, 255, 255);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: clamp(0.4rem, 5vw, 1rem);
  font-family: 'Philosopher', sans-serif;
}

.nav_links:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

.nav_links.active {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}


.search_logo {
  font-size: 3rem;
}

.main_trailer_container {
position: relative;
}

video {
  width: 100%;
  display: block;

}

.trailer_content {
  position: absolute;
  bottom: 10%;
  left: 4%;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
}

.trailer_title {
  font-size: clamp(1rem, 6vw, 6rem);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.trailer_info {
  font-size: clamp(0.4rem, 1vw, 1.3rem);
  opacity: 0.8;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.161);
  backdrop-filter: blur(10px);
  padding: 5px;
  border-radius: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Quicksand', sans-serif;
}

.watch_trailer_btn {
  font-size: clamp(0.4rem, 2vw, 1.5rem);
  text-decoration: none;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background-color: transparent;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.338);
  border-radius: 5px;
  padding: 5px;
  width: 20%;
  color: rgb(255, 255, 255);
  font-family: 'Quicksand', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px ;
}




.play_button {
  filter: invert(1);
  width: 13%;
}

.watch_trailer_btn:hover {
  background-color: black;
  transition: all 0.8s;
  backdrop-filter: none;
  color: white;
  transform: scale(1.1);
  
}
.trailer_info:hover {
  transform: scale(1.01);
  transition: all 0.8s;
}





.search_field {
/*   border: 2px solid white; */
/*   border-radius: 5px; */
  height: 30px;
  width: 0%;
  text-indent: 10px;
  font-size: clamp(0.7rem, 3vw, 1.1rem);
  border: none;
  outline: none;
  margin-left: auto;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  font-family: 'Ysabeau SC', sans-serif;
  background-color: transparent;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.222);
}

.search_container {
/*   border: 2px solid rgb(255, 0, 0); */
  width: 60%;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
}

.search_icon {
  cursor: pointer;
  margin-right: 15px;
  filter: invert(1);
  -webkit-tap-highlight-color: transparent;
}

a {
  -webkit-tap-highlight-color: transparent;
}


/* SEARCH RESULTS STYLINGS */
.search_list {
/*   border: 1px solid rgb(0, 0, 0); */
  width: 100%;
  position: absolute;
/*   height: 50vh !important; */
  top: 120%;
  left: 0;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  border-radius: 10px 0px 0px 10px;
  overflow-y: scroll;
  transition: all 0.5s;
  z-index: 998;
}

.search_list::-webkit-scrollbar{
  width: 5px;
}

.search_list::-webkit-scrollbar-thumb {
  background: black;
}

.search_list::-webkit-scrollbar-track {
  background: white;
}




.result {
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.154);
  display: flex;
  gap: 10px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  padding: 7px;
  text-decoration: none;
  transition: all 0.5s;
}



.result:hover {
  background-color: rgb(0, 0, 0);
  transition: all 0.5s;
}

.result:hover .search_results_movie_title,
.result:hover .release_date,
.result:hover .movie_metrics_container {
  color: rgb(255, 255, 255);
}

.result:hover .star {
  filter: invert(1);
}


.search_results_movie_poster {
  width: 60px;
  height: 90px;
  border-radius: 3px;
}

.search_results_movie_title {
  color: rgb(0, 0, 0);
  font-size: clamp(0.4rem, 4vw,1rem);
}

.release_date {
  color: rgba(0, 0, 0, 0.737);  
  font-size: clamp(0.4rem, 3vw,1rem);
}

.movie_metrics_container {
/*   border: 1px solid white; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: clamp(0.4rem, 4vw,1rem);
  color: rgba(0, 0, 0, 0.737);

}
.movie_result_info_container {
/*   border: 1px solid white; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;  
  font-family: 'Roboto', sans-serif;
}

.star {
  width: 11px;
}


.movietype_container {
  border: 1px solid #3333337a;
  background-color: #101010;
  border-radius: 5px;
  padding: 20px;
  overflow: hidden;
  width: 95%;
  margin: 10px auto;
  padding: 40px;
}

.movielist_container {
/*   border: 1px solid rgb(0, 255, 166); */
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px 10px;
  width: 100%;
  margin: 0 auto;
}



.movie_container {
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
/*   position: relative; */
}


.movie_name {
  color: rgb(255, 255, 255);
  border-radius: 2px;
  padding: 2px 4px;
  font-size: 0.9rem;
  font-family: 'Quicksand', sans-serif;
}


.movie_date {
  position: absolute;
  top: 0%;
  right: 0%;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-radius: 0px 4px 0px 5px;
  font-weight: lighter;
  padding: 1px 4px;
  font-weight: bold;
  font-size: 0.7rem;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 1px;
}

.movie_poster_container {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.movie_poster {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: block;
}

.movie_poster:hover {
  transition: 0.3s;
  transform: scale(1.03);
}

/* POSTER LOADING SKELETON */

.movie_poster_skeleton {
  background-color: rgb(182, 182, 182);
  border-radius: 10px;
  width: 100%;
  height: 100px;
  display: block;
  position: relative; /* Add this line */
}

.movie_poster_skeleton::before {
  content: "";
  position: absolute;
  top: 0;
  border-radius: 10px;
  left: -100%; /* Move the pseudo-element off-screen */
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent); /* Create a gradient effect */
  animation: skeletonAnimation 1.5s infinite; /* Apply the animation */
}

@keyframes skeletonAnimation {
  0% {
    left: -100%;
  }
  100% {
    left: 100%; /* Move the pseudo-element to the right edge */
  }
}





.movie_player_container {
 /*  border: 1px solid rgb(255, 0, 0); */
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 500px;
  margin-top: 25px;
}


.movie_player {
  border: none;
  display: block;
  margin: 0 auto;
  height: 100%;
  width: 100%;
}



.error_message {
  color: white;
  font-size: 1.2rem;
  margin: 0 auto;
  font-family: 'Philosopher', sans-serif;
}


h3 {
  display: flex;
  font-size: clamp(0.4rem, 3vw,1rem);
  margin-top: 3px;
  color: rgb(255, 255, 255);
  margin-right: auto;
  white-space: nowrap;
}



.category_titles {
  border: 1px solid #333;
  text-align: center;
  padding: 10px 0px;
  font-size: 1.5rem;
  border-radius: 5px;
    background-color: #101010;
  margin-top: 5px;
  margin-bottom: 20px;
  font-family: 'Philosopher', sans-serif;
  color: rgb(228, 228, 228);
}



footer {
/*     border: 1px solid rgb(255, 0, 0); */
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.255);
  background-color: rgb(0, 0, 0);
  border-top: 1px solid rgba(255, 255, 255, 0.254);
  padding: 10px;
  font-size: clamp(0.7rem, 1vw, 1rem);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin-top: auto;
}



.container {
display: none;
}


/*   MOVIE DETAILS CONTAINER */
.movie_details_container {
  border: 1px solid #333;
  background-color: #101010;
  width: 95%;
  margin: 50px auto;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  color: #8f8f8f;
  font-family: 'Philosopher', sans-serif;
  border-radius: 10px;
  font-size: clamp(0.5rem, 5vw, 1rem);
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.182);
}

.movie_details_poster {
/*   border: 1px solid red; */
  max-width: 100%;
  height: auto;
  align-self: flex-start;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.251);
}

.movie_title {
  margin-bottom: 10px;
  color: white;
}

.movie_overview {
 margin-bottom: 10px;

}

.movie_info_container {
/*   border: 1px solid rgb(255, 255, 255); */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  
}
.show_info_container {
/*   border: 1px solid rgb(255, 255, 255); */
  width: 70%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
}




.movie_stats_container {
/*   border: 1px solid white; */
  display: flex;
  align-items: center;
  margin-top: auto;
  gap: 20px ;
}
.first_stats_container,.second_stats_container {
  display: flex;
  flex-direction: column;
  gap: 5px ;
/*   border: 1px solid white; */
}

.first_stats_container {
  align-self: stretch;
}

.second_stats_container {
  align-self: stretch;
}



/* SHOW DETAILS CONTAINER */

.main_season_list_container {
/*   border: 1px solid white; */
  height: 20%;
position: relative;
}

.shows_list_container {
/*   border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 30%;
  height: 230px;
  align-self: stretch;
}

.season_list_container.hide {
  opacity: 0;
  pointer-events: none;
  display: none;
}

.season_list_container {
  
  border: 1px solid #333;
  
  background-color: #101010;
  position: absolute;
  top: 55px;
  left: 50%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transform: translateX(-50%);
  box-shadow: 0px 0px 25px 0px rgb(0, 0, 0);
/*   border: 1px solid white; */
height: auto;
max-height: 180px;
overflow-y: scroll;
  border-radius: 5px;
  width: 90%;
  list-style-type: none;
/*   display: none; */

}

.season_list_container::-webkit-scrollbar-thumb {
  background-color: rgb(58, 58, 58);
  border-radius: 0px 5px 5px 0px;
}

.season_list_container::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.701);
  border-radius: 0px 5px 5px 0px;
}

.season_list_container::-webkit-scrollbar {
  width: 4px;
}

.seasons_button {
  border: 1px solid #333;
  background-color: #6f6f6f44;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
.seasons_button:hover {
  background-color: white;
  color: #101010;
}

.season_button {
  border: none;
  background-color: #101010;
    border-radius: 5px;
  white-space: nowrap;
  width: 100%;
  height: 30px;
  color: white;
  cursor: pointer;
  transition: all ease 0.4s;
}
.season_button:hover {
  background-color: #ffffff;
  color: #101010;
}

.main_episode_list_container {
  border: 1px solid #333;
/*   border: 1px solid white; */
border-radius: 5px;
  height: 80%;
  padding: 5px;
  overflow-y: scroll;
}



.main_episode_list_container::-webkit-scrollbar-thumb {
  background-color: rgb(255, 255, 255);
  border-radius: 10px 0px 0px 10px;
}

/* .main_episode_list_container::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.701);
} */

.main_episode_list_container::-webkit-scrollbar {
  width: 6px;
}





/* EPISODE CONTAINER */
.episode_list_container {
  margin-top: 10px;
/*   border: 1px solid aqua; */
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px  ;
  list-style-type: none;
}

.episode_buttons {
  border: 1px solid #333;
  background-color: #101010;
  white-space: nowrap;
  width: 100%;
  height: 40px;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: clamp(0.4rem, 3vw,0.7rem);
}

.episode_buttons:hover {
  background-color: white;
  color: #101010;
}

.episode_buttons.active {
  background-color: white;
  color: #101010;
}





/* Recommended Component STYLINGS */

.recommended_movies_container {
  border: 1px solid #333;
  background-color: #101010;
  width: 95%;
  margin: 50px auto;
  padding: 25px;
  color: #8f8f8f;
  font-family: 'Philosopher', sans-serif;
  border-radius: 10px;
  font-size: clamp(0.5rem, 5vw, 1rem);
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.182);
}

swiper-container {
/*   border: 2px solid red; */
  width: 100%;
  
}


swiper-slide {
/*   background-color: yellow; */
/*   border: 1px solid aqua; */
  margin-right: 10px;
  flex: 0;
  height: 100%;

  

}


swiper-slide:last-child {
  margin-right: 0px;

  
}

.recommended_movie_poster {
  width: 150px;
  height: 225px;
  display: block;
  border-radius: 5px;
/*   border: 1px solid red; */
  
}


.recommended_movie_title {
  margin-top: 5px;
  color: white;
  
}

.recommended_link {
  text-decoration: none;
}



/* FILTER COMPONENT STYLINGS */

.filter_buttons_container {
  border: 1px solid #333;
  text-align: center;
  border-radius: 5px;
  margin-top: -15px;
  background-color: #101010;
  font-family: 'Philosopher', sans-serif;
  color: rgb(228, 228, 228);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
}

.filter_buttons {
  font-size: clamp(0.4rem, 3vw, 1rem);
  height: 25px;
  display: block;
  background-color: #2c2c2c;
  color: white;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  font-family: 'Philosopher', sans-serif;
  text-decoration: none;

}

.filter_buttons:hover {
  background-color: black;
}
.filter_buttons.active {
  background-color: rgb(255, 255, 255);
  color: black;
}











/* Contact COMPONENT STYLINGS */

.contact_us_container {
/*         border: 1px solid rgb(255, 255, 255) */  
  padding: 20px 20px 0px 20px;
    box-shadow: 0px 0px 1px 0px white;
    width: min(85%, 900px);
     margin: 75px auto;
     animation: form_appear 0.5s ease-in-out forwards;
     font-family: 'Philosopher', sans-serif;
}

.contact_us_title {
  font-size: 1.5rem;
  text-align: center;
  display: block;
/*   color: white;
  background-color: black; */
  margin: 0 auto;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.232);
}


.contact_form {
  background-color: rgb(0, 0, 0);
/*   border: 2px solid rgb(255, 255, 255); */
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px 0px;

}


.submit_button {
  background-color: #f8f8f8;
  border: 2px solid black;
  color: black;
  width: 30%;
  border: none;
  margin: 0px auto;
  cursor: pointer;
  height: 35px;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.2rem;
  animation: submit_button_off 0.2s ease-in-out forwards;
}

.submit_button:hover {
  animation: submit_button 0.2s ease-in-out forwards;
  background-color: black;
  border: 2px solid white;
  color: white;

}

@keyframes submit_button {
  0% {
      transform: scale(1);
  }

  100% {
      transform: scale(1.04);
  }
}

@keyframes submit_button_off {
  0% {
      transform: scale(1.04);
  }

  100% {
      transform: scale(1);
  }
}




.name_field, .email_field, .message_field {
  width: 100%;
}


.name_label {
  color: white;
}

.input_container {
  display: flex;
/*     border: 2px solid white; */
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 0px auto;
  font-size: 0.8rem;
  gap: 5px;
}

#contactSubmitSuccess {
  font-size: 0.8rem;

  color: white;
  text-align: center;
}

.input_fields {
  height: 40px;
  width: 100%;
  border: none;
  background-color: rgb(16, 16, 16);
  color: white;
  text-indent: 3px;
  font-family: 'Philosopher', sans-serif;
  
}

.message_field {
  resize: none;
}


/* ABOUT COMPONENT STYLINGS */

.about_main_container {
  border: 1px solid #333;
  background-color: #101010;
/*   border: 1px solid white; */
border-radius: 5px;
padding: 15px;
  width: 95%;
  color: white;
  font-family: 'Philosopher', sans-serif;
  margin: 0 auto;
  
}

.about_title,.faq_title {
  font-size: 2rem;
  margin-bottom: 10px;  
  font-size: clamp(1rem, 10vw, 1.5rem);
}

.about_info {
  font-size: clamp(0.2rem, 3vw, 1.2rem);
}

.api_logos {
/*   border: 1px solid #ff0000; */
  display: flex;
  margin-top: 15px;
  align-items: center;

  gap: 10px ;

}

.tmdb_logo,.embed_logo {
  border: 1px solid #333;
  background-color: #101010;
  padding: 10px;
  border-radius: 5px;
  filter: grayscale(100%);
  width: 50px;
  height: 50px;
}

.tmdb_logo:hover,.embed_logo:hover {
  filter: grayscale(0);
  transition: all 0.5s;
}

.copyright {
  font-size: clamp(0.6rem, 2vw, 1rem)
}

/* FAQ SECTION */
.faq_main_container {
  border: 1px solid #333;
  background-color: #101010;
  color: white;
  border-radius: 5px;
padding: 15px;
  width: 95%;
  color: white;
  font-family: 'Philosopher', sans-serif;
  margin: 10px auto;
}

.faq_container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.faqs {
  border: 1px solid #333;
  border-radius: 5px;
/*   padding: 10px; */
  cursor: pointer;

}

#faq_questions {
  padding: 15px 10px;
}

#faq_answers {
  margin: 0px auto;
  padding: 0px 0px 10px 10px;
  display: none;
}

.movie_language {
  position: absolute;
  top: 0%;
  left: 0%;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 4px 0px 5px 0px;
  padding: 1px 9px;
  font-weight: bold;
  font-size: 0.8rem;
  
}
.movie_vote {
  position: absolute;
  background-color: #101010;
  bottom: 0%;
  left: 0%;
  color: rgb(255, 255, 255);
  border-radius: 0px 5px 0px 5px;
  padding: 1px 9px;
  font-weight: bold;
  font-size: 0.8rem;
}


.red {
  background-color: rgb(255, 0, 0);
  font-weight: bold;
}

.orange {
  background-color: orange;
  font-weight: bold;
}

.green {
  background-color: #00ff9d;
  font-weight: bold;
}



.back_button {
  text-decoration: none;
  border: 1px solid #333;
  background-color: #101010;
  padding: 5px;
  color: white;
  border-radius: 2px;
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  position: relative;
  font-weight: 500;
  font-size: clamp(0.3rem, 2vw, 0.75rem);
  transition: all ease 0.4s;
}

.back_button:hover {
  border: 1px solid #333;
  background-color: #ffffff;
  color: black;
}


@media (max-width:900px) {

  /* HAMBURGER STYLINGS */
  header {
    padding: 5px 5px;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  #hamburger {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    z-index: 999;
    -webkit-tap-highlight-color: transparent;
  }


  #hamburger .line {
    fill: none;
    stroke: #ffffff;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  #hamburger .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  #hamburger .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  #hamburger .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  #hamburger.open .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  #hamburger.open .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  #hamburger.open .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }



  .logo {
     /*  margin-left: 5px; */
      margin-right: auto;
      z-index: 9999;
    }

  .watch_trailer_btn {
      padding: 5px;
      width: 30%;
      gap: 5px ;
    }
    
  .play_button {
      filter: invert(1);
      width: 20%;
    }

  .nav_container {
    display: flex;
    flex-direction: column;
    top: 0;
    width: 100%;
    left: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0);
    position: fixed;
    z-index: 999;
    align-items: center;
    justify-content: center;
    gap: 5px ;
    font-size: 1.3rem;
    transition: all 0.5s;
    }

  .nav_links {
      font-size: 2.5rem;
      padding: 5px 20px;
    }
    
  .movietype_container {
    padding: 15px;
  }

  .search_list {
    width: 122%;
  }


  svg text {
    stroke-width: 1px;
  }
  .movielist_container {
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }

  .search_icon {
    margin-right: 10px;
  }


  .movie_info_container {
    
    width: 100%;
  }

  .show_info_container {
    /*   border: 1px solid rgb(255, 255, 255); */
      width: 100%;

    }

  .shows_list_container {
      width: 100%;
    }



  /* MOVIE PLAYER COMPONENT */
  
/*   MOVIE DETAILS CONTAINER */



.movie_details_container {
  width: 95%;
  padding: 10px;
  flex-direction: column;
}

.movie_details_poster {
  align-self: flex-start;
}

.movie_stats_container {
  width: 100%;
}

.first_stats_container,.second_stats_container {
  width: 50%;
}


}


`