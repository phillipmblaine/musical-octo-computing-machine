export interface Pokemon {
    // abilities: any;
    base_experience: number;
    // forms: any;
    // game_indicies: any;
    height: number;
    // held_items: any[];
    id: number;
    // is_default: boolean;
    // location_area_encounters: string;
    // moves: any;
    name: string;
    // order: number;
    species: {
        name: string;
        url: string;
    };
    sprites: {
        front_default: string;
        front_shiny: string;
    };
    // sprites: {
    //     front-default: string;
    //     front-shiny: string;
    // };
    // stats: any;
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        }
    }[];
    weight: number;
}