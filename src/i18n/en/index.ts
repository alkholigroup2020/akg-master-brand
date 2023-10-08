import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
	title: 'Alkholi Group',
	nav: {
		welcomeMsg: 'Welcome To ALKHOLI'
	},
	hero: {
		build: 'BUILD.',
		optimize: 'OPTIMIZE.',
		connect: 'CONNECT.',
		more: 'Learn More'
	},
	home: {
		aboutSection: {
			about: 'About Us',
			vision: 'Our Vision',
			mission: 'Our Mission'
		}
	},
	about: {
		aboutSection: {
			about: 'About Us',
			story: 'Our History',
			values: 'Our Values'
		}
	},
	form: {
		fullName: 'Name:',
		fullNameError: 'Name length should be more than 2 characters!',
		fullNameLengthError: 'Name is too long! Maximum 60 characters.',
		fullNameNumericError: 'No numbers are allowed!',
		fullNamePlaceholder: 'Your good name ...',
		email: 'Email:',
		emailError: 'Please enter a valid email!',
		emailPlaceholder: 'Email address ... (optional)',
		mobileNumber: 'Mobile Number:',
		mobilePlaceholder: 'Mobile number (05xxxxxxxx)',
		mobileError: 'Please enter a valid mobile number!',
		textArea: 'Message:',
		textAreaPlaceholder: 'Message*',
		textAreaError1: 'Message is too short!',
		textAreaError2: 'Message is too long! Maximum 500 characters.',
		submit: 'Send Your Message',
		successFeedback: 'Thank You!',
		errorFeedback: 'Something went wrong!',
		notAllowedFeedback: 'At least an email address or a mobile number is required!'
	}
};

export default en;
