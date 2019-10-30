let sqftToAcres = (sqft) => {
    return sqft / 43560;
}

let acresFee = (sqft) => {
    let acres = sqftToAcres(sqft);
    if(acres === 0){
        return '$0'
    }
    else if(acres <= 1){
        return '$135';
    }
    else if(acres <= 2){
        return '$203';
    }
    else if(acres <= 5){
        return '$270';
    }
    else if(acres < 10){
        return `$${270 + (acres - 5) * 34}`;
    }
    else{
        return `$${439 + (acres - 10) * 27}`;
    }
}