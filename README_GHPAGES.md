# GitHub Pages Deployment (gh-pages branch)

This project is deployed as a Create React App (CRA) to the `gh-pages` branch.

## What to do
1. Ensure `package.json` has the correct `homepage` URL for GitHub Pages.
   - Current: `https://greyengravings.github.io/bites-bombay-sandwich`
2. Push commits to the `main` branch.
3. The workflow `.github/workflows/deploy-gh-pages.yml` will:
   - install dependencies
   - run `npm run build`
   - publish `build/` to the `gh-pages` branch.

## Verify
After the workflow completes, open:
- https://greyengravings.github.io/bites-bombay-sandwich/

## Notes
- CRA build warns about unused imports; it does not block deployment.

