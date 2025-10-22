// @ts-expect-error "wwwwwwwwww"
import html from './template/dialog.hbs' with {type: 'text'}

import * as Handlebars from 'handlebars'

Handlebars.registerHelper('eachInMap', (map: Map<string, string>, block) => {
    let out = ''
    for (const [key, value] of map) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const str: string = block.fn({ key, value })
        out += str
    }
    return out
})

export class DialogHelper {
    public getDialog(): JQuery {
        const template: HandlebarsTemplateDelegate = Handlebars.compile(html)

        const selectOptions = new Map([
            ['view', 'View'],
            ['polygon', 'Polygon(s)'],
        ])

        const formatOptions = new Map([
            ['json', 'JSON'],
        ])

        const data = {
            plugin: 'window.plugin.ExportPortals',
            prefix: 'ExportPortals',
            selectOptions: selectOptions,
            formatOptions: formatOptions,
        }

        const dialog = window.dialog({
            title: 'Export',
            html: template(data),
        }).parent()

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