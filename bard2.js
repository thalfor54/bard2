function levelDependentOptions() {
    let levelNum = document.getElementById("characterLevel").value
    let levelNumDisplay = document.getElementById("levelNumber")
    levelNumDisplay.innerText = levelNum
    if(levelNum < 2) {
        let draw0 = document.getElementById("drawSpeed")
        draw0.innerText = "Move Action"
        let sheathe0 = document.getElementById("sheatheSpeed")
        sheathe0.innerText = "Move Action"
    } else if (levelNum <4) {
        let draw1 = document.getElementById("drawSpeed")
        draw1.innerText = "Free Action"
        let draw2 = document.getElementById("draw")
        draw2.hidden = true
        let sheathe1 = document.getElementById("sheatheSpeed")
        sheathe1.innerText = "Move Action"
    } else if(levelNum > 3 && levelNum < 7) {
        let draw3 = document.getElementById("drawSpeed")
        draw3.innerText = "Free Action"
        let draw4 = document.getElementById("draw")
        draw4.hidden = true
        let sheathe2 = document.getElementById("sheatheSpeed")
        sheathe2.innerText = "Swift Action or Move Action"
        let sheathe3 = document.getElementById("sheatheSwift")
        sheathe3.hidden = false
    } else if(levelNum > 6) {
        let draw5 = document.getElementById("drawSpeed")
        draw5.innerText = "Free Action"
        let draw6 = document.getElementById("draw")
        draw6.hidden = true
        let sheathe4 = document.getElementById("sheatheSpeed")
        sheathe4.innerText = "Free Action"
        let sheathe5 = document.getElementById("sheatheMove")
        sheathe5.hidden = true
        let sheathe6 = document.getElementById("sheatheSwift")
        if (sheathe6.hidden == false) {
            sheathe6.hidden = true
        }
    }
    if(levelNum > 9) {
        let highLev1 = document.getElementById("highLevelOptions")
        while (highLev1.firstChild) {
            highLev1.removeChild(highLev1.firstChild)
        }
        let highLevText = document.createElement("h3")
        highLevText.innerText = "High-Level Options"
        highLev1.append(highLevText)
        let p00 = document.createElement("p")
        highLev1.append(p00)
        let dim = document.createElement("input")
        dim.setAttribute("id","diminuendo")
        dim.setAttribute("type","checkbox")
        dim.setAttribute("name","performanceOptions")
        dim.setAttribute("onclick","dimMove()")
        highLev1.append(dim)
        let dim2 = document.createElement("label")
        dim2.setAttribute("for","diminuendo")
        dim2.innerText = "Diminuendo (Move Action)"
        highLev1.append(dim2)
        let dimSpan = document.createElement("span")
        dimSpan.setAttribute("id","dimAlert")
        dimSpan.setAttribute("class","redSpan")
        highLev1.append(dimSpan)
        let brDim = document.createElement("br")
        highLev1.append(brDim)
    }

    if(levelNum > 10) {
        let freeGo = document.getElementById("freeSpeed")
        freeGo.hidden = false
    }
    if(levelNum > 13) {
        let invuln = document.createElement("input")
        invuln.setAttribute("id","invuln")
        invuln.setAttribute("type","checkbox")
        invuln.setAttribute("name","performanceOptions")
        invuln.setAttribute("onclick","invulnStd()")
        let highLev2 = document.getElementById("highLevelOptions")
        highLev2.append(invuln)
        let invuln2 = document.createElement("label")
        invuln2.setAttribute("for","invuln")
        invuln2.innerText = "Inspire Invulnerability (Standard Action)"
        highLev2.append(invuln2)
        let invulnAlert = document.createElement("span")
        invulnAlert.setAttribute("id","invulnAlert")
        invulnAlert.setAttribute("class","redSpan")
        highLev2.append(invulnAlert)
        let brInvuln = document.createElement("br")
        highLev2.append(brInvuln)
    }
    if(levelNum > 15) {
        let musicSpheres = document.createElement("input")
        musicSpheres.setAttribute("type","checkbox")
        musicSpheres.setAttribute("id","musicSpheres")
        musicSpheres.setAttribute("name","performanceOptions")
        musicSpheres.setAttribute("onclick","spheresStd()")
        let highLev3 = document.getElementById("highLevelOptions")
        highLev3.append(musicSpheres)
        let musicSpheres2 = document.createElement("label")
        musicSpheres2.setAttribute("for","musicSpheres")
        musicSpheres2.innerText = "Music of the Spheres (Standard Action)"
        highLev3.append(musicSpheres2)
        let spheresAlert = document.createElement("span")
        spheresAlert.setAttribute("id","spheresAlert")
        spheresAlert.setAttribute("class","redSpan")
        highLev3.append(spheresAlert)
        let brmusicSpheres = document.createElement("br")
        highLev3.append(brmusicSpheres)
    }
    if(levelNum > 18) {
        let greaterDim = document.createElement("input")
        greaterDim.setAttribute("id","greaterDim")
        greaterDim.setAttribute("type","checkbox")
        greaterDim.setAttribute("name","performanceOptions")
        greaterDim.setAttribute("onclick","gDimMove()")
        let highLev4 = document.getElementById("highLevelOptions")
        highLev4.append(greaterDim)
        let greaterDim2 = document.createElement("label")
        greaterDim2.setAttribute("for","greaterDim")
        greaterDim2.innerText = "Greater Diminuendo (Move Action)"
        highLev4.append(greaterDim2)
        let gDimAlert = document.createElement("span")
        gDimAlert.setAttribute("id","gDimAlert")
        gDimAlert.setAttribute("class","redSpan")
        highLev4.append(gDimAlert)
        let brgreaterDim = document.createElement("br")
        highLev4.append(brgreaterDim)
    }
    if(levelNum > 19) {
        let deadlyPerf = document.createElement("input")
        deadlyPerf.setAttribute("id","deadlyPerf")
        deadlyPerf.setAttribute("type","checkbox")
        deadlyPerf.setAttribute("name", "performanceOptions")
        deadlyPerf.setAttribute("onclick","deadlyStd()")
        let highLev5 = document.getElementById("highLevelOptions")
        highLev5.append(deadlyPerf)
        let deadlyPerf2 = document.createElement("label")
        deadlyPerf2.setAttribute("for","deadlyPerf")
        deadlyPerf2.innerText = "Deadly Performance (Standard Action)"
        highLev5.append(deadlyPerf2)
        let deadlyAlert = document.createElement("span")
        deadlyAlert.setAttribute("id","deadlyAlert")
        deadlyAlert.setAttribute("class","redSpan")
        highLev5.append(deadlyAlert)
        let brdeadlyPerf = document.createElement("br")
        highLev5.append(brdeadlyPerf)
    }
}

function levelReset() {
    let levelNumberSpan = document.getElementById("levelNumber")
    levelNumberSpan.innerText = ""
    let drawSpeed1 = document.getElementById("drawSpeed")
    drawSpeed1.innerText = ""
    let sheatheSpeed1 = document.getElementById("sheatheSpeed")
    sheatheSpeed1.innerText = ""
    let drawButton1 = document.getElementById("draw")
    drawButton1.hidden = false
    let sheatheMove1 = document.getElementById("sheatheMove")
    sheatheMove1.hidden = false
    let sheatheSwift1 = document.getElementById("sheatheSwift")
    sheatheSwift1.hidden = true
    let performanceOptionsReset = document.getElementsByName("performanceOptions")
    for (let i=0; i < performanceOptionsReset.length; i++) {
        performanceOptionsReset[i].checked = false
        performanceOptionsReset[i].disabled = false
    }
    let startDCValueReset = document.getElementById("startDCValue")
    startDCValueReset.value = 0
    let actionEconReset0 = document.getElementsByName("actionEconomy")
    for (let i=0; i < actionEconReset0.length; i++) {
        actionEconReset0[i].checked = false
        actionEconReset0[i].disabled = false
    }
    let spanReset = document.getElementsByClassName("redSpan")
    for (let i=0; i < spanReset.length; i++) {
        spanReset[i].innerText = ""
    }
    let stylesheet00 = document.styleSheets[0]
    for (i=0; i<5; i++) {
        stylesheet00.cssRules[i].style.textDecoration="none"
    }
    document.getElementById("startValue").innerText = ""

}
document.getElementById("levelReset").onclick = levelReset;

