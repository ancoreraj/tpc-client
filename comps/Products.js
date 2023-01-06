
const Products = ({product}) => {
    return (
        <div class="product-item bg-light">
            <div class="card" style={{height: '360px'}}>
                <div class="thumb-content">
                    <div class="price">₹ {product.price}</div>
                    <a href="single.html">
                        <img class="card-img-top img-fluid" src={product.img} alt="Card image cap" />
                    </a>
                </div>
                <div class="card-body">
                    <h4 class="card-title">{product.val}</h4>
                    {/* <ul class="list-inline product-meta">
                        <li class="list-inline-item">
                            <a href="single.html"><i class="fa fa-folder-open-o"></i>@@category</a>
                        </li>
                    </ul> */}
                    {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, aliquam!</p> */}
                    {/* <div class="product-ratings">
                        <ul class="list-inline">
                            <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>



    )
}

export default Products