// Toggle logic for the glass sidebar.
// Keeps the markup semantic and only flips a class on the body element.
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleButton = document.querySelector(".sidebar__toggle");

    if (!toggleButton) {
        return;
    }

    toggleButton.addEventListener("click", () => {
        const isCollapsed = body.classList.toggle("sidebar-collapsed");
        toggleButton.setAttribute("aria-expanded", String(!isCollapsed));
        toggleButton.setAttribute(
            "aria-label",
            isCollapsed ? "Sidebar ausklappen" : "Sidebar einklappen"
        );
    });
});
