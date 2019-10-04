// open close
var $cell = $(".card");
//open and close card when clicked on card
$cell.find(".js-expander").click(function () {
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
$cell.find(".js-collapser").click(function () {
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

// ----------------------------------------------------------------
//-------------------------------- SPEED ---------------------------
// -----------------------------------------------------------------

// reset nums


function speedCalc() {

  $("body").on("change", "#select", function () {
    const selected = this.value;
    if (selected == "FPS") {
      reset_nums();
      footSecondCalc();
      $("#FPS").addClass("display_none");
      $("#MPH").removeClass("display_none");
      $(".MPS").removeClass("display_none");
      $(".KPH").removeClass("display_none");
    } else if (selected == "MPS") {
      reset_nums();
      meterCalc();
      $("#MPH").removeClass("display_none");
      $(".MPS").addClass("display_none");
      $("#FPS").removeClass("display_none");
      $(".KPH").removeClass("display_none");
    } else if (selected == "KPH") {
      kilometerCalc();
      reset_nums();
      $("#MPH").removeClass("display_none");
      $(".KPH").addClass("display_none");
      $("#FPS").removeClass("display_none");
      $(".MPS").removeClass("display_none");
    }
  });
  function reset_nums() {
    $(".MPH").text(0);
    $(".FPS").text(0);
    $("#KPH").text(0);
    $("#MPS").text(0);
  }
}

function footSecondCalc() {
  $("input").attr("placeholder", "Enter: Feet");
  // Calculation
  $("#speedInput").on("keypress", function (e) {
    if (e.which == 13) {
      var speedInput = parseInt($("#speedInput").val());
      let total = (speedInput / 1.467).toFixed(3);
      $(".MPH").text(total);
      $("#MPS").text((speedInput / 3.6).toFixed(3));
      $("#KPH").text((speedInput / 1.097).toFixed(3));
    }
  });
}

function meterCalc() {
  $("input").attr("placeholder", "Enter: Meeter/S");
  // Calculation
  $("#speedInput").on("keypress", function (e) {
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
  $("#speedInput").on("keypress", function (e) {
    if (e.which == 13) {
      var speedInput = parseInt($("#speedInput").val());
      // MPH  FPS  KPH
      $(".MPH").text((speedInput / 1.0609).toFixed(3));
      $(".FPS").text((speedInput / 1.097).toFixed(3));
      $("#MPS").text((speedInput / 3.6).toFixed(3));
    }
  });
}

// ----------------------------------------------------------------
//-------------------------------- ENERGY ---------------------------
// -----------------------------------------------------------------

// reset nums


function energyCalc() {
  $("body").on("change", "#select", function () {
    const selected = this.value;
    if (selected == "joule") {
      jouleCalc();
      reset_nums();
      $(".joule").addClass("display_none");
      $(".watt").removeClass("display_none");
      $(".BTU").removeClass("display_none");
      $(".kiloJ").removeClass("display_none");
    } else if (selected == "kiloJ") {

      kiloJ_Calc();
      reset_nums();
      $(".watt").removeClass("display_none");
      $(".kiloJ").addClass("display_none");
      $(".joule").removeClass("display_none");
      $(".BTU").removeClass("display_none");
      // someting
    } else if (selected == "wattHr") {

      wattHr_Calc();
      reset_nums();
      $(".watt").addClass("display_none");
      $(".kiloJ").removeClass("display_none");
      $(".BTU").removeClass("display_none");
      $(".joule").removeClass("display_none");
      //  something
    } else if (selected == "BTU") {

      BTU_Calc();
      reset_nums();
      $(".BTU").addClass("display_none");
      $(".joule").removeClass("display_none");
      $(".watt").removeClass("display_none");
      // // somethin
    }
  });
  function reset_nums() {
    $("#BTU").text(0);
    $("#kiloJ").text(0);
    $("#watt").text(0);
    $("#joule").text(0);
  }
}

//  ----------------- calcuation functions

function jouleCalc() {
  $("input").attr("placeholder", "Enter: Joule ");
  $("#energyInput").on("keypress", function (e) {
    if (e.which == 13) {
      const e_input = parseInt($("#energyInput").val());
      // MPH  FPS  KPH
      $("#kiloJ").text((e_input / 1000).toFixed(3));
      $("#watt").text((e_input / 3600).toFixed(3));
      $("#BTU").text((e_input / 1055.056).toFixed(3));
    }
  });
}

function kiloJ_Calc() {
  $("input").attr("placeholder", "Enter: Kilojoules ");
  $("#energyInput").on("keypress", function (e) {
    if (e.which == 13) {
      const e_input = parseInt($("#energyInput").val());
      // MPH  FPS  KPH
      $("#joule").text((e_input * 1000).toFixed(3));
      $("#watt").text((e_input / 3.6).toFixed(3));
      $("#BTU").text((e_input / 11.055).toFixed(3));
    }
  });
}

function wattHr_Calc() {
  $("input").attr("placeholder", "Enter: Watt Hour ");
  $("#energyInput").on("keypress", function (e) {
    if (e.which == 13) {
      const e_input = parseInt($("#energyInput").val());
      // -------------
      $("#joule").text("~ " + (e_input * 3600).toFixed(3));
      $("#kiloJ").text("~ " + (e_input / 3.6).toFixed(3));
      $("#BTU").text("~ " + (e_input * 3.412).toFixed(3));
    }
  });
}

function BTU_Calc() {
  $("input").attr("placeholder", "Enter: British Thermal Units ");
  $("#energyInput").on("keypress", function (e) {
    if (e.which == 13) {
      const e_input = parseInt($("#energyInput").val());
      // MPH  FPS  KPH
      $("#joule").text("~ " + (e_input / 1055.056).toFixed(3));
      $("#kiloJ").text("~ " + (e_input / 1.055).toFixed(3));
      $("#watt").text("~ " + (e_input / 3.412).toFixed(3));
    }
  });
}

// ----------------------------------------------------------------
//-------------------------------- ENERGY ---------------------------
// -----------------------------------------------------------------


function pressureCalc() {
  $("body").on("change", "#select", function () {
    const selected = this.value;
    if (selected == "Atmosphere") {
      atm_Calc();
      reset_nums();
      $(".bar").removeClass("display_none");
      $(".atmosphere").addClass("display_none");
      $(".pascal").removeClass("display_none");
      $(".PFPS").removeClass("display_none");
    } else if (selected == "Bar") {
      bar_calc();
      reset_nums();
      $(".bar").addClass("display_none");
      $(".atmosphere").removeClass("display_none");
      $(".pascal").removeClass("display_none");
      $(".PFPS").removeClass("display_none");
    } else if (selected == "Pascal") {
      pascal_calc();
      reset_nums();
      $(".bar").removeClass("display_none");
      $(".atmosphere").removeClass("display_none");
      $(".pascal").addClass("display_none");
      $(".PFPS").removeClass("display_none");
    } else if (selected == "PFPS") {
      pounds_calc();
      reset_nums();
      $(".bar").removeClass("display_none");
      $(".atmosphere").removeClass("display_none");
      $(".pascal").removeClass("display_none");
      $(".PFPS").addClass("display_none");
    }
  });

  function reset_nums() {
    $("#bar").text(0);
    $("#Atmosphere").text(0);
    $("#pascal").text(0);
    $("#PFPS").text(0);
  }
}

//  ----------------- calcuation functions
function atm_Calc() {
  $("input").attr("placeholder", "Enter: Atmosphere ");
  $("#pressureInput").on("keypress", function (e) {
    if (e.which == 13) {
      const p_input = parseInt($("#pressureInput").val());
      // -------------
      $("#bar").text("~ " + (p_input * 1.013).toFixed(3));
      $("#pascal").text("~ " + (p_input * 101325).toFixed(3));
      $("#PFPS").text("~ " + (p_input * 14.696).toFixed(3));
    }
  });
}

function bar_calc() {
  $("input").attr("placeholder", "Enter: Bar ");
  $("#pressureInput").on("keypress", function (e) {
    if (e.which == 13) {
      const p_input = parseInt($("#pressureInput").val());
      // -------------
      $("#Atmosphere").text("~ " + (p_input / 1.013).toFixed(3));
      $("#pascal").text("~ " + (p_input * 100000).toFixed(3));
      $("#PFPS").text("~ " + (p_input * 14.504).toFixed(3));
    }
  });
}

function pascal_calc() {
  $("input").attr("placeholder", "Enter: Pascal ");
  $("#pressureInput").on("keypress", function (e) {
    if (e.which == 13) {
      const p_input = parseInt($("#pressureInput").val());
      // -------------
      $("#Atmosphere").text("~ " + (p_input / 101325).toFixed(5));
      $("#bar").text("~ " + (p_input / 100000).toFixed(5));
      $("#PFPS").text("~ " + (p_input / 6894.757).toFixed(5));
    }
  });
}
function pounds_calc() {
  $("input").attr("placeholder", "Enter: Pound Force.. ");
  $("#pressureInput").on("keypress", function (e) {
    if (e.which == 13) {
      const p_input = parseInt($("#pressureInput").val());
      // -------------
      $("#Atmosphere").text("~ " + (p_input / 14.696).toFixed(5));
      $("#bar").text("~ " + (p_input / 14.504).toFixed(5));
      $("#pascal").text("~ " + (p_input * 6894.757).toFixed(5));
    }
  });
}

// ----------------------------------------------------------------
//-------------------------------- angle ---------------------------
// -----------------------------------------------------------------

// reset nums


function angleCalc() {
  $("body").on("change", "#select", function () {
    const selected = this.value;
    if (selected == "degree") {
      degreeCalc();
      reset_nums();
      $(".degree").addClass("display_none");
      $(".radian").removeClass("display_none");
      $(".miliradan").removeClass("display_none");
      $(".gradian").removeClass("display_none");
    } else if (selected == "gradian") {
      gradianCalc();
      reset_nums();
      $(".degree").removeClass("display_none");
      $(".radian").removeClass("display_none");
      $(".miliradan").removeClass("display_none");
      $(".gradian").addClass("display_none");
    } else if (selected == "radian") {
      radianCalc();
      reset_nums();
      $(".degree").removeClass("display_none");
      $(".radian").addClass("display_none");
      $(".miliradan").removeClass("display_none");
      $(".gradian").removeClass("display_none");
    } else if (selected == "miliradan") {
      milRadian();
      reset_nums();
      $(".degree").removeClass("display_none");
      $(".radian").removeClass("display_none");
      $(".miliradan").addClass("display_none");
      $(".gradian").removeClass("display_none");
    }
  });
  function reset_nums() {
    $("#degree").text(0);
    $("#radian").text(0);
    $("#miliradan").text(0);
    $("#gradian").text(0);
  }
}

function degreeCalc() {
  $("input").attr("placeholder", "Enter: Degree ");
  $("#angleInput").on("keypress", function (e) {
    if (e.which == 13) {
      const p_input = parseInt($("#angleInput").val());
      //   // -------------
      //   $("#Atmosphere").text("~ " + (p_input / 1.013).toFixed(3));
      //   $("#pascal").text("~ " + (p_input * 100000).toFixed(3));
      //   $("#PFPS").text("~ " + (p_input * 14.504).toFixed(3));
    }
  });
}

function gradianCalc() {
  $("input").attr("placeholder", "Enter: Gradian ");
  $("#angleInput").on("keypress", function (e) {
    if (e.which == 13) {
      const p_input = parseInt($("#angleInput").val());
      // // -------------
      // $("#Atmosphere").text("~ " + (p_input / 101325).toFixed(5));
      // $("#bar").text("~ " + (p_input / 100000).toFixed(5));
      // $("#PFPS").text("~ " + (p_input / 6894.757).toFixed(5));
    }
  });
}
function radianCalc() {
  $("input").attr("placeholder", "Enter: Radian");
  $("#angleInput").on("keypress", function (e) {
    if (e.which == 13) {
      const p_input = parseInt($("#angleInput").val());
      // // -------------
      // $("#Atmosphere").text("~ " + (p_input / 14.696).toFixed(5));
      // $("#bar").text("~ " + (p_input / 14.504).toFixed(5));
      // $("#pascal").text("~ " + (p_input * 6894.757).toFixed(5));
    }
  });
}

function milRadian() {
  $("input").attr("placeholder", "Enter: Miliradian");
  $("#angleInput").on("keypress", function (e) {
    if (e.which == 13) {
      const p_input = parseInt($("#angleInput").val());
      // // -------------
      // $("#Atmosphere").text("~ " + (p_input / 14.696).toFixed(5));
      // $("#bar").text("~ " + (p_input / 14.504).toFixed(5));
      // $("#pascal").text("~ " + (p_input * 6894.757).toFixed(5));
    }
  });
}
// ----------------------------------------------------------------
//-------------------------------- DATA TRANFER RATE  ---------------------------
// -----------------------------------------------------------------

// reset nums
// function reset_nums() {
//   $("#degree").text(0);
//   $("#radian").text(0);
//   $("#miliradan").text(0);
//   $("#gradian").text(0);
// }

function dataTranserCalc() {
  $("body").on("change", "#select", function () {
    const selected = this.value;
    if (selected == "bit") {
      bitCalc();
      reset_nums();
      // $(".degree").removeClass("display_none");
      // $(".radian").addClass("display_none");
      // $(".miliradan").removeClass("display_none");
      // $(".gradian").removeClass("display_none");
    } else if (selected == "kiloJ") {
      megaCalc();
      reset_nums();
      // $(".bar").addClass("display_none");
      // $(".atmosphere").removeClass("display_none");
      // $(".pascal").removeClass("display_none");
      // $(".PFPS").removeClass("display_none");
    } else if (selected == "wattHr") {
      gigaCalc();
      reset_nums();
      // $(".bar").removeClass("display_none");
      // $(".atmosphere").removeClass("display_none");
      // $(".pascal").addClass("display_none");
      // $(".PFPS").removeClass("display_none");
    } else if (selected == "KiloWattHr") {
      teraCalc();
      reset_nums();
      // $(".bar").removeClass("display_none");
      // $(".atmosphere").removeClass("display_none");
      // $(".pascal").removeClass("display_none");
      // $(".PFPS").addClass("display_none");
    }
  });
}

function bitCalc() {
  $("input").attr("placeholder", "Enter: Bit ");
  $("#dataTranserRate").on("keypress", function (e) {
    if (e.which == 13) {
      const p_input = parseInt($("#dataTranserRate").val());
      //   // -------------
      //   $("#Atmosphere").text("~ " + (p_input / 1.013).toFixed(3));
      //   $("#pascal").text("~ " + (p_input * 100000).toFixed(3));
      //   $("#PFPS").text("~ " + (p_input * 14.504).toFixed(3));
    }
  });
}

function megaCalc() {
  $("input").attr("placeholder", "Enter: Megabyte ");
  $("#dataTranserRate").on("keypress", function (e) {
    if (e.which == 13) {
      const p_input = parseInt($("#dataTranserRate").val());
      // // -------------
      // $("#Atmosphere").text("~ " + (p_input / 101325).toFixed(5));
      // $("#bar").text("~ " + (p_input / 100000).toFixed(5));
      // $("#PFPS").text("~ " + (p_input / 6894.757).toFixed(5));
    }
  });
}
function gigaCalc() {
  $("input").attr("placeholder", "Enter: Gigabyte");
  $("#dataTranserRate").on("keypress", function (e) {
    if (e.which == 13) {
      const p_input = parseInt($("#dataTranserRate").val());
      // // -------------
      // $("#Atmosphere").text("~ " + (p_input / 14.696).toFixed(5));
      // $("#bar").text("~ " + (p_input / 14.504).toFixed(5));
      // $("#pascal").text("~ " + (p_input * 6894.757).toFixed(5));
    }
  });
}

function teraCalc() {
  $("input").attr("placeholder", "Enter: Terabyte");
  $("#dataTranserRate").on("keypress", function (e) {
    if (e.which == 13) {
      const p_input = parseInt($("#dataTranserRate").val());
      // // -------------
      // $("#Atmosphere").text("~ " + (p_input / 14.696).toFixed(5));
      // $("#bar").text("~ " + (p_input / 14.504).toFixed(5));
      // $("#pascal").text("~ " + (p_input * 6894.757).toFixed(5));
    }
  });
}

