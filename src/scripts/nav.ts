const toggle = document.querySelector<HTMLButtonElement>(".nav__toggle");
const menu = document.getElementById("nav-menu");

function setOpen(open: boolean): void {
  toggle?.setAttribute("aria-expanded", String(open));
  menu?.classList.toggle("is-open", open);
}

toggle?.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
menu?.querySelectorAll("ul a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setOpen(false);
});

// Al cambiar de idioma, conservar la sección en la que está el usuario.
document.querySelectorAll<HTMLAnchorElement>("[data-lang-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const id = location.hash.slice(1);
    if (!id) return;
    const map = JSON.parse(link.dataset.idMap ?? "{}") as Record<string, string>;
    const target = map[id];
    if (target) link.hash = target;
  });
});
