import * as Plugin from 'iitcpluginkit'
import Portal = IITC.Portal
import {DialogHelper} from './DialogHelper'
import {IitcHelper} from './IitcHelper'
import {InventoryHelper} from './InventoryHelper'
import {ExportHelper} from './ExportHelper'
import './types/Types.ts'

class ExportPortals implements Plugin.Class {

    private selectionMode: string = 'view'
    private exportFormat: string = 'json'

    private dialogHelper: DialogHelper
    private iitcHelper: IitcHelper
    private inventoryHelper: InventoryHelper
    private exportHelper: ExportHelper

    private dialog: JQuery | undefined

    init() {
        console.log(`ExportPortals ${VERSION}`)

        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('./styles.css')

        this.dialogHelper = new DialogHelper()
        this.iitcHelper = new IitcHelper()
        this.inventoryHelper = new InventoryHelper()
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
        let portals: Portal[] = []

        const inventory = await this.inventoryHelper.getInventory()

        console.log(inventory)

        console.log(this.selectionMode, this.exportFormat)

        switch (this.selectionMode) {
            case 'view':
                portals = this.iitcHelper.findViewPortals()
                break
            case 'polygon':
                portals = this.iitcHelper.findPolygonPortals()
                break
            default:
                alert(`Unsupported mode: ${this.selectionMode}`)

                return
        }

        if (portals.length === 0) {
            alert('No Portals found.')

            return
        }

        const exportString = this.exportHelper.exportPortals(portals, this.exportFormat)

        $('#ExportPortalsOutput').val(exportString)
    }
}

export const main = new ExportPortals()

Plugin.Register(main, 'ExportPortals')
