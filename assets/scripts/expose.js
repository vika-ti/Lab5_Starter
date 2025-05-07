// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("img");
  const hornAudio = document.querySelector("audio");
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  // Horn type changes
  hornSelect.addEventListener("change", () => {
    const selectedHorn = hornSelect.value;
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    hornAudio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  // Volume slider changed
  volumeSlider.addEventListener("input", () => {
    const volume = volumeSlider.value;
    hornAudio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  // Play button clicked
  playButton.addEventListener("click", () => {
    hornAudio.play();
    
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}
