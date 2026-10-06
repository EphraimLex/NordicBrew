// Find the filter controls and menu cards in the HTML.
const menuFilters = document.querySelector(".menu-filters");
const menuItems = document.querySelectorAll(".menu-item");

// Only set up filtering if the required elements exist.
if (menuFilters !== null && menuItems.length > 0) {
    const filterButtons = menuFilters.querySelectorAll("button[data-filter]");

    // Attach a click handler to each filter button.
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Read the button's data-filter value: all, drinks, or food.
            const selectedCategory = button.dataset.filter;

            // Show matching cards and hide the others.
            menuItems.forEach((item) => {
                const matchesCategory =
                    selectedCategory === "all" ||
                    item.dataset.category === selectedCategory;

                item.hidden = !matchesCategory;
            });

            // Update both the accessible state and the selected styling.
            filterButtons.forEach((filterButton) => {
                const isSelected = filterButton === button;

                filterButton.setAttribute(
                    "aria-pressed",
                    String(isSelected)
                );
            });
        });
    });

    // Reveal the controls now that their click handlers are ready.
    menuFilters.hidden = false;
}
