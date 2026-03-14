# Spool — Complete Design System Reference

This document captures every design decision in the Spool iOS app. Use it as the single source of truth when building the Spool website page, so the web presence feels like a natural extension of the app itself.

---

## 1. Colour System

### Background Colours
- **Primary dark background**: `rgb(13, 13, 13)` — `Color(red: 0.05, green: 0.05, blue: 0.05)` — near-black, not pure black
- **Light mode background**: `rgb(245, 245, 247)` — `Color(red: 0.96, green: 0.96, blue: 0.97)` — warm off-white
- **Premium background (dark)**: `rgb(13, 13, 18)` — `Color(red: 0.05, green: 0.05, blue: 0.07)` — slightly blue-tinted dark
- **Premium background (light)**: `rgb(242, 242, 247)` — `Color(red: 0.95, green: 0.95, blue: 0.97)`

### Card Surfaces
- **Card (dark mode)**: `rgb(38, 38, 43)` — `Color(red: 0.15, green: 0.15, blue: 0.17)` — subtle warm grey
- **Card (light mode)**: Pure white
- **Secondary card**: iOS `tertiarySystemGroupedBackground` — for nested/inset cards
- **Glass stroke**: `white at 15% opacity` — the universal border for glass cards

### Brand / Accent Colour
- **Primary accent**: `Color.blue` (iOS system blue) — this is the single brand colour used everywhere
- **Secondary accent**: `Color.blue at 70% opacity`
- There are NO custom hex brand colours — Spool uses iOS system blue throughout

### Text Hierarchy
- **Primary text**: `Color.primary` (system label — white in dark, black in light)
- **Secondary text**: `Color.secondary` (system secondary label)
- **Tertiary text**: `UIColor.tertiaryLabel` — used for tab bar unselected items and subtle labels
- **Quaternary text**: `UIColor.quaternaryLabel` — barely visible, placeholder-level
- **Inverse text**: Pure white — for text on coloured backgrounds

### Semantic Colours
- **Success**: `Color.green` (iOS system green)
- **Warning**: `Color.orange` (iOS system orange)
- **Error**: `Color.red` (iOS system red)
- **Info**: `Color.blue` (matches accent)

### Material Palette (Filament-Specific)
These are the colours assigned to each filament material type:
- **PLA**: Green (`Color.green`)
- **ABS**: Blue (`Color.blue`)
- **PETG**: Orange (`Color.orange`)
- **TPU**: Purple (`Color.purple`)
- **Nylon**: Grey (`Color.gray`)
- **ASA**: Red (`Color.red`)

### Analytics / Intelligence Colours
Used in the analytics dashboard sections:
- **Economics tab**: Green
- **Material tab**: Orange
- **Energy tab**: Yellow
- **Environmental tab**: Mint

### Extended Palette
- **Purple**: `#9333EA`
- **Pink**: `#EC4899`
- **Blue**: Same as dsInfo (system blue)
- **Green**: Same as dsSuccess (system green)
- **Orange**: Same as dsWarning (system orange)
- **Red**: Same as dsError (system red)

### Interactive States
- **Hover**: Primary colour at 5% opacity
- **Pressed**: Primary colour at 10% opacity
- **Disabled**: Secondary colour at 30% opacity

### Premium Background Ambient Glow
The app uses two large blurred circles floating behind content on premium screens:
- **Blue circle**: `Color.blue` at 10% opacity (dark) / 5% (light), 80% of screen width, blur radius 100px
- **Purple circle**: `Color.purple` at 8% opacity (dark) / 4% (light), 60% of screen width, blur radius 80px

---

## 2. Typography

### Font System
- **Display/Hero sizes**: System font, `.rounded` design, bold weight
- **Title sizes**: System font, `.rounded` design, bold/semibold weight
- **Body and below**: System font, `.default` design (San Francisco), regular/medium weight
- **Monospaced**: System font, `.monospaced` design — used for data/numbers
- **No custom fonts** — everything is San Francisco (system)

