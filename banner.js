(function () {
  // Si ya hay preferencia guardada, no mostramos nada
  if (window.localStorage && localStorage.getItem("cookieConsent")) {
    return;
  }

  // Estilos del banner
  const style = document.createElement("style");
  style.textContent = `
    #cookie-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #2c2c2c;
      color: #ffffff;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 9999;
      box-shadow: 0 -4px 12px rgba(0,0,0,0.3);
      font-family: Arial, sans-serif;
    }
    #cookie-banner p {
      margin: 0;
      padding-right: 20px;
      font-size: 14px;
      max-width: 70%;
      line-height: 1.4;
    }
    #cookie-banner button {
      padding: 10px 18px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      margin-left: 10px;
    }
    #cookie-banner-accept {
      background: #4CAF50;
      color: #fff;
    }
    #cookie-banner-reject {
      background: #d9534f;
      color: #fff;
    }
  `;
  document.head.appendChild(style);

  // Crear contenedor del banner
  const banner = document.createElement("div");
  banner.id = "cookie-banner";

  banner.innerHTML = `
    <p>
      This site uses cookies to improve your experience. You can accept or reject them.
    </p>
    <div>
      <button id="cookie-banner-accept">Accept</button>
      <button id="cookie-banner-reject">Reject</button>
    </div>
  `;

  // Añadir al body cuando esté listo
  function showBanner() {
    if (!document.body) {
      document.addEventListener("DOMContentLoaded", () => document.body.appendChild(banner));
    } else {
      document.body.appendChild(banner);
    }
  }
  showBanner();

  // Handlers de los botones
  banner.querySelector("#cookie-banner-accept").onclick = function () {
    if (window.localStorage) {
      localStorage.setItem("cookieConsent", "accepted");
    }
    banner.remove();
  };

  banner.querySelector("#cookie-banner-reject").onclick = function () {
    if (window.localStorage) {
      localStorage.setItem("cookieConsent", "rejected");
    }
    banner.remove();
  };
})();
