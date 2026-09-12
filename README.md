# Dev Stack Builder

Hi! This is my project where I built a website that helps you pick which technologies to use in your next project. Think of it like Netflix's "build your perfect stack" but for dev tools!

## About

I made this app because I was always confused about which frontend, backend, and database to use. Now you can browse all the tech, add what you need to your stack, and remove stuff you don't want. There's also a live count so you can see how many tools you've picked.

## Tools I Used

- **React** - The main library for this app
- **TypeScript** - To catch errors before they happen
- **Tailwind CSS** - Makes styling way faster than raw CSS
- **Vite** - This tool runs my app really quick while I'm building it
- **React Toastify** - Gives me those nice little popup messages
- **React Icons** - Handy library with all the tech logos

## Cool Stuff I Built

1. **Explore All Technologies** - You can see 15 different tools like React, Node.js, PostgreSQL, etc. Each one shows its icon, description, rating, and difficulty level. Just click "Add to Stack" and it goes in your collection.

2. **My Stack Side Panel** - On the right side you'll see everything you picked. Click the X button to remove anything, or hit "Remove All" to start over. If you try to add the same tool twice, a warning pops up - I don't want you getting confused!

3. **Works on Your Phone** - I made sure it looks good on phones, tablets, and computers. On mobile, you get a hamburger menu instead of all those links.

## React Stuff

**What's JSX?** 
JSX lets me write HTML in my JavaScript files. Instead of React.createElement() everywhere, I can just write <button>Click me</button> and it works. It makes the code way cleaner to read.

**Props vs State**
Props are like gifts - they come from the parent component and the child can't change them. State is like sticky notes - the component itself writes on them and updates itself when something changes.

**useState Hook**
This hook lets functional components have their own memory. I used it in Technologies.jsx to keep track of what you've selected and how many tools are in your stack.

**useEffect and JSON**
useEffect is like a timer that runs after everything renders. I used it to fetch the technologies from data.json when the page first loads. Without it, the fetch would run again every time you click something!

**Why the Key Prop?**
When React sees a list of items, it needs keys to know which ones are new, deleted, or moved. It's like giving each item a name tag so React doesn't get confused when things change.

**Conditional Rendering**
I used this in the Stack component to show different things: when you haven't picked anything it says "Your stack is empty", but when you have tools it shows them in a nice list.

**Passing Data Up and Down**
Parent components send data down through props. When a child needs to tell the parent something, it calls the function it received as a prop. For example, when you click remove on a tool, the StackCard calls the handleCount function that was passed to it.

## How to Run This

```bash
npm install
npm run dev
```

Then open your browser and visit localhost:5173.

## Link

[Live Demo](https://assignment-5-43sb8s0sp-bug-test.vercel.app/)