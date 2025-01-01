<script>
  import "./styles.css";
  let { data, filterByFavorite = false } = $props();

  let accounts = $derived.by(() => {
    if (filterByFavorite) {
      let accountFiltered = data.accounts.filter((account) => account.favorit);
      return accountFiltered;
    }
    return data.accounts;
  });
</script>


<div class="header">
  <h1>Meine Accounts</h1>
  <a href="/account/create" class="btn btn-primary">Account Hinzufügen</a>
<!-- See https://getbootstrap.com/docs/5.0/forms/checks-radios/ -->
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
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <AccountCard {account}></AccountCard>
    </div>
  {/each}
</div>
