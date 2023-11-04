function submitAnswers() {
    let a1 = document.querySelector('input[name="a1"]:checked').value;
    let b1 = document.querySelector('input[name="b1"]:checked').value;
    let c1 = document.querySelector('input[name="c1"]:checked').value;
    let d1 = document.querySelector('input[name="d1"]:checked').value;
    let e1 = document.querySelector('input[name="e1"]:checked').value;
    let f1 = document.querySelector('input[name="f1"]:checked').value;
    document.getElementById("quiz-form").style.display = "none";
    document.getElementById("results").innerHTML ="Wyniki Twojej diagnostyki:<br><br>"+"Pytanie A - Na ile jesteś gotowa/gotowy by uwolnić uwięzione emocje? <br> Twoja odpowiedź: "+a1+"<br><br><br>"+"Pytanie B - Z jaką sytuacją są związane? <br> Twoja odpowiedź: "+b1+"<br><br><br>"+"<br>"+"Pytanie C - Kiedy doszło do ich zablokowania? <br> Twoja odpowiedź: "+c1+"<br><br><br>"+"<br>"+"Pytanie D - Gdzie one są uwięzione? <br> Twoja odpowiedź: "+d1+"<br><br><br>"+"Pytanie E - Jaką przyjęły formę? <br> Twoja odpowiedź: " + e1 + "<br><br><br>"+"Pytanie F - W jaki sposób możesz z nimi pracować? <br> Twoja odpowiedź: "+f1+"<br><br><br>";
  }
