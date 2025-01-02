<script>
  import { enhance } from "$app/forms";
  let { account } = $props();
</script>

<div class="feature-card">
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">
      <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href={"/account/" + account._id}>{account.benennung}</a>
    </div>
    <div class="card-body">
      Benutzer: {account.accountname}
    </div>
    <div>
      Webseite: {account.webseite}
    </div>
    <div>
      vertrauensperson: {account.vertrauensperson.vorname} {account.vertrauensperson.nachname}
    </div>
    {#if account.favorite}
    <form method="POST" action="?/removeFromFavorite" use:enhance>
        <input type="hidden" name="id" value={account._id} />
        <button class="btn btn-outline-warning">Von Favoriten entfernen</button>
    </form>
    {:else}
      <form method="POST" action="?/addToFavorite" use:enhance>
        <input type="hidden" name="id" value={account._id} />
        <button class="btn btn-outline-secondary">Als Favorit hinzufügen</button>
      </form>
    {/if}
  </div>
</div>

<style>
  .details {
    padding: 0.5em;
  }
  .title {
    font-weight: bold;
  }
</style>
