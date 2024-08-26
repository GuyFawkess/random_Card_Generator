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

    document.getElementById('randomizeButton').addEventListener('click', randomizeCard);
};
