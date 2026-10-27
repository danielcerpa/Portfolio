# antigravity DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 3 · Components: 11
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: subtle

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![antigravity Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a neutral, approachable feel. The light background emphasizes content clarity. Typography pairs **Google Sans Flex** for display/headings with **Google Sans Code** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. Motion is subtle — smooth transitions (150-300ms) ease state changes without drawing attention.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| light-bg | `#f8f9fa` | background | Page background, darkest surface |
| light-bg | `#202124` | background | Page background, darkest surface |
| card-bg-start | `#121317` | surface | Card and panel backgrounds |
| card-bg-end | `#0f1b33` | surface | Card and panel backgrounds |
| text-primary | `#000000` | text-primary | Headings and body text |
| text-muted | `#5f6368` | text-muted | Captions, placeholders, secondary info |
| border | `#3c4043` | border | Dividers, card borders, outlines |
| danger | `#410e0b` | danger | Error states, destructive actions |
| warning | `#3c2000` | warning | Warning states, caution indicators |
| info | `#1a73e8` | info | Informational highlights |
| unknown | `#e8eaed` | unknown | Palette color |
| unknown | `#1557b0` | unknown | Palette color |
| unknown | `#8ab4f8` | unknown | Palette color |
| unknown | `#feefc3` | unknown | Palette color |
| unknown | `#fad2cf` | unknown | Palette color |
| unknown | `#fdd663` | unknown | Palette color |
| unknown | `#f28b82` | unknown | Palette color |
| unknown | `#2d2e31` | unknown | Palette color |
| unknown | `#45474d` | unknown | Palette color |
| unknown | `#bdc1c6` | unknown | Palette color |

### CSS Variable Tokens

```css
--theme-primary-primary: var(--theme-surface-on-surface);
--theme-primary-on-primary: var(--theme-surface-surface);
--theme-button-states-primary-enabled: var(--theme-primary-primary);
--theme-button-states-primary-disabled: var(--palette-grey-10);
--theme-button-states-primary-hovered: var(--palette-grey-900);
--theme-button-states-primary-pressed: rgba(var(--palette-grey-50-rgb),.12);
--theme-button-states-primary-focused: rgba(var(--palette-grey-50-rgb),.2);
--theme-button-states-primary-on-disabled: rgba(var(--palette-grey-1000-rgb),.2);
--theme-secondary-button: rgba(var(--palette-grey-400-rgb),.1);
--theme-button-secondary-hover: var(--palette-grey-15);
--theme-button-secondary-inverse-hover: rgba(var(--palette-grey-600-rgb),.3);
--theme-primary-primary: var(--theme-surface-on-surface);
--theme-primary-on-primary: var(--theme-surface-surface);
--theme-button-states-primary-enabled: var(--theme-primary-primary);
--theme-button-states-primary-disabled: var(--palette-grey-10);
--theme-button-states-primary-hovered: var(--palette-grey-900);
--theme-button-states-primary-pressed: rgba(var(--palette-grey-50-rgb),.12);
--theme-button-states-primary-focused: rgba(var(--palette-grey-50-rgb),.2);
--theme-button-states-primary-on-disabled: rgba(var(--palette-grey-1000-rgb),.2);
--theme-secondary-button: rgba(var(--palette-grey-400-rgb),.1);
```


---

## 3. Typography Rules

**Font Stack:**
- **Google Sans Code** — Heading 1, Heading 2, Heading 3
- **Google Sans Flex** — Body, Caption
- **Courier New** — Code

**Font Sources:**

```css
@font-face {
  font-family: "Google Sans Flex";
  src: url("https://fonts.gstatic.com/s/googlesansflex/v23/t5sJIQcYNIWbFgDgAAzZ34auoVyXkJCOvp3SFWJbN5hF8Ju1x6sKCyp0l9sI40swNJwInycYAJzz0m7kJ4qFQOJBOjLvDSndo0SKMpKSTzwliVdHAy0bxTDHg_ugnAakp8ubycs.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Google Symbols";
  src: url("https://fonts.gstatic.com/s/googlesymbols/v464/HhzMU5Ak9u-oMExPeInvcuEmPosC9zyteYEFU68cPrjdKM1XLPTxlGmzczpgWvF1d8Yp7AudBnt3CPar1JFWjoLAUv3G-tSNljixIIGUsC62cYrKiAk.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Google Symbols";
  src: url("https://fonts.gstatic.com/s/googlesymbols/v464/HhzMU5Ak9u-oMExPeInvcuEmPosC9zyteYEFU68cPrjdKM1XLPTxlGmzczpgWvF1d8Yp7AudBnt3CPar1JFWjoLAUv3G-tSNljixIIGUsC62cW3NiAk.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Google Sans Code";
  src: url("https://fonts.gstatic.com/s/googlesanscode/v22/pxijyogzv91QhV44Z_GQBHsGf5PuWEt-oWZnOk-ljWSpwaFB6rqcd6jvHiMYuic98Akn.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Google Sans Text";
  src: url("https://fonts.gstatic.com/s/googlesanstext/v29/5aUu9-KzpRiLCAt4Unrc-xIKmCU5mE0.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Google Sans Text";
  src: url("https://fonts.gstatic.com/s/googlesanstext/v29/5aUp9-KzpRiLCAt4Unrc-xIKmCU5oPFTrm8.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Google Sans";
  src: url("https://fonts.gstatic.com/s/googlesans/v62/4Ua_rENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RFD48TE63OOYKtrwEIJllpyw.ttf") format("truetype");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Google Sans Code | 5rem | 700 |
| Heading 2 | Google Sans Code | 3.5rem | 700 |
| Heading 3 | Google Sans Code | 3rem | 700 |
| Body | Google Sans Flex | 13px | 400 |
| Caption | Google Sans Flex | .95rem | 400 |
| Code | Courier New | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **Google Sans Code** for body/UI text, **Google Sans Flex** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (1)

**Footer** — `html`

### Navigation (1)

**Navigation** — `html`

### Data Display (3)

**Card** — `html`
- Variants: `actions`, `-default`, `header`, `content`, `icon`

**Badge** — `html`

**List** — `html`

### Data Input (2)

**Button** — `html`
- Animation: 

**Input** — `html`
- State: :focus, :placeholder

### Overlay (1)

**Modal** — `html`

### Media (3)

**Image** — `html`

**Icon** — `html`

**Map/Canvas** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
- **Border radius:** 2px, 4px, 6px, 8px, 9px, 10px, 12px, 14px, 16px, 20px, 24px, 28px, 45px, 48px, 99em, 100px, 999px, inherit
- **Max content width:** 980px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Flat — subtle depth hints

- `0 0 0 2px #1a73e833`
- `0 0 0 1px #f1f3f4`
- `0 0 0 2px #1a73e8`

### Raised — cards, buttons, interactive elements

- `0 1px 3px #1a73e826`
- `0 2px 8px #1213170a`
- `0 2px 8px #00000047`

### Floating — dropdowns, popovers, modals

- `0 4px 12px #0000000d`
- `0 4px 12px #00000026`
- `0 2px 3px 0 rgba(60,64,67,.3),0 6px 10px 4px rgba(60,64,67,.15)`

### Overlay — full-screen overlays, top-level dialogs

- `0 16px 40px #0000001f,0 3px 10px #0000000a`
- `0 14px 36px -4px #00000024,0 4px 12px -2px #0000000f`
- `0 16px 40px #0000008c,0 4px 12px #00000059`

### Z-Index Scale

`0, 1, 2, 3, 4, 5, 10, 30, 90, 99, 100, 102, 986, 990, 991, 999, 1000, 1001, 1002, 1200, 9999, 10000, 99999, 100000`



---

## 7. Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without demanding attention.

### CSS Animations

- `@keyframes delayed-fade-in`
- `@keyframes blink`
- `@keyframes apd-ring-fade-in`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#f8f9fa` as the primary page background
- Pair **Google Sans Code** (body) with **Google Sans Flex** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: 2px, 4px, 6px, 8px, 9px
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Google Sans Code and Google Sans Flex and Courier New
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| xs | 319px | css |
| xs | 350px | css |
| xs | 480px | css |
| sm | 600px | css |
| sm | 640px | css |
| lg | 1024px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #121317
Border: 1px solid #3c4043
Radius: 20px
Padding: 16px
Font: Google Sans Code
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg var(--accent), text white
Ghost: bg transparent, border #3c4043
Padding: 8px 16px
Radius: 20px
Hover: opacity 0.9 or lighter shade
Focus: ring with var(--accent)
```

### Build a Page Layout

```
Background: #f8f9fa
Max-width: 980px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #121317
Label: #5f6368 (muted, 12px, uppercase)
Value: #000000 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #f8f9fa
Input border: 1px solid #3c4043
Focus: border-color var(--accent)
Label: #5f6368 12px
Spacing: 16px between fields
Radius: 20px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Google Sans Code, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
