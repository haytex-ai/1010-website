# Roadmap

Check items off as they ship. Add the date. Keep "Now" short.

## Now (this week)
- [ ] **Turn on "Respect Existing Headers" in Cloudflare.** Dashboard → 1010drones.com → Caching → Configuration → Browser Cache TTL. Right now Cloudflare overrides `_headers` and makes phones keep old CSS/JS for up to 4 hours after an edit. (Hayden, ~1 min.)
- [ ] **Clean up the sample record's wording** (portal repo, not here). Its page title says "Site Progress Portal," and its page template has "360° Site Views" and "3D Model" sections. Copy rules 7 and 8 say no "portal" and no 360s. Hide anything the sample doesn't actually show.
- [ ] **Hayden's copy changes** (first Claude Code task).
- [ ] **Slider dates.** Replace "Flight 1" / "Flight 2" stamps with real capture dates (e.g. "May 12" / "Jun 29").
- [ ] **Gmail "Send mail as" hayden@1010drones.com** so replies to GCs don't come from tentendrones@gmail.com. (Hayden, Gmail settings, ~15 min.)
- [ ] **Gmail filter:** subject contains "Baseline map request" → star + mark important + phone notification. Goal: call every lead within the hour.
- [ ] **Confirm the insurance app can issue a COI naming the GC as additional insured.** The page promises a COI before the first flight.
- [ ] **Notion scoreboard live** (see `docs/SCOREBOARD.md`).
- [ ] **Outreach:** calls made, link sent after every conversation with `?utm_source=call`.

## Next (next 2 weeks)
- [ ] Founder photo: real jobsite, vest, drone or controller, natural light, 4:5. Goes in the founder section's right column above the spec list.
- [ ] Leave-behind card for the Thrash meeting with the QR code (`site/assets/qr/card-qr.svg`, links to `/?utm_source=card`).
- [ ] Captions with real towns on the "Recent flights" thumbnails (currently generic). Confirm the subdivision is in Central MS (hero title block says so).
- [ ] Run PageSpeed Insights (mobile) on the live site; fix anything under 90.

## Later (when it earns its place)
- [ ] Web3Forms → Make → Notion Lead Tracker row + phone push (speed-to-lead automation). Only once leads are coming in regularly.
- [ ] Auto-reply email to leads (needs Web3Forms paid plan or the Make route).
- [ ] Swap in a newer before/after pair when a client job has two aligned flights (with permission).
- [ ] "Other services" page (mayors, real estate, events, churches, Camp Maps), linked from the footer only.
- [ ] Client logos/testimonials, only after paid work and written permission.
- [ ] Consider a screened business line (Google Voice / Quo) once volume justifies it.

## Not doing (cut list, don't add back)
About-us essay, drone specs, "AI-powered" anything, full service menu on the homepage, Camp Maps on the homepage, Entergy/utility language, blog, nav menu, pricing, stock drone photos, popups, chatbot, fake testimonials or logos, phone number.

## Shipped
- [x] 2026-10-04 Sample record live at sample.1010drones.com (portal project); homepage and thanks page links now work.
- [x] 2026-10-04 On phones, claim buttons land on the form instead of the steps above it.
- [x] 2026-10-04 Site moved into Git + GitHub (haytex-ai/1010-website, private) and deployed from this repo. Same words and look as before, now one shared stylesheet and script.
- [x] 2026-10 v1 homepage live on 1010drones.com + www (Cloudflare Pages), form confirmed working.
