import type { PageServerLoad } from './$types';
import { CMS_URL } from '$env/static/private';
import { request, gql } from 'graphql-request';

const pageData = async (query: string) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const theData: any = await request(`${CMS_URL}/graphql`, query);
	return theData.homePageAboutSection;
};

export const load = (async () => {
	const query = gql`
		{
			homePageAboutSection {
				data {
					attributes {
						localizations {
							data {
								attributes {
									aboutTitle
									aboutParagraph
									visionTitle
									visionParagraph
									missionTitle
									missionParagraph
								}
							}
						}
						aboutTitle
						aboutParagraph
						visionTitle
						visionParagraph
						missionTitle
						missionParagraph
					}
				}
			}
		}
	`;

	const aboutSectionData = pageData(query);
	return { aboutSectionData };
}) satisfies PageServerLoad;
