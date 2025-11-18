# Technical Specification: Food Lifecycle Management System

## 1. Architecture Overview

### 1.1 System Architecture
The system follows a **client-server architecture** with the following components:
- **Client Application**: Mobile/web app for scanning and interaction
- **Backend API**: RESTful API server for business logic and data management
- **Database**: Relational database for persistent storage
- **AI Service**: OpenAI API integration for discount recommendations
- **External Services**: Barcode lookup services (if needed)

### 1.2 Technology Stack

#### Frontend (Client App)
- **Framework**: React Native (for cross-platform mobile) or React (for web)
- **State Management**: Redux Toolkit or Zustand
- **Barcode Scanning**: 
  - React Native: `react-native-vision-camera` + `react-native-vision-camera-barcode-scanner`
  - Web: `html5-qrcode` or `quaggaJS`
- **UI Library**: React Native Paper / Material-UI
- **HTTP Client**: Axios
- **Offline Storage**: AsyncStorage (mobile) / IndexedDB (web)

#### Backend API
- **Runtime**: Node.js with Express.js or Python with FastAPI
- **Language**: TypeScript (Node.js) or Python 3.10+
- **Authentication**: JWT tokens
- **API Documentation**: OpenAPI/Swagger
- **Validation**: Zod (TypeScript) or Pydantic (Python)

#### Database
- **Primary Database**: PostgreSQL (recommended) or MySQL
- **ORM**: Prisma (Node.js) or SQLAlchemy (Python)
- **Migrations**: Database migration tools

#### AI Integration
- **Service**: OpenAI API (GPT-4 or GPT-3.5-turbo)
- **API Client**: OpenAI SDK

#### Infrastructure
- **Hosting**: AWS, Azure, or Google Cloud Platform
- **Containerization**: Docker
- **CI/CD**: GitHub Actions or GitLab CI

## 2. Database Schema

### 2.1 Entity Relationship Diagram

```
┌─────────────┐
│   Store     │
│─────────────│
│ id (PK)     │
│ name        │
│ address     │
│ location    │
└─────────────┘
      │
      │ 1:N
      │
┌─────────────┐
│    Zone     │
│─────────────│
│ id (PK)     │
│ store_id(FK)│
│ name        │
│ type        │
└─────────────┘
      │
      │ 1:N
      │
┌─────────────┐      ┌──────────────┐
│   Product   │      │  ScanRecord  │
│─────────────│      │──────────────│
│ id (PK)     │◄─────│ id (PK)      │
│ sku         │  N:1 │ product_id   │
│ name        │      │ employee_id  │
│ category    │      │ timestamp    │
│ shelf_life  │      │ state        │
│ base_price  │      │ zone_id      │
│             │      │ expiration   │
└─────────────┘      │ discount_rec │
                     │ discount_app │
                     │ image_url    │
                     └──────────────┘
                            │
                            │ N:1
                            │
                     ┌──────────────┐
                     │  Employee    │
                     │──────────────│
                     │ id (PK)      │
                     │ name         │
                     │ email        │
                     │ role         │
                     └──────────────┘
```

### 2.2 Database Tables

#### Products Table
```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    sku VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL,
    shelf_life_days INTEGER,
    base_price DECIMAL(10, 2),
    storage_requirements VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_products_sku ON products(sku);
CREATE INDEX idx_products_category ON products(category);
```

