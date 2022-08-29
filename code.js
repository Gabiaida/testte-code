var oxygenCounter = 40;

onEvent("left", "click", function( ) {
	setPosition("astronaut", getXPosition("astronaut") - 20, getYPosition("astronaut"), 110, 110);
});
onEvent("right", "click", function( ) {
	setPosition("astronaut", getXPosition("astronaut") + 20, getYPosition("astronaut"), 110, 110);
});


timedLoop(500, function() {
  setText("oxygenCounter", oxygenCounter);

  setPosition("astronaut", getXPosition("astronaut"), getYPosition("astronaut") - 10, 110, 110);
  if (getXPosition("astronaut")<100  && getYPosition("astronaut")<70) {
      hideElement("stone");
      setText("message", "Pedra coletada!");
  }
  
  if (getXPosition("astronaut")>200  && getYPosition("astronaut")<70) {
      hideElement("crystal");
      setText("message", "Cristal coletado!");
  }
  
  oxygenCounter = oxygenCounter- 1;
  
  if (oxygenCounter==0){
    stopTimedLoop()
    hideElement("astronaut")
    hideElement("stone");

    setText("message", "Ah não! Você está sem oxigênio.");
  }


});

