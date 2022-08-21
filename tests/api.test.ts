import { Api, gspListResult, pesListResult } from "../src/api";

const api = new Api();

test('Validation should return true on string', () => {
	expect(api.isValid('test5')).toBe(true);
	expect(api.isValid('test')).toBe(false);	
});

test('Validate format of result from GSP list', () => {
	const gspList = api.fetchGSPList();
	gspList.then((result: gspListResult) => {
		expect(result.meta).toStrictEqual(['gsp_id', 'gsp_name', 'pes_id'])
	})
})

test('Validate format of result from PES list', () => {
	const pesList = api.fetchPESList();
	pesList.then((result: pesListResult) => {
		expect(result.meta).toStrictEqual(['pes_id', 'pes_name', 'pes_longname'])
	})
})