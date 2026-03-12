# GEMINI.md - JSD12 Week 02 Project Context

## Project Overview
This directory contains materials for **Week 02** of the JSD12 course. It encompasses two primary learning tracks:
1.  **Shoulder Bag E-commerce Project:** A conceptual and technical exploration of a specialized e-commerce platform for functional and stylish shoulder bags designed for working women.
2.  **Cafe/Restaurant Management System:** A PostgreSQL-based database schema and series of exercises for managing a cafe (staff, inventory, recipes, and orders).

## Project Structure & Key Files

### E-commerce Project (Shoulder Bags)
*   **01_my-ecommerce.md:** Defines the problem statement (bags for working women) and the proposed solution.
*   **05_product-backlog.md:** Lists user stories for customers (browsing, cart management, ordering, tracking).
*   **06_bring-it-to-javascript.js:** Implementation of product and cart data structures using JavaScript objects and arrays.
*   **02_business-model-canvas.excalidraw:** Business model diagram.
*   **03_use-case-diagram.excalidraw:** Visual representation of user interactions.
*   **04_er-diagram.excalidraw:** Entity-Relationship diagram for the e-commerce system.

### Database Practice (Cafe System)
*   **postgresql/create-tables.sql:** SQL schema defining tables for `Suppliers`, `Staff`, `Ingredients`, `MenuItems`, `RecipeItems`, `Orders`, and `OrderItems`.
*   **postgresql/query.sql:** Basic query examples for testing the database.
*   **Excercise.sql/**: A directory containing 10 SQL exercise files (`01_excercise.sql` to `10_excercise.sql`) focused on database querying.

## Technology Stack
*   **Documentation:** Markdown
*   **Design:** Excalidraw (Diagrams)
*   **Logic:** JavaScript (Node.js/Browser compatible)
*   **Database:** PostgreSQL

## Usage & Development
*   **JavaScript:** The `06_bring-it-to-javascript.js` file can be executed in any JavaScript runtime (e.g., `node 06_bring-it-to-javascript.js`) to see the product/cart data output.
*   **SQL:** The `postgresql/create-tables.sql` file should be executed in a PostgreSQL environment to set up the practice database. The files in `Excercise.sql/` provide query practice against this schema.
*   **Diagrams:** Open the `.excalidraw` files in [Excalidraw](https://excalidraw.com/) to view or edit the system design diagrams.

## Development Conventions
*   **Incremental Learning:** The project transitions from conceptual business modeling (Markdown/Excalidraw) to data representation (JS) and then to structured data management (SQL).
*   **Surgical Logic:** JavaScript implementations focus on clean data structures (POJOs) and basic array manipulation.
*   **Database Design:** Normalization is demonstrated through the use of join tables (e.g., `RecipeItems`, `OrderItems`).
