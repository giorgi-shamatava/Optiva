# Deploy OPTIVA on Netlify

1. Export the source project and connect it to a Netlify site.
2. Netlify reads `netlify.toml`: build command `bun run build`, public directory `dist`.
3. The Netlify build environment selects Nitro's `netlify` target, producing the server handler and refresh-safe routing. Nitro generates the platform redirects; do not add a single-page `/index.html` fallback to this server-rendered application.
4. No backend account or paid API is required. Contact forms prepare WhatsApp messages without storing customer inquiries.
5. After deploying, verify `/`, `/privacy`, and `/terms` on direct navigation and refresh, and try a WhatsApp inquiry.

The Netlify configuration is included; a live Netlify deployment has not been performed from this workspace. Review legal information with your business adviser before launch. The device image is an illustrative website concept, not a client portfolio claim.