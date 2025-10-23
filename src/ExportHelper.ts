import {IitcHelper} from './IitcHelper'
import {InventoryHelper} from './InventoryHelper'

import {ExportObject, ExportOptions} from './types/Types'

export class ExportHelper {

    private iitcHelper: IitcHelper
    private inventoryHelper: InventoryHelper

    constructor() {
        this.iitcHelper = new IitcHelper()
        this.inventoryHelper = new InventoryHelper()
    }

    async exportPortals(options: ExportOptions) {

        const portals = this.findPortals(options.selectionMode)
        let keyInfo

        if (options.exportUserData) {
            const inventory = await this.inventoryHelper.getInventory()

            keyInfo = this.inventoryHelper.getKeysInfo(inventory)
        }

        const exported = []

        for (const portal of portals) {
            const data = portal.options.data

            // todo define what to export
            const exportObject: ExportObject = {
                guid: portal.options.guid,
                title: data.title,
                lat: data.latE6 / 1e6,
                lng: data.lngE6 / 1e6,
                level: data.level,
                team: data.team,
                health: data.health,
                resCount: data.resCount,
                timestamp: Date.now(),
            }

            if (options.exportUserData && keyInfo) {
                exportObject.keyInfo = keyInfo.get(portal.options.guid)
                console.info(exportObject.keyInfo)
            }

            exported.push(exportObject)
        }

        console.info(exported)

        let exportString = ''

        // todo add more formats
        switch (options.format) {
            case 'json':
                exportString = JSON.stringify(exported, undefined, 2)
                break

            default:
                throw new Error(`Unsupported format ${options.format}`)
        }

        return exportString
    }

    private findPortals(method: string) {
        let portals: IITC.Portal[] = []

        switch (method) {
            case 'view':
                portals = this.iitcHelper.findViewPortals()
                break
            case 'polygon':
                portals = this.iitcHelper.findPolygonPortals()
                break
            default:
                throw new Error(`Unsupported method: ${method}`)
        }

        if (portals.length === 0) throw new Error('No Portals found.')

        return portals
    }
}