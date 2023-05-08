import { Notice, Plugin } from "obsidian";
import fs from "fs";

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: "default",
};

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;
	updateFilePathInterval: NodeJS.Timeout;

	async onload() {
		await this.loadSettings();

		this.updateFilePathInterval = setInterval(() => {
			const activeFile = this.app.workspace.getActiveFile();
			let filePath = activeFile
				? this.app.vault.adapter.getResourcePath(activeFile.path)
				: null;

			if (filePath) {
				// Remove the "app://local" prefix from the file path
				filePath = filePath.replace(/^app:\/\/local/, "");

				// Remove the "?number" suffix from the file path
				filePath = filePath.replace(/\?\d+$/, "");

				// Replace the "%20" characters with escaped spaces
				filePath = filePath.replace(/%20/g, "\\ ");
			}

			fs.writeFile(
				"/tmp/obsidian-active-file.txt",
				filePath ?? "",
				(err) => {
					if (err) {
						console.error("Error writing active file path:", err);
					}
				}
			);
		}, 1000); // Update the file every 1 second (1000 ms)

		// Create a ribbon icon that shows the currently open file path
		const ribbonIconEl = this.addRibbonIcon(
			"file",
			"Get active file path",
			async (evt: MouseEvent) => {
				const activeFile = this.app.workspace.getActiveFile();
				let filePath = activeFile
					? this.app.vault.adapter.getResourcePath(activeFile.path)
					: null;

				if (filePath) {
					// Remove the "app://local" prefix from the file path
					filePath = filePath.replace(/^app:\/\/local/, "");

					// Remove the "?number" suffix from the file path
					filePath = filePath.replace(/\?\d+$/, "");

					// Replace the "%20" characters with escaped spaces
					filePath = filePath.replace(/%20/g, "\\ ");
				}
				if (!filePath) {
					new Notice("No active file!");
				} else {
					new Notice(`Currently open file path: ${filePath}`);
				}
			}
		);

		// Perform additional things with the ribbon
		ribbonIconEl.addClass("my-plugin-ribbon-class");
	}

	onunload() {
		clearInterval(this.updateFilePathInterval);
	}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
