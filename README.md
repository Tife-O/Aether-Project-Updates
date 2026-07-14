# Aether
> **The Ultimate Personal Assistant for Career Navigation**

Aether is a prototype web application designed to help high school and college students navigate the daunting process of choosing a career path. Built with a sleek, mobile-first simulated Android UI, Aether bridges the gap between uncertainty and actionable career goals.

## The Problem We Are Solving
Studies show that 41% of high school students and 50% of college students who switch majors face massive uncertainty about their career paths. Aether tackles the root causes of this uncertainty:
* **Limited Career Exposure & Awareness:** Students don't know what they don't know.
* **Lack of Mentorship:** Hard to find guidance, especially for First-Generation Students.
* **Pressure & Rapid Changes:** The pressure to choose "safe" careers in a rapidly shifting job market.
* **Limited Access:** Struggle to find relevant internships and entry-level experiences.

## Our Solution
Aether acts as an interactive, digital career counselor. By assessing a user's interests, work environment preferences, and motivations, the app provides tailored career matches and (in future iterations) connects them with mentors and actionable goals.

### Current Features (Prototype Phase)
* **Simulated Mobile UI:** A clean, CSS-driven Android phone frame layout meant for desktop presentation.
* **Mock Authentication:** A sleek login screen with conceptual social-login routing.
* **Interactive Career Assessment:** A 5-question personality and skills quiz that stores user choices dynamically using local browser storage (`localStorage`).
* **Algorithmic Career Matching:** A weighted scoring system (JavaScript) that takes quiz inputs and calculates match percentages for careers like Software Engineering, Mechanical Engineering, Healthcare, Business, and Content Creation.
* **Premium Tier UI:** Dropdown UI for mock subscription tiers (Basic, Standard, Pro).

## Tech Stack
This project is currently built as a lightweight, frontend-only prototype:
* **HTML5:** Semantic structure and page routing.
* **CSS3:** Custom styling, flexbox/grid layouts, animations, and the simulated `.android-app-frame`.
* **Vanilla JavaScript (ES6):** DOM manipulation, event handling, weighted score calculations, and state management.
* **Web Storage API:** Utilizes `localStorage` to persist quiz data across different HTML pages.
* **JSON:** Local data structuring for career descriptions (`search.json`).

## File Structure
* `index.html` & `style.css` — Landing/Login screen.
* `home.html` & `home.css` — User dashboard and profile overview.
* `interest.html`, `interest.css`, `interest.js` — The career assessment quiz and logic.
* `search.html`, `search.css`, `search.js` — The results page and weighted matching algorithm.
* `search.json` — Career description data.
* `script.js` — Global navigation and UI event listeners.
