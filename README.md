# UserAI SaaS Platform

A modern SaaS platform built with Next.js, React, Tailwind CSS, and Payload CMS.

## Tech Stack

- **Next.js**: 15.1.0
- **React**: 19.0.0
- **shadcn/UI**
- **Tailwind CSS**
- **Payload CMS**: 3.23.0
- **TypeScript**: ^5
- **PostgreSQL**: 15

## Prerequisites

- Node.js 19 or later
- pnpm
- Docker and Docker Compose (for local development with PostgreSQL)

## Getting Started

### Local Development with Docker

The easiest way to get started is using Docker Compose, which will set up both the Next.js application and PostgreSQL database:

```bash
# Clone the repository
git clone <repository-url>
cd userai-saas

# Start the Docker containers
docker-compose up
```

This will start:

- Next.js application at [http://localhost:3000](http://localhost:3000)
- PostgreSQL database at [localhost:5432](localhost:5432)

### Manual Setup

If you prefer to run the application without Docker:

1. Make sure you have PostgreSQL 15 installed and running
2. Update the `.env` file with your database connection details
3. Install dependencies and start the development server:

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

# Server URL for local development
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

For production, create a `.env.production` file with your production settings.

## Database Configuration

The application uses PostgreSQL for data storage. The connection string format is:

DATABASE_URI=postgres://username:password@host:port/database

## Email Verification

The application includes email verification functionality. To configure email settings, update the following variables in your `.env` file:

EMAIL_FROM=<noreply@yourdomain.com>
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email_user
EMAIL_PASSWORD=your_email_password

## 控制器文档配置

为了避免控制器文档报错，请确保：

1. 在 `.env` 文件中添加以下配置：

```bash

# 禁用 Swagger 文档在开发环境
DISABLE_DOCS=true

2. 在生产环境中，建议设置以下环境变量：

```bash
NODE_ENV=production
DISABLE_DOCS=true

3. 如果需要启用文档，请确保：
   - 所有的控制器都有正确的 JSDoc 注释
   - 所有的 DTO (Data Transfer Object) 都有完整的类型定义
   - 路由参数和请求体都有明确的类型声明

## 开发最佳实践

1. 控制器注释示例：

```typescript
/**
 * @api {post} /api/users/login 用户登录
 * @apiName LoginUser
 * @apiGroup Auth
 * @apiParam {String} email 用户邮箱
 * @apiParam {String} password 用户密码
 * @apiSuccess {String} token JWT令牌
 */

2. 确保所有API路由都遵循 RESTful 规范
3. 使用适当的 HTTP 状态码
4. 统一错误处理格式

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint

## License

[MIT](LICENSE)
