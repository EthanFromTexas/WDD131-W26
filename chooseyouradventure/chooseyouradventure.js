const gameboxdata = [
    // start. Player either chooses 1 > forwards or 2 > backwards
    {
        decisionnum: 0,
        imgSrc: "images/johndoe.png",
        imgAlt: "An eggplant man",
        text: "Is this thing even working?",
        choice1: 1,
        choice2: 8
    },
    // forwards. player can choose 1 > West or 2 > East
    {
        decisionnum: 1,
        imgSrc: "images/johndoe.png",
        imgAlt: "placeholder",
        text: "decision 1",
        choice1: 2,
        choice2: 5
    },
    // West. player can choose 1 > wizard tower or 2 > lake
    {
        decisionnum: 2,
        imgSrc: "images/johndoe.png",
        imgAlt: "placeholder",
        text: "decision 11",
        choice1: 3,
        choice2: 4
    },
    // Wizard Tower
    {
        decisionnum: 3,
        imgSrc: "images/johndoe.png",
        imgAlt: "placeholder",
        text: "decision 12",
        choice1: 0,
        choice2: 0
    },
    // Lake 
    {
        decisionnum: 4,
        imgSrc: "images/johndoe.png",
        imgAlt: "placeholder",
        text: "decision 112",
        choice1: 0,
        choice2: 0
    },
    // East. player can choose 1 > witch hut or 2 > end of forest
    {
        decisionnum: 5,
        imgSrc: "images/johndoe.png",
        imgAlt: "placeholder",
        text: "decision 12",
        choice1: 6,
        choice2: 7
    },
    // Witch Hut 
    {
        decisionnum: 6,
        imgSrc: "images/johndoe.png",
        imgAlt: "placeholder",
        text: "decision 121",
        choice1: 0,
        choice2: 0
    },
    // Lake 
    {
        decisionnum: 7,
        imgSrc: "images/johndoe.png",
        imgAlt: "placeholder",
        text: "decision 122",
        choice1: 0,
        choice2: 0
    },
    // choice 2
    {
        decisionnum: 8,
        imgSrc: "images/johndoe.png",
        imgAlt: "placeholder",
        text: "You ran into a giant monster to scary to describe. Your Dead. Choose either button to restart.",
        choice1: 0,
        choice2: 0
    }
];

const boximage = document.getElementById("imagebox");
const boxtext = document.getElementById("textbox");
const b1 = document.getElementById("button1");
const b2 = document.getElementById("button2");

let sceneplaceholder = 0;


function showscene(sceneid) {

    sceneplaceholder = sceneid;

    const currentscene = gameboxdata[sceneid];

    boxtext.textContent = currentscene.text;
    boximage.innerHTML = `<img src="${currentscene.imgSrc}" alt="${currentscene.imgAlt}">`;
}


b1.addEventListener('click', function () {
    const nextscene = gameboxdata[sceneplaceholder].choice1;
    showscene(nextscene);
});

b2.addEventListener('click', function () {
    const nextscene = gameboxdata[sceneplaceholder].choice2;
    showscene(nextscene);
});

showscene(0);