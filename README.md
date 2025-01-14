# Postaway - Social Networking Platform

Postaway is a social networking platform designed for user engagement with features such as creating posts, liking, and commenting. This document provides an overview of the application’s API structure, functionalities, dependencies, and code organization.

## Objective
To create a social media application with a user-friendly interface for user registration, authentication, and interaction through posts, likes, and comments.

---

## Features
1. User Registration and Login with token-based authentication.
2. Create, update, and delete posts with media attachments.
3. Add, update, and delete comments on posts.
4. Like and unlike posts.
5. View posts, comments, and likes with paginated data.
6. Secure routes using JSON Web Tokens (JWT).
7. Modular architecture with ES6 Modules.
8. Logging for debugging and monitoring.

---

## API Structure

### User Routes
- **POST /api/signup**: Register a new user account.
- **POST /api/signin**: Log in as a user.

### Post Routes
- **GET /api/posts/all**: Retrieve all posts.
- **GET /api/posts/:id**: Retrieve a specific post by ID.
- **POST /api/posts**: Create a new post (with image upload functionality).
- **PUT /api/posts/:id**: Update a specific post by ID (with image upload functionality).
- **DELETE /api/posts/:id**: Delete a specific post by ID.

### Comment Routes
- **GET /api/comments/:postId**: Retrieve all comments for a specific post.
- **POST /api/comments/:postId**: Add a new comment to a specific post.
- **PUT /api/comments/:id**: Update a specific comment by ID.
- **DELETE /api/comments/:id**: Delete a specific comment by ID.

### Like Routes
- **GET /api/likes/:postId**: Retrieve all likes for a specific post.
- **GET /api/likes/toggle/:postId**: Toggle like status for a specific post.

---

## Data Structures

### User
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "password": "string"
}
```

### Post
```json
{
  "id": "string",
  "userId": "string",
  "caption": "string",
  "imageUrl": "string"
}
```

### Comment
```json
{
  "id": "string",
  "userId": "string",
  "postId": "string",
  "content": "string"
}
```

### Like
```json
{
  "id": "string",
  "userId": "string",
  "postId": "string"
}
```

---

## Project Dependencies

Install the required dependencies using npm:
```bash
npm install express multer jsonwebtoken bcryptjs morgan
```

### Development Dependencies
```bash
npm install --save-dev nodemon eslint
```

---

## Code Organization

### Models
- **User Model**: Functions to manage user data (register, login).
- **Post Model**: Functions for CRUD operations on posts.
- **Comment Model**: Functions for CRUD operations on comments.
- **Like Model**: Functions to toggle and retrieve likes.

### Controllers
- **User Controller**: Interfaces with the User model.
- **Post Controller**: Interfaces with the Post model.
- **Comment Controller**: Interfaces with the Comment model.
- **Like Controller**: Interfaces with the Like model.

### Middleware
- **Error Handler**: Custom error class for handling exceptions.
- **Authentication**: Middleware to validate and secure routes using JWT.
- **File Upload**: Middleware for managing media uploads.
- **Logger**: Middleware for logging request details.

---

## Implementation Steps

1. **Set up Express Application**:
   - Initialize a new Node.js project.
   - Configure Express.js with middleware for JSON parsing, error handling, and logging.

2. **Create Models and Controllers**:
   - Develop modular ES6 classes for User, Post, Comment, and Like operations.
   - Write corresponding controllers to handle API logic.

3. **Add Authentication**:
   - Use bcryptjs for password hashing.
   - Implement JWT for generating and validating authentication tokens.

4. **Add Middleware**:
   - Logger middleware to log request URLs and bodies.
   - File upload middleware using Multer.

5. **Build Routes**:
   - Define RESTful endpoints for user, post, comment, and like operations.
   - Secure routes using the authentication middleware.

6. **Testing and Debugging**:
   - Test routes with Postman or similar tools.
   - Use console logs and the logger middleware to debug issues.

7. **Documentation**:
   - Write comprehensive comments and update this README.

---

## Running the Application

1. Start the server:
```bash
npm start
```

2. Use Postman or a similar tool to test the API endpoints.

---

## Future Enhancements

1. **Database Integration**:
   - Replace in-memory data structures with a database like MongoDB or PostgreSQL.

2. **Pagination**:
   - Implement pagination for posts and comments.

3. **Search and Filters**:
   - Add search and filtering options for posts.

4. **User Profiles**:
   - Enhance user profiles with additional metadata.

---

## Contributors
This project was developed by Shivang Kumar. Contributions are welcome; please submit a pull request for review.