### Full Type Scale
| Token | Size | Weight | Design | Usage |
|-------|------|--------|--------|-------|
| Hero | 48px | Bold | Rounded | Big dashboard numbers, splash headings |
| Title 1 | 32px | Bold | Rounded | Screen titles, section heroes |
| Title 2 | 24px | Bold | Rounded | Card titles, modal headings |
| Title 3 | 20px | Semibold | Rounded | Sub-section headings |
| Headline | 17px | Semibold | Default | List item titles, nav headings |
| Body | 16px | Regular | Default | Paragraphs, descriptions |
| Body Emphasised | 16px | Semibold | Default | Important body text |
| Callout | 15px | Medium | Default | Button labels, form labels |
| Subheadline | 14px | Medium | Default | Secondary list info |
| Footnote | 13px | Regular | Default | Hints, helper text |
| Caption 1 | 12px | Medium | Default | Labels, tags, metadata |
| Caption 2 | 11px | Medium | Default | Timestamps, fine print |
| Micro | 9px | Bold | Monospaced | Badges, status indicators |

### Key Typography Patterns
- Headings always use `.rounded` design for a friendly, approachable feel
- Body text uses `.default` (San Francisco Pro) for readability
- Numbers and data values use `.monospaced` for alignment
- The Paywall hero uses `system size 34, weight .black, design .rounded` for maximum impact
- Dynamic type is supported throughout — minimum scale factor 0.5, range from `.small` to `.accessibility3`

### Web Equivalent
For the website, use:
- Headings: `-apple-system, BlinkMacSystemFont, 'SF Pro Rounded', system-ui` with appropriate `font-variation-settings` or `font-weight`
- Body: `-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif`
- Alternatively, use Inter or Plus Jakarta Sans as web-safe alternatives that match the rounded, geometric feel

---

## 3. Spacing System (8pt Grid)

| Token | Value | Usage |
|-------|-------|-------|
| xxxs | 2px | Micro adjustments, badge inner padding |
| xxs | 4px | Badge vertical padding, tiny gaps |
| xs | 8px | Icon-to-text gap, inline spacing |
| s | 10px | Compact row spacing |
| sm | 12px | Small card padding, list item gaps |
| md | 16px | Default padding, button horizontal padding |
| lg | 20px | Section header horizontal padding |
| xl | 24px | Card internal padding (the standard card padding) |
| xxl | 32px | Between major sections |
| xxxl | 40px | Large section gaps |
| xxxxl | 48px | Hero spacing |
| huge | 64px | Maximum breathing room |

---

## 4. Corner Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 8px | Small badges, compact elements |
| sm | 12px | Input fields, small cards |
| md | 16px | Buttons, standard interactive elements |
| lg | 20px | Default glass card radius, modals |
| xl | 24px | DSCard default, feature cards |
| xxl | 32px | Large hero cards, premium elements |
| pill | 999px | Capsule buttons, rounded badges |

### Key Pattern
- **Glass cards**: 20px radius (lg) as the default
- **DSCard component**: 24px radius (xl)
- **Buttons**: 16px radius (md)
- **Pill/capsule buttons**: 999px (full capsule)
- All corners use `.continuous` style (SwiftUI's smoother corner curves, like Apple's squircle)

---

## 5. Shadow / Elevation System

| Level | Radius | Y Offset | Opacity | Usage |
|-------|--------|----------|---------|-------|
| sm | 4px | 2px | 5% black | Subtle cards, secondary buttons |
| md | 8px | 4px | 8% black | Default card elevation, primary buttons |
| lg | 12px | 6px | 10% black | Elevated modals |
| xl | 16px | 8px | 12% black | Floating action buttons |
| xxl | 24px | 12px | 15% black | Hero elements |
| neon(colour) | 16px | 0px | 60% of colour | Coloured glow effect behind elements |

