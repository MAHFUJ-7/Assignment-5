# Dev Stack Builder

A web application that helps developers build their ideal development stack by exploring technologies across different categories. Users can add technologies to their stack, remove them, and view their selected items in a sidebar panel.

## Description

Dev Stack Builder allows users to explore frontend, backend, database, and tooling technologies. Pick one technology per category to build your ideal development stack. The app provides real-time feedback through toast notifications and a responsive sidebar showing selected items.

## Technologies Used

- **React.js** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React-Toastify** - Toast notifications
- **React Icons** - Icon library

## Features

1. **Technology Explorer** - Browse 15+ technologies across 8 categories (Frontend, Backend, Database, Language, Styling, DevOps, Tools, Mobile) with icons, ratings, and difficulty levels.

2. **Stack Builder** - Add technologies to your stack, view them in a sidebar with remove buttons, and clear the entire stack with one click. Duplicate additions are prevented with warning alerts.

3. **Responsive Design** - Fully responsive layout that works on mobile (1 column), tablet (2 columns), and desktop (3 columns) with a sticky navbar and mobile-friendly navigation.

## React Questions

### What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax extension that allows writing HTML-like code inside JavaScript. It is used in React because it makes the code more readable and easier to write. Instead of using `React.createElement()`, developers can write familiar HTML tags directly in JavaScript, which Babel then compiles into valid JavaScript.

### What is the difference between props and state?

**Props** are read-only data passed from parent to child components. They are external and cannot be modified by the receiving component. **State** is local, mutable data managed within a component. State can be updated using `useState`, triggering a re-render, while props remain constant throughout the component's lifecycle.

### What does the useState hook do, and where did you use it in this project?

`useState` is a React hook that adds state to functional components. It returns the current state value and a function to update it. In this project, I used `useState` in `Technologies.tsx` to manage `selectedTechnologies`, `countSelected`, and `techPromise`. In `TechnologyCard.tsx`, I derived selection status from props rather than using local state.

### What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after a component renders. It is needed to load JSON data because fetching data should happen once when the component mounts, not on every render. Without `useEffect`, calling `fetch()` directly in the component body would cause infinite re-renders or fetch on every render, creating new promises constantly.

### Why does every item in a .map() list need a unique key prop?

Every item in a `.map()` list needs a unique `key` prop so React can efficiently identify which items changed, were added, or were removed. Without unique keys, React may re-render the entire list unnecessarily, causing performance issues and potential UI bugs like incorrect component state being applied to wrong items.

### What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means displaying different UI based on a condition. In `Stack.tsx`, I used conditional rendering to show either an empty message or the stack items: `{selectedTechnologies.length === 0 ? <p>Your stack is empty.</p> : <StackCard .../>}`. This shows a friendly message when no items are selected, and the stack list when items exist.

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Parent to child**: Data is passed via props. For example, `Technologies.tsx` passes `selectedTechnologies` and `setSelectedTechnologies` as props to `TechnologyCard` and `Stack`. **Child to parent**: A child sends data back by calling a function passed as a prop. For example, `TechnologyCard` calls `setSelectedTechnologies` (passed from parent) to add items to the stack, and `Stack` passes `handleCount` to `StackCard` so removing an item updates the parent's state.

## Deployment

Deployed on Vercel.

## Live Site

[Dev Stack Builder - Live Site]()
