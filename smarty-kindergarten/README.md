# Smarty Kindergarten — rebuilt to match the reference design

## Run it

```
npm install
npm run dev
```

## What changed from your original code

- **Fonts** — added Google Fonts `Patrick Hand` (headings) + `Quicksand`/`Nunito`
  (nav/body) via `src/index.css`, wired up in `tailwind.config.js` as
  `font-display` / `font-sans`. This is the biggest visual driver of the
  "handwritten kids theme" look — your original code used the browser default
  sans everywhere.
- **Wave dividers** (`src/components/WaveDivider.jsx`) — replaced the
  `rounded-b-[40%]` / blob-radius tricks with real SVG wave shapes (`WaveTop`
  / `WaveBottom`) that sit in normal document flow above/below the Events and
  News bands, and under the hero. Matches the reference far more closely than
  border-radius can.
- **Doodle backgrounds** (`src/components/Doodles.jsx`) — the scattered
  star/candy/pencil/flower/balloon/paper-airplane outline illustrations on
  every colored section. Entirely missing from the original code.
- **Icons** (`src/components/Icons.jsx`) — swapped the 🗼🎲🚙🍼 emoji for
  simple line-art icons (stacking toy, ABC blocks, car, pacifier, sun, key,
  heart, etc.) matching the outline-icon style in the reference.
- **Navbar** — search input is now always visible (was click-to-expand).
- **Core values** — square rounded photos (was circular), underline accent
  under each title.
- **Events** — cards no longer have a background/border wrapper; image + text
  sit directly on the blue band, matching the reference.
- **Classes** — Age/Size/Price meta row is left-aligned (was centered).
- **Kindergarten section copy** — replaced with the actual philosophy +
  placeholder paragraph from the reference.
- **News** — no white card wrapper; circular date badge overlaps the image
  corner; text sits directly on the orange band.
- **Testimonials** — names/quotes corrected to Maria Bimmer / Sven Bender, no
  card wrapper.
- **Signup** — email input + Submit button merged into one seamless pill,
  copy corrected, button reads "Submit" not "Subscribe."
- **Footer** — fully rebuilt: brand blurb, Contact Info (address, two phone
  numbers, email, hours), two-column Quick Links, two-column Information For,
  and the "Secondary Kindergarten Theme by Stylemix Themes" copyright line.

## Known gaps / assumptions

- I couldn't identify the exact paid font from the original theme, so
  `Patrick Hand` is a close stand-in for the handwritten headline face —
  swap it in `src/index.css` / `tailwind.config.js` if you have the real one.
- Photos are placeholder Unsplash URLs, same approach your original code used
  — swap for real photography whenever you have it.
- The doodle illustrations are hand-approximated outline icons (star, candy,
  pencil, flower, balloon, paper airplane), not extracted from the original
  vector assets, since I only had the flattened screenshot to work from.
