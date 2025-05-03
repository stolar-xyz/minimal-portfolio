export function scrollSpyNavigation() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('nav a');
  const getLinkSectionId = (link: HTMLAnchorElement) =>
    link.getAttribute('href')?.substring(1) ?? '';

  let currentHash = location.hash.replace('#', '');
  let targetHash: string | null = null;

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const id = getLinkSectionId(link);
      targetHash = id;
    });
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;

          navLinks.forEach(link => {
            const linkTarget = getLinkSectionId(link);
            link.classList.toggle('active', linkTarget === id);
          });

          const isTargetHash = targetHash === null || targetHash === id;
          const isCurrentHash = currentHash === id;

          if (isTargetHash && !isCurrentHash) {
            history.replaceState(null, '', `#${id}`);
            currentHash = id;
            targetHash = null;
          }
        }
      });
    },
    {
      threshold: 0.95,
    }
  );

  sections.forEach(section => observer.observe(section));
}
