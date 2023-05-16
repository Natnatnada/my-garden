//db clients plant
const plants = [
    {
        id: 1,
        name: 'Monstera Deliciosa',
        type: 'interior',
        img: './images/monstera.png',
        description: 'Planta de interior, no soporta sol directo'

    },
    {
        id: 2,
        name: 'Monstera Adansonii',
        type: 'interior',
        img: './images/adansonii.png',
        description: 'Tambien conocida como cheese plant por  sus hojas'

    },
    {
        id: 3,
        name: 'Aeonium Arboreum',
        type: 'suculenta',
        img: './images/rosanegra.png',
        description: 'Tambien conocida como rosa negra, es de sol directo'

    },
    {
        id: 4,
        name: 'Cotyledon Tomentosa',
        type: 'suculenta',
        img: './images/garrita.png',
        description: 'Tambien conocida como garrita de oso'

    }


];

const centerSection = document.querySelector('.center');
// console.log(centerSection)
window.addEventListener('DOMContentLoaded', function () {
    // console.log('hello')
    //here we call the function and pass plants as a parameter
   loadPLantsindividual(plants)
})
//make a function to load each plant from de dbs
function loadPLantsindividual(eachPlant) {
   let displayPlant = plants.map(function (plant) {
        // show in the console each plant, with the map
        // console.log(plant);
        return `<article class="cards-item">
                <img src=${plant.img} class="item-img">
                <div class="item-text">
                <div class="item-info">
                    <h3 class="item-title">${plant.name}</h3>
                </div>
                <div class="item-description">
                    <p>${plant.description}</p>
                </div>
            </div>
            </article>`;
    })
    //show in the console all the plant in the const plants
    // console.log(displayPlant)
    displayPlant = displayPlant.join('');
    centerSection.innerHTML= displayPlant   
 }