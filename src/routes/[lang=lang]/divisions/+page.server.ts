import type { PageServerLoad } from './$types';
import { CMS_URL } from '$env/static/private';
import { request, gql } from 'graphql-request';

const pageData = async (query: string) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const theData: any = await request(`${CMS_URL}/graphql`, query);
	return theData.divisions;
};

export const load = (async () => {
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
									divisionOrder
									divisionURL
								}
							}
						}
					}
				}
			}
		}
	`;

	const divisionsSectionData = pageData(query);
	return { divisionsSectionData };
}) satisfies PageServerLoad;
