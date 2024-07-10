form = document.getElementById('sameAsPermanent');
form.addEventListener('change', function () {
  if (this.checked) {
    document.getElementById("currentFirstName").value = document.getElementById("permanentFirstName").value;
    document.getElementById("currentLastName").value = document.getElementById("permanentLastName").value;
    document.getElementById("currentUsername").value = document.getElementById("permanentUsername").value;
    document.getElementById("currentContact").value = document.getElementById("permanentContact").value;

    if (document.getElementById("permanentMale").checked) {
      document.getElementById("currentMale").checked = true;
    } else if (document.getElementById("permanentFemale").checked) {
      document.getElementById("currentFemale").checked = true;
    }

    document.getElementById("currentCity").value = document.getElementById("permanentCity").value;
    document.getElementById("currentState").value = document.getElementById("permanentState").value;
    document.getElementById("currentZip").value = document.getElementById("permanentZip").value;
    document.getElementById("cHobby1").checked = document.getElementById("pHobby1").checked;
    document.getElementById("cHobby2").checked = document.getElementById("pHobby2").checked;
    document.getElementById("cHobby3").checked = document.getElementById("pHobby3").checked;
    document.getElementById("cHobby4").checked = document.getElementById("pHobby4").checked;

  } else {
    document.getElementById("currentFirstName").value = "";
    document.getElementById("currentLastName").value = "";
    document.getElementById("currentUsername").value = "";
    document.getElementById("currentContact").value = "";
    document.getElementById("currentMale").checked = false;
    document.getElementById("currentFemale").checked = false;
    document.getElementById("currentCity").value = "";
    document.getElementById("currentState").value = "";
    document.getElementById("currentZip").value = "";
    document.getElementById("cHobby1").checked = false;
    document.getElementById("cHobby2").checked = false;
    document.getElementById("cHobby3").checked = false;
    document.getElementById("cHobby4").checked = false;
  }
});