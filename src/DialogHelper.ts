// @ts-expect-error "Import attributes are only supported when the --module option is set to esnext, nodenext, or preserve"
import dialogTemplate from './templates/dialog.hbs' with {type: 'text'}

import * as Handlebars from 'handlebars'

export class DialogHelper {
    public getDialog(): JQuery {
        const template: HandlebarsTemplateDelegate = Handlebars.compile(dialogTemplate)

        const selectOptions = {
            view: 'View',
            polygon: 'Polygon(s)',
        }

        const formatOptions = {
            json: 'JSON'
        }

        const data = {
            plugin: 'window.plugin.ExportPortals',
            prefix: 'ExportPortals',
            selectOptions: selectOptions,
            formatOptions: formatOptions,
        }

        const dialog = window.dialog({
            id: 'ExportPortals',
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
}