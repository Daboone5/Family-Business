________________________________________
Table of Contents
Volume I — Project Foundation
Chapter 1 — Project Vision & Overview
Chapter 2 — Business Overview & Website Architecture
Chapter 3 — Project Structure & File Organization
________________________________________
Volume II — Front-End Architecture
Chapter 4 — HTML Architecture & Component Documentation
Chapter 5 — CSS Design System & Styling Standards
Chapter 6 — JavaScript Architecture & Functional Documentation
________________________________________
Volume III — Core Systems
Chapter 7 — River Conditions Engine & Marine Forecast System
Chapter 8 — Search Engine Optimization (SEO), Metadata & Discoverability
Chapter 9 — User Experience (UX), Interaction Design & Responsive Behavior
Chapter 10 — Reusable Components & UI Library
________________________________________
Volume IV — Development Workflow
Chapter 11 — Git Workflow, Deployment Strategy & Development Practices
Chapter 12 — Coding Standards & Project Conventions
Chapter 13 — Testing, Debugging & Quality Assurance
Chapter 14 — Browser Compatibility & Responsive Testing
________________________________________
Volume V — External Integrations
Chapter 15 — Third-Party APIs & External Services
Chapter 16 — Google Search Console, Analytics & Webmaster Tools
Chapter 17 — Google Business Profile & Local Search Optimization
________________________________________
Volume VI — Feature Documentation
Chapter 18 — Homepage (index.html)
Chapter 19 — Restaurant Menu Page
Chapter 20 — Live Music Page
Chapter 21 — Marine Forecast Page (In Development)
Chapter 22 — Future Hotel Page
Chapter 23 — Future Pontoon Rental Page
________________________________________
Volume VII — Branding & Design
Chapter 24 — Branding Standards & Visual Identity
Chapter 25 — Photography Standards
Chapter 26 — Typography & Graphic Design
Chapter 27 — Logo Evolution & Favicon Standards
________________________________________
Volume VIII — Roadmap
Chapter 28 — Completed Features
Chapter 29 — Features Currently In Development
Chapter 30 — Planned Features
Chapter 31 — Known Bugs & Technical Debt
Chapter 32 — Long-Term Vision












MacRae's of Homosassa Website Developer Handbook
Version 1.0
Chapter 1 — Project Vision & Overview
________________________________________
1.1 Purpose of this Document
This handbook serves as the primary technical reference for the MacRae's of Homosassa website project. It is intended to allow any future developer, engineer, or ChatGPT conversation to continue development seamlessly without requiring prior knowledge of the project history.
The website is actively developed and maintained using a hand-written codebase. This document explains not only the structure of the project, but also the design philosophy, technical decisions, coding standards, and long-term roadmap that guide its development.
This handbook should be considered the single source of truth for the project.
Whenever new features are implemented, this handbook should be updated alongside the source code.
________________________________________
1.2 Project Overview
MacRae's of Homosassa is a long-established waterfront destination located on the Homosassa River in Homosassa, Florida.
The business offers:
•	Waterfront motel accommodations 
•	Waterfront tiki bar 
•	Restaurant 
•	Pontoon boat rentals 
•	Marina services 
•	Marine fuel 
•	Live entertainment 
•	Access to the Homosassa River and Gulf of Mexico 
The website exists to showcase the business, provide accurate information to visitors, improve online discoverability through SEO, and ultimately increase reservations, restaurant traffic, and marina activity.
Unlike the previous website, the current implementation is entirely custom-built.
No visual builders, templates, or page builders are used.
The entire project is written manually using HTML, CSS, and JavaScript.
________________________________________
1.3 Why This Website Exists
The previous website contained outdated information, inconsistent formatting, poor mobile usability, weak SEO, and numerous inaccuracies that no longer reflected the business.
Examples included:
•	Incorrect business information. 
•	Outdated rental policies. 
•	Incorrect pet information. 
•	Obsolete pages still indexed by Google. 
•	Poor mobile experience. 
•	Weak search engine optimization. 
•	Limited branding consistency. 
Rather than modifying the previous implementation, the decision was made to rebuild the website from the ground up while preserving the business's identity and history.
________________________________________
1.4 Long-Term Vision
The website should become much more than a digital brochure.
The long-term objective is to become the definitive online resource for visitors planning a trip to the Homosassa River.
Future visitors should be able to plan an entire trip directly from the MacRae's website.
This includes:
•	Booking lodging 
•	Reserving pontoon boats 
•	Viewing menus 
•	Seeing upcoming live entertainment 
•	Checking river conditions 
•	Viewing marine forecasts 
•	Reviewing tide predictions 
•	Viewing live radar 
•	Accessing live river cameras 
•	Finding local attractions 
•	Viewing navigation information 
•	Planning boating activities 
The website should become a destination rather than simply advertising one.
________________________________________
1.5 Project Goals
Every decision made during development should support one or more of the following goals.
Goal 1 — Professional Appearance
The website should immediately establish credibility.
Visitors should feel they are viewing a professionally maintained waterfront destination rather than a small local business website.
________________________________________
Goal 2 — Preserve the Character of MacRae's
Although the website is modern, it should never lose the character of MacRae's.
The visual identity should communicate:
•	Old Florida 
•	Waterfront living 
•	Marina lifestyle 
•	Relaxed atmosphere 
•	Fishing culture 
•	Family-friendly environment 
The website should feel authentic rather than corporate.
________________________________________
Goal 3 — Mobile First
A significant percentage of visitors access the website from mobile devices while traveling.
Every page must remain fully functional on:
•	Desktop 
•	Tablet 
•	Mobile 
Mobile responsiveness is considered a core requirement rather than an enhancement.
________________________________________
Goal 4 — Fast Performance
The website should remain lightweight.
Frameworks are intentionally avoided.
Every feature should be evaluated based on:
•	Performance 
•	Maintainability 
•	Simplicity 
Whenever possible, custom code is preferred over third-party libraries.
________________________________________
Goal 5 — Long-Term Maintainability
Future updates should be straightforward.
The project emphasizes:
•	Clean HTML 
•	Organized CSS 
•	Readable JavaScript 
•	Consistent formatting 
•	Extensive comments 
The website should remain understandable years from now.
________________________________________
Goal 6 — Search Engine Optimization
SEO is considered a fundamental part of the project rather than something added after development.
Every page should include:
•	Appropriate metadata 
•	Structured data 
•	Semantic HTML 
•	Descriptive content 
•	Internal linking 
The goal is to continuously improve organic search visibility.
________________________________________
1.6 Development Philosophy
Several guiding principles have emerged throughout the project.
These principles should continue to influence every future development decision.
________________________________________
Build Rather Than Embed
Whenever practical, custom functionality is preferred over embedded widgets.
Example:
Instead of embedding a generic weather widget, a custom weather dashboard was developed using the Open-Meteo API.
This provides:
•	Better branding 
•	Greater flexibility 
•	Improved user experience 
•	Easier future expansion 
________________________________________
Information Before Decoration
Visual design should always support useful information.
Animations and effects should enhance usability rather than distract from it.
Every section should communicate valuable information.
________________________________________
Consistency Over Complexity
Solutions should prioritize consistency throughout the project.
A straightforward implementation that matches the existing codebase is generally preferred over a more complex solution with marginal technical benefits.
________________________________________
Incremental Development
Large features should be implemented through small, testable improvements.
Typical workflow:
1.	Design 
2.	Implement 
3.	Test 
4.	Commit 
5.	Push 
6.	Deploy 
Frequent commits are preferred over large batches of unrelated changes.
________________________________________
Documentation Is Part of Development
Every significant feature should be documented.
The developer handbook evolves alongside the project.
Documentation is treated as part of the codebase rather than an afterthought.
________________________________________
1.7 Technology Stack
The project intentionally uses a lightweight technology stack.
Languages:
•	HTML5 
•	CSS3 
•	JavaScript (ES6) 
Development Environment:
•	Visual Studio Code 
Version Control:
•	Git 
Repository Hosting:
•	GitHub 
Deployment:
•	GitHub (production deployed from the main branch) 
Primary Browser Targets:
•	Chrome 
•	Edge 
•	Safari 
•	Firefox 
No frontend frameworks are currently used.
No CSS frameworks are currently used.
No JavaScript frameworks are currently used.
________________________________________
1.8 Current Project Status
At the time of writing:
The website has evolved from a basic informational website into a custom web application containing:
•	Advanced weather forecasting 
•	Daily forecast summarization 
•	River-specific boating conditions 
•	Mobile navigation 
•	SEO optimization 
•	Structured data 
•	Google Search Console integration 
•	Interactive contact behavior 
•	Responsive layouts 
•	Dedicated content pages 
Development is ongoing.
Major upcoming work includes:
•	Dedicated Marine Forecast page 
•	NOAA tide integration 
•	Marine radar 
•	Fishing conditions 
•	Water temperature 
•	Additional branding improvements 
________________________________________
1.9 Definition of Success
The website will be considered successful when it consistently achieves the following:
•	Serves as the primary online presence for MacRae's of Homosassa. 
•	Ranks prominently in relevant Google searches. 
•	Provides accurate, up-to-date information. 
•	Offers visitors tools that support trip planning. 
•	Reflects the quality and atmosphere of the physical business. 
•	Remains easy to maintain and extend over time. 
________________________________________
End of Chapter 1
Next Chapter: Chapter 2 – Business Overview & Website Architecture, where we'll document every page, its purpose, the navigation structure, and how the site is organized. This will become the blueprint for the entire codebase.

MacRae's of Homosassa Website Developer Handbook
Version 1.0
Chapter 2 — Business Overview & Website Architecture
________________________________________
2.1 Purpose
This chapter documents the overall structure of the MacRae's of Homosassa website.
Its purpose is to provide future developers with a complete understanding of:
•	The business itself 
•	The website architecture 
•	Every existing page 
•	Navigation philosophy 
•	User flow 
•	Planned expansion 
This chapter should be read before modifying any existing pages or creating new ones.
________________________________________
2.2 Business Overview
MacRae's of Homosassa is a historic waterfront destination located directly on the Homosassa River in Homosassa, Florida.
Unlike many hospitality businesses, MacRae's is not centered around a single service.
Instead, it serves as a multi-purpose waterfront destination combining lodging, dining, marina services, recreation, and entertainment.
The website is designed to reflect this identity.
________________________________________
Primary Business Services
MacRae's currently offers:
Waterfront Motel
Waterfront accommodations for visitors exploring the Nature Coast.
Primary goals:
•	Overnight stays 
•	Fishing trips 
•	Family vacations 
•	Weekend getaways 
________________________________________
Waterfront Restaurant
Full-service restaurant serving:
•	Fresh seafood 
•	Burgers 
•	Sandwiches 
•	Appetizers 
•	Local favorites 
________________________________________
Tiki Bar
Outdoor waterfront bar featuring:
•	Full beverage service 
•	Live entertainment 
•	Sunset views 
•	Outdoor seating 
________________________________________
Pontoon Boat Rentals
One of the business's largest attractions.
Visitors may rent pontoon boats for:
•	River cruising 
•	Swimming 
•	Scalloping 
•	Fishing 
•	Exploring the Gulf 
________________________________________
Marina
Marina services include:
•	Dockage 
•	Boat access 
•	Marine fuel 
•	Launching 
________________________________________
Live Entertainment
Regular live music performances.
Dedicated Live Music page provides schedules and information.
________________________________________
Waterfront Access
The property serves as a launching point for:
•	Homosassa River 
•	Gulf of Mexico 
•	Monkey Island 
•	Springs 
•	Fishing grounds 
•	Scalloping 
________________________________________
2.3 Website Mission
The website should accomplish five objectives simultaneously.
________________________________________
Inform
Visitors should quickly understand:
•	What MacRae's offers 
•	Where it is located 
•	Hours 
•	Contact information 
•	Available amenities 
________________________________________
Inspire
Photography and layout should encourage visitors to imagine themselves visiting.
The website should create an emotional connection through imagery rather than relying solely on text.
________________________________________
Convert
Every major section should encourage a meaningful action.
Examples include:
•	Book a room 
•	Reserve a pontoon boat 
•	View the menu 
•	Visit the restaurant 
•	Call the marina 
•	Get directions 
________________________________________
Assist
The website should become a planning resource.
Future visitors should find:
•	Weather 
•	Marine forecast 
•	Tide predictions 
•	Live radar 
•	River conditions 
•	River cameras 
without leaving the website.
________________________________________
Rank
Every page should contribute to improved search engine visibility.
SEO is integrated into every page rather than treated as a separate feature.
________________________________________
2.4 Current Website Architecture
Current website pages:
index.html
│
├── Homepage
│
├── Hero
├── Motel
├── Pontoon Rentals
├── Restaurant
├── Live Music Preview
├── Weather
├── Google Map
└── Contact
menu.html

Restaurant menu
livemusic.html

Dedicated live entertainment page
marine.html

(Currently under development)
________________________________________
2.5 Navigation Structure
Current navigation philosophy:
Desktop Navigation

HOME
│
├── Rooms
├── Pontoon Rentals
├── Marine Forecast
├── Tiki Bar
├── Live Music
├── Contact
Mobile navigation mirrors desktop functionality using a slide-out menu.
Consistency between desktop and mobile navigation is a project requirement.
________________________________________
2.6 Page Descriptions
________________________________________
index.html
Purpose:
Primary landing page.
Most users will enter the website through this page.
Responsibilities:
•	Introduce MacRae's 
•	Present primary services 
•	Encourage bookings 
•	Display current weather 
•	Display location 
•	Provide contact information 
This page acts as the website's central hub.
________________________________________
menu.html
Purpose:
Restaurant menu.
Should remain lightweight.
Future enhancements may include:
•	Seasonal menus 
•	Daily specials 
•	Drink menus 
•	PDF download 
________________________________________
livemusic.html
Purpose:
Dedicated entertainment page.
Contains:
•	Live music schedules 
•	Artist information 
•	Event details 
Separated from the homepage to allow frequent updates without modifying the main page.
________________________________________
marine.html
Status:
Currently under development.
Purpose:
Provide marine information specifically for visitors planning time on the water.
Will eventually include:
•	Marine weather 
•	River forecast 
•	NOAA tides 
•	Live radar 
•	Boating outlook 
•	Wind 
•	Water temperature 
•	Fishing conditions 
•	NOAA advisories 
•	River camera 
•	Navigation resources 
This page is expected to become one of the website's signature features.
________________________________________
2.7 Homepage Structure
The homepage follows a logical progression.
Hero

