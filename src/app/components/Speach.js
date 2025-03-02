export const handleSpeak = (text) => {
  const speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech);
};

export const handleStop = () => {
  window.speechSynthesis.cancel();
};
