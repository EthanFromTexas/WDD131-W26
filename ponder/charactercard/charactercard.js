const stats = [
    {
        class: "Swamp Slayer",
        level: 5,
        health: 22,
        attack: function(){
            this.health = this.health - 5;
        },
        levelup: function(){
            this.level = this.level + 1;
            this.health = this.health + 10;
        }
    }
];

const creatureStats = document.getElementById('stats');

function update() {
    creatureStats.innerHTML = '';
    
    stats.forEach(stat => {

        const key = document.createElement('key');
        key.className = 'stat';

        // Code for going through each movie and creating content for that movie

        let html = `
                <p><strong>Class:</strong> ${stat.class}</p>
                <p><strong>Level:</strong> ${stat.level}</p>
                <p><strong>Health:</strong> ${stat.health}</p>
            `


        key.innerHTML = html;
        creatureStats.appendChild(key);
    });
}

document.querySelector(".attack").addEventListener("click", function () {
    stats[0].attack();
    update();
});
document.querySelector(".levelup").addEventListener("click", function () {
    stats[0].levelup();
    update();
});

update();