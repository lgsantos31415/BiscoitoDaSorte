let frases = [
    "A jornada começa com um único passo.",
    "Acredite no impossível, conquiste o inatingível.",
    "A paciência é a chave para desvendar grandes mistérios.",
    "Seja a mudança que você deseja ver no mundo.",
    "A sorte favorece os corajosos.",
    "Aprenda com o passado, viva no presente, sonhe com o futuro.",
    "Sua criatividade é a única limitação.",
    "A simplicidade é a essência da verdadeira felicidade.",
    "O sucesso está na jornada, não apenas no destino.",
    "A felicidade está na gratidão pelo que você tem hoje."
]
document.getElementById("img1").addEventListener("click", function(){
    let rand = (Math.floor(Math.random() * 10))
    document.getElementById("box2").style.display = "flex";
    document.getElementById("box1").style.display = "none";
    document.getElementById("fraseMotivacional").innerText = frases[rand]
})

document.getElementById("bttn").addEventListener("click", function(){
    document.getElementById("box2").style.display = "none";
    document.getElementById("box1").style.display = "flex";
})