↓

Rooms

↓

Pontoon Rentals

↓

Restaurant / Tiki Bar

↓

Live Music

↓

Weather

↓

Google Map

↓

Contact
The philosophy is:
Visitors should naturally move from learning about the business toward contacting or booking.
________________________________________
2.8 Information Hierarchy
The most important information always appears first.
Priority:
1.	Business identity 
2.	Lodging 
3.	Boat rentals 
4.	Restaurant 
5.	Entertainment 
6.	River conditions 
7.	Directions 
8.	Contact information 
Future marine tools will support—not replace—the primary business goals.
________________________________________
2.9 User Journey
A typical first-time visitor should experience the website as follows:
Arrives

↓

Sees hero image

↓

Understands business identity

↓

Explores accommodations

↓

Views rentals

↓

Checks restaurant

↓

Looks at weather

↓

Gets directions

↓

Calls or books
No page should interrupt this flow unnecessarily.
________________________________________
2.10 Navigation Philosophy
Navigation should remain simple.
Avoid:
•	Deep menu hierarchies 
•	Drop-down menus 
•	Hidden pages 
•	Excessive nesting 
Current design goal:
Every major destination should be accessible within one click.
________________________________________
2.11 Expansion Philosophy
The homepage should remain concise.
As the project grows, additional information should be moved to dedicated pages.
Future standalone pages may include:
marine.html

hotel.html

pontoon.html

restaurant.html

history.html

gallery.html

events.html

fishing.html
This prevents the homepage from becoming excessively long while allowing the website to expand.
________________________________________
2.12 Internal Linking Strategy
Every standalone page should provide easy navigation back to the homepage.
Recommended pattern:
Home

↓

Feature Page

↓

Return to Main Website
Cross-linking between related pages is encouraged where appropriate.
________________________________________
2.13 Architectural Principles
Future development should preserve the following principles.
Simplicity
The website should remain understandable to developers with basic HTML/CSS/JavaScript knowledge.
________________________________________
Maintainability
Pages should remain modular.
Each page should have a clearly defined responsibility.
________________________________________
Scalability
Adding future pages should not require redesigning existing architecture.
Navigation should scale naturally.
________________________________________
Performance
Avoid unnecessary JavaScript frameworks.
Minimize external dependencies.
Prioritize fast page loads.
________________________________________
User Experience
Information should always be easier to find than decorative elements.
Every page should answer a visitor's question quickly.
________________________________________
2.14 Chapter Summary
At the completion of this chapter, a future developer should understand:
•	What MacRae's is 
•	What services it provides 
•	Why the website exists 
•	How the site is organized 
•	How visitors navigate the site 
•	The role of every current page 
•	The long-term architectural direction of the project 
This architecture serves as the foundation for all future development.
________________________________________
End of Chapter 2
Next Chapter: Chapter 3 – Project Structure & File Organization, which will document the complete folder hierarchy, the purpose of every major file, asset organization, naming conventions, and the overall project layout. This chapter will act as the map of the codebase and ensure any future developer can quickly locate and understand every component of the project.
MacRae's of Homosassa Website Developer Handbook
Version 1.0
Chapter 3 — Project Structure & File Organization
________________________________________
3.1 Purpose
This chapter documents the physical organization of the website.
It serves four primary purposes:
•	Describe the folder hierarchy. 
•	Explain the purpose of every major file. 
•	Establish standards for future organization. 
•	Prevent project clutter as the website continues to expand. 
Future developers should consult this chapter before creating new files or folders.
________________________________________
3.2 Project Philosophy
The website intentionally follows a simple, flat architecture.
Unlike large web applications that use frameworks and hundreds of directories, this project prioritizes:
•	Simplicity 
•	Readability 
•	Maintainability 
•	Performance 
Every file should have a clearly defined purpose.
Future expansion should occur by adding well-organized pages rather than introducing unnecessary complexity.
________________________________________
3.3 Current Project Structure
The project currently follows the structure below.
MacRaes-Website/

│
├── index.html
├── menu.html
├── livemusic.html
├── marine.html (currently under development)
│
├── styles.css
│
├── images/
│      ├── hero.jpg
│      ├── waterfront.jpg
│      ├── riverchart.jpg
│      ├── logo.png
│      ├── favicon.ico
│      └── future image assets
│
├── fonts/
│      └── (future custom fonts)
│
└── README (optional)
This intentionally remains lightweight.
________________________________________
3.4 Root Directory
The root directory contains only primary website files.
These include:
•	HTML pages 
•	Main stylesheet 
•	Supporting assets 
Avoid placing miscellaneous files inside the root.
Examples of files that should not remain in the root:
•	Temporary images 
•	Photoshop files 
•	PDFs 
•	Design drafts 
•	Screenshots 
Those should be stored elsewhere.
________________________________________
3.5 HTML Files
Each HTML page represents a standalone destination.
Current pages:
________________________________________
index.html
Purpose:
Main landing page.
Responsibilities:
•	Hero 
•	Motel 
•	Pontoon Rentals 
•	Restaurant 
•	Live Music Preview 
•	Weather 
•	Map 
•	Contact 
This page functions as the website hub.
________________________________________
menu.html
Purpose:
Restaurant menu.
Should remain dedicated to dining information.
________________________________________
livemusic.html
Purpose:
Dedicated entertainment page.
Contains live music schedules.
Allows updates without modifying the homepage.
________________________________________
marine.html
Status:
Currently under development.
Purpose:
Marine conditions.
Weather.
Tides.
Radar.
River information.
Eventually this page will become one of the largest pages on the website.
________________________________________
3.6 CSS Organization
The project currently uses a single stylesheet.
styles.css
This decision was intentional.
Reasons:
•	Easy maintenance. 
•	Small project size. 
•	Fast loading. 
•	No duplicate styles. 
As the project grows, the stylesheet remains organized through section headers rather than splitting into multiple files.
________________________________________
Current organization follows:
Global

↓

Navigation

↓

Hero

↓

Buttons

↓

Rooms

↓

Rentals

↓

Restaurant

↓

Weather

↓

Map

↓

Contact

↓

Footer

↓

Individual Pages
Every section is separated using standardized comment blocks.
Example:
/* =========================
WEATHER SECTION
========================= */
This formatting is considered a project standard.
________________________________________
3.7 Future CSS Growth
If the stylesheet eventually exceeds approximately 3,000–4,000 lines, consider splitting it into multiple files.
Recommended structure:
css/

global.css

navigation.css

hero.css

cards.css

weather.css

marine.css

pages.css
Until then, a single stylesheet remains preferred.
________________________________________
3.8 JavaScript Organization
JavaScript is intentionally written without external frameworks.
Current functionality includes:
•	Mobile navigation 
•	Booking popup 
•	Desktop Call Now behavior 
•	Weather API 
•	Weather summaries 
•	River conditions 
•	Forecast generation 
Functions are grouped by purpose.
Example:
/* =========================
WEBSITE FUNCTIONS
========================= */

Navigation

Booking

Desktop Logic

Weather

Utilities
Future JavaScript should continue following this pattern.
________________________________________
3.9 Images Directory
All visual assets belong inside:
images/
Examples include:
Business photography
Hero images
Logos
Backgrounds
Icons
Favicons
Future image naming should remain descriptive.
Preferred:
hero-marina.jpg

pontoon-rental.jpg

restaurant-interior.jpg
Avoid names such as:
IMG_0032.jpg

image4.jpg

photo-new-final-final.jpg
________________________________________
3.10 Fonts Directory
Currently unused.
Reserved for future custom typography.
If web fonts are introduced, they should be stored here.
________________________________________
3.11 Future Asset Directories
As the website expands, additional folders may be created.
Recommended future structure:
images/

logos/

icons/

weather/

marine/

events/
This keeps assets organized without affecting HTML structure.
________________________________________
3.12 Naming Conventions
Future files should follow these rules.
HTML
marine.html

history.html

hotel.html
Never:
MarineForecastFinal.html

NEWPAGE.html
________________________________________
Images
Lowercase.
Hyphen separated.
river-sunset.jpg
________________________________________
CSS Classes
Use descriptive names.
Good:
.weather-card

.contact-button

.hero-content
Avoid:
.box1

.div3

.blueThing
________________________________________
IDs
Reserve IDs for:
Navigation anchors.
JavaScript hooks.
Unique page elements.
Avoid unnecessary IDs.
________________________________________
3.13 Future JavaScript Files
Currently JavaScript is embedded directly inside the HTML pages.
As complexity increases, consider moving to:
js/

main.js

weather.js

marine.js

navigation.js
This change should only occur when it improves maintainability.
Premature separation is discouraged.
________________________________________
3.14 Third-Party Assets
External resources should remain minimal.
Current philosophy:
Build custom whenever practical.
External services should only be introduced when they provide significant value.
________________________________________
3.15 Version Control
Every meaningful change should be committed.
Typical workflow:
git add .

git commit -m "Short descriptive message"

git push origin main
Small commits are preferred over large batches.
Examples:
Improve weather summaries

Update SEO metadata

Add marine navigation page

Fix contact animation
Avoid:
Stuff

Changes

Update
Commit messages should clearly describe the work completed.
________________________________________
3.16 Deployment
Deployment currently occurs directly from:
GitHub

↓

main branch

↓

Production Website
Every push to main updates the live website.
Because of this:
Always verify functionality before pushing.
Test:
Desktop.
Mobile.
Navigation.
Weather.
Links.
Console errors.
________________________________________
3.17 Organization Philosophy
Future development should preserve the following principles.
________________________________________
Keep Files Small
Pages should have clear responsibilities.
________________________________________
Keep Sections Together
Related code should remain grouped.
________________________________________
Keep Naming Consistent
Future developers should immediately understand file purposes.
________________________________________
Keep Comments Current
Comments are part of the documentation.
When code changes, comments should also be updated.
________________________________________
Keep the Code Human
The project intentionally favors readability over cleverness.
Future developers should be able to understand the code quickly.
________________________________________
3.18 Chapter Summary
At the completion of this chapter, a future developer should understand:
•	The overall project structure. 
•	The purpose of every primary file. 
•	How assets are organized. 
•	Current JavaScript organization. 
•	CSS architecture. 
•	Naming conventions. 
•	Deployment workflow. 
•	Future expansion strategy. 
Maintaining this organization will help ensure the project remains scalable and easy to navigate as new features are added.
________________________________________
End of Chapter 3
Next Chapter: Chapter 4 – HTML Architecture & Component Documentation
This chapter will document every section of every HTML page, including reusable layouts, semantic structure, navigation behavior, section IDs, reusable buttons, cards, anchors, and page-specific conventions. It will become the definitive blueprint for the site's HTML structure and establish standards for all future page development.
MacRae's of Homosassa Website Developer Handbook
Version 1.0
Chapter 4 — HTML Architecture & Component Documentation
________________________________________
4.1 Purpose
This chapter defines the HTML architecture used throughout the MacRae's of Homosassa website.
Its objectives are to:
•	Document the semantic structure of every page. 
•	Explain the purpose of each major section. 
•	Define reusable HTML components. 
•	Establish conventions for future pages. 
•	Maintain consistency throughout the website. 
Future developers should follow these standards when creating or modifying HTML.
________________________________________
4.2 HTML Philosophy
The project intentionally favors semantic, readable HTML over excessive nesting or framework-specific markup.
The guiding principles are:
•	Use semantic elements whenever practical. 
•	Keep nesting shallow. 
•	Group related content logically. 
•	Prioritize readability. 
•	Comment every major section. 
•	Keep IDs meaningful. 
•	Reuse existing patterns whenever possible. 
The HTML should be understandable by someone with only basic web development knowledge.
________________________________________
4.3 Page Template
Every HTML page should follow the same high-level structure.
<!DOCTYPE html>

<html>

    <head>

        Metadata

        SEO

        Stylesheets

        Structured Data

    </head>

    <body>

        Navigation

        Page Content

        Footer (future)

        JavaScript

    </body>

</html>
This structure should remain consistent across all pages.
________________________________________
4.4 Standard <head> Structure
Every page should include:
<meta charset="UTF-8">

<meta name="viewport"
      content="width=device-width, initial-scale=1.0">

<title>...</title>

<meta name="description"...>

<meta name="robots"...>

<meta name="author"...>

<link rel="stylesheet"...>

<link rel="icon"...>
Whenever appropriate:
•	Open Graph 
•	Twitter Cards 
•	JSON-LD Schema 
should also be included.
________________________________________
4.5 Section Comment Standard
Every major section begins with a standardized comment block.
Example:
<!-- =========================
HERO SECTION
========================= -->
This style is used throughout:
•	HTML 
•	CSS 
•	JavaScript 
It is considered part of the coding standard.
________________________________________
4.6 Homepage Architecture
The homepage (index.html) follows a linear, story-driven layout.
Current order:
Navigation

↓

Hero

↓

Rooms

↓

Pontoon Rentals

↓

Restaurant / Tiki Bar

↓

Live Music

↓

Weather

↓

Google Map

↓

