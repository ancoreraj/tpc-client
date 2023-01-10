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
    {id: "1", price: "500", val: 'LKG to 3rd class Art & Craft'},
    {id: "2", price: "600",val: '4th to 8th class all subjects'},
    {id: "3", price: "700",val: '9th to 12th class all subjects for ICSE / CBSE'},
    {id: "4", price: "800",val: 'B.com H-P/BA H-P/B.SlC/B.TECH/DIPLOMA/(HM)'},
    {id: "5", price: "900",val: 'Office PPT (Employees and Students)'},
    {id: "6", price: "1000",val: 'B.ed / LD'},
    {id: "7", price: "1100",val: 'DLED'},
    {id: "8", price: "1200",val: 'LAW all categories'},
]