### Shadow Patterns
- Standard cards use `md` elevation
- Primary buttons use `md`, secondary use `sm`
- Floating action buttons use `xl`
- Accent/CTA glow: `Color.dsAccent.opacity(0.3), radius: 10, y: 5` (from paywall)
- The neon shadow is used for coloured glow effects (e.g. behind accent buttons)

---

## 6. iOS 26 Liquid Glass

### Core Implementation
Spool uses Apple's native `.glassEffect()` modifier (iOS 26) with a fallback Material system for iOS 18-25.

### Glass Intensity Scale
| Intensity | iOS 26 | Pre-iOS 26 Fallback |
|-----------|--------|---------------------|
| ultraThin | `Glass.clear` | `.ultraThinMaterial` |
| thin | `Glass.clear` | `.thinMaterial` |
| regular | `Glass.regular` | `.regularMaterial` |
| thick | `Glass.regular` | `.thickMaterial` |
| ultraThick | `Glass.regular` | `.ultraThickMaterial` |

### Glass Card Pattern
```
content
  .padding(24px)
  .glassEffect(.regular.interactive(), in: RoundedRectangle(cornerRadius: 20))
  .overlay(RoundedRectangle(cornerRadius: 20).strokeBorder(white at 15%, lineWidth: 0.5))
  .shadow(...)
```

### Glass on the Web
To recreate Liquid Glass for the website:
- Background: `rgba(255, 255, 255, 0.03)` to `rgba(255, 255, 255, 0.05)` (dark mode)
- Border: `rgba(255, 255, 255, 0.08)` default, `rgba(255, 255, 255, 0.15)` on hover
- Backdrop filter: `blur(12px)` to `blur(20px)` (use `backdrop-blur-xl` in Tailwind)
- Hover state: Background brightens to `rgba(255, 255, 255, 0.05)`, border to `rgba(255, 255, 255, 0.15)`
- Always pair with a subtle shadow for depth

### Interactive Glass
- All glass surfaces respond to hover (`.hoverEffect(.highlight)`)
- Haptic feedback fires on touch
- Scale slightly on press (`0.96`)

### Legacy Glass (MetalShaders.swift)
For older devices, there's a non-native glass system:
- Material fill (thin/regular/thick)
- Gradient overlay: white at 20% opacity → clear, top-leading to bottom-trailing, blend mode overlay
- Stroke border: gradient from white 30% → white 5%, top to bottom, 1px width, radius 35px

---

## 7. Animation System

### Timing Curves
| Token | Type | Parameters | Usage |
|-------|------|------------|-------|
| instant | easeInOut | 0.15s | Micro-interactions, toggles |
| quick | easeInOut | 0.25s | Button feedback, small transitions |
| snappy | spring | response 0.3, damping 0.7 | Card appears, nav transitions |
| smooth | spring | response 0.4, damping 0.85 | Progress bars, sliders |
| gentle | spring | response 0.5, damping 0.9 | Large elements, page transitions |
| bouncy | spring | response 0.35, damping 0.6 | Playful bounce effects |
| elastic | spring | response 0.4, damping 0.5 | Over-shoot spring |
| touchResponse | spring | response 0.3, damping 0.6 | Button press/release |

### Duration Constants
| Token | Duration |
|-------|----------|
| instant | 0.15s |
| fast | 0.25s |
| medium | 0.35s |
| slow | 0.50s |
| verySlow | 0.75s |

### Staggered Entry Animation
Items slide in sequentially:
- Opacity: 0 → 1
- Y offset: 20px → 0
- Scale: 0.9 → 1.0
- Spring: response 0.5, damping 0.7
- Stagger delay: `index * 0.05s`

### Scroll Depth Effect
Items in scrollable lists get:
- Scale shrinks to 0.95 at top/bottom edges
- Opacity fades to 0.6 at extreme edges
- Creates a subtle 3D depth illusion

