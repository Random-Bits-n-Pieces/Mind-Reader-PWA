const cards = [
    { value: 4, numbers: [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31,36,37,38,39,44,45,46,47,52,53,54,55,60,13], element: undefined },
    { value: 32, numbers: [32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,46], element: undefined },
    { value: 16, numbers: [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,48,49,50,51,52,53,54,55,56,57,58,59,60,31], element: undefined },
    { value: 8, numbers: [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31,40,41,42,43,44,45,46,47,56,57,58,59,60,13], element: undefined },
    { value: 2, numbers: [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31,34,35,38,39,42,43,46,47,50,51,54,55,58,59], element: undefined },
    { value: 1, numbers: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59], element: undefined }
]

const sectionTitle = document.getElementById("sectionTitle");
const sectionInstructions = document.getElementById("sectionInstructions");
const sectionCard0 = document.getElementById("sectionCard0");
const sectionCard1 = document.getElementById("sectionCard1");
const sectionCard2 = document.getElementById("sectionCard2");
const sectionCard3 = document.getElementById("sectionCard3");
const sectionCard4 = document.getElementById("sectionCard4");
const sectionCard5 = document.getElementById("sectionCard5");
const sectionResult = document.getElementById("sectionResult");
const lblResult = document.getElementById("lblResult");

const btnContinue = document.getElementById("btnContinue");
const btnPlay = document.getElementById("btnPlay");
const btnYes0 = document.getElementById("btnYes0");
const btnNo0 = document.getElementById("btnNo0");
const btnYes1 = document.getElementById("btnYes1");
const btnNo1 = document.getElementById("btnNo1");
const btnYes2 = document.getElementById("btnYes2");
const btnNo2 = document.getElementById("btnNo2");
const btnYes3 = document.getElementById("btnYes3");
const btnNo3 = document.getElementById("btnNo3");
const btnYes4 = document.getElementById("btnYes4");
const btnNo4 = document.getElementById("btnNo4");
const btnYes5 = document.getElementById("btnYes5");
const btnNo5 = document.getElementById("btnNo5");
const btnTryAgain = document.getElementById("btnTryAgain");

let yourNumber = 0;

const setupGames = () =>
{
    populateCards()
}

const populateCards = () =>
{
    for(let i=0;i<6;i++)
    {
        cards[i].element = document.getElementById('sectionCard'+i);
        const numContainer = cards[i].element.firstElementChild;
        for(let j=0;j<30;j++)
        {
            let cardNumber = document.createElement("div");
            cardNumber.innerHTML = cards[i].numbers[j];
            numContainer.append(cardNumber);
        }
    }
}

const theBigReveal = () => {
    if (yourNumber === 0 || yourNumber > 60)
    {
        lblResult.innerText = "No cheating, try again."
        return;
    }

    lblResult.innerText = yourNumber;
}

btnContinue.addEventListener('click', () => {
    sectionTitle.classList.add('hidden');
    sectionInstructions.classList.remove('hidden');
});

btnPlay.addEventListener('click', () => {
    sectionInstructions.classList.add('hidden');
    sectionCard0.classList.remove('hidden');
});

btnYes0.addEventListener('click', () => {
    sectionCard0.classList.add('hidden');
    sectionCard1.classList.remove('hidden');
    yourNumber += cards[0].value;
});

btnNo0.addEventListener('click', () => {
    sectionCard0.classList.add('hidden');
    sectionCard1.classList.remove('hidden');
});

btnYes1.addEventListener('click', () => {
    sectionCard1.classList.add('hidden');
    sectionCard2.classList.remove('hidden');
    yourNumber += cards[1].value;
});

btnNo1.addEventListener('click', () => {
    sectionCard1.classList.add('hidden');
    sectionCard2.classList.remove('hidden');
});

btnYes2.addEventListener('click', () => {
    sectionCard2.classList.add('hidden');
    sectionCard3.classList.remove('hidden');
    yourNumber += cards[2].value;    
});

btnNo2.addEventListener('click', () => {
    sectionCard2.classList.add('hidden');
    sectionCard3.classList.remove('hidden');
});

btnYes3.addEventListener('click', () => {
    sectionCard3.classList.add('hidden');
    sectionCard4.classList.remove('hidden');
    yourNumber += cards[3].value;
});

btnNo3.addEventListener('click', () => {
    sectionCard3.classList.add('hidden');
    sectionCard4.classList.remove('hidden');
});

btnYes4.addEventListener('click', () => {
    sectionCard4.classList.add('hidden');
    sectionCard5.classList.remove('hidden');
    yourNumber += cards[4].value;
});

btnNo4.addEventListener('click', () => {
    sectionCard4.classList.add('hidden');
    sectionCard5.classList.remove('hidden');
});

btnYes5.addEventListener('click', () => {
    sectionCard5.classList.add('hidden');
    sectionResult.classList.remove('hidden');
    yourNumber += cards[5].value;
    theBigReveal();
});

btnNo5.addEventListener('click', () => {
    sectionCard5.classList.add('hidden');
    sectionResult.classList.remove('hidden');
    theBigReveal();
});

btnTryAgain.addEventListener('click', () => {
    sectionResult.classList.add('hidden');
    sectionInstructions.classList.remove('hidden');
    yourNumber = 0;
});

setupGames();