<script lang="ts">

  import { Sparkle } from "phosphor-svelte"

  type HeaderProps = {
    title: string
  }

  export let page:HeaderProps
</script>
<div class="timeline-header">
  {page.title}
  <Sparkle size={'1.5rem'} color={'var(--twitter-blue)'} /> 
</div>

<style>
  .timeline-header {
  padding: 1.5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  border-bottom: 1px solid #ebeef0;
}
</style>