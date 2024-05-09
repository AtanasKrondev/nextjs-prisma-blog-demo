## Init Prisma

```
npm install prisma --save-dev
npx prisma init
npx prisma db push
npx prisma studio
npm install @prisma/client
npx prisma generate
mkdir lib && touch src/lib/prisma.ts
```

### Create Vercel Postgres DB

With a `hobby` plan you can create one DB for free

vercel.com -> Storage -> Create Database -> Postgres -> Create
Chose a name and the closest location (Frankfurt, Germany)

```
touch .env.local
```

use `POSTGRES_URL_NO_SSL` value from `env.local` on Vercel dashboard

```
DATABASE_URL=postgres://default:**********:5432/verceldb
```

## Init Auth.js

```
npm install next-auth@beta
npx auth secret
touch src/auth.ts
touch src/middleware.ts
touch src/app/api/auth/\[...nextauth\]/route.ts
```

### Create GitHub OAuth

https://github.com/settings/developers

Chose a name

Homepage URL: http://localhost:3000/

Authorization callback URL: http://localhost:3000/api/auth/callback/github

(Homepage URL and Authorization callback URLs can be changed later)

in `.env.local`

```
AUTH_GITHUB_ID=********
AUTH_GITHUB_SECRET=********
```

## Shadcn/ui

```
npx shadcn-ui@latest init
```

Now you can add components either through the CLI like

```
npx shadcn-ui@latest add button
```

or manualy, check https://ui.shadcn.com/docs/components/

## Dark mode

https://ui.shadcn.com/docs/dark-mode/next
