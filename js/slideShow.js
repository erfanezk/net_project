const slideShow = document.getElementById("slide-show");
const imagesPath = [
  "after.jpg",
  "batman.jpg",
  "freedom.jpg",
  "gate.jpg",
  "girl.jpg",
  "khight.jpg",
  "panter.jpg",
  "story.jpg",
  "music.jpg",
  "steal.jpg",
];
let index = 0;
const changeSlideShow = async () => {
  if (index >= imagesPath.length-1) {
    index = 0;
  }

  setTimeout(() => {
    slideShow.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(../imgs/${imagesPath[index]})`;
    changeSlideShow();
  }, 2000);
  index++;
};
changeSlideShow();
