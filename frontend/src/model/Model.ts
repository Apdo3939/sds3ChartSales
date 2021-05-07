import {format} from 'date-fns';

export type Seller = {
    id: number,
    name: string
}

export type Sale = {
    id: number,
    visited: number,
    deals: number,
    amount: number,
    date: string,
    seller: Seller
}

export type SalePage = {
    content?: Sale[],
    last: boolean,
    totalPages: number,
    totalElements: number,
    first: boolean,
    size?: number,
    number: number,
    numberOfElements?: number,
    empty?: boolean
}

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
    labels: {
        categories: string[]
    },
    series: SeriesData[]
}

export const round = (value: number, precision: number) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

export const formatLocalDate = (date: string, pattern: string) => {
    const dt = new Date(date);
    const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
    return format(dtDateOnly, pattern);
}
