// 1 Калькуляторы фигур на JavaScript
// Сделайте калькулятор, который будет находить площадь и периметр квадрата.
let elem1 = document.querySelector('#elem1');
let but1 = document.querySelector('#button1');
let but01 = document.querySelector('#button01');
let p1 = document.querySelector('#p1');
but1.addEventListener('click', ()=> {
    p1.textContent = elem1.value **2;
});
but01.addEventListener('click', ()=> {
    p1.textContent = elem1.value *4;
});

// Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.
let elem2 = document.querySelector('#elem2');
let elem02 = document.querySelector('#elem02');
let but2 = document.querySelector('#button2');
let but02 = document.querySelector('#button02');
let p2 = document.querySelector('#p2');
but2.addEventListener('click', ()=> {
    p2.textContent = elem2.value*elem02.value;
});
but02.addEventListener('click', ()=> {
    p2.textContent = (Number(elem2.value) + Number(elem02.value))*2;
});

// Сделайте калькулятор, который будет находить площадь круга и длину окружности.
let elem3 = document.querySelector('#elem3');
let but3 = document.querySelector('#button3');
let but03 = document.querySelector('#button03');
let p3 = document.querySelector('#p3');
but3.addEventListener('click', ()=> {
    p3.textContent = 3.14*(elem3.value**2);
});
but03.addEventListener('click', ()=> {
    p3.textContent = (3.14*elem3.value)*2;
});

// Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.
document.getElementById("button4").addEventListener("click", function() {
    let a = parseFloat(document.getElementById("elem4").value);
    let b = parseFloat(document.getElementById("elem04").value);
    let c = parseFloat(document.getElementById("elem004").value);
    if (a + b > c && a + c > b && b + c > a) {
        let s = (a + b + c) / 2;
        let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        document.getElementById("p4").textContent = "Площадь треугольника: " + area;
    } else {
        document.getElementById("p4").textContent = "Треугольник с такими сторонами не существует";
    }
});

// 2 Математические калькуляторы на JavaScript
// Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.
document.getElementById("button5").addEventListener("click", function() {
    let a = parseFloat(document.getElementById("a5").value);
    let b = parseFloat(document.getElementById("b5").value);
    let c = parseFloat(document.getElementById("c5").value);
    let d5 = b * b - 4 * a * c;
    if (d5 > 0) {
        let x1 = (-b + Math.sqrt(d5)) / (2 * a);
        let x2 = (-b - Math.sqrt(d5)) / (2 * a);
        document.getElementById("roots").textContent = "Корни уравнения: x1 = " + x1 + ",  x2 = " + x2;
    } else if (d5 === 0) {
        let x = -b / (2 * a);
        document.getElementById("roots").textContent = "Уравнение имеет один корень: x = " + x;
    } else {
        document.getElementById("roots").textContent = "Уравнение не имеет действительных корней";
    }
});

// Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных.
document.getElementById("button6").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num61").value);
    let num2 = parseFloat(document.getElementById("num62").value);
    let num3 = parseFloat(document.getElementById("num63").value);
    let maxNum = Math.max(num1, num2, num3);
    if (maxNum === num1) {
        if (num1 * num1 === num2 * num2 + num3 * num3) {
            document.getElementById("p6").textContent = "Это тройка Пифагора";
        } else {
            document.getElementById("p6").textContent = "Это не тройка Пифагора";
        }
    } else if (maxNum === num2) {
        if (num2 * num2 === num1 * num1 + num3 * num3) {
            document.getElementById("p6").textContent = "Это тройка Пифагора";
        } else {
            document.getElementById("p6").textContent = "Это не тройка Пифагора";
        }
    } else {
        if (num3 * num3 === num1 * num1 + num2 * num2) {
            document.getElementById("p6").textContent = "Это тройка Пифагора";
        } else {
            document.getElementById("p6").textContent = "Это не тройка Пифагора";
        }
    }
});

// Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.
document.getElementById("button7").addEventListener("click", function() {
    let number7 = parseInt(document.getElementById("num7").value);
    let d7 = [];
    for (let i7 = 1; i7 <= number7; i7++) {
        if (number7 % i7 === 0) {
            d7.push(i7);
        }
    }
    document.getElementById("d7").textContent = "Делители числа: " + d7.join(", ");
});

// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите список общих делителей этих двух чисел.
document.getElementById("button8").addEventListener("click", function() {
    let num81 = parseInt(document.getElementById("num81").value);
    let num82 = parseInt(document.getElementById("num82").value);
    let d8 = [];
    for (let i8 = 1; i8 <= Math.min(num81, num82); i8++) {
        if (num81 % i8 === 0 && num82 % i8 === 0) {
            d8.push(i8);
        }
    }
    let l8 = document.getElementById("d8");
    l8.textContent = "";
    d8.forEach(function(divisor) {
        let li8 = document.createElement("li");
        li8.textContent = divisor;
        l8.appendChild(li8);
    });
});
 
// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.
function find9(a, b) {
    if (b === 0) {
        return a;
    } else {
        return find9(b, a % b);
    }
}
document.getElementById("button9").addEventListener("click", function() {
    let num91 = parseInt(document.getElementById("num91").value);
    let num92 = parseInt(document.getElementById("num92").value);
    let res9 = find9(num91, num92);
    document.getElementById("p9").textContent = "Наибольший общий делитель: " + res9;
});

// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наименьшее число, которое делится и на одно, и на второе из введенных чисел.
function find10(a, b) {
    return Math.abs(a * b) / find9(a, b);
}
document.getElementById("button10").addEventListener("click", function() {
    let num10 = parseInt(document.getElementById("num10").value);
    let num101 = parseInt(document.getElementById("num101").value);
    let p10 = find10(num10, num101);
    document.getElementById("p10").textContent = "Наименьшее число, которое делится и на " + num10 + ", и на " + num101 + ": " + p10;
});

// 3 Игра угадай число на JavaScript
// Реализуйте описанную игру.
let secretNumber = Math.floor(Math.random() * 100) + 1;
let try11 = 0;
document.getElementById("button11").addEventListener("click", function() {
    let guess11 = parseInt(document.getElementById("guess11").value);
    if (guess11 < 1 || guess11 > 100 || isNaN(guess11)) {
        document.getElementById("result").textContent = "Введите число от 1 до 100.";
    } else {
        try11++;
        if (guess11 === secretNumber) {
            document.getElementById("res11").textContent = "Поздравляем! Вы угадали число " + secretNumber + " за " + try11 + " попыток.";
        } else if (guess11 < secretNumber) {
            document.getElementById("res11").textContent = "Введите число побольше.";
        } else {
            document.getElementById("res11").textContent = "Введите число поменьше.";
        }
    }
});

// 4 Игра угадай ячейку на JavaScript
// Реализуйте описанную игру.
let selectedCells = [];
let foundCells = 0;
function random4() {
    selectedCells = [];
    while (selectedCells.length < 10) {
        let randomCell = Math.floor(Math.random() * 100);
        if (!selectedCells.includes(randomCell)) {
            selectedCells.push(randomCell);
        }
    }
}
function checkCell(cellIndex) {
    if (selectedCells.includes(cellIndex)) {
        foundCells++;
        document.getElementById("cell" + cellIndex).style.backgroundColor = "green";
    } else {
        document.getElementById("cell" + cellIndex).style.backgroundColor = "red";
    }

    if (foundCells === 10) {
        document.getElementById("message4").textContent = "Поздравляем! Вы нашли все загаданные клетки!";
    }
}
function createTable() {
    let table = document.getElementById("gameTable");
    for (let i = 0; i < 5; i++) {
        let row = table.insertRow();
        for (let j = 0; j < 5; j++) {
            let cellIndex = i * 5 + j;
            let cell = row.insertCell();
            cell.id = "cell" + cellIndex;
            cell.textContent = cellIndex;
            cell.addEventListener("click", function() {
                checkCell(parseInt(this.id.slice(4)));
            });
        }
    }
}
random4();
createTable();