function setStartingDC() {
    let startDC = document.getElementById("startDCValue").value
    if (startDC == 0) {
        let stylesheet00 = document.styleSheets[0]
        for (i=0; i<5; i++) {
            stylesheet00.cssRules[i].style.textDecoration="none"
        }
        let actionEconReset1 = document.getElementsByName("actionEconomy")
        for(i=0;i < actionEconReset1.length; i++) {
            if (actionEconReset1[i].type == "checkbox") {
                actionEconReset1[i].checked = false
                actionEconReset1[i].disabled = false
            }
        }
        let perfOptions1 = document.getElementsByName("performanceOptions")
        for(i=0;i < perfOptions1.length; i++) {
            if (perfOptions1[i].type == "checkbox") {
                perfOptions1[i].checked = false
            }
        }
    } else if (startDC == 5) {
        document.getElementById("startValue").innerText = '5'
        let stylesheet0 = document.styleSheets[0]
        for (i=0; i<5; i++) {
            stylesheet0.cssRules[i].style.textDecoration="none"
        }
        let perfOptions2 = document.getElementsByName("performanceOptions")
        for(i=0;i < perfOptions2.length; i++) {
            if (perfOptions2[i].type == "checkbox") {
                perfOptions2[i].checked = false
            }
        }
        let actionEconReset2 = document.getElementsByName("actionEconomy")
        for(i=0;i < actionEconReset2.length; i++) {
            if (actionEconReset2[i].type == "checkbox") {
                actionEconReset2[i].checked = false
                actionEconReset2[i].disabled = false
            }
        }
        let fullRoundReset1 = document.getElementById("fullRoundAction")
        fullRoundReset1.disabled = false
        let fullRoundCheck = document.getElementById("fullRoundAction")
        fullRoundCheck.checked = true
        let fullRoundStandardOff = document.getElementById("standardAction")
        fullRoundStandardOff.disabled = true
        let fullRoundMoveOff = document.getElementById("moveAction")
        fullRoundMoveOff.disabled = true
        let fullRoundSecondMoveOff = document.getElementById("secondMove")
        fullRoundSecondMoveOff.disabled = true
        stylesheet0.cssRules[1].style.textDecoration="line-through"
        stylesheet0.cssRules[2].style.textDecoration="line-through"
        stylesheet0.cssRules[3].style.textDecoration="line-through"
    } else if (startDC == 10) {
        document.getElementById("startValue").innerText = '10'
        let stylesheet1 = document.styleSheets[0]
        for (i=0; i<4; i++) {
            stylesheet1.cssRules[i].style.textDecoration="none"
        }
        let perfOptions3 = document.getElementsByName("performanceOptions")
        for(i=0;i < perfOptions3.length; i++) {
            if (perfOptions3[i].type == "checkbox") {
                perfOptions3[i].checked = false
            }
        }
        let actionEconReset3 = document.getElementsByName("actionEconomy")
        for(i=0;i < actionEconReset3.length; i++) {
            if (actionEconReset3[i].type == "checkbox") {
                actionEconReset3[i].checked = false
                actionEconReset3[i].disabled = false
            }
        }
        let standardCheck = document.getElementById("standardAction")
        standardCheck.checked = true
        let standardFullOff = document.getElementById("fullRoundAction")
        standardFullOff.disabled = true
        stylesheet1.cssRules[3].style.textDecoration="line-through"
        stylesheet1.cssRules[4].style.textDecoration="line-through"
        let standardMove2Off = document.getElementById("secondMove")
        standardMove2Off.disabled = true
    } else if (startDC == 15) {
        document.getElementById("startValue").innerText = '15'
        let stylesheet2 = document.styleSheets[0]
        for (i=0; i<4; i++) {
            stylesheet2.cssRules[i].style.textDecoration="none"
        }
        let perfOptions4 = document.getElementsByName("performanceOptions")
        for(i=0;i < perfOptions4.length; i++) {
            if (perfOptions4[i].type == "checkbox") {
                perfOptions4[i].checked = false
            }
        }
        let actionEconReset4 = document.getElementsByName("actionEconomy")
        for(i=0;i < actionEconReset4.length; i++) {
            if (actionEconReset4[i].type == "checkbox") {
                actionEconReset4[i].checked = false
                actionEconReset4[i].disabled = false
            }
        }
        let moveCheck = document.getElementById("moveAction")
        moveCheck.checked = true
        let moveFullOff = document.getElementById("fullRoundAction")
        moveFullOff.disabled = true
    } else if (startDC == 20) {
        document.getElementById("startValue").innerText = '20'
        let stylesheet3 = document.styleSheets[0]
        for (i=0; i<4; i++) {
            stylesheet3.cssRules[i].style.textDecoration="none"
        }
        let perfOptions5 = document.getElementsByName("performanceOptions")
        for(i=0;i < perfOptions5.length; i++) {
            if (perfOptions5[i].type == "checkbox") {
                perfOptions5[i].checked = false
            }
        }
        let actionEconReset5 = document.getElementsByName("actionEconomy")
        for(i=0;i < actionEconReset5.length; i++) {
            if (actionEconReset5[i].type == "checkbox") {
                actionEconReset5[i].checked = false
                actionEconReset5[i].disabled = false
            }
        }
        let swiftCheck = document.getElementById("swiftAction")
        swiftCheck.checked = true
    } else if (startDC == 30) {
        document.getElementById("startValue").innerText = '30'
        let stylesheet4 = document.styleSheets[0]
        for (i=0; i<4; i++) {
            stylesheet4.cssRules[i].style.textDecoration="none"
        }
        let perfOptions6 = document.getElementsByName("performanceOptions")
        for(i=0;i < perfOptions6.length; i++) {
            if (perfOptions6[i].type == "checkbox") {
                perfOptions6[i].checked = false
            }
        }
        let actionEconReset6 = document.getElementsByName("actionEconomy")
        for(i=0;i < actionEconReset6.length; i++) {
            if (actionEconReset6[i].type == "checkbox") {
                actionEconReset6[i].checked = false
                actionEconReset6[i].disabled = false
            }
        }
    }  
}

function startSpeedReset() {
    let actionEconReset0 = document.getElementsByName("actionEconomy")
    for (let i=0; i < actionEconReset0.length; i++) {
        actionEconReset0[i].checked = false
        actionEconReset0[i].disabled = false
    }
    let spanReset = document.getElementsByClassName("redSpan")
    for (let i=0; i < spanReset.length; i++) {
        spanReset[i].innerText = ""
    }
    let stylesheet00 = document.styleSheets[0]
    for (i=0; i<5; i++) {
        stylesheet00.cssRules[i].style.textDecoration="none"
    }
    let startDCValueReset = document.getElementById("startValue")
    startDCValueReset.innerText = ""
}
document.getElementById("startSpeedReset").onclick = startSpeedReset;

function draw() {
    let levelNumDraw = document.getElementById("characterLevel").value
    let moveFromDraw = document.getElementById("moveAction")
    let move2FromDraw = document.getElementById("secondMove")
    let standardFromDraw = document.getElementById("standardAction")
    let fullRoundDisableFromDraw = document.getElementById("fullRoundAction")
    let moveHiddenDraw = document.getElementById("moveHidden")
    let standardHiddenDraw = document.getElementById("standardHidden")
    let secondMoveHiddenDraw = document.getElementById("secondMoveHidden")
    let fullRoundHiddenDraw = document.getElementById("fullRoundHidden")
    if (levelNumDraw == 1) {
        if (moveFromDraw.checked == false) {
            moveFromDraw.checked = true
            moveHiddenDraw.checked = true
        } else if (move2FromDraw.checked == false && move2FromDraw.disabled == false) {
            move2FromDraw.checked = true
            secondMoveHiddenDraw.checked = true
            standardFromDraw.disabled = true
            standardHiddenDraw.checked = true
        } else {
            let drawAlertGet = document.getElementById("drawAlert").innerText = "No move actions left!"
        }
        fullRoundDisableFromDraw.disabled = true
        fullRoundHiddenDraw.checked = true
    } 
}
document.getElementById("draw").onclick = draw;

function sheatheMove() {
    let moveFromSheathe = document.getElementById("moveAction")
    let move2FromSheathe = document.getElementById("secondMove")
    let standardFromSheathe = document.getElementById("standardAction")
    let moveHiddenDraw = document.getElementById("moveHidden")
    let standardHiddenSheathe = document.getElementById("standardHidden")
    let secondMoveHiddenSheathe = document.getElementById("secondMoveHidden")
    if (moveFromSheathe.checked == false) {
        moveFromSheathe.checked = true
        moveHiddenDraw.checked = true
    } else if (move2FromSheathe.checked == false && move2FromSheathe.disabled == false) {
        move2FromSheathe.checked = true
        secondMoveHiddenSheathe.checked = true
        standardFromSheathe.disabled = true
        standardHiddenSheathe.checked = true
    } else {
        let cantSheatheAlert = document.getElementById("sheatheAlert")
        cantSheatheAlert.innerText = "No move actions left!"
    }
}
document.getElementById("sheatheMove").onclick = sheatheMove;

