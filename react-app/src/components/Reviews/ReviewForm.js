import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory} from 'react-router-dom';
import { useModal } from "../../context/Modal";
import { thunkCreateReview } from "../../store/review";
import { thunkEditReview } from "../../store/review";
const ReviewForm = ({review, formType, disabled})=>{
    const dispatch = useDispatch()
    const history = useHistory()

    const [review_text, setReview_text]=useState(review?.review_text)
    const [star_rating, setStar_rating] = useState(review?.star_rating)
    const [activeRating, setActiveRating] = useState(star_rating)
    const [img1, setImg1] = useState(review?.img1)
    const [img2, setImg2] = useState(review?.img2)
    const [img3, setImg3] = useState(review?.img3)
    const [img4, setImg4] = useState(review?.img4)
    const [errors, setErrors] = useState({})
    const { closeModal } = useModal()

    useEffect(()=>{
        setActiveRating(star_rating)
    },[star_rating])

    const onChange=(number)=>{
        setStar_rating(parseInt(number))
    }

    const handleMouseEnter = index=>{
        if(!disabled){
            setActiveRating(index+1)
        }
    }
    const handleMouseLeave = ()=>{
        if(!disabled){
            setActiveRating(star_rating)
        }
    }


    const handleClick = index =>{
        if(!disabled){
            onChange(index+1)
        }
    }

    let arr = []
    for(let index=0; index<5; index++){
        const className = index<activeRating ? 'fas fa-star': 'far fa-star'
        arr.push(
            <div
            className ={className}
            onMouseEnter={()=>handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={()=>handleClick(index)}>
                {/* <i className={className}></i> */}
            </div>
        )
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let errors = {}
        review = {
            ...review,
            review_text,
            star_rating,
            img1,
            img2,
            img3,
            img4
        }

         if (formType ==="Create Review"){
         await dispatch(thunkCreateReview(review))
            .then(closeModal)

         }
         if(formType==="Edit Review"){
            await dispatch(thunkEditReview(review))
            .then(closeModal)
         }
    }

    return(
        <>
        This is reviewForm!
        <form onSubmit={handleSubmit}>
            <textarea
            type="text"
            value={review_text}
            placeholder="We'd love to hear your thoughts!"
            onChange={e=>setReview_text(e.target.value)}
            />
               <div>
        {arr} Stars
        </div>
        <div>
        {/* <input
            id="img1"
            name="img1"
            type="text"
            value={img1}
            placeholder="Image URL 1"
            onChange={(e) => setImg1(e.target.value)}
          />
     {img1 && <img src={img1} alt="Image 1" />} */}

            img1
            <input formAction="image"
            value={img1}
            placeholder="image url"
            onChange={(e)=> setImg1(e.target.value)}/>

img2
            <input formAction="image"
            value={img2}
            placeholder="image url"
            onChange={(e)=> setImg2(e.target.value)}/>

img3
         <input formAction="image"
            value={img3}
            placeholder="image url"
            onChange={(e)=> setImg3(e.target.value)}/>

img4
            <input formAction="image"
            value={img4}
            placeholder="image url"
            onChange={(e)=> setImg4(e.target.value)}/>

        </div>
        <div>
            <button type="submit" disabled={!review_text || !star_rating} >Submit your Review</button>
        </div>
        </form>
        </>
    )

}
export default ReviewForm
