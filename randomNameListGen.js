function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let names = ['Alexis', 'Anderson', 'Austin', 'Carleigh', 'Darko', 'Eden', 'Edward', 'Emily', 'Ethan', 'Freddy', 'Grace', 'Hayden', 'Hector', 'Heidi', 'Issac', 'Jarett', 'Jordan', 'Justin', 'Kingston', 'Lucas', 'Nancy', 'Nicholas', 'Rain', 'Tariq', 'Travis', 'Vivienne', 'Yuki', 'Zachary'];

let randomNames1 = ""
let randomNames2 = ""
let randomNames3 = ""

shuffleArray(names);

console.log(names)

randomNames1 = randomNames1 + (`<span class="elements1">1. ${names[0]} ${names[1]} ${names[2]}\n </span>`);
randomNames1 = randomNames1 + (`<span class="elements1">2. ${names[3]} ${names[4]} ${names[5]}\n </span>`);
randomNames1 = randomNames1 + (`<span class="elements1">3. ${names[6]} ${names[7]} ${names[8]}\n </span>`);
randomNames2 = randomNames2 + (`<span class="elements2">4. ${names[9]} ${names[10]} ${names[11]}\n </span>`);
randomNames2 = randomNames2 + (`<span class="elements2">5. ${names[12]} ${names[13]} ${names[14]}\n </span>`);
randomNames2 = randomNames2 + (`<span class="elements2">6. ${names[15]} ${names[16]} ${names[17]}\n </span>`);
randomNames3 = randomNames3 + (`<span class="elements3">7. ${names[18]} ${names[19]} ${names[20]}\n </span>`);
randomNames3 = randomNames3 + (`<span class="elements3">8. ${names[21]} ${names[22]} ${names[23]}\n </span>`);
randomNames3 = randomNames3 + (`<span class="elements3">9. ${names[24]} ${names[25]}\n  </span>`);
randomNames3 = randomNames3 + (`<span class="elements3">10. ${names[26]} ${names[27]}\n </span>`);

console.log(randomNames1, randomNames2, randomNames3)

document.getElementById("theNames1").innerHTML = randomNames1;
document.getElementById("theNames2").innerHTML = randomNames2;
document.getElementById("theNames3").innerHTML = randomNames3;