Contact
The order is intentional.
Visitors should naturally progress toward making contact or booking.
Future additions should preserve this flow.
________________________________________
4.7 Hero Section
Purpose:
Immediately communicate:
•	Business identity 
•	Waterfront atmosphere 
•	Primary call-to-action 
Characteristics:
•	Large background image 
•	Headline 
•	Supporting description 
•	Primary buttons 
The hero establishes the visual identity of the website.
________________________________________
4.8 Content Sections
Each homepage section functions independently.
Each should answer a single question.
Example:
Rooms
Answers:
"Can I stay here?"
________________________________________
Pontoon Rentals
Answers:
"Can I rent a boat?"
________________________________________
Restaurant
Answers:
"What can I eat?"
________________________________________
Weather
Answers:
"What are today's conditions?"
________________________________________
Contact
Answers:
"How do I get there?"
________________________________________
Sections should avoid mixing multiple unrelated topics.
________________________________________
4.9 IDs
IDs serve two purposes only.
Navigation
Example:
<section id="contact">
Allows:
<a href="#contact">
________________________________________
JavaScript
Example:
<div id="weather-card">
Allows JavaScript updates.
Avoid assigning IDs solely for styling.
Use classes for styling whenever possible.
________________________________________
4.10 Classes
Classes describe reusable styling.
Examples:
hero-content

contact-card

weather-main

forecast-grid

button

custom-weather-card
Class names should describe the element's purpose rather than its appearance.
Good:
contact-button
Avoid:
orange-button
because appearance may change.
________________________________________
4.11 Buttons
Buttons follow consistent patterns.
Examples include:
Reservation buttons
Directions button
Call Now
Return to Main Website
Whenever possible:
Buttons should reuse existing CSS.
Avoid creating unique button styles for every page.
________________________________________
4.12 Cards
Cards are one of the primary reusable components.
Examples:
Weather
Contact
Marine
Future Events
Cards should maintain:
Consistent padding
Rounded corners
Soft shadows
Centered layout
________________________________________
4.13 Embedded Content
Embedded content should always be isolated inside its own section.
Examples:
Google Maps
Future Radar
Future River Camera
NOAA widgets
Embeds should never interrupt primary content flow.
________________________________________
4.14 Navigation Links
Navigation should remain flat.
Current philosophy:
One click to every major destination.
Avoid nested menus.
Avoid dropdowns.
Future pages should simply become additional navigation items.
________________________________________
4.15 Standalone Pages
Every standalone page should include:
Consistent branding
Consistent typography
Consistent navigation
Return to Main Website button
Future pages should feel like part of the same website rather than separate projects.
________________________________________
4.16 Mobile Navigation
Desktop:
Horizontal navigation.
Mobile:
Hamburger icon.
Slide-out menu.
Every mobile navigation link should close the menu before navigation.
Pattern:
onclick="toggleMenu()"
This behavior should remain consistent.
________________________________________
4.17 Accessibility Considerations
HTML should remain semantic.
Use:
<header>

<section>

<nav>

main

footer
instead of generic <div> elements whenever practical.
Images should receive descriptive alt text.
Buttons should remain keyboard accessible.
Future accessibility improvements should preserve the existing structure.
________________________________________
4.18 Reusable Components
Current reusable components include:
Navigation
Hero buttons
Booking popup
Cards
Weather layout
Directions button
Contact card
Section headings
Background overlays
These components should be reused rather than duplicated.
________________________________________
4.19 HTML Expansion Philosophy
As the website grows:
Avoid making the homepage excessively long.
Instead:
Move major features into dedicated pages.
Example:
Marine Forecast
History
Events
Fishing
Hotel
Restaurant
The homepage should remain a high-level overview.
________________________________________
4.20 Important Design Decisions
Several architectural decisions have already been made and should not be changed without good reason.
Hand-written HTML
No visual builders.
No page generators.
________________________________________
Flat Architecture
Minimal directory nesting.
________________________________________
Heavy Documentation
Comments are required.
________________________________________
Semantic Layout
Readable before optimized.
________________________________________
Component Reuse
Avoid duplicated layouts.
________________________________________
Progressive Enhancement
New features extend existing pages rather than replacing them.
________________________________________
4.21 Chapter Summary
At the completion of this chapter, a future developer should understand:
•	The HTML philosophy of the project. 
•	The structure of every page. 
•	How sections are organized. 
•	The purpose of IDs and classes. 
•	Navigation conventions. 
•	Reusable components. 
•	Accessibility expectations. 
•	Standards for creating new pages. 
These standards ensure that all future HTML remains consistent with the existing codebase and preserves the maintainable, hand-crafted nature of the project.
________________________________________
End of Chapter 4
Next Chapter: Chapter 5 – CSS Design System & Styling Standards
This will likely become one of the largest chapters in the handbook. It will define the site's complete visual language, including:
•	Color palette and branding 
•	Typography 
•	Spacing system 
•	Section layouts 
•	Button design 
•	Cards 
•	Shadows 
•	Border radius 
•	Animations 
•	Hover effects 
•	Responsive breakpoints 
•	Layering and overlays 
•	Reusable utility patterns 
It will serve as the definitive style guide for maintaining a consistent look and feel across the entire MacRae's website.
MacRae's of Homosassa Website Developer Handbook
Version 1.0
Chapter 4 — HTML Architecture & Component Documentation
________________________________________
4.1 Purpose
This chapter defines the HTML architecture used throughout the MacRae's of Homosassa website.
Its objectives are to:
•	Document the semantic structure of every page. 
•	Explain the purpose of each major section. 
•	Define reusable HTML components. 
•	Establish conventions for future pages. 
•	Maintain consistency throughout the website. 
Future developers should follow these standards when creating or modifying HTML.
________________________________________
4.2 HTML Philosophy
The project intentionally favors semantic, readable HTML over excessive nesting or framework-specific markup.
The guiding principles are:
•	Use semantic elements whenever practical. 
•	Keep nesting shallow. 
•	Group related content logically. 
•	Prioritize readability. 
•	Comment every major section. 
•	Keep IDs meaningful. 
•	Reuse existing patterns whenever possible. 
The HTML should be understandable by someone with only basic web development knowledge.
________________________________________
4.3 Page Template
Every HTML page should follow the same high-level structure.
<!DOCTYPE html>

<html>

    <head>

        Metadata

        SEO

        Stylesheets

        Structured Data

    </head>

    <body>

        Navigation

        Page Content

        Footer (future)

        JavaScript

    </body>

</html>
This structure should remain consistent across all pages.
________________________________________
4.4 Standard <head> Structure
Every page should include:
<meta charset="UTF-8">

<meta name="viewport"
      content="width=device-width, initial-scale=1.0">

<title>...</title>

<meta name="description"...>

<meta name="robots"...>

<meta name="author"...>

<link rel="stylesheet"...>

<link rel="icon"...>
Whenever appropriate:
•	Open Graph 
•	Twitter Cards 
•	JSON-LD Schema 
should also be included.
________________________________________
4.5 Section Comment Standard
Every major section begins with a standardized comment block.
Example:
<!-- =========================
HERO SECTION
========================= -->
This style is used throughout:
•	HTML 
•	CSS 
•	JavaScript 
It is considered part of the coding standard.
________________________________________
4.6 Homepage Architecture
The homepage (index.html) follows a linear, story-driven layout.
Current order:
Navigation

↓

Hero

↓

Rooms

↓

Pontoon Rentals

↓

Restaurant / Tiki Bar

↓

Live Music

↓

Weather

↓

Google Map

↓

Contact
The order is intentional.
Visitors should naturally progress toward making contact or booking.
Future additions should preserve this flow.
________________________________________
4.7 Hero Section
Purpose:
Immediately communicate:
•	Business identity 
•	Waterfront atmosphere 
•	Primary call-to-action 
Characteristics:
•	Large background image 
•	Headline 
•	Supporting description 
•	Primary buttons 
The hero establishes the visual identity of the website.
________________________________________
4.8 Content Sections
Each homepage section functions independently.
Each should answer a single question.
Example:
Rooms
Answers:
"Can I stay here?"
________________________________________
Pontoon Rentals
Answers:
"Can I rent a boat?"
________________________________________
Restaurant
Answers:
"What can I eat?"
________________________________________
Weather
Answers:
"What are today's conditions?"
________________________________________
Contact
Answers:
"How do I get there?"
________________________________________
Sections should avoid mixing multiple unrelated topics.
________________________________________
4.9 IDs
IDs serve two purposes only.
Navigation
Example:
<section id="contact">
Allows:
<a href="#contact">
________________________________________
JavaScript
Example:
<div id="weather-card">
Allows JavaScript updates.
Avoid assigning IDs solely for styling.
Use classes for styling whenever possible.
________________________________________
4.10 Classes
Classes describe reusable styling.
Examples:
hero-content

contact-card

weather-main

forecast-grid

button

custom-weather-card
Class names should describe the element's purpose rather than its appearance.
Good:
contact-button
Avoid:
orange-button
because appearance may change.
________________________________________
4.11 Buttons
Buttons follow consistent patterns.
Examples include:
Reservation buttons
Directions button
Call Now
Return to Main Website
Whenever possible:
Buttons should reuse existing CSS.
Avoid creating unique button styles for every page.
________________________________________
4.12 Cards
Cards are one of the primary reusable components.
Examples:
Weather
Contact
Marine
Future Events
Cards should maintain:
Consistent padding
Rounded corners
Soft shadows
Centered layout
________________________________________
4.13 Embedded Content
Embedded content should always be isolated inside its own section.
Examples:
Google Maps
Future Radar
Future River Camera
NOAA widgets
Embeds should never interrupt primary content flow.
________________________________________
4.14 Navigation Links
Navigation should remain flat.
Current philosophy:
One click to every major destination.
Avoid nested menus.
Avoid dropdowns.
Future pages should simply become additional navigation items.
________________________________________
4.15 Standalone Pages
Every standalone page should include:
Consistent branding
Consistent typography
Consistent navigation
Return to Main Website button
Future pages should feel like part of the same website rather than separate projects.
________________________________________
4.16 Mobile Navigation
Desktop:
Horizontal navigation.
Mobile:
Hamburger icon.
Slide-out menu.
Every mobile navigation link should close the menu before navigation.
Pattern:
onclick="toggleMenu()"
This behavior should remain consistent.
________________________________________
4.17 Accessibility Considerations
HTML should remain semantic.
Use:
<header>

<section>

<nav>

main

footer
instead of generic <div> elements whenever practical.
Images should receive descriptive alt text.
Buttons should remain keyboard accessible.
Future accessibility improvements should preserve the existing structure.
________________________________________
4.18 Reusable Components
Current reusable components include:
Navigation
Hero buttons
Booking popup
Cards
Weather layout
Directions button
Contact card
Section headings
Background overlays
These components should be reused rather than duplicated.
________________________________________
4.19 HTML Expansion Philosophy
As the website grows:
Avoid making the homepage excessively long.
Instead:
Move major features into dedicated pages.
Example:
Marine Forecast
History
Events
Fishing
Hotel
Restaurant
The homepage should remain a high-level overview.
________________________________________
4.20 Important Design Decisions
Several architectural decisions have already been made and should not be changed without good reason.
Hand-written HTML
No visual builders.
No page generators.
________________________________________
Flat Architecture
Minimal directory nesting.
________________________________________
Heavy Documentation
Comments are required.
________________________________________
Semantic Layout
Readable before optimized.
________________________________________
Component Reuse
Avoid duplicated layouts.
________________________________________
Progressive Enhancement
New features extend existing pages rather than replacing them.
________________________________________
4.21 Chapter Summary
At the completion of this chapter, a future developer should understand:
•	The HTML philosophy of the project. 
•	The structure of every page. 
•	How sections are organized. 
•	The purpose of IDs and classes. 
•	Navigation conventions. 
•	Reusable components. 
•	Accessibility expectations. 
•	Standards for creating new pages. 
These standards ensure that all future HTML remains consistent with the existing codebase and preserves the maintainable, hand-crafted nature of the project.
________________________________________
End of Chapter 4
Next Chapter: Chapter 5 – CSS Design System & Styling Standards
This will likely become one of the largest chapters in the handbook. It will define the site's complete visual language, including:
•	Color palette and branding 
•	Typography 
•	Spacing system 
•	Section layouts 
•	Button design 
•	Cards 
•	Shadows 
•	Border radius 
•	Animations 
•	Hover effects 
•	Responsive breakpoints 
•	Layering and overlays 
•	Reusable utility patterns 
It will serve as the definitive style guide for maintaining a consistent look and feel across the entire MacRae's website.
MacRae's of Homosassa Website Developer Handbook
Version 1.0
Chapter 5 — CSS Design System & Styling Standards
________________________________________
5.1 Purpose
This chapter defines the complete visual design language of the MacRae's of Homosassa website.
Unlike many websites that evolve without direction, this project follows a deliberate design system intended to preserve visual consistency as new pages and features are added.
This chapter establishes standards for:
•	Color usage 
•	Typography 
•	Layout 
•	Spacing 
•	Cards 
•	Buttons 
•	Shadows 
•	Border radius 
•	Responsive behavior 
•	Animations 
•	Backgrounds 
•	Future styling 
Every new section should follow these standards unless there is a compelling reason not to.
________________________________________
5.2 Design Philosophy
The website should immediately communicate the atmosphere of MacRae's before a visitor reads a single word.
The design should feel:
•	Old Florida 
•	Waterfront 
•	Relaxed 
•	Professional 
•	Welcoming 
•	Modern 
•	Clean 
•	Informative 
The website should never feel:
•	Corporate 
•	Sterile 
•	Over-designed 
•	Cartoonish 
•	Busy 
The visual identity should reinforce the physical experience of visiting MacRae's.
________________________________________
5.3 Overall Design Language
The website follows several consistent visual principles.
Large photography
↓
Dark overlays
↓
Bright call-to-action buttons
↓
Rounded cards
↓
Soft shadows
↓
Large typography
↓
Generous spacing
↓
Readable layouts
The emphasis is on creating an immersive experience rather than simply displaying information.
________________________________________
5.4 Color Palette
The project intentionally uses a restrained color palette.
Primary Navy
#17324D
Purpose:
•	Headers 
•	Navigation 
•	Branding 
•	Theme color 
•	Professional identity 
________________________________________
Deep Ocean
#0B3D3F
Purpose:
•	Section headings 
•	Icons 
•	Interior cards 
•	Marine sections 
________________________________________
Accent Orange
#F4A261
Purpose:
•	Buttons 
•	Hover emphasis 
•	Call-to-action elements 
Orange is intentionally reserved for items that should attract attention.
________________________________________
White
#FFFFFF
Purpose:
•	Primary text on dark backgrounds 
•	Cards 
•	Clean separation 
________________________________________
Dark Background
Frequently used:
#17102F
Purpose:
Weather cards
Feature cards
Dark panels
Creates strong contrast against photographs.
________________________________________
Neutral Background
#F5F5F5
Purpose:
Light content sections.
Improves readability.
Separates major portions of the page.
________________________________________
5.5 Color Philosophy
Bright colors should be used sparingly.
Orange should primarily indicate:
•	Interaction 
•	Calls to action 
•	Important information 
The majority of the page should rely on:
•	Photography 
•	White 
•	Navy 
•	Dark teal 
This prevents visual fatigue.
________________________________________
5.6 Typography Philosophy
Typography should remain highly readable.
Preferred characteristics:
Large
Bold
Clean
Minimal decorative fonts
Simple hierarchy
Readability always takes priority over artistic styling.
________________________________________
5.7 Typography Hierarchy
Typical sizing:
Hero Heading

