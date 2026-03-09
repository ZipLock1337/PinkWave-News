# PinkWave-News

Web-based information system for the preparation and publication of television news

📄 PinkWave News — Editor Panel (Diploma Project)
Project Description
PinkWave News is a web application for managing news, developed as a diploma project. It includes:
Editor login
Adding, editing, and deleting news
Uploading media (images, videos, GIFs)
Viewing a list of all published news
The project is built with HTML, CSS, and JavaScript and uses Firebase Firestore/Storage to store data.
⚠️ Important: The editor is hard-coded in JS and there is only one editor. No additional user registration or authentication is included because for a diploma project it would overcomplicate the task and isn’t necessary.
Project Structure
PinkWave-News/
│
├─ Autorization*blank/
│ ├─ authorization.html # Editor login page
│ ├─ authorization.js # JS script with hard-coded editor
│ └─ authorization.css # Styles for login page
│
├─ Editor_blank/
│ ├─ editor.html # Editor panel
│ ├─ editor.js # Editor JS (CRUD operations)
│ └─ editor.css # Styles for editor panel
│
├─ img/
│ └─ favicon.png # Site favicon
│
└─ index.html # Main page (optional)
Technologies
HTML5 / CSS3
JavaScript (ES6 Modules)
Firebase Firestore (for storing news)
Firebase Storage (for storing media)
💡 Firebase was chosen to simplify the diploma project — no need to deploy a full database, minimal authentication is enough for demonstration purposes.
Authentication
Only one editor exists, stored in authorization.js:
const VALID_EMAIL = "yuliia.horbatiukova.editor@pinkwave.ie";
const VALID_PASSWORD = "12345yullia";
Login stores isEditorLoggedIn in localStorage.
Non-authenticated users are redirected to authorization.html.
News CRUD
Add
Form fields:
Title
Category
Content
Media (optional)
Media can be uploaded via drag-and-drop or file selection.
Files are uploaded to Firebase Storage and URLs are saved in Firestore.
Edit
Edit button populates the form with selected news data.
Old media is deleted if a new file is uploaded.
Updates are saved to Firestore.
Delete
Delete button removes:
Media file from Firebase Storage (if any)
News document from Firestore
Confirmation dialog appears before deletion.
Media Upload
Supported:
Images (image/*)
Videos (video/\_)
GIFs (image/gif)
Max file size: 20 MB
Preview of media is shown before upload
Upload progress is displayed as a progress bar
News Display
News are displayed as cards with:
Media (if available)
Title and content
Category
Edit/Delete buttons
Sorted by creation date — newest first.
UX and Notifications
Success / error / info messages appear in the form:
Green — success
Red — error
Pink — informational
Responsive design for mobile devices.
Limitations and Features
Single editor hard-coded in JS — no registration or user database
Firebase chosen to simplify the diploma project and store media/news without a local DB
Project demonstrates frontend functionality and Firebase integration
How to Run
Clone or download the project locally.
Keep the folder structure intact.
Open Autorization_blank/authorization.html in a browser.
Use the following login credentials:
Email: yuliia.horbatiukova.editor@pinkwave.ie
Password: 12345yullia
After login, the editor panel opens (Editor_blank/editor.html).
Author
Diploma Project
Developer: ziplock1337
The project demonstrates:
DOM manipulation with JS
CRUD operations with Firebase
Media upload and display
Responsive UI with notifications
