document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  if (!menuToggle) return;

  const menuLinks = document.querySelectorAll(".menu-items a");

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.checked = false;
    });
  });
});

