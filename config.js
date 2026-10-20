// Contact details shown on the page. Fill these in once.
window.SITE = {
  email: "info@terawaters.com",
  phone: "855-903-0898",
  address: "1209 Mountain Road Place NE, Albuquerque, NM 87110"
};

document.addEventListener("DOMContentLoaded", function () {
  var s = window.SITE || {};
  document.querySelectorAll("[data-contact]").forEach(function (el) {
    var parts = [];
    if (s.email) {
      parts.push('<p class="mail-line"><a href="mailto:' + s.email + '?subject=Free%20farm%20water%20diagnosis">' + s.email + '</a> <button type="button" class="copy" data-copy="' + s.email + '">Copy</button></p>');
    }
    if (s.phone) {
      parts.push('<p>Or call toll-free <a href="tel:+1' + s.phone.replace(/\D/g, "") + '">' + s.phone + "</a></p>");
    }
    el.innerHTML = parts.join("");
  });
  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-copy]") : null;
    if (!b) return;
    var t = b.getAttribute("data-copy");
    var done = function () { b.textContent = "Copied"; setTimeout(function () { b.textContent = "Copy"; }, 2000); };
    try { navigator.clipboard.writeText(t).then(done, function () {}); } catch (err) {}
  });
  document.querySelectorAll("[data-address]").forEach(function (el) {
    el.textContent = s.address ? " · " + s.address : "";
  });
});
