document.addEventListener("DOMContentLoaded", () => {

  /* ===== HERO SLIDESHOW ===== */
  const heroBg = document.querySelector(".hero-bg");
  if(heroBg){
    const heroImages = ["bg1.jpg","bg2.jpg","bg3.jpg"];
    let heroIndex = 0;
    const slideHero = () => {
      heroBg.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
      heroIndex = (heroIndex+1)%heroImages.length;
    };
    slideHero();
    setInterval(slideHero,4000);
  }

  /* ===== SCROLL REVEAL ===== */
  const revealOnScroll = () => {
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el=>{
      if(el.getBoundingClientRect().top < window.innerHeight - 100){
        el.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* ===== MODAL / LIGHTBOX ===== */
  window.openModal = (src,name="",role="")=>{
    const modal = document.getElementById("modal");
    const img = document.getElementById("modal-img");
    const caption = document.getElementById("modal-caption");
    if(modal && img){
      modal.style.display="block";
      img.src=src;
      caption.innerHTML = name? `<strong>${name}</strong><br>${role}` : role;
    }
  };
  window.closeModal = ()=>{ document.getElementById("modal").style.display="none"; };
  document.getElementById("modal").addEventListener("click",e=>{ if(e.target===e.currentTarget) closeModal(); });

  /* ===== GALLERY FILTER ===== */
  window.filterGallery = (cat)=>{
    document.querySelectorAll(".gallery-item").forEach(i=>{
      i.style.display=(cat==="all"||i.classList.contains(cat))?"block":"none";
    });
    document.querySelectorAll(".filter-btn").forEach(btn=>{
      btn.classList.toggle("active", btn.textContent.toLowerCase().includes(cat)||cat==="all");
    });
  };

  /* ===== AUTO SLIDESHOW GALERI ===== */
  const slideImages = ["bg1.jpg","bg2.jpg","bg3.jpg","raker.jpg"];
  let slideIndex = 0;
  setInterval(()=>{
    const img = document.getElementById("slide-img");
    if(img){ slideIndex=(slideIndex+1)%slideImages.length; img.src=slideImages[slideIndex]; }
  },6000);

  /* ===== HAMBURGER MENU ===== */
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");
  if(toggle && menu){
    toggle.addEventListener("click", ()=>{
      menu.classList.toggle("active");
      toggle.classList.toggle("open");
    });
    document.querySelectorAll(".nav-menu a").forEach(a=>{
      a.addEventListener("click", ()=>{ menu.classList.remove("active"); toggle.classList.remove("open"); });
    });
  }

  /* ===== TYPING EFFECT ===== */
  const typingEl = document.getElementById("typing");
  if(typingEl){
    const text="VISI & MISI"; let i=0;
    const typing = ()=>{ if(i<text.length){ typingEl.innerHTML+=text[i++]; setTimeout(typing,70); } };
    typing();
  }

  /* ===== MOUSE GLOW ===== */
  const section = document.getElementById("visiMisi");
  const glow = document.querySelector(".mouse-glow");
  if(section && glow){
    section.addEventListener("mousemove", e=>{
      const rect=section.getBoundingClientRect();
      glow.style.left=(e.clientX-rect.left)+"px";
      glow.style.top=(e.clientY-rect.top)+"px";
    });
  }

  /* ===== 3D TILT CARDS ===== */
  document.querySelectorAll(".ai-card").forEach(card=>{
    card.addEventListener("mousemove",e=>{
      const rect=card.getBoundingClientRect();
      const x=e.clientX-rect.left, y=e.clientY-rect.top;
      const rotateX = -(y-rect.height/2)/18;
      const rotateY = (x-rect.width/2)/18;
      card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener("mouseleave", ()=>{ card.style.transform="rotateX(0) rotateY(0)"; });
  });

});
document.getElementById("year").textContent = new Date().getFullYear();





/* ===== PROFILE MODAL KHUSUS PENGURUS ===== */

function openProfile(role){

  const modal = document.getElementById("profileModal");
  if(!modal) return;

  const name = document.getElementById("modalName");
  const roleText = document.getElementById("modalRole");
  const desc = document.getElementById("modalDesc");
  const img = document.getElementById("modalImg");
  const ig = document.getElementById("modalIg");
 
    if(role === "dpo1"){
    name.innerText = "NAMA DPO 1";
    roleText.innerText = "Dewan Pertimbangan Organisasi";
    desc.innerText = "Memberikan arahan dan pertimbangan strategis bagi organisasi.";
    img.src = "images/dpo1.jpg";
    ig.href = "https://instagram.com/";
  }

  if(role === "dpo2"){
    name.innerText = "NAMA DPO 2";
    roleText.innerText = "Dewan Pertimbangan Organisasi";
    desc.innerText = "Mengawasi dan mengevaluasi kebijakan organisasi.";
    img.src = "images/dpo2.jpg";
    ig.href = "https://instagram.com/";
  }

  if(role === "dpo3"){
    name.innerText = "NAMA DPO 3";
    roleText.innerText = "Dewan Pertimbangan Organisasi";
    desc.innerText = "Memberikan masukan dan solusi untuk keberlangsungan organisasi.";
    img.src = "images/dpo3.jpg";
    ig.href = "https://instagram.com/";
  }

  if(role === "ketua"){
    name.innerText = "PUTRI KARTIKA ABDULLAH";
    roleText.innerText = "Ketua HIMASTA";
    desc.innerText = "Memimpin dan mengkoordinasikan seluruh kegiatan organisasi.";
    img.src = "images/ketua.jpg";
    ig.href = "https://instagram.com/milk.cki";
  }

  if(role === "sekretaris"){
    name.innerText = "Nur Imam Mohammad";
    roleText.innerText = "Sekretaris";
    desc.innerText = "Mengelola administrasi dan dokumentasi organisasi.";
    img.src = "imam.jpeg";
    ig.href = "https://instagram.com/imam.mohmd";
  }

  if(role === "bendahara"){
    name.innerText = "Arum Kusmawaty Yusuf";
    roleText.innerText = "Bendahara";
    desc.innerText = "Mengatur keuangan organisasi dan laporan keuangan.";
    img.src = "arum.jpg";
    ig.href = "https://instagram.com/arumysf_";
  }

  modal.style.display = "flex";
}

function closeProfile(){
  const modal = document.getElementById("profileModal");
  if(modal) modal.style.display = "none";
}

/* klik luar modal untuk tutup */
document.addEventListener("click", function(e){
  const modal = document.getElementById("profileModal");
  if(modal && e.target === modal){
    closeProfile();
  }
});



/* ================= REVEAL KONTAK ================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    const winHeight = window.innerHeight;

    if(top < winHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ================= TOGGLE BAHASA ID / EN ================= */
const langToggle = document.getElementById("langToggle");
let currentLang = "id";

langToggle.addEventListener("click", ()=>{
  if(currentLang === "id"){
    document.querySelectorAll('[data-lang="id"]').forEach(el=>el.style.display="none");
    document.querySelectorAll('[data-lang="en"]').forEach(el=>el.style.display="block");
    langToggle.textContent = "ID";
    currentLang = "en";
  } else {
    document.querySelectorAll('[data-lang="en"]').forEach(el=>el.style.display="none");
    document.querySelectorAll('[data-lang="id"]').forEach(el=>el.style.display="block");
    langToggle.textContent = "EN";
    currentLang = "id";
  }
});




