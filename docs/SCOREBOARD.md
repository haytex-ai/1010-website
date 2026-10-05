# Scoreboard

The website is done. These numbers are the job now. Review every Sunday night.

## The five weekly numbers
| Number | Counts when |
|---|---|
| Calls made | You dialed a GC decision-maker (owner, VP Ops, precon, PM). Voicemails count. |
| Conversations | You actually talked about their jobs. |
| Free maps booked | A date and site are set for a baseline flight. |
| Maps flown | Flown and the link delivered within 3 business days. |
| Retainers signed | A GC agreed to the monthly Site Record on at least one job. |

**The one number to protect:** free maps booked per week. Starting target: **3 per week.** Raise it once you hit it two weeks in a row.

## Notion setup

### 1. Lead Tracker (existing "1010 Drones — Lead Tracker")
Make sure it has these properties:
- **Status** (select): New → Called → Conversation → Map booked → Flown → Review call → Retainer · Lost
- **Source** (select): card, cold-email, call, linkedin, referral, direct (matches the `source` field in lead emails)
- **Company**, **Contact**, **Mobile**, **Email**, **Job location**
- **Jobs running** (number), **Next step** (text), **Next step date** (date)
- **Map delivered** (date) and **Flight date** (date), to prove the 3-business-day guarantee

Views: "Pipeline" board grouped by Status; "Follow up" table filtered to Next step date ≤ today.

### 2. Weekly Scoreboard (new database)
- **Week of** (date, Monday)
- **Calls made**, **Conversations**, **Free maps booked**, **Maps flown**, **Retainers signed** (numbers)
- **Target: maps booked** (number, default 3)
- **Hit target?** (formula): `if(prop("Free maps booked") >= prop("Target: maps booked"), "Yes", "No")`
- **Talk rate** (formula): conversations ÷ calls
- **Book rate** (formula): maps booked ÷ conversations
- **Notes** (text): what worked, what to change next week

Views: table sorted newest first; a chart of maps booked by week if available.

## Weekly review (10 minutes)
1. Fill in this week's row from the Lead Tracker.
2. Did you hit the target? If not, what got in the way?
3. Which source produced conversations? Do more of that next week.
4. Set next week's calls-made number.
