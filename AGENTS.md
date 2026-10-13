<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep OPTIVA translations, market pricing and validated WhatsApp message generation in the browser-safe src/lib/optiva.ts module; one source prevents language and price drift.
- Shared site navigation, footer and language state belong in the root shell with content routes below it; homepage anchors are intentional because the requested homepage is one long scrolling experience.
- Contact inquiries prepare WhatsApp URLs client-side without persisting business details; no server or paid service is required for the requested flow.
- Keep Netlify runtime selection conditional on its build environment so the standard Lovable deployment remains compatible.
