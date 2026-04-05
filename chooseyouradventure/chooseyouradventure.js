const gameboxdata = [
    // start. Player either chooses 1 > forwards or 2 > backwards
    {
        decisionnum: 0,
        imgSrc: "images/johndoe.png",
        imgAlt: "An eggplant man",
        text: "This is John. He unfortunately he got turned into an eggplant by a wizard just earlier today and has no clue on where to go or what to do with his life now. The wizard, being extra cruel, also teleported him in the middle of a vast dark forest. Infront of John there is a clearing in the trees up ahead. Behind John the forest gets deeper and darker. Should John go forwards to the opening or backwards deeper into the woods? Option 1 - Go fowards. Option 2 - Go backwards.",
        choice1: 1,
        choice2: 8
    },
    // forwards. player can choose 1 > West or 2 > East
    {
        decisionnum: 1,
        imgSrc: "images/johndoe.png",
        imgAlt: "placeholder",
        text: "Imagine John walked into a clearing that streches far East and West. Option 1 - Go West. Option 2 - Go East.",
        choice1: 2,
        choice2: 5
    },
    // West. player can choose 1 > wizard tower or 2 > lake
    {
        decisionnum: 2,
        imgSrc: "images/johndoe.png",
        imgAlt: "placeholder",
        text: "John see's a tower streching far into the sky and a beautiful lake. Option 1 - Go to the tower. Option 2 - Go to the lake.",
        choice1: 3,
        choice2: 4
    },
    // Wizard Tower
    {
        decisionnum: 3,
        imgSrc: "images/johndoe.png",
        imgAlt: "placeholder",
        text: "Tower placeholder",
        choice1: 0,
        choice2: 0
    },
    // Lake 
    {
        decisionnum: 4,
        imgSrc: "images/johndoe.png",
        imgAlt: "placeholder",
        text: "Lake placeholder",
        choice1: 0,
        choice2: 0
    },
    // East. player can choose 1 > witch hut or 2 > end of forest
    {
        decisionnum: 5,
        imgSrc: "images/johndoe.png",
        imgAlt: "placeholder",
        text: "John headed to the far East until sees the end of the forest, but he also sees a hut almost hidden in the forest to the off to the side. Option 1 - Go to the hut. Option 2 - Go to the end of the forest.",
        choice1: 6,
        choice2: 7
    },
    // Witch Hut 
    {
        decisionnum: 6,
        imgSrc: "images/johndoe.png",
        imgAlt: "placeholder",
        text: "hut placeholder",
        choice1: 0,
        choice2: 0
    },
    // End of Forest
    {
        decisionnum: 7,
        imgSrc: "images/johndoe.png",
        imgAlt: "placeholder",
        text: "End of the forest placeholder",
        choice1: 0,
        choice2: 0
    },
    // choice 2
    {
        decisionnum: 8,
        imgSrc: "images/deeperanddarker.png",
        imgAlt: "placeholder",
        text: "John ran into a giant monster to scary to describe. You Died. Choose either button to restart.",
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


    const currentscene = sceneid;

    sceneplaceholder = gameboxdata.indexOf(sceneid);

    boxtext.textContent = currentscene.text;
    boximage.innerHTML = `<img src="${currentscene.imgSrc}" alt="${currentscene.imgAlt}">`;
}

let choice = 0;

function findscene(scene){
    return scene.decisionnum == choice;
}

b1.addEventListener('click', function () {
    choice = gameboxdata[sceneplaceholder].choice1;
    showscene(gameboxdata.find(findscene));
});

b2.addEventListener('click', function () {
    choice = gameboxdata[sceneplaceholder].choice2;
    showscene(gameboxdata.find(findscene));
});

showscene(gameboxdata[0]);