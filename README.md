# hexo-theme-fact

**Fact** is a simple but powerful theme for [Hexo](https://hexo.io/). It comes with integration of tags, categories, archive and table-of-contents. The style design is inspired by [V2EX](http://v2ex.com/). 

## Installation

I assume you already have a Hexo blog initialized.

```bash
cd <path-to-hexo-folder>/themes
git clone git@github.com:artchen/hexo-theme-fact.git fact
```

Don't forget to modify `_config.yml` under root directory of Hexo blog. Change theme to Fact.

```javascript
theme: fact
```

## Configuration

Some configuration can be found in `_config.yml` under the `themes/fact` directory.

## Update

```bash
cd <path-to-hexo-folder>/themes/fact
git pull
```

## Fonts

I used [Futura](https://typekit.com/fonts/futura-pt) for text, and [Inconsolata](https://typekit.com/fonts/inconsolata) for source code. Both of them are hosted on [Typekit](https://typekit.com/fonts).

If you do not use Typekit, here are the necessary steps to switch to other services:

1. In `layout/_partial/head.ejs`, delete the lines that include the typekit library, then include necessary files from your choice of web fonts (eg: [Google Font](https://www.google.com/fonts)).
2. In `source/css/_sass/style.scss`, change the font macros to your choices.

## Screenshot

![Fact Screenshot](demo/screenshot.png)