### Web Animation Equivalents
- `snappy` → `transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1)` (Framer Motion `[0.22, 1, 0.36, 1]`)
- `smooth` → `transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1)`
- `touchResponse` → `transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)`
- Button press: `scale(0.96)` on mousedown, `scale(1)` on mouseup
- Staggered entry: Framer Motion `useInView` + `delay={index * 0.05}`

---

## 8. Component Patterns

### Cards (DSCard)
- Padding: 24px (xl)
- Corner radius: 24px (xl)
- Background: ultraThinMaterial (glass)
- Border: white at 15% opacity, 1px
- Shadow: md (8px radius, 4px y, 8% black)
- Hover: border brightens, background shifts

### Buttons

**Primary Button**
- Background: `Color.dsAccent` (blue)
- Text: White, callout size (15px), semibold
- Height: 56px (comfortable touch target)
- Horizontal padding: 16px
- Corner radius: 16px (md)
- Press effect: scale 0.96 with spring animation
- Shadow: md elevation
- Haptic: light impact on press

**Secondary Button**
- Background: ultraThinMaterial
- Text: Primary colour, callout size, semibold
- Border: white at 10% opacity (dark) / black at 6% (light), 1px
- Same dimensions as primary
- Press effect: opacity 0.7, scale 0.98

**Pill Button**
- Same as secondary but with capsule shape (999px radius)

**Destructive Button**
- Background: `Color.dsError` (red)
- Text: White
- Shadow: md elevation

**Liquid Button (Premium)**
- Full-width capsule shape
- Gradient background: colour → colour at 80% opacity
- Animated shimmer overlay: white at 30% opacity sweeping left to right (3s loop)
- Shadow: colour at 30% opacity, 8px radius, 4px y
- Press: scale 0.96, shadow reduces
- Smart contrast: automatically picks white or black text based on background luminance

### Button Sizes
| Size | Height | Horizontal Padding |
|------|--------|--------------------|
| small | 44px | 12px |
| medium | 56px | 16px |
| large | 64px | 20px |

### Badges (DSBadge)
- Font: Micro (9px, bold, monospaced)
- Horizontal padding: 8px, vertical: 4px
- Shape: Capsule
- Styles: filled (colour bg, white text), outlined (colour border+text, clear bg), subtle (colour at 20% bg, colour text)

### Empty States
- Icon: 72px SF Symbol with hierarchical rendering
- Accent gradient behind icon
- Blurred circle backdrop (120px, accent at 10% opacity, blur 20px)
- Title: 24px bold rounded
- Description: body size, secondary colour, centered, 40px horizontal padding
- Optional CTA: accent gradient capsule button

### Section Headers
- Font: headline (17px semibold)
- Colour: secondary
- Optional SF Symbol icon
- Optional chevron-right action indicator
- Horizontal padding: 20px (lg)

### Circular Progress
- Track: accent colour at 10% opacity
- Active: angular gradient
- Stroke: rounded line cap
- Inner glow: white at 30% opacity, 1/3 of main stroke width
- Shadow: accent at 50% opacity, 10px radius
- Size: 44px default

### Mercury Slider (Premium)
- Track height: 8px capsule
- Active track: linear gradient (customisable colours)
- Thumb: 28px white circle with white 50% stroke border
- Thumb shadow: black at 15%, 4px radius
- Drag state: thumb scales to 1.2x, gains colour glow (8px radius)
- Haptic: selection tick every 5% increment, light impact on release

### Floating Action Button
- Size: 64px circle
- Background: accent colour
- Icon: 24px, white, semibold
- Shadow: xl (16px radius, 8px y, 12% black)

---

## 9. Opacity Scale

