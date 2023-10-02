import { json } from '@sveltejs/kit';
import { CMS_URL } from '$env/static/private';
import { request, gql } from 'graphql-request';

const query = gql`
	{
		projects {
			data {
				attributes {
					localizations {
						data {
							attributes {
								projectTitle
							}
						}
					}
					projectTitle
					projectYear
					projectCategory
					projectImage_0x0 {
						data {
							attributes {
								url
							}
						}
					}
				}
			}
		}
	}
`;

export async function GET() {
	const projectsData: any = await request(`${CMS_URL}/graphql`, query);

	return json(projectsData);
}