function sheatheSwift() {
    let swiftFromSheathe = document.getElementById("swiftAction")
    let swiftHiddenSheathe = document.getElementById("swiftHidden")
    if (swiftFromSheathe.checked == false) {
        swiftFromSheathe.checked = true
        swiftHiddenSheathe.checked = true
    } else {
        let cantSheatheAlert2 = document.getElementById("sheatheAlert")
        cantSheatheAlert2.innerText = "No swift actions left!"
    }
}
document.getElementById("sheatheSwift").onclick = sheatheSwift;

function inspMove() {
    let inspireBox1 = document.getElementById("inspireCompetence")
    let moveBox1 = document.getElementById("moveAction")
    let moveHidden1 = document.getElementById("moveHidden")
    let secondMoveBox1 = document.getElementById("secondMove")
    let secondMoveHidden1 = document.getElementById("secondMoveHidden")
    let standardBox1 = document.getElementById("standardAction")
    let standardHidden1 = document.getElementById("standardHidden")
    let fullRoundBox1 = document.getElementById("fullRoundAction")
    let fullRoundHidden1 = document.getElementById("fullRoundHidden")
    let nothingBox1 = document.getElementById("nothingElse")
    let maintainBox1 = document.getElementById("maintainInspire")
    let nothingLabel = document.getElementById("nothingElseLabel")
    let standardLabel = document.getElementById("standardLabel")
    let maintainLabel = document.getElementById("maintainLabel")
    let fullRoundLabel = document.getElementById("fullRoundLabel")
    if (inspireBox1.checked == true) {
        if (moveBox1.checked == false && moveBox1.disabled == false) {
            moveBox1.checked = true
            moveHidden1.checked = true
            nothingBox1.checked = false
            nothingBox1.disabled = true
            nothingLabel.style.textDecoration="line-through" 
            maintainBox1.checked = false
            maintainBox1.disabled = true
            maintainLabel.style.textDecoration="line-through"
            fullRoundBox1.disabled = true
            fullRoundHidden1.checked = true
            fullRoundLabel.style.textDecoration="line-through"
        } else if (standardBox1.checked == false && standardBox1.disabled == false && secondMoveBox1.checked == false && secondMoveBox1.disabled == false) {
            secondMoveBox1.checked = true
            secondMoveHidden1.checked = true
            standardBox1.disabled = true
            standardHidden1.checked = true
            standardLabel.style.textDecoration="line-through"
            nothingBox1.checked = false
            nothingBox1.disabled = true
            nothingLabel.style.textDecoration="line-through" 
            maintainBox1.checked = false
            maintainBox1.disabled = true
            maintainLabel.style.textDecoration="line-through"
            fullRoundBox1.disabled = true
            fullRoundHidden1.checked = true
            fullRoundLabel.style.textDecoration="line-through"
        } else {
            let cantInspire0 = document.getElementById("inspireAlert")
            cantInspire0.innerText = "No move actions left"
            inspireBox1.checked = false
        } 
    } else {
        if (secondMoveBox1.checked == true) {
            secondMoveBox1.checked  = false
            secondMoveHidden1.checked = false
            standardBox1.disabled = false
            standardHidden1.checked = false
            standardLabel.style.textDecoration="none"            
            maintainBox1.disabled = false
            maintainLabel.style.textDecoration="none"
            fullRoundBox1.disabled = false
            fullRoundHidden1.checked = false
            fullRoundLabel.style.textDecoration="none"
            nothingBox1.disabled = false
            nothingLabel.style.textDecoration="none" 
        } else if (moveBox1.checked == true) {
            moveBox1.checked = false
            moveHidden1.checked = false
            nothingBox1.disabled = false
            nothingLabel.style.textDecoration="none"
            maintainBox1.disabled = false
            maintainLabel.style.textDecoration="none"
            fullRoundBox1.disabled = false
            fullRoundHidden1.checked = false
            fullRoundLabel.style.textDecoration="none"
        }
    }
}

function maintainInspireFree() {
    let maintainBox2 = document.getElementById("maintainInspire")
    let inspireBox2 = document.getElementById("inspireCompetence")
    let inspireLabel = document.getElementById("inspireLabel")
    if (maintainBox2.checked) {
        inspireBox2.checked = false
        inspireBox2.disabled = true
        inspireLabel.style.textDecoration="line-through"
    } else {
        inspireBox2.disabled = false
        inspireLabel.style.textDecoration="none"
    }
}

function babSwift() {
    let babBox1 = document.getElementById("bab") 
    let swiftBox1 = document.getElementById("swiftAction")
    let swiftHidden1 = document.getElementById("swiftHidden")
    let cantBAB1 = document.getElementById("babAlert")
    let nothingBox2 = document.getElementById("nothingElse")
    let nothingLabel = document.getElementById("nothingElseLabel")
    if(babBox1.checked == true) {
        if(swiftBox1.checked == false) {
            swiftBox1.checked = true
            swiftHidden1.checked = true
            nothingBox2.checked = false
            nothingBox2.disabled = true
            nothingLabel.style.textDecoration="line-through"
        } else {
            cantBAB1.innerText = "No swift action left"
            babBox1.checked = false
        }
    } else {
        if (swiftBox1.checked == true) {
            swiftBox1.checked = false
            swiftHidden1.checked = false
            nothingLabel.style.textDecoration="none"
            nothingBox2.disabled = false
            cantBAB1.innerText = ""
        }
    }
}

function attacksFullRound() {
    let attacksBox1 = document.getElementById("attacks")
    let fullRoundBox = document.getElementById("fullRoundAction")
    let fullRoundHidden1 = document.getElementById("fullRoundHidden")
    let moveBox2 = document.getElementById("moveAction")
    let moveHidden1 = document.getElementById("moveHidden")
    let moveLabel = document.getElementById("moveLabel")
    let secondMoveBox2 = document.getElementById("secondMove")
    let secondMoveHidden1 = document.getElementById("secondMoveHidden")
    let secondMoveLabel = document.getElementById("secondMoveLabel")
    let standardBox2 = document.getElementById("standardAction")
    let standardLabel = document.getElementById("standardLabel")
    let standardHidden1 = document.getElementById("standardHidden")
    let cantAttacks = document.getElementById("attacksAlert")
    let nothingBox3 = document.getElementById("nothingElse")
    let nothingLabel = document.getElementById("nothingElseLabel")
    let inspireBox = document.getElementById("inspireCompetence")
    let inspireLabel = document.getElementById("inspireLabel")
    let spellBox = document.getElementById("castSpell")
    let spellLabel = document.getElementById("spellLabel")
    if (attacksBox1.checked == true) {
        if (fullRoundBox.checked == false) {
            if (moveBox2.checked == false && moveBox2.disabled == false && secondMoveBox2.checked == false && secondMoveBox2.disabled == false && standardBox2.checked == false && standardBox2.disabled == false) {
                fullRoundBox.checked = true
                fullRoundHidden1.checked = true
                moveBox2.disabled = true
                moveBox2.checked = false
                moveLabel.style.textDecoration="line-through"
                moveHidden1.checked = true
                secondMoveBox2.disabled = true
                secondMoveBox2.checked = false
                secondMoveLabel.style.textDecoration="line-through"
                secondMoveHidden1.checked = true
                standardBox2.disabled = true
                standardBox2.checked = false
                standardLabel.style.textDecoration="line-through"
                standardHidden1.checked = true
                nothingBox3.checked = false
                nothingBox3.disabled = true
                nothingLabel.style.textDecoration="line-through"
                inspireBox.checked = false
                inspireBox.disabled = true
                inspireLabel.style.textDecoration="line-through"
                spellBox.checked = false
                spellBox.disabled = true
                spellLabel.style.textDecoration="line-through"
            } else {
                cantAttacks.innerText = " Not enough action economy"
                attacksBox1.checked = false
            }
        } else {
            cantAttacks.innerText = " Not enough action economy"
            attacksBox1.checked = false
        }
    } else {
        fullRoundBox.checked = false
        fullRoundHidden1.checked = false
        fullRoundLabel.style.textDecoration="none"
        moveBox2.disabled = false
        moveHidden1.checked = false
        moveLabel.style.textDecoration="none"
        secondMoveBox2.disabled = false
        secondMoveHidden1.checked = false
        secondMoveLabel.style.textDecoration="none"
        standardBox2.disabled = false
        standardHidden1.checked = false
        standardLabel.style.textDecoration="none"
        nothingBox3.disabled = false
        nothingLabel.style.textDecoration="none"
        inspireBox.disabled = false
        inspireLabel.style.textDecoration="none"
        spellBox.disabled = false
        spellLabel.style.textDecoration="none"
        cantAttacks.innerText = ""
    }
}

