# Nordic Brew – Modern Coffee Shop Website

Nordic Brew is a responsive single-page website for a fictional
coffee shop. It was created as an individual frontend learning
project using HTML, CSS, and JavaScript.

The website helps visitors explore the menu, learn about the café,
view images, and find example contact details and opening hours.

## Features

- Home section with a café image and a link to the menu
- About section introducing the business
- Six menu items with descriptions and example prices
- Interactive menu filtering: All, Drinks, and Food
- Image gallery
- Example contact details and opening hours
- Responsive layouts for desktop, tablet, and mobile
- Keyboard-accessible navigation and filter buttons

## Technologies

- HTML5: semantic page structure and content
- CSS3: styling, Flexbox, Grid, and media queries
- JavaScript: menu filtering and button state updates

No CSS frameworks or JavaScript libraries are used.

## Project Structure

- index.html — Website content and structure
- css/style.css — Styling and responsive layouts
- js/script.js — Menu filtering
- images/ — AI-generated café and product images
- docs/planning.md — Project plan and design decisions
- docs/NordicBrew_Wireframes.pptx — Editable desktop and mobile wireframes
- README.md — Project overview and running instructions

## Run Locally

1. Download or clone the repository.
2. Keep the files and folders in their existing structure.
3. Open index.html in a web browser.

No installation or build step is required.

## Design

The design uses a warm cream background, dark brown text,
muted green accents, and white menu cards.

- Headings: Georgia
- Body text and navigation: Arial
- Maximum content width: 1100px

Menu and gallery layouts use:
- Three columns above 900px
- Two columns from 601px to 900px
- One column at 600px and below

The Home and Contact sections also stack vertically on mobile.

## The Role of JavaScript

HTML defines the website's structure and content. CSS controls
its appearance and responsive layout. JavaScript adds interactive
behaviour: visitors can choose which menu products to display.

### How Menu Filtering Works

The HTML contains custom data attributes:
- data-filter identifies each filter button's category.
- data-category identifies each product's category.

When a visitor clicks All, Drinks, or Food, JavaScript:
1. Reads the selected category.
2. Checks each product's category.
3. Shows matching products and hides the others.
4. Updates aria-pressed to identify the selected button.

CSS then uses aria-pressed to give the selected button a green
background and white text.

This happens immediately without reloading the page.

### What Would Happen with Only HTML and CSS?

In this implementation, the website would still display its
content, images, menu prices, contact details, and opening hours.

Navigation links would still jump to the correct sections.
The responsive layouts, hover effects, and keyboard focus
indicators would also continue to work.

However, the menu filtering would not work. All six products
would remain visible, and the filter controls would remain hidden.

The controls are hidden in the HTML and revealed by JavaScript
only after their click handlers have been registered. This avoids
displaying buttons that do nothing.

### Why Use JavaScript Here?

Filtering lets visitors focus on drinks or food without searching
through the whole menu. It is a small, practical interaction that
improves the browsing experience.

The essential content remains available without JavaScript,
while JavaScript adds extra functionality. This approach is
called progressive enhancement.

## Accessibility

- Semantic HTML elements and a logical heading hierarchy
- Descriptive alternative text for images
- An accessible name for the main navigation
- Native links and buttons for keyboard interaction
- Visible keyboard focus indicators
- aria-pressed states for filter buttons

## Manual Testing

The following checks passed during local browser testing:

- Navigation links reach the correct sections.
- Drinks displays the three drinks.
- Food displays the three food items.
- All displays all six products.
- All four images load correctly.
- Menu and gallery layouts change between three, two, and one column.
- Narrow layouts have no unwanted horizontal scrolling.
- Links and buttons can be reached using Tab.
- Keyboard focus is visible.
- Filter buttons can be activated using Enter.

Responsive checks were performed by resizing the browser window.
Testing on physical mobile devices has not yet been recorded.

## Images and Fictional Content

The four website images were generated using OpenAI's image
generation tool for this project.

They illustrate a fictional café and do not show an actual
Nordic Brew business.

The business name, menu prices, address, email, and opening hours
are demonstration content.

## Project Status

The HTML, CSS, JavaScript interaction, images, and initial
manual browser checks are complete.

Remaining work:
- Publish the project in a public GitHub repository.
- Deploy the website with GitHub Pages.
- Add the repository and live website links to this README.
- Verify the deployed website.
- Complete the presentation slides.
