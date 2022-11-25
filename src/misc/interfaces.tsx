export interface IFacetValue {
    key: string,
    doc_count: number
}

export interface ISearchValues {
    name: string,
    field: string,
    values: string[]
}

export interface ISearchObject {
    searchvalues: ISearchValues[],
    page: number,
    page_length: number,
    sortorder: string
}

export interface IFacetCandidate {
    facet: string,
    field: string,
    candidate: string
}

export interface ISendCandidate {
    (data: IFacetCandidate):void
}

export interface IFacetCandidate {
    facet: string,
    field: string,
    candidate: string
}

export interface IRemoveFacet {
    (field: string, value: string): void
}


export interface IResultItem {
    record: string,
    locatie: ILocatie[],
    naam: string,
    onderwerp: IOnderwerp[],
    organisatie: IOrganisatie[],
    rol: IRol[],
    titel: string,
    titel_en: string

}
export interface IDetailItem {
    _id?: string,
    locaties: ILocatie[],
    opnamedata: iOpnameDatum[],
    titel: string,
    naam_titel: string,
    naam_voornaam: string,
    naam_tussenvoegsel: string,
    naam_achternaam: string
}

// export interface IResultItem {
//     record: string,
//     titel: string,
//     telefoon: string
// }
export interface ILocatie {
    locatie: string
}

export interface iOpnameDatum {
    opnamedatum: string
}

export interface IOnderwerp {
    onderwerp: string
}

export interface IOrganisatie {
    organisatie: string
}

export interface IRol {
    rol: string
}


export interface IResultList {
    amount: number,
    pages: number,
    items: IResultItem[]
}

export interface ISendPage {
    (data: number): void
}

export interface IResetFacets {
    (): void
}

export interface ICollection_item {
    title: string,
    "_id": string
}
