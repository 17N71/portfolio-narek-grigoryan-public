export type aboutType = {
	title: string
	subtitle: string
	info: string[]
	download: string
	biography: biographyType
}

export type biographyType = {
	keys: keysType
	values: valuesType
}
type keysType = {
	name: string
	age: string
	address: string
	tel: string
	mail: string
}
type valuesType = {
	name: string
	address: string
	tel: string
	mail: string
}
