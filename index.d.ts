declare module "sidemail";

// Path: sidemail.d.ts
declare module "sidemail" {
	export function configureSidemail(options: { apiKey: string }): Sidemail;
	export interface Sidemail {
		sendEmail(options: {
			fromName: string;
			fromAddress: string;
			toAddress: string;
			templateName: string;
		}): Promise<void>;
	}
}
