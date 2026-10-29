# Morrow Café

A responsive café homepage and editorial site built with React, TypeScript, Vite, Tailwind CSS, React Router, Lucide, and Framer Motion.

## Design system

- **Paper:** `#f7f5ef`; **deep paper:** `#efede4`; **ink:** `#302b25`; **muted ink:** `#77746c`
- **Botanical green:** `#68715d`; **deep green:** `#4b5546`; **poppy accent:** `#b95846`; **fine rule:** `#d8d4ca`
- **Type:** Playfair Display for expressive editorial headings; DM Sans for body copy, labels, and navigation.
- **Layout:** fluid page gutter `clamp(24px, 7.2vw, 112px)`, a 1600px maximum content width, generous vertical spacing, and asymmetric image compositions.
- **Responsive layouts:** desktop navigation above 800px; tablet and mobile layouts below that breakpoint, with a one-column editorial flow below 560px.
- **Motion:** slow image transitions and a timed four-slide hero; operating-system reduced-motion preferences are respected.

## Pages and interactions

- `/` contains the hero, brand introduction, menu, Flower Fridays, featured gathering, shop preview, journal preview, newsletter, and footer.
- `/about`, `/events`, `/shop`, and `/blog` are dedicated editorial pages. Product details use `/shop/:slug`; journal stories use `/blog/:slug`.
- Navigation, carousel controls, menu anchors, shop filters, article links, and email links are keyboard operable and have visible focus styles.
- The mailing list has browser email validation and a transparent unconnected-service message. No address is recorded or submitted.
- Shop availability and event inquiries use email links. Online checkout and event ticketing are intentionally not simulated.

## Project-specific setup

The café location, opening hours, and `hello@yourcafe.example` contact are sample content to replace with the project’s real details. Connect a mailing-list provider in `NewsletterSignup` before accepting signups. Photography is served from Unsplash image URLs and requires an internet connection.

## Run

```sh
npm install
npm run dev
```

`npm run build` creates the production bundle; `npm run lint` runs ESLint.
