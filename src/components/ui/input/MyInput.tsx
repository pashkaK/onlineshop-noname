import React from 'react'

// interface myInputProps {
// 	value: string
// 	onChange: (value: string) => void
// 	placeholder: string
// }
// const MyInput = ({ value, onChange, placeholder }: myInputProps) => {
// 	return (
// 		<input
// 			className='border-2 border-solid'
// 			placeholder={placeholder}
// 			value={value}
// 			onChange={e => setSearchQuery(e.target.value)}
// 		></input>
// 	)
// }

const MyInput = (props: any) => {
	return <input className='border-2 border-solid' {...props}></input>
}

export default MyInput
