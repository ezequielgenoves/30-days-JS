window.addEventListener("keypress", triggerSound);

function elementSelectorByDataKey(element, key) {
  return document.querySelector(`${element}[data-key='${key}']`);
};

function triggerSound({ key }) {
  const element = elementSelectorByDataKey(".key", key);
  const { classList } = element;
  const audio = elementSelectorByDataKey("audio", key);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  audio.addEventListener("timeupdate", () => {
    if (audio.currentTime >= 1) {
      audio.pause();
    }
  })
  classList.add("playing");
  setTimeout(() => classList.remove("playing"), 100);
}
