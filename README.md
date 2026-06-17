# Calculus 1 Course Site

This is the source repository for the MT1003 Calculus 1 website at:

```text
https://www.tsvan.xyz/calc1/
```

The site is built with Zola, and the lecture slides are Slidev decks. GitHub
Actions builds the site and publishes it to GitHub Pages on every push to
`main`.

## Best Working Setup

The canonical repository is:

```text
~/Work/calc1
```

In the larger teaching project, `course-site` is a symlink to that repository:

```text
~/Work/Teaching-local/Calc1/course-site -> ~/Work/calc1
```

That keeps one real source tree while still letting you work from the broader
course project directory. Edit notes, pages, and slides from either path; they
are the same files.

## Source Layout

- `content/` contains Zola pages and lecture notes.
- `content/sessions/` contains class-session notes.
- `content/project/` contains project pages. Draft pages are not published.
- `slidev/` contains editable Slidev decks.
- `static/` contains hand-kept static assets such as CSS, JavaScript, and PDFs.
- `templates/` and `themes/` contain Zola templates/theme files.
- `.github/workflows/deploy.yml` builds and deploys the site on GitHub.

Generated folders such as `_site/`, `public/`, `docs/`, `.quarto/`,
`static/slides/`, and `node_modules/` should not be committed.

## Notes

Edit course notes in:

```text
content/sessions/
```

Then preview locally:

```sh
zola serve
```

## Slides

Slides are Slidev decks. They live under `slidev/` and are built into
`static/slides/` before Zola runs.

Current decks:

- `slidev/01-functions-sequences/slides.md` -> `/slides/01-functions-sequences/`
- `slidev/02-sequences/slides.md` -> `/slides/02-sequences/`

Useful commands:

```sh
npm install
npm run dev:slides        # preview deck 01
npm run dev:slides:02     # preview deck 02
npm run build:slides:all  # build both decks into static/slides/
npm run export:slides     # export deck 01 to PDF
npm run export:slides:02  # export deck 02 to PDF
```

For presenting, use the Slidev dev server, for example:

```sh
npm run dev:slides:02
```

Then open `http://localhost:3030/presenter/`.

## Build Locally

Build for local inspection:

```sh
npm run build
```

The rendered Zola site is written to `_site/`.

Build exactly as GitHub Pages will publish it:

```sh
npm run build:pages
```

Clean generated output:

```sh
npm run clean
```

## Publish

Publish by committing and pushing source changes:

```sh
git add --all
git commit -m "Update Calculus 1 course site"
git push
```

GitHub Actions will build `_site/` and deploy it to GitHub Pages.

On GitHub, configure the `sonv/calc1` repository:

```text
Settings -> Pages -> Build and deployment -> Source: GitHub Actions
```

Leave the repository's custom domain blank. The `www.tsvan.xyz` custom domain
belongs to the user site, and GitHub Pages serves this project repository below
that domain at `/calc1/`.
