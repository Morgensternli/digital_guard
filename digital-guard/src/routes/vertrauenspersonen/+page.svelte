<script>
  import TrustCard from "$lib/components/TrustCard.svelte";
  import "./styles.css";
  export let data;
  let vertrauenspersonen = data.vertrauenspersonen;
</script>

<div class="container">
  <div class="page-header">
    <h1>Vertrauenspersonen</h1>
    <p>
      Verwalten Sie hier Ihre Vertrauenspersonen für den digitalen Nachlass.
    </p>
    <strong>
      ACHTUNG! Lösche zuerst alle Accounts mit dieser Vertrauensperson!
    </strong>
  </div>

  <div class="grid-layout">
    <div class="card">
      <h2>Ihre Vertrauenspersonen</h2>
      {#each vertrauenspersonen as vertrauensperson}
        <div>
          <TrustCard {vertrauensperson}></TrustCard>
        </div>
      {/each}
    </div>

    <div class="card">
      <h2>Neue Person hinzufügen</h2>
      <form method="POST" action="?/create">
        <div class="form-group">
          <label>
            Vorname
            <input type="text" name="vorname" required />
          </label>
        </div>

        <div class="form-group">
          <label>
            Nachname
            <input type="text" name="nachname" required />
          </label>
        </div>

        <div class="form-group">
          <label>Beziehung
            <select required name="beziehung">
              <option value="">Bitte wählen...</option>
              <option value="Mutter">Mutter</option>
              <option value="Vater">Vater</option>
              <option value="Geschwister">Geschwister</option>
              <option value="FreundIn">Freund/in</option>
              <option value="Sonstige">Sonstige</option>
            </select>
          </label>
        </div>

        <div class="form-group">
          <label>E-Mail
            <input type="email" name="email" required />
          </label>
        </div>

        <button type="submit" class="submit-button">Person hinzufügen</button>
      </form>
    </div>
  </div>
</div>