// 5 Экранная клавиатура на JavaScript
// Реализуйте описанную клавиатуру. Пусть эта клавиатура будет привязана к какому-нибудь инпуту, то есть кликая по ней, мы будем вводить данные в этот инпут.
let keyboard5 = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Caps Lock'
];
let capsLock5 = false;
let elem5 = document.getElementById('elem5');
let keyb5 = document.getElementById('keyboard');
keyboard5.forEach(key => {
    let keyButton = document.createElement('button');
    keyButton.textContent = key;
    keyButton.addEventListener('click', () => {
        if (key === 'Caps Lock') {
            capsLock5 = !capsLock5;
            return;
        }
        if (capsLock5) {
            elem5.value += key.toUpperCase();
        } else {
            elem5.value += key;
        }
    });
    keyb5.appendChild(keyButton);
});

// 6 Линейный календарь на JavaScript
// Выведите в виде списка ul все числа текущего месяца. Средствами CSS поставьте пункты списка в ряд.
let calendar = document.getElementById('calendar6');
let date6 = document.getElementById('date6');
let currentDate = new Date();
let currentMonth = currentDate.toLocaleString('ru', { month: 'long' });
let currentYear = currentDate.getFullYear();
date6.textContent = currentMonth+' '+currentYear;
for (let i = 1; i <= new Date(currentYear, currentDate.getMonth() + 1, 0).getDate(); i++) {
    let day = document.createElement('li');
    day.textContent = i;
    if (i === currentDate.getDate()) {
        day.classList.add('current-day');
    }
    calendar.appendChild(day);
}

// 8 Поиск исторических события на JavaScript
// Реализуйте описанный сайт.
let input8 = document.getElementById('elem8');
let table8 = document.getElementById('table8');
let events = {
    2010: "Перепись населения в России",
    2011: "Родился семимиллиардный житель Земли",
    2012: "Несостоявшийся конец света или смена лидеров двух крупнейших государств",
    2013: "Смерть Маргарет Тэтчер",
    2014: "Олимпиада в Сочи",
    2015: "Семидесятилетие Победы в Великой Отечественной войне",
    2016: "Дональд Трамп избран президентом США",
    2017: "Первый в мире электрический грузовик",
    2018: "Чемпионат мира по футболу в России",
    2019: "Пожар в Нотр-Дам-де-Пари",
    2020: "Пандемия коронавирусной инфекции"
};
input8.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        let year = parseInt(input8.value);
        if (events[year]) {
            table8.textContent = year+' '+events[year];
        } else {
            table8.textContent = 'Событий не найдено';
        }
    }
});

