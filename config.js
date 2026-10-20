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
      parts.push('<a class="btn" href="mailto:' + s.email + '?subject=Free%20farm%20water%20diagnosis">Email ' + s.email + '</a>');
    }
    if (s.phone) {
      parts.push('<p>Or call toll-free <a href="tel:+1' + s.phone.replace(/\D/g, "") + '">' + s.phone + "</a></p>");
    }
    el.innerHTML = parts.join("");
  });
  document.querySelectorAll("[data-address]").forEach(function (el) {
    el.textContent = s.address ? " · " + s.address : "";
  });
});
