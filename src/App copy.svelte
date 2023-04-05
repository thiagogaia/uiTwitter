<script lang="ts">
  import Tweet from "./components/Tweet.svelte";
  let props = [
    { user: 'teste', children: 'eita', likes: 2},
    { user: 'teste2', children: 'eita2', likes: 21},
    { user: 'teste3', children: 'eita3', likes: 22}
  ]
</script>

<Tweet {props} > buba</Tweet>


