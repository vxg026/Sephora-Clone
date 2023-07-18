import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom"
import AddToCart from "./AddToCart";
import { thunkAllProducts } from "../../store/product";
import thunk from "redux-thunk";
import "./GetAllProducts.css"
// import { thunkLikesProduct } from "../../store/product";
import {thunkLikesProduct} from "../../store/session"
import LikeAProduct from "./LikeAProduct";
import ProfileButton from "../Navigation/ProfileButton";
import OpenModalButton from "../OpenModalButton";
import SignupFormModal from "../SignupFormModal";
import LoginFormModal from "../LoginFormModal";

const GetAllProducts = () =>{
    const dispatch = useDispatch()
    const allProducts = useSelector(state=>state.products.allProducts)

    const currUser = useSelector(state=>state.session.user)
    // const allProductsArr=Object.values(allProducts)


    useEffect(()=>{
        dispatch(thunkAllProducts())
    }, [dispatch])
    if (!allProducts)return "..."



    return(
        <>

        <div className="all-obj-contianer">
        {Object.values(allProducts).map(product=>{
            return(
                <div key={product.id} className="div-products-all">
                    <div>
                          { currUser && <div className="hearts-container">

                            <LikeAProduct singleProduct={product}/>
                            </div>}
                        <Link to={`/products/${product.id}`}>

                           <img className="img-all" src={product.image}/>
</Link>
</div>
                    <div className="product-detail-all">

                    <h3>{product.name}</h3>
                    <h4>{product.price}</h4>
                    {/* <h4>{product.description}</h4> */}


                       <AddToCart
                    product={product}
                    />
             {!currUser &&  <div className="not-logged-in-btn"> <OpenModalButton
                buttonText="Sign In"
                modalComponent={<LoginFormModal/>}
                 /> / <OpenModalButton
                 buttonText="Create Account"
                 modalComponent={<SignupFormModal/>}
                  /></div>}

                    </div>
                </div>

            )
        })}
        </div>
        <div className="f-feedback">
        <h3 className="f-fbck-txt">Website feedback? Let us know</h3>
      </div>
      <div className="footer">
          <div className="h3-div">
        <a target="_blank" href="https://www.linkedin.com/in/vanessa-gonzalez-82667a1b3/">
             <div className="linkedin-connect"><i class="fab fa-linkedin"></i><h3>Linked In</h3></div>
                  </a>
                  <a target="_blank" href="https://github.com/vxg026">
                    <div className="linkedin-connect">
                               {/* <img className="github"src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"/> */}
                               <i class="fab fa-github"></i> <h3>GitHub</h3>
                    </div>

                  </a>
                  <a target="_blank" href="https://wellfound.com/u/vanessa-gonzalez-41">
                  <div className="linkedin-connect">
                   <i class="fab fa-angellist"></i><h3>WellFound</h3>
                   </div>
                  </a>


          </div>


      </div>
        </>
    )
}
export default GetAllProducts
