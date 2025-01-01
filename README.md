# Express.js Async Error Handling: Misuse of `res.send`

This repository demonstrates a common error in Express.js applications related to asynchronous operations and the improper use of `res.send`.  The bug showcases the scenario where `res.send` is called outside of the asynchronous operation's callback, potentially causing unexpected behavior or errors.

## Bug Description

The `bug.js` file contains an Express.js application with a GET route handler.  The `res.send` function, used to send the response to the client, is called before the asynchronous operation (`console.log`) completes, which can lead to race conditions. This can affect the order of actions or lead to errors if the asynchronous operation fails.

## Solution

The `bugSolution.js` file provides the corrected code. The solution ensures that `res.send` is called within the asynchronous operation's callback, guaranteeing proper response handling and preventing errors.