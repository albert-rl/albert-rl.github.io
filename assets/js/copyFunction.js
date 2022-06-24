function CopyIban(textToCopy) {
  var TempText = document.createElement("input");
  TempText.value = textToCopy;
  document.body.appendChild(TempText);
  TempText.select();

  document.execCommand("copy");
  document.body.removeChild(TempText);

  alert("Copied the text: " + TempText.value);
}
