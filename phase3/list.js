
function templates() {
    document.querySelector('.new-item').style.display = "block";
}

//past entries

function pastentry1() {
    document.getElementById("templates").style.display = "block";
    var textBox = document.getElementById("words");
    textBox.value = "";
    textBox.placeholder = "I had two classes and one midterm. The midterm was fairly easy. I also got mcdonald's for dinner"
}
function pastentry2() {
    document.getElementById("templates").style.display = "block";
    var textBox = document.getElementById("words");
    textBox.value = "";
    textBox.placeholder = "highs: I got a 96% in my math homework. lows: I broke a cup."
}

// entries

function any() {
    document.getElementById("templates").style.display = "block";
    var textBox = document.getElementById("words");
    textBox.value = "";
    textBox.placeholder = "Write anything and everything that comes to mind here!"
}
function high() {
    document.getElementById("templates").style.display = "block";
    var textBox = document.getElementById("words");
    textBox.value = "";
    textBox.placeholder = "What were your highs and lows for today?"
}
function prompt() {
    document.getElementById("templates").style.display = "block";
    var textBox = document.getElementById("words");
    textBox.value = "";
    textBox.placeholder = randomPrompt();
}


function save() {
    var itemName = document.getElementById("words").value;
    if (itemName != '') {

        var itemsStorage = localStorage.getItem('items');

        if (itemsStorage == null) {
            itemsStorage = '[]';
        }
        var itemsArray = JSON.parse(itemsStorage);
        itemsArray.push({ "item": itemName, "status": 0 });
        saveItems(itemsArray);
        receiveItems();
        document.querySelector('.new-item input').value = '';
        document.querySelector('.new-item').style.display = 'none';
    }
}

// recalling stored items
function receiveItems() {

    const itemsList = document.querySelector('ul.items');
    itemsList.innerHTML = ' ';
    var newItemsHTML = ' ';

    try {
        var itemsStorage = localStorage.getItem('items');
        if (itemsStorage == null) {
            itemsStorage = '[]';
        }
        var itemsArray = JSON.parse(itemsStorage);

        for (var i = 0; i < itemsArray.length; i++) {
            var status = '';
            //setting the status
            if (itemsArray[i].status == 1) {
                status = 'class="done"';
            }

            //adding the icons
            newItemsHTML += `<li data-itemindex="${i}" ${status}>
                <span class="item">${itemsArray[i].item}</span> 
                <div><span class="heart"> <img src="./assets/heart.png" alt= "love" width = 30px height = 30px> </span></div>
                </li>`;
        }
        itemsList.innerHTML = newItemsHTML;
    } catch (e) {
    }
}

//function for saving items
function saveItems(obj) {
    var string = JSON.stringify(obj);
    localStorage.setItem('items', string);
}

receiveItems();

function dateFormat() {
    var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"];
    var days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat", "sun"];
    var d = new Date();

    var mon = months[d.getMonth()];
    var date = d.getDate();
    var year = d.getFullYear();
    var day = days[d.getDay()];

    var result = mon + " " + date + ", " + year + " (" + day + ")";
    return result;
}

function randomPrompt() {
    var ideas = ["Who made you feel good this week?", "What was the biggest mistake you made this week?", "What did you do this week that moved you closer to reaching your goals?", "Is there anything you did this week that you wish you’d done differently?", "What did you most enjoy doing this week?", "How did you procrastinate on important tasks this week?", "What did you learn today/this week?", "What’s the funniest thing that happened to you this week?", "Write a letter to your older self", "Write about your childhood"]

    var num = Math.floor(Math.random() * 10);

    return ideas[num];
}
