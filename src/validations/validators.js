import * as yup from 'yup';


export const loginSchema = yup.object({
     email:yup.string().min(5).email().required(),
     password:yup.string().max(10).required(),
})

export const reviewSchema = yup.object({
     name:yup.string().min(2).max(10).required(),
     review: yup.string().min(3).max(200).required(),
})