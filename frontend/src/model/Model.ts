
export type SaleSum = {
    name: string,
    sum: number
}

export type SaleSuccess = {
    name: string,
    visited: number,
    deals: number
}

export type ChartDataDonut = {
    labels: string[],
    series: number[]
}

export type SeriesData = {
    name: string,
    data: number[]
}

export type ChartDataBar = {
    labels:{
        categories:string[]
    },
    series:SeriesData[]
}

export const round = (value: number, precision: number) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}