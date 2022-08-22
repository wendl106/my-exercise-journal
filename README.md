# my-exercise-journal
This is an webapp that I made to allow me to personally track my exercise progress on the go no matter where I am.

# Access
Currently the production build of this project can be accessed by visiting https://wendl106-makes-great-sites.netlify.app/ although you won't be able to login.

# Installation
1. Clone the git repo at https://github.com/wendl106/my-exercise-journal
- If you don't already have a MongoDB account, make an account and set up your first Cluster. From here you can get the connection string for the next step.
2. In the main project directory create a .env file with the following contents: <img width="708" alt="Screen Shot 2022-08-22 at 6 55 19 PM" src="https://user-images.githubusercontent.com/44763668/185894440-1cda2c6c-5675-4382-9dab-632a61e1ee87.png">
3. In the client directory create a .env file with content "PORT=8000" and "SKIP_PREFLIGHT_CHECK=true". The Fetch API requests with a Heroku App will need to have "https://myexercisejournal.herokuapp.com" removed so that the local server on your computer can receive the request.
4. In the main directory, type the command "npm install" followed by "node exercises_controller.mjs"
5. In the client directory, type the command "npm install" followed by "npm start"

# Features
- Create new journal entries to track exercise progress
- Read from your journal entries
- Edit journal entries
- Delete journal entries

# Tech Stack
- MERN stack
  - MongoDB database backend
  - Express as the web application framework
  - React frontend
  - Node is the Javascript web server

# Issues
- There is some issue with the React webpack compatibility that causes react to not be happy on startup unless SKIP_PREFLIGHT_CHECK is true.
- Only integers are accepted by the backend for the weight input even though the HTML form allows for decimal input.
- New user creation is not supported at this time as the database is currently not set upt to handle mutliple users. I plan to fix this at some point in the future.

# Overview of Usage

## Homepage
<img width="1211" alt="Homepage" src="https://user-images.githubusercontent.com/44763668/185887719-a57aa579-5f51-4332-9cbd-efbc8867cf6d.png">

## Edit or Delete Journal Entries
<img width="1193" alt="Mouseover Homepage Table" src="https://user-images.githubusercontent.com/44763668/185887727-4f093a0f-d37b-468e-a04b-1e7fbf0205f0.png">

## Add Journal Entry Page
<img width="965" alt="Add Journal Entry Page" src="https://user-images.githubusercontent.com/44763668/185887710-f7179e2c-3ba9-4a15-8023-e9d8298fee41.png">

### Dynamically Populated Dropdown List of Exercise Types from User
<img width="97" alt="Add Exercise Dynamic Select" src="https://user-images.githubusercontent.com/44763668/185887699-19d5f097-1b15-4733-ac70-faadc6243b30.png">

## Add New Exercise Type Page
<img width="610" alt="Add New Exercise Type Page" src="https://user-images.githubusercontent.com/44763668/185887714-654c8eec-d62c-42af-988e-113cd0f08c14.png">

## Delete Exercise Types 
<img width="224" alt="Mouse over exercise type table" src="https://user-images.githubusercontent.com/44763668/185887722-6aaa8bfe-3422-4fa9-a316-7d3369af5c35.png">

## Edit Journal Entry Page
<img width="999" alt="Edit Exercise Page" src="https://user-images.githubusercontent.com/44763668/185887717-b8d05d51-e98d-4919-b10b-e2620e895255.png">

## Message for Successful Addition of New Journal Entry
<img width="444" alt="Successfully added exercise" src="https://user-images.githubusercontent.com/44763668/185887731-2397931a-2861-4afc-bcc8-0ce525a6e833.png">

## Message for Failed Addition of New Journal Entry
<img width="440" alt="Adding exercise failed" src="https://user-images.githubusercontent.com/44763668/185887716-1ce36c50-8f69-426d-93b9-5004d67b1777.png">


## Message for Successful Editing of Journal Entry
<img width="444" alt="Successfully edited exercise" src="https://user-images.githubusercontent.com/44763668/185887733-6af493ce-0888-4ca6-ac0e-3ef2f753cd13.png">

## Message for Failed Editing of Journal Entry
<img width="444" alt="Updated failed message" src="https://user-images.githubusercontent.com/44763668/185887734-9f3cd90e-2a83-484c-9532-eb4a31c86eba.png">
