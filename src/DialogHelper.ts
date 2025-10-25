// @ts-expect-error "Import attributes are only supported when the --module option is set to esnext, nodenext, or preserve"
import dialogTemplate from './templates/dialog.hbs' with {type: 'text'}

import * as Handlebars from 'handlebars'

Handlebars.registerHelper('if_eq', function (argument1, argument2, options) {
    // @ts-expect-error 'llllllllll'
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return,@typescript-eslint/no-unsafe-call
    return (argument1 == argument2) ? options.fn(this) : options.inverse(this)
})

export class DialogHelper {
    public constructor(
        private pluginName: string
    ) {}

    public getDialog(): JQuery {
        const template: HandlebarsTemplateDelegate = Handlebars.compile(dialogTemplate)

        const selectOptions = {
            '': 'Select...',
            view: 'View',
            polygon: 'Polygon(s)',
        }

        const formatOptions = {
            json: 'JSON'
        }

        const fieldOptions = {
            guid: 'GUID',
            title: 'Title',
            lat: 'Latitude',
            lng: 'Longitude',
            level: 'Level',
            team: 'Team',
            health: 'Health',
            resCount: 'Resonator Count',
            timestamp: 'Timestamp',
            keys: 'Keys',
            keyData: 'Key Data',
        }

        const data = {
            plugin: 'window.plugin.' + this.pluginName,
            prefix: this.pluginName,
            selectOptions: selectOptions,
            formatOptions: formatOptions,
            fieldOptions: fieldOptions,
        }

        const dialog = window.dialog({
            id: this.pluginName,
            title: 'Export',
            html: template(data),
        }).parent()

        const windowHeight: number = $(window).height() ?? 100
        const windowWidth: number = $(window).width() ?? 100

        const dialogHeight: number = dialog.height() ?? 50
        const dialogWidth: number = dialog.width() ?? 50

        dialog
            .css('width', '600px')
            .css('top', (windowHeight - dialogHeight) / 2)
            .css('left', (windowWidth - dialogWidth) / 2)

        return dialog
    }

    public findFieldOptions(): string[] {
        const options = []
        const parentElement = document.getElementById(this.pluginName + 'Container')

        if (!parentElement) {
            console.error('findFieldOptions: parentElement not found')

            return []
        }

        const checkboxes: NodeListOf<HTMLInputElement> =
            parentElement.querySelectorAll('input[type="checkbox"][name="chkFields"]')

        for (const checkbox of checkboxes) {
            if (checkbox.checked) {
                options.push(checkbox.value)
            }
        }

        return options
    }
}