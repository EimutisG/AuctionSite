export class AdDetails {
    // movieID: string;
    // title: string;
    // description: string;
    // price: string;

    // constructor(movieID: string, title: string, description: string, price: string){
    //     this.movieID = movieID;
    //     this.title = title;
    //     this.description = description;
    //     this.price = price;
    // }

    movieID: string;
    price: string;

    constructor(movieID: string, price: string){
        this.movieID = movieID;
        this.price = price;
    }
}