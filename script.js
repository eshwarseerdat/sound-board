const audios = document.querySelectorAll("audio");
const btns = document.querySelector("#buttons");

const sounds = Array.from(audios).map((audio) => audio.id);

sounds.forEach((sound) => {
  const btn = document.createElement("button");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    audios.forEach((audio) => {
      if (audio.id === btn.innerText) {
        audio.load();
        audio.play();
      } else audio.pause();
    });
  });

  btns.appendChild(btn);
});
