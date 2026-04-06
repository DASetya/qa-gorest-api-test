# 🚀 API Automation Framework (QA Portfolio)

This project is an API Automation Testing Framework built using modern JavaScript/TypeScript tools.
It simulates a **production-like testing environment** with clean architecture, reusable components, and scalable design.

---

# 🧰 Tech Stack

* Node.js (v20)
* TypeScript
* Mocha (Test Runner)
* Chai (Assertion Library)
* Axios (HTTP Client)
* Mochawesome (Reporting)
* AJV (JSON Schema Validation)
* dotenv (Environment Management)
* cross-env (Cross-platform environment support)

---

# 📁 Project Structure

```
src/
├── config/              # Environment configuration
│   └── config.ts
├── helpers/             # Utility & core helpers
│   ├── http.ts          # HTTP client (axios wrapper)
│   ├── logger.ts        # Logging (request/response/error)
│   ├── assertion.ts     # Custom assertions
│   └── schemaValidator.ts
├── services/            # API abstraction layer
│   ├── endpoint.ts
│   └── user.service.ts
├── data/                # Test data
│   ├── payload/
│   └── response/
├── schema/              # JSON schema for validation
│   └── user.schema.json
├── tests/               # Test cases
│   └── user.spec.ts
```

---

# ⚙️ Environment Setup

Create environment files in the root directory:

### `.env.dev`

```
BASE_URL=https://gorest.co.in/public/v2
TOKEN=your_token_here
```

You can also create:

* `.env.staging`
* `.env.prod`

---

# ▶️ How to Run Tests

### Run all tests

```
npm test
```

### Run with specific environment

```
npm run test:dev
```

---

# 🎯 Test Execution by Tag

This framework supports **tag-based execution** using Mocha `--grep`.

### Run Positive Tests Only

```
npm run test:dev -- --grep "@positive-case"
```

### Run Negative Tests Only

```
npm run test:dev -- --grep "@negative-case"
```

---

# 🧪 Test Strategy

## ✅ Positive Test

* Validate successful API responses
* Verify status codes (200, 201)
* Validate response schema using AJV

## ❌ Negative Test

* Invalid payload
* Missing required fields
* Unauthorized access (401)
* Resource not found (404)

---

# 📊 Reporting

Test reports are generated using Mochawesome.

After running tests, open:

```
/report/index.html
```

---

# ✨ Key Features

* 🔹 Clean architecture (helpers, services, tests separation)
* 🔹 Reusable HTTP client with logging
* 🔹 Environment-based configuration (multi-env support)
* 🔹 Dynamic test data (function-based payload)
* 🔹 JSON schema validation using AJV
* 🔹 Tag-based test execution
* 🔹 Detailed HTML reporting (Mochawesome)

---

# 👨‍💻 Author

QA Automation Engineer Portfolio Project
Built to demonstrate real-world API automation testing practices.
