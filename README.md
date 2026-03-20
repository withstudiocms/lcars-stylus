# LCARS Design system for Stylus

[![NPM Version](https://img.shields.io/npm/v/@withstudiocms/lcars-stylus)](https://npm.im/@withstudiocms/lcars-stylus)
[![pkg.pr.new](https://pkg.pr.new/badge/withstudiocms/lcars-stylus)](https://pkg.pr.new/~/withstudiocms/lcars-stylus)

LCARS is a purely CSS and HTML framework (Served as `.styl` Stylus files), similar to Bootstrap, Foundation, Topcoat, Brick, or Pure to create user interfaces similar to a certain popular sci-fi franchise. There are a few requirements in terms of HTML element nesting and corresponding CSS classes that are necessary for the styling to apply correctly, please checkout our example theme for details about how to implement this.

## Requirements

- Stylus - [Learn more Here](https://stylus-lang.com/)
- LCARS GTJ3 font - [Available Here](https://gtjlcars.de/LCARSindex/LCARSFONTS.htm)

## Usage

### Basic Usage in Astro

#### Ensure Stylus is installed

```sh
npm install stylus
```

### Font Setup with Astro Fonts

In your Astro config file ensure you download the font above, and add it using the following example:

```ts
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        // https://gtjlcars.de/LCARSindex/LCARSFONTS.htm
        provider: fontProviders.local(),
        name: "LCARSGTJ3",
        cssVariable: "--font-lcarsgtj3",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        display: 'swap',
        options: {
            variants: [{
                src: ['./src/assets/fonts/LCARSGTJ3.woff2'],
                weight: "100 900",
                style: 'normal',
                display: 'swap'
            }]
        }
    }]
});
```

If you are not using Astro, the important thing here is to ensure the font is loaded, and available to the application as the `--font-lcarsgtj3` css variable.

#### Add to your Layout

In your `Layout.astro`

```astro
---
import "@withstudiocms/lcars-stylus"; 
// OR
import "@withstudiocms/lcars-stylus/index.styl";

import { Font } from "astro:assets";
---
<html>
    <head>
        <!-- Head content here -->
        <Font cssVariable="--font-lcarsgtj3" preload />
    </head>
    <body>
        <!-- Body content here -->
    </body>
</html>
```

### Astro Components

These components will be available as part of the `@withstudiocms/lcars-stylus/astro/...` exports

- `components/`
  - `Bar.astro` - Used to fill spaces and to create top or bottom horizontal bars.
  - `BarTitle.astro` - Used to add a title to a bar.
  - `Bracket.astro` - Decorative Brackets. Use to group elements.
  - `Column.astro` - Creates a column layout.
  - `DataTable.astro` - Simple, two-dimensional tabularly structured data display.
  - `Divider.astro` - Create a divider on the page.
  - `Elbow.astro` - The iconic LCARS frame elbow.
  - `LElement.astro` - Elements (Known as `LElements` short for "LCARS Element") are the basic blocks of LCARS. They can be used as buttons and indicators. Use the grid classes to set the size. The html "div" is typically the preferred tag to assign the lcars-element tag to.
  - `Row.astro` - Creates a row layout.
  - `TextBox.astro` - A display-only text box with pre-defined font sizes. Use to fit headers and indicators, but not for large texts. **Also not for text inputs**.
- `layouts/`
  - `Basic.astro` - The Basic/Classic single frame LCARS Layout for Astro.
- `utility/`
  - `LCARSAudio.astro` - UI Audio controller
  - `LCARSColorFix.astro` - UI Dark/light text color fixer, Makes text color white or black depending on background color.
  - `LCARSLoading.astro` - A simple loading screen that can be displayed on top as an overlay during transitions, or while waiting for something.

### Checkout the Example project for usage examples

Checkout the main Example theme built with Astro for how to work with this project.

- [Astro-LCARS theme](https://github.com/withstudiocms/astro-lcars)

## Licensing

MIT Licensed 2026-Present - withstudiocms

LCARS is a copyright of CBS Studios INC. and Star Trek. All rights reserved. This project is not endorsed or affiliated with CBS or Star Trek in any way, this is a fan project meant solely for fun!