document.getElementById("go").addEventListener("click", function(){
document.getElementById("result").setAttribute("srcdoc", "<head><style>"+ document.getElementById("css").value + "</style></head><body>" + document.getElementById("html").value + "<script>" + document.getElementById("js").value + "</script></body>");
});
document.getElementById("darkmode").addEventListener("change", function(){
  if(document.getElementById("darkmode").checked){
    document.getElementsByTagName("html")[0].style.backgroundColor = "black";
  document.getElementById("dark").innerHTML = "textarea {font-family: monospace; resize: none; border-radius: 5px; color: white; background-color: black;} button {border-radius: 8px; color: white; background-color: black;}";
    document.getElementById("text").style.color = "white";
  } else {
    document.getElementsByTagName("html")[0].style.backgroundColor = "white";
  document.getElementById("dark").innerHTML = "textarea {font-family: monospace; resize: none; border-radius: 5px; color: black; background-color: white;} button {border-radius: 8px; color: buttontext; background-color: buttonface;}";
    document.getElementById("text").style.color = "black";
  }
});
