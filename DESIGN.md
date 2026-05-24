---
name: "Fariz Fahrian Portfolio"
description: "A premium product-minded engineering portfolio for recruiters, clients, and collaborators."
colors:
  canvas: "#ffffff"
  ink: "#111111"
  hero-surface: "#f3f4f6"
  card-surface: "#f9fafb"
  chip-surface: "#ffffff"
  muted-text: "#52525b"
  border-soft: "#e4e4e7"
  border-muted: "#d4d4d8"
  primary-orange: "#ea580c"
  primary-orange-soft: "#fed7aa"
  disabled-surface: "#f4f4f5"
typography:
  display:
    fontFamily: "Crimson Pro, serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Crimson Pro, serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: "normal"
  title:
    fontFamily: "Crimson Pro, serif"
    fontSize: "clamp(1.5rem, 2vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "10px"
  lg: "18px"
  panel: "20px"
  pill: "25px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.primary-orange}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: "8px 40px"
  button-secondary:
    backgroundColor: "{colors.chip-surface}"
    textColor: "{colors.primary-orange}"
    rounded: "{rounded.sm}"
    padding: "8px 40px"
  chip:
    backgroundColor: "{colors.chip-surface}"
    textColor: "{colors.muted-text}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  skill-card:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "16px"
  hero-panel:
    backgroundColor: "{colors.hero-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(24px, 5vw, 80px)"
---

# Design System: Fariz Fahrian Portfolio

## 1. Overview

**Creative North Star: "The Premium Build Sheet"**

The portfolio should feel like an engineer's strongest project brief: crisp, structured, visually polished, and grounded in evidence. It leads with calm product-design taste, then backs that impression with technical clarity, real project context, and readable implementation details.

The system is intentionally light, spacious, and recruiter-friendly. Rounded gray panels, white chips, restrained orange action moments, and soft product-card surfaces create a premium feel without drifting into a trendy SaaS template. The design rejects generic dark developer portfolios, crowded resume density, and decorative motion that distracts from credibility.

**Key Characteristics:**
- Light, soft-neutral surfaces with decisive black/zinc typography.
- Editorial display type for personality, Inter body text for clarity.
- Orange appears as an action color, not as a decorative wash.
- Project and capability surfaces should carry evidence, hierarchy, and context.
- Motion is subtle, state-driven, and never required for comprehension.

## 2. Colors

The palette is a restrained light system: warm-neutral product surfaces, crisp zinc text, and a focused orange accent reserved for actions and small trust signals.

