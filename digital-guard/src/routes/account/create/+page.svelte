<script>
  let { data } = $props();
</script>

<a
    href="/account"
    class="text-primary text-decoration-none mb-4 d-inline-block">Zurück</a>
<h1>Füge einen neuen Account hinzu</h1>
<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Benutzername</label>
    <input name="accountname" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Passwort</label>
    <input name="passwort" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Webseite</label>
    <input name="webseite" class="form-control" type="text" />
  </div>
  <div class="mb-3">
      <label>Vertrauensperson</label>
      <select required name="beziehung">
        {#each data?.vertrauenspersonen as vertrauensperson}
        <option value={vertrauensperson._id}>
          {vertrauensperson.vorname} {vertrauensperson.nachname}
        </option>
      {/each}
      </select>
  </div>
  <button type="submit" class="btn btn-primary">Hinzufügen</button>
</form>


