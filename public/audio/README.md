# Demo Audio

## Included

- `demo-nail.mp3` — real recorded sample call (2:02, mono, 128 kbps CBR).
  Currently used **only by the Hero play button**, which shows no transcript.
  It plays through in full — the player applies no duration cap.

  ⚠️ Its spoken content does **not** match the gel-manicure script shown in the
  Demo section's "Nail Salon" tab, so that tab does not play it.

## Not wired up yet

**All four** Demo tabs (`nail`, `massage`, `restaurant`, `clinic`) have **no
player**. They show a "Demo audio coming soon" notice instead, so we never ship
a dead control or audio that contradicts the transcript shown beside it.

To enable one:

1. Drop the file in this folder (or reuse `demo-nail.mp3` for the nail tab).
2. **Listen to it against that tab's script** in `locales/*.json`
   (`demo.tabs[].lines`) and confirm they match.
3. In `components/sections/demo.tsx`, change that tab's `audio: null` in
   `TAB_META` to the file path. The player appears automatically.

Expected filenames: `demo-nail.mp3`, `demo-massage.mp3`,
`demo-restaurant.mp3`, `demo-clinic.mp3`.

The notice copy lives in `locales/*.json` under `demo.audioComingSoon` and
`demo.audioComingSoonSub` (all four languages).

## Converting a recording

`demo-nail.mp3` was converted from an `.m4a` phone recording with:

```
ffmpeg -i input.m4a -vn -c:a libmp3lame -b:a 128k -ar 44100 -ac 1 demo-nail.mp3
```

Use the same settings for the remaining clips so playback stays consistent.
