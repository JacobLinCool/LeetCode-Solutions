# LeetCode-Solutions-Template

Template for leetcode-dump with GitHub Action, build solution repository and website.

## Usage

### Quick Start

1. Fork, or use this repository as template.
2. Add `LEETCODE_SESSION` to [GitHub Action Secret](../../settings/secrets/actions).
3. Run [**Dump** workflow](../../actions/workflows/dump.yml).
4. After that, [enable GitHub Pages from settings](../../settings/pages).

> - The dumped solutions will be in `main` branch.
> - The built website will be in `gh-pages` branch.

### Custom Domain

Edit `echo "" > ./site/CNAME` in `.github/workflows/dump.yml` to `echo "your.domain" > ./site/CNAME`.

### Deploy to Other Repository / Branch

See [peaceiris/actions-gh-pages > Deploy to external repository](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-deploy-to-external-repository-external_repository).
