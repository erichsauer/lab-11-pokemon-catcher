export function mungeSeen(statsArray) {
    let seenArray = [];
    for (const item of statsArray) {
        seenArray.push(item.seen);
    }
    return seenArray;
}

export function mungeCaught(statsArray) {
    let caughtArray = [];
    for (const item of statsArray) {
        caughtArray.push(item.caught);
    }
    return caughtArray;
}

export function mungeNames(statsArray) {
    let namesArray = [];
    for (const item of statsArray) {
        namesArray.push(item.pokemon);
    }
    return namesArray;
}
