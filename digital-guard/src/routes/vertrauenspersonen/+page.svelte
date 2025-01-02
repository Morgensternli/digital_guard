
<script>
  import TrustCard from "$lib/components/TrustCard.svelte";
import "./styles.css";
  export let data;
  let vertrauenspersonen = data.vertrauenspersonen;
</script>

<div class="container">
  <div class="page-header">
    <h1>Vertrauenspersonen</h1>
    <p>Verwalten Sie hier Ihre Vertrauenspersonen für den digitalen Nachlass.</p>
  </div>

  <div class="grid-layout">
    <div class="card">
      <h2>Ihre Vertrauenspersonen</h2>
    
      {#each vertrauenspersonen as vertrauensperson}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <TrustCard {vertrauensperson}></TrustCard>
      </div>
    {/each}

    <div class="card">
      <h2>Neue Person hinzufügen</h2>
      <form method="POST" action="?/create">
        <div class="form-group">
          <label>Vorname</label>
          <input type="text" name = "vorname" required>
        </div>

        <div class="form-group">
          <label>Nachname</label>
          <input type="text"name = "nachname"  required>
        </div>

        <div class="form-group">
          <label>Beziehung</label>
          <select required name = "beziehung" >
            <option value="">Bitte wählen...</option>
            <option value="mother">Mutter</option>
            <option value="father">Vater</option>
            <option value="sibling">Geschwister</option>
            <option value="friend">Freund/in</option>
            <option value="other">Sonstige</option>
          </select>
        </div>

        <div class="form-group">
          <label>E-Mail</label>
          <input type="email" name = "vorname"  required>
        </div>

        <button type="submit" class="submit-button">Person hinzufügen</button>
      </form>
    </div>
  </div>
</div>
</div>