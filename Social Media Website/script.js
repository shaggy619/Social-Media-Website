// Sidebar
const menuItems = document.querySelectorAll(".menu-item");

const removeActiveClass = () => {
  menuItems.forEach((items) => {
    items.classList.remove("active");
  });
};

menuItems.forEach((items) => {
  items.addEventListener("click", () => {
    removeActiveClass();
    items.classList.add("active");
    if (items.id != "notifications") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
    }
  });
});
