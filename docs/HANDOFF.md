# Latest handoff
## Ultrawide inner-page sizing (2026-10-08, current)

User requested half-screen proportions on 21:9 displays, excluding homepage. At min-width 1720px, site-theme.css caps the five inner-page section content grids to 1440px using symmetric horizontal padding calc((100% - 1440px)/2). Header/footer content is capped to 1664px with minimum 28px side padding. Full-bleed section backgrounds remain; images and columns stop widening beyond the target width. Existing typography caps, spacing, mobile rules and functionality retained. Five inner-page asset versions updated to 20261008-ultrawide. Homepage files unchanged this round.

Measured ABOUT/CV/GAMES/CONTACT/TIMES content and representative image/row widths at 1720/2560/3440px: stable sizes and no horizontal overflow. 3440x1244 TIMES screenshot inspected. Six-page bilingual five-width regression including 769/768px, navigation/language/menu/eight exact WA clipboard/feedback/PDF passed; no page errors. Real iOS not tested. CNAME and business scripts unchanged. No commit/push/deployment.
Local preview: http://127.0.0.1:8765/. User visual acceptance pending.
