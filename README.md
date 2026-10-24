# DCI monitoring slides

Build locally with `npm ci && npm run build`; the GitHub Pages workflow builds with `--base /2026-cepc-dci/`.

The tab icon is `public/cepc-icon.png` (transparent, 256×256). Its full-size transparent logo is `public/images/cepc-logo-transparent.png`, sourced from the [CEPC official website](http://cepc.ihep.ac.cn/images/CEPClogo.png). The official PNG already contains transparency; the export preserves its white lettering, trims transparent margins, and pads the icon to a square.

The cover uses the original dark, text-free IHEP symbol at top left and CEPC at top right, at equal height with their aspect ratios preserved. `public/images/ihep-symbol-transparent.png` is extracted from the symbol region of the [official IHEP header](https://english.ihep.cas.cn/images/logo-ihep.png), with the white matte removed; no color inversion is applied.

## Grafana during a presentation

Slide 10 shows the user-supplied `SAMtest.png` and `TPC-matrix.png` side by side; slide 13 shows `logs.png`. The images are copied unchanged into `public/images/` at the user's request, replacing the previous iframe examples. They are historical snapshots, not current status; no shared observation window is implied. Clicking a screenshot opens its full-resolution image. The SAM screenshot shows summaries and probe records; the TPC screenshot explicitly shows pull/push site-pair matrices.

Slide 5 includes the user-supplied Grafana interface recording as `public/grafana-demo-trimmed.mp4`, using the same muted, looping player style as the DIRACx report. The source `2026-10-23 15-09-44.mkv` is preserved outside this repository: its metadata says 137.766 s but readable video ends at about 121.4 s. The recording uses the interval 5–111.4 s, speeds it up by 1.5×, removes the audio stream, and preserves 1600×2560 resolution (output: 71 s). The dci-agent slide is based on the local `12th-diracx-workshop/` report; it does not copy its internal screenshots or recording.

The full-dashboard links remain available for live inspection. Open them in a separate tab and sign in if needed; confirm the selected time range and query results before describing live status. The deck contains no Grafana token. Do not add credentials or additional restricted data to work around access controls. Any Grafana access-policy or cookie change belongs to the production operator and is outside this slide repository.
