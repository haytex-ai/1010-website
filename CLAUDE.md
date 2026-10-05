# 1010 Drones website (1010drones.com)

Read this file at the start of every session. It holds the rules for this site. `docs/` holds the why and the plan:

- `docs/ROADMAP.md`: what's next, with checkboxes. Update it when something ships.
- `docs/DECISIONS.md`: why things are the way they are. Read before changing anything structural.
- `docs/SCOREBOARD.md`: the weekly numbers that matter more than any website change.
- `docs/spec-v1.md`: the original build spec, with the list of changes made during the build at the top.

## Who I'm working with

Hayden Moore, founder and only pilot of 1010 Drones, based in Brandon, MS. He's tech-savvy but not a programmer. Explain what you changed in plain words, show him before anything goes live, and keep momentum. Be direct, with no filler. If a change he asks for would hurt conversions or break a rule below, say so plainly, then do what he decides.

## What this site is for

One page, one offer, one action.

- **Visitor:** the owner, VP of Ops, or precon lead at a Central Mississippi general contractor running 3 to 10 outdoor-heavy jobs. He arrives from a business card QR code, a cold email, a texted link, or word of mouth. He already knows Hayden's name. Most visitors are on a phone, often in a truck.
- **The one action:** claim a free baseline map (the form), or email hayden@1010drones.com.
- **Success:** qualified conversations that lead to free flights, then monthly retainers. Page visits don't matter.

## The offer (use these exact names)

- **Free baseline map:** the free first flight. "Wherever your job is today, that's your baseline." It becomes month one if the GC starts the monthly record. One per company. Free in Central Mississippi; farther out, "we travel across the Southeast, just ask."
- **Groundbreak-to-Closeout Site Record:** the monthly retainer. One permanent link for the life of the build. It includes:
  - baseline flight
  - monthly site map
  - same-spot photos
  - a 60-second progress clip
  - the "What Changed" one-pager
  - cover-up flights (before pours and backfill)
  - one permanent link
  - files you own
- **Guarantee:** "On time, or that month is free." The record lands within 3 business days of every flight. Month-to-month, cancel anytime, keep every link forever.
- **Turnaround:** 3 business days, from flight to map link.

## Copy rules (hard rules)

1. **Every claim must be true today.** If you're unsure whether something is true, ask Hayden. Don't soften it into vagueness and don't invent it.
2. **Voice:** "we" for the company (we fly, we deliver, we travel). "I" for anything personal (I call you, I fly your job). The visitor deals with one accountable person.
3. Write in plain words and sentence case. No hype words, exclamation points, or "AI-powered" anything. Don't stack em dashes. The H1 has the only one.
4. **No phone number anywhere.** Hayden calls leads back from the form and email. This is deliberate, to avoid spam calls.
5. **No pricing on the site.** Price is given on the call: one flat monthly price per site.
6. **Procore:** say the files can be downloaded and dropped into Procore. Never say the link integrates with Procore or goes into Procore.
7. Never call it a "custom portal" or a "client portal" in customer-facing copy. It's "your job's private link" or "one permanent link."
8. **Not survey-grade.** Never claim volumes, staking, boundaries, survey accuracy, design overlays, interiors, or 360s. The aircraft is a DJI Air 2S, which has no RTK.
9. Never name past employers (Entergy, Ergon, SkySkopes). No utility or Entergy language.
10. No client logos, testimonials, or "trusted by" until there's paid work and written permission.
11. **No fake scarcity or urgency.** No countdowns, no "limited time." "One per company" is real.
12. **Insurance:** "Insured" and "certificate of insurance before the first flight" are both true. He buys per-flight coverage through an app. Don't describe the mechanism on the site.
13. Every button says exactly what happens: "Claim your free baseline map," not "Learn more."

## Design rules (1010 Drones Design System, paper surface)

- **Font:** Libre Franklin only, self-hosted at 400, 700, and 900 in `site/assets/fonts/`. There's no 500 weight; use 700.
- **Colors** are defined as CSS variables at the top of `site/assets/css/site.css`:
  - parchment `#FAF8F3` is the page background
  - `#F0EDE4` is for sunken bands
  - ink `#0A0A09` is for text and the charcoal bands (guarantee strip, footer, mobile sticky bar)
  - rust `#B8481D` is for **buttons only**, with `#8F3512` on hover
- Rust appears nowhere else. No rust icons, rust text, or rust rules.
- **Corners:** 0 to 2px maximum, on everything.
- **Uppercase** appears only in the wordmark, the map date stamps, and small plate/spec labels (title block, founder spec list). Headings use sentence case, with no eyebrow labels above them.
- A 4px ink rule opens each section heading, like a drawing title block. Use hairline rules between list items. No shadowed cards.
- **Never use:**
  - gradients
  - stock drone photos or sky backgrounds
  - carousels, popups, or chat widgets
  - animated counters
  - arrows on button text
  - icons in color
  - cookie banners (none needed; Cloudflare Web Analytics is cookieless)
