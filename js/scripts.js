window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const issue1 = parseInt(document.querySelector("input#issue1").value);
    const issue2 = parseInt(document.querySelector("input#issue2").value);
    const issue3 = parseInt(document.querySelector("input#issue3").value);
    console.log(issue1);
    console.log(issue2);
    console.log(issue3);
    // if (issue1 < 1 || issue1 > 10 || isNaN(issue1) === true) {
    //   document.querySelector("label#error1").innerText = "error"
    // }
    if (issue1 > 5 && issue2 > 5 || issue3 > 5) {
      document.querySelector("p#result").innerText = "Conservative";
    }
    else if (issue1 < 5 && issue2 < 5 || issue3 > 5) {
      document.querySelector("p#result").innerText = "Liberal";
    }
    else if (issue3 === 5 && issue3 === 5 || issue3 === 5) {
      document.querySelector("p#result").innerText = "Moderate";
    }
    document.querySelector("div").setAttribute("class", "");
  }
}