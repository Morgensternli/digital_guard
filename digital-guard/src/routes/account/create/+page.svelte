<script>
  let { data } = $props();
</script>

<div>
  <a href="/account" class="btn btn-outline-dark" role="button" aria-pressed="true">Zurück</a>
</div>

<h1>Neuer Account hinzufügen</h1>
<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Bennenung</label>
    <input name="titel" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Benutzername</label>
    <input name="accountname" class="form-control" type="text"/>
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Passwort</label>
    <input name="passwort" class="form-control" type="password" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Webseite</label>
    <input name="webseite" class="form-control" type="text" />
  </div>
  <div class="mb-3">
      <label>Vertrauensperson
        <select required name="beziehung">
          {#each data?.vertrauenspersonen as vertrauensperson}
          <option value={vertrauensperson._id}>
            {vertrauensperson.vorname} {vertrauensperson.nachname}
          </option>
        {/each}
        </select>
      </label>
  </div>
  <button type="submit" class="btn btn-primary">Hinzufügen</button>
</form>

