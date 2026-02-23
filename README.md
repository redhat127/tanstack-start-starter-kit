# TanStack Start — Starter Kit

A modern full-stack React starter.

## Tech Stack

- **[TanStack Start](https://tanstack.com/start)** — Full-stack React framework
- **[shadcn/ui](https://ui.shadcn.com)** — UI components
- **[Drizzle ORM](https://orm.drizzle.team)** — TypeScript ORM with PostgreSQL
- **[Better Auth](https://better-auth.com)** — Authentication
- **[t3-env](https://env.t3.gg)** — Type-safe environment variables
- **[React Compiler](https://react.dev/learn/react-compiler)** — Automatic memoization
- **[Bun](https://bun.sh)** — Package manager & runtime

## Environment Variables

Create two env files:

**`.env`**
```dotenv
VITE_APP_TITLE=

DATABASE_URL="postgresql://user:password@localhost:5432/db_name"

BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=
```

**`.env.production.local`**
```dotenv
BETTER_AUTH_URL=http://localhost:4173
BETTER_AUTH_SECRET=
```
