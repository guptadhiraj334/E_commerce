export interface SignUp {
    name:string,
    email:string,
    pwd:string | number,
    number:number
}

export  interface Login{
    email:string,
    pwd:string
}

export  interface products{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    count:number
}



