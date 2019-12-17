export const preparePins = (locations, clickHandler) => {
    let result = [];

    result = result.concat(Object.keys(locations).map((item, ind) => (
        { 
            location: locations[item].coordinates,
            option: {
                text: (ind + 1).toString()
            },
            addHandler: clickHandler ? {
                type: "click",
                callback: () => clickHandler(item)
            } : null
        }
    )));

    return result;
};