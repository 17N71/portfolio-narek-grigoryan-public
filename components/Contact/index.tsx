import { AnimatePresence, motion } from "framer-motion"
import ky from "ky"
import { FocusEvent, useId, useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import Heading from "../Heading"
function Contact({ locale }: { locale: string }) {
	const nameId = useId()
	const emailId = useId()
	const messageId = useId()
	const [focusName, setFocusName] = useState<boolean>(false)
	const [focusEmail, setFocusEmail] = useState<boolean>(false)
	const [focusMessage, setFocusMessage] = useState<boolean>(false)
	const emailRegExp: RegExp =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gi
	const nameRegExp: RegExp = /^([A-Z])([a-z])+|^([\u0531-\u0556])([\u0561-\u0587])/g
	function OnFocus(setFunc: Function, state: boolean) {
		setFunc(state)
	}
	function OnBlur(
		setFunc: Function,
		e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
	) {
		if (e.target.value.trim().length) {
			setFunc(true)
		} else {
			setFunc(false)
		}
	}
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isValid, isDirty },
	} = useForm({ mode: "all" })
	const onSubmit = (data: FieldValues) => {
		ky("https://formbold.com/s/3jGDo", {
			method: "POST",
			json: data,
		}).then(() => reset())
	}
	return (
		<section className={"contact-section home-paddings"} id='contact-17n71'>
			<Heading tag='h2' className='contact-title' upper={true}>
				{locale === "en" ? "Contact" : "Կոնտակտ"}
			</Heading>
			<Heading tag='h3' className='contact-subtitle'>
				{locale === "en" ? "Get In Touch" : "Հաստատել կապ"}
			</Heading>
			<p className={"contact-desc"}>
				{locale === "en"
					? "If you have any suggestion, project or even you want to say “hello”, please fill out the form below and I will reply you shortly."
					: "Եթե ունեք որևէ առաջարկ, նախագիծ կամ եթե ցանկանում եք «բարևել», խնդրում ենք լրացնել ստորև ներկայացված ձևը և ես շուտով կպատասխանեմ ձեզ:"}
			</p>
			<div className={"contact-part"}>
				<div className={"contact-errors"}>
					<AnimatePresence>
						{errors.name?.message && (
							<motion.span
								initial={{ x: -5, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: 5, opacity: 0 }}
								className={"contact-error"}
							>
								{errors.name.message.toString()}
							</motion.span>
						)}
						{errors.email?.message && (
							<motion.span
								initial={{ x: -5, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: 5, opacity: 0 }}
								className={"contact-error"}
							>
								{errors.email.message.toString()}
							</motion.span>
						)}
						{errors.message?.message && (
							<motion.span
								initial={{ x: -5, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: 5, opacity: 0 }}
								className={"contact-error"}
							>
								{errors.message.message.toString()}
							</motion.span>
						)}
					</AnimatePresence>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className={"contact-formField"}>
					<div className={"contact-NameAndEmail"}>
						<label htmlFor={nameId} className={"contact-label"}>
							<span className={`contact-legend ${focusName ? "contact-focusField" : ""}`}>
								{locale === "en" ? "Name" : "Անուն"}
							</span>
							<div className={"contact-field"}>
								<input
									onFocus={() => OnFocus(setFocusName, true)}
									onBlurCapture={(e) => OnBlur(setFocusName, e)}
									tabIndex={7}
									required={true}
									className={`${"contact-nameField"} ${"contact-field"}`}
									type='text'
									{...register("name", {
										required: locale === "en" ? "Name is required! | " : "Անունը պարտադիր է: | ",
										pattern: {
											value: nameRegExp,
											message: locale === "en" ? "Write correct name | " : "Գրեք ճիշտ անունը | ",
										},
										minLength: {
											value: 3,
											message:
												locale === "en"
													? "Name can't be less than 3 symbols! | "
													: "Անունը չի կարող պակաս լինել 3 նիշից: | ",
										},
									})}
								/>
							</div>
						</label>
						<label htmlFor={emailId} className={"contact-label"}>
							<span className={`${"contact-legend"} ${focusEmail ? "contact-focusField" : ""}`}>
								{locale === "en" ? "Mail" : "էլ.փոստ"}
							</span>
							<div className={"contact-field"}>
								<input
									onFocus={() => OnFocus(setFocusEmail, true)}
									onBlurCapture={(e) => OnBlur(setFocusEmail, e)}
									required={true}
									className={"contact-field"}
									type='email'
									tabIndex={8}
									{...register("email", {
										required: locale === "en" ? "mail is required | " : "Էլ.փոստը պարտադիր է | ",
										pattern: {
											value: emailRegExp,
											message:
												locale === "en" ? "Write the correct mail! | " : "Գրեք ճիշտ էլ.փոստը | ",
										},
									})}
								/>
							</div>
						</label>
					</div>
					<label htmlFor={messageId} className={`${"contact-label"} mt-10`}>
						<span className={`${"contact-legend"} ${focusMessage ? "contact-focusField" : ""}`}>
							{locale === "en" ? "Message" : "Նամակ"}
						</span>
						<div className={"contact-field"}>
							<textarea
								onFocus={() => OnFocus(setFocusMessage, true)}
								onBlurCapture={(e) => OnBlur(setFocusMessage, e)}
								tabIndex={9}
								style={{ height: "200px" }}
								id={messageId}
								className={`${"contact-mess"} ${"contact-field"}`}
								{...register("message", {
									required: locale === "en" ? "Message is required!" : "Նամակը պարտադիր է:",
									minLength: {
										value: 3,
										message:
											locale === "en"
												? "Message can't be less than 3 symbols!"
												: "Հաղորդագրությունը չի կարող պակաս լինել 3 նիշից:",
									},
								})}
							/>
						</div>
					</label>
					<button
						tabIndex={10}
						className={"contact-submitBtn"}
						disabled={!isValid || !isDirty}
						type='submit'
					>
						{locale === "en" ? "Send message" : "Ուղղարկել նամակը"}
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
