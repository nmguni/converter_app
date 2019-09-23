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

// -----------------------------------------
//--------------------- speed --------------
// -----------------------------------------

const MPH = $(".MPH");
var FPS = $(".FPS");
const KPH = $("#KPH");
const KPHhtml = $("");
const MPS = $("#MPS");
// reset nums
function reset_nums() {
  MPH.text(0);
  KPH.text(0);
  FPS.text(0);
  MPS.text(0);
}

function speedCalc() {
  $("body").on("change", "#select", function() {
    const selected = this.value;
    if (selected == "FPS") {
      reset_nums();
      footSecondCalc();
      $("#FPS").addClass("display_none");
      $("#MPH").removeClass("display_none");
    } else if (selected == "MPS") {
      reset_nums();
      meterCalc();
      $("#MPH").removeClass("display_none");
      $(".MPS").addClass("display_none");
      $("#FPS").removeClass("display_none");
    } else if (selected == "KPH") {
      kilometerCalc();
      reset_nums();
      $("#MPH").removeClass("display_none");
      $(".KPH").addClass("display_none");
      $("#FPS").removeClass("display_none");
    }
  });
}
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};
function footSecondCalc() {
  $("input").attr("placeholder", "Enter: Feet");
  // Calculation
  $("#speedInput").on("keypress", function(e) {
    if (e.which == 13) {
      var speedInput = parseInt($("#speedInput").val());
      let total = (speedInput / 1.467).toFixed(3);
      $(".MPH").text(total);
    }
  });
}

function meterCalc() {
  $("input").attr("placeholder", "Enter: Meeter/S");
  // Calculation
  $("#speedInput").on("keypress", function(e) {
    if (e.which == 13) {
      var speedInput = parseInt($("#speedInput").val());
      // MPH  FPS  KPH
      $(".MPH").text((speedInput * 2.237).toFixed(3));
      $(".FPS").text((speedInput * 3.281).toFixed(3));
      $("#KPH").text((speedInput * 3.6).toFixed(3));
    }
  });
}

function kilometerCalc() {
  $("input").attr("placeholder", "Enter: Kilometer/h");
  $("#speedInput").on("keypress", function(e) {
    if (e.which == 13) {
      var speedInput = parseInt($("#speedInput").val());
      // MPH  FPS  KPH
      $(".MPH").text((speedInput / 1.0609).toFixed(3));
      $(".FPS").text((speedInput / 1.097).toFixed(3));
      $("#MPS").text((speedInput / 3.6).toFixed(3));
    }
  });
}
//
// function milesCalc() {
//   $("input").attr("placeholder", "Enter: Feet");
// }

// function KilometerCalc() {
//   $("input").attr("placeholder", "Enter: Feet");
// }
