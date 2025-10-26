export default function createLibrary(
    occupants: number,
    single: number,
    two: number,
    four: number,
    fivePlus: number
): {
    occupants: number;
    singlePersonTables: number;
    twoPersonTables: number;
    fourPersonTables: number;
    fivePlusPersonTables: number;
}