<script>
  import { enhance } from "$app/forms";
  let { account } = $props();
</script>

<div class="feature-card">
  <div class="card text-dark bg-light">
    <div class="card-header">
      <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href={"/account/" + account._id}>{account.benennung}</a>
    </div>
    <div class="card-body">
      <p>
        <strong>Benutzer:</strong> {account.accountname}
      </p>
      <p>
        <strong>Webseite:</strong> {account.webseite}
      </p>
      <p>
        <strong>Vertrauensperson:</strong> {account.vertrauensperson.vorname} {account.vertrauensperson.nachname}
      </p>

      <!-- Favoriten-Buttons -->
      {#if account.favorite}
        <form method="POST" action="?/removeFromFavorite" use:enhance>
          <input type="hidden" name="id" value={account._id} />
          <button class="btn btn-warning btn-sm">Von Favoriten entfernen</button>
        </form>
      {:else}
        <form method="POST" action="?/addToFavorite" use:enhance>
          <input type="hidden" name="id" value={account._id} />
          <button class="btn btn-secondary btn-sm">Als Favorit hinzufügen</button>
        </form>
      {/if}
    </div>
  </div>
</div>


