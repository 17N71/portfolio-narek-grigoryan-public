import { IAllHeading } from "./allHeadings"
import { AllSkill } from "./allSkills"
import { allTabItem } from "./allTabItem"
export interface ITabProps {
	allSkill: AllSkill[]
	allTabItem: allTabItem[]
	allTabHeadings: IAllHeading[]
}
