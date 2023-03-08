<script lang="ts">
  import Sidebar from "./components/Sidebar.svelte"

  import { Router } from 'svelte-router-spa'
  import routes from 'virtual:generated-pages-svelte'

  

</script>

<div class="layout">
  <Sidebar />
  
  <div class="content">
    <Router {routes} />
    
  </div>
</div>


