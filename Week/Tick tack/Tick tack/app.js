
var mainDiv = document.getElementById('tick')
//------------------------------------------
var coinArrayX = []
var coinArrayY = []

// create div's for 9 box
var mainBox = document.createElement('div')
mainBox.setAttribute('class', "mainBox")
mainBox.setAttribute('id', "mainBox-box")

var div1 = document.createElement('div')
div1.setAttribute('class', "div1")
div1.setAttribute('id', "div1-box")
div1.setAttribute('onClick', "div1Func()")

var div2 = document.createElement('div')
div2.setAttribute('class', "div2")
div2.setAttribute('id', "div2-box")
div2.setAttribute('onClick', "div2Func()")

var div3 = document.createElement('div')
div3.setAttribute('class', "div3")
div3.setAttribute('id', "div3-box")
div3.setAttribute('onClick', "div3Func()")

var div4 = document.createElement('div')
div4.setAttribute('class', "div4")
div4.setAttribute('id', "div4-box")
div4.setAttribute('onClick', "div4Func()")

var div5 = document.createElement('div')
div5.setAttribute('class', "div5")
div5.setAttribute('id', "div5-box")
div5.setAttribute('onClick', "div5Func()")

var div6 = document.createElement('div')
div6.setAttribute('class', "div6")
div6.setAttribute('id', "div6-box")
div6.setAttribute('onClick', "div6Func()")

var div7 = document.createElement('div')
div7.setAttribute('class', "div7")
div7.setAttribute('id', "div7-box")
div7.setAttribute('onClick', "div7Func()")

var div8 = document.createElement('div')
div8.setAttribute('class', "div8")
div8.setAttribute('id', "div8-box")
div8.setAttribute('onClick', "div8Func()")

var div9 = document.createElement('div')
div9.setAttribute('class', "div9")
div9.setAttribute('id', "div9-box")
div9.setAttribute('onClick', "div9Func()")


// generating "X" and "Y"
var user1
var user2
var coinX = []
var coinY = []
function userInput1() {
    swal({
        text: "Please select X or Y to start game for user One..",
        content: "input",
        button: {
            text: "Go",
            closeModal: false,
        }
    })
        .then(function(coin) {
            var x = "X";
            var y = "Y";
            if (coin !== null && coin !== '' && coin !== " " && coin.toUpperCase() === x || coin.toUpperCase() === y) {
                swal({
                    text: "You selected " + coin.toUpperCase(),
                    button: {
                        text: "Go Second User",
                        closeModal: true,
                    },
                }).then(function() {
                    user1 = coin.toUpperCase()
                    for (var i = 0; i < 4; i++) {
                        if (user1 === "X") {
                            coinX.push(user1)
                        } else {
                            coinY.push(user1)
                        }
                    }
                    userInput2()
                })
            }
            else {
                swal({
                    text: "Please select X or Y for start game",
                    button: {
                        text: "Ok",
                        closeModal: true,
                    },
                }).then(function(){
                    userInput1()
                })
            }
        }).catch(function (error) {
            // console.log(error)
            userInput1()
        })
}

userInput1()

function userInput2() {
    swal({
        text: "Please select X or Y to start game for user Two..",
        content: "input",
        button: {
            text: "Go",
            closeModal: false,
        },
    })
        .then(coin => {
            var x = "X";
            var y = "Y";
            if (coin !== null && coin !== '' && coin !== " " && coin.toUpperCase() !== user1.toUpperCase() && coin.toUpperCase() === x || coin.toUpperCase() === y) {
                swal({
                    text: "You selected " + coin.toUpperCase(),
                    button: {
                        text: "Start Game",
                        closeModal: true,
                    },
                }).then(() => {
                    user2 = coin.toUpperCase()
                    for (var i = 0; i < 4; i++) {
                        if (user2 === "Y") {
                            coinY.push(user2)
                        } else {
                            coinX.push(user2)
                        }
                    }
                    startTickTack()
                })
            }
            else {
                swal({
                    text: "Please select X or Y for start game",
                    button: {
                        text: "Ok",
                        closeModal: true,
                    },
                }).then(() => {
                    userInput2()
                })
            }
        }).catch((error) => {
            // console.log(error)
            userInput2()
        })
}



