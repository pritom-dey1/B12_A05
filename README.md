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



<h2>📘 Questions & Answers</h2>

  <div class="box">
    <h3>1. Difference between <code>getElementById</code>, <code>getElementsByClassName</code>, and <code>querySelector / querySelectorAll</code>?</h3>
    <ul>
      <li><b>getElementById("id")</b> → Selects a <b>single element</b> by its unique ID.</li>
      <li><b>getElementsByClassName("class")</b> → Selects <b>all elements</b> with that class. Returns a <b>live HTMLCollection</b>.</li>
      <li><b>querySelector("selector")</b> → Selects the <b>first element</b> that matches a CSS selector.</li>
      <li><b>querySelectorAll("selector")</b> → Selects <b>all elements</b> that match. Returns a <b>static NodeList</b>.</li>
    </ul>
  </div>

  <div class="box">
    <h3>2. How do you create and insert a new element into the DOM?</h3>
    <p>You can use <code>document.createElement()</code> and then insert using <code>appendChild()</code> or <code>prepend()</code>.</p>
    <pre><code>const div = document.createElement("div");
div.textContent = "Hello World!";
document.body.appendChild(div);</code></pre>
  </div>

  <div class="box">
    <h3>3. What is Event Bubbling and how does it work?</h3>
    <p>
      Event Bubbling means when an event happens on a child element, 
      it propagates upward through its parent elements.  
      Example: Clicking a button inside a div → first the button’s event runs, 
      then the div’s, then the body.
    </p>
  </div>

  <div class="box">
    <h3>4. What is Event Delegation in JavaScript? Why is it useful?</h3>
    <p>
      Event Delegation is attaching one event listener to a parent element 
      and handling events of its child elements using <code>event.target</code>.
    </p>
    <p><b>Benefits:</b> Fewer event listeners → better performance, and it works for dynamically added elements.</p>
    <pre><code>document.querySelector(".parent").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked:", e.target.textContent);
  }
});</code></pre>
  </div>

  <div class="box">
    <h3>5. Difference between <code>preventDefault()</code> and <code>stopPropagation()</code>?</h3>
    <ul>
      <li><b>preventDefault()</b> → Stops the <b>default behavior</b> (e.g., prevent form submission, block link navigation).</li>
      <li><b>stopPropagation()</b> → Stops the event from <b>bubbling up</b> to parent elements.</li>
    </ul>
  </div>



 # 📌 Notes

All functionalities are implemented using raw HTML, CSS, and JavaScript.

No external frameworks or libraries used.

Extra features added: toast notifications, timestamps in call history, and button feedback (Copy → Copied).

Fully responsive design for mobile desktop.