| Token | Value | Usage |
|-------|-------|-------|
| invisible | 0% | Hidden elements |
| subtle | 5% | Hover backgrounds, barely-there tints |
| faint | 10% | Disabled overlays, secondary backgrounds |
| light | 15% | Glass stroke, light borders |
| medium | 30% | Disabled states, muted elements |
| strong | 50% | Active overlays, semi-transparent panels |
| veryStrong | 70% | Modal backdrops |
| almostOpaque | 90% | Near-solid overlays |
| opaque | 100% | Fully visible |

---

## 10. Stroke Widths

| Token | Value | Usage |
|-------|-------|-------|
| hairline | 0.5px | Glass effect borders, subtle dividers |
| thin | 1px | Default card borders, button outlines |
| regular | 2px | Selected state borders, emphasis lines |
| medium | 3px | Active indicators |
| thick | 4px | Strong borders, heavy emphasis |

---

## 11. Icon System

### SF Symbols Used
- Spool: `smallcircle.filled.circle.fill`
- Printer: `printer.dotmatrix`
- Cube: `cube.fill`
- Calendar: `calendar`
- Trash: `trash.fill`
- Edit: `pencil`
- Add: `plus.circle.fill`
- Checkmark: `checkmark.circle.fill`
- Star: `star.fill`
- Energy: `bolt.fill`
- Filament drop: `drop.fill`
- Stack: `square.stack.3d.up.fill`
- Analytics: `chart.bar.xaxis`
- Settings: `gear`
- Grid: `circle.hexagongrid.fill`
- Printer (filled): `printer.fill`
- Search: `magnifyingglass`
- Filter: `line.3.horizontal.decrease.circle`
- Close: `xmark`
- Grid view: `square.grid.2x2`
- List view: `list.bullet`
- Filament visual: `scribble.variable`
- Hotend: `thermometer.medium`
- Build plate: `square.3.layers.3d.down.right.fill`
- Nozzle: `drop.triangle.fill`
- Dryer: `wind.circle.fill`
- AMS: `square.grid.3x3.fill`

### Icon Sizes
| Token | Value |
|-------|-------|
| xs | 12px |
| sm | 16px |
| md | 20px |
| lg | 24px |
| xl | 28px |
| xxl | 32px |
| hero | 48px |

### Rendering
- Icons use `.symbolRenderingMode(.hierarchical)` for depth in empty states
- Accent gradient: `.foregroundStyle(Color.dsAccent.gradient)` for hero icons
- Default weight: `.medium` for standard icons, `.semibold` for buttons

---

## 12. Haptic Feedback Patterns

Spool uses haptics on almost every interaction:

| Interaction | Haptic Type |
|-------------|-------------|
| Button tap | Light impact |
| Primary action | Medium impact |
| Destructive action | Heavy impact |
| Toggle/switch | Mechanical click (custom CoreHaptics) |
| Selection change | Selection tick |
| Success (save, complete) | Success notification |
| Warning (low stock, limit) | Warning notification |
| Error (failed, invalid) | Error notification |
| Slider drag | Selection tick every 5% |
| Slider release | Light impact |
| Scroll texture | Custom CoreHaptics pattern |
| Bounce animation | Custom intensity ramp |

The haptic engine runs on `DispatchQueue.main.async` to avoid CoreHaptics race conditions with SwiftUI navigation bar updates. There's a global intensity multiplier stored in UserDefaults.

---

## 13. Layout Constants

| Constant | Value | Usage |
|----------|-------|-------|
| Card width | 280px | Standard card in horizontal scroll |
| Gauge size | 44px | Circular progress indicators |
| Balloon size | 220px | Filament balloon visualisation |
| Grid columns | 2 | Default grid layout |
| Max sheet height | 800px | Bottom sheet maximum |
| Bottom safe area | 100px | Floating button clearance |
| Min touch target | 44px | Accessibility minimum |
| List row height | 60px | Standard list item height |
| Icon size | 24px | Standard inline icon |
| Icon size large | 32px | Prominent icons |
| Max popup width | 380px | Modal/popup maximum width |
| Max popup height | 720px (or 85% of screen) | Modal maximum height |