52–64px

↓

Section Heading

36–42px

↓

Card Heading

24–30px

↓

Body Text

18px

↓

Small Supporting Text

15–16px
This hierarchy should remain consistent throughout the website.
________________________________________
5.8 Section Layout
Most content sections follow the same structure.
Heading

↓

Supporting Text

↓

Content

↓

Buttons
This predictable flow helps users quickly locate information.
________________________________________
5.9 Spacing System
Generous whitespace is a defining characteristic of the website.
Typical section padding:
padding: 80px 8%;
Cards generally use:
padding: 35px;
Large spacing improves readability and contributes to the relaxed atmosphere.
________________________________________
5.10 Border Radius
Rounded corners are used consistently.
Typical values:
border-radius: 12px;
or
border-radius: 18px;
Avoid sharp corners unless there is a specific design reason.
________________________________________
5.11 Shadows
Cards use subtle shadows.
Example:
box-shadow:
0 8px 25px rgba(0,0,0,.25);
Shadows should provide depth without becoming visually distracting.
Heavy shadows are discouraged.
________________________________________
5.12 Cards
Cards are one of the primary design elements.
Current examples include:
•	Weather 
•	Contact 
•	Marine (planned) 
•	Future events 
•	Information panels 
Cards should always include:
Consistent padding
Rounded corners
Shadow
Readable typography
Clear hierarchy
________________________________________
5.13 Buttons
Buttons are intentionally bold.
Characteristics:
Orange background
Dark text
Rounded corners
Bold font
Smooth hover animation
Buttons should clearly communicate interactivity.
________________________________________
5.14 Hover Effects
Hover effects should be subtle.
Examples:
Opacity changes
Slight scaling
Soft glow
Shadow enhancement
Large animations should be avoided.
________________________________________
5.15 Animation Philosophy
Animations should improve usability.
Examples:
Smooth scrolling
Card highlighting
Hover transitions
Fade effects
Animations should never delay navigation or distract from content.
________________________________________
5.16 Background Images
Photography plays a major role in the visual identity.
Backgrounds typically use:
background:

linear-gradient(...),

url(...)
The dark overlay improves text readability while preserving the photograph.
________________________________________
5.17 Overlay Philosophy
Dark overlays should remain semi-transparent.
Typical values:
rgba(10,8,25,.65)
or
rgba(0,0,0,.45)
Avoid completely obscuring the photography.
________________________________________
5.18 Section Backgrounds
Sections alternate between:
Photography
↓
Light backgrounds
↓
Photography
↓
Dark cards
This creates visual rhythm throughout the page.
________________________________________
5.19 Weather Design
The weather section intentionally differs from generic widgets.
Goals:
Feel custom.
Reflect MacRae's branding.
Display river conditions.
Provide boating information.
Forecast the entire day rather than the current hour.
The weather system should feel like a marina report rather than a standard weather application.
________________________________________
5.20 Mobile Philosophy
Responsive design is a core requirement.
Desktop layouts should gracefully collapse into stacked mobile layouts.
Media queries generally occur near:
1000px

768px

600px
Content should never require horizontal scrolling.
________________________________________
5.21 Responsive Layout Principles
Desktop
Multi-column layouts
↓
Tablet
Reduced columns
↓
Mobile
Single-column layout
Future sections should follow this same progression.
________________________________________
5.22 Photography Philosophy
Photography should remain authentic.
Preferred subjects:
River
Marina
Sunsets
Pontoon boats
Restaurant
Guests enjoying the property
Avoid obvious stock photography whenever possible.
________________________________________
5.23 Visual Hierarchy
Each page should naturally guide the visitor.
Primary heading
↓
Supporting text
↓
Primary content
↓
Call-to-action
↓
Supporting information
Avoid competing focal points.
________________________________________
5.24 Accessibility Considerations
Maintain sufficient color contrast.
Avoid placing text directly on bright photographs.
Buttons should remain large enough for touch interaction.
Animations should not impair readability.
________________________________________
5.25 CSS Organization
The stylesheet follows a standardized format.
Each major section begins with:
/* =========================
SECTION NAME
========================= */
Example:
/* =========================
WEATHER SECTION
========================= */
This comment style is mandatory throughout the project.
________________________________________
5.26 CSS Philosophy
CSS should be:
Readable
Predictable
Modular
Commented
Avoid unnecessary specificity.
Avoid deeply nested selectors.
Reuse existing classes whenever practical.
________________________________________
5.27 Future CSS Growth
As the project expands, continue extending the existing stylesheet before introducing new styles.
When new components are created:
Follow existing spacing.
Follow existing shadows.
Follow existing colors.
Maintain visual consistency.
Future pages should appear as though they were built at the same time as the homepage.
________________________________________
5.28 Important Styling Decisions
Several visual decisions have already been made and should remain consistent.
These include:
Heavy use of photography.
Dark overlays.
Rounded cards.
Soft shadows.
Orange call-to-action buttons.
Large section spacing.
Simple animations.
Readable typography.
Consistent comment formatting.
These collectively define the MacRae's visual identity.
________________________________________
5.29 Chapter Summary
At the completion of this chapter, a future developer should understand:
•	The complete visual language of the website. 
•	How colors are used. 
•	Typography hierarchy. 
•	Layout philosophy. 
•	Button design. 
•	Card styling. 
•	Responsive behavior. 
•	Animation standards. 
•	Photography usage. 
•	CSS organization. 
•	Long-term styling goals. 
Maintaining these standards will ensure that every future page and feature feels like a natural extension of the existing website rather than an isolated addition.
________________________________________
End of Chapter 5
Next Chapter: Chapter 6 – JavaScript Architecture & Functional Documentation
This will be one of the most technically detailed chapters in the handbook. It will document every JavaScript function, the weather system architecture, mobile navigation, booking popup logic, desktop/mobile interaction differences, API integration, utility functions, coding patterns, and future JavaScript roadmap. It will become the definitive reference for the site's behavior and client-side functionality.
MacRae's of Homosassa Website Developer Handbook
Version 1.0
Chapter 6 — JavaScript Architecture & Functional Documentation
________________________________________
6.1 Purpose
This chapter documents the JavaScript architecture of the MacRae's of Homosassa website.
Unlike many websites that rely heavily on third-party plugins, nearly all interactive functionality on this website is custom-built using vanilla JavaScript.
The objectives of this chapter are to:
•	Document every JavaScript subsystem. 
•	Explain the purpose of each function. 
•	Define coding standards. 
•	Establish architectural conventions. 
•	Provide guidance for future feature development. 
Future JavaScript should follow these standards to preserve consistency and maintainability.
________________________________________
6.2 JavaScript Philosophy
The JavaScript codebase follows several guiding principles.
Lightweight
The website intentionally avoids JavaScript frameworks.
Current philosophy:
•	No React 
•	No Vue 
•	No Angular 
•	No jQuery 
Vanilla JavaScript provides:
•	Faster loading 
•	Simpler debugging 
•	Better maintainability 
•	Lower complexity 
________________________________________
Readability Over Cleverness
Future developers should immediately understand what a function does.
Preferred:
function getWindDirection(degrees) {

}
Avoid:
const gWD = d => ...
Explicit names are preferred over abbreviations.
________________________________________
Small Functions
Functions should generally perform one responsibility.
Good examples include:
•	showBookingMessage() 
•	hideBookingMessage() 
•	toggleMenu() 
•	getWindDirection() 
•	formatTime() 
•	getDailySummary() 
Large functions should be broken into smaller reusable helpers whenever practical.
________________________________________
Progressive Enhancement
The website must remain usable even if JavaScript fails.
Examples:
Navigation still functions.
Contact information remains visible.
Weather gracefully displays an error message if unavailable.
________________________________________
6.3 JavaScript Organization
JavaScript is grouped into logical sections using standardized comments.
Example:
/* =========================
WEBSITE FUNCTIONS
========================= */
Current organization generally follows:
Navigation

↓

Booking Popup

↓

Desktop Call Logic

↓

Weather

↓

Utilities
Future features should continue this structure.
________________________________________
6.4 Current JavaScript Systems
The website currently contains several major JavaScript systems.
Navigation
Responsibilities:
•	Mobile menu 
•	Desktop interaction 
•	Navigation behavior 
________________________________________
Booking Popup
Responsibilities:
Display booking information.
Open popup.
Close popup.
Desktop/mobile interaction.
________________________________________
Contact Logic
Desktop:
Scrolls to contact card.
Highlights contact information.
Mobile:
Launches telephone application.
This behavior intentionally differs between desktop and mobile.
________________________________________
Weather System
Largest JavaScript subsystem.
Provides:
Current temperature
Feels like temperature
Wind
Wind direction
UV index
Sunrise
Sunset
Boating outlook
7-day forecast
Daily summaries
River report
Future marine support
________________________________________
Utility Functions
Small reusable helper functions.
Examples:
formatTime()
formatHour()
getWindDirection()
These utilities reduce duplicated code.
________________________________________
6.5 Navigation System
Current navigation is intentionally simple.
Desktop:
Traditional navigation bar.
Mobile:
Slide-out menu.
Primary function:
toggleMenu()
Responsibilities:
Open menu.
Close menu.
Animate transitions.
Future navigation should continue using this system.
________________________________________
6.6 Booking Popup
Current functions:
showBookingMessage()

hideBookingMessage()
Purpose:
Display reservation information.
Close popup.
Prevent duplicated popup logic.
Popup behavior should remain isolated from other systems.
________________________________________
6.7 Desktop Call Logic
One of the project's custom UX improvements.
Behavior:
Mobile:
Immediately initiate telephone call.
Desktop:
Scroll smoothly to the Contact section.
Highlight the contact card.
Purpose:
Desktop users typically cannot place phone calls directly.
Instead of opening a failed "tel:" link, the website guides visitors toward the phone number.
This behavior should be preserved.
________________________________________
6.8 Contact Highlight
Desktop contact highlighting uses:
contact-highlight
Purpose:
Draw attention to the contact card after scrolling.
Animation is intentionally subtle.
Future highlights should reuse this animation rather than introducing new effects.
________________________________________
6.9 Weather System Overview
The weather system is the largest JavaScript feature currently implemented.
Unlike generic weather widgets, it is completely custom-built.
Current features include:
Current temperature.
Feels like.
Wind.
Wind direction.
UV index.
Sunrise.
Sunset.
Boating outlook.
Daily summaries.
7-day forecast.
River narrative.
Forecast timing.
________________________________________
6.10 Weather Data Source
Current provider:
Open-Meteo
Current forecast location:
Transitioning toward the mouth of the Homosassa River.
Reason:
Provides more useful information for:
Boaters.
Pontoon renters.
Anglers.
River visitors.
The forecast is intentionally marine-oriented.
________________________________________
6.11 Weather Philosophy
The weather section is designed differently from traditional weather applications.
It should answer:
"What kind of day will visitors experience?"
rather than
"What is the weather this minute?"
This distinction influenced the entire architecture.
________________________________________
6.12 Daily Summary System
One of the most important custom features.
Current function:
getDailySummary()
Purpose:
Analyze every forecast hour.
Count:
Clear
Cloudy
Rain
Storm
Fog
Determine the dominant weather.
Return:
Icon.
Label.
Timing notes.
This prevents misleading forecasts.
________________________________________
6.13 Forecast Timing
The weather system analyzes hourly forecasts.
Rather than displaying:
Thunderstorms
for a single storm hour,
it produces summaries such as:
Storms Possible
Morning into Afternoon
Scattered Throughout the Day
This significantly improves forecast accuracy for visitors.
________________________________________
6.14 River Narrative
Current implementation generates a custom narrative.
Examples:
Excellent boating conditions.
Afternoon storms.
Wind advisory.
Warm sunny weather.
The goal is to sound like a marina report rather than a generic weather application.
Future improvements should continue expanding this concept.
________________________________________
6.15 Weather Icons
Icons are intentionally simplified.
Examples:
☀️
🌤️
☁️
🌧️
⛈️
Icons are selected based on the summarized daily forecast rather than the current hour.
________________________________________
6.16 Utility Functions
Several helper functions are reused throughout the weather system.
Examples:
formatTime()
Converts sunrise/sunset.
________________________________________
formatHour()
Converts military time.
________________________________________
getWindDirection()
Converts degrees into:
N
NE
E
SE
S
SW
W
NW
These utilities should remain reusable.
________________________________________
6.17 Error Handling
Weather failures should degrade gracefully.
Current behavior:
Weather information is temporarily unavailable.
Future APIs should follow similar error handling.
Never leave blank sections.
________________________________________
6.18 API Philosophy
Current philosophy:
Custom integrations over embedded widgets.
Advantages:
Better branding.
Better styling.
Better responsiveness.
Future APIs should integrate directly into the existing UI whenever practical.
________________________________________
6.19 Future JavaScript Systems
Several major JavaScript features are planned.
These include:
Marine Forecast.
NOAA Tide API.
River camera.
Radar integration.
Fishing conditions.
Events calendar.
Reservation improvements.
History page animations.
These should follow the existing architectural style.
________________________________________
6.20 Function Naming Standards
Functions should begin with verbs.
Examples:
showBookingMessage()
toggleMenu()
formatTime()
getDailySummary()
loadWeather()
Avoid vague names such as:
run()