function spellStd() {
    let fullRoundBox2 = document.getElementById("fullRoundAction")
    let fullRoundHidden1 = document.getElementById("fullRoundHidden")
    let standardBox3 = document.getElementById("standardAction")
    let standardHidden1 = document.getElementById("standardHidden")
    let secondMoveBox = document.getElementById("secondMove")
    let secondMoveHidden1 = document.getElementById("secondMoveHidden")
    let spellBox = document.getElementById("castSpell")
    let cantSpell = document.getElementById("spellAlert")
    let nothingBox4 = document.getElementById("nothingElse")
    let secondMoveLabel = document.getElementById("secondMoveLabel")
    let nothingLabel = document.getElementById("nothingElseLabel")
    let fullRoundLabel = document.getElementById("fullRoundLabel")
    if (spellBox.checked == true) {
        if (standardBox3.checked == false && standardBox3.disabled == false) {
            standardBox3.checked = true
            standardHidden1.checked = true
            secondMoveBox.disabled = true
            secondMoveHidden1.checked = true
            secondMoveLabel.style.textDecoration="line-through"
            nothingBox4.checked = false
            nothingBox4.disabled = true
            nothingLabel.style.textDecoration="line-through"
            if (fullRoundBox2.disabled == false) {
                fullRoundBox2.disabled = true
                fullRoundLabel.style.textDecoration="line-through"
                fullRoundHidden1.checked = true
            }
        } else {
            cantSpell.innerText = "No standard action left"
            spellBox.checked = false
        }
    } else {
        nothingBox4.disabled = false
        nothingLabel.style.textDecoration="none"
        standardBox3.checked = false
        standardHidden1.checked = false
        fullRoundBox2.disabled = false
        fullRoundLabel.style.textDecoration="none"
        fullRoundHidden1.checked = false
        secondMoveBox.disabled = false
        secondMoveLabel.style.textDecoration="none"
        secondMoveHidden1.checked = false
        cantSpell.innerText = ""
    }
}

function dimMove() {
    let dimBox1 = document.getElementById("diminuendo")
    let moveBox3 = document.getElementById("moveAction")
    let moveHidden1 = document.getElementById("moveHidden")
    let secondMoveBox3 = document.getElementById("secondMove")
    let secondMoveHidden1 = document.getElementById("secondMoveHidden")
    let standardBox3 = document.getElementById("standardAction")
    let standardHidden1 = document.getElementById("standardHidden")
    let fullRoundBox3 = document.getElementById("fullRoundAction")
    let fullRoundHidden1 = document.getElementById("fullRoundHidden")
    let cantDim0 = document.getElementById("dimAlert")
    if (dimBox1.checked == true) {
        if (moveBox3.checked == false && moveBox3.disabled == false) {
            moveBox3.checked = true
            moveHidden1.checked = true
            fullRoundBox3.disabled = true
            fullRoundHidden1.checked = true
        } else if (standardBox3.checked == false && standardBox3.disabled == false && secondMoveBox3.checked == false && secondMoveBox3.disabled == false) {
            secondMoveBox3.checked = true
            secondMoveHidden1.checked = true
            standardBox3.disabled = true
            standardHidden1.checked = true
            fullRoundBox3.disabled = true
        } else {
            cantDim0.innerText = "No move actions left"
            dimBox1.checked = false
        } 
    } else {
        if (secondMoveBox3.checked == true) {
            secondMoveBox3.checked = false
            secondMoveHidden1.checked = false
            standardBox3.disabled = false
            standardHidden1.checked = false
            cantDim.innerText = ""
            if (moveBox3.checked == false) {
                fullRoundBox3.disabled = false
                fullRoundHidden1.checked = false
            }
        } else {
            moveBox3.checked = false
            moveHidden1.checked = false
            if (standardBox3.checked == false) {
                fullRoundBox3.disabled = false
                fullRoundHidden1.checked = false
            }
        }      
    }
}

function invulnStd() {
    let invulnBox1 = document.getElementById("invuln")
    let standardBox4 = document.getElementById("standardAction")
    let standardHidden1 = document.getElementById("standardHidden")
    let moveBox4 = document.getElementById("moveAction")
    let secondMoveBox4 = document.getElementById("secondMove")
    let secondMoveHidden1 = document.getElementById("secondMoveHidden")
    let fullRoundBox4 = document.getElementById("fullRoundAction")
    let fullRoundHidden1 = document.getElementById("fullRoundHidden")
    let cantInvuln = document.getElementById("invulnAlert")
    if (invulnBox1.checked == true) {
        if (standardBox4.checked == false) {
            standardBox4.checked = true
            standardHidden1.checked = true
            secondMoveBox4.disabled = true
            secondMoveHidden1.checked = true
            fullRoundBox4.disabled = true
            fullRoundHidden1.checked = true
        } else {
            cantInvuln.innerText = "No standard action left"
            invulnBox1.checked = false
            secondMoveBox4.disabled = false
            secondMoveHidden1.checked = false
            fullRoundBox4.disabled = false
            fullRoundHidden1.checked = false

        }
    } else {
        standardBox4.checked = false
        standardHidden1.checked = false
        secondMoveBox4.disabled = false
        secondMoveHidden1.checked = false
        if (moveBox4.checked == false) {
            fullRoundBox4.disabled = false
            fullRoundHidden1.checked = false
        }
        invulnAlert.innerText = ""
    }
}

function spheresStd() {
    let musicBox1 = document.getElementById("musicSpheres")
    let standardBox5 = document.getElementById("standardAction")
    let standardHidden1 = document.getElementById("standardHidden")
    let cantSpheres = document.getElementById("spheresAlert")
    let moveBox5 = document.getElementById("moveAction")
    let secondMoveBox5 = document.getElementById("secondMove")
    let secondMoveHidden1 = document.getElementById("secondMoveHidden")
    let fullRoundBox5 = document.getElementById("fullRoundAction")
    let fullRoundHidden1 = document.getElementById("fullRoundHidden")
    if (musicBox1.checked == true) {
        if (standardBox5.checked == false) {
            standardBox5.checked = true
            standardHidden1.checked = true
            secondMoveBox5.disabled = true
            secondMoveHidden1.checked = true
            fullRoundBox5.disabled = true 
            fullRoundHidden1.checked = true
        } else {
            cantSpheres.innerText = "No standard action left"
            standardBox5.checked = false
            standardHidden1.checked = false
            secondMoveBox5.disabled = false
            secondMoveHidden1.checked = false
        }
    } else { 
        standardBox5.checked = false
        secondMoveBox5.disabled = false
        if (moveBox5.checked == false) {
            fullRoundBox5.disabled = false 
        }
        spheresAlert.innerText = ""
    }
}

function gDimMove() {
    let gDimBox6 = document.getElementById("greaterDim")
    let moveBox6 = document.getElementById("moveAction")
    let secondMoveBox6 = document.getElementById("secondMove")
    let standardBox6 = document.getElementById("standardAction")
    let fullRoundBox6 = document.getElementById("fullRoundAction")
    let moveHidden1 = document.getElementById("moveHidden")
    let secondMoveHidden1 = document.getElementById("secondMoveHidden")
    let standardHidden1 = document.getElementById("standardHidden")
    let fullRoundHidden1 = document.getElementById("fullRoundHidden")
    let cantDim6 = document.getElementById("gDimAlert")
    if (gDimBox6.checked == true) {
        if (moveBox6.checked == false && moveBox6.disabled == false) {
            moveBox6.checked = true
            moveHidden1.checked = true
            fullRoundBox6.disabled = true
            fullRoundHidden1.checked = true
        } else if (standardBox6.checked == false && standardBox6.disabled == false && secondMoveBox6.checked == false && secondMoveBox6.disabled == false) {
            secondMoveBox6.checked = true
            secondMoveHidden1.checked = true
            standardBox6.disabled = true
            standardHidden1.checked = true
            fullRoundBox6.disabled = true
            fullRoundHidden1.checked = true
        } else {
            cantDim6.innerText = "No move actions left"
            gDimBox6.checked = false
        } 
    } else {
        if (secondMoveBox6.checked == true) {
            secondMoveBox6.checked = false
            secondMoveHidden1.checked = false
            standardBox6.disabled = false
            standardHidden1.checked = false
            cantDim6.innerText = ""
            if (moveBox6.checked == false) {
                fullRoundBox6.disabled = false
                fullRoundHidden1.checked = false
            }
        } else {
            moveBox6.checked = false
            if (standardBox6.checked == false) {
                fullRoundBox6.disabled = false
            }
        }      
    }
}
function deadlyStd() {
    let deadlyBox1 = document.getElementById("deadlyPerf")
    let standardBox7 = document.getElementById("standardAction")
    let cantDeadly = document.getElementById("deadlyAlert")
    let secondMoveBox7 = document.getElementById("secondMove")
    let standardHidden1 = document.getElementById("standardHidden")
    let secondMoveHidden1 = document.getElementById("secondMoveHidden")
    if (deadlyBox1.checked == true) {
        if (standardBox7.checked == false) {
            standardBox7.checked = true
            standardHidden1.checked = true
            secondMoveBox7.disabled = true
            secondMoveHidden1.checked = true
        } else if (standardBox7.checked == true) {
            cantDeadly.innerText = "No standard action left"
            deadlyBox1.checked = false
            secondMoveBox7.disabled = false
            secondMoveHidden1.checked = false
        }
    } else {
        standardBox7.checked = false
        standardHidden1.checked = false
        cantDeadly.innerText = ""
    }
}

