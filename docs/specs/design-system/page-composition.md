# Page Composition

## Objective

Define how the homepage structure should be visually organized section by section.

This file should convert the content structure in `docs/specs/homepage/skeleton.md` into layout and presentation rules.

## Global Layout

Status: `Decided`

Define:

- Overall page width strategy.
- Whether sections share one container width or vary by section.
- Sticky navbar behavior.
- Vertical rhythm between sections.
- Mobile-first breakpoint strategy.

Final decisions:

- Use one main page container width for most sections: `var(--container-max)`.
- Use a narrower measure for long text blocks inside hero and About: `var(--container-narrow)`.
- Navbar should be sticky.
- Navbar background should become slightly more opaque on scroll.
- Sections should be stacked in a single editorial flow with divider-assisted transitions rather than isolated panels.
- Breakpoints:
  - Mobile base: under `48rem`
  - Tablet: `48rem` and up
  - Desktop: `72rem` and up

## Navbar

Status: `Decided`

Decide:

- Height and horizontal padding.
- Whether the navbar is transparent, solid, or blurred.
- Whether the CTA looks like a button or a text action.
- Mobile navigation pattern.

Final decisions:

- Height: `4.5rem`
- Horizontal padding: follow global container padding
- Navbar starts with a lightly translucent warm background over the page canvas
- On scroll, increase opacity and add a bottom divider
- CTA should look like a quiet button, not a loud filled promo element
- Mobile navigation pattern:
  - show brand, menu toggle, and contact CTA priority
  - reveal navigation in a simple vertical panel below the bar
  - avoid fullscreen takeover unless implementation simplicity requires it

## Hero

Status: `Decided`

Decide:

- Whether the hero is single-column or split layout.
- How the intro line, role line, and supporting paragraph stack.
- Whether proof items are inline, chips, or a compact list.
- Whether the hero includes any background treatment.

Implementation guardrails:

- The headline must dominate the first viewport.
- CTAs must remain visible without scrolling.
- The hero should not become a generic centered landing-page block unless that is explicitly chosen.

Final decisions:

- Use a single-column composition on mobile and a restrained two-zone composition on desktop.
- Left zone carries intro line, role line, supporting paragraph, and CTAs.
- Right zone may carry proof items and a compact metadata block, not an illustration.
- Intro line should read as a small editorial lead-in.
- Role line is the visual anchor and should use the display typeface.
- Supporting paragraph should sit on a narrow measure and feel dense but readable.
- Proof items should be inline chips on mobile and a compact vertical list on desktop.
- Use a subtle background treatment only:
  - soft tonal transition
  - no heavy blobs, no large abstract artwork

Hero desktop rule:

- The hero should fill most of the first viewport without forcing content below the fold to disappear completely.

## About Me

Status: `Decided`

Decide:

- Whether this section is paragraph-led or mixed with highlights.
- Whether the "Ask me" block is inline, aside, or badge-like.

Final decisions:

- This section is paragraph-led with a compact highlight row below.
- The "Ask me" block should behave like a small aside or callout line, not a badge cloud.
- Keep this section visually light so it acts as a transition from hero to experience.

## Experience

Status: `Decided`

Decide:

- Timeline layout vs stacked editorial entries.
- How company, period, and related roles are visually grouped.
- Whether project links appear inline or in a secondary row.

Implementation guardrails:

- Avoid making each experience item a heavy card by default.
- The role title should remain the primary visual anchor.

Final decisions:

- Use stacked editorial entries, not a visual timeline.
- Each item should follow this order:
  - role title
  - company row with company name and period
  - concise description
  - secondary rows for related roles and related projects
- Company and period should share one metadata line on larger screens.
- Related roles should be compact chips or inline labels.
- Related projects should appear as a secondary link row below the description.
- Separate entries with dividers and vertical spacing rather than card borders.

## Projects

Status: `Decided`

Decide:

- Grid vs stacked feature list.
- How summary, bullet points, and skills are prioritized.
- How featured projects differ from the future archive page.

Implementation guardrails:

- Homepage projects should feel curated, not exhaustive.
- Skills should not overwhelm the summary.

Final decisions:

- Use a two-column grid on desktop and a single-column stack on smaller screens.
- Each project appears as a restrained surface block with light border or tonal background, unlike experience which remains flatter.
- Prioritize in this order:
  - title and year
  - summary
  - 2 to 4 strongest bullets
  - links
  - skills
- Homepage featured projects should feel more designed than experience entries, but still avoid heavy showcase-card styling.
- Skills should be shown as grouped chips limited to the most relevant set per project on the homepage.
- Homepage project cards should remain summary-first and should not expand inline to reveal the full project record.
- If a project has more detail than the homepage card should show, use a `Read more` link that navigates to the dedicated project page rather than a dropdown or accordion inside the homepage grid.

## Education

Status: `Decided`

Decide:

- Whether education and courses appear as two columns or two stacked groups.
- How much visual weight this section receives relative to projects and experience.

Final decisions:

- Use two stacked groups by default:
  - Education
  - Courses and Certificates
- On wider screens, these may shift into two columns if content balance supports it.
- Keep this section lighter than experience and projects.
- Use concise entries with restrained metadata styling.

## Skills and Languages

Status: `Decided`

Decide:

- Chip cloud vs grouped list blocks.
- Whether competency is color-coded, icon-based, or text-based.
- How languages are separated from technical skills.

Implementation guardrails:

- Keep scanning efficient.
- Avoid turning this section into a logo wall.

Final decisions:

- Use grouped list blocks rather than a free-form chip cloud.
- Each category gets a short heading with chip-based items beneath it.
- Competency should be shown by a small text or dot marker system, not large progress bars.
- Languages should be a distinct internal subgroup at the end of the section.
- Use logos only for highly recognizable technologies and only when they improve scanning.

## Contact Block

Status: `Decided`

Decide:

- Whether the close is minimal or CTA-forward.
- Whether contact actions are inline links or larger buttons.
- Whether this block visually contrasts with earlier sections.

Final decisions:

- The close should be minimal but CTA-clear.
- Use a slightly stronger surface contrast than standard text sections so the ending feels deliberate.
- Contact actions should be explicit labeled links, with one primary email action and secondary profile links.
- Avoid a large multi-card contact layout.

## Responsive Notes

Status: `Decided`

- Mobile behavior should be specified for every major section before implementation.
- Desktop enhancement should not require different content, only different composition.
- On mobile, keep section density but reduce simultaneous columns.
- On mobile, preserve typography contrast first and ornamental layout differences second.