doThing()

function1()
Function names should clearly describe behavior.
________________________________________
6.21 Variable Naming
Variables should remain descriptive.
Preferred:
weatherCard

windDirection

boatingOutlook

currentTemperature
Avoid:
x

tmp

val

thing
Readability is prioritized.
________________________________________
6.22 Comment Standards
Every major JavaScript section begins with:
/* =========================
SECTION NAME
========================= */
Complex algorithms should include explanatory comments.
Comments should explain:
Why
rather than
What
The code itself should communicate what it does.
________________________________________
6.23 Future File Organization
Currently JavaScript is embedded.
Future organization may become:
js/

main.js

weather.js

marine.js

navigation.js

utilities.js
This transition should occur only if maintainability improves.
Premature separation is discouraged.
________________________________________
6.24 Performance Philosophy
JavaScript should remain lightweight.
Avoid:
Heavy animations.
Large dependencies.
Repeated API calls.
Unnecessary DOM updates.
Prefer:
Small functions.
Cached values.
Efficient DOM manipulation.
________________________________________
6.25 Testing Philosophy
Every JavaScript change should be tested on:
Desktop.
Tablet.
Mobile.
Test:
Navigation.
Popup.
Weather.
API responses.
Console errors.
Touch interactions.
Scroll behavior.
Deployment should not occur until these checks pass.
________________________________________
6.26 Long-Term Vision
The JavaScript architecture should gradually evolve into a modular system while preserving the simplicity of the current implementation.
Future developers should extend existing functionality rather than rewriting working systems.
Existing functions have been intentionally designed to be reusable and expandable.
________________________________________
6.27 Chapter Summary
At the completion of this chapter, a future developer should understand:
•	The philosophy behind the JavaScript architecture. 
•	Every major subsystem currently implemented. 
•	The purpose of each custom interaction. 
•	How the weather engine operates. 
•	Naming conventions. 
•	Comment standards. 
•	Error handling. 
•	Future expansion plans. 
•	Performance expectations. 
Maintaining these standards will ensure that future JavaScript remains lightweight, readable, and consistent with the rest of the MacRae's codebase.
________________________________________
End of Chapter 6
Next Chapter: Chapter 7 – Weather Engine Architecture & Marine Forecast System
Unlike Chapter 6, which documents the overall JavaScript architecture, Chapter 7 will dive deeply into the custom weather engine. It will explain the Open-Meteo integration, the forecast summarization algorithm, boating outlook logic, river narrative generation, timing analysis, API request structure, future NOAA integrations, and the planned evolution into a comprehensive MacRae's River Conditions platform. This will likely become the most technically detailed chapter in the handbook and serve as the definitive reference for one of the site's signature features.
MacRae's of Homosassa Website Developer Handbook
Version 1.0
Chapter 7 — River Conditions Engine & Marine Forecast System
________________________________________
7.1 Purpose
This chapter documents the complete architecture of the MacRae's River Conditions Engine.
Unlike traditional weather widgets, the River Conditions Engine is a custom-developed forecasting system designed specifically for visitors of the Homosassa River.
The goal is not simply to display weather.
Instead, the objective is to answer the question:
"What kind of day will visitors experience on the Homosassa River?"
This distinction influences every design decision made within the system.
The River Conditions Engine is expected to become one of the defining features of the MacRae's website.
________________________________________
7.2 Design Philosophy
Most websites embed a generic weather widget.
Examples include:
•	Weather.com 
•	AccuWeather 
•	WeatherWidget.io 
While functional, these widgets suffer from several disadvantages:
•	Generic appearance 
•	Limited customization 
•	Branding conflicts 
•	Poor integration 
•	Weather-centric instead of visitor-centric 
For these reasons, the project intentionally uses a fully custom solution built on top of public weather APIs.
This allows the weather experience to feel like an extension of the MacRae's brand rather than a third-party service.
________________________________________
7.3 Why It Is Called "River Conditions"
Visitors do not visit MacRae's simply to know the temperature.
They visit to determine:
•	Should we rent a pontoon today? 
•	Is it a good day to fish? 
•	Is boating comfortable? 
•	Will afternoon storms interrupt our plans? 
•	What are today's tides? 
•	Is the weather suitable for dining outdoors? 
The terminology River Conditions better reflects the visitor's intent than the generic term "Weather."
________________________________________
7.4 Current Data Provider
The current implementation retrieves forecast data from:
Open-Meteo Forecast API
Reasons for selection:
•	Free 
•	No API key required 
•	Fast response times 
•	Reliable uptime 
•	Excellent hourly forecast data 
•	Daily forecast support 
•	Marine-friendly variables 
•	Easy future expansion 
________________________________________
7.5 Forecast Location
The forecast currently targets the mouth of the Homosassa River, rather than the inland community of Homosassa.
This decision was made because the majority of visitors use the website for boating, fishing, marina activities, and waterfront recreation.
Marine conditions at the river mouth more accurately represent the environment experienced by guests using MacRae's facilities.
Future UI text should clearly communicate this by displaying a subtitle such as:
Forecast for the Mouth of the Homosassa River
This avoids ambiguity while reinforcing the marine focus of the feature.
________________________________________
7.6 System Architecture
The River Conditions Engine follows a layered architecture:
Open-Meteo API
        │
        ▼
JSON Forecast
        │
        ▼
Weather Processing
        │
        ├── Current Conditions
        ├── Daily Summary
        ├── Forecast Timing
        ├── River Narrative
        ├── Boating Outlook
        └── Forecast Cards
        │
        ▼
Custom HTML Interface
Each layer has a single responsibility.
This separation improves maintainability and simplifies future expansion.
________________________________________
7.7 API Request
The system requests:
Current Conditions
•	Temperature 
•	Apparent temperature 
•	Weather code 
•	Wind speed 
•	Wind direction 
Hourly Data
•	Weather code 
•	Rain probability 
•	UV Index 
Daily Data
•	High temperature 
•	Low temperature 
•	Rain probability 
•	Sunrise 
•	Sunset 
The API request intentionally retrieves both hourly and daily datasets because each serves a different purpose.
________________________________________
7.8 Why Hourly Data Matters
Many forecast systems simply display the daily weather code supplied by an API.
This project intentionally avoids that approach.
Reason:
A single thunderstorm occurring at 4:00 PM should not cause the entire day to be labeled:
Thunderstorms
Instead, the engine analyzes every forecast hour.
This produces a more representative description of the day.
________________________________________
7.9 Daily Summary Algorithm
The function getDailySummary() examines each hourly forecast and categorizes conditions into:
•	Clear 
•	Cloudy 
•	Fog 
•	Rain 
•	Thunderstorms 
Each category is counted independently.
The dominant pattern determines the day's overall summary.
This prevents misleading icons and descriptions.
________________________________________
7.10 Forecast Timing
When precipitation is detected, the engine analyzes the hours in which it occurs.
It generates human-readable summaries such as:
•	Mainly morning 
•	Mainly afternoon 
•	Mainly evening 
•	Morning into afternoon 
•	Afternoon into evening 
•	Possible throughout the day 
•	Scattered throughout the day 
This timing information is displayed beneath each forecast card.
It provides significantly more context than a simple rain icon.
________________________________________
7.11 Forecast Icons
Icons are not chosen directly from the API.
Instead, they are selected based on the summarized daily conditions.
Examples:
Icon	Meaning
☀️	Sunny
🌤️	Partly Cloudy
☁️	Mostly Cloudy
🌧️	Rain Likely
🌦️	Showers or Storms Possible
⛈️	Storms Likely
This prevents users from assuming severe weather when only a brief storm is forecast.
________________________________________
7.12 River Narrative
One of the project's unique features is the River Narrative.
Rather than presenting raw meteorological data, the engine generates a visitor-focused description.
Example outputs include:
•	Great conditions for enjoying the Homosassa River, pontoon rentals, and waterfront dining. 
•	Breezy conditions today. Boating can still be enjoyable, but expect a little chop on open water. 
•	Thunderstorms are possible this afternoon. Monitor conditions before heading onto the river. 
The narrative is intended to read like a marina report rather than a weather bulletin.
________________________________________
7.13 Boating Outlook
The Boating Outlook is a simplified assessment of boating conditions.
Current categories:
•	Good 
•	Fair 
•	Use Caution 
The evaluation considers:
•	Wind speed 
•	Rain probability 
The intent is to provide visitors with an easy-to-understand recommendation rather than requiring them to interpret raw weather values.
________________________________________
7.14 User Experience Principles
The River Conditions Engine follows several UX principles:
•	Prioritize clarity over technical detail. 
•	Translate meteorological data into visitor-friendly language. 
•	Avoid alarming users unnecessarily. 
•	Present forecasts in a concise, visually appealing format. 
•	Maintain consistency with the overall MacRae's branding. 
________________________________________
7.15 Planned Expansion
The current implementation is considered Phase 1.
Future phases include:
Phase 2
•	NOAA Tide Predictions 
•	High/Low tide tables 
•	Tide trend visualization 
Phase 3
•	Marine Forecast page (marine.html) 
•	Expanded wind information 
•	Wave conditions (if available) 
•	Water temperature 
•	Moon phase 
•	Fishing outlook 
Phase 4
•	NOAA Marine Advisories 
•	Live radar 
•	Live river camera integration 
•	Navigation chart links 
•	Historical weather trends 
The long-term vision is for the River Conditions Engine to become a comprehensive marine information center for visitors to the Homosassa River.
________________________________________
7.16 Coding Standards
Future additions to the River Conditions Engine should adhere to the following principles:
•	Keep processing logic separate from presentation. 
•	Use descriptive function names. 
•	Reuse utility functions where possible. 
•	Avoid duplicating weather-code mappings. 
•	Favor small, testable functions over large monolithic blocks. 
•	Continue using standardized section comments. 
________________________________________
7.17 Chapter Summary
The River Conditions Engine is one of the flagship systems within the MacRae's website. It transforms raw weather data into meaningful, visitor-focused guidance tailored to the Homosassa River experience.
Rather than functioning as a conventional weather widget, it serves as a branded decision-support tool for guests planning boating, dining, lodging, and recreational activities.
Its continued evolution—from current weather summaries to tides, radar, advisories, and marine data—is a core part of the website's long-term vision.
________________________________________
End of Chapter 7
Next Chapter: Chapter 8 – Search Engine Optimization (SEO), Metadata & Discoverability
This chapter will document every SEO improvement implemented throughout the project, including metadata standards, structured data (JSON-LD), Open Graph and Twitter Cards, Google Search Console configuration, sitemap and robots management, indexing strategy, favicon and logo usage, and the long-term roadmap for improving MacRae's visibility in search results. It will serve as the definitive guide for maintaining and expanding the site's discoverability while preserving technical SEO best practices.

MacRae's of Homosassa Website Developer Handbook
Version 1.0
Chapter 8 — Search Engine Optimization (SEO), Metadata & Discoverability
________________________________________
8.1 Purpose
This chapter documents the Search Engine Optimization (SEO) strategy used throughout the MacRae's of Homosassa website.
Unlike many small business websites where SEO is added as an afterthought, SEO is treated as a fundamental architectural component of this project.
Every page should be designed not only for visitors, but also for search engines.
The goals of this chapter are to:
•	Define SEO standards. 
•	Document current implementations. 
•	Explain previous decisions. 
•	Establish long-term discoverability goals. 
•	Prevent future regressions. 
________________________________________
8.2 SEO Philosophy
The guiding philosophy is simple:
Build a website that deserves to rank.
Rather than relying on keyword stuffing or shortcuts, the project emphasizes:
•	Accurate information 
•	Helpful content 
•	Structured data 
•	Fast performance 
•	Clean HTML 
•	Strong internal linking 
•	Consistent branding 
Search engines should view MacRae's as an authoritative source of information about the Homosassa River and the business itself.
________________________________________
8.3 Primary SEO Objectives
The website should rank for searches related to:
•	MacRae's of Homosassa 
•	Homosassa motel 
•	Waterfront motel Homosassa 
•	Homosassa pontoon rentals 
•	Homosassa restaurant 
•	Tiki bar Homosassa 
•	Homosassa marina 
•	Homosassa live music 
•	Homosassa river conditions 
•	Homosassa marine forecast 
•	Mouth of the Homosassa River 
Future pages should continue targeting relevant, specific search intent.
________________________________________
8.4 Metadata Standards
Every HTML page should contain unique metadata.
Minimum requirements:
<title>...</title>

