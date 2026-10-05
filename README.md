# 1010drones.com

Marketing site for 1010 Drones. Static HTML in `site/`, deployed to Cloudflare Pages (project `1010drones`).

- Rules and context: `CLAUDE.md`
- Plan: `docs/ROADMAP.md`
- Preview deploy: `npx wrangler pages deploy site --project-name=1010drones --branch=preview`
- Production deploy (after commit + push): `npx wrangler pages deploy site --project-name=1010drones --branch=main --commit-hash=$(git rev-parse HEAD)`
- GitHub: github.com/haytex-ai/1010-website (private)
