/*var name = prompt("Isi Nama Dulu");
  if (name == false) {
  name = "Kartika";
  }
  else if (name == "null") {
  name = "Kartika";
  }*/
  var name = "Kartika";

  function alert() {
  	document.getElementById('alert').style.display = "block";
  }
  function closealert() {
  	document.getElementById('alert').style.display = "none";
  }
  
  function quest1() {
  document.getElementById('alert').style.display = "none";
  document.getElementById('quest1').style.display = "block";
  }
  function closequest1() {
  document.getElementById('quest1').style.display = "none";
  document.getElementById('alert4').style.display = "block";
  }
  
  function quest2() {
  document.getElementById('quest1').style.display = "none";
  document.getElementById('quest2').style.display = "block";
  }
  function closequest2() {
  document.getElementById('quest2').style.display = "none";
  document.getElementById('alert4').style.display = "block";
  }
  
  function quest3() {
  document.getElementById('quest2').style.display = "none";
  document.getElementById('quest3').style.display = "block";
  }
  function closequest3() {
  document.getElementById('quest3').style.display = "none";
  document.getElementById('alert4').style.display = "block";
  }
  
  function quest4() {
  document.getElementById('quest3').style.display = "none";
  document.getElementById('quest4').style.display = "block";
  }
  function closequest4() {
  document.getElementById('quest4').style.display = "none";
  document.getElementById('alert4').style.display = "block";
  }
 
  function quest5() {
  document.getElementById('quest4').style.display = "none";
  document.getElementById('alert2').style.display = "block";
  }
  function alert2() {
  document.getElementById('alert2').style.display = "none";
  document.getElementById('alert3').style.display = "block";
  }
 
  function closealert3() {
  document.getElementById('alert3').style.display = "none";
  }
 
  function closealert4() {
  document.getElementById('alert4').style.display = "none";
  }