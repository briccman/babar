// Preferences UI for BaBar GNOME Shell extension

import Gio from 'gi://Gio';
//import Gtk from 'gi://Gtk';
import Adw from 'gi://Adw';
//import * as Me from './extension.js';
import {ExtensionPreferences} from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';
import {gettext as _} from 'gettext';
//import * as Main from 'resource:///org/gnome/shell/ui/main.js';

function init() {
}

/*function make_item(label, schema, type, min, max) {
    this.item_label = new Adw.Label({
        label: label,
        margin_start: 14,
        halign: Adw.Align.START,
        visible: true
    });
    let grid = new Adw.Grid({
    	visible: true,
    	margin_start: 18,
        margin_end: 18,
    	margin_top: 2,
    	margin_bottom: 2,
    	column_spacing: 96
    });
    grid.attach(this.item_label, 0, 0, 1, 1);

	if (type == 'b') {
		this.item_value = new Adw.Switch({
		    active: this.settings.get_boolean(schema),
		    halign: Adw.Align.END,
		    hexpand: true,
		    visible: true
		});
		
		grid.attach(this.item_value, 1, 0, 1, 1);

    	this.settings.bind(
		    schema,
		    this.item_value,
		    'active',
		    Gio.SettingsBindFlags.DEFAULT
    	);
	}
	
	if (type == 'i') {
		this.item_adjustment = new Adw.Adjustment({
			lower: min,
			upper: max,
			step_increment: 1
		});
		this.item_value = new Adw.SpinButton({
			adjustment: this.item_adjustment,
			value: this.settings.get_int(schema),
		    halign: Adw.Align.END,
		    hexpand: true,
		    visible: true
		});
		
		grid.attach(this.item_value, 1, 0, 1, 1);

		this.settings.bind(
		    schema,
		    this.item_value,
		    'value',
		    Gio.SettingsBindFlags.DEFAULT
		);
	}
	
	if (type == 's') {
		this.item_value = new Adw.Entry({
			text: this.settings.get_string(schema),
		    halign: Adw.Align.END,
		    hexpand: true,
		    visible: true
		});
		
		grid.attach(this.item_value, 1, 0, 1, 1);

		this.settings.bind(
		    schema,
		    this.item_value,
		    'text',
		    Gio.SettingsBindFlags.DEFAULT
		);
	}
    this.list['append'](grid);
}
*/

/*function make_section_title(title) {
	this.section_title = new Adw.Label({
        label: '<b>' + title + '</b>',
        halign: Adw.Align.START,
        use_markup: true,
        margin_start: 8,
        margin_top: 2,
    	margin_bottom: 2,
        visible: true,
    });
    this.list['append'](this.section_title);
    
}
*/

