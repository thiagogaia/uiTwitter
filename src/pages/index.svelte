<script lang="ts">
  import { LinkSimpleHorizontalBreak } from "phosphor-svelte"
  import Header from "../components/Header.svelte"
  import Tweet from '../components/Tweet.svelte'
  let props = [
    {content: 'Thiago Gaia',  likes: 22},
    {content: 'Thiago Gaia',  likes: 1},
    {content: 'Thiago Gaia',  likes: 3},
    {content: 'Thiago Gaia',  likes: 2}
  ]

  let page = {
    title: 'Home'
  }
  
  let tweetText = ''
  function createNewTweet() {
    // console.log(props)
    // props.push({content: tweetText, likes: 0})
    // console.log(props)
    props = [{content: tweetText, likes: 0}, ...props]
    tweetText = ''
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key == 'Enter' && (event.ctrlKey || event.ctrlKey)) {
      createNewTweet()
    }
  }
</script>

<main class="timeline">
  <Header {page} />

  <form on:submit|preventDefault={createNewTweet} class="new-tweet-form">
    <label for="tweet">
      <img src="https://github.com/thiagogaia.png" alt="Thiago Gaia">
      <textarea id="tweet" bind:value={tweetText} 
        on:keydown={handleHotKeySubmit}
        placeholder="O que q tá acontecendo?"></textarea>
    </label>

    <button type="submit">Tweet</button>
  </form>

  <div class="separator"></div>

  {#each props as prop}
    <Tweet {prop} />
  {/each}
</main>