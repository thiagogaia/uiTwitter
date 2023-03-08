<script lang="ts">
  import { PaperPlaneRight } from "phosphor-svelte"
import Header from "../components/Header.svelte"
  import Tweet from '../components/Tweet.svelte'
  let props = [
    {content: 'Thiago Gaia',  likes: 22},
    {content: 'Thiago Gaia',  likes: 1},
    {content: 'Thiago Gaia',  likes: 3},
    {content: 'Thiago Gaia',  likes: 2}
  ]

  let page = {
    title: 'Tweet'
  }
  
  let principal = {
    content: 'Loren Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    likes: 8
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

<main class="status">
  <Header {page} />

  <Tweet prop={principal} />

  <div class="separator"></div>

  <form on:submit|preventDefault={createNewTweet} action="" class="answer-tweet-form">
    <label for="tweet">
      <img src="https://github.com/thiagogaia.png" alt="Thiago Gaia">
      <textarea 
        id="tweet" 
        bind:value={tweetText}
        on:keydown={handleHotKeySubmit}
        placeholder="Tweet sua resposta"></textarea>
    </label>

    <button type="submit">
      <PaperPlaneRight />
      <span>Resposta</span>
    </button>
  </form>

  

  {#each props as prop}
    <Tweet {prop} />
  {/each}
  
</main>

<style>
  .answer-tweet-form {
  padding: 1.5rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid #ebeef0;
}

.answer-tweet-form label {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.answer-tweet-form label img {
  width: 3rem;
  height: 3rem;
  border-radius: 9999px
}

.answer-tweet-form label textarea {
  flex: 1;
  border: 0;
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 1.25rem;
  resize: none;
}

.answer-tweet-form label textarea:focus {
  outline: none;
}

.answer-tweet-form label textarea::placeholder {
  color: #5b7083;
}

.answer-tweet-form button[type=submit] {
  margin-left: auto;
  background: var(--twitter-blue);
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 900;
  border: 0;
}

.answer-tweet-form button[type=submit]:hover {
  filter: brightness(0.9);
}

.answer-tweet-form button[type=submit] svg {
  width: 1.5rem;
  height: 1.5rem;
  display: none;
}

@media (max-width: 768px) {
  .answer-tweet-form label textarea {
    font-size: 1rem;
  }
  
  .answer-tweet-form button[type=submit] {
    padding: 0.75rem;
  }

  .answer-tweet-form button[type=submit] svg {
    display: block;
  }

  .answer-tweet-form button[type=submit] span {
    display: none;
  }
}
</style>