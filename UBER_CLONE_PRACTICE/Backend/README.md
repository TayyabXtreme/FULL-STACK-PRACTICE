# Backend API DOCUMENTATION

## `/users/register` Endpoint

**Description**
Handles user registration by creating a new user record.

**Request Payload**
- fullname: 
  - firstname (required, string, min-length=3, max-length=20)
  - lastname (optional, string, min-length=3, max-length=20)
- email (required, valid email string)
- password (required, min-length=6)

**Example Request:**
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","fullname":{"firstname":"John","lastname":"Doe"}}' \
  http://localhost:3000/users/register
```

**Usage**
- Send a POST request to /users/register with JSON body matching the payload schema.
- On success, returns a token and the created user object.

**Responses**
- 201 Created: Returns a token and the created user.
- 400 Bad Request: Returns validation errors if request data is invalid.
- 409 Conflict: Returned if the email is already in use.

**Example Response:**
```json
{
  "token": "...",
  "user": {
    "_id": "...",
    "email": "test@example.com",
    // ...other user details...
  }
}
```

## `/users/login` Endpoint

**Description**
Authenticates an existing user using email and password.

**Request Payload**
- email (required, valid email string)
- password (required, min-length=6)

**Example Request:**
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}' \
  http://localhost:3000/users/login
```

**Usage**
- Send a POST request to /users/login with JSON body containing email and password.
- On success, returns a token and the authenticated user.

**Responses**
- 200 OK: Returns a token and the authenticated user.
- 400 Bad Request: Returns validation errors if request data is invalid.
- 401 Unauthorized: Returned if the email or password is incorrect.