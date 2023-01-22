import { CATEGORY } from "./constants"

const HeroArea = () => {
    return (
        <section class="hero-area bg-1 text-center overly">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="content-block">
                            <h1>Complete your Assignment & Projects</h1>
                            <p>Join the millions who complete their projects  everyday in local communities.</p>
                            <div class="short-popular-category-list text-center">
                            </div>
                        </div>
                        {/* <div class="advance-search">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-12 col-md-12 align-content-center">
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-xl-4 col-lg-3 col-md-6">
                                                    <input type="text" class="form-control my-2 my-lg-1" id="inputtext4"
                                                        placeholder="What are you looking for" />
                                                </div>
                                                <div class="form-group col-lg-3 col-md-6">
                                                    <select class="w-100 form-control mt-lg-1 mt-md-2">
                                                        <option>Category</option>
                                                        {
                                                            CATEGORY.map((cat)=> {
                                                                return (
                                                                    <option value={cat.id}>{cat.val}</option>
                                                                )
                                                            })
                                                        }
                                                        
                                                    </select>
                                                </div>
                                                <div class="form-group col-lg-3 col-md-6">
                                                    <input type="text" class="form-control my-2 my-lg-1" id="inputLocation4" placeholder="Location" />
                                                </div>
                                                <div class="form-group col-xl-2 col-lg-3 col-md-6 align-self-center">
                                                    <button type="submit" class="btn btn-primary active w-100">Search Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                    
                </div>
            </div>
            
        </section>
    )

}

export default HeroArea