function roundsActions() {
    if (document.getElementById("nothingElse").checked) {
        let tableGet0 = document.getElementById("table")
        let nothingRow = tableGet0.insertRow()
        nothingRow.setAttribute("id","nothingRow")
        let nothingEntry0 = nothingRow.insertCell(0)
        nothingEntry0.setAttribute("id","nothingEntry0")
        nothingEntry0.innerText="Nothing Else"
        let nothingEntry1 = nothingRow.insertCell(1)
        nothingEntry1.setAttribute("id","nothingEntry1")
        nothingEntry1.setAttribute("style","text-align: center")
        nothingEntry1.innerText = "1"
    }  
    if (document.getElementById("inspireCompetence").checked) {
        inspireTargets()
    }
    if (document.getElementById("maintainInspire").checked) {
        maintainInspire()
    }
    if (document.getElementById("castSpell").checked) {
        castSpell()
    }
    if (document.getElementById("bab").checked) {
        increaseBAB()
    }
    if (document.getElementById("attacks").checked) {
        extraAttacks()
    }
    if (document.getElementById("ac").checked) {
        increaseAC()
    }
    if(document.getElementById("diminuendo").checked) {
        diminuendo()
    }
    if(document.getElementById("invuln").checked) {
        invuln()
    }
    if(document.getElementById("musicSpheres").checked) {
        musicSpheres()
    }
    if(document.getElementById("greaterDim").checked) {
        greaterDim()
    }
    if(document.getElementById("deadlyPerf").checked) {
        deadlyPerf()
    }
}

function roundReset() {
    let charLevelReset = document.getElementById("characterLevel")
    charLevelReset.selectedIndex = 0
    let performanceOptionsReset = document.getElementsByName("performanceOptions")
    for (i=0;i<performanceOptionsReset.length; i++){
        performanceOptionsReset[i].checked = false
        performanceOptionsReset[i].disabled = false
    }
    let removeHighLevelOptions = document.getElementById("highLevelOptions")
    while (removeHighLevelOptions.firstChild) {
        removeHighLevelOptions.removeChild(removeHighLevelOptions.firstChild)
    }
    let nothingBox = document.getElementById("nothingElse")
    let nothingLabel = document.getElementById("nothingElseLabel")
    nothingBox.checked = false
    nothingBox.disabled = false
    nothingLabel.style.textDecoration="none"
    let swiftBox = document.getElementById("swiftAction")
    let hiddenSwiftBox = document.getElementById("swiftHidden")
    if (hiddenSwiftBox.checked) {
        swiftBox.checked = false
        swiftBox.disabled = false
        hiddenSwiftBox.checked = false
    }
    let moveBox = document.getElementById("moveAction")
    let hiddenMoveBox = document.getElementById("moveHidden")
    let moveLabel = document.getElementById("moveLabel")
    if (hiddenMoveBox.checked) {
        moveBox.checked = false
        moveBox.disabled = false
        moveLabel.style.textDecoration="none"
        hiddenMoveBox.checked = false
    }
    let standardBox = document.getElementById("standardAction")
    let hiddenStandardBox = document.getElementById("standardHidden")
    let standardLabel = document.getElementById("standardLabel")
    if (hiddenStandardBox.checked) {
        standardBox.checked = false
        standardBox.disabled = false
        standardLabel.style.textDecoration="none"
        hiddenStandardBox.checked = false
    }
    let secondMoveBox = document.getElementById("secondMove")
    let hiddenSecondMoveBox = document.getElementById("secondMoveHidden")
    let secondMoveLabel = document.getElementById("secondMoveLabel")
    if (hiddenSecondMoveBox.checked) {
        secondMoveBox.checked = false
        secondMoveBox.disabled = false
        secondMoveLabel.style.textDecoration="none"
        hiddenSecondMoveBox.checked = false
    }
    let fullRoundBox = document.getElementById("fullRoundAction")
    let hiddenFullRoundBox = document.getElementById("fullRoundHidden")
    let fullRoundLabel = document.getElementById("fullRoundLabel")
    if (hiddenFullRoundBox.checked) {
        fullRoundBox.checked = false
        fullRoundBox.disabled = false
        hiddenFullRoundBox.checked = false
        fullRoundLabel.style.textDecoration="none"
    }
    let drawSpeedReset = document.getElementById("drawSpeed")
    drawSpeedReset.innerText = ''
    let drawAlertReset = document.getElementById("drawAlert")
    drawAlertReset.innerText = ''
    let sheatheSpeedReset = document.getElementById("sheatheSpeed")
    sheatheSpeedReset.innerText = ''
    let sheatheAlertReset = document.getElementById("sheatheAlert")
    sheatheAlertReset.innerText = ''
    let babAlertReset = document.getElementById("babAlert")
    babAlertReset.innerText = ''
    let attacksAlertReset = document.getElementById("attacksAlert")
    attacksAlertReset.innerText = ''
    let inspireLabel = document.getElementById("inspireLabel")
    let spellLabel = document.getElementById("spellLabel")
    let maintainLabel = document.getElementById("maintainLabel")
    inspireLabel.style.textDecoration="none"
    spellLabel.style.textDecoration="none"
    maintainLabel.style.textDecoration="none"
}

function inspireTargets() {
    let inspireRemove = document.getElementById("inspireGoHere")
    let div1 = document.createElement("div")
    div1.setAttribute("id","div1")
    if (inspireRemove.firstElementChild) {
        inspireRemove.removeChild(div1)
    }
    let comment0 = document.createTextNode("Inspire: Number of Targets for Inspire?")
    div1.append(comment0)
    let menu = document.createElement("select")
    menu.setAttribute("id","menu")
    for (let i=1; i<11; i++) {
        let option = document.createElement("option")
        option.setAttribute("value",i)
        option.innerText = i
        menu.append(option)
    } 
    div1.append(menu)
    let p = document.createElement("p")
    let btn = document.createElement("button")
    btn.innerText = "Get DC"
    btn.setAttribute("id","btn")
    btn.setAttribute("type","button")
    btn.setAttribute("onclick","inspireDC()")
    div1.append(btn)
    div1.append(p)
    document.getElementById("inspireGoHere").appendChild(div1)  
}

function inspireDC() {
    let tableGet1 = document.getElementById("table")
    let div2 = document.createElement("div")
    div2.setAttribute("id","div2")
    div2.append("Perform(Sing) DC to inspire: ")
    let m = document.getElementById("menu")
    let v = m.value
    let vInt = (v * 1)
    let vFive = (vInt * 5)
    div2.append(vFive) 
    let p01 = document.createElement("p")
    p01.setAttribute("id","p01")
    div2.append(p01)
    div2.append("If your roll did not succeed, check this box: ")
    let inspireFail = document.createElement("input")
    inspireFail.setAttribute("id","inspireFail")
    inspireFail.setAttribute("type","checkbox")
    inspireFail.setAttribute("onclick","inspireYesNo()")
    div2.append(inspireFail)
    let line1 = document.createElement("hr")
    line1.setAttribute("size","4") 
    line1.setAttribute("width","95%")
    line1.setAttribute("color","white")
    div2.append(line1)
    let inspireGet = document.getElementById("inspireGoHere")
    let div2Get = document.getElementById("div2")
    if (inspireGet.contains(div2Get)) {
        div2Get.parentNode.removeChild(div2Get)
        tableGet1.deleteRow(-1)
    } 
    inspireGet.appendChild(div2)
    let inspireRow = tableGet1.insertRow()
    inspireRow.setAttribute("id","inspireRow")
    let inspireEntry0 = inspireRow.insertCell(0)
    let inspireText = document.createTextNode("Inspire Competence")
    inspireEntry0.appendChild(inspireText)
    let inspireEntry1 = inspireRow.insertCell(1)
    inspireEntry1.setAttribute("id","inspireEntry1")
    inspireEntry1.setAttribute("style","text-align: center")
    v = m.value
    inspireEntry1.innerText = v
}

