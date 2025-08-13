const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const audio = document.getElementById("bgMusic");
const textEl = document.getElementById("typeText");

let slide = 1;
let typingIndex = 0;
let typingText = '';
let typingInterval;

const texts = [
  "", // Slide 1 - kosong
  `kk mau bilang makasih bgt buat kalian semua. Klian luar biasa.  Dari awal latihan sampai hari H, kalian udah nunjukin semangat yang keren banget. Meski capek, panas-panasan, kaki pegel, suara serak, kalian tetap maju, tetap kompak, dan nggak nyerah. dan kk bangga banget sama kalian.
Tapi kk juga mau minta maafff yaaaaaa
Selama latihan, mungkin kk pernah marah, ngomong keras, atau pernah buat kalian sakit hatii kk mintaa maaff…. Bukan karena kk ndak peduli, justru karna kk pengen kalian jadi versi terbaik dari diri kalian sendiri. Tapi kalau caranya bikin kalian sakit hati atau malah ngerasa terbebani, kakak minta maaf yaaaaa. Kakak juga masih belajar jadi pelatih yang baik.
kk juga minta maaf soal tadi, kk yang salah kk yang ndak tau aturan lombanya seperti apa, kk minta maaf sebesar-besarnya yaaa. kalian ndak salah apa-apa kalian udah keren banget udah mantep banget kk yang salah, jadi kalian jangan ada yang merasa bersalah yaaa`,
  `klian semua hebat. Nggak peduli hasil akhirnya gimana, yang penting kalian udah berani maju, latihan keras, dan tampil sepenuh hati. Itu udah jadi bukti kalau kalian punya mental juara. Dan yang paling penting, kalian udah saling dukung, saling semangatin satu sama lain. Itu nilainya jauh lebih besar dari sekadar menang lomba.
Ingat ya, jangan berhenti di sini. Terus semangat, terus belajar, terus berkembang. Kadang dalam proses pasti ada capek, ada jatuh, tapi jangan pernah nyerah. Kalian pasti bisa lebih hebat lagi di masa depan.
Terima kasih udah percaya sama kak. Terima kasih udah jadi tim yang seru dan solid. Kk bangga banget punya pasukan seperti kalian.
smpai ketemu lgi di momen selnjutnya yaa! 💪✨
semangaat🤩🤩`
];

// Play music
playBtn.addEventListener("click", () => {
  audio.play();
});

// Next slide
nextBtn.addEventListener("click", () => {
  if (slide < 3) {
    slide++;
    showSlide(slide);
  }
});

function typeText(text) {
  clearInterval(typingInterval);
  typingIndex = 0;
  textEl.textContent = '';
  typingText = text;

  typingInterval = setInterval(() => {
    if (typingIndex < typingText.length) {
      textEl.textContent += typingText.charAt(typingIndex);
      typingIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, 50);
}

function showSlide(slideNum) {
  if (slideNum === 2 || slideNum === 3) {
    typeText(texts[slideNum - 1]);
  }

  if (slideNum === 3) {
    nextBtn.style.display = "none";
  }
}
