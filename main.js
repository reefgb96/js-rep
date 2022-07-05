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

function handleOpenCard() {

    document.getElementById("card").innerHTML = `
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>`;
}

function handleChangeBackground() {

    document.getElementById("card").style.backgroundColor =
        document.getElementById("input3").value;
}
