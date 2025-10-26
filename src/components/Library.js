export default function createLibrary(occupants, single, two, four, fivePlus) {
    return {
        occupants,
        singlePersonTables: single,
        twoPersonTables: two,
        fourPersonTables: four,
        fivePlusPersonTables: fivePlus,

    };

}