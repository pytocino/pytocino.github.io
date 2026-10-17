// Aparición suave de las secciones. El HTML no oculta nada: la clase `js-reveal`
// (que activa el CSS que oculta) solo se añade si este script se ejecuta.
const sections = document.querySelectorAll<HTMLElement>("main section");

if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("js-reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );
  sections.forEach((s) => observer.observe(s));
}
