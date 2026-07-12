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


// --- 5. New Arrival Popup Trigger ---
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("customPopup");
  const closeBtn = document.querySelector(".popup-close-btn");

  if (popup) {
    setTimeout(() => {
      popup.style.display = "flex";
    }, 1500);

    function closePopup() {
      popup.style.display = "none";
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", closePopup);
    }

    popup.addEventListener("click", function (e) {
      if (e.target === popup) {
        closePopup();
      }
    });
  }
});
