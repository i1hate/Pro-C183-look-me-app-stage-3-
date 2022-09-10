let words = [
    {
            "inputs": 5,
            "category": "Sports, It is a board game and you use characters and capture the king to win the game with strategy and brain", 
            "word": "Chess"
    },
    {
        "inputs": 6,
        "category": "European Country, Lous XVI ruled this place in the past and a big revolution had taken place during that time", 
        "word": "France"
    },
    {
        "inputs": 6,
        "category": "latin american country, worlds biggest forest is located in this country",
        "word": "Brazil"
    },
    {
        "inputs": 7,
        "category": "guess this language : Español",
        "word": "Spanish"
    },
]

$(document).ready(function () {
    fillBlanks();
})

function fillBlanks() {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    $("#blanks").empty();
    for (let i = 0; i < randomWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }

    $("#hint").html(randomWord.category)

    var gameOver=false
    $(".clickable").click(function () {
        var correctGuess = false;      

        let id = $(this).attr("id");
        var life = parseInt($("#life").text())

        for (var i = 0; i < randomWord.word.length; i++) {
            if (randomWord.word.charAt(i).toLowerCase() == id) {
                if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {

                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;

                    if ($("#blanks").text() === randomWord.word.toLowerCase()) {
                        $("#result").text("You Win!!")
                        correctGuess = true;
                        gameOver=true
                    }
                }                
            }
            
        }
       
        if (life > 0 && correctGuess!=true && gameOver!=true) {           
            life = life - 1
            $("#life").text(life)
        }
        else if (life == 0) {
            $("#result").text("You Lost!! Try Again!! the word was " + randomWord.word + "." )
            
        } 
        


    })
}

