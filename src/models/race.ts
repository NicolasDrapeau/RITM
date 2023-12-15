export interface Race {
    name:string,
    date?:Date,
    distances:Distance[],
    type:string,
    comments?:string
}

export interface Distance{
    distance:number,
    elevationGain?:number,
    racers?:Racer[]
}

export interface Racer{
    id:string,
    name:string
}