---
name: Precision Engineering System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#464553'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#777584'
  outline-variant: '#c8c4d5'
  surface-tint: '#544fc0'
  primary: '#1f108e'
  on-primary: '#ffffff'
  primary-container: '#3730a3'
  on-primary-container: '#a9a7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#0f009f'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a28bb'
  on-tertiary-container: '#a6a8ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3b35a7'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  mono-code:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  gutter: 24px
  margin: 32px
  container-max: 1280px
---

## Brand & Style

The design system is anchored in **Technical Minimalism**. It targets sophisticated stakeholders and CTOs who value clarity, performance, and rigorous engineering. The aesthetic avoids unnecessary decoration, favoring a layout that breathes and prioritizes information density without clutter.

The emotional response is one of **High-Trust and Precision**. By combining expansive whitespace with high-contrast accents, the UI feels like a high-end IDE or a professional documentation platform. The design is systematic, using a strict grid and logical hierarchy to convey the agency's ability to handle complex technical challenges.

## Colors

The palette is designed for maximum legibility and professional rigor.

- **Primary (Deep Indigo):** Used for core branding, primary calls-to-action, and active navigation states. It represents stability and authority.
- **Secondary (Emerald):** Reserved strictly for success states, technical "go-lives," and high-priority conversion points to draw the eye with intent.
- **Background (Slate-50):** The primary canvas is #F8FAFC, providing a soft, non-clinical white that reduces eye strain during long technical reviews.
- **Surface (White):** Functional cards and containers use pure #FFFFFF to pop against the slate background.
- **Border (Slate-200):** Used for subtle structural definition, maintaining the minimalist aesthetic without heavy shadows.

## Typography

This design system utilizes **Inter** for all UI and editorial content to ensure a systematic, utilitarian feel. 

- **Tracking:** Generous letter-spacing is applied to labels and body text to enhance readability in dense technical contexts.
- **Hierarchy:** Dramatic weight shifts (from 700 for displays to 400 for body) define the information architecture.
- **Code Integration:** For technical specifications and data snippets, **JetBrains Mono** is introduced as a secondary functional font to maintain the developer-centric aesthetic.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Content is contained within a 1280px max-width container to preserve line lengths for readability.

- **Grid:** A 12-column grid system is used for desktop, collapsing to 4 columns on mobile.
- **Rhythm:** An 8px base unit drives all spacing decisions, ensuring mathematical harmony across the UI.
- **Whitespace:** Emphasize generous vertical margins between sections (`spacing-xl`) to signal premium positioning and focus.
- **Responsive:** On mobile, margins reduce to 16px, and body text maintains its size, while headlines scale down significantly to avoid awkward wrapping.

## Elevation & Depth

This design system uses a **Low-Contrast Layering** approach to convey depth without cluttering the minimalist interface.

- **Base Layer:** The slate background (#F8FAFC).
- **Surface Layer:** White containers (#FFFFFF) use a 1px border of Slate-200.
- **Elevation:** Shadows are used sparingly. Only top-level interactive elements (like active cards or dropdowns) receive a "Soft Ambient Shadow": `0px 10px 15px -3px rgba(15, 23, 42, 0.05)`.
- **Interactivity:** On hover, cards may transition from a 1px border to a subtle shadow to indicate lift, but should never use heavy offsets or high-opacity shadows.

## Shapes

The shape language is **Refined & Modern**. 

- **Standard Radius:** All primary containers and buttons utilize `rounded-xl` (1.5rem / 24px) to soften the technical nature of the content and make the UI feel approachable.
- **Small Elements:** Form inputs and tags use a smaller `rounded-md` (0.375rem) to maintain a sense of precision and "tool-like" utility.
- **Consistency:** Never mix sharp corners with rounded corners within the same component hierarchy.

## Components

- **Buttons:** Primary buttons use Deep Indigo with white text. CTA buttons for "Start Project" or "Success" actions use Emerald. Both use high-padding (12px 24px) and bold weights.
- **Input Fields:** Use a white background with a Slate-200 border. On focus, the border transitions to Deep Indigo with a subtle 2px outer glow (Indigo-100).
- **Cards:** White surfaces with a `1px` Slate-200 border and `rounded-xl` corners. Headers within cards should use `label-md` for a "meta-data" look.
- **Chips/Badges:** Use light tinted backgrounds (e.g., Indigo-50) with Indigo-700 text for technical tags. Use `rounded-full` for status indicators.
- **Lists:** Technical specs should be presented in "Data Rows" with subtle horizontal dividers (Slate-100) and monospaced values for technical precision.
- **Progress Indicators:** Use Emerald for all progress bars and success icons to reinforce the feeling of technical completion and reliability.