// @ts-expect-error "wwwwwwwwww"
import html from './template/dialog.hbs' with {type: 'text'}

import * as Handlebars from 'handlebars'

export class DialogHelper {
    public getDialog(): JQuery {
        const template: HandlebarsTemplateDelegate = Handlebars.compile(html)

        const data = {
            plugin: 'window.plugin.ExportPortals',
            prefix: 'ExportPortals',
        }

        const dialog = window.dialog({
            title: 'Export',
            html: template(data),
        }).parent()

        //$('.ui-dialog-buttonpane', dialog).remove()

        const windowHeight: number = $(window).height() ?? 100
        const windowWidth: number = $(window).width() ?? 100
        const dialogHeight: number = dialog.height() ?? 50
        const dialogWidth: number = dialog.width() ?? 50

        dialog.css('width', '600px')
            .css('top', (windowHeight - dialogHeight) / 2)
            .css('left', (windowWidth - dialogWidth) / 2)

        return dialog
    }
}