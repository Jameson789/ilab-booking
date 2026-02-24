# hutch-booking
## Frontend
1. Go to the frontend directory.
`cd next-frontend`
2. Install dependencies.  
`npm i`
3. Run app on port 3000.  
`npm run dev`

## Backend



## Running Tests 

This project includes a shell script that runs the server tests from the root directory.

#### 1) Make the script executable (first time only)

```bash
chmod +x scripts/run-tests.sh
```

#### 2) Run the tests

From the project root:

```bash
./scripts/run-tests.sh
```

---

#### Requirements

Make sure you have the following installed:

- Node.js (includes `npm`)
- Server dependencies installed in the `server` directory

If dependencies are not installed yet:

```bash
cd server
npm install
cd ..
```

---

#### Expected Behavior

- ✅ If all tests pass → the script exits successfully.
- ❌ If any tests fail → the script exits with a non-zero status code (useful for CI).
- ❌ If Node/npm is not installed or `server/` is missing → the script prints an error and exits non-zero.