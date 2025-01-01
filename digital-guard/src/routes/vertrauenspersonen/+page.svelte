
<script>
  import "./styles.css";
</script>

<div class="container">
  <div class="page-header">
    <h1>Vertrauenspersonen</h1>
    <p>Verwalten Sie hier Ihre Vertrauenspersonen für den digitalen Nachlass.</p>
  </div>

  <div class="grid-layout">
    <div class="card">
      <h2>Ihre Vertrauenspersonen</h2>
      
      <div class="trusted-person">
        <div class="person-avatar">MM</div>
        <div class="person-info">
          <div class="person-name">Maria Muster</div>
          <div class="person-relation">Mutter</div>
        </div>
        <div class="action-buttons">
          <button class="btn btn-delete">Entfernen</button>
        </div>
      </div>

      <div class="trusted-person">
        <div class="person-avatar">PM</div>
        <div class="person-info">
          <div class="person-name">Peter Muster</div>
          <div class="person-relation">Vater</div>
        </div>
        <div class="action-buttons">
          <button class="btn btn-delete">Entfernen</button>
        </div>
      </div>
    </div>

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