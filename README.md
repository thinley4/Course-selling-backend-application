COURSE SELLING BACKEND APPLICATION

I have built a course selling website with a backend application using Node.js, Express, MongoDB, and JSON Web Tokens (JWT) for authentication. The application has separate routes for administrators and users.

For administrators, the following routes are available:

1. POST /admin/signup: Creates a new admin account.
2. POST /admin/signin: Logs in an admin account.
3. POST /admin/courses: Creates a new course.
4. GET /admin/courses: Returns all courses created by administrators.

For users, the routes include:

1. POST /users/signup: Creates a new user account.
2. POST /users/signin: Logs in a user account.
3. GET /users/courses: Lists all courses available for purchase.
4. POST /users/courses/:courseId: Purchases a specific course.
5. GET /users/purchasedCourses: Lists all courses purchased by the user.

Authentication is handled using JWT, and in every authenticated request, the JWT is expected to be sent in the headers (Authorization: "Bearer <actual token>"). MongoDB is used for persistent data storage. The application allows administrators to manage courses, while users can sign up, sign in, view available courses, purchase courses, and view their purchased courses.