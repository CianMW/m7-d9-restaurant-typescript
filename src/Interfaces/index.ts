
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
export interface IReservation {
    _id:             string;
    name:            string;
    phone:           string;
    numberOfPeople:  number;
    smoking:         boolean;
    dateTime:        string;
    specialRequests: string;
    createdAt:       Date;
    updatedAt:       Date;
}

