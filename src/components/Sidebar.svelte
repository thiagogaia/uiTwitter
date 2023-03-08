<script lang="ts">
  import twitterLogo from '../assets/logo-twitter.svg'
  import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from "phosphor-svelte";
  import { navigateTo, routeIsActive } from 'svelte-router-spa'

  import pageStore, { goToPage } from '../stores/pageStore';

  
</script>

<aside class="sidebar">
    <img class="logo" src="{twitterLogo}" alt="logo">

    <nav class="main-navigation">
      <a href="" on:click={() => goToPage('/')} class:active={$pageStore == '/'}>
        <House weight="fill" size={'2rem'} /> 
        <span>Home</span>
      </a>
      <a href="">
        <Hash size={'2rem'} />
        <span>Explore</span>
      </a>
      <a href="">
        <Bell size={'2rem'} />
        <span>Notifications</span></a>
      <a href="">
        <Envelope size={'2rem'} />
        <span>Messagens</span>
      </a>
      <a href="">
        <BookmarkSimple size={'2rem'} />
        <span>Bookmarks</span>
      </a>
      <a href="">
        <FileText size={'2rem'} />
        <span>Lists</span></a>
      <a href="">
        <User size={'2rem'} />
        <span>Profile</span>
      </a>
      <a href="">
        <DotsThreeCircle size={'2rem'} /> 
        <span>More</span>
      </a>
    </nav>

    <button class="new-tweet" type="button">
      <Pencil />
      <span>Tweet</span>
    </button>
  </aside>

  <style>
    .sidebar {
  padding: 1.5rem 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sidebar .logo {
  width: 2rem;
  height: 2rem;
}

.sidebar .new-tweet {
  background: var(--twitter-blue);
  border-radius: 9999px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 900;
  border: 0;
}

.sidebar .new-tweet:hover {
  filter: brightness(0.9)
}

.main-navigation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.main-navigation a {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
}

.main-navigation a.active {
  color: var(--twitter-blue);
}

.main-navigation a svg {
  width: 2rem;
  height: 2rem;
}

.sidebar .new-tweet svg {
  width: 1.5rem;
  height: 1.5rem;
  display: none;
}

@media (max-width: 768px) {
  .sidebar {
    padding: 1.5rem 0.75rem;
    align-items: center;
  }

  .main-navigation a span {
    display: none;
  }

  .sidebar .new-tweet svg {
    display: block;
  }

  .sidebar .new-tweet span {
    display: none;
  }
}
</style>