### Primary
- **Action Orange** (#ea580c): Used for primary buttons, action links, icon color, and focus rings. Keep it rare so it reads as intent.
- **Soft Action Orange** (#fed7aa): Used for primary button borders and soft focus/supporting states.

### Neutral
- **Canvas White** (#ffffff): Main page background and chip/card contrast surface.
- **Ink Black** (#111111): Primary reading color for headings and high-emphasis text.
- **Hero Gray Surface** (#f3f4f6): Large rounded section panels, especially the hero and major capability areas.
- **Card Mist** (#f9fafb): Skill cards and elevated content surfaces inside gray panels.
- **Muted Zinc Text** (#52525b): Paragraphs, descriptions, metadata, and secondary labels.
- **Soft Zinc Border** (#e4e4e7): Chips, cards, dividers, and light boundaries.
- **Muted Zinc Border** (#d4d4d8): Hover borders and subtle panel decoration.
- **Disabled Surface** (#f4f4f5): Inactive controls and unavailable states.

### Named Rules

**The Orange Has a Job Rule.** Orange is for action and focus. Do not spread it across section backgrounds, decorative blobs, or generic highlights.

**The Light Engineering Rule.** Default to light, readable surfaces. Do not use a dark terminal aesthetic unless a specific section has a real technical artifact that benefits from it.

## 3. Typography

**Display Font:** Crimson Pro (with serif fallback)  
**Body Font:** Inter (with sans-serif fallback)  
**Label/Mono Font:** Inter; no separate mono font is currently part of the visual system.

**Character:** Crimson Pro gives the portfolio a crafted, premium editorial edge; Inter keeps descriptions, metadata, and technical details legible. The pairing should feel thoughtful and precise, not literary or decorative.

### Hierarchy
- **Display** (600, `clamp(2.25rem, 5vw, 4rem)`, 1.1): Hero headlines and first-impression statements only.
- **Headline** (600, `clamp(2rem, 4vw, 3.5rem)`, 1.14): Major section headings such as capabilities, projects, journey, and contact.
- **Title** (600, `clamp(1.5rem, 2vw, 1.625rem)`, 1.25): Card titles and project names.
- **Body** (500, `1rem`, 1.65): Paragraph copy, project descriptions, and explanatory text. Keep lines near 65 to 75 characters.
- **Label** (500, `0.75rem`, 1.4): Chips, badges, metadata, and short state labels.

### Named Rules

**The Evidence Reads First Rule.** Use display type for entry points, then quickly move into clear body copy and structured details. Do not let oversized typography replace project substance.

## 4. Elevation

The system uses a hybrid of tonal layering and soft shadows. Large sections are defined by gray surfaces and rounded panels; cards use soft shadows only to separate layered content and respond to hover. Depth should feel calm and product-like, not glossy.

### Shadow Vocabulary
- **Card Low** (`box-shadow: 0 10px 15px -3px rgb(9 9 11 / 0.05), 0 4px 6px -4px rgb(9 9 11 / 0.05)`): Default skill card and soft content card lift.
- **Card Hover** (`box-shadow: 0 20px 25px -5px rgb(9 9 11 / 0.10), 0 8px 10px -6px rgb(9 9 11 / 0.10)`): Hover response for cards and clickable surfaces.
- **Card Minimal** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`): shadcn-style utility card baseline.

### Named Rules

**The Flat First Rule.** Structure should come from spacing, typography, surfaces, and borders before shadows. Use shadows for state and hierarchy, not decoration.

## 5. Components

### Buttons

Buttons are confident and compact, with rounded corners and an orange primary action.

- **Shape:** Rounded rectangle, 6px radius.
- **Primary:** Orange fill (#ea580c), white text, 2px soft-orange border, `8px 40px` padding for text buttons.
- **Secondary:** White fill, orange text, orange border.
- **Ghost:** Transparent background and border with orange icon/text.
- **Hover / Focus:** Existing button uses Framer Motion to pull the visual background inward on hover and scales on tap. Focus uses an orange ring. Preserve visible focus states and keep motion subtle.

### Chips

Chips are quiet trust markers, not loud badges.

- **Style:** White fill, soft zinc border, zinc text, 25px radius, `8px 16px` padding.
- **Usage:** Role summaries, capability labels, project metadata, and compact status labels.
- **State:** Current implementation is static. If interactive chips are added, they need visible hover and focus states.

### Cards / Containers

Cards and panels carry the premium product feel of the portfolio.

- **Corner Style:** Large section panels use 20px radius; skill cards use 18px; image frames use 10px.
- **Background:** Major surfaces use Hero Gray Surface (#f3f4f6). Cards inside panels use Card Mist (#f9fafb) or white.
- **Shadow Strategy:** Use Card Low at rest and Card Hover for interactive card states.
- **Border:** Soft zinc borders, usually #e4e4e7 with slightly stronger #d4d4d8 on hover.
- **Internal Padding:** Cards start at 16px and may expand with responsive section padding.

### Inputs / Fields

There is no mature input system in the current portfolio. If fields are introduced for contact or filtering, they should use the same light surface, zinc border, 6 to 10px radius, clear label text, and orange focus ring used by buttons.

### Navigation

The current `Navbar` is a placeholder. Future navigation should remain quiet and utility-first: body font, compact text, visible focus states, and clear active states. Avoid a heavy app-shell feel; this is a brand portfolio, not a dashboard.

### Signature Component

The hero/capability panel is the signature container: a rounded gray field with centered or split typography, a white chip, and embedded visual proof through marquee imagery or skill cards. It should feel like a composed product surface rather than a generic web section.

## 6. Do's and Don'ts

### Do:
- **Do** keep the primary audience in mind: recruiters should understand capability, stack, project credibility, and ownership quickly.
- **Do** use light gray rounded panels (`rounded-[1.25rem]`, #f3f4f6) for major brand moments.
- **Do** use Crimson Pro for expressive headings and Inter for clear technical reading.
- **Do** reserve orange (#ea580c) for actions, focus, and small emphasis.
- **Do** include technical reasoning, business context, constraints, and outcomes in project sections.
- **Do** preserve WCAG AA practical accessibility: contrast, focus states, keyboard navigation, semantic HTML, useful alt text, and reduced-motion support.

### Don't:
- **Don't** create a generic dark developer portfolio that relies on terminal aesthetics without substance.
- **Don't** make crowded resume pages that compress every credential into dense, low-hierarchy blocks.
- **Don't** use trendy SaaS landing page patterns that look polished but lack engineering depth, case-study substance, or personal point of view.
- **Don't** use gimmicky motion, decorative complexity, or interactions that make the portfolio harder to read or navigate.
- **Don't** use gradient text, decorative glassmorphism, side-stripe card accents, or repeated identical icon-card grids.
- **Don't** let animation become required to understand content; support `prefers-reduced-motion`.
