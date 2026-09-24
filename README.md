# React + Vite

## Contact form email setup

The contact form sends messages directly to the inbox configured in EmailJS. It does
not open the visitor's desktop email application.

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Add an email service connected to the inbox where you want to receive messages.
3. Create an email template with these variables:
   `{{from_name}}`, `{{from_email}}`, `{{message}}`, and `{{reply_to}}`.
   Set the template's **To Email** to your inbox.
4. Copy `.env.example` to `.env.local` and replace the placeholder values with the
   EmailJS service ID, template ID, and public key.
5. Restart the Vite dev server after changing `.env.local`.

Only the EmailJS public key is used in the browser. Never put a private API key in
the frontend environment variables.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
