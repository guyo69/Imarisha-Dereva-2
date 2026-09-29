# Imarisha Dereva

Complete static product landing page for LAPFUND and Little Cab drivers.

## Enrolment link

Set `ENROLMENT_URL` at the top of `dist/app.js` to the approved HTTPS consent-form link. Every Join button uses this setting. Until a link is supplied, the buttons open a finished joining panel with LAPFUND contact actions. No application is submitted or personal data collected by this page.

## Typography

Fraunces is bundled locally for headings. Body text requests Footlight MT Light from the visitor's installed fonts, falling back to Georgia. To guarantee Footlight on all phones, supply a web-licensed Footlight font and replace the local font-face declaration in `dist/styles.css` with its bundled webfont URL. No licensed Footlight file was provided with the source assets.

## Confirmed content

Up to KES 100 daily, KES 20 per contributing trip. Accumulated benefits remain preserved until retirement or a minimum of three years. Insurance amounts follow the supplied MOU. Signature and document-execution concerns are excluded from the customer page. Contacts follow the supplied contact photograph.

## Assets

Original supplied logos and phone SVG. One generated Higgsfield Nano Banana photograph, 1 credit total. The image is illustrative, not a member testimonial. No trackers, external font calls, lead database or third-party form embeds.

Serve `dist/` with any static host. `npm run dev` starts the local preview.
