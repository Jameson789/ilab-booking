# hutch-booking
## Frontend
1. Go to the frontend directory.
`cd next-frontend`
2. Install dependencies.  
`npm i`
3. Run app on port 3000.  
`npm run dev`

## Backend

## Running the App and Tests

#### Requirements

Make sure you have the following installed:

- Node.js (includes `npm`)
- Server dependencies installed in the `server` directory
- Frontend dpendencies installed in the `next-frontend` directory

If dependencies are not installed yet:

```bash
cd server
npm install
cd ..
```
and: 
```bash
cd next-frontend
npm install
cd ..
```

#### Running the App: 

1) Be in root of project 

2) Run ```npm run dev``` in terminal 

3) Any Errors will show up in console output

#### Running Tests: 

This project includes a script that runs the server tests from the root directory.

1) Be in root of project 

2) Run ```npm run test``` in terminal 

3) Any Errors will show up in console output

---

#### Expected Behavior

- ✅ If all tests pass → the script exits successfully.
- ❌ If any tests fail → the script exits with a non-zero status code (useful for CI).
- ❌ If Node/npm is not installed or `server/` is missing → the script prints an error and exits non-zero.