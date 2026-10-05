> **Status (Oct 2026):** This is the original v1 spec, kept for reference. The live site follows it except for the changes below. `CLAUDE.md` is the current source of truth.
>
> **Changed during the build:**
> - Built as static HTML on Cloudflare Pages, not Framer. The Framer AI prompts (section 9) no longer apply.
> - No phone number anywhere. Header shows email; sticky bar is Claim + Email; thank-you page offers email.
> - Offer renamed: "free founding flight" → **free baseline map** (works on jobs already underway; becomes month one). Limit is "one per company," not "3 founding flights."
> - Turnaround stated as **3 business days**. Guarantee added: **"On time, or that month is free."**
> - Before/after slider shipped at launch (residential subdivision, Flight 1 vs Flight 2) with an engineering-style title block under it. No phone mockup.
> - Credential facts grid added under the hero (Part 107, Insured, 1,000+ hours, 3 business days).
> - Fourth objection added: "What's the catch with the free map?" Eighth deliverable added: "Files you own." Day Zero folded into "Baseline flight."
> - Founder section uses a spec list instead of a photo until the photo is shot.
> - Lead routing: Web3Forms → email (Make/Notion deferred).
> - Design system decisions: parchment page, 0–2px corners, uppercase only in wordmark/stamps/plate labels, rust on buttons only.
> - "Other services" footer link omitted until that page exists.

---

# 1010 Drones Homepage Build Spec

Groundbreak-to-Closeout Site Record. Version 1, October 2026.

**How to use this file:** Build in Framer from sections 3 through 6. Final copy is in the gray code blocks; paste it exactly as written. Use Framer AI one section at a time with the prompts in section 9. Never paste the whole file into Framer AI at once, because it will turn it into a generic template.

Anything marked **[CONFIRM]** has to be true before the page goes live.

---

## 1. The job of this page

One page, one offer, one action.

- **Who it's for:** the owner, VP of Ops, or precon lead at a Central Mississippi GC running 3 to 10 jobs.
- **Where visitors come from:** your outreach (cold emails, the Thrash leave-behind card, links you text). GCs aren't Googling this, so the page's job is to close people who already know your name.
- **The one action:** claim a free flight. Calling or texting you counts as the same action, because both start a conversation.
- **What success means:** qualified calls with GCs who fit the avatar. Page visits don't matter.

---

## 2. The rules and why they're here

### From Hormozi's Short

1. **The headline promises one clear outcome.** A GC decides in about three seconds whether the page is for him, so "We're a drone company" loses and "Proof of every phase of your build" wins.
2. **The hero image proves the promise.** Use a real 1010 map. A stock photo of a drone tells him nothing.
3. **The CTA says exactly what he gets.** "Claim a free flight of your job" tells him what happens. "Learn more" doesn't.
4. **Only ask what you need to qualify him.** If the form goes past five fields, split it into steps. This form has exactly five fields in one step, and everything else gets asked on the call.
5. **Say why he should hand over his information.** That rule is for lead magnets, so here it becomes a "What happens next" box. Not knowing what happens after he hits submit is what actually stops a GC.
6. **Answer the top three objections, most common first.** Show the answers in full and don't hide them in drop-downs.
7. **Keep the design minimal, with social proof lower on the page.** The proof sits below the offer, and there's no logo wall until you've earned one.
8. **Mobile first, fast, compressed, with disclaimers.** Most GCs will open this on a phone in a truck.
9. **Cut anything that doesn't raise qualified opt-ins.** That includes every section, sentence, and image.

### Added conversion moves

- **No navigation menu.** Every menu link is a way off the page. The header has the logo and phone number only.
- **CTA three times:** in the hero, after the offer, and at the bottom. He should never have to scroll back up to act.
- **Sticky bar on mobile:** claim and call buttons that stay on screen.
- **Click-to-call everywhere.** Construction guys call more than they fill out forms.
- **Real scarcity.** "3 free founding flights" is true because your hours are limited. Never fake it.
- **Risk reversal.** "Month-to-month, cancel anytime, keep every link forever" removes the fear of getting locked in.
- **Speed to lead.** Your phone alerts you the moment a form comes in.
- **Link preview image.** When a PM texts your link to his owner, the preview card is the first thing the owner sees, so it needs to sell.

---

## 3. Page structure (top to bottom)