// start games
var user = document.getElementById('user')
var playerNo = document.createElement('h3');
playerNo.setAttribute('class', "player-info")
playerNo.setAttribute('id', "player")
// var span = document.createElement('span');
// span.setAttribute('class', "user-value")

//--------------------------------------------------------------------------
//create all div 
var coinArray = [];
function startTickTack() {
    // console.log(user1, "user1")
    // console.log(user2, "user2")
    if (user1 === "X") {
        for (var i = 0; i < coinX.length; i++) {
            console.log(coinArray)
            coinArray.push(coinX[i])
            if (coinX[i] !== coinY[i]) {
                coinArray.push(coinY[i])
            }
        }
    } else {
        for (var i = 0; i < coinY.length; i++) {
            coinArray.push(coinY[i])
            if (coinY[i] !== coinX[i]) {
                coinArray.push(coinX[i])
            }
        }
    }

    mainBox.appendChild(div1)
    mainBox.appendChild(div2)
    mainBox.appendChild(div3)
    mainBox.appendChild(div4)
    mainBox.appendChild(div5)
    mainBox.appendChild(div6)
    mainBox.appendChild(div7)
    mainBox.appendChild(div8)
    mainBox.appendChild(div9)

    var text = "Now Player " + user1 + " have a chance for fill the box "
    var h3Text = document.createTextNode(text)
    playerNo.appendChild(h3Text)
    user.appendChild(playerNo)

    mainDiv.appendChild(mainBox)
}

//--------------------------------------------------------------------

var flag1 = true;
function div1Func() {
    if (flag1) {
        createCoinWithUserCoin(div1)
        flag1 = false
    } else {
        alert('One time Click')
    }
}
var flag2 = true;
function div2Func() {
    if (flag2) {
        createCoinWithUserCoin(div2)
        flag2 = false
    } else {
        alert('One time Click')
    }
}
var flag3 = true;
function div3Func() {
    if (flag3) {
        createCoinWithUserCoin(div3)
        flag3 = false
    } else {
        alert('One time Click')
    }
}
var flag4 = true;
function div4Func() {
    if (flag4) {
        createCoinWithUserCoin(div4)
        flag4 = false
    } else {
        alert('One time Click')
    }
}
var flag5 = true;
function div5Func() {
    if (flag5) {
        createCoinWithUserCoin(div5)
        flag5 = false
    } else {
        alert('One time Click')
    }
}
var flag6 = true;
function div6Func() {
    if (flag6) {
        createCoinWithUserCoin(div6)
        flag6 = false
    } else {
        alert('One time Click')
    }
}
var flag7 = true;
function div7Func() {
    if (flag7) {
        createCoinWithUserCoin(div7)
        flag7 = false
    } else {
        alert('One time Click')
    }
}
var flag8 = true;
function div8Func() {
    if (flag8) {
        createCoinWithUserCoin(div8)
        flag8 = false
    } else {
        alert('One time Click')
    }
}
var flag9 = true;
function div9Func() {
    if (flag9) {
        createCoinWithUserCoin(div9)
        flag9 = false
    } else {
        alert('One time Click')
    }
}

//------------------------------------------------------

// create sequance possibilities
var div1Value
var div2Value
var div3Value
var div4Value
var div5Value
var div6Value
var div7Value
var div8Value
var div9Value

