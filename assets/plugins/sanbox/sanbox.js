/*sanbox

window.sandbox = new Sandbox.View({
  model: new Sandbox.Model(),
  el: $('#sandbox'),
  resultPrefix: "  => ",
  helpText: "Type JavaScript commands into the console and hit enter to evaluate. Scroll up/down to navigate through history, type ':clear' to reset it. Hold Alt or option + enter/up/down for returns and multi-line editing.",
  tabCharacter: "   ",
  placeholder: "Type and hit enter. ':help' for information."
});