# Walkthrough - Women's Day Microsite (#NeubergForHer)

The Women's Day microsite has been successfully created, mirroring the premium look and feel of the original Valentine's Day campaign but adapted with purple/magenta branding and Women's Day specific health packages.

## Changes Made

### Design & Aesthetic
- **Color Palette**: Shifted from Valentine reds to elegant Women's Day purples (`#7b2cbf`, `#9d4edd`).
- **Typography**: Integrated clean, modern fonts as per the design language.
- **Imagery**: Banner images use the original campaign assets with subtle CSS filters (`hue-rotate`) to align with the purple theme while maintaining brand consistency.

### Features
- **City Selection**: Functional modal on load and header dropdown for city-specific contact details (Bangalore, Chennai, Mumbai, Kolkata).
- **Health Packages**: Two targeted cards for women's health:
    - **Women's Essential Package** (65 Tests, ₹1,999)
    - **Women's Advanced Package** (85 Tests, ₹3,499)
- **Booking Form**: Fully responsive form with mobile number length validation and simulated OTP flow.

## Verification Results

### Dynamic Content
- [x] City dropdown updates the displayed phone numbers and banner versions.
- [x] Initial modal forces city selection to personalize the user experience.

### Form Functionality
- [x] "Get a Call Back" button enables exactly at 10 digits for mobile numbers.
- [x] Form submission triggers the "OTP sent" state and provides visual feedback.

### Responsive Design
- [x] Layout adjusts seamlessly for mobile views with a simplified header and stacked package cards.

## Exported Files Path
`C:\Users\Balan\Downloads\Neuberg-women-day`
- `index.html`
- `static/css/main.css`
- `static/js/main.js`
- `walkthrough.md`
