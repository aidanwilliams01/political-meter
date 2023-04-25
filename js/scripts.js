function onPageLoad() {
  let form = document.querySelector("form");
  function formSubmission(event) {
    event.preventDefault();
    const issue1 = parseInt(document.querySelector("input#issue1").value);
    const issue2 = parseInt(document.querySelector("input#issue2").value);
    const issue3 = parseInt(document.querySelector("input#issue3").value);
    if (issue1 > 5 && issue2 > 5 || issue3 > 5) {
      document.querySelector("p#result").innerText = "Conservative";
    }
    else if (issue1 < 5 && issue2 < 5 || issue3 < 5) {
      document.querySelector("p#result").innerText = "Liberal";
    }
    else if (issue3 === 5 && issue3 === 5 || issue3 === 5) {
      document.querySelector("p#result").innerText = "Moderate";
    }
    document.querySelector("div").setAttribute("class", "");
  }
  form.addEventListener("submit", formSubmission);
  // form.removeEventListener("submit", formSubmission);
}

window.addEventListener("load", onPageLoad);