# Decisions

Why the site is built the way it is. Change these on purpose, not by accident.

**Static HTML on Cloudflare Pages instead of Framer.** Free, fastest possible load, domain already on Cloudflare, and every edit goes through Claude Code anyway. Framer only wins if Hayden needs to edit visually without Claude.

**Separate repo from the client portal.** Different deploy targets (Pages vs Workers), different risk (marketing copy vs client data), and focused context for Claude Code.

**Web3Forms instead of Make/Notion for now.** Zero setup, emails leads straight to hayden@1010drones.com. Upgrade to Make → Notion when lead volume makes manual entry a real cost.

**No phone number.** Avoids spam calls. Hayden calls every lead back. Click-to-call was cut from the original spec; the sticky bar became Claim + Email.

**"Free baseline map" instead of "free founding flight."** Most early jobs will already be underway, so Day Zero flights are rare. "Baseline" works at any stage and makes the free flight the first entry of the paid record ("your baseline becomes month one"), which makes month two feel necessary. "One per company" is the honest limit.

**Conditional guarantee: "On time, or that month is free."** The strongest Hormozi lever that still reads professional to a GC. Backed by a 3-business-day turnaround Hayden is confident he can hold.

**No Hormozi infomercial moves.** No fake dollar values, countdowns, all-caps hype, or exclamation points. GCs trust plain words and real maps. Hormozi principles kept: one outcome, proof up top, one clear CTA repeated, real scarcity, risk reversal, objections answered in the open.

**Before/after slider at launch.** The aligned flights were ready, and change over time is the actual product.

**Design system conflicts resolved (design system wins except where noted):**
1. Parchment page with charcoal bands (design system defaults to dark; light reads better on a phone in sun and feels like a document, not a tech app).
2. 0–2px corners (design system), not the spec's 4–12px.
3. Uppercase only for the wordmark, date stamps, and plate labels. Headings sentence case, no eyebrows.
4. Rust on buttons only, so the CTA is the only orange on the page. Icons are ink.

**Title block under the map.** Borrowed from engineering drawing sheets. Grounds the brand in the construction/utility world and frames the map as a record.

**Fourth question added ("What's the catch with the free map?")** to remove the free-offer suspicion and set expectations on pricing without listing it.

**8th deliverable, "Files you own."** Real closeout value, and it keeps the Procore claim accurate (download and drop in, not integrate).

**Self-hosted fonts.** No Google request: faster, and the privacy page can say the site doesn't track across other sites.