function maintainInspire() {
    let inspireRemove = document.getElementById("inspireGoHere")
    let div1 = document.createElement("div")
    div1.setAttribute("id","div1")
    if (inspireRemove.firstElementChild) {
        inspireRemove.removeChild(div1)
    }
    let comment0 = document.createTextNode("Maintain Inspire: Number of Targets?")
    div1.append(comment0)
    let menu = document.createElement("select")
    menu.setAttribute("id","menu")
    for (let i=1; i<11; i++) {
        let option = document.createElement("option")
        option.setAttribute("value",i)
        option.innerText = i
        menu.append(option)
    } 
    div1.append(menu)
    let p = document.createElement("p")
    let btn = document.createElement("button")
    btn.innerText = "Get DC"
    btn.setAttribute("id","btn")
    btn.setAttribute("type","button")
    btn.setAttribute("onclick","maintainInspireDC()")
    div1.append(btn)
    div1.append(p)
    document.getElementById("inspireGoHere").appendChild(div1)  
}

function maintainInspireDC() {    
    let div2 = document.createElement("div")
    div2.setAttribute("id","div2")
    div2.append("If your roll did not succeed, check this box: ")
    let inspireFail = document.createElement("input")
    inspireFail.setAttribute("id","inspireFail")
    inspireFail.setAttribute("type","checkbox")
    inspireFail.setAttribute("onclick","inspireYesNo()")
    div2.append(inspireFail)
    let line1 = document.createElement("hr")
    line1.setAttribute("size","4") 
    line1.setAttribute("width","95%")
    line1.setAttribute("color","white")
    div2.append(line1)
    let inspireGet = document.getElementById("inspireGoHere")
    let div2Get = document.getElementById("div2")
    if (inspireGet.contains(div2Get)) {
        div2Get.parentNode.removeChild(div2Get)
        tableGet1.deleteRow(-1)
    } 
    inspireGet.appendChild(div2)
    let tableGet1 = document.getElementById("table")
    let inspireRow = tableGet1.insertRow()
    inspireRow.setAttribute("id","inspireRow")
    let inspireEntry0 = inspireRow.insertCell(0)
    let inspireText = document.createTextNode("Maintain Inspiration")
    inspireEntry0.appendChild(inspireText)
    let inspireEntry1 = inspireRow.insertCell(1)
    inspireEntry1.setAttribute("id","inspireEntry1")
    inspireEntry1.setAttribute("style","text-align: center")
    let m = document.getElementById("menu")
    let v = m.value
    let vInt = (v * 1)
    inspireEntry1.innerText = vInt
}    

function inspireYesNo() {
    let boxChecked = document.getElementById("inspireFail")
    if (boxChecked.checked = true) {
        let noChange = document.getElementById("inspireEntry1")
        let z = 0
        noChange.innerText = z
    }
}

function increaseBAB() {
    let babRemove1 = document.getElementById("combatGoHere")
    let div3 = document.createElement("div")
    div3.setAttribute("id","div3")
    if (babRemove1.firstElementChild) {
        babRemove1.removeChild(div3)
    }
    let comment2 = document.createTextNode("Roll Perform (Dance), DC 20. On a success, increase your BAB until the start of your next turn by 1. For every 15 by which you beat the DC, increase your BAB another 1. This ability cannot increase your BAB higher than your character level.")
    div3.append(comment2)
    let p4 = document.createElement("p")
    div3.append(p4)
    let comment3 = document.createTextNode("How much did your BAB increase?")
    div3.append(comment3)
    let menu2 = document.createElement("select")
    menu2.setAttribute("id","menu2")
    for (let i=0; i<6; i++) {
        let option1 = document.createElement("option")
        option1.setAttribute("value",i)
        option1.innerText = i
        menu2.append(option1)
    } 
    div3.append(menu2)
    let btn2 = document.createElement("button")
    btn2.innerText = "Submit"
    btn2.setAttribute("id","btn2")
    btn2.setAttribute("type","button")
    btn2.setAttribute("onclick","babDC()")
    div3.append(btn2)
    let br4 = document.createElement("br")
    div3.append(br4)
    let line2 = document.createElement("hr")
    line2.setAttribute("size","4")
    line2.setAttribute("width","95%")
    line2.setAttribute("color","white")
    div3.append(line2)
    document.getElementById("combatGoHere").appendChild(div3)
}

function babDC() {
    let tableGet2 = document.getElementById("table")
    let babRowYesNo = document.getElementById("babRow")
    if (typeof(babRowYesNo) != "undefined" && babRowYesNo != null) {
        tableGet2.deleteRow(-1)
    }
    let babRow = tableGet2.insertRow()
    babRow.setAttribute("id","babRow")
    let babEntry0 = babRow.insertCell(0)
    babEntry0.setAttribute("id","babEntry0")
    babEntry0.innerText = "Increase BAB"
    let babEntry1 = babRow.insertCell(1)
    babEntry1.setAttribute("id","babEntry1")
    babEntry1.setAttribute("style","text-align: center")
    let m2 = document.getElementById("menu2")
    let v2 = m2.value
    v2 = (v2 * 2)
    babEntry1.innerText = v2
}

function extraAttacks() {
    let attacksRemove = document.getElementById("combatGoHere")
    let div4Check = document.getElementById("div4")
    if (typeof(div4Check) != "undefined" && div4Check != null) {
        attacksRemove.removeChild(div4)
    }
    let div4 = document.createElement("div")
    div4.setAttribute("id","div4")
    let comment4 = "Make a Perform(Dance) check. If you beat DC 20, gain 1 extra attack at full attack bonus. If you are at least level 10 and you beat DC 40, gain 2 attacks at full attack bonus. If you are at least level 18 and you beat DC 60, gain 3 attacks at full attack bonus"
    div4.append(comment4)
    let p5 = document.createElement("p")
    div4.append(p5)
    let comment5 = "How many extra attacks are you making?"
    div4.append(comment5)
    let menu3 = document.createElement("select")
    menu3.setAttribute("id","menu3")
    for (let i=0; i<4; i++) {
        let option1 = document.createElement("option")
        option1.setAttribute("value",i)
        option1.innerText = i
        menu3.append(option1)
    } 
    div4.append(menu3)
    let btn3 = document.createElement("button")
    btn3.innerText = "Submit"
    btn3.setAttribute("id","btn3")
    btn3.setAttribute("type","button")
    btn3.setAttribute("onclick","attacksDC()")
    div4.append(btn3)
    let br5 = document.createElement("br")
    div4.append(br5)
    let line3 = document.createElement("hr")
    line3.setAttribute("size","4")
    line3.setAttribute("width","95%")
    line3.setAttribute("color","white")
    div4.append(line3)
    document.getElementById("combatGoHere").appendChild(div4)
}

function attacksDC() {
    let tableGet3 = document.getElementById("table")
    let attacksRowYesNo = document.getElementById("attacksRow")
    if (typeof(attacksRowYesNo) != "undefined" && attacksRowYesNo != null) {
        tableGet3.deleteRow(-1)
    }
    let attacksRow = tableGet3.insertRow()
    attacksRow.setAttribute("id","attacksRow")
    let attacksEntry0 = attacksRow.insertCell(0)
    let attacksText0 = document.createTextNode("Extra Attacks")
    attacksEntry0.appendChild(attacksText0)
    let attacksEntry1 = attacksRow.insertCell(1)
    attacksEntry1.setAttribute("id","attacksEntry1")
    attacksEntry1.setAttribute("style","text-align: center")
    let m3 = document.getElementById("menu3")
    let v3 = m3.value
    v3 = (v3 * 3)
    document.getElementById("attacksEntry1").innerText = v3
}

function increaseAC() {
    let acRemove = document.getElementById("combatGoHere")
    let div5Check = document.getElementById("div5")
    if (typeof(div5Check) != "undefined" && div5Check != null) {
        acRemove.removeChild(div5)
    }
    let div5 = document.createElement("div")
    div5.setAttribute("id","div5")
    let comment6 = "Roll Perform (Dance). Gain a dodge bonus to AC equal to your roll divided by 10 (round down). What is your bonus to AC?"
    div5.append(comment6)
    let br6 = document.createElement("br")
    div5.append(br6)
    let menu4 = document.createElement("select")
    menu4.setAttribute("id","menu4")
    for (let i=0; i<11; i++) {
        let option1 = document.createElement("option")
        option1.setAttribute("value",i)
        option1.innerText = i
        menu4.append(option1)
    } 
    div5.append(menu4)
    let btn4 = document.createElement("button")
    btn4.innerText = "Submit"
    btn4.setAttribute("id","btn4")
    btn4.setAttribute("type","button")
    btn4.setAttribute("onclick","acDC()")
    div5.append(btn4)
    let br7 = document.createElement("br")
    div5.append(br7)
    let line4 = document.createElement("hr")
    line4.setAttribute("size","4")
    line4.setAttribute("width","95%")
    line4.setAttribute("color","white")
    div5.append(line4)
    document.getElementById("combatGoHere").appendChild(div5)
}

