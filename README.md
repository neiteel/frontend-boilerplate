# Frontend Boilerplate

The Frontend Boilerplate can be used to create static and WordPress websites.

## Installation

- Node.js 16+
- Yarn or npm
- PHP 7.4+ ([Timber](https://github.com/timber/timber) is optional)
- Composer
- Python 3.7+ ([dj Lint](https://github.com/Riverside-Healthcare/djlint) is optional)

With Yarn

```bash
yarn
```

If you want to use it in WordPress.

```bash
cd theme
composer install
```

## Usage

### Development server

Eleventy runs the dev-server and uses Vite as middleware.

```bash
yarn start
```

If you want to use Vite in your local WordPress site.

```bash
yarn dev
```

### Production build

Building your static site

```bash
yarn generate
```

Building for your WordPress site.

```bash
yarn build
```

## Features

- Basically, you can use it with any CMS.
- The WordPress starter theme that uses modern frontend development tools.
- [Vite](https://github.com/vitejs/vite)
- [11ty](https://github.com/11ty/eleventy)
- [ESLint](https://github.com/eslint/eslint)
- [dj Lint](https://github.com/Riverside-Healthcare/djlint)
- [Prettier](https://github.com/prettier/prettier)
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
- [Timber](https://github.com/timber/timber)

## Why do I combine SSG with CMS?

I just want to reduce the development cost of transferring SSG to WordPress.

Try to imagine

### DAY 1

🦍 : Yo, can you create a website for me that doesn't require a backend?<br>
🐒 : Sure.

### DAY 7

🐒 : Done.<br>
🦍 : Okay, where can I find my WordPress dashboard?<br>
🐒 : 🤪
