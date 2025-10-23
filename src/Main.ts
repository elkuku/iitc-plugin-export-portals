import * as Plugin from 'iitcpluginkit'

import {DialogHelper} from './DialogHelper'
import {ExportHelper} from './ExportHelper'

import './types/Types.ts'

class ExportPortals implements Plugin.Class {

    private selectionMode: string = 'view'
    private exportFormat: string = 'json'

    private dialogHelper: DialogHelper
    private exportHelper: ExportHelper

    private dialog: JQuery | undefined

    init() {
        console.log(`ExportPortals ${VERSION}`)

        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('./styles.css')

        this.dialogHelper = new DialogHelper()
        this.exportHelper = new ExportHelper()

        this.createButtons()
    }

    private createButtons(): void {
        $('#toolbox').append(
            $('<a>', {
                text: 'KuKuXport',
                click: () => this.showDialog()
            })
        )
    }

    private showDialog(): void {
        if (!this.dialog) {
            this.dialog = this.dialogHelper.getDialog()
            this.dialog.on('dialogclose', () => {
                this.dialog = undefined
            })
        }
    }

    public switchMode(mode: string): void {
        this.selectionMode = mode
    }

    public switchFormat(format: string): void {
        this.exportFormat = format
    }

    public async doExport(): Promise<void> {
        const exportUserData = true
        let exportString = ''

        try {
            exportString = await this.exportHelper.exportPortals({
                selectionMode: this.selectionMode,
                format: this.exportFormat,
                exportUserData: exportUserData,
            })
        } catch (error) {
            console.error(error)
        }
        // @ts-expect-error 'we expect a form element...'
        const output: HTMLFormElement | null = document.getElementById('ExportPortalsOutput')

        if (null !== output) {
            output.value = 'AHA' + exportString
        }

        // $('#ExportPortalsOutput').val(exportString)
    }
}

export const main = new ExportPortals()

Plugin.Register(main, 'ExportPortals')
