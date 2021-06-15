export const MarkerColor = cases => {
    if(cases <= 100){
        return "#00ff91"
    }
    else if(cases > 100 && cases <= 1000){
        return "#07a61e"
    }
    else if(cases > 1000 && cases <= 10000){
        return "#9edb0f"
    }
    else if( cases > 10000 && cases <= 100000 ){
        return "#bbcf08"
    }
    else if( cases > 100000 && cases <= 1000000){
        return "#ffb60a"
    }
    else{
        return "#ff2b0a"
    }
}

export const GetTopCategory = (counties, topType) => {

 return  counties.sort((a,b) => b[topType] - a[topType] ).slice(0, 10)

}