<meta name="description" ...>

<meta name="viewport" ...>

<meta charset="UTF-8">

<link rel="icon"...>
Titles and descriptions should:
•	Be unique. 
•	Clearly describe the page. 
•	Include relevant keywords naturally. 
•	Avoid duplication. 
________________________________________
8.5 Page Titles
Titles should prioritize:
1.	Primary page topic. 
2.	Business name. 
Example pattern:
Marine Forecast | MacRae's of Homosassa
Avoid generic titles such as:
Home

Welcome

Untitled Page
________________________________________
8.6 Meta Descriptions
Descriptions should summarize the page in approximately 150–160 characters.
Good descriptions:
•	Explain the page. 
•	Encourage clicks. 
•	Mention MacRae's naturally. 
Avoid:
•	Keyword stuffing. 
•	Duplicate descriptions. 
•	Vague marketing language. 
________________________________________
8.7 Structured Data (JSON-LD)
The website uses structured data to help search engines understand the business.
Current implementation includes a LocalBusiness schema.
Information represented includes:
•	Business name 
•	Address 
•	Phone number 
•	Website 
•	Business category 
•	Geographic location 
•	Contact information 
Future schema may include:
•	Restaurant 
•	Hotel 
•	Marina 
•	Tourist Attraction 
•	Event 
•	FAQ 
•	Breadcrumb 
________________________________________
8.8 Open Graph Metadata
Open Graph metadata is implemented for improved sharing on platforms such as:
•	Facebook 
•	LinkedIn 
•	Messenger 
Each page should specify:
•	Title 
•	Description 
•	Preview image 
•	URL 
•	Site name 
This ensures shared links present a professional appearance.
________________________________________
8.9 Twitter Card Metadata
Twitter (X) metadata is implemented alongside Open Graph.
Future updates should keep both sets of metadata synchronized.
________________________________________
8.10 Google Search Console
The website has been registered with Google Search Console.
Purpose:
•	Monitor indexing. 
•	Identify crawl issues. 
•	Submit sitemaps. 
•	Track search performance. 
•	Inspect URLs. 
Future developers should continue using Search Console after major deployments.
________________________________________
8.11 Sitemap
A sitemap should accurately reflect all publicly accessible pages.
As new pages are created, they should be added promptly.
Examples:
•	marine.html 
•	menu.html 
•	livemusic.html 
•	future hotel page 
•	future history page 
Search Console should be notified after major sitemap changes.
________________________________________
8.12 robots.txt
A robots.txt file is used to guide search engine crawlers.
The file should:
•	Permit indexing of public content. 
•	Reference the sitemap. 
•	Avoid unintentionally blocking important pages. 
Future changes should be reviewed carefully before deployment.
________________________________________
8.13 Favicon & Brand Icon
A favicon has been implemented.
Long-term goal:
Provide Google with a clean, recognizable brand icon that appears in search results and browser tabs.
The preferred format is a simple, high-contrast logo that remains legible at very small sizes.
________________________________________
8.14 Google Search Results
As the new website replaces the legacy site, outdated search snippets and links may continue to appear temporarily.
Known examples previously included:
•	Incorrect pet policy 
•	Nighttime pontoon rentals 
•	Legacy URLs returning 404 errors 
These are expected to diminish as Google re-crawls the site.
The preferred approach is:
•	Correct the source content. 
•	Maintain valid redirects where appropriate. 
•	Request re-indexing through Search Console. 
Avoid attempting to manipulate search results directly.
________________________________________
8.15 Legacy Website Cleanup
The previous website contained obsolete pages and inaccurate information.
Actions taken include:
•	Replacing outdated content. 
•	Correcting business information. 
•	Removing unsupported offerings. 
•	Allowing obsolete URLs to return proper 404 responses where appropriate. 
Search Console can be used to request removal or re-indexing of outdated URLs.
________________________________________
8.16 Internal Linking Strategy
Internal links help both users and search engines.
Current strategy:
•	Homepage links to major sections. 
•	Standalone pages provide a return path to the homepage. 
•	Navigation remains consistent across pages. 
Future pages should link naturally to related content.
Avoid creating isolated pages with no internal references.
________________________________________
8.17 Content Quality
The website emphasizes original, useful content.
Every page should answer real visitor questions.
Examples:
•	Can I rent a pontoon? 
•	What are today's river conditions? 
•	Is there live music this weekend? 
•	Where is MacRae's located? 
Content should be written for people first, search engines second.
________________________________________
8.18 Performance & SEO
Performance contributes directly to search visibility.
Current philosophy:
•	Lightweight HTML. 
•	Single CSS file. 
•	Minimal JavaScript dependencies. 
•	Optimized images. 
•	No unnecessary frameworks. 
Future optimizations should continue improving load times without sacrificing maintainability.
________________________________________
8.19 Accessibility & SEO
Accessibility improvements also benefit SEO.
Current standards include:
•	Semantic HTML. 
•	Logical heading hierarchy. 
•	Descriptive link text. 
•	Mobile responsiveness. 
Future improvements should include:
•	Descriptive alt attributes for all meaningful images. 
•	Improved keyboard navigation where applicable. 
•	Continued attention to color contrast. 
________________________________________
8.20 Local SEO Strategy
MacRae's serves a specific geographic area.
Future content should naturally reinforce local relevance by referencing:
•	Homosassa River 
•	Homosassa Springs 
•	Citrus County 
•	Nature Coast 
•	Gulf of Mexico 
•	Local boating and fishing activities 
This should occur organically within useful content rather than through repetitive keyword usage.
________________________________________
8.21 Long-Term SEO Vision
The long-term goal is for the website to become the definitive online resource for visitors planning a trip to the Homosassa River.
Future content may include:
•	Marine forecasts 
•	Tide predictions 
•	Fishing information 
•	Scalloping guides 
•	Local attractions 
•	Event calendars 
•	River safety tips 
•	Seasonal boating information 
These additions will increase both visitor value and topical authority.
________________________________________
8.22 SEO Maintenance Checklist
After major updates:
•	Verify page titles. 
•	Review meta descriptions. 
•	Confirm structured data validity. 
•	Test Open Graph previews. 
•	Check internal links. 
•	Inspect pages in Google Search Console. 
•	Submit updated sitemap if necessary. 
•	Monitor indexing status. 
SEO maintenance should be part of the deployment process, not a separate activity.
________________________________________
8.23 Chapter Summary
The MacRae's website treats SEO as an integral part of its architecture rather than a marketing add-on. Every page is designed to communicate clearly with both visitors and search engines through clean HTML, structured metadata, semantic content, and strong technical foundations.
The long-term objective is not simply to rank for business-related keywords, but to establish the website as the most trusted online resource for information about MacRae's and the Homosassa River.
________________________________________
End of Chapter 8
Next Chapter: Chapter 9 – User Experience (UX), Interaction Design & Responsive Behavior
This chapter will document every interactive behavior on the website, including desktop and mobile navigation, button interactions, smooth scrolling, booking popups, contact highlighting, responsive layouts, animation philosophy, and the reasoning behind each user experience decision. It will serve as the definitive guide for preserving the site's intuitive, welcoming, and consistent interaction model across all devices.
MacRae's of Homosassa Website Developer Handbook
Version 1.0
Chapter 9 — User Experience (UX), Interaction Design & Responsive Behavior
________________________________________
9.1 Purpose
This chapter documents the user experience (UX) philosophy and interaction standards of the MacRae's of Homosassa website.
While previous chapters focused on architecture and implementation, this chapter explains how the website should feel to visitors.
Every interaction should be:
•	Simple 
•	Predictable 
•	Fast 
•	Helpful 
•	Intentional 
Future development should preserve these principles.
________________________________________
9.2 UX Philosophy
The guiding philosophy of the website is:
Every interaction should make visiting MacRae's easier.
The website exists to help visitors answer questions quickly and confidently.
It should never require users to "figure out" how something works.
If an interaction needs explanation, it should probably be simplified.
________________________________________
9.3 Design for Real Visitors
The website is designed for people who are actively planning a visit, including:
•	Vacationers 
•	Boaters 
•	Fishermen 
•	Families 
•	Restaurant guests 
•	Hotel guests 
•	Local residents 
Many users will already be traveling when they visit the website.
Because of this:
•	Navigation must be obvious. 
•	Important information must be easy to locate. 
•	Mobile usability is critical. 
________________________________________
9.4 Progressive Disclosure
Information is presented in layers.
Visitors first see:
•	Business identity 
•	Primary services 
•	Calls to action 
Additional details are revealed as users continue scrolling or navigate to dedicated pages.
This prevents the homepage from becoming overwhelming.
________________________________________
9.5 Navigation Philosophy
Navigation should remain flat and predictable.
Current destinations include:
•	Rooms 
•	Pontoon Rentals 
•	Marine Forecast 
•	Tiki Bar 
•	Live Music 
•	Contact 
Future additions should not introduce unnecessary complexity such as:
•	Multi-level dropdowns 
•	Hidden menus 
•	Deep navigation trees 
The user should never need more than one click to reach a major destination.
________________________________________
9.6 Desktop vs Mobile Behavior
The website intentionally adapts behavior based on the user's device.
This is a conscious design decision.
Example:
Mobile
Selecting Call Now immediately opens the phone dialer.
Reason:
Most mobile visitors expect to place a call directly.
________________________________________
Desktop
Selecting Call Now smoothly scrolls to the Contact section and highlights the contact card.
Reason:
Desktop users often cannot place phone calls directly.
Showing the phone number is more useful than attempting to launch a tel: link.
This behavior improves usability without surprising the visitor.
________________________________________
9.7 Smooth Scrolling
Smooth scrolling is used throughout the website.
Purpose:
•	Maintain context. 
•	Help users understand where they have navigated. 
•	Create a polished experience. 
Scrolling should feel natural and never excessively slow.
________________________________________
9.8 Highlighting Important Information
The website occasionally highlights important content after navigation.
Current example:
The Contact card briefly animates after desktop users select Call Now.
Purpose:
Provide visual confirmation that the requested information has been reached.
Animations should always communicate something meaningful.
________________________________________
9.9 Booking Workflow
Reservation buttons currently display a booking popup before directing visitors to contact information.
This allows the business to communicate reservation details consistently.
Future enhancements may include:
•	Online reservation integration. 
•	Availability calendars. 
•	Reservation forms. 
The current popup system should remain lightweight and easy to maintain.
________________________________________
9.10 Weather Experience
The weather system is treated as a visitor planning tool rather than a meteorological dashboard.
Design principles include:
•	Summarize the day rather than the current hour. 
•	Use visitor-friendly language. 
•	Focus on boating and outdoor activities. 
•	Avoid unnecessary technical terminology. 
The weather experience should reinforce confidence in planning a visit.
________________________________________
9.11 Information Hierarchy
Every page follows the same visual hierarchy:
1.	Headline 
2.	Supporting description 
3.	Primary content 
4.	Call to action 
5.	Supporting information 
Visitors should never wonder where to look next.
________________________________________
9.12 Calls to Action (CTAs)
Primary actions include:
•	Book a Room 
•	Reserve a Pontoon 
•	View the Menu 
•	Call Now 
•	Get Directions 
•	Return to Main Website 
CTA buttons should:
•	Stand out visually. 
•	Use consistent styling. 
•	Clearly describe the action. 
Avoid vague labels such as "Click Here."
________________________________________
9.13 Error Handling
Errors should never leave visitors confused.
Examples:
Weather API failure:
"Weather information is temporarily unavailable."
Rather than exposing technical errors or blank sections.
Future features should follow the same principle.
________________________________________
9.14 Mobile Responsiveness
The website is designed using a responsive-first mindset.
Layouts should adapt gracefully across:
•	Desktop 
•	Laptop 
•	Tablet 
•	Mobile 
Typical progression:
Desktop:
Multiple columns.
↓
Tablet:
Reduced columns.
↓
Mobile:
Single column.
Horizontal scrolling should never be required.
________________________________________
9.15 Performance as UX
Performance is part of the user experience.
Pages should:
•	Load quickly. 
•	Respond immediately. 
•	Avoid unnecessary animations. 
•	Minimize blocking resources. 
Every feature should justify its performance cost.
________________________________________
9.16 Consistency
Consistency is one of the project's highest priorities.
Visitors should recognize recurring patterns such as:
•	Buttons 
•	Cards 
•	Headings 
•	Navigation 
•	Weather panels 
•	Contact information 
New features should extend these patterns rather than invent new ones.
________________________________________
9.17 Accessibility Considerations
Accessibility is viewed as an extension of good UX.
Current principles include:
•	Clear typography. 
•	High contrast. 
•	Logical heading hierarchy. 
•	Touch-friendly controls. 
•	Descriptive navigation labels. 
Future improvements should continue enhancing accessibility without changing the overall design language.
________________________________________
9.18 Visual Feedback
Whenever possible, user actions should produce immediate visual feedback.
Examples:
•	Button hover states. 
•	Contact card highlight. 
•	Menu open/close animations. 
•	Smooth scrolling. 
Feedback reassures visitors that their action has been recognized.
________________________________________
9.19 Expansion Philosophy
As new features are added, they should enhance—not clutter—the experience.
Large, specialized tools should generally receive their own pages.
Examples:
•	Marine Forecast 
•	Fishing Information 
•	Events 
•	History 
The homepage should remain focused and approachable.
________________________________________
9.20 Known UX Decisions
The following decisions have been intentionally made and should not be changed without careful consideration:
•	Desktop "Call Now" scrolls to the Contact section instead of launching a telephone link. 
•	Mobile "Call Now" launches the phone dialer. 
•	Weather summaries represent the entire day, not the current hour. 
•	Marine information is separated onto its own dedicated page. 
•	Navigation remains flat and simple. 
•	Large photography is used to establish atmosphere. 
•	Heavy framework dependencies are avoided to preserve speed. 
These choices collectively define the website's interaction model.
________________________________________
9.21 Future UX Opportunities
Planned enhancements include:
•	Marine Forecast dashboard. 
•	NOAA tide visualizations. 
•	Live radar. 
•	Fishing conditions. 
•	Reservation improvements. 
•	Interactive event calendar. 
•	Enhanced accessibility testing. 
•	Search functionality (if justified by site growth). 
Each addition should continue supporting the project's emphasis on clarity and ease of use.
________________________________________
9.22 UX Success Criteria
The website succeeds when visitors can quickly accomplish their goals without confusion.
Indicators of success include:
•	Visitors can locate important information immediately. 
•	Mobile users can contact the business with minimal effort. 
•	Navigation feels intuitive. 
•	Weather information supports trip planning. 
•	Calls to action are obvious but not intrusive. 
•	The website feels polished without becoming overly animated. 
________________________________________
9.23 Chapter Summary
The MacRae's website is designed around the real-world needs of visitors rather than abstract design trends. Every interaction—from navigation and booking to weather summaries and contact behavior—has been intentionally crafted to reduce friction, communicate clearly, and encourage confidence.
Future development should continue prioritizing usability over novelty. New features should feel like natural extensions of the existing experience, maintaining the website's consistent, welcoming, and visitor-focused character.
________________________________________
End of Chapter 9
Next Chapter: Chapter 10 – Reusable Components & UI Library
This chapter will serve as the project's component catalog. It will document every reusable element—buttons, cards, overlays, section headers, navigation bars, popups, weather panels, contact cards, background treatments, animations, and future marine components. Rather than treating pages as isolated code, it will define a consistent UI library so future development reuses proven components instead of recreating them. This will help keep the site's appearance cohesive as it grows into a larger, multi-page website.

