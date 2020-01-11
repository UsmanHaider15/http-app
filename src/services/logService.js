import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://fb9eb9e78b9b47658e97db5490fc6e67@sentry.io/1878118"
  });
}
function log(error) {
  console.log("log function");
  Sentry.captureException(error);
}

export default {
  init,
  log
};
