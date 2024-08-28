window.onload = function () {
    function randomizeCard() {
        // Clear previous suit classes
        const suits = ['heart', 'diamond', 'club', 'spade'];
        suits.forEach(suit => {
            document.querySelector('.top-club').classList.remove(suit);
            document.querySelector('.bottom-club').classList.remove(suit);
        });

        // Random numero
        const randomNumber = () => {
            let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
            return numbers[Math.floor(Math.random() * numbers.length)];
        };

        document.querySelector('.number').innerHTML = randomNumber();

        // Random suit
        switch (Math.floor(Math.random() * 4)) {
            case 0:
                document.querySelector('.top-club').classList.add('heart');
                document.querySelector('.bottom-club').classList.add('heart');
                document.querySelectorAll(".heart").forEach(heart => heart.innerHTML = "♥");
                break;
            case 1:
                document.querySelector('.top-club').classList.add('diamond');
                document.querySelector('.bottom-club').classList.add('diamond');
                document.querySelectorAll(".diamond").forEach(diamond => diamond.innerHTML = "♦");
                break;
            case 2:
                document.querySelector('.top-club').classList.add('club');
                document.querySelector('.bottom-club').classList.add('club');
                document.querySelectorAll(".club").forEach(club => club.innerHTML = "♣");
                break;
            case 3:
                document.querySelector('.top-club').classList.add('spade');
                document.querySelector('.bottom-club').classList.add('spade');
                document.querySelectorAll(".spade").forEach(spade => spade.innerHTML = "♠");
                break;
        }
    }

    randomizeCard();

    // poniendo el set time lo puse a 5 seg para que no tengas que esperar tanto x)

    setInterval(randomizeCard, 10000);


    // el boton

    document.getElementById('randomizeButton').addEventListener('click', randomizeCard);

    // INPUTS

    document.querySelector('#widthInput').addEventListener('input', function () {
        document.querySelector('.card').style.width = this.value + 'px';
    });

    document.querySelector('#heightInput').addEventListener('input', function () {
        document.querySelector('.card').style.height = this.value + 'px';
    });

};
