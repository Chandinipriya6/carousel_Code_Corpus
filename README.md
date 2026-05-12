# 🎠 Swiggy-Style React Carousel Project

A responsive and interactive carousel built using **React JS**, inspired by Swiggy/Zomato-style horizontal sliders.  
It supports auto-play, pause functionality, and smooth left-to-right sliding animations.

---

## 📌 Live Demo
*(Optional - add later if you deploy it)*  
https://your-deployment-link.com

---

## ✨ Features

- 🎡 Horizontal carousel with multiple visible cards
- ▶️ Play / Pause auto sliding functionality
- ⏱️ Auto slide every 2 seconds
- ⛔ Stops automatically at the last card (no infinite loop)
- 🎨 Smooth transition using CSS transform
- 📱 Clean responsive layout (basic)

---

## 🛠️ Tech Stack

- React JS (useState, useEffect)
- JavaScript (ES6)
- HTML5
- CSS (Inline styling)

---

## 🧠 Core Concepts Used

- useState → To track current slide index & play/pause state  
- useEffect → To handle auto sliding with setInterval  
- setInterval / clearInterval → For controlling animation timing  
- CSS transform: translateX → For smooth horizontal movement  
- Flexbox → To arrange cards in a row  

---

## ⚙️ How It Works

1. Cards are stored in an array of objects  
2. Displayed in a horizontal row using Flexbox  
3. `index` state controls visible slide  
4. On Play, a timer updates index every 2 seconds  
5. Carousel moves using: transform: translateX(-index * cardWidth);

```js
# Clone the repository
git clone https://github.com/Chandinipriya6/carousel_Code_Corpus.git

# Go into project folder
cd carousel_Code_Corpus

# Install dependencies
npm install

# Start development server
npm run dev
