import { t9 } from "./constants";

export default function allT9(num: string): string[]{
    let input: string[][] = []
    if(num==="") return []
    for (let n of num){
        if(t9[n as keyof typeof t9] === undefined) return []
        input.push(t9[n as keyof typeof t9])
    }
    // input = [ [ 'd', 'e', 'f' ], [ 'a', 'b', 'c' ] ]
    let allCombinations = cartesian(...input)
    
    let result: string[] = []
    if(!Array.isArray(allCombinations[0])) return allCombinations
    for (let comb of allCombinations){
        console.log(comb)
        result.push(comb?.join(''))
    }
    return result;
}

const cartesian = (...a: any) => a.reduce((a: any[], b: any[]) => a.flatMap(d => b.map(e => [d, e].flat())));

