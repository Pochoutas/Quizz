let question = ["Comment est ce que je m'appelle?",
    "J'ai quel âge?"
    , "Ou-est ce que j'ai fait ma formation ?",
    "A quel personnage de fiction peut on me comparer?",
    "Pour quelle raison il faur m'embaucher?",
    "qsdfghj"]

let answers = [
    ["Jennifer", "Jessica", "Eloise", "Chloé"],
   
    ["10", "40", "24", "36"],
    ["AFPA", "En autodidacte", "Ecole RI7", "Openclassroom"],
    ["Dora l'exploratrice", "Iron man", "Kimmy Schidt", "Wonder Woman"],
    ["Il ne faut tout simplement pas", "J'ai soif de savoir et d'évolution", "J'ai un parcours atypique", "Pour la jeunesse"],
]

let good = ["Jennifer",
    "24",
    "Ecole RI7",
    "Kimmy Schidt"
    , "J'ai soif de savoir et d'évolution"]

let endcontainer = document.querySelector("#end")// placer le messagede fin en html
let questioncontainer = document.querySelector("#question")// placer les question en html
let answerscontainer = document.querySelector("#answers")// placer les reponses en html
endcontainer.style.display = "none"


let score = 0
let count = 0// le nombre de question qui va apparaitre
let time = 30

let timecontainer = document.querySelector("#timer")//placer 
let startcontainer = document.querySelector('#start')
let restartcontainer = document.querySelector('#restart')
let inter

function quizz() {
    startcontainer.style.display = "none"
    clearInterval(inter)
    inter = setInterval(function () {// fonction timer
        time--;
        timecontainer.innerHTML = time
        if (time == 0) {
            count++
            time = 30
            quizz()

        }
    }, 1000)

    questioncontainer.innerHTML = question[count]// faire apparaitre la question qui correspond au tableau
    document.getElementById('bg').setAttribute('style', 'visibility:visible')
    // document.getElementById('answers').setAttribute('style', 'display:block'); //faire apparaitre les boutons que j'ai retiré en css
    let first = document.querySelector("#first") // placer les reponses dans les boutons
    let second = document.querySelector("#second")
    let third = document.querySelector("#third")
    let fourth = document.querySelector("#fourth")
    first.innerHTML = answers[count][0]// faire correspondre les boutons aux bonnes reponses celon la question
    second.innerHTML = answers[count][1]
    third.innerHTML = answers[count][2]
    fourth.innerHTML = answers[count][3]

}

function reply(elem) {
    clearInterval(inter)
    time = 30
    if (elem.innerHTML == good[count]) {// le score augmente si la reponse est la bonne
        score++
        document.querySelector("#score").innerHTML = score// faire monter le score sur html
    }

    if (count >= 4) {

        timecontainer.style.display = "none"
        answerscontainer.style.display = "none"
        questioncontainer.style.display = "none"
        restartcontainer.style.display = "block"
        endcontainer.style.display = "flex"


        if (score == 0) {
            let looser = "Alors vous n'avez vraiment rien compris mais je pense que vous devriez m'embaucher , votre score: " + score
            endcontainer.innerHTML = looser


        } else if (score <= 4) {
            let bad = "Votre score est raisonnable, c'est une raison de m'embaucher: " + score
            endcontainer.innerHTML = bad

        } else if (score == 5) {
            let win = " Mai c'est un perfect nous sommes fait pour travailler ensemble embauchez moi : " + score
            endcontainer.innerHTML = win

        }

    }

    count++
    quizz()// passer a la question suivante
}

function restart() {
    timecontainer.style.display = "flex"
    answerscontainer.style.display = "flex"
    questioncontainer.style.display = "flex"
    restartcontainer.style.display = "none"
    endcontainer.style.display = "none"
    count = 0
    score = 0
    document.querySelector("#score").innerHTML = score
    quizz()
}


