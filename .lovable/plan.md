

## Improve Survey Question Components UX

### Changes

**1. `src/components/survey/CheckboxGroup.tsx` — Better checkbox experience**
- Make checkboxes larger (h-5 w-5) by passing className override
- Add tappable row styling: each option gets a full-width clickable row with padding, rounded border, and highlight on selection
- This makes the square checkbox more visible and the tap target much larger

**2. `src/components/survey/RadioGroup.tsx` — Matching radio experience**
- Same tappable row treatment as checkboxes: full-width rows with border, padding, and selection highlight

**3. `src/components/survey/ScaleInput.tsx` — Refined scale**
- Make buttons smaller and more compact with `h-10 w-10` fixed size (circle/rounded-full style) instead of `flex-1` wide blocks
- Center the row of number circles
- Cleaner, more minimal look

**4. `src/components/ui/checkbox.tsx` — Ensure square appearance**
- Increase default size from `h-4 w-4` to `h-5 w-5` for better visibility
- Keep `rounded-sm` (already square)

### Visual Result

```text
Checkboxes:
┌─────────────────────────────┐
│ ☑ Wait time                 │  ← highlighted row
├─────────────────────────────┤
│ ☐ Staff friendliness        │
├─────────────────────────────┤
│ ☐ Communication             │
└─────────────────────────────┘

Scale:
    ① ② ③ ④ ⑤
   Poor      Excellent
```