function acDC() {
    let tableGet4 = document.getElementById("table")
    let acRowYesNo = document.getElementById("acRow")
    if (typeof(acRowYesNo) != "undefined" && acRowYesNo != null) {
        tableGet4.deleteRow(-1)
    }
    let acRow = tableGet4.insertRow()
    acRow.setAttribute("id","acRow")
    let acEntry0 = acRow.insertCell(0)
    let acText0 = document.createTextNode("Increase AC")
    acEntry0.appendChild(acText0)
    let acEntry1 = acRow.insertCell(1)
    acEntry1.setAttribute("id","acEntry1")
    acEntry1.setAttribute("style","text-align: center")
    let m4 = document.getElementById("menu4")
    let v4 = m4.value
    document.getElementById("acEntry1").innerText = v4
}

function castSpell() {
    let castRemove = document.getElementById("castGoHere")
    let div6Check = document.getElementById("div6")
    if (typeof(div6Check) != "undefined" && div6Check != null) {
        castRemove.removeChild(div6Check)
    }
    let div6 = document.createElement("div")
    div6.setAttribute("id","div6")
    let comment7 = "What is the level of the spell you want to cast?"
    div6.append(comment7)
    document.getElementById("castGoHere").appendChild(div6)
    let menu5 = document.createElement("select")
    menu5.setAttribute("id","menu5")
    for (let i=1; i<7; i++) {
        let option1 = document.createElement("option")
        option1.setAttribute("value",i)
        option1.innerText = i
        menu5.append(option1)
    } 
    div6.append(menu5)
    let btn5 = document.createElement("button")
    btn5.innerText = "Submit"
    btn5.setAttribute("id","btn5")
    btn5.setAttribute("type","button")
    btn5.setAttribute("onclick","spellDC()")
    div6.append(btn5)
    let br8 = document.createElement("br")
    div6.append(br8)
    let comment8 = "Your Perform (Instrument) DC is: "
    div6.append(comment8)
    let sp1 = document.createElement("span")
    sp1.setAttribute("id","sp1")
    div6.append(sp1)
    let instCheckResult = document.createElement("div")
    instCheckResult.setAttribute("id","instCheckResult")
    div6.append(instCheckResult)
    let line5 = document.createElement("hr")
    line5.setAttribute("size","4")
    line5.setAttribute("width","95%")
    line5.setAttribute("color","white")
    div6.append(line5)
    document.getElementById("castGoHere").appendChild(div6)
}

function spellDC() {
    let tableGet5 = document.getElementById("table")
    let spellRowYesNo = document.getElementById("spellRow")
    if (typeof(spellRowYesNo) != "undefined" && spellRowYesNo != null) {
        tableGet5.deleteRow(-1)
    }
    let m5 = document.getElementById("menu5")
    let v5 = m5.value
    v5 = (v5 * 8)
    let spellSpan = document.getElementById("sp1")
    spellSpan.innerText = v5
    let spellRow = tableGet5.insertRow()
    spellRow.setAttribute("id","spellRow")
    let spellEntry0 = spellRow.insertCell(0)
    let spellText0 = document.createTextNode("Cast Spell")
    spellEntry0.appendChild(spellText0)
    let spellEntry1 = spellRow.insertCell(1)
    spellEntry1.setAttribute("id","spellEntry1")
    spellEntry1.setAttribute("style","text-align: center")
    let m5a = document.getElementById("menu5")
    let v5a = m5a.value
    v5a = (v5a * 2)
    document.getElementById("spellEntry1").innerText = v5a
    let br9 = document.createElement("br")
    br9.setAttribute("id","br9")
    let spellDiv6 = document.getElementById("instCheckResult")
    spellDiv6.append(br9)
    let comment9 = "Perform (Instrument) check result:"
    spellDiv6.append(comment9)
    let br10 = document.createElement("br")
    br10.setAttribute("id","br10")
    spellDiv6.append(br10)
    let menu6 = document.createElement("select")
    menu6.setAttribute("id","menu6")
    let optionArray = ["Fail", "Succeed by less than 6", "Succeed by 6-11", "Succeed by 12-17", "Succeed by 18-23", "Succeed by 24-29", "Succeed by 30-35", "Succeed by 36-41", "Succeed by 42-47", "Succeed by 48-53", "Succeed by 54-59", "Succeed by 60+"]
    for (i=0; i<optionArray.length; i++) {
        let option1 = document.createElement("option")
        option1.innerText = optionArray[i]
        option1.setAttribute("value",i)
        menu6.append(option1)     
    } 
    spellDiv6.append(menu6)
    let btn6 = document.createElement("button")
    btn6.innerText = "Submit"
    btn6.setAttribute("id","btn6")
    btn6.setAttribute("type","button")
    btn6.setAttribute("onclick","instrumentCheckEffect()")
    spellDiv6.append(btn6)
    let br11 = document.createElement("br")
    br11.setAttribute("id","br11")
    spellDiv6.append(br11)
    let p2 = document.createElement("p")
    p2.setAttribute("id","p2")
    spellDiv6.append(p2)
}

function instrumentCheckEffect() {
    let m6 = document.getElementById("menu6")
    let v6 = m6.value
    let commentTest = v6
    switch (v6) {
        case '0':
        let result0 = "You lose the spell"
        document.getElementById("instCheckResult").append(result0)
        break
        case '1':
        let result1 = "The spell is cast as normal"
        document.getElementById("instCheckResult").append(result1)
        break
        case '2':
        let result2 = "Either the spell gets +1 to DC or you get +1 to caster checks to overcome SR"
        document.getElementById("instCheckResult").append(result2)
        break
        case '3':
        let result3 = "You get 2 points total to add to either DC or concentration checks to overcome SR"
        document.getElementById("instCheckResult").append(result3)
        break
        case '4':
        let result4 = "You get 3 points total to add to either DC or concentration checks to overcome SR"
        document.getElementById("instCheckResult").append(result4)
        break
        case '5':
        let result5 = "You get 4 points total to add to either DC or concentration checks to overcome SR"
        document.getElementById("instCheckResult").append(result5)
        break
        case '6':
        let result6 = "You get 5 points total to add to either DC or concentration checks to overcome SR"
        document.getElementById("instCheckResult").append(result6)
        break
        case '7':
        let result7 = "You get 6 points total to add to either DC or concentration checks to overcome SR"
        document.getElementById("instCheckResult").append(result7)
        break
        case '8':
        let result8 = "You get 7 points total to add to either DC or concentration checks to overcome SR"
        document.getElementById("instCheckResult").append(result8)
        break
        case '9':
        let result9 = "You get 8 points total to add to either DC or concentration checks to overcome SR"
        document.getElementById("instCheckResult").append(result9)
        break
        case '10':
        let result10 = "You get 9 points total to add to either DC or concentration checks to overcome SR"
        document.getElementById("instCheckResult").append(result10)
        break
        case '11':
        let result11 = "You get 10 points total to add to either DC or concentration checks to overcome SR"
        document.getElementById("instCheckResult").append(result11)
    } 
    let p3 = document.createElement("p")
    p3.setAttribute("id","p3")
    document.getElementById("instCheckResult").append(p3)
}


function diminuendo() {
    let tableGet6 = document.getElementById("table")
    let dimRowYesNo = document.getElementById("dimRow")
    if (typeof(dimRowYesNo) != "undefined" && dimRowYesNo != null) {
        tableGet6.deleteRow(-1)
    }
    let dimRow = tableGet6.insertRow()
    dimRow.setAttribute("id","dimRow")
    let dimEntry0 = dimRow.insertCell(0)
    let dimText0 = document.createTextNode("Diminuendo")
    dimEntry0.appendChild(dimText0)
    let dimEntry1 = dimRow.insertCell(1)
    dimEntry1.setAttribute("id","dimEntry1") 
    dimEntry1.setAttribute("style","text-align: center")
    let dimVal = -6
    document.getElementById("dimEntry1").innerText = dimVal
}

