export const APP_URL = process.env.NEXT_PUBLIC_APP_URL

export const isEmail = (str) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return emailRegex.test(str)
}

export const CATEGORY = [
    {id: 1, price: 500, val: 'LKG to 3 class art and craft'},
    {id: 2, price: 500,val: '4 class to ,8 all subjects'},
    {id: 3, price: 500,val: '9 class  to 12 class all subjects for ICSE/ CBSE'},
    {id: 4, price: 500,val: 'B.com H-P/BA H-P/B.SlC/B.TECH/DIPLOMA/(HM)/ LAW all categories '},
    {id: 5, price: 500,val: 'Office PPT (employee and students)'},
    {id: 6, price: 500,val: 'B.ed /LD'},
    {id: 7, price: 500,val: 'DLED'},
]