---

## 14. Paywall Design

The paywall is the most visually polished screen in the app:

### Hero
- Concentric animated rings around the app icon
- Ring colours: `Color.dsAccent` at graduated opacities (15%, 10%, 5%)
- Icon shadow: `Color.dsAccent` gradient from full to 70% opacity

### Feature Cards
- Background: `.ultraThinMaterial`
- Border: white at 10% opacity
- Icon: system image in accent colour with accent opacity 10% circle background
- Title: subheadline, bold
- Description: caption2, secondary colour

### Pricing Cards
- **Selected**: Accent at 10% background, 2px accent border
- **Unselected**: White at 5% background
- Savings badge: accent colour filled capsule

### Success State
- Full-screen overlay with green gradient
- Animated checkmark
- Success haptic notification

---

## 15. Metal Shader Effects

For premium visual polish, the app includes Metal shaders:

### Glass Distortion
- Parameters: strength (default 0.05), chromatic aberration (default 0.02)
- Applied via `.layerEffect` with 20px max sample offset
- Creates subtle glass-like light bending

### Light Refraction
- Parameters: refractive index (default 1.5), dispersion (default 0.03)
- Applied via `.colorEffect`
- Simulates light passing through glass

### Filament Balloon
- Custom shader for the 3D filament balloon visualisation
- Takes fill percentage, three RGB colour inputs, and animated time value
- Creates the liquid-filled balloon look for spool visualisation

### Fallback Effects (non-shader)
- Chromatic depth: offset content with blended copy at 50% opacity
- Liquid shimmer: looping opacity animation
- Depth blur: half-radius blur
- Frosted glass: `.thickMaterial`

---

## 16. Key Visual Patterns to Replicate on Web

### The "Spool Look"
1. **Near-black background** (`#0d0d0d` / `rgb(13,13,13)`) — not pure black
2. **Glass cards** with `backdrop-blur`, white 3% fill, white 8% border, md shadow
3. **System blue accent** as the single pop of colour
4. **Rounded headings** (SF Pro Rounded / Inter as web fallback) for warmth
5. **Default body text** in SF Pro / system-ui for readability
6. **Spring animations** everywhere — `cubic-bezier(0.22, 1, 0.36, 1)` is the closest CSS equivalent
7. **Staggered reveals** on scroll — items fade and slide up sequentially
8. **Subtle glow** behind key elements — blurred coloured circles or box-shadows
9. **Material-type colour coding** — PLA green, PETG orange, TPU purple, ABS blue
10. **Generous whitespace** — 24px card padding, 32-64px between sections
11. **Capsule badges** — tiny monospace bold text in coloured pills
12. **Hover glow** — coloured blur appears behind cards on hover
13. **Press scale** — 0.96 scale transform on click/tap

### Gradients to Use
- **Hero text**: emerald-400 → teal-300 → cyan-400 (already on the website, keep it)
- **Accent glow**: blue at 10-30% opacity, blurred 60-100px
- **Card hover glow**: feature-specific gradient (emerald, blue, purple, etc.) at 20% opacity, blurred 60px
- **Premium background**: blue + purple blurred circles

### The Website Already Has
- Near-black bg `#0a0a0a` ✓ (close enough to the app's `#0d0d0d`)
- Emerald/teal/cyan gradient for hero text ✓
- Glass-style cards with white opacity borders ✓
- Scroll-reveal animations with spring curves ✓
- Staggered entry delays ✓

### What the Website Should Add
- Feature-specific colour coding from the material palette
- The analytics colour system (green for economics, orange for energy, blue for material)
- More generous spacing (match the 8pt grid)
- Spring physics that match the app's exact curves
- The shimmer effect from LiquidButton for CTA buttons
- Subtle ambient glow (the two-circle premium background pattern)
