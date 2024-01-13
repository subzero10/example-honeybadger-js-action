const Honeybadger = require("@honeybadger-io/js");

Honeybadger.configure({
    apiKey: process.env.HONEYBADGER_API_KEY,
    environment: "production",
    // The maximum depth allowed in deeply-nested objects
    maxObjectDepth: 16,
    debug: true,
});

function notify(...args) {
    Honeybadger.notify(...args);
}

module.exports = {
    notify
}
