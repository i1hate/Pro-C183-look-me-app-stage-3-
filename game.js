let words = [
    {
            "inputs": 5,
            "category": "Sports, Ok i will directely tell you the game its 'Chess'", 
            "word": "Chess"
    },
    {
        "inputs": 6,
        "category": "European Country, ok to make it easier for you to guess the country i will give you a hint of the country i am thinking of, you have to tell the country which is located on english channel and bay of Biscay", 
        "word": "France"
    },
    {
        "inputs": 6,
        "category": "latin american country, ok to make it easier for you to guess the country i will give you a hint of the country i am thinking of, ya where worlds biggest forest is located",
        "word": "Brazil"
    },
    {
        "inputs": 7,
        "category": "guess this language:- Español",
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

