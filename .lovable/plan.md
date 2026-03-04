

## Center Logo with Language Selector Below

### Changes

**File: `src/components/ClinicLogo.tsx`**
- Change layout from horizontal (logo left, language selector right) to vertical centered layout
- Center the clinic logo
- Place the language selector below the logo, also centered

### Layout

```text
      [ Clinic Logo ]
    [ Language Selector ]
```

### Technical Details

Update `ClinicLogo.tsx`:
- Change the flex container from `flex justify-between items-center` to `flex flex-col items-center`
- Add spacing between logo and language selector (e.g., `gap-3`)
- Keep the existing max-width and margin-bottom

