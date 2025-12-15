React Role-Based Task Management App
📌 Project Overview

This project is a role-based task management application built using React.
It allows an Admin to create, assign, and reassign tasks to users using drag-and-drop, while Users can view their assigned tasks and mark them as completed.

The application does not use any backend.
All data is stored and managed using the browser’s localStorage, simulating backend behavior.

🎯 Features
👤 Roles

Admin
--Login with admin credentials
--Create tasks
--Assign tasks to users
--Reassign tasks using drag-and-drop
--View task status (Pending / Completed)

User
--Login with user credentials
--View only tasks assigned to them
--Mark tasks as Completed

🧩 Key Functionalities
--Role-based access (Admin / User)
--Task creation and assignment
--Drag-and-drop task reassignment (Admin only)
--Task status updates
--Data persistence using localStorage
--Responsive and colorful UI
--No backend / server required

🛠️ Tech Stack
--React (Class Components)
--react-dnd (for drag and drop)
--react-dnd-html5-backend
--UUID (for unique task IDs)
--CSS (custom styling)
--localStorage (data persistence)

📁 Project Structure
>>      src/
        │── components/
        │   ├── LoginForm.js
        │   ├── AdminDashboard.js
        │   ├── UserDashboard.js
        │   ├── TaskForm.js
        │   ├── TaskItem.js
        │   ├── UserCard.js
        │
        │── contexts/
        │   ├── AuthContext.js
        │
        │── utils/
        │   ├── storage.js
        │
        │── App.js
        │── index.js
        │── App.css
        │── README.md

🔐 Default Login Credentials
Admin
>>             -Username: admin
>>             -Password: admin123

Users
>>             -Username: user1
>>             -Password: user123
>>             -Username: user2
>>             -Password: user123

🚀 How to Run the Project
1️⃣ Install Dependencies
>>       npm install

2️⃣ Start the Development Server
>>       npm start

                                   The app will run at: http://localhost:3000


🧪 How to Use the App
Admin Flow
--Login as Admin
--Create a task using the form
--Assign it to a user
--Drag the task card
--Drop it on another user to reassign
--View task status updates

User Flow
--Login as User
--View assigned tasks
--Click Complete to mark a task as completed
--Status updates reflect in Admin dashboard

📩 Submission Links
Published URL: (deployed link)

GitHub Repository:
>>      👉 ( https://github.com/ManojHubBuilds/react-task-management.git )

🎉 Completed By
>>       Manoj Gugulothu
>>       Full Stack Developer 

🔚 END OF README
