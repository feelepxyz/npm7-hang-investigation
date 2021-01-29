const Arborist = require("@npmcli/arborist");
const npm = require("npm");
const path = require("path");
const errorMessage = require(path.join(
  __dirname,
  "./node_modules/npm/lib/utils/error-message.js"
));

let failedTimes = 0;

const errorHandler = (er) => {
  const msg = errorMessage(er);
  for (const errline of [...msg.summary, ...msg.detail]) {
    console.error(...errline);
  }
  failedTimes++;
  console.log("Handled error times:", failedTimes);
  process.exit(1);
};

npm.load(async (er) => {
  if (er) {
    console.log("npm load failed");
    process.exit(1);
  }

  const arb = new Arborist({
    ...npm.flatOptions,
    cache: path.resolve(".npm/_cacache"),
    path: path.resolve("example"),
  });

  await arb
    .reify({
      add: [
        "raven-js@getsentry/raven-js#70b24ed25b73cc15472b2bd1c6032e22bf20d112",
      ],
    })
    .catch((er) => {
      errorHandler(er);
    });
});
