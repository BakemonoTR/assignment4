# Task Management Dashboard

A dynamic, web-based Task Management Dashboard built with **Vanilla JavaScript**. This project demonstrates the use of modern JavaScript concepts including Object-Oriented Programming (OOP), asynchronous operations, and immutable state management patterns without relying on any external frameworks.

## 🚀 Features

* **Asynchronous Data Loading:** Simulates fetching data from a remote server using `Promise` and `setTimeout`.
* **Dynamic DOM Manipulation:** Renders tasks dynamically based on the state.
* **Task Management:**
    * **Add:** Create new tasks with unique IDs.
    * **Toggle:** Mark tasks as completed/active with visual feedback (strikethrough styling).
    * **Delete:** Remove tasks from the list using ID filtering.
* **Immutable State Management:** All state updates (adding, removing, toggling) are performed using immutable patterns (Spread operator, `.map()`, `.filter()`) to ensure data integrity.

## 🛠️ Technologies & Concepts

* **JavaScript (ES6+)**
* **HTML5 & CSS3**
* **Object-Oriented Programming (OOP):** Utilizes `Task` and `TaskManager` classes.
* **Asynchronous Programming:** `async/await` and `Promises`.
* **Immutability:** Avoids direct array mutation by using the Spread Operator (`...`).

## 📂 Project Structure

```text
├── index.html                # Main HTML structure
├── styles.css                # Styling for the dashboard
├── main.js                   # Application logic (DOM interaction & Event Listeners)
├── api.js                # Mock API simulation (fetchTasks)
├── taskManager.js        # Logic for Task and TaskManager classes

## 💡 Challenges & Key Learnings

During the development of this dashboard, several technical challenges were addressed:

* **Implementing Immutability:** Transitioning from imperative loops (e.g., `for` loops) to modern functional patterns using the **Spread Operator (`...`)** and array methods (`map`, `filter`) to update state without mutation.
* **Asynchronous Synchronization:** Managing the 1.5-second simulated server delay using `Promises` and ensuring the UI renders only after the data is fully resolved using `async/await`.
* **Dynamic DOM Management:** Keeping the visual DOM elements strictly in sync with the internal JavaScript state. Solved by implementing a central `renderTasks()` method that refreshes the UI upon any state change.
* **Strict Mode & Syntax:** Debugging `ReferenceError` and `TypeError` issues related to file paths and object property definitions (e.g., `Object.defineProperty`).
