## Here are 5 Features of Online Group-Study Assignment

### User Authentication

**Description**: Implement user registration and login functionality using Firebase. Users can sign up with their name, photoURL, email, and password. Additionally, provide social login options such as Google login or GitHub sign-up.

**Implementation**: Use Firebase authentication for user registration and login.

### Assignment Management

**Description**: Allow users to create, update, and delete assignments. Each assignment should have a title, description, marks, thumbnail image URL, assignment difficulty level (easy, medium, hard), and a due date.

**Implementation**: Create private routes for these features. Implement validations for assignment creation and updating. Only allow the creator to delete assignments.

### Taking and Submitting Assignments

**Description**: Enable users to view assignments, filter them by difficulty level, and take assignments. When taking an assignment, users can submit PDF links and provide quick notes. Submitted assignments are in a pending status.

**Implementation**: Create a public page to view assignments and a private page for taking and submitting assignments.

### Marking Assignments

**Description**: Allow users to review and grade assignments. Display pending assignments with their titles, marks, examinee names, and a "give mark" button. Users can input marks and feedback.

**Implementation**: Create a private page for reviewing and marking assignments. Update the assignment status to "completed" after marking.

### Additional Features

**Description**: Implement bonus features like meaningful Git commits, a detailed README, PDF preview for submitted assignments, pagination for the "All Assignments" page, form validation for assignment creation and registration, and full responsiveness across different devices (mobile, tablet, and desktop). Additionally, use JWT tokens for private routes.

**Implementation**: Commit regularly with meaningful messages, provide a comprehensive README, integrate PDF preview, add pagination, and implement validation and JWT token usage for private routes.

**Live Link**: https://online-assignment-client.web.app/