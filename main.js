///////////// Tasks 1-4 /////////////

function handleChangeColor() {
    
    document.getElementById("h1-title").innerText =
        document.getElementById("input").value;

    document.getElementById("tk-container").style.color =
        document.getElementById("color-change").value;

}

function handleChangeBg() {

    document.getElementById("tk-container").style.backgroundColor =
        document.getElementById("input").value;

    document.getElementById("h1-title").innerText =
        document.getElementById("input").value;
}

///////////// Task 5 /////////////


function handleChangeColor2() {
    
    document.getElementById("h1-title2").innerText =
        document.getElementById("color-change2").value;

    document.getElementById("tk-container2").style.backgroundColor =
        document.getElementById("color-change2").value;

}

function handleChangeBg2() {

    document.getElementById("tk-container2").style.backgroundColor =
        document.getElementById("input2").value;

    document.getElementById("h1-title2").innerText =
        document.getElementById("input2").value;
}

///////////// Bonus task /////////////



