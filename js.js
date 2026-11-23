// Jeg finder burgerknappen, menuen og headeren i HTML.
const burgerbutton = document.getElementById("burgerbutton");
const navmenu = document.getElementById("navmenu");
const header = document.querySelector(".site-header");

// Jeg samler ændringerne i én funktion.
// isOpen bestemmer, om menuen skal være åben eller lukket.
function setMenuOpen(isOpen) {

  // Jeg viser eller skjuler menuen.
  navmenu.classList.toggle("active", isOpen);

  // Jeg skifter mellem burgerikon og kryds.
  burgerbutton.classList.toggle("active", isOpen);

  // Jeg ændrer headerens baggrund, når menuen er åben.
  header.classList.toggle("menu-open", isOpen);

  // Jeg fortæller skærmlæsere, om menuen er åben.
  burgerbutton.setAttribute("aria-expanded", isOpen);

  // Jeg opdaterer knappens navn for skærmlæsere.
  if (isOpen) {
    burgerbutton.setAttribute("aria-label", "Close menu");
  } else {
    burgerbutton.setAttribute("aria-label", "Open menu");
  }
}

// Jeg åbner eller lukker menuen, når brugeren klikker.
burgerbutton.addEventListener("click", function () {

  // Jeg undersøger, om menuen allerede er åben.
  const isOpen = navmenu.classList.contains("active");

  // Jeg vælger den modsatte tilstand.
// ! betyder "ikke": åben bliver lukket og omvendt.
  setMenuOpen(!isOpen);
});

// Jeg lukker menuen, når brugeren vælger et link.
navmenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    setMenuOpen(false);
  });
});

// Jeg gør det muligt at lukke menuen med Escape.
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && navmenu.classList.contains("active")) {
    setMenuOpen(false);
    burgerbutton.focus();
  }
});