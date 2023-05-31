//db clients plant
const plants = [
    {
        id: 1,
        name: 'Monstera Deliciosa',
        type: 'interior',
        img: './images/monstera.png',
        description: 'interior, no soporta sol directo'
    },
    {
        id: 2,
        name: 'Monstera Adansonii',
        type: 'interior',
        img: './images/adansonii.png',
        description: 'Tambien conocida como cheese plant'
    },
    {
        id: 3,
        name: 'Aeonium Arboreum',
        type: 'suculentas',
        img: './images/rosanegra.png',
        description: 'Tambien conocida como rosa negra'
    },
    {
        id: 4,
        name: 'Cotyledon Tomentosa',
        type: 'suculentas',
        img: './images/garrita.png',
        description: 'Tambien conocida como garrita de oso'
    },
    {
        id: 5,
        name: 'Aphelandra',
        type: 'interior',
        img: './images/aphelandra.png',
        description: 'Interior bien iluminado'
    },
    {
        id: 6,
        name: 'Singonio Plateado',
        type: 'interior',
        img: './images/singonio.png',
        description: 'Exterior blabalbalbalal'
    },
    {
        id: 6,
        name: 'Singonio Plateado',
        type: 'interior',
        img: './images/singonio.png',
        description: 'Exterior'
    }
];

const centerSection = document.querySelector('.center');
// console.log(centerSection)
const filterbtn = document.querySelectorAll('.btnfilter')
// console.log(filterbtn)
window.addEventListener('DOMContentLoaded', function () {
    // console.log('hello')
    //here we call the function and pass plants as a parameter
    loadPLantsindividual(plants)
});

//make a function to load each plant from de dbs
function loadPLantsindividual(eachPlant) {
    //fixing bug from the map function
    let displayPlant = eachPlant.map(function (plant) {
        // show in the console each plant, with the map
        // console.log(plant);
        return `<article class="cards-item">
                <div class="item-container">
                    <div class="image-container">
                    <img src=${plant.img} class="item-img">
                </div>
                <div class="item-text">
                <div class="item-info">
                    <h3 class="item-title">${plant.name}</h3>
                </div>
                <div class="item-description">
                    <p>${plant.description}</p>
                </div>
            </div>
            </div>
            </article>`;
    })
    //show in the console all the plant in the const plants
    // console.log(displayPlant)
    displayPlant = displayPlant.join('');
    centerSection.innerHTML = displayPlant
};

//filter for type, interior or suculentas
filterbtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        // console.log(e.currentTarget.dataset.id)
        const type = e.currentTarget.dataset.id;
        const plantType = plants.filter(function (eachPlant) {
            // console.log(eachPlant.category)
            if (eachPlant.type === type) {
                return eachPlant;
            }
            // console.log(eachPlant)
        });
        if (type === 'all') {
            loadPLantsindividual(plants);
        } else {
            loadPLantsindividual(plantType);
        }
        console.log(plantType)

    });
});
//semi sombra sol