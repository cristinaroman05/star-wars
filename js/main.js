const mainContainer = document.querySelector('.main');
const URL_BASE ='https://swapi.dev/api'
window.onload = ()=>{
   printHome();
}
const printPage = (section, url) =>{
   adaptHeader(section);
   switch(section){
      case 'HOME':
         printHome();
         break;
      case 'FILMS':
         console.log('pintamos películas');
         url ? printDetailFilm(url) :
          printFilms();
         break;
      case 'CHARACTERS':
         console.log('pintamos personajes')
         break;
      case 'STARSHIPS':
         console.log('pintamos naves')
         break;
      case 'SPECIES':
         console.log('pintamos especies')
         break;
      case 'PLANETS':
         console.log('pintamos prelículas')
         break;
      default:
         printHome();
         break;
   }
}
const adaptHeader = (section) => {
   const header = document.querySelector('header');
   if(section === 'HOME'){
       header.classList.add('header--home');
   }
   else{
      header.classList.remove ('header--home');
   }
   
}