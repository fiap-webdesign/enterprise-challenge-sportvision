const toggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

toggle.addEventListener("click", () => {
    if(sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")
    } else {
        sidebar.classList.add("active")
    };
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