/*function buildPrefsWidget() {
	//this.settings = ExtensionUtils.getSettings('org.gnome.shell.extensions.babar');
	//this.settings = new Gio.Settings({ schema_id: 'org.gnome.shell.extensions.babar' });
	let schemaSource = Gio.SettingsSchemaSource.new_from_directory(
		Me.dir.get_child('schemas').get_path(),
		Gio.SettingsSchemaSource.get_default(),
		false
	);

	let schemaObj = schemaSource.lookup('org.gnome.shell.extensions.babar', true);
	this.settings = new Gio.Settings({ settings_schema: schemaObj });

	this.prefsWidget = new Gtk.ScrolledWindow({
		visible: true,
		margin_start: 18,
        margin_end: 18,
        margin_top: 18,
        margin_bottom: 18,
        vexpand: true,
		hscrollbar_policy: Gtk.PolicyType.NEVER,
		vscrollbar_policy: Gtk.PolicyType.AUTOMATIC
	});
    this.list = new Gtk.ListBox({
        selection_mode: null,
        can_focus: false,
        visible: true
    });
    this.prefsWidget['set_child'](this.list);

	// items
    make_section_title('Elements (default value)');

	make_item('Activities (false)', 'display-activities', 'b');
    make_item('Applications grid (true)', 'display-app-grid', 'b');
    make_item('Favorites menu (true)', 'display-favorites', 'b');
    make_item('Workspaces (true)', 'display-workspaces', 'b');
    make_item('Tasks (true)', 'display-tasks', 'b');
    make_item('Application menu (false)', 'display-app-menu', 'b');
    make_item('Dash in overview (true)', 'display-dash', 'b');
    make_item('Workspaces thumbnails in overview (true)', 'display-workspaces-thumbnails', 'b');
    
    make_section_title('Appearance (default value)');
    
    make_item('Reduce elements padding (true)', 'reduce-padding', 'b');
    make_item('Places extension label to icon (true)', 'display-places-icon', 'b');
    make_item('Rounded workspaces icons (false)', 'rounded-workspaces-buttons', 'b');
    make_item('Plain workspaces icons (false)', 'plain-workspaces-buttons', 'b');
    make_item('Remove color from tasks icons (false)', 'desaturate-icons', 'b');
    make_item('Move panel to the bottom of the screen (false)', 'bottom-panel', 'b');
    make_item('Task icon size (18: Shell <= 3.38, 20: Shell >= 40)', 'icon-size', 'i', 8, 64);
	make_item('Thumbnail maximum size % (25)', 'thumbnail-max-size', 'i', 10, 100);
    make_item('Applications grid icon (view-app-grid-symbolic)', 'app-grid-icon-name', 's');
    make_item('Places icon (folder-symbolic)', 'places-icon-name', 's');
    make_item('Favorites icon (starred-symbolic)', 'favorites-icon-name', 's');
    
    make_section_title('Behavior (default value)');
    
	make_item('Workspaces: left click to show, right-click to show or toggle overview (false)', 'workspaces-right-click', 'b');
    make_item('Tasks: right-click to show window thumbnail (true)', 'right-click', 'b');
    make_item('Tasks: middle-click to close window (true)', 'middle-click', 'b');
	make_item('Tasks: sort favorites first (false)', 'favorites-first', 'b');
	
    // return widget
    return this.prefsWidget;
}

export default buildPrefsWidget;*/

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

		
        /*// Create a new preferences row
        const activityRow = new Adw.SwitchRow({
            title: _('Activities'),
            subtitle: _('Whether to show Activities'),
        });
        elementGroup.add(activityRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('display-activities', activityRow, 'inactive',
            Gio.SettingsBindFlags.DEFAULT);
		*/

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

        /*// Create a new preferences row
        const appMenuRow = new Adw.SwitchRow({
            title: _('Application Menu'),
            subtitle: _('Whether to show Application Menu'),
        });
        elementGroup.add(appMenuRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('display-app-menu', appMenuRow, 'inactive',
            Gio.SettingsBindFlags.DEFAULT);
		*/

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

        /*// Create a new preferences row
        const thumbnailRow = new Adw.SwitchRow({
            title: _('Workspace Thumbnails in Overview'),
            subtitle: _('Whether to show Workspace Thumbnails in Overview'),
        });
        elementGroup.add(thumbnailRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('display-workspaces-thumbnails', thumbnailRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);
		*/


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

        /*// Create a new preferences row
        const placesRow = new Adw.SwitchRow({
            title: _('Places Icon'),
            subtitle: _('Whether to display Places Icon'),
        });
        appearanceGroup.add(placesRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('display-places-icon', placesRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);
		*/

        /*// Create a new preferences row
        const roundIconRow = new Adw.SwitchRow({
            title: _('Rounded Workspaces Icons'),
            subtitle: _('Whether to display Rounded Workspace Icons'),
        });
        appearanceGroup.add(roundIconRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('rounded-workspaces-buttons', roundIconRow, 'inactive',
            Gio.SettingsBindFlags.DEFAULT);
		*/

        /*// Create a new preferences row
        const plainIconRow = new Adw.SwitchRow({
            title: _('Plain Workspaces Icons'),
            subtitle: _('Whether to display Plain Workspace Icons'),
        });
        appearanceGroup.add(plainIconRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('plain-workspaces-buttons', plainIconRow, 'inactive',
            Gio.SettingsBindFlags.DEFAULT);
		*/

        /*// Create a new preferences row
        const desaturateRow = new Adw.SwitchRow({
            title: _('Colorless Task Icons'),
            subtitle: _('Remove Color from Task Icons'),
        });
        appearanceGroup.add(desaturateRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('desaturate-icons', desaturateRow, 'inactive',
            Gio.SettingsBindFlags.DEFAULT);
		*/

        /*// Create a new preferences row
        const bottomPanelRow = new Adw.SwitchRow({
            title: _('Panel on Bottom'),
            subtitle: _('Move Panel to the Bottom of the Screen'),
        });
        appearanceGroup.add(bottomPanelRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('bottom-panel', bottomPanelRow, 'inactive',
            Gio.SettingsBindFlags.DEFAULT);
		*/

       /* // Create a new preferences row
        const taskIconRow = new Adw.SwitchRow({
            title: _('Task Icon Size'),
            subtitle: _('Task Icon Size'),
        });
        appearanceGroup.add(taskIconRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('icon-size', taskIconRow, 'inactive',
            Gio.SettingsBindFlags.DEFAULT);

        // Create a new preferences row
        const maxThumbnailRow = new Adw.SwitchRow({
            title: _('Thumbnail Max Size %'),
            subtitle: _('Maximum Thumbnail Size %'),
        });
        appearanceGroup.add(maxThumbnailRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('thumbnail-max-size', maxThumbnailRow, 'inactive',
            Gio.SettingsBindFlags.DEFAULT);

        const behaviorGroup = new Adw.PreferencesGroup({
            title: _('Behavior'),
            description: _('Configure Behavior of the extension'),
        });
        page.add(behaviorGroup);

        // Create a new preferences row
        const rightClickRow = new Adw.SwitchRow({
            title: _('Right Click Function'),
            subtitle: _('Choose Right-Click Function'),
        });
        behaviorGroup.add(rightClickRow);

        // Create a settings object and bind the row to the `show-indicator` key
        //window._settings = this.getSettings();
        window._settings.bind('right-click', rightClickRow, 'active',
            Gio.SettingsBindFlags.DEFAULT);
		*/
	}
}