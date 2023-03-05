export const getPagesCount = (totalCount: any, limit: any) => {
	return Math.ceil(totalCount / limit)
}
