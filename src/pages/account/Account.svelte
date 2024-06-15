<Page name="account">

</Page>

<script lang="ts">
  import { Page } from 'framework7-svelte';
  import {onMount} from "svelte";
  import {Api, HttpClient} from "tonapi-sdk-js";

  export let client: Api<HttpClient>, accountId: string = "EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT";

  onMount(async () => {
    const events = await client.accounts.getAccountEvents(accountId, { limit: 50 });
    console.log(events);
  })
</script>