let result = document.getElementById("result");

// function of Caculator
function calculate(data) {

  //c
  switch (data) {
    case "c":
      result.innerHTML = "0";
      break;
    case "=":
      try {
        result.innerHTML = eval(result.innerHTML);
      } catch (e) {
        window.alert("invalid value is entered");
      }
      break;
    default:
      result.innerHTML += data;
  }


  // remove the Dedualt value of zero and avoid operator '=' to print
  if (result.innerHTML.substr(0, 2) == "0.") {
  } else if (result.innerHTML.substr(0, 1) == 0 && data !== "c") {
    result.innerHTML = data == "=" ? "0" : eval(result.innerHTML);
    

  }
}
