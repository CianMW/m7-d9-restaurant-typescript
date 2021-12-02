
export interface IPastaDish {
    id: number
    name: string
    image: string
    category: string
    label: string
    price: string
    description: string
    comments: IComment[]
}

export interface IComment {
    id: number
    rating: number
    comment: string
    author: string
    date: string
}