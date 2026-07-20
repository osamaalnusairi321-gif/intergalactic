# Ntergalactic premium static website

A hardcoded, responsive website designed for GitHub Pages. It uses plain HTML, CSS, and JavaScript—no build step and no backend.

## Run locally

### Simplest method
Double-click `index.html`.

### Better method
Run a local server from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a GitHub repository.
2. Upload every file and folder from this package.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.

## Before publishing

- Replace the Wix-hosted image URLs with downloaded local copies in `assets/images/`.
- Confirm the founders’ wording, academic details, phone, and email.
- Add real laboratory, prototype, and project photography when available.
- Paste a hosted checkout URL into each `data-checkout-url=""` attribute in `product.html`.
- Connect the contact form to Formspree, Basin, EmailJS, or a custom backend. It currently opens the visitor’s email client.
- Add social media links once confirmed.
- Update the canonical URL if the domain changes.

## Purchase without a backend

Use a hosted checkout link from Stripe, PayPal, Square, Shopify, or another provider. Put the link inside the button attribute:

```html
<a data-checkout-url="https://your-checkout-link">Buy now</a>
```

No card details should ever be collected directly by this static site.

## Files

- `index.html` — homepage
- `about.html` — company story and founders
- `product.html` — MFCOptimizer product and purchase CTA
- `contact.html` — contact information and static form
- `assets/styles.css` — complete responsive design system
- `assets/main.js` — menu, scroll effects, purchase fallback, and contact form behavior
- `assets/logo.svg` — editable vector wordmark
- `CODEX_PROMPT.md` — prompt for continuing the build in Codex
