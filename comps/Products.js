
const Products = ({product}) => {
    return (
        <div class="product-item bg-light">
            <div class="card">
                <div class="thumb-content">
                    <div class="price">₹ {product.price}</div>
                    <a href="/adlisting">
                        <img class="card-img-top img-fluid" src={product.img} alt="Card image cap" />
                    </a>
                </div>
                <div class="card-body">
                    <h4 class="product-title">{product.val}</h4>
                </div>
            </div>
        </div>



    )
}

export default Products