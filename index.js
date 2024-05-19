let homeScore = 0
let guestScore = 0
let homeStoreEl = document.getElementById('home-score')
let guestStoreEl = document.getElementById('guest-score')
function add2PointsHome() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function add3PointsHome() {
    homeScore += 3
    homeStoreEl.textContent= homeScore
    
}

function add4PointsHome() {
    homeScore += 4
    homeStoreEl.textContent= homeScore
    
}

function add2PointsGuest() {
    guestScore +=2
    guestStoreEl.textContent = guestScore
}

function add3PointsGuest() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}

function add4PointsGuest() {
    guestScore += 4
    guestStoreEl.textContent = guestScore
}

function reset() {
    homeScore = 0
    guestScore = 0
    homeStoreEl.textContent= homeScore
    guestStoreEl.textContent = guestScore
}