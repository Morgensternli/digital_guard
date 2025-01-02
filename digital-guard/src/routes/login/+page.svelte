<script>
  import "./styles.css";
  // braucht es für den rückgabewert
  let { form } = $props();
</script>

<div class="container">
  <a href="/" class="text-primary text-decoration-none mb-4 d-inline-block"
    >Zurück</a
  >
  <h1>Registriere dich für Digital Guard</h1>
  <div class="info-section">
    <h3>Sichern Sie Ihre digitale Zukunft</h3>
    <p>
      Mit Digital Guard treffen Sie heute die richtigen Entscheidungen für
      morgen.
    </p>

    <div class="benefits">
      <div class="benefit-item">
        <span class="benefit-icon">✓</span>
        <span>Zentrale Verwaltung aller digitalen Konten</span>
      </div>
      <div class="benefit-item">
        <span class="benefit-icon">✓</span>
        <span>Höchste Sicherheitsstandards</span>
      </div>
      <div class="benefit-item">
        <span class="benefit-icon">✓</span>
        <span>Einfache Verwaltung von Vertrauenspersonen</span>
      </div>
    </div>
  </div>

  <div class="form-section">
    <h2>Registrierung</h2>
    {#if form?.success}
      <p class="text-success">Erfolgreich registriert!</p>
    {/if}
    <form method="POST" action="?/create">
      <div class="form-grid">
        <div class="form-group">
          <label for="firstname">Vorname</label>
          <input name="vorname" class="form-control" type="text" required />
        </div>

        <div class="form-group">
          <label for="lastname">Nachname</label>
          <input name="nachname" class="form-control" type="text" required />
        </div>
      </div>

      <div class="form-group">
        <label for="email">E-Mail Adresse</label>
        <input name="email" class="form-control" type="email" required />
      </div>

      <div class="form-group">
        <label for="password">Passwort</label>
        <input name="password" class="form-control" type="password" required />
      </div>

      <div class="form-group">
        <label for="password-confirm">Passwort wiederholen</label>
        <input
          class="form-control"
          type="password"
          id="password-confirm"
          required
        />
      </div>

      <div class="form-footer">
        <div class="checkbox-group">
          <input type="checkbox" id="terms" required />
          <label for="terms">Ich akzeptiere die AGBs</label>
        </div>
        <button type="submit" class="btn btn-primary">Registrieren</button>
      </div>
    </form>
  </div>
</div>
