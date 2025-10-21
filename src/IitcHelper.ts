import Portal = IITC.Portal;

export class IitcHelper {

    public findViewPortals(): Portal[] {
        const portals: Portal[] = []

        for (const i in window.portals) {
            const portal = window.portals[i]

            if (portal.options.data.title) {
                portals.push(portal)
            }
        }

        return portals
    }

    public findPolygonPortals(): Portal[] {
        if (!window.plugin.drawTools) {
            alert('DrawTools are required')

            return []
        }

        const layerString: string = localStorage['plugin-draw-tools-layer']
        const layers = JSON.parse(layerString)
        const portals: Portal[] = []

        for (const i in window.portals) {
            const portal = window.portals[i]

            if (!portal.options.data.title) {
                continue
            }

            let portalInPolygon = false
            let polygonFound = false

            for (const i in layers) {
                if (layers[i].type === 'polygon') {
                    polygonFound = true
                    const polygon: L.LatLng[] = layers[i].latLngs
                    if (this.isPointInPolygon(portal.getLatLng(), polygon)) {
                        portalInPolygon = true
                        break
                    }
                }
            }

            if (!polygonFound) {
                alert('No polygon found')

                return []
            }

            if (portalInPolygon) {
                portals.push(portal)
            }
        }

        return portals
    }

    private isPointInPolygon(point: L.LatLng, polygon: L.LatLng[]): boolean {
        const x = point.lat, y = point.lng

        let isInside = false
        let i = 0, j = polygon.length - 1

        for (; i < polygon.length; j = i++) {
            const xi = polygon[i].lat, yi = polygon[i].lng
            const xj = polygon[j].lat, yj = polygon[j].lng
            const intersect = ((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)
            if (intersect) isInside = !isInside
        }

        return isInside
    }
}