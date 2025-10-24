import * as Plugin from 'iitcpluginkit'

import {DialogHelper} from './DialogHelper'
import {ExportHelper} from './ExportHelper'

import './types/Types.ts'

const PLUGIN_NAME = 'ExportPortals'

class ExportPortals implements Plugin.Class {

    private selectionMode: string
    private exportFormat = 'json'

    private dialogHelper: DialogHelper
    private exportHelper: ExportHelper

    private dialog: JQuery | undefined

    init() {
        console.log(`${PLUGIN_NAME} ${VERSION}`)

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
        if (!this.selectionMode) {
            alert('Please select a selection mode')

            return
        }

        const exportUserData = true
        let exportString: string

        try {
            exportString = await this.exportHelper.exportPortals({
                selectionMode: this.selectionMode,
                format: this.exportFormat,
                exportUserData: exportUserData,
            })
        } catch (error) {
            // todo some status container
            console.error(error)
            exportString = error.message
        }

        const output = document.getElementById(PLUGIN_NAME + 'Output') as HTMLFormElement

        output.value = exportString
    }
}

export const main = new ExportPortals()

Plugin.Register(main, PLUGIN_NAME)
