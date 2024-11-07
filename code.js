//Explode
onEvent("AcornWeevil", "click", function( ) {
  showElement("Explode");
  playSound("assets/roblox-explosion-sound.mp3", false);
  setTimeout(function() {
    hideElement("Explode");
  }, 1000);
});
//Navigation Buttons 
onEvent("Start", "click", function( ) {
  setScreen("About");
  playSound("assets/category_instrumental/harpe_pluck_1.mp3", false);
});
onEvent("Back", "click", function( ) {
  setScreen("StartScreen");
  playSound("assets/category_instrumental/harpe_downscale_2.mp3", false);
});
onEvent("Next", "click", function( ) {
  setScreen("Examples");
  playSound("assets/category_instrumental/harpe_pluck_1.mp3", false);
});
onEvent("Backtoabout", "click", function( ) {
  setScreen("About");
  playSound("assets/category_instrumental/harpe_downscale_2.mp3", false);
  stopSound("assets/crickets.mp3");
  stopSound("assets/Acutalis_Cocroft.mp3");
  stopSound("ANMLInsc_Cicada-1-short-(ID-2396)_BSB.mp3");
  stopSound("assets/katydid1-28871.mp3");
});
//Bug Sounds
onEvent("CricketImage", "click", function( ) {
  playSound("assets/crickets.mp3", false);
  stopSound("assets/Acutalis_Cocroft.mp3");
  stopSound("ANMLInsc_Cicada-1-short-(ID-2396)_BSB.mp3");
  stopSound("assets/katydid1-28871.mp3");
});
onEvent("treeImage", "click", function( ) {
  playSound("assets/Acutalis_Cocroft.mp3", false);
  stopSound("assets/crickets.mp3");
  stopSound("ANMLInsc_Cicada-1-short-(ID-2396)_BSB.mp3");
  stopSound("assets/katydid1-28871.mp3");
});
onEvent("CicadaImage", "click", function( ) {
  playSound("ANMLInsc_Cicada-1-short-(ID-2396)_BSB.mp3", false);
  stopSound("assets/crickets.mp3");
  stopSound("assets/Acutalis_Cocroft.mp3");
  stopSound("assets/katydid1-28871.mp3");
});
onEvent("katydidImage", "click", function( ) {
  playSound("assets/katydid1-28871.mp3", false);
  stopSound("assets/crickets.mp3");
  stopSound("assets/Acutalis_Cocroft.mp3");
  stopSound("ANMLInsc_Cicada-1-short-(ID-2396)_BSB.mp3");
});
