# Obsidian GPT Helper Plugin

This is a simple plugin that gets the current Active file open in Obsidian and writes its path to /tmp/obsidian-active-file.txt
- This is used to support my Alfred workflow available at https://github.com/thomasyao15/windowed-chatgpt

## Manually installing the plugin into obsidian

- Go to your Obsidian vault folder and create a new folder in `.obsidian/plugins` called `obsidian-gpt-helper` (you may need to press `CMD + shift + .` to reveal the .obsidian folder)
- Go to this new folder in terminal and run the command `git clone https://github.com/thomasyao15/obsidian-gpt-helper.git`
- OR create a sym link using `ln -s /path/to/plugin/ /path/to/VaultFolder/.obsidian/plugins/your-plugin-id/` (Advanced option)
- Restart Obsidian and enable the Windowed GPT helper plugin in the Obsidian settings

## How to develop

- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.
