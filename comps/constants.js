export const APP_URL = process.env.NEXT_PUBLIC_APP_URL

export const RAZORPAY_KEY = process.env.NEXT_PUBLIC_RAZORPAY_API_KEY

export const isEmail = (str) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return emailRegex.test(str)
}

export function makeid() {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const CATEGORY = [
    {id: "1", price: "500", val: 'LKG to 3 class art and craft'},
    {id: "2", price: "600",val: '4 class to ,8 all subjects'},
    {id: "3", price: "700",val: '9 class  to 12 class all subjects for ICSE/ CBSE'},
    {id: "4", price: "800",val: 'B.com H-P/BA H-P/B.SlC/B.TECH/DIPLOMA/(HM)/ LAW all categories '},
    {id: "5", price: "900",val: 'Office PPT (employee and students)'},
    {id: "6", price: "1000",val: 'B.ed /LD'},
    {id: "7", price: "1100",val: 'DLED'},
]