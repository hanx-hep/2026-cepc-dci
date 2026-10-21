# DCI monitoring slides

Build locally with `npm ci && npm run build`; the GitHub Pages workflow builds with `--base /2026-cepc-dci/`.

## Grafana during a presentation

Slides 9 (SAM) and 12 (Component Logs) retain scrollable Grafana iframes. The GitHub Pages deck does not contain a Grafana token or a copy of restricted dashboard data. As checked on 21 October 2026, anonymous dashboard API requests return `403`, so an iframe may show a sign-in screen instead of panels.

Before presenting, open each slide's **Open full dashboard** link in a separate tab and sign in there. Return to the slide and reload it. If the embed remains unauthenticated (cross-site cookies may be blocked), show the full dashboard tab instead. Loading an iframe cannot by itself prove its queries succeeded; check that panels contain data. Slide 9 requests a fixed September 2026 window and is **not** current availability; slide 12 uses a relative 69–70-day-old window.

Do not publish dashboard screenshots or authentication credentials to work around access controls. Any Grafana access-policy or cookie change belongs to the production operator and is outside this slide repository.
