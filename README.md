# Subscription Management Backend API

A robust, production-ready backend service for managing user subscriptions with authentication, user management, and subscription lifecycle handling. Built with modern TypeScript and Express.js following monolithic architecture principles.

---

## 🎯 Project Overview

This API provides a comprehensive solution for subscription-based business models, enabling users to sign up, manage their subscriptions, and track upcoming renewals. The system is designed to be scalable, maintainable, and developer-friendly.

**Key Features:**
- 🔐 User authentication (sign up, sign in, sign out)
- 👤 User profile management
- 💳 Subscription creation and lifecycle management
- 🔔 Upcoming renewal tracking
- 📊 RESTful API with versioned endpoints

---

## 🏗️ Architecture

This project follows a **monolithic architecture** with clear separation of concerns:

```
subscription-management-backend/
├── app.ts                    # Express server entry point
├── config/                   # Configuration management
│   └── env.ts               # Environment variables loader
├── routes/                   # API route handlers
│   ├── auth.routes.ts       # Authentication endpoints
│   ├── user.routes.ts       # User management endpoints
│   └── subscription.routes.ts # Subscription endpoints
├── tsconfig.json            # TypeScript configuration
├── eslint.config.ts         # Code quality & linting rules
└── package.json             # Project dependencies
```

### Architectural Decisions:
- **Monolithic Design**: Single, unified codebase for easier deployment and maintenance
- **Modular Routing**: Separate route files for each feature domain (auth, users, subscriptions)
- **TypeScript**: Full type safety throughout the application
- **ESLint Integration**: Enforced code quality standards

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Language** | TypeScript | Type-safe JavaScript development |
| **Runtime** | Node.js | Server-side JavaScript execution |
| **Framework** | Express.js v4.22 | REST API and HTTP routing |
| **Development** | Nodemon | Auto-restart during development |
| **Code Quality** | ESLint 10.5 | Linting and code standards |
| **Configuration** | dotenv | Environment-based configuration |
| **Logging** | Morgan | HTTP request logging |
| **Type Definitions** | @types/express, @types/node | TypeScript support for dependencies |

---

## 📡 API Endpoints

All endpoints are prefixed with `/api/v1` for version management.

### Authentication Routes (`/api/v1/auth`)
```
POST   /sign-up     - Register a new user
POST   /sign-in     - Authenticate existing user
POST   /sign-out    - Logout user
```

### User Routes (`/api/v1/users`)
```
GET    /            - Retrieve all users
GET    /:id         - Get specific user details
GET    /user/:id    - Get user's subscriptions
GET    /upcoming-renewals - Fetch upcoming subscription renewals
POST   /            - Create new user
PUT    /:id         - Update user profile
PUT    /:id/cancel  - Cancel user subscriptions
DELETE /:id         - Delete user account
```

### Subscription Routes (`/api/v1/subscriptions`)
```
GET    /            - List all subscriptions
GET    /:id         - Get subscription details
POST   /            - Create new subscription
PUT    /:id         - Update subscription
DELETE /:id         - Delete/cancel subscription
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yeswadams/subscription-management-backend-.git
cd subscription-management-backend-

# Install dependencies
npm install

# Create environment file
cp .env.example .env.dev.local

# Configure your environment variables
# Edit .env.dev.local with your settings
```

### Running the Application

**Development Mode** (with hot reload):
```bash
npm run dev
```
Starts the server with Nodemon, automatically restarting on file changes.

**Production Mode**:
```bash
npm start
```
Runs the compiled application.

The API will be available at `http://localhost:{PORT}` (default: 3000)

---

## 📝 Configuration

Environment variables are managed through dotenv with environment-specific files:

```
.env.dev.local      # Development configuration
.env.prod.local     # Production configuration
```

**Required Variables:**
```env
PORT=3000
NODE_ENV=dev
```

---

## 🛡️ Code Quality

### TypeScript Configuration
- **Strict Mode**: Enabled for maximum type safety
- **Source Maps**: Enabled for debugging
- **Declaration Files**: Generated for library consumers
- **ESNext Target**: Modern JavaScript features support
- **Module System**: ES modules with Node.js compatibility

### ESLint Rules
Code quality is enforced through ESLint with TypeScript plugin:
```bash
npm run lint        # Check code quality
```

---

## 📦 Project Structure

### Core Files
- **app.ts**: Main Express application setup, route registration, and server initialization
- **config/env.ts**: Centralized environment variable management with dotenv
- **routes/*.ts**: Feature-based route handlers with RESTful endpoint definitions

### Configuration Files
- **tsconfig.json**: TypeScript compiler options for strict type checking and modern syntax
- **eslint.config.ts**: Linting rules and code quality standards
- **package.json**: Dependencies and npm scripts

---

## 🔒 Security Considerations

**Implemented:**
- Environment-based configuration (secrets not in code)
- Express middleware for request parsing (cookie-parser)
- Structured error handling

**Recommended for Production:**
- Add authentication middleware (JWT, OAuth)
- Implement rate limiting
- Add input validation and sanitization
- Use HTTPS/TLS
- Implement CORS with whitelist
- Add database query parameterization
- Implement logging and monitoring

---

## 🧪 Testing

Currently, the project is set up for route definition. To add comprehensive testing:

```bash
npm install -D jest @types/jest ts-jest
npm install -D supertest @types/supertest
```

---

## 📚 Development Workflow

1. **Create a feature branch**: `git checkout -b feature/your-feature`
2. **Make changes**: Modify code following the existing structure
3. **Run linter**: `npm run lint` to check code quality
4. **Test locally**: `npm run dev` and test endpoints
5. **Commit changes**: Follow conventional commit messages
6. **Push and create PR**: Request review before merging

---

## 🎓 Technical Skills Demonstrated

This project showcases expertise in:

✅ **Backend Development**: RESTful API design with Express.js  
✅ **TypeScript**: Strict type safety and modern JavaScript  
✅ **Node.js**: Server-side runtime and package management  
✅ **Architecture**: Monolithic design patterns and modular routing  
✅ **Code Quality**: ESLint configuration and best practices  
✅ **DevOps**: Environment configuration and development workflows  
✅ **Database-ready**: Structure supports MongoDB/Mongoose integration  
✅ **API Versioning**: V1 endpoint structure for future versioning  
✅ **Development Tools**: Nodemon, TypeScript compilation, debugging  
✅ **Git Workflow**: Version control and collaborative development  

---

## 🔄 Roadmap

- [ ] Database integration (MongoDB + Mongoose)
- [ ] JWT authentication middleware
- [ ] Input validation (joi/zod)
- [ ] Unit and integration tests
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Docker containerization
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Subscription renewal cron jobs
- [ ] Payment gateway integration
- [ ] Email notifications

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 About the Developer

Built by **Yeswa Adams** - Full-stack developer specializing in TypeScript, Node.js, and cloud-based architectures.

**Key Competencies:**
- Backend API development with modern frameworks
- Type-safe JavaScript development
- RESTful API design and best practices
- Monolithic and microservices architecture
- DevOps and deployment practices
- Code quality and developer experience

---

## 📧 Contact & Support

For questions, issues, or collaboration opportunities:
- GitHub: [@yeswadams](https://github.com/yeswadams)
- Open an issue on this repository

---

**Last Updated**: 2026-06-15  
**Status**: Active Development
