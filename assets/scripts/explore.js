// explore.js

window.addEventListener('DOMContentLoaded', init);

//code used from https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

function init() {
  const synth = window.speechSynthesis;

  const voiceSelect = document.getElementById("voice-select");
  const textArea = document.getElementById("text-to-speak");
  const speakButton = document.querySelector("button");
  const faceImg = document.querySelector("img");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-name", voices[i].name);
      option.setAttribute("data-lang", voices[i].lang);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  speakButton.addEventListener("click", () => {
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }

    utterThis.onstart = () => {
      faceImg.src = "assets/images/smiling-open.png";
    };

    utterThis.onend = () => {
      faceImg.src = "assets/images/smiling.png";
    };

    synth.speak(utterThis);
    textArea.blur(); 
  });
}
