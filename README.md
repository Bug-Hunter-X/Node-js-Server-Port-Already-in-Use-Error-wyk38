# Node.js Server Port Already in Use

This repository demonstrates a common error in Node.js applications where the server fails to start because the specified port is already in use.  The example shows how this can happen and provides a solution for handling this situation gracefully.

## Bug

The `server.js` file contains a simple HTTP server that attempts to listen on port 3000.  If another process is already using that port, the server will fail to start and may provide a cryptic error message.

## Solution

The `serverSolution.js` file demonstrates a more robust approach.  It uses a `try...catch` block to handle the `EADDRINUSE` error and provides a more informative message to the user.

## Running the examples

1. Clone this repository.
2. Run `node server.js` (to see the error).
3. Run `node serverSolution.js` (to see the solution).