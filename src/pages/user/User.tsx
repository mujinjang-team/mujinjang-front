import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
	const { id } = useParams()
	return <>User {id}</>
}

export default User
