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
    {id: "1", price: "599", val: 'LKG to 3rd class Art & Craft', img: "https://images.unsplash.com/photo-1471666875520-c75081f42081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&q=80"},
    {id: "2", price: "499",val: '4th to 8th class all subjects', img: "https://images.unsplash.com/photo-1612117229486-78abff6d84c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: "3", price: "499",val: '9th to 12th class all subjects for ICSE / CBSE' , img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"},
    {id: "4", price: "899",val: 'B.com H-P/ BA H-P/ B.Sc', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2FCommerce-768x422.png?alt=media&token=6c8ad153-22ac-450e-8fa8-0e5007ca37af"},
    {id: "5", price: "2499",val: 'B.TECH/ DIPLOMA/(HM)', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2FDiploma-Admission-design.jpg?alt=media&token=19997108-6900-450c-bf08-9dd37cace679"},
    {id: "6", price: "899",val: 'Office PPT (Employees)', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2FGettyImages-1064877364_472283_mbievf.jpg?alt=media&token=f6d2aed6-cb65-4c09-8eac-96dd7dac2dfe"},
    {id: "7", price: "499",val: 'PPT (Students)', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2FAMERICANED_SKYLINE_031-2.jpg?alt=media&token=049401a7-054c-4f23-8ccc-dff8543207dc"},
    {id: "8", price: "3499",val: 'B.ed project or assignment', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2FScholarships-for-egnieering.jpg?alt=media&token=d6c67c45-ecaf-4ece-aeb6-44193addeb5a"},
    {id: "9", price: "3999",val: 'B.ed learning design', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2Fblog_bed.png?alt=media&token=31a1cdb1-55c3-4f59-9ea3-4a74dd0386a2"},
    {id: "10", price: "3999",val: 'LAW all categories', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2FLaw-Student-Court-Web.jpg?alt=media&token=6d8dc33e-f86f-4725-9713-a2f9c1210750"},
    {id: "11", price: "1999",val: 'MBA', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2F17_11_16_032044_iibs-mba-college-bangalore-noida-kolkata-3-1024x640.jpg?alt=media&token=0f51f4d2-7e79-4ca2-9670-e049881c5001"},
    {id: "12", price: "1999",val: 'MCA', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2F17_11_16_032044_iibs-mba-college-bangalore-noida-kolkata-3-1024x640.jpg?alt=media&token=0f51f4d2-7e79-4ca2-9670-e049881c5001"},

]

export const CATEGORY2 = [
    {id: "1", price: "299", val: 'LKG to 3rd class Art & Craft', img: "https://images.unsplash.com/photo-1471666875520-c75081f42081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&q=80"},
    {id: "2", price: "249",val: '4th to 8th class all subjects', img: "https://images.unsplash.com/photo-1612117229486-78abff6d84c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {id: "3", price: "249",val: '9th to 12th class all subjects for ICSE / CBSE' , img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"},
    {id: "4", price: "449",val: 'B.com H-P/BA H-P/B.SlC', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2FCommerce-768x422.png?alt=media&token=6c8ad153-22ac-450e-8fa8-0e5007ca37af"},
    {id: "5", price: "999",val: 'B.TECH/DIPLOMA/(HM)', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2FDiploma-Admission-design.jpg?alt=media&token=19997108-6900-450c-bf08-9dd37cace679"},
    {id: "6", price: "449",val: 'Office PPT (Employees)', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2FGettyImages-1064877364_472283_mbievf.jpg?alt=media&token=f6d2aed6-cb65-4c09-8eac-96dd7dac2dfe"},
    {id: "7", price: "249",val: 'PPT (Students)', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2FAMERICANED_SKYLINE_031-2.jpg?alt=media&token=049401a7-054c-4f23-8ccc-dff8543207dc"},
    {id: "8", price: "999",val: 'B.ed project or assignment', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2FScholarships-for-egnieering.jpg?alt=media&token=d6c67c45-ecaf-4ece-aeb6-44193addeb5a"},
    {id: "9", price: "1999",val: 'B.ed learning design', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2Fblog_bed.png?alt=media&token=31a1cdb1-55c3-4f59-9ea3-4a74dd0386a2"},
    {id: "10", price: "1999",val: 'LAW all categories', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2FLaw-Student-Court-Web.jpg?alt=media&token=6d8dc33e-f86f-4725-9713-a2f9c1210750"},
    {id: "11", price: "1999",val: 'MBA', img: "https://firebasestorage.googleapis.com/v0/b/thecompleteproject-cbacb.appspot.com/o/CDN%2F17_11_16_032044_iibs-mba-college-bangalore-noida-kolkata-3-1024x640.jpg?alt=media&token=0f51f4d2-7e79-4ca2-9670-e049881c5001"},

]   

export const FREELANCE_CATEGORY = [
    {
        id: "1",
        val: "B.Com (H)",
        price: "449",
        
    },
    {
        id: "2",
        val: "B.Com (P)",
        price: "449",
        
    },
    {
        id: "3",
        val: "B.A (H)",
        price: "449",
        
    },
    {
        id: "4",
        val: "B.A (P)",
        price: "449",
        
    },
    {
        id: "5",
        val: "B.Sc",
        price: "449"
        
    },
    {
        id: "6",
        val: "B.B.A",
        price: "449"
        
    },
    {
        id: "7",
        val: "B.D.A",
        price: "449"
        
    },
    {
        id: "8",
        val: "M.C.A",
        price: "999"
        
    },
    {
        id: "9",
        val: "M.Com",
        price: "449"
        
    },
    {
        id: "10",
        val: "M.A",
        price: "449"
        
    },
    {
        id: "11",
        val: "M.Sc",
        price: "449",
        
    },
    {
        id: "12",
        val: "PG (Advance)",
        price: "449"
    },
    {
        id: "13",
        val: "H.M (Hotel Management)",
        price: "449"
        
    },
    {
        id: "14",
        val: "LAW LLB",
        price: "1999"
        
    },
    {
        id: "15",
        val: "B.Tech",
        price: "1249",
    },
    {
        id: "16",
        val: "B.Ed",
        price: "1749",
    },
    {
        id: "17",
        val: "D.EL.ED",
        price: "499"
    },
    {
        id: "18",
        val: "LKG to 3rd class Art & Craft",
        price: "299"
    },
    {
        id: "19",
        val: "4th to 8th class all subjects",
        price: "299"
    },
    {
        id: "19",
        val: "9th to 12th class all subjects for ICSE / CBSE",
        price: "299"
    }
]