function createSequance(div) {
    var cases = div.getAttribute('class')
    console.log(cases, "class")
    switch (cases) {
        case 'div1': {
            if (div.childNodes[0] !== undefined) {
                var span = div.childNodes[0].childNodes[0]
                div1Value = span.nodeValue
                break;
            }
        }
        case 'div2': {
            if (div.childNodes[0] !== undefined) {
                var span = div.childNodes[0].childNodes[0]
                div2Value = span.nodeValue
                break;
            }
        }
        case 'div3': {
            if (div.childNodes[0] !== undefined) {
                var span = div.childNodes[0].childNodes[0]
                div3Value = span.nodeValue
                break;
            }
        }
        case 'div4': {
            if (div.childNodes[0] !== undefined) {
                var span = div.childNodes[0].childNodes[0]
                div4Value = span.nodeValue
                break;
            }
        }
        case 'div5': {
            if (div.childNodes[0] !== undefined) {
                var span = div.childNodes[0].childNodes[0]
                div5Value = span.nodeValue
                break;
            }
        }
        case 'div6': {
            if (div.childNodes[0] !== undefined) {
                var span = div.childNodes[0].childNodes[0]
                div6Value = span.nodeValue
                break;
            }
        }
        case 'div7': {
            if (div.childNodes[0] !== undefined) {
                var span = div.childNodes[0].childNodes[0]
                div7Value = span.nodeValue
                break;
            }
        }
        case 'div8': {
            if (div.childNodes[0] !== undefined) {
                var span = div.childNodes[0].childNodes[0]
                div8Value = span.nodeValue
            }
            break;
        }
        case 'div9': {
            if (div.childNodes[0] !== undefined) {
                var span = div.childNodes[0].childNodes[0]
                div9Value = span.nodeValue
            }
            break;
        }
        default: { }
    }
    if (div1Value !== undefined && div2Value !== undefined && div3Value !== undefined && div1Value === div2Value && div2Value === div3Value && div3Value === div1Value) {
        swal({
            text: "User " + div1Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(function() {
                location = './index.html'
            })
    }
    else if (div4Value !== undefined && div5Value !== undefined && div6Value !== undefined && div4Value === div5Value && div5Value === div6Value && div4Value === div6Value) {
        swal({
            text: "User " + div5Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            })
    }
    else if (div7Value !== undefined && div8Value !== undefined && div9Value !== undefined && div7Value === div8Value && div8Value === div9Value && div7Value === div9Value) {
        swal({
            text: "User " + div8Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            })
    }
    else if (div1Value !== undefined && div4Value !== undefined && div7Value !== undefined && div1Value === div4Value && div4Value === div7Value && div1Value === div7Value) {
        swal({
            text: "User " + div4Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            })
    }
    else if (div2Value !== undefined && div5Value !== undefined && div8Value !== undefined && div2Value === div5Value && div5Value === div8Value && div2Value === div8Value) {
        swal({
            text: "User " + div5Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            })
    }
    else if (div3Value !== undefined && div6Value !== undefined && div9Value !== undefined && div3Value === div6Value && div6Value === div9Value && div3Value === div9Value) {
        swal({
            text: "User " + div6Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            })
    }
    else if (div1Value !== undefined && div5Value !== undefined && div9Value !== undefined && div1Value === div5Value && div5Value === div9Value && div1Value === div9Value) {
        swal({
            text: "User " + div9Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            })
    }
    else if (div3Value !== undefined && div5Value !== undefined && div7Value !== undefined && div3Value === div5Value && div5Value === div7Value && div3Value === div7Value) {
        swal({
            text: "User " + div7Value + " Win",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(() => {
                location = './index.html'
            })
    }
}

var userCoin = 0;
function createCoinWithUserCoin(div) {
    var div1Coin
    if ( userCoin >7) {
        swal({
            text: "Match Tied Try Again",
            button: {
                text: "Reload",
                closeModal: true,
            }
        })
            .then(function () {
                location = './index.html'
            })
    } else {
        div.style.background = "goldenrod"
        div1Coin = coinArray[userCoin]
        var span = document.createElement('span')
        span.setAttribute('class', "spans")
        var coin = document.createTextNode(div1Coin)
        span.appendChild(coin)
        div.appendChild(span)
    }
    userCoin++;
    checkAvailableCoin(div1Coin)
    createSequance(div)
}

function checkAvailableCoin(coinsCheck) {
    if (coinsCheck === 'X') {
        var text = "Now Player " + "Y" + " have a chance for fill the box "
        document.getElementById('player').textContent = text
    }
    else if (coinsCheck === 'Y') {
        var text = "Now Player " + "X" + " have a chance for fill the box "
        document.getElementById('player').textContent = text
    }
}


