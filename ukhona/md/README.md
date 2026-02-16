# Repos-00 Layout Fix

## Problem Identified

Your landing page at https://ukb-dt.github.io/repos-00/ had formatting issues where:
1. Content was not properly left-justified
2. The JSON credentials block wasn't displaying cleanly
3. Some styling from a newer iteration was interfering with the layout

## Solution

Two files have been fixed:

### 1. `card.css` - Fixed Issues:
- ✅ All text elements are now explicitly left-aligned (`text-align: left`)
- ✅ JSON code blocks have proper formatting with monospace font
- ✅ Pre-formatted code has clean background and borders
- ✅ Responsive design maintained for mobile devices
- ✅ Dark/light theme compatibility preserved

### 2. `shared.js` - Simplified:
- ✅ Removed any layout-interfering code
- ✅ Kept only essential functionality (theme toggle, menu, scroll)
- ✅ No modifications to page structure or positioning

## How to Apply the Fix

### Option 1: Direct Replacement (Recommended)

1. **Backup your current files** (just in case):
   ```bash
   cd ukhona/css
   cp card.css card.css.backup
   cd ../js
   cp shared.js shared.js.backup
   ```

2. **Replace the files**:
   - Copy the new `card.css` to `ukhona/css/card.css`
   - Copy the new `shared.js` to `ukhona/js/shared.js`

3. **Commit and push**:
   ```bash
   git add ukhona/css/card.css ukhona/js/shared.js
   git commit -m "Fix: Restore proper left-justification and clean JSON formatting"
   git push
   ```

### Option 2: Manual Review

If you want to check the changes first:

1. **Compare the files** using `diff`:
   ```bash
   diff ukhona/css/card.css /path/to/new/card.css
   diff ukhona/js/shared.js /path/to/new/shared.js
   ```

2. **Review the key changes**:
   - All headings, paragraphs, lists: `text-align: left`
   - Code blocks: proper padding and monospace font
   - No layout-shifting JavaScript

## What Was Fixed

### In `card.css`:

```css
/* Before: May have had centered or auto alignment */
.card h1 {
  font-size: 2.5rem;
  /* Missing text-align */
}

/* After: Explicit left alignment */
.card h1 {
  font-size: 2.5rem;
  text-align: left;  /* ✅ ADDED */
}
```

### In `shared.js`:

- Removed any code that might manipulate card positioning
- Kept only theme toggle, menu toggle, and scroll indicator
- No DOM manipulation that could affect layout

## Expected Results

After applying these files, your page should show:

1. ✅ **Left-justified headings** - All H1, H2, H3 aligned left
2. ✅ **Clean JSON block** - The credentials JSON will display with:
   - Monospace font (Monaco/Menlo/Courier)
   - Dark background (#0d0d12)
   - Proper indentation
   - Easy-to-read formatting
3. ✅ **Organized sections** - All content sections neatly aligned
4. ✅ **Responsive** - Mobile devices still work perfectly

## Testing

After deployment, check:

1. **Desktop view**: JSON block should be tidy and left-aligned
2. **Mobile view**: Content should stack properly without overflow
3. **Theme toggle**: Should work (moon/sun icon)
4. **Links**: All navigation links should function

## Cache Busting

If changes don't appear immediately after deployment:

1. **Hard refresh** your browser:
   - Chrome/Firefox: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
   - Safari: `Cmd + Option + R`

2. **Or update the version query** in index.html:
   ```html
   <!-- Change from v=1.1 to v=1.2 -->
   <link href="ukhona/css/card.css?v=1.2" rel="stylesheet" />
   ```

## Reverting (If Needed)

If something goes wrong, revert using:

```bash
git checkout HEAD~1 ukhona/css/card.css ukhona/js/shared.js
git commit -m "Revert: CSS and JS changes"
git push
```

Or use your backup:
```bash
cp card.css.backup card.css
cp shared.js.backup shared.js
```

## Files Included

- `card.css` - Complete card component styling with left-alignment
- `shared.js` - Minimal shared functionality (theme, menu, scroll)
- `README.md` - This file

## Questions?

The main changes ensure:
- Everything is left-justified (no center, no auto alignment)
- JSON displays cleanly in monospace font
- No JavaScript interferes with your layout
- Dark/light themes still work

Deploy these files and your landing page should look tidy and professional!