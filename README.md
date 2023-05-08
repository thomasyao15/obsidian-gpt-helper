# Obsidian GPT Helper Plugin

This is a simple plugin that gets the current Active file open in Obsidian and writes its path to /tmp/obsidian-active-file.txt
- This is used to support my Alfred workflow available at https://github.com/thomasyao15/windowed-chatgpt

## How to use

- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.
- OR create a sym link using `ln -s /path/to/plugin/ /path/to/VaultFolder/.obsidian/plugins/your-plugin-id/`
