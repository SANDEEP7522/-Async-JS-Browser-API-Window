localStorage:

Purpose: Stores data persistently in the browser across sessions. Data stored in localStorage does not expire even when the page is reloaded or the browser is closed and reopened.
Usage: Useful for saving user preferences, theme settings, or application state that should persist between sessions.


sessionStorage:

Purpose: Stores data temporarily for the duration of the page session. Once the tab or window is closed, the data is deleted. It is scoped to the tab and not shared between different tabs or windows.
Usage: Useful for storing data that should only persist during a user's session, such as form input or temporary state that doesn’t need to last beyond the session.