// open close
var $cell = $(".card");

//open and close card when clicked on card
$cell.find(".js-expander").click(function() {
  var $thisCell = $(this).closest(".card");

  if ($thisCell.hasClass("is-collapsed")) {
    $cell
      .not($thisCell)
      .removeClass("is-expanded")
      .addClass("is-collapsed")
      .addClass("is-inactive");
    $thisCell.removeClass("is-collapsed").addClass("is-expanded");

    if ($cell.not($thisCell).hasClass("is-inactive")) {
      //do nothing
    } else {
      $cell.not($thisCell).addClass("is-inactive");
    }
  } else {
    $thisCell.removeClass("is-expanded").addClass("is-collapsed");
    $cell.not($thisCell).removeClass("is-inactive");
  }
});

//close card when click on cross
$cell.find(".js-collapser").click(function() {
  var $thisCell = $(this).closest(".card");

  $thisCell.removeClass("is-expanded").addClass("is-collapsed");
  $cell.not($thisCell).removeClass("is-inactive");
});

const cards = document.getElementsByClassName("card");
const expand = document.getElementsByClassName("js-expander");
const closeCard = document.getElementsByClassName("close_card")[0];

// closeCard.addEventListener("click", () => {
//   cards.classList.remove;
// });

// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener("click", () => {
//     cards[i].classList.add("is-expanded");

//     // /close
//     closeCard.addEventListener("click", () => {
//       cards[i].classList.remove("is-expanded");
//     });
//   });
// }
const sel = document.getElementById("mass_selection");

sel.addEventListener("change", e => {
  let weightInput = document.getElementsByTagName("input")[0];
  let chaneText = e.target.value;
  weightInput.placeholder = `Enter: ${chaneText}`;
});

// Events--------------------
// selection

let pounds = document.getElementById("pounds");
let kilos = document.getElementById("kilograms");
let kilograms = document.getElementsByClassName("kilograms")[0];
let oz = document.getElementById("Ounces");
let oz_ = document.getElementsByClassName("Ounces")[0];
let massInput = document.getElementById("massInput");
let grams = document.getElementsByClassName("grams")[0];
let grams_id = document.getElementById("grams");

// GRAMS calculation FUNCTION
function calc_grams() {
  massInput.addEventListener("input", e => {
    let grams = e.target.value;
    pounds.innerHTML = (grams * 0.00220462).toFixed(3);
    kilos.innerHTML = (grams * 0.001).toFixed(3);
    oz.innerHTML = (grams * 0.03527).toFixed(3);
  });
}
// GRAMS calculation FUNCTION
function calc_kilos() {
  massInput.addEventListener("input", e => {
    let kilos = e.target.value;
    pounds.innerHTML = (kilos * 2.20462).toFixed(3);
    grams_id.innerHTML = (kilos * 1000).toFixed(3);
    oz.innerHTML = (kilos * 35.274).toFixed(3);
  });
}

function calc_oz() {
  massInput.addEventListener("input", e => {
    let oz = e.target.value;
    pounds.innerHTML = (oz * 0.0625).toFixed(3);
    grams_id.innerHTML = (oz * 28.3495).toFixed(3);
    kilos.innerHTML = (oz * 0.0283495).toFixed(3);
  });
}

function calc_lbs() {
  massInput.addEventListener("input", e => {
    let lbs = e.target.value;
    kilos.innerHTML = (lbs / 0.4535923).toFixed(3);
    grams_id.innerHTML = (lbs * 453.592).toFixed(3);
    oz.innerHTML = lbs * 16;
  });
}

function reset_inner() {
  pounds.innerHTML = 0;
  grams_id.innerHTML = 0;
  kilos.innerHTML = 0;
  oz.innerHTML = 0;
}

// Mass selector function
function mass_selection() {
  let result = sel.options[sel.selectedIndex].text;
  if (result === "kilograms") {
    reset_inner();
    grams.classList.remove("display_none");
    document
      .getElementsByClassName("kilograms")[0]
      .classList.add("display_none");
    document
      .getElementsByClassName("Ounces")[0]
      .classList.remove("display_none");
    document
      .getElementsByClassName("pounds")[0]
      .classList.remove("display_none");
    calc_kilos();
  } else if (result === "Ounces") {
    reset_inner();
    oz_.classList.remove("display_none");
    grams.classList.remove("display_none");
    kilograms.classList.remove("display_none");
    document.getElementsByClassName("Ounces")[0].classList.add("display_none");
    document
      .getElementsByClassName("pounds")[0]
      .classList.remove("display_none");
    calc_oz();
  } else if (result === "Pounds") {
    reset_inner();
    calc_lbs();
    grams.classList.remove("display_none");
    kilograms.classList.remove("display_none");
    document.getElementsByClassName("pounds")[0].classList.add("display_none");
    oz_.classList.remove("display_none");
  }
}