// 9 Гороскоп на JavaScript
// Реализуйте показ гороскопа за текущий день.
let date9 = document.getElementById('date9');
let radios = document.querySelectorAll('input[type=radio]');
let horoscopeDiv = document.getElementById('horoscope');
function getHoroscope(sign9, day9) {
    let horoscopes = {
        овен: {
            Сегодня: "Сегодня вы будете полны энергии и решимости.",
            Завтра: "Завтра вас ждут новые возможности для самовыражения.",
            Послезавтра: "Послезавтра будет отличным днем для начала новых проектов."
        },
        телец: {
            today: "Сегодня у вас будет чувство уверенности и стабильности.",
            tomorrow: "Завтра вы сможете достичь поставленных целей с легкостью.",
            dayAfterTomorrow: "Послезавтра будет благоприятным временем для отдыха и расслабления."
        },
        близнецы: {
            today: "Сегодня ваша коммуникативность поможет вам решить сложные задачи.",
            tomorrow: "Завтра вы можете обнаружить новые идеи и перспективы.",
            dayAfterTomorrow: "Послезавтра будет хорошим временем для общения с близкими."
        },
        рак: {
            today: "Сегодня вы будете чувствовать себя защищенными и заботливыми.",
            tomorrow: "Завтра ваша интуиция поможет вам принять правильные решения.",
            dayAfterTomorrow: "Послезавтра вы можете встретить новых интересных людей."
        },
        лев: {
            today: "Сегодня ваша харизма привлечет внимание окружающих.",
            tomorrow: "Завтра вы сможете проявить свою творческую силу.",
            dayAfterTomorrow: "Послезавтра будет хорошим временем для спорта и физических упражнений."
        },
        дева: {
            today: "Сегодня ваша педантичность поможет вам выполнить все задачи точно.",
            tomorrow: "Завтра вы можете найти новые методы оптимизации своего труда.",
            dayAfterTomorrow: "Послезавтра будет отличным днем для планирования и организации."
        },
        весы: {
            today: "Сегодня ваше чувство баланса поможет вам разрешить конфликты.",
            tomorrow: "Завтра вы сможете принять важные решения с легкостью.",
            dayAfterTomorrow: "Послезавтра будет благоприятным временем для общения с партнерами."
        },
        скорпион: {
            today: "Сегодня ваша стойкость поможет вам преодолеть трудности.",
            tomorrow: "Завтра вы можете раскрыть новые аспекты своей личности.",
            dayAfterTomorrow: "Послезавтра будет хорошим временем для саморазвития."
        },
        стрелец: {
            today: "Сегодня ваш оптимизм поможет вам увидеть новые перспективы.",
            tomorrow: "Завтра вы можете получить неожиданные предложения.",
            dayAfterTomorrow: "Послезавтра будет благоприятным временем для путешествий."
        },
        козерог: {
            today: "Сегодня ваша целеустремленность поможет вам достичь успеха.",
            tomorrow: "Завтра вы сможете продвинуться к своим целям на шаг ближе.",
            dayAfterTomorrow: "Послезавтра будет отличным временем для планирования будущего."
        },
        водолей: {
            today: "Сегодня ваша оригинальность поможет вам найти нестандартные решения.",
            tomorrow: "Завтра вы можете обнаружить новые области интересов.",
            dayAfterTomorrow: "Послезавтра будет хорошим временем для общения с друзьями."
        },
        рыбы: {
            today: "Сегодня ваша интуиция поможет вам понять окружающих людей лучше.",
            tomorrow: "Завтра вы можете почувствовать вдохновение и творческую энергию.",
            dayAfterTomorrow: "Послезавтра будет благоприятным временем для медитации и внутреннего покоя."
        }
    };
    if (horoscopes[sign9.toLowerCase()] && horoscopes[sign9.toLowerCase()][day9]) {
        return horoscopes[sign9.toLowerCase()][day9];
    } else {
        return 'Прогноз не найден';
    }
}
date9.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        let birthdate = new Date(date9.value);
        let selected9 = document.querySelector('input[name=day]:checked').value;
        // Определение знака зодиака по дате рождения
        let sign9 = '';
        let day9 = birthdate.getDate();
        let month9 = birthdate.getMonth() + 1;
        if ((month9 === 3 && day9 >= 21) || (month9 === 4 && day9 <= 20)) {
            sign9 = 'Овен';
        } else if ((month9 === 4 && day9 >= 21) || (month9 === 5 && day9 <= 20)) {
            sign9 = 'Телец';
        }
        let horoscope = getHoroscope(sign9, selected9);
        horoscopeDiv.textContent = horoscope;
    }
});

