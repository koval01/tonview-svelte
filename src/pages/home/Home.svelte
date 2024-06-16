<Page name="home" class="select-none">

  <Navbar />
  
  <div class="m-auto max-w-screen-sm">
    <Head />

    <div class="mb-16">
      <List>
        <!-- <ListInput 
          outline
          floatingLabel 
          type="text" 
          placeholder="Search TON apps, addresses, domains and transactions..." 
          clearButton
          spellcheck="false"
          autocomplete="off"
          enterkeyhint="search" /> -->
      </List>
    </div>
  </div>

  <Feed />

</Page>

<script>
  import { Page, List, ListInput } from 'framework7-svelte';
  import { Navbar, Head, Feed } from "./elements";
</script>