#### Stores Table
```sql
CREATE TABLE stores (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT,
    location_city VARCHAR(100),
    location_state VARCHAR(100),
    location_country VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Zones Table
```sql
CREATE TABLE zones (
    id SERIAL PRIMARY KEY,
    store_id INTEGER REFERENCES stores(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    zone_type VARCHAR(50), -- 'refrigerated', 'ambient', 'frozen', 'display'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_zones_store ON zones(store_id);
```

#### Employees Table
```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'employee', -- 'employee', 'manager'
    store_id INTEGER REFERENCES stores(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_employees_email ON employees(email);
CREATE INDEX idx_employees_store ON employees(store_id);
```

#### Scan Records Table
```sql
CREATE TABLE scan_records (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE RESTRICT,
    employee_id INTEGER REFERENCES employees(id) ON DELETE RESTRICT,
    zone_id INTEGER REFERENCES zones(id) ON DELETE RESTRICT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    perishable_state VARCHAR(20) NOT NULL, -- 'fresh', 'good', 'fair', 'poor', 'expired'
    expiration_date DATE,
    discount_recommended DECIMAL(5, 2), -- percentage
    discount_applied DECIMAL(5, 2),
    discount_reasoning TEXT, -- AI-generated explanation
    image_url VARCHAR(500),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_scan_records_product ON scan_records(product_id);
CREATE INDEX idx_scan_records_employee ON scan_records(employee_id);
CREATE INDEX idx_scan_records_timestamp ON scan_records(timestamp);
CREATE INDEX idx_scan_records_state ON scan_records(perishable_state);
CREATE INDEX idx_scan_records_zone ON scan_records(zone_id);
```

## 3. API Design

### 3.1 Authentication Endpoints

```
POST /api/auth/login
Request: { email, password }
Response: { token, user: { id, name, email, role, store_id } }

POST /api/auth/refresh
Request: { token }
Response: { token }
```

### 3.2 Product Endpoints

```
GET /api/products/:sku
Response: { id, sku, name, category, shelf_life_days, base_price, ... }

GET /api/products/search?q={query}
Response: { products: [...] }

POST /api/products
Request: { sku, name, category, ... }
Response: { id, ... }
```

### 3.3 Scan Endpoints

```
POST /api/scans
Request: {
    product_id,
    zone_id,
    perishable_state,
    expiration_date,
    image_url?,
    notes?
}
Response: {
    id,
    product: {...},
    discount_recommendation: {
        percentage,
        reasoning,
        urgency
    },
    timestamp
}

GET /api/scans
Query params: ?date_from=&date_to=&state=&zone_id=&product_id=
Response: { scans: [...], total, page, limit }

GET /api/scans/:id
Response: { scan record with full details }
```

### 3.4 Discount Recommendation Endpoint

```
POST /api/scans/:id/recommend-discount
Request: { (optional overrides) }
Response: {
    discount_percentage,
    reasoning,
    urgency,
    factors_considered: [...]
}
```

### 3.5 Analytics Endpoints

```
GET /api/analytics/dashboard
Response: {
    today_scans,
    state_distribution: { fresh, good, fair, poor, expired },
    avg_discount,
    urgent_items: [...]
}

GET /api/analytics/reports
Query params: ?period=day|week|month&start_date=&end_date=
Response: { summary statistics, trends, ... }
```

### 3.6 Zone Endpoints

```
GET /api/zones
Response: { zones: [...] }

GET /api/zones/:id
Response: { zone details }
```

## 4. OpenAI Integration

### 4.1 Discount Recommendation Prompt

```typescript
const discountRecommendationPrompt = `
You are a food retail pricing expert. Analyze the following food item and recommend an appropriate discount percentage.

Product Information:
- Name: {product_name}
- Category: {category}
- Base Price: ${base_price}
- Current State: {perishable_state}
- Days Until Expiration: {days_until_expiration}
- Location: {store_location}, Zone: {zone_type}
- Time of Day: {time_of_day}
- Day of Week: {day_of_week}

Consider the following factors:
1. Perishable state (fresh=0%, good=5-10%, fair=15-25%, poor=30-50%)
2. Days until expiration (more urgent = higher discount)
3. Product category (some categories need steeper discounts)
4. Location and zone type
5. Time factors (end of day/week may need higher discounts)

Provide your recommendation in JSON format:
{
    "discount_percentage": <number 0-70>,
    "reasoning": "<explanation>",
    "urgency": "<low|medium|high|critical>",
    "factors_considered": ["<factor1>", "<factor2>", ...]
}
`;
```

### 4.2 Implementation

```typescript
// Example implementation (Node.js/TypeScript)
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function getDiscountRecommendation(scanData: ScanData): Promise<DiscountRecommendation> {
    const prompt = buildDiscountPrompt(scanData);
    
    const response = await openai.chat.completions.create({
        model: "gpt-4", // or "gpt-3.5-turbo" for cost savings
        messages: [
            {
                role: "system",
                content: "You are a food retail pricing expert. Always respond with valid JSON."
            },
            {
                role: "user",
                content: prompt
            }
        ],
        temperature: 0.7,
        response_format: { type: "json_object" }
    });
    
    const recommendation = JSON.parse(response.choices[0].message.content);
    return {
        discount_percentage: recommendation.discount_percentage,
        reasoning: recommendation.reasoning,
        urgency: recommendation.urgency,
        factors_considered: recommendation.factors_considered
    };
}
```

## 5. Client Application Architecture

### 5.1 Component Structure

```
src/
├── components/
│   ├── Scanner/
│   │   ├── BarcodeScanner.tsx
│   │   └── ScanOverlay.tsx
│   ├── ItemDetails/
│   │   ├── ItemInfo.tsx
│   │   ├── StateSelector.tsx
│   │   └── DiscountRecommendation.tsx
│   └── Common/
│       ├── Button.tsx
│       └── LoadingSpinner.tsx
├── screens/
│   ├── ScanScreen.tsx
│   ├── ItemDetailsScreen.tsx
│   ├── HistoryScreen.tsx
│   └── DashboardScreen.tsx
├── services/
│   ├── api.ts
│   ├── scanner.ts
│   └── storage.ts
├── store/
│   ├── slices/
│   │   ├── authSlice.ts
│   │   ├── scanSlice.ts
│   │   └── productSlice.ts
│   └── store.ts
├── utils/
│   ├── validation.ts
│   └── formatting.ts
└── types/
    └── index.ts
```

### 5.2 State Management

```typescript
// Example Redux slice for scans
interface ScanState {
    currentScan: ScanRecord | null;
    recentScans: ScanRecord[];
    loading: boolean;
    error: string | null;
}

const scanSlice = createSlice({
    name: 'scans',
    initialState,
    reducers: {
        setCurrentScan: (state, action) => {
            state.currentScan = action.payload;
        },
        addScan: (state, action) => {
            state.recentScans.unshift(action.payload);
        },
        // ... other reducers
    }
});
```

## 6. Security Considerations

### 6.1 Authentication & Authorization
- JWT tokens with expiration (15 minutes access, 7 days refresh)
- Role-based access control (RBAC)
- Password hashing using bcrypt (10+ rounds)

### 6.2 API Security
- HTTPS only
- Rate limiting (100 requests/minute per user)
- Input validation and sanitization
- SQL injection prevention (using parameterized queries)
- CORS configuration

### 6.3 Data Protection
- Encrypt sensitive data at rest
- PII data minimization
- Audit logging for all state changes
- Regular security audits

## 7. Error Handling

### 7.1 Error Types
- **Validation Errors**: 400 Bad Request
- **Authentication Errors**: 401 Unauthorized
- **Authorization Errors**: 403 Forbidden
- **Not Found**: 404 Not Found
- **Server Errors**: 500 Internal Server Error
- **External Service Errors**: 502 Bad Gateway (OpenAI API failures)

### 7.2 Error Response Format
```json
{
    "error": {
        "code": "ERROR_CODE",
        "message": "Human-readable message",
        "details": {}
    }
}
```

### 7.3 Retry Logic
- Exponential backoff for external API calls (OpenAI)
- Maximum 3 retries for transient failures
- Queue failed scans for later processing

## 8. Performance Optimization

### 8.1 Database
- Indexes on frequently queried columns
- Connection pooling
- Query optimization and caching
- Pagination for list endpoints

### 8.2 API
- Response caching for product lookups
- Async processing for AI recommendations
- Batch operations where possible

### 8.3 Client
- Image compression before upload
- Offline mode with local storage
- Optimistic UI updates
- Lazy loading for history lists

## 9. Deployment

### 9.1 Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:pass@host:5432/foodwaste

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# OpenAI
OPENAI_API_KEY=sk-...

# Server
PORT=3000
NODE_ENV=production

# CORS
ALLOWED_ORIGINS=https://app.example.com
```

### 9.2 Docker Configuration

```dockerfile
# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### 9.3 CI/CD Pipeline
1. Code commit triggers build
2. Run tests and linting
3. Build Docker image
4. Deploy to staging
5. Run integration tests
6. Deploy to production (manual approval)

## 10. Testing Strategy

### 10.1 Unit Tests
- Business logic functions
- Utility functions
- API route handlers
- Database models

### 10.2 Integration Tests
- API endpoints
- Database operations
- OpenAI API integration (mocked)

### 10.3 E2E Tests
- Complete scan workflow
- Authentication flow
- Discount recommendation flow

## 11. Monitoring and Logging

### 11.1 Logging
- Structured logging (JSON format)
- Log levels: ERROR, WARN, INFO, DEBUG
- Request/response logging
- Error stack traces

### 11.2 Monitoring
- Application performance monitoring (APM)
- Database query performance
- API response times
- Error rates and alerts
- OpenAI API usage and costs

## 12. Development Roadmap

### Phase 1: MVP (Weeks 1-4)
- Basic scanning functionality
- Product database setup
- Simple state logging
- Basic discount recommendation (rule-based)
- Core API endpoints

### Phase 2: AI Integration (Weeks 5-6)
- OpenAI API integration
- Advanced discount recommendation
- Prompt engineering and optimization

### Phase 3: Enhanced Features (Weeks 7-8)
- Analytics dashboard
- Reporting features
- Offline mode
- Image capture and upload

### Phase 4: Polish & Scale (Weeks 9-10)
- Performance optimization
- Security hardening
- Comprehensive testing
- Documentation
- Production deployment

