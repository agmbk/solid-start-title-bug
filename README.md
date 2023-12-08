# SolidStart

## Bug

### Description

Extra quote in the page title shown in the browser tab.
I think it only happens SSR.

### Steps to Reproduce

```bash
pnpm i
pnpm run dev
```

Open the website in the browser.
Notice the extra quote in the page title.

### Environment

- Windows 11 + WSL2 (Ubuntu 22.04)
- Node.js v18.18.0 (LTS)
- Pnpm v8.10.5

### Browsers

#### Chrome

Version 119.0.6045.200 (Build officiel) (64 bits)

#### Opera GX

System:Windows 11 64-bit
Chromium version:118.0.5993.118

#### Firefox

Version 120.0.1 (64 bits)
