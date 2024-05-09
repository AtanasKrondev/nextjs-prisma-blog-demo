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
```
