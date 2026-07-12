// --- Layout & IFrame Metric Communications ---
const sendMetrics = () => parent.postMessage(
  {
    type: 'web_page_metrics',
    height: document.body.scrollHeight,
    width: document.body.scrollWidth,
    kind: 'static'
  },
  '*'
);

window.addEventListener('load', sendMetrics);
new ResizeObserver(sendMetrics).observe(document.documentElement);


// --- Modern UX & Mobile Interactivity ---
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelectorAll('.nav-links a');

  /**
   * Automatically close the mobile navigation drawer 
   * when a user clicks any anchor link.
   */
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle && menuToggle.checked) {
        menuToggle.checked = false;
      }
    });
  });
});