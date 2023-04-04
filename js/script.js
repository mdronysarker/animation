const bannerText = document.querySelector(".bannar_text");
const bannerImg = document.querySelector(".bannar_img img");
const bannerSkillImg = document.querySelector(".bannar_skill img");
const bannerButton = document.querySelector(".bannar_text button");

gsap.set(bannerImg, { opacity: 0 });
gsap.set([bannerText.querySelectorAll("p,h1"), bannerButton], {
  opacity: 0,
  y: 50,
});

let tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
tl.fromTo(
  bannerImg,
  { opacity: 0, x: 50 },
  { opacity: 1, x: -50, duration: 0.7 },
  "-=1"
);
bannerText.querySelectorAll("p,h1,button").forEach((el, index) => {
  const delay = index * 0.1;
  tl.to(el, { opacity: 1, y: 0, duration: 0.1, delay: delay }, "+=0.4");
});
tl.to(bannerText, { delay: 4 });

let tlTwo = gsap.timeline({ repeat: -1, repeatDelay: 3 });
tlTwo.to(bannerSkillImg, {
  duration: 13,
  delay: 1,
  rotate: -285,
  ease: "circ.out",
});
