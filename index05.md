Document Object Model (DOM) API:

Allows you to manipulate HTML and XML documents by dynamically changing the structure, style, and content of web pages. You can access elements, modify attributes, or even create new nodes.
Example: document.getElementById(), document.createElement().
Fetch API:

Provides a modern, promise-based way to make HTTP requests to servers (e.g., to fetch data from a web API). It’s an improvement over older techniques like XMLHttpRequest.
Example: fetch(url).then(response => response.json()).
Geolocation API:

Allows websites to retrieve the geographical location of the user, typically used in mapping services or location-based apps.
Example: navigator.geolocation.getCurrentPosition().
Canvas API:

Provides a way to draw graphics and animations on a web page using JavaScript, useful for building games, data visualizations, or image editing.
Example: canvas.getContext('2d').fillRect(x, y, width, height).
Web Storage API:

Enables storing data locally within the user’s browser, either in localStorage (persistent) or sessionStorage (temporary).
Example: localStorage.setItem('key', 'value').
WebSockets API:

Facilitates two-way communication between a browser and a server, useful for real-time applications like chat systems.
Example: const socket = new WebSocket('ws://server.com').
Notification API:

Enables web applications to send notifications to the user’s device even when the web app is not active.
Example: new Notification("Hello!").
Service Worker API:

Allows developers to build progressive web apps (PWAs) by running background scripts that manage caching and enable offline functionality.
Example: navigator.serviceWorker.register('/service-worker.js').