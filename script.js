const letters = {
  letter: {
    title: "To my favorite person,",
    text: "If only I could choose one person to share all my tomorrows with, I will always choose you bubbie! In a world full of uncertainties and doubts, you are the only one that my heart will never ever have to question. Loving you and being with you is always my favorite feeling. Being loved by you is my favorite blessing. I hope you won't get tired of me being tired of my life and shutting down on you my love. I will be better for you, for me and for us. Don't let go baba, hold onto me I will also hold onto you. I love you so much baby love!"
  },
  memory: {
    title: "The moments I keep,",
    text: "It's the moments wherein we are always ourselves that stays with me the most. Our deep talks, random conversations, the laughter that we share, and even the tampuhan moments we experience. Just simply having you around is more than enough for me. If only I could relive a thousand memories, i'd still choose the ones with you."
  },
  promise: {
    title: "Still choosing you,",
    text: "every second. I would re-learn how to open myself to you even on days that are not easy. I would choose you not just on light days, but even on the days when love takes a little more patience and understanding. I know that being on LDR makes it more hard, but I can promise you that I will always choose you. I know that we won't always get everything right, but I want us to keep learning, growing, and finding our way back to each other's arms. For me at the end of the day it's still you. I promise you that it has always been you my moonpie!"
  }
};

let selected = "letter";
const content = document.getElementById("letterContent");

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    selected = button.dataset.letter;
    document.querySelectorAll(".choice").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    content.hidden = true;
  });
});

document.getElementById("envelope").addEventListener("click", () => {
  document.getElementById("letterTitle").textContent = letters[selected].title;
  document.getElementById("letterText").textContent = letters[selected].text;
  content.hidden = false;
  content.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

document.getElementById("closeLetter").addEventListener("click", () => {
  content.hidden = true;
});
