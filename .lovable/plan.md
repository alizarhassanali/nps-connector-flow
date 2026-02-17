

## "No Survey Assigned" Page

### What Will Change
When a user visits the survey URL (or any page) without a valid token, they will see a friendly page explaining they need a valid survey link to proceed, instead of landing on the current Index page or seeing broken content.

### New Page: `NoSurveyAccess`
- Shows the clinic logo at the top (consistent with all other pages)
- Displays a "lock" or "link broken" icon
- Heading: "Valid Survey Link Required"
- Message: "To access the survey, please use the link provided in your SMS or email invitation."
- No navigation buttons (since there is no home or survey for them)
- Fully translated in English and French

### Routing Logic
- The `/survey` route will check for a `token` query parameter (e.g., `/survey?token=abc123`)
- If no token is present, the Survey page redirects to `/no-access`
- A new `/no-access` route renders the `NoSurveyAccess` page

### Technical Details

**Files to create:**
| File | Purpose |
|------|---------|
| `src/pages/NoSurveyAccess.tsx` | New page with clinic logo, icon, heading, and message |

**Files to modify:**
| File | Change |
|------|--------|
| `src/App.tsx` | Add `/no-access` route |
| `src/pages/Survey.tsx` | Add token check; redirect to `/no-access` if missing |
| `src/i18n/locales/en.json` | Add `noAccess.title` and `noAccess.message` translation keys |
| `src/i18n/locales/fr.json` | Add French translations for the same keys |

**Translation strings:**

English:
- `noAccess.title`: "Valid Survey Link Required"
- `noAccess.message`: "To access the survey, please use the link provided in your SMS or email invitation."

French:
- `noAccess.title`: "Lien de sondage valide requis"
- `noAccess.message`: "Pour acceder au sondage, veuillez utiliser le lien fourni dans votre SMS ou courriel d'invitation."

