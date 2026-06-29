# TODO - Mobile-first responsive refinement

## Step 1
- Inspect and adjust safe-area + centered container CSS in `src/index.css`.

## Step 2
- Update `src/App.js` to remove/replace edge-collapsing `-mx-5` and align all sections to safe horizontal padding.

## Step 3
- Ensure bottom navigation respects `env(safe-area-inset-bottom)`.

## Step 4
- Ensure product grid never overflows on 320–480px (2 columns, equal gutters, no horizontal scroll).

## Step 5
- Ensure category scroller + offer slider keep equal margins and no clipping.

## Step 6
- Ensure search row and “Sandwich Only” toggle always fit within safe width.

## Step 7
- Add global typography overflow safety (ellipsis / wrapping) without changing content/logic.

## Step 8
- Run local build/dev and verify widths: 320/360/375/390/412/430/480.

