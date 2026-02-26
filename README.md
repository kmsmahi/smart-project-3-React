# CS-TICKETS | Support Dashboard

[![Live Demo](https://img.shields.io/badge/Live-Demo-3E16CF?style=for-the-badge&logo=vercel)](https://my-cs-tickets.surge.sh/)
> **🌐 View Project:** [https://my-cs-tickets.surge.sh/](https://my-cs-tickets.surge.sh/)

A professional, real-time ticket management system built with **React** and **Vite**. This project streamlines customer support workflows, allowing agents to move tasks from initial inquiry to resolution with a high-performance, responsive interface.

## 🚀 Key Features
* **Dynamic Ticket Lifecycle:** Seamlessly move tickets from `All` to `In Progress` to `Resolved`.
* **Real-time Tracking:** Instant UI updates using React state management.
* **SaaS-Style UI:** Responsive design using Tailwind CSS and DaisyUI.
* **Smart Indicators:** Color-coded priority levels and pulsing status indicators.

---

## 🧠 React Core Concepts (Q&A)

### 1. What is JSX, and why is it used?
**JSX (JavaScript XML)** is a syntax extension that allows you to write HTML-like structures directly inside JavaScript. 
* **Why:** It improves code readability and developer experience. React converts JSX into standard JavaScript objects to efficiently update the DOM.

### 2. State vs. Props


| Feature | State | Props |
| :--- | :--- | :--- |
| **Source** | Internal to the component | Passed from a parent component |
| **Mutability** | Mutable (via setter functions) | Immutable (read-only) |
| **Goal** | Managing dynamic data | Data distribution & configuration |

### 3. The `useState` Hook
`useState` is a hook that enables functional components to maintain internal data. It returns an array containing the **current value** and a **function to update it**. 
* **How it works:** When the state is updated, React triggers a re-render to reflect the changes in the UI.

### 4. Sharing State Between Components
State is shared through three primary patterns:
1. **Lifting State Up:** Moving state to the nearest common ancestor and passing it via props.
2. **Context API:** Global data sharing without "prop drilling."
3. **State Management:** Using libraries (Redux/Zustand) for complex global state.



### 5. Event Handling in React
React handles events using **camelCase** naming (e.g., `onClick` instead of `onclick`). Instead of strings, you pass a function as the event handler. To stop default browser actions, you must explicitly call `event.preventDefault()`.

---

## 🛠️ Tech Stack
* **Framework:** React (Vite)
* **Styling:** Tailwind CSS + DaisyUI
* **Icons:** Lucide-React
* **Deployment:** Surge

## 📦 Installation & Deployment
1. **Clone & Install:** `npm install`
2. **Local Run:** `npm run dev`
3. **Build:** `npm run build`
4. **Deploy:** `surge dist`

---
© 2026 CS-TICKETS. All rights reserved.