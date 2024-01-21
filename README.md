<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/kayaayberk/real-time-translation-chat-app/assets/136496255/5aca68f6-8e4f-44a5-bcc2-59255bc00af1" alt="Logo" width="640" height="340">
  </a>
  <h1 align="center">Chat Up</h1>

  <p align="center">
Chat Up is web a app that provides <ins>built-in real-time translation</ins> that helps people to chat in any supported language. It can easily translate multiple languages in both <ins>single and group chats</ins> allowing everyone to easily communicate. It's built for both experimental purposes and to make life easier for small friend groups that have a language barrier and is currently being used by ~15 people for fun.
    <br />
    <br />
    <br />
    <a href="https://chat-up-pi.vercel.app/">View LIVE</a>
    ·
    <a href="https://github.com/kayaayberk/real-time-translation-chat-app/issues">Report Bug</a>
  </p>
</div>

## ⚙️ Installation & Setup

### Clone the repository
```bash
## HTTPS
git clone https://github.com/kayaayberk/real-time-translation-chat-app.git
## SSH
git clone git@github.com:kayaayberk/real-time-translation-chat-app.git
```
### Install packages and dependencies
```bash
npm install
```
### Run on your localhost
```bash
npm run dev
```
### In your .env.local file
```js
// For database interaction and configurations
FIREBASE_PROJECT_ID='YOUR FIREBASE_PROJECT_ID'
FIREBASE_CLIENT_EMAIL='YOUR FIREBASE_CLIENT_EMAIL'
FIREBASE_PRIVATE_KEY='YOUR FIREBASE_PRIVATE_KEY'

// For Auth purposes
GOOGLE_CLIENT_ID='YOUR GOOGLE_CLIENT_ID'
GOOGLE_CLIENT_SECRET='YOUR GOOGLE_CLIENT_SECRET'

// For Stripe payments and billing & Subcription bill generation
STRIPE_SECRET_KEY='YOUR STRIPE_SECRET_KEY'
```

### 🔑 For credentials, refer to
* [Firebase](console.firebase.google.com)
* [Google Cloud](console.cloud.google.com)
* [Stripe](https://dashboard.stripe.com/)
* [Next.js deployment documentation](https://nextjs.org/docs/deployment)

<br/>

## 🤝 For Test Purposes
If you don't want to use your personal Gmail for logging in, use:
```bash
## Login:
devtester474@gmail.com

## Password:
Zz123qwe123
```
To test out Stripe payments and billing, use:

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



### 🧱 Built With

* <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
* <img src="https://img.shields.io/badge/next%20js-FFFFFF?style=for-the-badge&logo=nextdotjs&logoColor=black" />
* <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
* <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
* <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" />
* <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" />
* <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />


### 🛠️ Other technologies and methods
* [Stripe Payments](https://stripe.com/docs)
  * [Stripe Webhooks](https://stripe.com/docs/webhooks)
  * [Stripe Portal Link](https://stripe.com/docs/customer-management/portal-deep-links)
* [Next Auth](https://next-auth.js.org/)
* [Firebase Rules](https://firebase.google.com/docs/rules)
* [Zod](https://github.com/colinhacks/zod)
* [Custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
* [Zustand](https://github.com/pmndrs/zustand)
* [Firestore Translation](https://extensions.dev/extensions/firebase/firestore-translate-text)
* Server Actions
* Protected Routes







