import "chai/register-expect.js"; // Using Expect style

// Make sure dates are displayed in the correct timezone
process.env.TZ = "Europe/Stockholm";

// Tests should always run in test environment to prevent accidental deletion of
// real elasticsearch indices etc.
process.env.NODE_ENV = "test";