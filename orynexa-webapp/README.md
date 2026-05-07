# ORYNEXA WebApp

Deploy-ready starter for ORYNEXA.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

## Deploy today

Recommended: Vercel.

1. Create a GitHub repository.
2. Upload this project.
3. Go to Vercel.
4. Import the GitHub repository.
5. Click Deploy.
6. Add your custom domain in Vercel > Project > Settings > Domains.
7. Update DNS at your domain provider:
   - A record: 76.76.21.21
   - CNAME for www: cname.vercel-dns.com

## Founder photo

Put your edited founder image at:

```text
public/founder.jpg
```

Then replace the founder placeholder block in `app/page.tsx` with:

```tsx
<img src="/founder.jpg" alt="Suman Suryabanshi, Founder & CEO of ORYNEXA" />
```
