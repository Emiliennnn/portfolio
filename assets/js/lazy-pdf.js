document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".list-expand").forEach(function (details) {
    var iframe = details.querySelector(".pdf-embed[data-src]");
    if (!iframe) return;

    function loadOnOpen() {
      if (!details.open) return;
      iframe.src = iframe.getAttribute("data-src");
      details.removeEventListener("toggle", loadOnOpen);
    }

    details.addEventListener("toggle", loadOnOpen);
  });
});
