
import ReviewForm from './ReviewForm'
import { useParams } from 'react-router-dom'


const CreateReview=({productId})=>{
  // const { taskerId } = useParams()
    const review = {
      review_text: "",
      star_rating: "",
      image1:"",
      image2:"",
      image3:"",
      image4:"",
      // img1:"",
      // img2:"",
      // img3:"",
      // img4:"",
      product_id: productId
    }

    return(
        <>
          <ReviewForm
            review={review}
            formType="Create Review"
          />
        </>
    )

}

export default CreateReview
