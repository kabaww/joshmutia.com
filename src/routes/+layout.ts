export const load = ({ url }) => {
	const { pathname } = url;
    console.log('pathname', pathname);

	return {
		pathname
	};
};