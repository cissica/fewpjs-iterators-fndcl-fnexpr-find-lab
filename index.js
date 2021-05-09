
function superbowlWin(record) {
    let result = record.find( ({ result }) => result === 'W' );
    if(result === undefined){
        return undefined
    } else {
        return result.year
    }
}