// 10 Сайт предсказаний на JavaScript
// Реализуйте описанный сайт.
let timerId;
let res10;
function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}
document.getElementById('start10').addEventListener('click', function() {
    let timerElement = document.getElementById('timer10');
    timerId = setInterval(function() {
        timerElement.textContent = getRandomNumber(10);
    }, 100);
    this.classList.remove('active');
    document.getElementById('stop10').classList.add('active');
});
document.getElementById('stop10').addEventListener('click', function() {
    clearInterval(timerId);
    res10 = document.getElementById('timer10').textContent;
    if (res10 == 1) {
        document.getElementById('text10').textContent = 'сегодня тебя ждет успех!';
    } else if (res10 == 2) {
        document.getElementById('text10').textContent = 'сегодня ты встретишь свою родную душу';
    } else if (res10 == 3) {
        document.getElementById('text10').textContent = 'тебе повезёт сегодня';
    } else if (res10 == 4) {
        document.getElementById('text10').textContent = 'верь в себя и всё получится';
    } else if (res10 == 5) {
        document.getElementById('text10').textContent = 'смотри под ноги';
    } else if (res10 == 6) {
        document.getElementById('text10').textContent = 'посоветуйся с кем-то более мудрым если у тебя будет сложный выбор';
    } else if (res10 == 7) {
        document.getElementById('text10').textContent = 'твой друг тебе врёт';
    } else if (res10 == 8) {
        document.getElementById('text10').textContent = 'послушай музыку и успокойся';
    } else if (res10 == 9) {
        document.getElementById('text10').textContent = 'сегодняшний день отлично подходит для отдыха на свежем воздухе';
    } else if (res10 == 10) {
        document.getElementById('text10').textContent = 'попробуйте сегодня что-нибудь новое';
    };
    this.classList.remove('active');
});

// 11 Автодополнение на JavaScript
// Скопируйте себе приведенный HTML и CSS коды. Реализуйте автодополнение согласно описанному алгоритму.
let arr  = ['Belarus', 'Belgium', 'Bulgaria'];
let elem = document.querySelector('#elem11');
let list = document.querySelector('#list11');
elem.addEventListener('input', function() {
    list.textContent = '';
    if (this.value !== '') {
        let matches = arr.filter(item => item.startsWith(this.value));
        if (matches.length > 0) {
            for (let match of matches) {
                let li = document.createElement('li');
                li.textContent = match;
                list.appendChild(li);
                li.addEventListener('click', function() {
                    elem.value = this.textContent;
                    list.textContent = '';
                });
            }
        }
    }
});

// 12 Спойлер на JavaScript
// Скопируйте себе приведенный HTML и CSS коды. Реализуйте описанную работу спойлеров.
let toggles = document.querySelectorAll('.toggle');
toggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        let spoiler = this.parentElement.nextElementSibling;
        spoiler.classList.toggle('.active');
    });
});

// 13 Вкладки на JavaScript
// Скопируйте себе приведенный HTML и CSS коды. Реализуйте вкладки согласно описанному алгоритму.
let parent13 = document.querySelector('#parent13');
let links13  = parent13.querySelectorAll('.menu a');
let tabs   = parent13.querySelectorAll('.tab');
for (let i = 0; i < links13.length; i++) {
    links13[i].addEventListener('click', function(event) {
        let activeLink = parent13.querySelector('.menu a.active');
        activeLink.classList.remove('active');
        let activeTab = parent13.querySelector('.tab.active');
        activeTab.classList.remove('active');
        tabs[i].classList.add('active');
        this.classList.add('active');
        event.preventDefault();
    });
}

// 14 Аккордеон на JavaScript
// Скопируйте себе приведенный HTML и CSS коды. Реализуйте аккордеон согласно описанному алгоритму.
let parent = document.querySelector('#parent14');
let links  = parent.querySelectorAll('.tab14 .link14 a');
for (let link of links) {
    link.addEventListener('click', function(event) {
        let activeTab = parent.querySelector('.tab14.active14');
        if (activeTab) {
            activeTab.classList.remove('active');
        }
        let newTab = link.closest('.tab14');
        if (newTab !== activeTab) {
            newTab.classList.add('active');
        }
        event.preventDefault();
    });
}


