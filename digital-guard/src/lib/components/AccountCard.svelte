<script>
  import { enhance } from "$app/forms";
  let { account } = $props();
</script>

<div class="account-card">
  <div class="details">
    <div class="title">
      <a href={"/account/" + account._id}>{account.titel}</a>
    </div>
    <div>
      Benutzer: {account.name}
    </div>
    <div>
      Webseite: {account.webseite}
    </div>
    <div>
      vertrauensperson: {account.vertrauensperson}
    </div>
    {#if account.favorite}
    <form method="POST" action="?/removeFromFavorite" use:enhance>
        <input type="hidden" name="id" value={account._id} />
        <button class="btn btn-danger">Von Favoriten entfernen</button>
    </form>
    {:else}
      <form method="POST" action="?/addToFavorite" use:enhance>
        <input type="hidden" name="id" value={account._id} />
        <button class="btn btn-success">Als Favorit hinzufügen</button>
      </form>
    {/if}
  </div>
</div>

<style>
  .account-card {
    border: 1px solid #e4e2bc;
    height: 100%;
    background-color: #adadf2;
    color: white;
  }
  .details {
    padding: 0.5em;
  }
  .title {
    font-weight: bold;
  }
</style>
