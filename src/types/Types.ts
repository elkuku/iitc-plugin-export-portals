// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Inventory {
    export interface Items {
        mods: Modulator[];
        weapons: Weapon[]
        keys: Key[]
        boosts: Boost[]
        keyCapsules: KeyCapsule[]
    }

    export interface Boost {
        type: string
    }

    export interface Weapon {
        type: string
        level: number
    }

    export interface Modulator {
        type: string
        rarity: IITC.ModRarity
    }

    export interface Key {
        guid: string
        title: string
    }

    export interface KeyCapsuleItem {
        key: Key
        count: number
    }

    export interface KeyCapsule {
        differentiator: string
        count: number
        keys: KeyCapsuleItem[]
    }
}

export interface KeyInfo {
    totalCount: number,
    atHand: number,
    capsules: any,
}

export interface ExportObject {
    guid: string,
    title: string,
    lat: number,
    lng: number,
    level: number,
    team: string,
    health: number,
    resCount: number,
    timestamp: number,
    keyInfo?: KeyInfo
}

export interface ExportOptions {
    selectionMode: string,
    format: string,
    exportUserData: boolean,
}