document.documentElement.classList.add("js-nav");

const toggle = document.querySelector<HTMLButtonElement>(".nav__toggle");
const menu = document.getElementById("nav-menu");

function setOpen(open: boolean): void {
  toggle?.setAttribute("aria-expanded", String(open));
  menu?.classList.toggle("is-open", open);
}

toggle?.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
menu?.querySelectorAll("ul a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape" || toggle?.getAttribute("aria-expanded") !== "true") return;
  const focusInMenu = menu?.contains(document.activeElement) ?? false;
  setOpen(false);
  if (focusInMenu) toggle?.focus();
});

// Tras saltar a una sección (#hash), el hash manda hasta que el usuario haga scroll
// por su cuenta: así no importa si el scroll suave hasta la sección aún no ha terminado.
let manualScroll = false;
for (const type of ["wheel", "touchmove", "keydown"]) {
  window.addEventListener(type, () => (manualScroll = true), { passive: true });
}
window.addEventListener("hashchange", () => (manualScroll = false));

/**
 * Id de la sección que se está viendo, o null en la portada. Al final de la página
 * cuenta la última sección (puede no llegar arriba).
 */
function currentSectionId(): string | null {
  const sections = [...document.querySelectorAll<HTMLElement>("main section[id]")];
  const hash = location.hash.slice(1);
  if (!manualScroll && sections.some((s) => s.id === hash)) return hash === sections[0]?.id ? null : hash;
  const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  let current = atBottom ? (sections.at(-1)?.id ?? null) : null;
  if (!current) {
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= window.innerHeight * 0.35) current = section.id;
    }
  }
  return current === sections[0]?.id ? null : current;
}

// Al cambiar de idioma, llevar al usuario a la misma sección que está viendo.
document.querySelectorAll<HTMLAnchorElement>("[data-lang-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const id = currentSectionId();
    const map = JSON.parse(link.dataset.idMap ?? "{}") as Record<string, string>;
    link.hash = id ? (map[id] ?? "") : "";
  });
});
