import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { sendEmail } from '$lib/serverFiles/emailService.js';

const schema = z.object({
	name: z.string(),
	mobile: z.string().min(10).max(10).optional(),
	email: z.string().email(),
	project: z.string(),
	textArea: z.string().min(3).max(500)
});

const joinUsSchema = z.object({
	name: z.string(),
	mobile: z.string().min(10).max(10).optional(),
	email: z.string().email(),
	position: z.string(),
	textArea: z.string().min(3).max(500),
	employeeCV: z.any()
});

export const load = async () => {
	// Server API:
	const form = await superValidate(schema);
	const joinUsForm = await superValidate(joinUsSchema);

	// Always return { form } in load and form actions.
	return { form, joinUsForm };
};

export const actions = {
	form: async ({ request }) => {
		const form = await superValidate(request, schema);

		if (!form.valid) {
			return fail(400, { form });
		}

		const emailTemplate = `
			<table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc; margin-bottom: 25px;">
		
				<tr style="background-color: rgb(96 165 250 / 2;" bgcolor="#70bbd9">
					<td style="padding: 40px 30px 40px 30px;">
						<span style="color: rgb(255 255 255 ); font-size: 30px; line-height: 1.4; font-weight:600">
							Message From The Contact Us Section
						</span>
					</td>
				</tr>

				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
						<p style="font-size: 18px;"><strong>Name:</strong> ${form.data.name}</p>
						<p style="font-size: 18px;"><strong>Email:</strong> ${form.data.email || 'Not provided!'}</p>
						<p style="font-size: 18px;"><strong>Mobile:</strong> ${form.data.mobile || 'Not provided!'}</p>
						<p style="font-size: 18px;"><strong>Project:</strong> ${form.data.project || 'Not provided!'}</p>
						<p style="font-size: 18px;"><strong>Message:</strong> ${form.data.textArea}</p>
					</td>
				</tr>

				<tr style="background-color: rgb(96 165 250 / 2;" bgcolor="#70bbd9">
					<td style="padding: 10px 10px;">
						<span style="color: rgb(255 255 255 ); font-size: 20px;">AKG Website.</span>
					</td>
				</tr>

			</table>
			
		`;

		await sendEmail(
			// 'info@alkholi.com, sales@alkholi.com',
			'fawzy.mohamed@alkholi.com',
			`AKG Website Messages - ${form.data.project}`,
			emailTemplate,
			emailTemplate,
			undefined,
			['fawzy.mohamed@alkholi.com'] // Multiple BCC recipients
		);

		// reset the form values
		form.data.name = '';
		form.data.email = '';
		form.data.project = '';
		form.data.mobile = undefined;
		form.data.textArea = '';

		return { form };
	},
	joinUsForm: async ({ request }) => {
		const formData = await request.formData();
		const file: any = formData.get('employeeCV');

		// Specify interface/type for attachment
		interface Attachment {
			filename: string;
			content: Buffer;
		}

		// Convert file to buffer
		const buffer = await file.arrayBuffer();
		const attachment: Attachment = {
			filename: file.name,
			content: Buffer.from(buffer)
		};

		const joinUsForm = await superValidate(formData, joinUsSchema);
		if (!joinUsForm.valid) {
			return fail(400, { joinUsForm });
		}

		const emailTemplate = `
			<table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc; margin-bottom: 25px;">
		
				<tr style="background-color: rgb(96 165 250 / 2;" bgcolor="#70bbd9">
					<td style="padding: 40px 30px 40px 30px;">
						<span style="color: rgb(255 255 255 ); font-size: 30px; line-height: 1.4; font-weight:600">
							Message From The Join Us Section
						</span>
					</td>
				</tr>

				<tr bgcolor="#ffffff">
					<td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
						<p style="font-size: 18px;"><strong>Name:</strong> ${joinUsForm.data.name}</p>
						<p style="font-size: 18px;"><strong>Email:</strong> ${joinUsForm.data.email || 'Not provided!'}</p>
						<p style="font-size: 18px;"><strong>Mobile:</strong> ${
							joinUsForm.data.mobile || 'Not provided!'
						}</p>
						<p style="font-size: 18px;"><strong>Position:</strong> ${
							joinUsForm.data.position || 'Not provided!'
						}</p>
						<p style="font-size: 18px;"><strong>Message:</strong> ${joinUsForm.data.textArea}</p>
					</td>
				</tr>

				<tr style="background-color: rgb(96 165 250 / 2;" bgcolor="#70bbd9">
					<td style="padding: 10px 10px;">
						<span style="color: rgb(255 255 255 ); font-size: 20px;">AKG Website.</span>
					</td>
				</tr>

			</table>
		`;

		await sendEmail(
			'recruitment@alkholi.com',
			'AKG Website Messages - Join Us Form.',
			emailTemplate,
			emailTemplate,
			[attachment],
			['fawzy.mohamed@alkholi.com'] // Multiple BCC recipients
		);

		// reset the form values
		joinUsForm.data.name = '';
		joinUsForm.data.email = '';
		joinUsForm.data.position = '';
		joinUsForm.data.mobile = undefined;
		joinUsForm.data.textArea = '';

		return { joinUsForm };
	}
};
