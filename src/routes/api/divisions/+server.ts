import { json } from '@sveltejs/kit';
import { CMS_URL } from '$env/static/private';
import { request, gql } from 'graphql-request';

const query = gql`
	{
		divisions {
			data {
				attributes {
					divisionTitle
					divisionParagraph
					divisionOrder
					divisionURL
					divisionImage_620x310 {
						data {
							attributes {
								url
							}
						}
					}
					divisionImage_620x620 {
						data {
							attributes {
								url
							}
						}
					}
					localizations {
						data {
							attributes {
								divisionTitle
								divisionParagraph
							}
						}
					}
				}
			}
		}
	}
`;

export async function GET() {
	const divisionsData: any = await request(`${CMS_URL}/graphql`, query);

	return json(divisionsData);
}
