const chibiEl = document.getElementById("chibi");
const textEl = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");

/* SLIDE DATA */
const slides = [
  { img: "gif/1.gif", text: "Halloo Lufi Fadilah 💛" },
  { img: "gif/2.gif", text: "Kenalin aku calon presiden ke-99" },
  { img: "gif/3.gif", text: "Aku mau menyampaikan pidato penting dulu..." },
  { img: "gif/4.gif", text: "Yaitu... aku mau minta maaf ❤️" },
  { img: "gif/5.gif", text: "Maafin aku yaaa 🥺" },
  { img: "gif/6.gif", text: "Aku tadi telat bangunin kamu " },
  { img: "gif/7.gif", text: "Padahal tugas aku cuma satu..." },
  { img: "gif/8.gif", text: "Tidur dan biarin kamu kesiangan, hiihihi😭😭" },
  { img: "gif/9.gif", text: "Ehhh, Tapi Malah beneran kesiangan 😭" },
  { img: "gif/10.gif", text: "Sebenernya emang niat nggak bangunin sih wkwkwk 😭" },
  { img: "gif/2.gif", text: "Ehhh Bercanda Bercanda" },
  { img: "gif/11.gif", text: "Lain kali kalau aku telat lagi, pukulin aja ❤️" },
  { img: "gif/12.gif", text: "Tapi jangan marah yahh, maafin aku ❤️" }
];

let index = 0;
let typing = false;

/* TAMPIL SLIDE PERTAMA */
showSlide();

/* NEXT BUTTON */
nextBtn.addEventListener("click", () => {
  if (typing) return;

  index++;
  if (index < slides.length) {
    showSlide();
  } else {
    nextBtn.innerText = "💛";
    nextBtn.disabled = true;
  }
});

/* FUNCTION SLIDE */
function showSlide() {
  // ganti chibi
  chibiEl.src = slides[index].img;

  // reset animasi chibi
  chibiEl.style.animation = "none";
  chibiEl.offsetHeight;
  chibiEl.style.animation = "bounce 1.6s infinite ease-in-out";

  // efek ngetik
  textEl.innerHTML = "";
  let i = 0;
  typing = true;

  const interval = setInterval(() => {
    textEl.innerHTML += slides[index].text.charAt(i);
    i++;
    if (i >= slides[index].text.length) {
      clearInterval(interval);
      typing = false;
    }
  }, 45);
}

