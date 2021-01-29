const Arborist = require("@npmcli/arborist");
const npm = require("npm7");
const errorMessage = require(path.join(
  __dirname,
  "./node_modules/npm/lib/utils/error-message.js"
));

const errorHandler = (er) => {
  const msg = errorMessage(er);
  for (const errline of [...msg.summary, ...msg.detail]) {
    console.error(...errline);
  }
};

npm.load(async (er) => {
  if (er) {
    errorHandler(er);
    throw new Error(er);
  }

  const arb = new Arborist({
    ...npm.flatOptions,
    path: "/Users/feelepxyz/code/js-pkg-setup/example",
  });

  await arb
    .reify({
      add: [
        "raven-js@getsentry/raven-js#70b24ed25b73cc15472b2bd1c6032e22bf20d112",
      ],
    })
    .catch((er) => {
      errorHandler(er);
      throw new Error(er);
    });
});
