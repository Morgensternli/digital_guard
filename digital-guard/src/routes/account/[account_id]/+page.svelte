<script>
  export let data;
  let account = data.account;
  import ".../styles.css";
</script>

<a href="/account">Zurück</a>

<h1>{account.titel}</h1>
<div class="row mt-3">
  <div class="col">
    <p>Jahr: {account.name}</p>
    <p>Dauer: {account.webseite}</p>
    <p>Cast: {account.vertrauensperson}</p>
    <form method="POST" action="?/delete">
      <input type="hidden" name="id" value={account._id}>
      <button class="btn btn-danger">Account löschen</button>
    </form>
  </div>
</div>