MacRae's of Homosassa Website Developer Handbook
Version 1.0
Chapter 10 — Reusable Components & UI Library
________________________________________
10.1 Purpose
This chapter documents every reusable interface component used throughout the MacRae's of Homosassa website.
Rather than viewing the website as a collection of independent pages, this project treats the UI as a collection of reusable building blocks.
Every future page should be assembled from these components whenever possible.
The objectives of this chapter are to:
•	Reduce duplicated code. 
•	Maintain visual consistency. 
•	Improve long-term maintainability. 
•	Establish a recognizable design language. 
________________________________________
10.2 Component Philosophy
The website follows a component-based design philosophy without relying on a JavaScript framework.
Components should be:
•	Reusable 
•	Predictable 
•	Consistent 
•	Easy to extend 
•	Easy to maintain 
Whenever a new feature resembles an existing one, the existing component should be extended instead of creating a new design.
________________________________________
10.3 Primary Components
The current UI library consists of the following primary components.
Navigation

↓

Hero Banner

↓

Section Headers

↓

Content Cards

↓

Buttons

↓

Booking Popup

↓

Weather Cards

↓

Forecast Cards

↓

Contact Card

↓

Map Container

↓

Background Sections

↓

Animations
These components form the foundation of every page.
________________________________________
10.4 Navigation Component
Purpose:
Provide consistent navigation across every page.
Characteristics:
•	Desktop navigation bar. 
•	Mobile slide-out menu. 
•	Shared styling. 
•	Shared spacing. 
•	Consistent hover effects. 
Future pages should reuse the existing navigation rather than creating unique menus.
________________________________________
10.5 Hero Component
The Hero is the visual introduction to a page.
Characteristics:
•	Large background image. 
•	Dark overlay. 
•	Large heading. 
•	Supporting paragraph. 
•	Primary call-to-action. 
Not every page requires a Hero.
However, every major landing page should begin with a visually strong introduction.
Examples:
Homepage
Marine Forecast
Future Hotel page
Future History page
________________________________________
10.6 Section Header Component
Every major section begins with:
Large heading
↓
Optional supporting description
↓
Content
Example:
Marine Forecast

Current marine conditions for the
mouth of the Homosassa River.
Spacing and typography should remain consistent throughout the website.
________________________________________
10.7 Content Cards
Cards are one of the website's defining UI elements.
Current card types include:
•	Contact Card 
•	Weather Card 
•	Forecast Card 
•	Marine Card (planned) 
Common characteristics:
•	Rounded corners. 
•	Soft shadow. 
•	Comfortable padding. 
•	Consistent typography. 
•	Clear information hierarchy. 
Cards should remain visually related regardless of their purpose.
________________________________________
10.8 Buttons
Buttons communicate primary actions.
Current examples include:
•	Book Reservations 
•	Call Now 
•	Get Directions 
•	Return to Main Website 
•	View Menu 
All buttons should share:
•	Orange accent color. 
•	Rounded corners. 
•	Hover transition. 
•	Bold typography. 
Future button styles should extend this component rather than introducing unrelated designs.
________________________________________
10.9 Booking Popup
The booking popup is a reusable modal component.
Purpose:
Provide reservation information before directing users to contact details.
Characteristics:
•	Dark overlay. 
•	Centered content. 
•	Close button. 
•	Responsive layout. 
Future modal dialogs should reuse this architecture.
________________________________________
10.10 Contact Card
The Contact Card serves as the primary business contact component.
Current content includes:
•	Address 
•	Phone number 
•	Contact button 
Desktop users are guided here after selecting Call Now.
The Contact Card should remain the central location for business contact information.
________________________________________
10.11 Weather Card
The Weather Card is one of the website's flagship components.
Current sections include:
Current Conditions
River Narrative
River Details
7-Day Forecast
The Weather Card intentionally blends weather information with boating guidance rather than functioning as a traditional forecast widget.
________________________________________
10.12 Forecast Cards
Seven forecast cards are generated dynamically.
Each contains:
•	Day of week 
•	Weather icon 
•	Forecast summary 
•	Timing note 
•	High temperature 
•	Low temperature 
•	Rain probability 
These cards represent summarized daily conditions rather than hourly forecasts.
Future marine forecast cards should maintain this layout.
________________________________________
10.13 Map Component
The Google Map is treated as a standalone reusable component.
Features include:
•	Embedded map 
•	Responsive sizing 
•	Rounded corners 
•	Soft shadow 
•	Directions button 
Future embedded maps should reuse these visual treatments.
________________________________________
10.14 Background Sections
Background imagery is used to separate major portions of the site.
Characteristics:
•	Full-width photography. 
•	Dark gradient overlay. 
•	Fixed attachment where appropriate. 
•	High contrast text. 
This treatment reinforces the Old Florida atmosphere.
________________________________________
10.15 Animation Components
Animations are intentionally subtle.
Current animations include:
•	Smooth scrolling. 
•	Button hover. 
•	Contact card highlight. 
•	Popup transitions. 
•	Mobile menu. 
Animations should communicate interaction rather than decorate the interface.
________________________________________
10.16 Responsive Components
Every reusable component should gracefully adapt across devices.
Typical progression:
Desktop
↓
Tablet
↓
Mobile
Layouts should collapse naturally without requiring separate mobile designs.
________________________________________
10.17 Marine Components (Planned)
The Marine Forecast page will introduce several new reusable components.
Examples:
Marine Summary Card
NOAA Tide Card
Radar Panel
Wind Information Card
Fishing Conditions Card
Water Temperature Card
These should follow the existing card system.
________________________________________
10.18 Component Naming
Components should be named according to purpose rather than appearance.
Preferred:
.contact-card

.weather-card

.forecast-grid

.marine-card
Avoid:
.blue-box

.big-panel

.card2
Purpose-driven names improve readability and future maintenance.
________________________________________
10.19 Component Reuse
Whenever possible:
Reuse existing HTML.
Reuse existing CSS.
Reuse existing JavaScript.
Avoid duplicating styles.
If a new component is approximately 80% similar to an existing one, extend the existing component instead of creating a new implementation.
________________________________________
10.20 Component Evolution
Components are expected to evolve.
For example:
The Weather Card has grown from displaying:
•	Current temperature 
into a complete River Conditions dashboard.
Future enhancements should build upon existing components rather than replacing them.
________________________________________
10.21 Visual Consistency
Every component should feel like it belongs to the same website.
Consistency should exist in:
•	Spacing 
•	Colors 
•	Shadows 
•	Radius 
•	Typography 
•	Animations 
•	Layout 
Visitors should never feel they have navigated to a different design system.
________________________________________
10.22 Accessibility
Reusable components should support accessibility by default.
Examples:
•	Keyboard-focusable buttons. 
•	Descriptive labels. 
•	Sufficient color contrast. 
•	Responsive layouts. 
•	Clear typography. 
Accessibility improvements should be incorporated into the shared components whenever possible.
________________________________________
10.23 Future UI Library
As the website expands, this chapter will become the project's official UI library.
Future components may include:
•	Event Cards 
•	Fishing Report Cards 
•	Room Detail Cards 
•	Gallery Cards 
•	FAQ Accordions 
•	Reservation Forms 
•	Timeline Components 
•	Testimonial Cards 
•	Image Carousels 
Each new component should be documented here before widespread use.
________________________________________
10.24 Component Development Workflow
When introducing a new UI element:
1.	Determine whether an existing component can be reused. 
2.	Extend the existing component if practical. 
3.	Create a new component only when necessary. 
4.	Document the new component in this handbook. 
5.	Reuse the component consistently across the site. 
This process ensures the design system remains cohesive.
________________________________________
10.25 Chapter Summary
The MacRae's website is built from a growing collection of reusable interface components rather than isolated page designs.
This component-based approach promotes consistency, simplifies maintenance, and allows future pages to be developed more quickly while preserving the website's established visual identity.
As the project evolves, this chapter will become the definitive catalog of the site's design system and reusable UI elements.
________________________________________
End of Chapter 10
Next Chapter: Chapter 11 – Git Workflow, Deployment Strategy & Development Practices
This chapter will document the complete development workflow, including Git conventions, branching strategy, commit message standards, deployment through GitHub, testing procedures before release, rollback considerations, and recommended development practices. It will serve as the operational guide for safely evolving the MacRae's website while maintaining a stable production site.

MacRae's of Homosassa Website Engineering & Development Handbook
Version 1.0
Chapter 11 — Git Workflow, Deployment Strategy & Development Practices
________________________________________
11.1 Purpose
This chapter documents the complete development workflow used throughout the MacRae's of Homosassa website project.
Unlike many projects where deployment is an afterthought, this website follows a structured development process designed to:
•	Maintain a stable production website. 
•	Encourage small, well-tested changes. 
•	Simplify troubleshooting. 
•	Preserve a clear development history. 
•	Allow future developers to safely extend the project. 
Every developer working on this project should understand and follow the workflow described in this chapter.
________________________________________
11.2 Development Philosophy
The project follows one primary rule:
Never break a working website.
New features should be added gradually through a series of small, verifiable improvements.
Large rewrites are discouraged unless absolutely necessary.
Future development should emphasize:
•	Stability 
•	Incremental improvements 
•	Testing 
•	Documentation 
•	Maintainability 
________________________________________
11.3 Current Development Environment
Current tools include:
Visual Studio Code
↓
Git
↓
GitHub Repository
↓
Production Website
Development occurs locally before being deployed to production.
No edits should be made directly to the live website.
________________________________________
11.4 Repository Structure
The project is hosted using GitHub.
Current deployment strategy:
Local Development

↓

Git Repository

↓

GitHub

↓

main Branch

↓

Production Website
At present, the production website is deployed directly from the main branch.
This means every push to main has the potential to affect the live website.
________________________________________
11.5 Branching Strategy
The current workflow primarily uses:
main
As the project grows, a lightweight branching strategy is recommended.
Suggested future workflow:
main
│
├── feature/weather
├── feature/marine-page
├── feature/history-page
├── feature/seo
└── bugfix/navigation
Branch names should clearly describe their purpose.
________________________________________
11.6 Development Workflow
Every feature should follow the same lifecycle.
Plan

↓

Develop

↓

Test

↓

Commit

↓

Push

↓

Verify Production

↓

Update Handbook
Skipping steps increases the likelihood of introducing regressions.
________________________________________
11.7 Planning Before Coding
Before writing code:
•	Identify the objective. 
•	Determine affected files. 
•	Consider reusable components. 
•	Evaluate impact on mobile layouts. 
•	Consider SEO implications. 
•	Identify testing requirements. 
A few minutes of planning often prevents hours of debugging.
________________________________________
11.8 Development Practices
Development should occur in small, focused sessions.
Examples:
✔ Improve weather summaries.
✔ Update contact section.
✔ Add Marine Forecast page.
Avoid combining unrelated work into a single commit.
Example to avoid:
•	Weather changes 
•	SEO updates 
•	Navigation redesign 
•	CSS cleanup 
all in one commit.
________________________________________
11.9 Git Workflow
Typical workflow:
Stage changes:
git add .
Create a commit:
git commit -m "Improve weather summaries"
Push to GitHub:
git push origin main
This workflow should remain consistent throughout the project.
________________________________________
11.10 Pulling Latest Changes
Before beginning work on another computer:
git pull origin main
This ensures the local repository matches production.
Developers should avoid working from outdated copies.
________________________________________
11.11 Commit Philosophy
Commits represent logical milestones.
Every commit should answer:
What changed?
Good examples:
Add marine forecast navigation

Improve weather summaries

Update SEO metadata

Fix contact animation

Implement boating outlook
Avoid:
Stuff

Changes

Update

Fixed things

