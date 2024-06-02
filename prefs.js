/* 
	BaBar
	(c) Francois Thirioux 2021
	Contributors: @fthx, @wooque, @frandieguez, @kenoh, @justperfection
	License GPL v3
*/
/* 
	BaBar
	(c) Brian Hanks 2024 
	Contributors: @briccman
	License GPL v3
*/

// Preferences UI for BaBar GNOME Shell extension

import Gio from 'gi://Gio';
import Adw from 'gi://Adw';
import {ExtensionPreferences} from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';
import {gettext as _} from 'gettext';



export default class BabarPreferences extends ExtensionPreferences {
	fillPreferencesWindow(window) {
		window._settings = this.getSettings('org.gnome.shell.extensions.babar');

		const page = new Adw.PreferencesPage({
            title: _('Babar Settings'),
            icon_name: 'dialog-information-symbolic',
        });
        window.add(page);

        const elementGroup = new Adw.PreferencesGroup({
            title: _('Elements'),
            description: _('Configure Elements of the extension'),
        });
        page.add(elementGroup);

        // Create a new preferences row
        const appGridRow = new Adw.SwitchRow({
            title: _('Applications Grid'),
            subtitle: _('Applications Grid-PanelMenu'),
        });
        elementGroup.add(appGridRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('display-app-grid', appGridRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);

        // Create a new preferences row
        const favoritesRow = new Adw.SwitchRow({
            title: _('Favorites Menu'),
            subtitle: _('Show Favorites Menu'),
        });
        elementGroup.add(favoritesRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('display-favorites', favoritesRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);

        // Create a new preferences row
        const workspacesRow = new Adw.SwitchRow({
            title: _('Workspace Icons'),
            subtitle: _('Show Workspace Icons'),
        });
        elementGroup.add(workspacesRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('display-workspaces', workspacesRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);

        // Create a new preferences row
        const tasksRow = new Adw.SwitchRow({
            title: _('Tasks'),
            subtitle: _('Show Running Tasks'),
        });
        elementGroup.add(tasksRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('display-tasks', tasksRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);

        // Create a new preferences row
        const dashRow = new Adw.SwitchRow({
            title: _('Dash in Gnome Panel Overview'),
            subtitle: _('Show Dash in Gnome Panel Overview'),
        });
        elementGroup.add(dashRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('display-dash', dashRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);

        const appearanceGroup = new Adw.PreferencesGroup({
            title: _('Appearance'),
            description: _('Configure Appearance of the extension'),
        });
        page.add(appearanceGroup);

        // Create a new preferences row
        const paddingRow = new Adw.SwitchRow({
            title: _('Compact Layout'),
            subtitle: _('Reduce Element Padding for Compact Layout'),
        });
        appearanceGroup.add(paddingRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('reduce-padding', paddingRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);

	}
}