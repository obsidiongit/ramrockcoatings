# RamRock Coatings Website

Marketing site for [RamRock Coatings](https://ramrockcoatings.com) — epoxy flooring contractor in Cedar Rapids, IA.

## Stack

- Next.js 16 (App Router)
- TypeScript · Tailwind CSS v4 · Framer Motion
- Deployed on Vercel

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Description |
|----------|-------------|
| `CRM_WEBHOOK_URL` | GoHighLevel or HubSpot webhook for contact form submissions |

Without `CRM_WEBHOOK_URL`, the contact form logs submissions and returns success (dev-safe).

## Deploy

Connect this repo to Vercel with root directory `.` (default). Set production env vars in the Vercel dashboard before go-live.
