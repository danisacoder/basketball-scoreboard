// score variables

let homeScore = 2
let guestScore = 8

// DOM team text

let homeTitle = document.getElementById('home-title')
let guestTitle = document.getElementById('guest-title')

// DOM score indicators

let homeScoreText = document.getElementById('home-score-text')
let guestScoreText = document.getElementById('guest-score-text')

// update DOM score with score variables

function scoreUpdate() {
    homeScoreText.textContent = homeScore
    guestScoreText.textContent = guestScore
    highlightLeader()
}

scoreUpdate()

// score increment buttons

let homeScore1 = document.getElementById('home-score-1')
let homeScore2 = document.getElementById('home-score-2')
let homeScore3 = document.getElementById('home-score-3')
let guestScore1 = document.getElementById('guest-score-1')
let guestScore2 = document.getElementById('guest-score-2')
let guestScore3 = document.getElementById('guest-score-3')

// increment button functions

homeScore1.addEventListener('click', function() {
    homeScore += 1
    scoreUpdate()
})

homeScore2.addEventListener('click', function() {
    homeScore += 2
    scoreUpdate()
})

homeScore3.addEventListener('click', function() {
    homeScore += 3
    scoreUpdate()
})

guestScore1.addEventListener('click', function() {
    guestScore += 1
    scoreUpdate()
})

guestScore2.addEventListener('click', function() {
    guestScore += 2
    scoreUpdate()
})

guestScore3.addEventListener('click', function() {
    guestScore += 3
    scoreUpdate()
})

// highlight the leader

function highlightLeader() {
    if (homeScore > guestScore) {
            console.log('home is winning')
            homeTitle.classList.add('currentWinner');
            guestTitle.classList.remove('currentWinner')
    } else if (guestScore > homeScore) {
            console.log('guest is winning')
            guestTitle.classList.add('currentWinner');
            homeTitle.classList.remove('currentWinner')
    } else {
            console.log('tied')
            guestTitle.classList.remove('currentWinner')
            homeTitle.classList.remove('currentWinner')
    }
}

