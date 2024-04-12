<div align="center">
  <img src="https://github.com/kayaayberk/real-time-translation-chat-app/assets/136496255/549a85ce-0b66-4f60-9b0a-8e304e56eda7" alt="Logo" />
  <h1 align="center">Chat Up</h1>

  <p align="center">
Chat Up is a web app that provides <ins>built-in real-time translation</ins> that helps people to chat in any supported language. It can easily translate multiple languages in both <ins>single and group chats</ins> allowing everyone to easily communicate. It's built for both experimental purposes and to make life easier for small friend groups that have a language barrier and is currently being used by ~15 people for fun.
    <br />
    <br />
    <br />
    <a href="https://chat-up-pi.vercel.app/">View LIVE</a>
    ~
    <a href="https://github.com/kayaayberk/real-time-translation-chat-app/issues">Report Bug</a>
  </p>
</div>

## ⚙️ Installation & Setup

#### Clone the repository
```bash
## HTTPS
git clone https://github.com/kayaayberk/real-time-translation-chat-app.git
## SSH
git clone git@github.com:kayaayberk/real-time-translation-chat-app.git
```
#### Install packages and dependencies
```bash
npm install
```
#### Run on your localhost
```bash
npm run dev
```
#### In your .env.local file
```js
// For database interactions and configurations
FIREBASE_PROJECT_ID='YOUR FIREBASE_PROJECT_ID'
FIREBASE_CLIENT_EMAIL='YOUR FIREBASE_CLIENT_EMAIL'
FIREBASE_PRIVATE_KEY='YOUR FIREBASE_PRIVATE_KEY'

// For Auth purposes
GOOGLE_CLIENT_ID='YOUR GOOGLE_CLIENT_ID'
GOOGLE_CLIENT_SECRET='YOUR GOOGLE_CLIENT_SECRET'

// For Stripe payments & Subcription bill generation
STRIPE_SECRET_KEY='YOUR STRIPE_SECRET_KEY'
```

### 🔑 For credentials, refer to
- [Firebase](console.firebase.google.com)
- [Google Cloud](console.cloud.google.com)
- [Stripe](https://dashboard.stripe.com/)
- [Next.js deployment documentation](https://nextjs.org/docs/deployment)

## 🤝 For Test Purposes

#### To test out Stripe payments and billing, use:

```bash
## Test credit card
4242 4242 4242 4242
## DATE:
24/42
## CVV:
424
## Rest:
Random
```

## 🧱 Tech Stack & Features
### Frameworks & Libraries & Languages
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Zod](https://github.com/colinhacks/zod)

### Platforms
- [Vercel](https://vercel.com/)
- [Firebase](https://firebase.google.com/)
  - Firebase Rules
  - Firebase Functions
  - Firebase Extensions
- [Google Cloud](https://cloud.google.com/)
  - Google Auth Provider
- [Stripe](https://stripe.com/docs)
  - Stripe Webhooks
  - Stripe Portal Link

### UI
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Lucide](https://lucide.dev/)

### Other Technologies and Methods
- Custom hooks
- Server Actions
- Protected Routes







