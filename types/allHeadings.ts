export interface IAllHeadings {
	allTabHeadings: IAllHeading[]
}

export interface IAllHeading {
	_id: string
	tabHeading: tabHeading
}

export interface tabHeading {
	headingEn: string
	headingHy: string
}
