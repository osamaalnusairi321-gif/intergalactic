# Codex prompt: Ntergalactic website

You are a senior brand designer, conversion-focused web designer, and front-end engineer. Work directly inside this repository and improve the existing static Ntergalactic website.

## Company

Ntergalactic is an early-stage energy technology company developing microbial fuel cell (MFC) systems and software. Its core story is: organic waste can be treated as a potential energy resource. The company’s flagship software is MFCOptimizer Pilot 1.0, a browser-based tool for exploring how temperature, pH, substrate concentration, resistance, electrode area, and other parameters affect simulated or predicted MFC performance. BioBatteryLab is the company’s initiative for advancing biobatteries toward practical deployment.

The founders are:
- Ahmed Alnusairi — Founder & CEO; Electrical Engineering and Mathematics; University of Oklahoma ’27.
- Anayat Yousuf — Co-Founder; Biology and Public Health; University of Oklahoma ’27.

Contact:
- ahmed@ntergalacticenergies.com
- (405) 200-3014

## Design direction

Create a premium, cinematic, highly disciplined website inspired by the clarity, pacing, typography, photography scale, and product storytelling of leading technology and sports brands. Do not copy Apple, Wilson, or any other company’s exact layout, components, wording, imagery, or trade dress.

The design should feel:
- Scientific but not academic.
- Futuristic but credible.
- Premium but not decorative.
- Bold, minimal, and highly legible.
- Built around large editorial typography, generous whitespace, controlled motion, and clear hierarchy.

Use a restrained palette based on near-black, warm off-white, muted gray, and an electric organic green. Use the system font stack; do not add paid fonts or unnecessary dependencies.

## Problems to avoid from the old Wix site

- Do not use unrelated imagery such as a consumer drone.
- Do not show placeholder contact information.
- Do not expose generic platform pages such as Groups, Members, Search Results, or Accessibility Statement in the main navigation.
- Do not make unsupported scientific or commercial claims.
- Do not bury the product in a generic store card.
- Do not overload the homepage with equal-weight sections.
- Do not use excessive gradients, glassmorphism, or gimmicky animations.

## Required pages

1. `index.html`
   - Full-screen hero: “Waste into watts.”
   - Clear one-sentence company description.
   - Visual explanation of waste → microbes → electrons → current.
   - MFCOptimizer product feature.
   - BioBatteryLab initiative.
   - Founders.
   - Strong collaboration CTA.

2. `about.html`
   - Founder story.
   - Mission and principles.
   - Team profiles.
   - Honest early-stage language.

3. `product.html`
   - Strong product hero.
   - Product screenshot or accurate interface mockup.
   - Clear use case, audience, inputs, and limitations.
   - $599 price only if confirmed.
   - Hosted checkout button; never collect card data directly.
   - Link to the existing product demo.

4. `contact.html`
   - Real contact information.
   - Collaboration-focused messaging.
   - Accessible contact form.
   - For GitHub Pages, connect to a hosted form service or retain a clear mailto fallback.

## Engineering requirements

- Plain semantic HTML, modern CSS, and minimal vanilla JavaScript.
- Must work on GitHub Pages with relative URLs.
- Mobile-first responsive behavior.
- Accessible keyboard navigation, visible focus states, proper labels, alt text, and reduced-motion support.
- No frameworks unless I explicitly request one.
- No unnecessary npm dependencies.
- Fast load time and no autoplay background video by default.
- SEO titles, descriptions, canonical tags, Open Graph placeholders, favicon, sitemap, robots.txt, and Organization/Product structured data.
- Keep all editable company data easy to find.
- Use subtle intersection-based reveal animations and a refined mobile menu.
- Protect against layout shift by sizing media.

## Images

Use authentic Ntergalactic prototype, laboratory, founders, and product images when available. Copy the approved images into `assets/images/` and reference them locally. Never hotlink Wix assets in the final production release. Do not use irrelevant generic renewable-energy stock photography.

## Checkout and forms

This is a static website. Implement purchase through a hosted checkout URL stored in an obvious configuration location. If no checkout URL is configured, the button must fall back to a purchase inquiry email rather than fail silently.

The contact form must never pretend to submit successfully when no service is connected. Use a mailto fallback or clearly documented Formspree/Basin/EmailJS integration.

## Working method

1. Inspect all existing files first.
2. Preserve the strongest parts of the current design system.
3. Make changes incrementally.
4. Run the site locally and test all pages at desktop and mobile widths.
5. Check internal links, buttons, mobile navigation, keyboard use, and console errors.
6. Summarize every file changed and any information still needed from the owner.

Do not ask broad design questions unless a missing fact blocks implementation. Make the best professional decision and explain major assumptions at the end.
