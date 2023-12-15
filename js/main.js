const mainContainer = document.querySelector('.main');
const URL_BASE = "https://swapi.dev/api";

window.onload = () => {
    printHome('HOME');
}

const printPage = (section, url) => {

    adaptHeader(section);

    console.log(section);
    console.log(url);
    
    switch (section){
        case 'HOME':
            printHome();
            break;
        case 'FILMS':
            console.log('Pintamos pelíuclas');
            url ? printDetailFilm(url) : printFilms();
            break;
        case 'CHARACTERS':
            console.log('Pintamos personajes');
            url ? printDetailCharacter(url) : printCharacters();
            break;
        case 'STARSHIPS':
            console.log('Pintamos naves');
            url ? printDetailStarship(url) : printStarships();
            break;
        case 'SPECIES':
            console.log('Pintamos especies');
            url ? printDetailSpecie(url) : printSpecies();
            break;
        case 'PLANETS':
            console.log('Pintamos planetas');
            url ? printDetailPlanet(url) : printPlanets();
            break;
        default:
            printHome();
            break;
    }
    window.scrollTo(0,0);
}

const adaptHeader = (section) => {
    const header = document.querySelector('header');
    if(section === 'HOME'){
        header.classList.add('header--home');
    } else {
        header.classList.remove('header--home');
    }
}