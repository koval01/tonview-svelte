<script lang="ts">
	import Framework7Svelte, { App as F7App, View } from "framework7-svelte";
	import Framework7 from 'framework7';
	import {Api, HttpClient} from "tonapi-sdk-js";

	import { Home } from "./pages/home";
	import { Account } from "./pages/account";

	Framework7.use(Framework7Svelte);

	const httpClient = new HttpClient({
	  baseUrl: import.meta.env.VITE_API_HOST,
	  baseApiParams: {
		  headers: {
			  'Content-type': 'application/json'
		  }
	  }
	});

	const client = new Api(httpClient);

	const f7params = {
		name: 'TonView Svelte',
		theme: 'ios',
		darkMode: true,
		routes: [
			{
				path: '/',
				component: Home,
			},
			{
				path: '/:accountId',
				component: Account,
				options: {
					props: {
						client: client
					}
				}
			},
			{
				path: '(.*)',
				component: Home,
			}
		],
	}
</script>

<F7App { ...f7params }>
  <View
    main
	url="/"
	iosSwipeBack={true}
	preloadPreviousPage={false}
	browserHistory={true}
	browserHistoryRoot={''}
	browserHistorySeparator={''}
	browserHistoryAnimateOnLoad={true}
  />
</F7App>
