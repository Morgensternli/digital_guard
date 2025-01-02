<script>
  import "./styles.css";
  let {data, form} = $props();
</script>

<a href="/account">Zurück</a>

<h1>{data.account.benennung}</h1>
{#if form?.success}
      <p class="text-success">Erfolgreich Bearbeitet!</p>
    {/if}
<div class="grid-layout">
  <div class="card">
    <form method="POST" action="?/update" >
      <div class="mb-3">
        <label for="" class="form-label">Benennung</label>
        <input value={data.account.benennung} name="titel" class="form-control" type="text" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Benutzername</label>
        <input value={data.account.accountname} name="accountname" class="form-control" type="text"/>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Passwort</label>
        <input value={data.account.passwort}  name="passwort" class="form-control" type="password" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Webseite</label>
        <input value={data.account.webseite}  name="webseite" class="form-control" type="text" />
      </div>
      <input type="hidden" name="id" value={data.account._id}>
      <button type="submit" class="btn btn-secondary">Bearbeiten</button>
    </form>
    <p></p>
  <div>
    <form method="POST" action="?/delete" >
      <input type="hidden" name="id" value={data.account._id}>
      <button type="submit" class="btn btn-danger">Entfernen</button>
    </form>
  </div>
  </div>
</div>