```
[Header]           Logo, phone number, small claim button
[1 Hero]           Headline, subhead, CTA, map proof
[2 Claim]          What happens next + 5-field form
[3 Offer]          What you get every month, risk reversal, CTA #2
[4 Questions]      Three objections, answered in full
[5 Founder]        Who's flying, recent flights, final CTA
[Footer]           Service area, credentials, contact

[Mobile sticky bar]  Claim free flight | Call
[/thanks]            Thank-you page
```

### Voice rule

Use "we" for the company (we fly, we deliver, we travel). Use "I" for anything personal: the call, the flight, the founder block. That tells a GC he's dealing with one accountable person, which is your edge over a national outfit.

---

## 4. Section specs and final copy

### Header

**Purpose:** your brand plus an instant way to call. Nothing else.

**Desktop:** logo on the left. On the right, the phone number as a text link, then a small outline button that jumps to the form (#claim). Keep it thin and sticky on scroll.

**Mobile:** logo on the left and a phone icon button on the right that dials you. There's no hamburger menu. The header scrolls away, and the sticky bottom bar takes over.

```
Phone: (601) XXX-XXXX
Button: Claim free flight
```

---

### 1. Hero

**Purpose:** in three seconds he knows what this is, sees proof it's real, and knows what to click.

**Desktop:** two columns, with copy on the left (about 45%) and the map proof on the right (about 55%). Everything, including the CTA, has to sit above the fold at 1280×720.

**Mobile:** headline, then subhead, CTA button, microcopy, map proof, and the sample link, in that order. The CTA button must be visible without scrolling on a 390×844 screen (a standard iPhone).

**Type:** H1 at 36 to 40px on mobile and 56 to 64px on desktop, in Libre Franklin at a heavy weight. Keep the headline one color, with no single highlighted word.

```
H1:
Proof of every phase of your build — before it's buried.

Subhead:
Monthly drone maps of every outdoor job you're running. Check all your sites from your desk, send the owner one link, and keep a dated record of what got buried. We fly and deliver. Your team learns nothing new.

Button:
Claim a free flight of your job

Microcopy (under button):
3 free founding flights in the Jackson metro. Farther out? We travel the Southeast. Just ask.

Text link (under the map):
Open a live sample
```

#### Hero proof

The map is the one bold, memorable element on the page. Keep everything around it quiet.

**The target is a before/after slider.** It's the only visual that shows the real product, which is change over time. A single map is a nice picture; a slider shows "what changed," and that's what he pays for. Don't delay launch for it, though. Ship version 1 with a single map, and swap in the slider when the second flight is done. Build the hero frame at the same size for both so the swap takes five minutes.

**Version 1: single map (launch with this if the second flight isn't ready)**

- Use your cleanest proof flight. The residential development or the hotel will read best.
- **Desktop:** a large map in a rounded frame, with a phone mockup overlapping the bottom-right corner showing the same map. The large map shows the detail; the phone shows that it opens on his phone.
- **Mobile:** the map full width with no phone mockup (a phone inside a phone looks silly).
- Put two small chips on the image, one with the capture date (`Captured Sept 3, 2026`) and one saying `Opens without a login`.

```
Caption: Actual 1010 site map. Opens without a login.
```

**Version 2: slider (swap in when ready)**

- Two maps of the same site, about 30 days apart.
- **Alignment matters most.** The Air 2S has no RTK, so the two maps will shift a few feet between flights. Line them up on fixed landmarks (a curb, a building corner, a road edge) in Photoshop, Affinity, or Photopea, then crop both to the identical frame and pixel size. If you skip this, the slider looks like it's jumping and the effect dies.
- Fly the same pattern, altitude, and coverage both times. Fly at the same time of day if you can, so the shadows match.
- The handle starts at 50% and is at least 44px for a thumb. Dragging must work on touch, and nothing autoplays.
- Put a date chip in each top corner (`Sept 3` and `Oct 2`).
- **Aspect ratio:** 4:3 on desktop and 4:5 on mobile, so the taller image fills the phone screen.
- Find a ready-made component by searching the Framer Marketplace for "before after slider."

```
Caption: Same site, one month apart. Actual 1010 maps.
```

**Image specs (both versions):** WebP format, 250KB or less per image, about 1600px wide for desktop and 900px for mobile.

---

### 2. Claim your free flight (anchor: #claim)

**Purpose:** remove the "what happens after I submit?" fear, then capture the lead.

**Desktop:** two columns, with the three steps on the left and the form card on the right.

**Mobile:** heading, then the three steps in compact form, then the form. Make the button full width.

The numbers on the steps are justified because this really is a sequence.

```
H2:
Claim your free flight

Step 1:
I call you within one business day to confirm the site and access.

Step 2:
I fly your job, insured and out of your crew's way. [CONFIRM insurance]

Step 3:
You get your map link within 72 hours. If it's useful, we talk about covering the whole build. [CONFIRM 72 hours]
```

**Form fields** (single column, all required):

| Field | Input type | Placeholder |
|---|---|---|
| Name | text, autocomplete="name" | Your name |
| Company | text, autocomplete="organization" | Company |
| Mobile | tel, autocomplete="tel" | Mobile number |
| Email | email, autocomplete="email" | Work email |
| Job location | text | City or nearest town |

```
Button:
Claim my free flight

Under button:
Outdoor commercial jobs only. Not survey work.

Consent line (small):
By submitting, you agree Hayden can call or text you about your job.
```

**Form rules:**

- Input text has to be 16px or larger, because anything smaller makes iPhones zoom in, which feels broken.
- Error messages appear inline and in plain words, for example `Add a mobile number so I can call you.`
- Don't add a CAPTCHA unless spam actually shows up.
- On submit, go to /thanks.

---

### 3. What you get every month

**Purpose:** show the whole offer so the free flight feels like the first step of something real.

**Desktop:** a two-column list. **Mobile:** a single column. Use thin rules between items instead of shadowed cards. Use simple line icons in the rust accent, one per item.

```
H2:
What you get every month

Intro:
The Groundbreak-to-Closeout Site Record: one permanent link for the life of your build.

Items (bold label, then one line):

Day Zero flight
Before dirt moves. Your baseline.

Monthly site map
The whole site from above, dated.

Same-spot photos
Same angles, every month.

60-second progress clip
Ready to send to the owner.

"What Changed" one-pager
The month on one page.

Cover-Up flights
Before pours and backfill. Proof of what's underneath.

One permanent link
Everything in one place. No login.

Risk reversal (charcoal strip, parchment text):
Month-to-month. Cancel anytime. You keep every link forever.

Multi-job line:
Running more than one job? Each site gets its own record. Start with one.

Button:
Claim a free flight of your job
```

**Not on the page:** the Pursuit Kit. Mention it on the call. One offer per page.

---

### 4. Questions GCs ask

**Purpose:** kill the three fears that stop a submit. Show all three answers open, with no accordion.

```
H2:
Questions GCs ask

"Our supers already take photos."
Photos show a corner. Our map shows the whole site from above, same view every month, so you see exactly what changed. View it all on your job's private link, or download the files and drop them into Procore.

"Who's liable if something happens on my site?"
FAA Part 107 certified and insured. You get a certificate of insurance before the first flight. I follow your site safety rules, check in with the super, and stay clear of active work. [CONFIRM insurance]

"Is this survey-grade?"
No, and I won't pretend it is. This is a visual record for progress, owner updates, and documentation. It doesn't cover boundaries, staking, or volumes. That's your surveyor's job.
```

---

### 5. Who's flying your job

**Purpose:** put a real, local, accountable face behind the offer, then show the work.

**Desktop:** your photo on the left at 4:5, with the text on the right. Below that, three map thumbnails in a row.

**Mobile:** photo, then text, then the thumbnails stacked.

**The photo:** a real job site, with you holding the drone or controller and wearing a vest. Use natural light. Don't use a posed studio shot or a sunglasses selfie. You can shoot this in 20 minutes.

```
H2:
Who's flying your job

Body:
Hayden Moore. 1,000+ commercial inspection flight hours. Aviation degree, FAA Part 107. Based in Brandon. I drive to your site. You deal with me directly.

Thumbnail row heading:
Recent flights

Thumbnail captions:
Hotel site, [Town]
Residential development, [Town]
Golf course, [Town]

Button:
Claim a free flight of your job

Under button:
Or call or text Hayden at (601) XXX-XXXX
```

Don't name any past employer. Don't add a client logo strip until you have paid clients and their permission.

---

### Footer

Use a charcoal background with parchment text, and put each item on its own line.

```
1010 Drones

Based in Brandon, MS
Serving Central Mississippi
Traveling across the Southeast

FAA Part 107 certified
Insured [CONFIRM]
Visual documentation only, not surveying

hayden@1010drones.com
(601) XXX-XXXX

Links: Other services   Privacy

© 2026 1010 Drones
```

The Other Services page, with Camp Maps under it, is linked only from here.

---

### Mobile sticky bar

**Behavior:**

- It appears once he scrolls past the hero CTA, so it doesn't duplicate the hero button.
- It hides while the #claim form is on screen, so it never covers the form.
- If Framer's scroll triggers get fiddly, keeping it always visible below the hero is acceptable.

**Layout:**

- Height is 64px plus the iPhone safe-area padding at the bottom.
- The background is charcoal, with a thin top border.
- The left button is rust and about 65% wide; it jumps to #claim.
- The right button is an outline and about 35% wide; it dials your number.

```
Left button:  Claim free flight
Right button: Call
```

---

### Thank-you page (/thanks)

**Purpose:** confirm the request, set the expectation, and keep the momentum. Mark it noindex and give it no other links.

```
H1:
Got it. I'll call you within one business day.

Body:
Want to move faster? Call or text me now at (601) XXX-XXXX.

To keep the call quick, have these handy:
- The job address or nearest cross street
- What stage it's in: dirt, pad, or going vertical
- Who should get the map link

Text link:
Open a live sample
```

---

## 5. Design system

The brand is locked, so follow it exactly.

**Tokens:** use the exact 1010 tokens from the Claude Design system rather than eyeballing the colors.

**Type:**

- Libre Franklin for everything.
- H1: 56 to 64px on desktop, 36 to 40px on mobile.
- H2: 36 to 40px on desktop, 28px on mobile.
- Body: 18px on desktop, 17px on mobile.
- Microcopy: 14 to 15px, and never smaller.
- Use sentence case. No all-caps labels, and no little eyebrow text above headings.

**Color:**

- Parchment is the main background. Charcoal is for the footer, sticky bar, and risk-reversal strip.
- Rust appears only on buttons, icons, and the slider handle. Because it's the only accent, the buttons are the first thing the eye finds.

**Layout:**

- Left-aligned text, with lines no longer than about 640px.
- Section padding of 96 to 120px on desktop and 56 to 72px on mobile.
- Generous white space. The map is the hero, so give it room.

**Buttons:** rust fill with parchment text, 56px tall, and a small corner radius (4 to 6px). That reads industrial rather than app-like. On hover, darken slightly.

**Images:** 8 to 12px corners and a 1px charcoal border at low opacity.

**Motion:** none, or one subtle fade on the hero map at load. No animation on every section.

**Never use:** gradients, drone stock photos, sky backgrounds, animated number counters, carousels, chat widgets, popups, arrows on button text, or cookie banners unless legally required.

---

## 6. Speed, mobile, and search basics

**Performance:**

- The hero image is 250KB or less in WebP. Compress every other image too, and lazy-load anything below the fold.
- Run PageSpeed Insights on mobile and aim for 90 or above.
- Test on a real iPhone and a real Android phone over cellular, not Wi-Fi.
- Tap targets are at least 44px, and form inputs are at least 16px.

**Page title:**

```
Drone Site Progress Maps for Mississippi Contractors | 1010 Drones
```

**Meta description:**

```
Monthly drone maps of your outdoor job. One permanent link for your owner, PMs and supers. Based in Brandon, MS. Free founding flights in the Jackson metro.
```

**Link preview image:** 1200×630, with your best map and the text "Proof of every phase of your build." Test it by texting the link to yourself and checking how the preview looks.

**Favicon:** the 1010 mark.

**Privacy page:** a plain one-pager covering what you collect, why, that you never sell it, and how to contact you.

---

## 7. Lead routing (speed to lead)

**Goal:** you know about a lead within a minute, and it lands in Notion with no copy-paste.

```
Framer form
   → Make webhook
       1. Create a row in Notion "1010 Drones — Lead Tracker"
          (name, company, mobile, email, job location, source, date, status = New)
       2. Push notification to your phone (Make mobile app or Pushover)
       3. Optional: auto-confirmation email from your business Gmail
```

**Setup notes:**

- Turn on Framer's native email notification too, as a backup.
- Check Framer's current form destination options before you build, since the details change.
- Send three test submissions and confirm each one hits Notion and your phone.

**Source tracking:** give every channel its own link.

```
1010drones.com/?utm_source=thrash-card
1010drones.com/?utm_source=cold-email
1010drones.com/?utm_source=linkedin
```

The QR code on the leave-behind card uses its own link. Record the source in Notion. If Framer can't capture it automatically, ask "How'd you hear about us?" on the call.

---

## 8. The call (what happens after the form)

Call within one business day, and same day when you can.

**Ask:**

1. Where's the job, and what stage is it in?
2. How many outdoor jobs are you running right now?
3. Who needs to see progress: the owner, the PMs, you?
4. How are you documenting progress today?
5. Who besides you signs off on something like this?

**Before you hang up:** schedule the flight and a 15-minute review call for the day you deliver the link. If he won't book the review call, he doesn't get the free flight.

**On the review call:** open the map together, then present the monthly Site Record for that job. End with: "How many other outdoor jobs do you have running?"

---

## 9. Framer AI prompts (one section at a time)

### Paste first: global context

```
Landing page for a Mississippi drone mapping company that sells monthly site progress maps to commercial general contractors. Industrial, utility brand feel (think Caterpillar or USGS, not tech startup). Font: Libre Franklin only. Colors: charcoal, parchment, and one rust accent used only on buttons and icons. Minimal, generous white space, left-aligned text, thin divider lines, small button corner radius. No gradients, no stock photos, no carousels, no shadowed cards, no all-caps labels, no arrows on buttons. Mobile-first. Use the exact copy I give you. Do not add, rewrite, or shorten any text.
```

### Hero

```
Build a hero section. Desktop: two columns, copy on the left (45%), a large map image on the right (55%) with a phone mockup overlapping its bottom-right corner. Mobile: stack as headline, subhead, button, microcopy, image, text link, with the button visible without scrolling. Headline is large and heavy. One rust button. Copy: [paste Hero copy block]
```

### Claim

```
Build a section with anchor id "claim". Desktop: three numbered steps on the left, a form card on the right. Mobile: heading, compact steps, then the form with a full-width button. Form fields in one column: Name, Company, Mobile, Email, Job location. Inputs at 16px or larger. Copy: [paste Claim copy block]
```

### Offer

```
Build a section listing seven items, each with a simple rust line icon, a bold label, and one short line. Two-column list on desktop, one column on mobile, with thin divider lines and no cards. Below the list, a full-width charcoal strip with parchment text for the risk-reversal line, then a short line, then a rust button. Copy: [paste Offer copy block]
```

### Questions

```
Build a section with three questions and answers, all shown open, with no accordion. Each question is bold and the answer is regular body text below it. Thin divider lines between them. Copy: [paste Questions copy block]
```

### Founder

```
Build a section with a 4:5 photo on the left and short text on the right on desktop, stacked on mobile. Below it, a row of three image thumbnails with captions, then a rust button with a small line of text under it. Copy: [paste Founder copy block]
```

### Footer

```
Build a charcoal footer with parchment text. Stack the lines in three small groups (location, credentials, contact), then two small links and a copyright line. Copy: [paste Footer copy block]
```

---

## 10. Pre-launch checklist

### Blockers (the page goes live only when all of these are true)

- [ ] Insurance is active and a COI is ready to send
- [ ] The 72-hour turnaround is proven on a real flight, start to finish
- [ ] Business phone number is set up and placed in the header, sticky bar, founder block, thank-you page, and footer
- [ ] A public sample record in the portal opens on a phone with no login
- [ ] Hero map is ready (and the second flight is scheduled for the slider)
- [ ] Founder photo is shot

### Build

- [ ] No navigation menu; Other Services is linked from the footer only
- [ ] CTA appears three times, plus the mobile sticky bar
- [ ] Form → Notion → phone alert, tested three times
- [ ] /thanks page is live and set to noindex
- [ ] Privacy page is live
- [ ] Link preview image tested by texting the link
- [ ] PageSpeed mobile score is 90 or above
- [ ] Tested on a real iPhone and Android over cellular
- [ ] Every claim on the page is true today

### After launch

- [ ] Leave-behind card with its own QR link for the Thrash meeting
- [ ] Page link in every cold email
- [ ] Slider swapped in once the second flight is done
- [ ] "Recent flights" replaced with client logos only after paid work and permission

---

## 11. Cut list (don't add these back)

- About-us essay
- Drone model specs
- "AI-powered" anything
- Full service menu
- Camp Maps
- Entergy or utility language
- Blog
- Navigation menu
- Pricing
- Stock drone photos
- Popups or chatbot
- Testimonials or logos you don't have
