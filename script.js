try{document.getElementById("go").addEventListener("click", function(){
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
document.getElementById("save").addEventListener("click"){
  var item = prompt("Save to...");
  /*HTML*/localStorage.setItem(item + " html", document.getElementById("html").value);
  /*CSS*/localStorage.setItem(item + " css", document.getElementById("css").value);
  /*JS*/localStorage.setItem(item + " js", document.getElementById("js").value);
}
document.getElementById("load").addEventListener("click"){
  var item = prompt("Load...");
  if(localStorage.getItem(item + "html") != null){
    document.getElementById("html").innerHTML = loaclStorage.getItem(item + " html");
    document.getElementById("css").innerHTML = loaclStorage.getItem(item + " css");
    document.getElementById("js").innerHTML = loaclStorage.getItem(item + " js");
  }
}
   } catch(err){alert(err)}
