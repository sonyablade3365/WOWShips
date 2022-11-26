var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var shots = [];
var shotsCheck = false;

alert("Приветствуем Вас в игре 'Морской Бой'! Представьте поле из 7 клеток. В 3 из ниих нааходится корабль. Как быстро Вам удастся его потопить?");
while (isSunk == false) {
       guess = prompt("Введите число от 0 до 6");
    if (guess < 0 || guess > 6) {
        alert("Не правильное значение. Введите число от 0 до 6");
    } else {
        shotsCheck = shots.includes(guess);
        if (shotsCheck == true) {
            alert("Вы уже стреляли в эту клетку! Выберете другую.");
        } else {
        guesses = guesses + 1;
        shots.push(guess);
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("ПОПАДАНИЕ!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("Вы потопили мой корабль!");
            }
        } else {
            alert("МИМО!");
        }
    }
    }
    }
    var stats = "Ваше колличество попыток - " + guesses +
    ". Значит Ваша точность была " + ((3/guesses) * 100) + "%";
   alert(stats);