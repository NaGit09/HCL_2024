
function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
let flag = false;
document.getElementById("defaultOpen").click();
function openResult (pageName) {
  console.log(pageName);
  if(flag) {
    document.getElementById(pageName).style.display = "block";
    flag = false;
  }
  else {
    document.getElementById(pageName).style.display = "none";
    flag = true;
  }
}
