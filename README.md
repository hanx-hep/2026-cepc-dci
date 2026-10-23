# DCI monitoring slides

Build locally with `npm ci && npm run build`; the GitHub Pages workflow builds with `--base /2026-cepc-dci/`.

## Grafana during a presentation

Slides 10 (SAM matrix) and 13 (Component Logs) retain scrollable Grafana iframes. Slide 5 includes the user-supplied Grafana interface recording as `public/grafana-demo-trimmed.mp4`, using the same muted, looping player style as the DIRACx report. The source `2026-10-23 15-09-44.mkv` is preserved outside this repository: its metadata says 137.766 s but readable video ends at about 121.4 s. The recording uses the interval 5–111.4 s, speeds it up by 1.5×, removes the audio stream, and preserves 1600×2560 resolution (output: 71 s). The dci-agent slide is based on the local `12th-diracx-workshop/` report; it does not copy its internal screenshots or recording. The deck contains no Grafana token; the live dashboards still require authorization. As checked on 21 October 2026, anonymous dashboard API requests return `403`, so an iframe may show a sign-in screen instead of panels.

Before presenting, open each slide's **Open full dashboard** link in a separate tab and sign in there. Return to the slide and reload it. If the embed remains unauthenticated (cross-site cookies may be blocked), show the full dashboard tab instead. Loading an iframe cannot by itself prove its queries succeeded; check that panels contain data. Slide 10 requests a fixed September 2026 window and is **not** current availability; slide 13 uses a relative 69–70-day-old window.

Do not publish dashboard screenshots or authentication credentials to work around access controls. Any Grafana access-policy or cookie change belongs to the production operator and is outside this slide repository.
