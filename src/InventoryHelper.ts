import {Inventory} from "./types/Types"
import KeyCapsuleItem = Inventory.KeyCapsuleItem;
import Key = Inventory.Key;

export class InventoryHelper {
    public async getInventory() {
        const inventory: Inventory.Items = {
            keys: [],
            boosts: [],
            weapons: [],
            mods: [],
            keyCapsules: [],
        }

        try {
            const items = await this.fetchInventory()

            for (const item of items) {
                // item is a #/&§$%%$ array...
                const object = item[2]

                let type = '', designation = '', level = 0
                let boost: Inventory.Boost,
                    weapon: Inventory.Weapon,
                    modulator: Inventory.Modulator,
                    key: Inventory.Key,
                    keyCapsule: Inventory.KeyCapsule

                if (Object.prototype.hasOwnProperty.call(object, 'resource')) {
                    type = object.resource.resourceType
                } else if (Object.prototype.hasOwnProperty.call(object, 'resourceWithLevels')) {
                    type = object.resourceWithLevels.resourceType
                    level = object.resourceWithLevels.level
                } else if (Object.prototype.hasOwnProperty.call(object, 'modResource')) {
                    type = 'modResource'
                } else {
                    console.warn('No resource', object)
                }

                if (Object.prototype.hasOwnProperty.call(object, 'timedPowerupResource')) {
                    designation = object.timedPowerupResource.designation
                } else {
                    //console.log('NO timedPowerupResource', object)
                }

                switch (type) {
                    case 'modResource':
                        modulator = {
                            type: object.modResource.resourceType,
                            rarity: object.modResource.rarity,
                        }

                        inventory.mods.push(modulator)
                        break
                    case 'ULTRA_STRIKE':
                    case 'EMP_BURSTER':
                        weapon = {
                            type: type,
                            level: level
                        }

                        inventory.weapons.push(weapon)
                        break
                    case 'FLIP_CARD':
                        weapon = {
                            type: object.flipCard.flipCardType,
                            level: 0
                        }

                        inventory.weapons.push(weapon)
                        break
                    case 'PORTAL_LINK_KEY':
                        key = {
                            guid: object.portalCoupler.portalGuid,
                            title: object.portalCoupler.portalTitle,
                        }

                        inventory.keys.push(key)
                        break
                    case 'KEY_CAPSULE':
                        keyCapsule = {
                            differentiator: object.moniker.differentiator,
                            count: object.container.currentCount,
                            keys: this.listKeysInCapsule(object.container.stackableItems),
                        }

                        inventory.keyCapsules.push(keyCapsule)
                        break
                    case 'PORTAL_POWERUP':
                        boost = {
                            type: designation
                        }

                        inventory.boosts.push(boost)
                        break
                    case 'CAPSULE':
                    case 'KINETIC_CAPSULE':
                    case 'POWER_CUBE':
                    case 'BOOSTED_POWER_CUBE':
                    case 'EMITTER_A'://?
                    case 'PLAYER_POWERUP'://apex
                    case 'ENTITLEMENT'://???
                    case 'DRONE':
                        // todo process item
                        break
                    default:
                        console.warn(`Unknown type${type}`, object)
                        break
                }
            }

            return inventory
        } catch (error) {
            const element = document.getElementById('iitc-inventory-content')
            const message: string = error.message ?? error
            if (element) element.innerHTML = `<div style="color:crimson">Error: ${message}</div>`
        }

        return inventory
    }

    private listKeysInCapsule(items: any): KeyCapsuleItem[] {
        const keys = []
        for (const capsuleItem of items) {
            const coupler = capsuleItem.exampleGameEntity[2].portalCoupler

            const guid = coupler.portalGuid
            const key: Key = {
                guid: guid,
                title: coupler.portalTitle,
            }
            const item: KeyCapsuleItem = {
                key: key,
                count: capsuleItem.itemGuids.length,
            }

            keys.push(item)
        }
        return keys
    }

    private async fetchInventory() {
        const isEnabled = false // todo load data from cache

        let items: any[]

        if (isEnabled) {
            const response = await this.postAjax('getInventory', {lastQueryTimestamp: 0})

            items = response.result

        } else {
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            const json = require('../testfiles/example.json')

            items = json.result
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return items
    }

    private postAjax(action: string, data: any): PromiseLike<any> {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return new Promise((resolve, reject) => window.postAjax(
            action,
            data,
            (returnValue) => resolve(returnValue),
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            (_, textStatus, errorThrown) => reject(textStatus + ': ' + errorThrown)
        ))
    }
}