More work
Future developers should understand project history simply by reading commit messages.
________________________________________
11.12 Commit Size
Smaller commits are preferred.
Ideal commit:
One feature.
One improvement.
One bug fix.
Large commits make debugging and rollback significantly more difficult.
________________________________________
11.13 Testing Before Commit
Before committing:
Desktop:
•	Navigation 
•	Buttons 
•	Weather 
•	Layout 
•	Images 
•	Console 
Mobile:
•	Navigation 
•	Touch interactions 
•	Contact behavior 
•	Weather responsiveness 
•	Scrolling 
Every feature should be manually verified.
________________________________________
11.14 Browser Testing
Minimum browsers:
•	Chrome 
•	Microsoft Edge 
•	Safari 
•	Firefox 
Primary development currently occurs using Chrome.
________________________________________
11.15 Console Testing
Before deployment:
Open Developer Tools.
Confirm:
No JavaScript errors

No missing assets

No failed API calls

No missing images
Warnings should be investigated whenever practical.
________________________________________
11.16 Deployment Checklist
Before pushing to production:
✓ Navigation works.
✓ Mobile menu works.
✓ Weather loads.
✓ Images load.
✓ Links work.
✓ Buttons function.
✓ Page layout correct.
✓ No console errors.
✓ Responsive layout verified.
✓ SEO metadata still present.
________________________________________
11.17 Production Verification
After deployment:
Visit the live website.
Verify:
Homepage.
Weather.
Menu.
Live Music.
Marine page (when complete).
Google Maps.
Contact section.
Desktop.
Mobile.
Never assume deployment succeeded.
Always verify.
________________________________________
11.18 Rollback Philosophy
If a deployment introduces significant issues:
Do not continue adding fixes on top of a broken deployment.
Instead:
Identify the faulty commit.
Correct the issue.
Deploy a clean fix.
The priority is restoring a stable user experience.
________________________________________
11.19 Documentation Workflow
Every significant feature should be documented.
Current process:
Code updated.
↓
Website tested.
↓
Commit created.
↓
Handbook updated.
Keeping documentation synchronized with the codebase prevents knowledge loss.
________________________________________
11.20 CSS Cleanup Philosophy
As development progresses:
Avoid allowing unused styles to accumulate.
When appropriate:
•	Remove obsolete CSS. 
•	Consolidate duplicate rules. 
•	Improve organization. 
However:
Avoid unnecessary refactoring that risks introducing regressions.
________________________________________
11.21 JavaScript Cleanup
Future JavaScript improvements should include:
Removing duplicate logic.
Extracting reusable helpers.
Improving comments.
Maintaining descriptive function names.
Optimization should never reduce readability.
________________________________________
11.22 Branch Merge Guidelines (Future)
When feature branches are introduced:
Before merging:
•	Test feature independently. 
•	Resolve conflicts. 
•	Verify mobile. 
•	Verify desktop. 
•	Update documentation. 
Only then merge into main.
________________________________________
11.23 Feature Completion Definition
A feature is not considered complete until:
•	Code functions correctly. 
•	Mobile tested. 
•	Desktop tested. 
•	CSS cleaned. 
•	Comments updated. 
•	Handbook updated. 
•	Successfully deployed. 
Coding alone does not constitute completion.
________________________________________
11.24 Long-Term Maintenance
As the website grows:
Continue:
Small commits.
Frequent testing.
Documentation.
Code organization.
Avoid:
Massive rewrites.
Large untested merges.
Framework migrations without compelling justification.
________________________________________
11.25 Development Mindset
Every new feature should ask:
Does this improve the visitor's experience?
Does this improve maintainability?
Does this match the design system?
Does this preserve existing behavior?
If the answer is "no," reconsider the implementation.
________________________________________
11.26 Current Git Practices
The current project follows these habits:
•	Development occurs locally. 
•	Production updates originate from GitHub. 
•	Git is used for every meaningful change. 
•	Commits are created frequently. 
•	Production is verified after deployment. 
•	Features are built incrementally. 
•	Large changes are avoided. 
These practices have contributed to a stable development process and should continue.
________________________________________
11.27 Future Improvements
As the project matures, consider introducing:
•	A dedicated develop branch. 
•	Protected main branch. 
•	Pull requests for major features. 
•	Automated deployment checks. 
•	Image optimization during build. 
•	CSS/JavaScript linting. 
•	Automated accessibility audits. 
These enhancements should be adopted only when they provide clear value relative to the project's complexity.
________________________________________
11.28 Chapter Summary
The Git workflow for the MacRae's website is intentionally simple, emphasizing small, well-tested changes that flow from local development to GitHub and finally to the live website. Stability is prioritized over speed, and documentation is considered part of every feature rather than an optional task.
Following these practices ensures that the project remains maintainable, recoverable, and approachable for future developers while minimizing the risk of disrupting the production site.
________________________________________
End of Chapter 11
Next Chapter: Chapter 12 – Coding Standards & Project Conventions
This chapter will define the coding conventions used across the entire project, including HTML formatting, CSS organization, JavaScript style, naming conventions, comment formatting, indentation, file naming, and documentation standards. It will serve as the style guide that keeps every future contribution visually and structurally consistent with the existing codebase.
MacRae's of Homosassa Website Engineering & Development Handbook
Version 1.0
Chapter 12 — Coding Standards & Project Conventions
________________________________________
12.1 Purpose
This chapter defines the coding standards used throughout the MacRae's of Homosassa website.
The purpose of these standards is not to enforce unnecessary rules, but to ensure that every future change feels like it was written by the same developer.
Consistency improves:
•	Readability 
•	Maintainability 
•	Debugging 
•	Collaboration 
•	Long-term scalability 
Future contributors should follow these conventions whenever modifying the codebase.
________________________________________
12.2 General Philosophy
The website follows one simple principle:
Code is written for people first, computers second.
Modern browsers can interpret poorly organized code.
Future developers cannot.
Every decision should favor:
•	Readability 
•	Simplicity 
•	Consistency 
•	Documentation 
Over cleverness or unnecessary optimization.
________________________________________
12.3 The Three Pillars
Every piece of code should satisfy three requirements.
Readable
A new developer should understand the code without extensive explanation.
________________________________________
Predictable
Similar problems should be solved in similar ways.
Avoid multiple coding styles throughout the project.
________________________________________
Maintainable
Every feature should be easy to update six months from now.
________________________________________
12.4 File Naming
All filenames use:
•	lowercase letters 
•	hyphens when needed 
•	descriptive names 
Examples:
index.html

menu.html

livemusic.html

marine.html

styles.css
Avoid:
MenuFinal.html

NEWPAGE.HTML

marinePage.html
Consistency is more important than personal preference.
________________________________________
12.5 HTML Formatting
HTML should remain clean and highly readable.
Preferred style:
<section class="weather-section">

    <h2>River Conditions</h2>

    <p>
        Current marine conditions for the
        mouth of the Homosassa River.
    </p>

</section>
Spacing is intentional.
Avoid compressed markup.
________________________________________
12.6 HTML Indentation
Use 4 spaces per indentation level.
Never mix tabs and spaces.
Example:
<section>

    <div>

        <p>

        </p>

    </div>

</section>
Indentation should visually communicate hierarchy.
________________________________________
12.7 Semantic HTML
Whenever practical, use semantic elements.
Preferred:
<header>

<nav>

<section>

<main>

<footer>
Avoid using generic <div> elements when a semantic alternative exists.
Semantic HTML improves:
•	Accessibility 
•	SEO 
•	Readability 
________________________________________
12.8 CSS Formatting
CSS should prioritize readability.
Preferred style:
.weather-card {

    background: white;

    padding: 35px;

    border-radius: 18px;

    box-shadow: 0 8px 25px rgba(0,0,0,.25);

}
Blank lines are intentionally used to separate logical property groups.
________________________________________
12.9 CSS Organization
Styles should appear in the same order as the HTML.
Example:
Navigation

↓

Hero

↓

Rooms

↓

Rentals

↓

Restaurant

↓

Weather

↓

Map

↓

Contact
Future sections should continue this ordering.
________________________________________
12.10 CSS Section Comments
Every major CSS block begins with:
/* =========================
WEATHER SECTION
========================= */
This formatting is mandatory.
It greatly improves navigation through large stylesheets.
________________________________________
12.11 CSS Property Grouping
Properties should be grouped logically.
Example:
Layout
↓
Sizing
↓
Spacing
↓
Typography
↓
Colors
↓
Effects
Example:
.weather-card {

    max-width: 1100px;

    margin: auto;

    padding: 35px;

    color: white;

    background: #17102f;

    border-radius: 18px;

    box-shadow: 0 8px 25px rgba(0,0,0,.25);

}
________________________________________
12.12 JavaScript Formatting
JavaScript should follow the same philosophy.
Functions should be separated by blank lines.
Avoid long uninterrupted blocks.
Preferred:
function getWindDirection() {

}



function loadWeather() {

}
Whitespace is considered part of readability.
________________________________________
12.13 Function Naming
Functions should begin with verbs.
Examples:
loadWeather()

toggleMenu()

formatTime()

getDailySummary()

showBookingMessage()

hideBookingMessage()
Avoid:
weather()

thing()

run()

test()
Names should clearly describe behavior.
________________________________________
12.14 Variable Naming
Variables should be descriptive.
Good:
currentWeather

weatherCard

boatingOutlook

windDirection
Avoid:
x

temp

val

thing

obj1
The meaning should be obvious.
________________________________________
12.15 Constants
Magic numbers should be avoided when practical.
Instead of:
if (windSpeed >= 20)
Future improvements may define:
const HIGH_WIND = 20;
This improves readability and maintainability.
________________________________________
12.16 Comments
Comments explain why, not what.
Poor:
// Increment i
i++;
Better:
// Skip duplicate forecast entries
i++;
The code should communicate what it does.
Comments provide context.
________________________________________
12.17 Section Comment Standard
HTML
<!-- =========================
WEATHER SECTION
========================= -->
CSS
/* =========================
WEATHER SECTION
========================= */
JavaScript
/* =========================
WEATHER SYSTEM
========================= */
This formatting is one of the defining characteristics of the project.
________________________________________
12.18 IDs
Use IDs only when necessary.
Primary uses:
Navigation anchors
JavaScript hooks
Unique page elements
Do not use IDs for styling unless uniqueness is required.
________________________________________
12.19 Classes
Classes describe purpose.
Examples:
.weather-card

.contact-card

.forecast-grid

.button
Avoid appearance-based names.
Good:
.contact-button
Poor:
.orange-button
________________________________________
12.20 Reuse Before Creation
Before creating:
New CSS
New JavaScript
New HTML
Ask:
Can an existing component accomplish this?
Reusing proven code improves consistency and reduces maintenance.
________________________________________
12.21 Avoid Duplication
If identical code appears twice:
Consider extracting:
A helper function
A reusable class
A reusable component
Duplicated logic increases maintenance costs.
________________________________________
12.22 Simplicity
Choose the simplest solution that satisfies the requirements.
Avoid introducing:
Complex abstractions
Advanced design patterns
Unnecessary dependencies
The project intentionally favors straightforward solutions.
________________________________________
12.23 Error Handling
Every user-facing feature should fail gracefully.
Example:
Weather unavailable.
↓
Display:
Weather information is temporarily unavailable.
Never expose raw JavaScript errors to visitors.
________________________________________
12.24 Console Cleanliness
Developer Console should remain free of:
JavaScript errors
Missing assets
Broken links
Failed requests
Warnings should be investigated whenever practical.
________________________________________
12.25 Responsive Coding
Every feature should be written with responsiveness in mind.
Ask:
How does this behave on:
Desktop?
Tablet?
Mobile?
Responsive behavior should be considered during development—not added afterward.
________________________________________
12.26 Accessibility
Every new feature should consider:
Keyboard users
Touch users
Screen readers
Color contrast
Descriptive labels
Accessibility should be incorporated naturally into development.
________________________________________
12.27 Performance
Avoid unnecessary:
DOM updates
API calls
Animations
Third-party scripts
Performance should remain a core consideration.
________________________________________
12.28 Refactoring Philosophy
Working code should not be rewritten solely for stylistic reasons.
Refactor only when it:
Improves readability
Improves maintainability
Removes duplication
Fixes a defect
Large rewrites increase project risk.
________________________________________
12.29 Documentation
Every major feature should include:
Comments
Clear naming
Handbook updates
Documentation is considered part of the implementation.
________________________________________
12.30 Code Review Checklist
Before considering a feature complete, verify:
✓ Readable
✓ Consistent
✓ Responsive
✓ Commented
✓ No duplicated logic
✓ No console errors
✓ Tested
✓ Matches project style
✓ Handbook updated
________________________________________
12.31 Project Identity
One of the defining characteristics of this project is that it is handcrafted.
Future developers should preserve this identity.
The website should continue to feel:
•	Thoughtfully engineered. 
•	Carefully documented. 
•	Easy to understand. 
•	Easy to extend. 
Avoid unnecessary complexity that would obscure these qualities.
________________________________________
12.32 Long-Term Coding Philosophy
The MacRae's website is expected to remain under active development for years.
As such:
•	Every line of code should be written with future maintenance in mind. 
•	Every feature should integrate naturally with the existing architecture. 
•	Every improvement should leave the project in a better state than it was found. 
The objective is not simply to build new features, but to continuously improve the quality of the codebase.
________________________________________
12.33 Chapter Summary
This chapter establishes the coding conventions that define the MacRae's website. From file naming and formatting to commenting, reuse, accessibility, and performance, these standards exist to ensure that every future contribution is consistent with the project's handcrafted philosophy.
Following these conventions will allow the codebase to remain readable, maintainable, and cohesive as it continues to grow.
________________________________________
End of Chapter 12
Next Chapter: Chapter 13 – Testing, Debugging & Quality Assurance
This chapter will document the project's testing philosophy, manual QA process, debugging techniques, browser verification, API validation, responsive testing, deployment verification, regression prevention, and quality assurance workflow. It will establish the standards used to ensure that every feature released to the live website is stable, polished, and production-ready.
