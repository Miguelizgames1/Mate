function send() {
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value
    actual_awnser = parseInt(number1) * parseInt(number2)
}

question_number = "<h4>" + number1 + "X"+ number2 +"</h4>"

question_word = "<h4>"+ number1 + " X "+ number2 +"</h4>";
inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
row =  question_word + inputBox + checkButton ; 

number1 = document.getElementById("number1").value = ""
number2 = document.getElementById("number2").value = ""

question_turn = "player1"
awnser_turn = "player2"

function check() {
    get_awnser = document.getElementById("input_check_box").value
    if(get_awnser == actual_awnser)
    {
        if(awnser_turn == "player1")
        {
            update_player1_score = player1_score +1;
            document.getElementById()
        }
    }

    
}


