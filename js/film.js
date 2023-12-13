const printDetailFilm = (url) => {
    console.log('Oye he llegado aquí ' + url);
    mainContainer.innerHTML = `
        <section class="section">
            <h3 class="section__title">FILM</h3>
            <section class="section__container">
                <div class="detail">
                    <img class="detail__img" src="../assets/images/films/1.jpg">
                    <div class="detail__info-container">
                        <h4 class="detail__title">LA AMENAZA FANTASMA</h4>
                        <p class="detail__info-title">EPISODE</p>
                        <p class="detail__info">V</p>
                        <p class="detail__info-title">DIRECTOR</p>
                        <p class="detail__info">George Lucas</p>
                        <p class="detail__info-title">DATE</p>
                        <p class="detail__info">19-05-1970</p>
                    </div>
                    <div class="detail__options-container">
                        <p class="detail__options-title">CHARACTERS</p>
                        <div class="detail__img-container">
                            <img class="detail__options-img" src="../assets/images/characters/1.jpg">
                            <img class="detail__options-img" src="../assets/images/characters/2.jpg">
                            <img class="detail__options-img" src="../assets/images/characters/4.jpg">
                            <img class="detail__options-img" src="../assets/images/characters/8.jpg">
                        </div>
                        <p class="detail__options-title">PLANETS</p>
                        <div class="detail__img-container">
                            <img class="detail__options-img" src="../assets/images/planets/3.jpg">
                            <img class="detail__options-img" src="../assets/images/planets/5.jpg">
                            <img class="detail__options-img" src="../assets/images/planets/10.jpg">
                            <img class="detail__options-img" src="../assets/images/planets/15.jpg">
                        </div>
                        <p class="detail__options-title">STARSHIPS</p>
                        <div class="detail__img-container">
                            <img class="detail__options-img" src="../assets/images/starships/3.jpg">
                            <img class="detail__options-img" src="../assets/images/starships/5.jpg">
                            <img class="detail__options-img" src="../assets/images/starships/10.jpg">
                            <img class="detail__options-img" src="../assets/images/starships/15.jpg">
                        </div>
                        <p class="detail__options-title">SPECIES</p>
                        <div class="detail__img-container">
                            <img class="detail__options-img" src="../assets/images/species/1.jpg">
                            <img class="detail__options-img" src="../assets/images/species/2.jpg">
                            <img class="detail__options-img" src="../assets/images/species/4.jpg">
                            <img class="detail__options-img" src="../assets/images/species/8.jpg">
                        </div>
                    </div>
                </div>
            </section>
        </section> 
    `;
}