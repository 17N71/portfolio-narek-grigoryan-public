export interface IContactPageProps {
	contact: IContactProps
}
export interface IContactProps {
	title: string
	subtitle: string
	description: string
	name: IContactField
	mail: IContactField
	message: IContactField
	send: string
}
export interface IContactField {
	placeholder: string
	error: {
		length?: string
		required: string
		verification: string
	}
}
