import React, { useEffect , useState }  from 'react';

const Products = props => {

    const {getApi, clearState} = props;
    var [cart, setCart] = useState([]);

    const addToCart = (product) => {

        setCart([...cart, product]);
    };

    console.log(cart);

    useEffect(() => {
        getApi('products');
        return () => {
            clearState();
        }
    },[]);
    
    return (
        <ul>
            {cart.map(product => {
                return <li key={product.id}>
                    <p>{product.name}</p>
                    <ul>
                        <li>$ {product.price}</li>
                    </ul>
                </li>
            })}

            {(() => {
                
              if (cart.length != 0){

                var sum = cart.map(car => car.price).reduce((acc, car) => parseFloat(car) + parseFloat(acc));

                
                  return (
                      <div>
                          <p>Total cost: $ {sum} </p>

                          <button
                            onClick={() => {
                             alert('You purchased $ ' + sum + ' lipsticks! Thank you!')
                                }}
                            >
                            Purchase
                    </button>

                          <p>%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%</p>
                      </div>
                  )
              }
              return null;
            })()}

            {props.products.map(product => {
                return <li key={product.id}>
                    <p>{product.name}</p>
                    <ul>
                        <img src={product.image_link} height="100" />
                        <li>$ {product.price}</li>
                        <li>{product.description}</li>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>

                    </ul>
                    
                </li>
            })}
        </ul>
    );
};

export default Products;