function invuln() {
    let tableGet7 = document.getElementById("table")
    let invulnRow = tableGet7.insertRow()
    invulnRow.setAttribute("id","invulnRow")
    let invulnEntry0 = invulnRow.insertCell(0)
    let invulnText0 = document.createTextNode("Inspire Invulnerability")
    invulnEntry0.appendChild(invulnText0)
    let invulnEntry1 = invulnRow.insertCell(1)
    invulnEntry1.setAttribute("id","invulnEntry1") 
    invulnEntry1.setAttribute("style","text-align: center")
    let invulnVal = 10
    document.getElementById("invulnEntry1").innerText = invulnVal
}

function musicSpheres() {
    let tableGet8 = document.getElementById("table")
    let musicSpheresRow = tableGet8.insertRow()
    musicSpheresRow.setAttribute("id","musicSpheresRow")
    let musicSpheresEntry0 = musicSpheresRow.insertCell(0)
    let musicSpheresText0 = document.createTextNode("Music of the Spheres")
    musicSpheresEntry0.appendChild(musicSpheresText0)
    let musicSpheresEntry1 = musicSpheresRow.insertCell(1)
    musicSpheresEntry1.setAttribute("id","musicSpheresEntry1") 
    musicSpheresEntry1.setAttribute("style","text-align: center")
    let musicSpheresVal = 15
    document.getElementById("musicSpheresEntry1").innerText = musicSpheresVal
}

function greaterDim() {
    let tableGet9 = document.getElementById("table")
    let greaterDimRow = tableGet9.insertRow()
    greaterDimRow.setAttribute("id","greaterDimRow")
    let greaterDimEntry0 = greaterDimRow.insertCell(0)
    let greaterDimText0 = document.createTextNode("Greater Diminuendo")
    greaterDimEntry0.appendChild(greaterDimText0)
    let greaterDimEntry1 = greaterDimRow.insertCell(1)
    greaterDimEntry1.setAttribute("id","greaterDimEntry1") 
    greaterDimEntry1.setAttribute("style","text-align: center")
    let greaterDimVal = -12
    document.getElementById("greaterDimEntry1").innerText = greaterDimVal
}

function deadlyPerf() {
    let tableGet10 = document.getElementById("table")
    let deadlyPerfRow = tableGet10.insertRow()
    deadlyPerfRow.setAttribute("id","deadlyPerfRow")
    let deadlyPerfEntry0 = deadlyPerfRow.insertCell(0)
    let deadlyPerfText0 = document.createTextNode("Deadly Performance")
    deadlyPerfEntry0.appendChild(deadlyPerfText0)
    let deadlyPerfEntry1 = deadlyPerfRow.insertCell(1)
    deadlyPerfEntry1.setAttribute("id","deadlyPerfEntry1") 
    deadlyPerfEntry1.setAttribute("style","text-align: center")
    let deadlyPerfVal = 25
    document.getElementById("deadlyPerfEntry1").innerText = deadlyPerfVal
}

function manualSet() {
    let prompt = window.prompt("Set starting DC for round","")
    let newStartValue = document.getElementById("startValue")
    newStartValue.innerText = prompt    
    
}

function endRoundDC() {
    let tableGet6 = document.getElementById("table"), sumVal = 0
    for(i = 1; i < table.rows.length; i++) {
      sumVal = sumVal + parseInt(table.rows[i].cells[1].innerText);
    }
    let tableGet7 = document.getElementById("table")
    let endRoundRow = tableGet7.insertRow()
    endRoundRow.setAttribute("id","endRoundRow")
    let endRoundEntry0 = endRoundRow.insertCell(0)
    let endRoundText0 = document.createTextNode("End-of-Round Perform (Sing) DC:")
    endRoundEntry0.appendChild(endRoundText0)
    let endRoundEntry1 = endRoundRow.insertCell(1)
    endRoundEntry1.setAttribute("id","endRoundValue")
    endRoundEntry1.setAttribute("style","text-align: center")
    document.getElementById("endRoundValue").innerText = sumVal
}
function startNextRound() {
    let formZeroHide = document.getElementById("form0")
    formZeroHide.style.display = "none"
    let roundTitle = document.getElementById("round1")
    roundTitle.innerText = "Next round!"
    let promptChange = document.getElementById("startPrompt")
    promptChange.innerText = ''
    promptChange.innerText = 'Previous Round Value'
    let valueChange = document.getElementById("startValue")
    let previousValue = document.getElementById("endRoundValue").innerText
    valueChange.innerText = ''
    valueChange.innerText = previousValue
    let loseLastRow = document.getElementById("endRoundRow")
    loseLastRow.parentNode.removeChild(loseLastRow)
    let form1Get = document.getElementById("form1")
    let form1Inputs = form1Get.getElementsByTagName("input")
    for (let i = 0; i < form1Inputs.length; i++) {
        form1Inputs[i].checked = false
        form1Inputs[i].disabled = false
    }
    let form1Spans = form1Get.getElementsByTagName("span")
    for (let j = 0; j <form1Spans.length; j++) {
        form1Spans[j].innerText = ""
    }
    let actionEconGet = document.getElementById("actionEconomy")
    let actionEconInputs = actionEconGet.getElementsByTagName("input")
    for (let k = 0; k < actionEconInputs.length; k++) {
        actionEconInputs[k].checked = false
        actionEconInputs[k].disabled = false
    }
    let actionEconSpans = actionEconGet.getElementsByTagName("span")
    for (let l = 0; l < actionEconSpans.length; l++) {
        actionEconSpans[l].innerText = ""
    }
    let drawSheatheGet = document.getElementById("drawOrSheathe")
    let drawSheatheSpans = drawSheatheGet.getElementsByTagName("span")
    for (let m = 0; m < drawSheatheSpans.length; m++) {
        drawSheatheSpans[m].innerText = ""
    }
    let inspireRowRemove = document.getElementById("inspireRow")
    if (typeof(inspireRowRemove) != "undefined" && inspireRowRemove != null) {
        inspireRowRemove.parentNode.removeChild(inspireRowRemove)
        let inspireRemove = document.getElementById("inspireGoHere")
        inspireRemove.removeChild(div1)
        inspireRemove.removeChild(div2)
    }
    let babRowRemove = document.getElementById("babRow")
    if (typeof(babRowRemove) != "undefined" && babRowRemove != null) {
        babRowRemove.parentNode.removeChild(babRowRemove)
        let babRemove2 = document.getElementById("combatGoHere")
        let div3Get = document.getElementById("div3")
        babRemove2.removeChild(div3Get)
    }
    let attacksRowRemove = document.getElementById("attacksRow")
    if (typeof(attacksRowRemove) != "undefined" && attacksRowRemove != null) {
        attacksRowRemove.parentNode.removeChild(attacksRowRemove)
        let attacksRemove = document.getElementById("combatGoHere")
        let div4Get = document.getElementById("div4")
        attacksRemove.removeChild(div4Get)
    }
    let acRowRemove = document.getElementById("acRow")
    if (typeof(acRowRemove) != "undefined" && acRowRemove != null) {
        acRowRemove.parentNode.removeChild(acRowRemove)
        let acRemove = document.getElementById("combatGoHere")
        let div5Get = document.getElementById("div5")
        acRemove.removeChild(div5Get)
    }
    let spellRowRemove = document.getElementById("spellRow")
    if (typeof(spellRowRemove) != "undefined" && spellRowRemove != null) {
        spellRowRemove.parentNode.removeChild(spellRowRemove)
        let spellRemove = document.getElementById("castGoHere")
        let div6Get = document.getElementById("div6")
        spellRemove.removeChild(div6Get)
    }
    let dimRowRemove = document.getElementById("dimRow")
    if (typeof(dimRowRemove) != "undefined" && dimRowRemove != null) {
        dimRowRemove.parentNode.removeChild(dimRowRemove)
    }
    let invulnRowRemove = document.getElementById("invulnRow")
    if (typeof(invulnRowRemove) != "undefined" && invulnRowRemove != null) {
        invulnRowRemove.parentNode.removeChild(invulnRowRemove)
    }
    let musicSpheresRowRemove = document.getElementById("musicSpheresRow")
    if (typeof(musicSpheresRowRemove) != "undefined" && musicSpheresRowRemove != null) {
        musicSpheresRowRemove.parentNode.removeChild(musicSpheresRowRemove)
    }
    let greaterDimRowRemove = document.getElementById("greaterDimRow")
    if (typeof(greaterDimRowRemove) != "undefined" && greaterDimRowRemove != null) {
        greaterDimRowRemove.parentNode.removeChild(greaterDimRowRemove)
    }
    let deadlyPerfRowRemove = document.getElementById("deadlyPerfRow")
    if (typeof(deadlyPerfRowRemove) != "undefined" && deadlyPerfRowRemove != null) {
        deadlyPerfRowRemove.parentNode.removeChild(deadlyPerfRowRemove)
    }
}
