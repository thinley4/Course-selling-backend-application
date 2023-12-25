Course selling backend application

I have built a course selling website with a backend application using Node.js, Express, MongoDB, and JSON Web Tokens (JWT) for authentication. The application has separate routes for administrators and users.

For administrators, the following routes are available:

POST /admin/signup: Creates a new admin account.
POST /admin/signin: Logs in an admin account.
POST /admin/courses: Creates a new course.
GET /admin/courses: Returns all courses created by administrators.

For users, the routes include:

POST /users/signup: Creates a new user account.
POST /users/signin: Logs in a user account.
GET /users/courses: Lists all courses available for purchase.
POST /users/courses/:courseId: Purchases a specific course.
GET /users/purchasedCourses: Lists all courses purchased by the user.
Authentication is handled using JWT, and in every authenticated request, the JWT is expected to be sent in the headers (Authorization: "Bearer <actual token>"). MongoDB is used for persistent data storage. The application allows administrators to manage courses, while users can sign up, sign in, view available courses, purchase courses, and view their purchased courses.