import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';

const schema = z.object({
	name: z.string(),
	mobile: z.string().min(10).max(10).optional(),
	email: z.string().email(),
	project: z.string().optional(),
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

		// TODO: Do something with the validated data

		return { form };
	},
	joinUsForm: async ({ request }) => {
		const joinUsForm = await superValidate(request, joinUsSchema);
		if (!joinUsForm.valid) {
			return fail(400, { joinUsForm });
		}

		// TODO: Do something with the validated data
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
		console.log('🚀 attachment:', attachment);

		return { joinUsForm };
	}
};
