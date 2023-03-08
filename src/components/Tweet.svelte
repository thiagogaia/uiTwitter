<script lang="ts">
  import { ArrowClockwise, ChatCircle, Heart } from "phosphor-svelte"
  import { navigateTo, Navigate } from 'svelte-router-spa'
  
  type TweetProps = {
    content: string
    likes: number
  }

  export let prop: TweetProps

  import { goToPage } from '../stores/pageStore';
</script>

  <span on:click={() => goToPage('/status')} on:keyup class="tweet">
    <img src="https://github.com/thiagogaia.png" alt="ThiGato">

    <div class="tweet-content">
      <div class="tweet-content-header">
        <strong>ThiGato Pah</strong>
        <span>@thiagogaia</span>
      </div>

      <p>
        {prop.content}
      </p>

      <div class="tweet-content-footer">
        <button type="button">
          <ChatCircle size={20} />
          22
        </button>

        <button type="button">
          <ArrowClockwise size={20} />
          22
        </button>

        <button type="button">
          <Heart size={20} />
          {prop.likes}
        </button>
      </div>
    </div>
  </span>


<style>
  .tweet {
    padding: 1.5rem 1.25rem;
    display: grid;
    grid-template-columns: 3rem 1fr;
    gap: 0.75rem;
    border-bottom: 1px solid #ebeef0;
    text-decoration: none;
    cursor: pointer;
  }

  .tweet img {
    width: 3rem;
    height: 3rem;
    border-radius: 9999px;
  }

  .tweet .tweet-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;  
  }

  .tweet .tweet-content .tweet-content-header {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .tweet .tweet-content .tweet-content-header span {
    font-size: 0.875rem;
    color: #89a2b8;
  }

  .tweet .tweet-content p {
    line-height: 1.25;
  }

  .tweet .tweet-content .tweet-content-footer {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 0.75rem;
  }

  .tweet .tweet-content .tweet-content-footer button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0.875rem;
    color: #89a2b8;
  }

  .tweet .tweet-content .tweet-content-footer button:hover {
    color: var(--twitter-blue);
  }
</style>