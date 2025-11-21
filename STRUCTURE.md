# Midway Ford Truck Center - Service Pages Structure

## File/Folder Structure

```
midwayweb/
├── assets/
│   ├── css/
│   │   └── main.css          # Main stylesheet (mobile-first, responsive)
│   ├── js/
│   │   └── main.js           # Light vanilla JS for interactions
│   └── img/                   # Image assets directory
├── templates/
│   ├── header.html            # Header template (placeholder - needs real markup)
│   └── footer.html            # Footer template (placeholder - needs real markup)
├── light-truck-service.html   # Light truck service page
├── heavy-truck-service.html   # Heavy truck service page
├── ford-pro-elite-commercial-center.html  # Ford Pro Elite page
└── README.md
```

## Critical Next Steps

### 1. Copy Header Markup
1. Visit https://www.midwayfordtruck.com/
2. View page source or inspect the header element
3. Copy the **ENTIRE** header markup including:
   - Opening `<header>` tag and all attributes
   - Logo/house icon
   - Main navigation menu structure
   - "New / Used / Work Ready Trucks / Finance / Service & Parts / About Us" navigation
   - All classes, IDs, and link destinations
   - Any scripts or styles specific to the header
4. Paste into `templates/header.html` (replace the placeholder)
5. Copy the same markup into each of the three HTML pages (replace the header section)

### 2. Copy Footer Markup
1. Visit https://www.midwayfordtruck.com/
2. View page source or inspect the footer element
3. Copy the **ENTIRE** footer markup including:
   - Opening `<footer>` tag and all attributes
   - All footer content, links, and sections
   - All classes, IDs, and link destinations
4. Paste into `templates/footer.html` (replace the placeholder)
5. Copy the same markup into each of the three HTML pages (replace the footer section)

### 3. Important Notes
- **DO NOT** modify any classes, IDs, or link destinations in the header/footer
- **DO NOT** "improve" or simplify the header - it must stay consistent with the OEM provider
- The header/nav must behave identically to the live site on both desktop and mobile
- Preserve all existing structure exactly as-is
- Only the `<main>` content area is customizable per page

## Page Structure

Each service page follows this structure:
- Header (shared, from templates)
- `<main>` content area (customizable):
  - Hero section
  - Services/features section
  - Additional content sections
  - Call-to-action section
- Footer (shared, from templates)

## Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: Base styles (default)
  - Tablet: 768px and up
  - Desktop: 1024px and up
  - Large Desktop: 1440px and up
- Header/nav must maintain identical behavior to live site on all screen sizes

## Tech Stack

- Semantic HTML5
- Modern CSS (Flexbox/Grid)
- Vanilla JavaScript (minimal, only where needed)
- No frameworks or build tools required

