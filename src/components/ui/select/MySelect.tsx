import React from 'react'
import { IOption } from '../../../types/IOption'

interface MySelectProps {
	options: IOption[]
	defaultValue: string
	value: string
	onChange: (value: string) => void
}

const MySelect = ({
	options,
	defaultValue,
	value,
	onChange
}: MySelectProps) => {
	return (
		<select
			value={value}
			onChange={event => onChange(event.target.value)}
			// onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
		>
			<option disabled value=''>
				{defaultValue}
			</option>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	)
}

export default MySelect
