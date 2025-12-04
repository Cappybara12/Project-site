# Altura Custom SVG Animations

## Overview
Three detailed, custom-built SVG animations for Altura's product suite. Each animation uses Framer Motion and follows the same technical approach as the Yuno website (SVG transforms, scroll-linked triggers, no video files).

---

## 1️⃣ ALTURA AUTOMATIONS
**AI agents personalized for each type of business**

### Animation Features:
- **Central AI Agent Hub**: Pulsing circular agent with rotating orbital ring
- **5 Communication Channels**: WhatsApp, Instagram, Messenger, Email, Phone
- **Message Flow Animation**: Messages flow from channels → AI agent in continuous loop
- **Connection Lines**: Animated dashed lines showing data flow
- **Conversation Bubbles**: Simulated customer queries and AI responses appearing/fading
- **Real-time Stats**: 
  - 24/7 Active indicator (pulsing green dot)
  - <2s response time
  - 1,247 conversations/day
  - 98% satisfaction
  - 87% auto-resolved

### Color Scheme:
- Blue to Purple gradient background
- Channel-specific colors (WhatsApp green, Instagram pink, etc.)
- Indigo/Purple AI agent

### Technical Implementation:
- SVG viewBox: 600x450
- Framer Motion animations with `isActive` trigger
- Polar coordinates for channel positioning (72° intervals)
- Animated message flow using transform animations
- Gradient fills with glow filters

---

## 2️⃣ ONE SOURCE PLATFORM
**Centralize your entire e-commerce ecosystem**

### Animation Features:
- **Central Platform Hub**: Pulsing rectangular platform with animated border
- **6 Data Sources** flowing in:
  - Website (🌐 Purple)
  - E-commerce/Shop (🛒 Pink)
  - ERP (📊 Orange)
  - CRM (👥 Green)
  - Advertising (📢 Red)
  - Analytics (📈 Blue)
- **Data Packet Animation**: Colored dots flowing from sources → platform
- **Connection Lines**: Bidirectional animated dashed lines
- **Particle Burst**: Data particles emanating from center (8-way radial)
- **AI/ML Badge**: Prominent gradient badge showing AI capabilities
- **Stats**:
  - 6+ sources connected
  - Real-time sync ✓
  - 100% unified
  - Strategic insights

### Color Scheme:
- Cyan to Blue gradient background
- Multi-colored sources (each with unique color)
- Purple/Pink AI badge

### Technical Implementation:
- SVG viewBox: 600x450
- Platform gradient with glow filter
- Animated strokeDashoffset for flow effect
- Conditional left/right positioning
- Particle system using polar coordinates

---

## 3️⃣ ALTURA CUSTOM PROJECTS
**Custom developments built with enterprise standards**

### Animation Features:
- **Building Animation**: Layered architecture building from bottom-up
  - Foundation layer (gray)
  - Internal Systems (⚙️)
  - Custom Platforms (🏗️)
  - Applications (📱)
  - Cloud/Scaling top (☁️ green)
- **Integration Connectors**:
  - Left side: API, DB, ERP
  - Right side: WEB, MOBILE, IOT
- **Animated Connection Lines**: Bidirectional data flow
- **Floating Code Snippets**: `</>`, `{}`, `fn()`, `[]` floating with opacity pulses
- **Progress Bar**: Building progress animation (0% → 100%)
- **Background Pattern**: Dotted code pattern
- **Stats**:
  - ∞ Scalable
  - 🔒 Secure
  - 100% Custom
  - 24/7 Support

### Color Scheme:
- Slate/Gray gradient background
- Dark slate building blocks (enterprise look)
- Multi-colored integration connectors
- Green completion/success indicators

### Technical Implementation:
- SVG viewBox: 600x450
- Sequential layer build with scaleY transforms
- Staggered delays for building effect
- Custom SVG patterns for background
- Drop shadow filters for depth
- Progress bar with width animation

---

## Common Features (All 3 Animations)

### Scroll-Linked Triggers:
- Each animation only plays when its section is active (`isActive` prop)
- Uses IntersectionObserver with `rootMargin: "-40% 0px -40% 0px"`
- Smooth transitions when scrolling between sections

### Performance:
- Pure SVG (no video files, no canvas)
- Hardware-accelerated transforms
- Infinite loops on key animations
- Conditional rendering based on active state

### Responsive Design:
- All use relative viewBox coordinates
- Scale proportionally on all screen sizes
- Status badges and stats positioned absolutely

### Branding:
- Consistent gradient buttons (Indigo → Purple)
- Modern glassmorphism effects (backdrop-blur)
- Subtle shadows and hover effects
- Professional enterprise aesthetic

---

## Usage

The component auto-detects which section is in view and triggers the appropriate animation. All three products are presented in a sticky-scroll layout where:

1. Left sidebar stays fixed with navigation
2. Right content scrolls
3. Active section indicator (blue dot) updates
4. Animations play only when section is visible

**File**: `app/(homepage)/components/StickyFeatures.tsx`

---

## Browser Compatibility
- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile responsive
- ✅ Hardware acceleration enabled
- ✅ Fallback: animations simply don't play if motion disabled

