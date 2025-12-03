// Available options to record a trace:

// 'on-first-retry' - Record a trace only when retrying a test for the first time.
// 'on-all-retries' - Record traces for all test retries.
// 'off' - Do not record a trace.
// 'on' - Record a trace for each test. (not recommended as it's performance heavy)
// 'retain-on-failure' - Record a trace for each test, but remove it from successful test runs.

//to open specific trace
//npx playwright show-trace {path of trace zip file}}

//to open from a website
//trace.playwright.dev

//send via cli
//npx playwright test --trace on