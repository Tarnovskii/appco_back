const parseObjectsArrayToPagesArray = (objectsArray) => {
    return objectsArray.reduce((p, c) => {
        if (p[p.length - 1].length === 21) {
            p.push([]);
        }

        p[p.length - 1].push(c);
        return p;
    }, [[]]);
};

module.exports = parseObjectsArrayToPagesArray;
