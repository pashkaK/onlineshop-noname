import React, { FC, PropsWithChildren } from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import Button from '../ui/button/Button'
import style from './FormFormik.module.scss'

const SignupSchema = Yup.object().shape({
	title: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	price: Yup.number().required().positive().integer(),
	rating: Yup.number().required().positive().moreThan(0).lessThan(5)
})

export const ValidationSchema: FC<
	PropsWithChildren<{ setVisible: (b: boolean) => void }>
> = ({ children, setVisible }) => {
	return (
		<div>
			<h1 className={style.title}>Add a product</h1>
			<Formik
				initialValues={{
					id: Date.now(),
					title: '',
					// author: '',
					rating: 0,
					price: 0
				}}
				validationSchema={SignupSchema}
				onSubmit={(values: any) => {
					// console.log(values)
					setVisible(false)
				}}
			>
				{({ errors, touched }) => (
					<Form className={style.form}>
						{/*<h1 className={style.title}>{message}</h1>*/}
						<Field
							className={style.input}
							placeholder='Enter a name'
							type='text'
							name='title'
						/>
						{touched.title && errors.title && (
							<div className={style.error}>{errors.title}</div>
						)}

						<label className={style.label} htmlFor='price'>
							Enter a price
						</label>
						<Field
							placeholder='Enter a price'
							className={style.input}
							type='number'
							name='price'
						/>
						{touched.price && errors.price && (
							<div className={style.error}>{errors.price}</div>
						)}

						<label className={style.label} htmlFor='rating'>
							Enter a rating
						</label>
						<Field
							placeholder='Enter a rating'
							className={style.input}
							type='number'
							name='rating'
						/>
						{touched.rating && errors.rating && (
							<div className={style.error}>{errors.rating}</div>
						)}

						<Button type='submit'>Submit</Button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
