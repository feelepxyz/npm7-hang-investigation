# debugging arborist recursively running itself

Using arborist programatically to do a `npm install` in the `example` folder seems to recursively run itself:

```
node install.js
```

Errors with the same output with increasingly nested `--cache`.

## using npm cli

Running with npm cli (v7.5) errors after a few seconds as expected:

```
cd example
npm install raven-js@getsentry/raven-js#70b24ed25b73cc15472b2bd1c6032e22bf20d112
```

```
npm ERR! code 1
npm ERR! git dep preparation failed
npm ERR! command /Users/feelepxyz/.nodenv/versions/15.6.0/bin/node /Users/feelepxyz/.nodenv/versions/15.6.0/lib/node_modules/npm/bin/npm-cli.js install --cache=/Users/feelepxyz/.npm/_cacache --prefer-offline=false --prefer-online=false --offline=false --no-progress --no-save --no-audit
npm ERR! npm ERR! code ERESOLVE
npm ERR! npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! npm ERR!
npm ERR! npm ERR! While resolving: undefined@undefined
npm ERR! npm ERR! Found: typescript@4.1.3
npm ERR! npm ERR! node_modules/typescript
npm ERR! npm ERR!   peer typescript@">=2.3.0-dev || >=2.4.0-dev || >=2.5.0-dev || >=2.6.0-dev || >=2.7.0-dev || >=2.8.0-dev || >=2.9.0-dev || >=3.0.0-dev || >= 3.1.0-dev || >= 3.2.0-dev" from tslint@5.20.1
npm ERR! npm ERR!   node_modules/tslint
npm ERR! npm ERR!     peer tslint@">= 4 < 6" from tslint-language-service@0.9.9
npm ERR! npm ERR!     node_modules/tslint-language-service
npm ERR! npm ERR!
npm ERR! npm ERR! Could not resolve dependency:
npm ERR! npm ERR! peer typescript@">= 2.3.1 < 3" from tslint-language-service@0.9.9
npm ERR! npm ERR! node_modules/tslint-language-service
npm ERR! npm ERR!
npm ERR! npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR! npm ERR!
npm ERR! npm ERR! See /Users/feelepxyz/.npm/_cacache/eresolve-report.txt for a full report.
npm ERR!
npm ERR! npm ERR! A complete log of this run can be found in:
npm ERR! npm ERR!     /Users/feelepxyz/.npm/_cacache/_logs/2021-01-29T12_02_42_336Z-debug.log

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/feelepxyz/.npm/_logs/2021-01-29T12_02_42_464Z-debug.log
```
