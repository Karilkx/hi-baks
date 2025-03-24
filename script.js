let yesSize = 1; 
let noMove = 0; 

function yesClicked() {
    let yesQuestions = [
        "220 ba ean? :< (oo nga / jk lng)",
        "Baka namali kalang nang tap, gi na :< (sorry:< / 22o nga)",
        "22o tlga? (oo nga / hindi)",
        "Weh?? (oo nga / Hindi eh)",
        "Di nga? (oo nga / Ayoko na)",
        "Bat parang napipilitan ka? (Medyo lang / Oo nga eh)",
        "D'wag na, parang napipilitan kalang eh (Hindi / Okay sige ayoko na / Ewan)"
    ];

    askQuestions(yesQuestions, "🎉 YES! Edi tayo na 😍");
}

function noClicked() {
    let noQuestions = [
        "Pls?:< (Sige na nga / Ayoko)",
        "C-gurado naba ean?:<< (Oo naman! / Ewan)",
        "Last chance:<<< (Bakit ba kasi / No pa rin)",
        "Baka gusto mo pag-isipan ulit?:<<<< (No is no / Pwede next time?)",
        "Sakit mo nmn:<<<<<< peru pls? (sorry / No pa rin)",
        "Baka kaya pato late game?:<<<<<< (Malay mo / Di talaga)",
        "Ayaw mo maawa?:<<<<<<<< (Wala akong awa / Sige na nga)",
        "Kung ako nlng sana~~ baks nmn:<<<<<<<<< (ayuko nga / pakeko)",
        "Awa nlng tlga baks,awa nlng:<<<<<<<<< (Awa lang pero no pa rin / Baka)",
        "Tigas nang hart mo! (Okay fine sige na / Talaga)"
    ];

    askQuestions(noQuestions, "😭 Hala, di ka talaga nadala... Okay lang, move on na ako. *sobs*");
}

async function askQuestions(questions, finalMessage) {
    let yesButton = document.getElementById("yes-btn");
    let noButton = document.getElementById("no-btn");

    for (let i = 0; i < questions.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800));

        let answer = prompt(questions[i]);

        // Lumalaki ang Yes button kada sagot
        yesSize += 0.1;
        yesButton.style.transform = `scale(${yesSize})`;

        // Gumagalaw ang No button palayo
        noMove += 30;
        noButton.style.position = "relative";
        noButton.style.left = `${noMove}px`;

        if (answer && (answer.toLowerCase().includes("ayoko") || answer.toLowerCase().includes("hindi"))) {
            alert("😢 Sige, respeto ko desisyon mo.");
            return;
        }
    }

    alert(finalMessage);
}

