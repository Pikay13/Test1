let point = 0;
let number = "";
let b = 0;
let petrol = 30;
let count = 0;
let pump = document.getElementById("pump");
let display = document.getElementById("display");
let heading = document.getElementById("heading");
const playBtn = document.getElementById("playBtn");
//ONCLICK FUNCTION//
function show() {

    //RANDOM PETROL-PUMPS GENERATION//

    var petrolPump = [];
    for (i = 0; i <= 4; i++) {
        var num = Math.floor(Math.random() * 100) + 1;
        petrolPump.push(num);
        number += petrolPump[i];
        petrolPump = petrolPump.sort((a, b) => a - b);
        pump.innerHTML = `Petrol pumps generated at ${petrolPump}`;
    }

    if (b === 0) {
        heading.innerHTML = "Game Started!";
        while (petrol >= 6 && point <= 100) {
            //RANDOM NUMBERS GENERATION//
            var randomNum = Math.floor(Math.random() * 6) + 1;
            point += randomNum;
            petrol -= randomNum;
            count++;
            petrolPump.forEach(value => {
                if (value === point) {
                    petrol += 20;
                }
            });
            display.innerHTML += `Move ${count} - Car at ${point}, petrol remaining ${petrol} <br>`;
        }
        let paragraph = document.createElement("p");
        let message1 = document.createTextNode("Reached!!!");
        let message2 = document.createTextNode("Game Over!");
        if (point <= 100) {
            paragraph.appendChild(message2);
            display.appendChild(paragraph);
        } else {
            paragraph.appendChild(message1);
            display.appendChild(paragraph);
        }
        playBtn.innerHTML = "Start Again"
        b++;
    }
    else {
        display.innerHTML = "";
        pump.innerHTML = "";
        b--;
        petrol = 30;
        point = 0;
        count = 0;
        heading.innerHTML = "Let's Go";
        playBtn.innerHTML = "Start"
    }
}

