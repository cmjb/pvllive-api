import axios, { AxiosResponse } from "axios";

export interface gspListResult {
	data: object,
	meta: object
}

export interface pesListResult {
	data: object,
	meta: object
}

export class Api {

	get baseUrl(): string {
		return 'https://api0.solar.sheffield.ac.uk/pvlive/api/v4/';
	}

	get httpConfig(): object {
		return {
			headers: {
				contentType: 'application/json',
				accept: 'application/json',
				acceptEncoding: 'gzip, deflate'
			}
		}
	}

	isValid(s: string): boolean {
		return s.length === 5;
	}

	fetchGSPList(): Promise<gspListResult> {
		return new Promise<gspListResult>((resolve, reject) => {
			axios(this.baseUrl + 'gsp_list', this.httpConfig).then((result :AxiosResponse<object>) => {
				if(result.status === 200) {
					resolve(<gspListResult><unknown>result.data);
				} else {
					reject();
				}
			}, () => {
				reject();
			});
		});
	}

	fetchPESList(): Promise<pesListResult> {
		return new Promise<pesListResult>((resolve, reject) => {
			axios(this.baseUrl + 'pes_list', this.httpConfig).then((result :AxiosResponse<object>) => {
				if(result.status === 200) {
					resolve(<pesListResult><unknown>result.data);
				} else {
					reject();
				}
			}, () => {
				reject();
			});
		});
	}

}
