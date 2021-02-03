const { execSync } = require("child_process");

let failedTimes = 0;

try {
  execSync(
    "npm install raven-js@getsentry/raven-js#70b24ed25b73cc15472b2bd1c6032e22bf20d112 --force --ignore-scripts",
    { cwd: "example" }
  );
} catch (e) {
  console.log("Handled error times:", failedTimes);
  throw new Error(e.stderr);
}
