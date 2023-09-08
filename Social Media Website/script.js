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
    }, 2000);
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

// ===== Theme Customization ======
const theme = document.querySelector("#theme");
const themePalette = document.querySelector(".theme");

const openThemePalette = () => {
  themePalette.style.display = "grid";
};

//Close Palette
const closeThemePalatte = (e) => {
  if (e.target.classList.contains("theme")) {
    themePalette.style.display = "none";
  }
};

themePalette.addEventListener("click", closeThemePalatte);

theme.addEventListener("click", openThemePalette);

//Customize Font-size
var root = document.querySelector(":root");
const fontSizes = document.querySelectorAll(".choose-size span");
const chooseSize = document.querySelectorAll(".choose-size");

//Remove active classes from choose-size
const removeActiveFont = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeActiveFont();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "12px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "18px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    }

    //change font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

//========= Change Primary Colors ==========
const colorPalattee = document.querySelectorAll(".choose-color span");
//Remove active color

const removeActiveColor = () => {
  colorPalattee.forEach((color) => {
    color.classList.remove("active");
  });
};

colorPalattee.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    removeActiveColor();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// =========== Change Background Colors ===========
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

bg1.addEventListener("click", () => {
  bg1.classList.add("active");
  bg1.classList.remove("active");
  bg2.classList.remove("active");
  window.location.reload();
});

bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  bg2.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBg();
});

bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  bg3.classList.add("active");
  bg1.classList.remove("active");
  bg2.classList.remove("active");
  changeBg();
});
