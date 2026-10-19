# NOVAGENTEC Commercial page

Build the approved Commercial page at `/` as one continuous page that follows the mobile design board. The desktop version adapts the same layout to wider screens.

## Inputs available
- Mobile design board (used as the layout reference, not shown on the page)
- Workshop hero photo: laptop, camera and white van
- Creator Core phones and portfolio artwork

The handoff mentions COPY-AND-LINKS.md, design-tokens.json, the desktop reference, the FleetFlow source screenshot and other artwork, but those files were not uploaded. Until they arrive:
- Copy comes from the design board.
- Links that don't have a destination yet stay as visible placeholders.
- The FleetFlow tablet and the service and tier images are newly generated illustrations. Their screens are blank or plainly marked as demos.

## Sections, in order
1. Header: compact "NOVAGENTEC · COMMERCIAL" wordmark, a menu that opens on phones, and inline links on desktop
2. Hero: "YOUR BUSINESS. CONNECTED." on two centered lines, a black "Let's talk business" button and an "Explore the systems" link, over the workshop photo. Includes an optional slot for a background video, with the photo as its poster.
3. Capability row: Web Infrastructure, Connected Operations, Business Strategy, each with an icon
4. Three Ways to Build: Tier 01 Launch, Tier 02 Automated Engine, Tier 03 Custom Core Systems. Equal cards with blank screen frames that read as illustrations.
5. Beyond the Website: six service rows (Brand & Identity, Automation & Workflows, CRM & Integrations, Local Search & Visibility, Content & Social Systems, Operations Dashboards)
6. Built Around Real Work, then FleetFlow on a graphite panel with an orange accent and the "DEMO WORKSPACE · SAMPLE DATA" label
7. Creator Core on a graphite panel with a cyan accent. Shows the supplied phones and portfolio artwork with the "DEMO PAGES · FICTIONAL CREATOR CONCEPTS" label.
8. Real Work. Real Businesses.: two pending cards that say "Selected customer work will appear here." No invented proof.
9. The Synergy Standard: steps 01, 02 and 03
10. Closing message: "Let's build what's next." with a "Start a conversation" button that spans the full width on phones
11. Dark footer

## Visual identity
- Light mineral-white and silver page surfaces, graphite product panels and a dark footer
- Orange is used only in FleetFlow and cyan only in Creator Core
- Fonts: Archivo Black for uppercase headings, Source Sans 3 for body text, IBM Plex Mono for labels
- Numbers appear only on the tiers and the process steps
- No orbs, bouncing or reveal animations. Reduced-motion settings are respected.

## Technical details
- Rewrite src/routes/index.tsx and add section components under src/components/commercial/
- Set the color tokens and fonts in styles.css, and load the Google Fonts with link tags in __root
- Upload the two artworks through lovable-assets. Generate the remaining illustrations into src/assets.
- Mark up the page with semantic sections and anchor IDs, and add an accessible mobile menu (Sheet) with visible focus states and touch targets of 44px or more
- Load the hero image eagerly and lazy-load lower images. Give every image explicit dimensions.
- Add page metadata (title, description, OG tags) and update the root head
- Check the layout with Playwright at 320, 390, 768 and 1440 widths for overflow and visual correctness

## Open items to report afterward
Real contact workflow, detail-page URLs, the actual FleetFlow, product and client screenshots, and the missing package files.
