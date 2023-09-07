// Sidebar
const menuItems = document.querySelectorAll(".menu-item");

//Messages
const messages = document.querySelector(".messages");
const messagesNotifications = document.querySelector("#messages-notifications");
const closeMessageIcon = document.querySelector(".msg-close");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");
//Requests
const frndRqst = document.querySelector("#requests");
const request = document.querySelectorAll(".request");

// ====== Sidebar =======
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
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// =========== Messeges =============
messagesNotifications.addEventListener("click", () => {
  messages.style.display = "block";
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
  document.querySelector(
    "#messages-notifications .notification-count"
  ).style.display = "none";
});

closeMessageIcon.addEventListener("click", () => {
  messages.style.display = "none";
});

frndRqst.addEventListener("click", () => {
  document.querySelector("#requests .notification-count").style.display =
    "none";

  request.forEach((items) => {
    items.style.boxShadow = "0 0 1rem var(--color-primary)";
    setTimeout(() => {
      items.style.boxShadow = "none";
    }, 4000);
  });
});

// =========== Message Search ===========
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);
