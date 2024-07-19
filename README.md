# Blog Post Application

## Overview

This is a blog post application built using the MERN stack. The application allows users to view, create, and manage blog posts using the JSONPlaceholder API. It includes features such as fetching posts, creating new posts, pagination, search functionality, and deleting posts.

## Features

- **View Posts**: Display a list of blog posts with titles and excerpts.
- **View Post Details**: Click on a post to view its full content.
- **Create Post**: Add new blog posts using a form.
- **Pagination**: Navigate through pages of blog posts.
- **Search**: Filter blog posts by title.
- **Delete Post**: Remove a post from the list.
- **Loading and Error Handling**: Show loading indicators and handle errors gracefully.

## Technologies Used

- **Frontend**: React, React Router, CSS (or styled-components)
- **API**: JSONPlaceholder

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Clone the Repository

```bash
git clone https://github.com/Ankur-nbj/Blog-app.git
cd Blog-app
```

### Install Dependencies

```bash
npm install
```

### Run the Application Locally

```bash
npm start
```

This will start the React development server and open the application in your default browser at `http://localhost:3000`.

## Deployment

The application is deployed and accessible at [https://your-deployed-site-url.com](https://blog-appblog-app-wine.vercel.app). You can visit this link to see the live version of the application.

## Component Overview

- **Header**: Displays the title and navigation links.
- **PostList**: Fetches and displays the list of blog posts.
- **Post**: Displays a single post with title and excerpt.
- **PostDetail**: Shows the full content of a selected post.
- **CreatePost**: Contains a form to create new blog posts.

## API Endpoints

- **GET /posts**: Fetch all blog posts from JSONPlaceholder.
- **POST /posts**: Create a new blog post on JSONPlaceholder.

## Styling

The application uses CSS (or styled-components) for styling. Customize the styles as needed in the `src/App.css`  files to ensure the application is responsive and visually appealing.

## Additional Features

- **Pagination**: Implemented on the PostList page.
- **Search**: Added to filter posts by title.
- **Delete**: Option to remove a post from the list.

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing a demo API.
- [Create React App](https://create-react-app.dev/) for the React project setup.
```

### Key Updates:
- **Deployment Section**: Added a section to specify the URL where the application is deployed. Make sure to replace `https://your-deployed-site-url.com` with the actual URL of your deployed application.

This `README.md` should now provide clear instructions for both local setup and accessing the deployed application.
