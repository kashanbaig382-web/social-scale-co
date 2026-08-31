const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
const packageButtons = document.querySelectorAll(".package-select");
const selectedPackage = document.getElementById("selectedPackage");
const whatsappBtn = document.getElementById("whatsappBtn");

packageButtons.forEach(button => {
    button.addEventListener("click", () => {

        const packageName = button.dataset.package;
        const packagePrice = button.dataset.price;

        selectedPackage.innerHTML = `
            Selected Plan:
            <strong>${packageName}</strong>
            — ${packagePrice}
        `;

        const message =
            `Hi Social Scale Co., I'm interested in the ${packageName} Package (${packagePrice}). I'd like to discuss it further.`;

        whatsappBtn.href =
            `https://wa.me/923294030695?text=${encodeURIComponent(message)}`;
    });
});