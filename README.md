
# PhoneBook

This project is a full-stack application that allows users to manage their contact collections. It provides features for registration, login, updating user profiles, and handling a private collection of contacts. The application utilizes React for the front end, Redux for state management, and communicates with a backend server for authentication and data operations.
## Features

- **User Authentication:** Public routes for registering new users and logging in existing users with corresponding forms.
- **Contact Management:** Private route for users to interact with their contact list, including adding and deleting contacts.
- **Redux State Management:** Utilizes Redux to manage the application state, including handling asynchronous operations, such as fetching contacts and managing loading/error indicators.
- **Persistent Storage:** Uses Redux Persist to store the array of contacts locally, ensuring data persistence between sessions.
- **Backend Integration:** Connects to a ready-made backend supporting necessary contact operations, user registration, login, and updates using JWT.
- **Loading and Error Indicators:** Displays loading indicators and error messages in the Redux state during asynchronous operations.
- **React Router Navigation:** Implements client-side routing with React Router for a seamless user experience.
- **Stylish UI:** Finalizes the application with a visually appealing interface using Material UI library.
## Tech Stack

- **JavaScript:** The primary programming language used for both frontend (React) and backend (API requests).
- **React:** The frontend library for building user interfaces, providing a modular and efficient component-based architecture.
- **Material-UI (Mui):** A React component library that enhances the application's visual appeal and user experience with pre-designed Material Design components.
- **Redux Toolkit:** A Redux library that simplifies state management, including the use of createSlice for reducers and createAsyncThunk for handling asynchronous actions.
- **Axios:** A promise-based HTTP client used for making asynchronous requests to the backend REST API, facilitating data retrieval and manipulation.
- **PropTypes:** A library used for type-checking React component props, enhancing code reliability and maintainability.
- **Styled-Components:** A styling library that allows the definition of CSS-in-JS, ensuring component-specific styling and facilitating responsive design.
- **REST API:** The architectural style for designing networked applications, providing a standard for communication between the frontend and backend through HTTP requests.
- **Redux Persist:** A library used with Redux to persist the state of the application, storing the contact array in the local storage for a persistent user experience.



## Run Locally

To run the project locally, follow these steps:

1. Clone the project:
```bash
  git clone https://github.com/kristina-salnyk/phone-book.git
```
2. Go to the project directory:

```bash
  cd phone-book
```

3. Install dependencies:

```bash
  npm install
```

4. Start the development server:

```bash
  npm start
```
This will launch the application on http://localhost:3000. Open your web browser and navigate to this address to explore PhoneBook locally.


## Deployment

The PhoneBook web application has been successfully deployed and is accessible at [PhoneBook](https://kristina-salnyk.github.io/phone-book/). Sign up and start managing your contacts with ease, exploring a seamless user experience where technology meets efficient contact organization. Whether adding new contacts, updating information, or navigating through your personalized contact list, PhoneBook ensures a user-friendly and cutting-edge contact management experience.
