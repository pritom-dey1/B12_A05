# 🚨 Emergency Hotline Web App

This is a simple **Emergency Hotline Web Application** built using **HTML, CSS, and Vanilla JavaScript**.  
It allows users to interact with hotline services (like Emergency Numbers) through features such as **favorites, call history, copy hotline numbers, and coin management**.

---

## ✨ Features Implemented

### ❤️ Heart Icons
- Clicking on the heart icon of any card will increase the **Love count** in the Navbar.  
- Clicking again will remove it and decrease the count.  
- A toast notification is shown for **Added/Removed from favorite list**.  

### 📞 Call Buttons
- Clicking a Call button shows an **alert** with the service name and number.  
- Each call costs **20 coins**, deducted from the Navbar.  
- If coins are **less than 20**, shows a relevant alert and **stops** the call.  
- The called service (**Name, Number, Time**) is added to the **Call History section**.  

### 🕒 Call History Section
- Displays all the services you have called with their **name, number, and time**.  
- Initially empty → fills dynamically when Call button is clicked.  
- **Clear History** button removes all history items.  

### 📋 Copy Buttons
- Clicking on the Copy button **copies the hotline number** to clipboard.  
- Shows an **alert** confirming the copy.  
- Increases the **Copy count** in the Navbar.  
- Button text changes to **Copied ✅** for a few seconds before resetting back.  

### 📱 Mobile Responsive
- The app is fully **responsive** and works on all screen sizes.  
- Uses **flexbox and CSS responsiveness** to adjust layout for mobile devices.  
- Navbar, cards, and history section resize and stay readable on smaller screens.  

---

## 📂 Technologies Used
- **HTML** → Page structure  
- **CSS** → Styling, layout, and responsiveness  
- **JavaScript (Vanilla)** → Dynamic functionalities (hearts, copy, calls, history, coins)  

---

 # #📌 Notes

All functionalities are implemented using raw HTML, CSS, and JavaScript.

No external frameworks or libraries used.

Extra features added: toast notifications, timestamps in call history, and button feedback (Copy → Copied).

Fully responsive design for mobile desktop.
