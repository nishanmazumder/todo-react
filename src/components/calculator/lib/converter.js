export function toCelsious(val){
    return ((val - 32) * 5) / 9;
}
export function toFarenhite(val){
    return (val * 9) / 5 + 32;
}

export function convert(temparature, convTo){
    const input = parseFloat(temparature)
    if(Number.isNaN(input)){
        return ""
    }
    const output = convTo(input)
    const rounded = Math.round(output * 1000) / 1000

    return rounded.toString()
}