- **Motion:** only the one slider nudge on first view. Respect `prefers-reduced-motion`.
- **Mobile first.**
  - Test at 390×844 and 1280×720.
  - On mobile, the hero CTA must be visible without scrolling.
  - Form inputs are 16px or larger (anything smaller makes iPhones zoom).
  - Tap targets are 44px or larger.

## Page structure (index.html, top to bottom)

1. **Header:** wordmark, email link (desktop only), and a small claim button.
2. **Hero:**
   - H1, subhead, CTA, and microcopy
   - the before/after slider plate with its title block, plus a "live sample" link under it
   - the 4-fact credential grid
3. **Claim (#claim):** 3 numbered steps and the 5-field form (name, company, mobile, email, job location). On phones, every claim button scrolls to the form card itself, not the section top (`home.js`).
4. **Offer:** 8 deliverables, the guarantee strip, a multi-job line, and a CTA.
5. **Questions GCs ask:** 4 objections, all answered in the open (no accordion).
6. **Who's flying your job:** body text, the founder spec list, the CTA, and recent flight thumbnails.
7. **Footer.** Then the mobile sticky bar (Claim + Email), which appears after the hero CTA scrolls away and hides while the form is on screen.

Other pages: `thanks.html` (noindex), `privacy.html`, `404.html`.

## Tech

- Plain static HTML, one shared stylesheet (`site/assets/css/site.css`), and one script (`site/assets/js/home.js`). **No framework, no build step.** Keep it that way unless Hayden agrees otherwise.
- **Form:** Web3Forms emails submissions to hayden@1010drones.com.
  - The access key sits in a hidden input in index.html. It's a public key by design, so that's fine.
  - The script validates fields, catches bots (a hidden honeypot box plus a 3-second minimum before submit counts), posts with fetch, then sends the visitor to `/thanks`.
  - The form still works without JavaScript through the hidden `redirect` field.
- **Lead source:** the `utm_source` URL parameter fills the hidden `source` field, which shows up in every lead email. Channels in use: `card`, `cold-email`, `call`, `linkedin`.
- **Analytics:** Cloudflare Web Analytics, turned on in the Pages dashboard (no script tag in the code).
- **Caching** is set in `site/_headers`. CSS and JS always revalidate (only once Cloudflare's Browser Cache TTL is set to "Respect Existing Headers"; until then it forces 4 hours, see ROADMAP). Images cache for 30 days, so **replace an image under a new filename** or returning visitors keep the old one.
- **Images:**
  - WebP format
  - the hero is 250KB or less at 1600px (desktop) and 900px (mobile, 4:5)
  - thumbnails are 800×600
  - always set `width` and `height` attributes
  - lazy-load anything below the hero
  - convert with Python Pillow or `sharp`
  - keep raw orthos outside the repo
- **Performance budget:** mobile first load under about 400KB.
  - Don't add third-party scripts, fonts, or embeds without asking.
  - Run PageSpeed Insights (mobile) after visual changes. The target is 90 or above.

## Before/after slider

The two maps are aligned to the same frame (residential subdivision, Flight 1 vs Flight 2). Desktop uses 4:3 crops and mobile uses 4:5 crops. The before layer is clipped with `--pos`. When swapping in a new pair, both images must be pixel-aligned on fixed landmarks and cropped identically, or the slider looks like it's jumping. The date stamps are the `.stamp-l` and `.stamp-r` spans in index.html.

## Deploy

- **Cloudflare Pages project:** `1010drones`, a direct upload project (not Git-connected). Live on 1010drones.com and www.1010drones.com. Production branch is `main`.
- **GitHub:** github.com/haytex-ai/1010-website (private), branch `main`. This repo is the only source for the live site. Never upload from the old `Documents/1010drones-site` folder.
- **Preview (default after any change):**
  `npx wrangler pages deploy site --project-name=1010drones --branch=preview`
  Send Hayden the preview URL to check on his phone.
- **Production (only after Hayden says to ship):**
  `npx wrangler pages deploy site --project-name=1010drones --branch=main --commit-hash=$(git rev-parse HEAD)`
  The commit hash makes the Cloudflare deployment list show which commit is live. Confirm with `npx wrangler pages deployment list --project-name=1010drones` (top row should say Production) and check that 1010drones.com returns the change.
- **Always commit and push to GitHub** before a production deploy. Write commit messages in plain words, like "Swap slider dates" or "Rewrite claim step 3."
- **Never deploy anything outside `site/`.** Never touch the portal project or its Workers from here.

## Related

- The client portal is a separate repo (Cloudflare Workers, R2, Airtable, Stream), usually at `../1010-portal`. Don't edit it from this project.
- The sample record will live at `sample.1010drones.com` (to be confirmed). The homepage and thanks page link to it.
- The lead tracker is in Notion: "1010 Drones — Lead Tracker."
