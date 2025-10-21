export class ExportHelper {

    exportPortals(portals: IITC.Portal[], exportFormat: string) {
        const exported = []

        for (const portal of portals) {
            const data = portal.options.data

            exported.push({
                guid: portal.options.guid,
                title: data.title,
                lat: data.latE6 / 1e6,
                lng: data.lngE6 / 1e6,
                level: data.level,
                team: data.team,
                health: data.health,
                resCount: data.resCount,
                timestamp: Date.now()
            })
        }

        let exportString = ''

        switch (exportFormat) {
            case 'json':
                exportString = JSON.stringify(exported, undefined, 2)
                break

            default:
                alert(`Unsupported exportFormat ${exportFormat}`)
        }

        return exportString
    }
}