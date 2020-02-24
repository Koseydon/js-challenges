function yahtzee_upper(arrayOfNumbers) {
    var scores = [0, 0, 0, 0, 0, 0]

    arrayOfNumbers.forEach(element => {
        switch(element){
            case 1: scores[0] += 1 
            break;
            case 2: scores[1] += 2 
            break;
            case 3: scores[2] += 3 
            break;
            case 4: scores[3] += 4
            break;
            case 5: scores[4] += 5
            break;
            case 6: scores[5] += 6
        }
    });

    return Math.max(...scores)
}

export default yahtzee_upper;