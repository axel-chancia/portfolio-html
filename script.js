
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = 0;
      card.style.transform = "translateY(20px)";
      card.style.transition = "all 0.6s ease-out";
    }, i * 100);
  });

  const activeCard = document.querySelector(".project-card.active");
  if (activeCard) {
    setTimeout(() => {
      activeCard.style.opacity = 1;
      activeCard.style.transform = "translateY(0)";
    }, 300);
  }
});


const thumbnails = document.querySelectorAll(".project-thumb");
const cards = document.querySelectorAll(".project-card");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const id = thumb.dataset.id;

    thumbnails.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");

    cards.forEach((card) => {
      if (card.id === id) {
        card.classList.add("active");
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      } else {
        card.classList.remove("active");
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";
      }
    });
  });
});

const thumbs = document.querySelectorAll(".project-thumb");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    thumb.classList.add("pulse");
    setTimeout(() => thumb.classList.remove("pulse"), 300);
  });
});


const projectDisplay = document.querySelector(".project-display");

projectDisplay.addEventListener("mousemove", (e) => {
  const { offsetX, offsetY } = e;
  const { clientWidth, clientHeight } = projectDisplay;

  const rotateY = ((offsetX / clientWidth) - 0.5) * 20;
  const rotateX = ((offsetY / clientHeight) - 0.5) * -20;

  projectDisplay.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

projectDisplay.addEventListener("mouseleave", () => {
  projectDisplay.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
});
