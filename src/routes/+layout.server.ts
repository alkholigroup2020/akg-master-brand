// console.log(`==> Running on the sever side only @home page`);

export async function load({ locals: { locale } }) {
	// pass locale information from "server-context" to "shared server + client context"
	return { locale };
}
