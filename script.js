const audios = document.querySelectorAll("audio");
const btns = document.querySelector("#buttons");

const sounds = Array.from(audios).map((audio) => audio.id);

sounds.forEach((sound) => {
  const btn = document.createElement("button");

  btn.innerText = sound;

  btns.appendChild(btn);
});
