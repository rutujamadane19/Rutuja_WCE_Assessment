const feedbacks = [
    {
      image: "./Crafts/testimonials/p1.jpeg",  
      name: "Henry Kapoor",
      designation: "Web Developer",
      feedback:
        "I recently purchased a set of handmade candles from this store, and I'm absolutely in love with them! The quality is exceptional, and the attention to detail is evident in every piece. They also make my home smell wonderful. I'll definitely be coming back for more!",
    },
    {
      image: "./Crafts/testimonials/p2.jpeg",
      name: "Michael Smith",
      designation: "CEO",
      feedback:
        "I ordered a custom-made wooden jewelry box for my wife, and it exceeded all my expectations. The craftsmanship is superb, and you can tell it was made with love and care. My wife was thrilled with the gift, and it’s a beautiful addition to our home.",
    },
    {
      image: "./Crafts/testimonials/p3.png",  
      name: "Sophia Martinez",
      designation: "UX Designer",
      feedback:
        "The handmade scarves I bought are simply beautiful. The colors are vibrant, and the material is so soft and cozy. They make for perfect gifts, and I received so many compliments when I wore one out. This shop truly stands out with its unique and high-quality products.",
    },
  ];
  
  let i = 0;
  let j = feedbacks.length;
  
  let testimonialCont = document.getElementById("testimonial-cont");
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");
  
  let showTestimonial = () => {
    testimonialCont.innerHTML = `
      <p>${feedbacks[i].feedback}</p>
      <img src=${feedbacks[i].image}>
      <h3>${feedbacks[i].name}</h3>
      <h6>${feedbacks[i].designation}</h6>
    `;
  };

  prev.addEventListener("click", () => {
    i = (j + i - 1) % j;
    showTestimonial();
  });
  next.addEventListener("click", () => {
    i = (j + i + 1) % j;
    showTestimonial();
  });
  
  window.onload = showTestimonial;