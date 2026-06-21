document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".quicknav a");
  if (!links.length || !("IntersectionObserver" in window)) return;

  var sections = Array.prototype.map.call(links, function (link) {
    var id = decodeURIComponent(link.getAttribute("href").slice(1));
    return document.getElementById(id);
  }).filter(Boolean);

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (link) {
            link.classList.remove("active");
          });
          var activeLink = document.querySelector(
            '.quicknav a[href="#' + entry.target.id + '"]'
          );
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
});
