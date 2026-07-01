# Calculus 1 Slide Guide

Use this guide before creating or editing MT1003 Calculus 1 Slidev decks.

## Source Order

1. Read `content/_index.md`, `content/readings.md`, and `content/schedule.md` before choosing textbook references.
2. Use the course reading spine:
   - Active Prelude to Calculus / Active Calculus: lecture preparation, concepts, and in-class activity spine.
   - OpenStax Calculus: main student reading and routine practice.
   - Stewart Calculus: extra practice, computational fluency, and exam-style problems.
   - Instructor notes: local coverage and examples when the topic goes beyond the Active Calculus core.
3. Do not invent or substitute different textbooks when the course reading map already names the sources.

## Slide Reference Pattern

Follow the pattern in `slidev/01-functions-sequences/slides.md`.

- Put a `<div class="refs">...</div>` footer on slides where students benefit from a reading/practice cue.
- Use bilingual spans:

```html
<div class="refs">
<span class="lang-en">Read: Active Calculus ...; OpenStax ...; Stewart ...</span>
<span class="lang-vi">Đọc: Active Calculus ...; OpenStax ...; Stewart ...</span>
</div>
```

- Title slides should point to `../../readings/` and name the course source roles.
- Concept slides should name the relevant Active Calculus and OpenStax sections.
- Practice slides should name the practice anchors, usually OpenStax and Stewart.
- If local TeX or instructor materials supply examples, cite them only as instructor notes or local examples, not by source filename.

## Style And QA

- Keep the existing bilingual EN/VI toggle, footer style, cards, and compact math layout.
- Avoid final-only bibliographies as the sole source cue; students should see useful reading references near the relevant topic.
- After edits, run the deck build, Zola build, screenshots of dense slides, and a full overflow sweep.
