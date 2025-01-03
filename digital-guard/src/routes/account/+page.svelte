<script>
  import AccountCard from "$lib/components/AccountCard.svelte";
import "./styles.css";
  let { data, filterByFavorite = false } = $props();
  let accounts = $derived.by(() => {
    if (filterByFavorite) {
      let accountFiltered = data.accounts.filter((account) => account.favorite);
      return accountFiltered;
    }
    return data.accounts;
  });
</script>


<div class="header">
  <h1>Meine Accounts</h1>
  <a href="/account/create" class="btn btn-primary">Account Hinzufügen</a>
<div class="form-check mt-3">
  <input
    class="form-check-input"
    type="checkbox"
    id="filter"
    bind:checked={filterByFavorite}
  />
  <label class="form-check-label" for="filter">
    Nur Favoriten anzeigen
  </label>
</div>
</div>
<div class="row mt-3">
  {#each accounts as account}
    <div>
      <AccountCard {account}></AccountCard>
    </div>
  {/each}
</div>
