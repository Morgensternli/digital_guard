<script>
  import "./styles.css";
  let { form } = $props();
  let account = $state({
    vorname: "",
    nachname: "",
    email: "",
    password: "",
  });
</script>

<div class="container">
  <a
    href="/movies"
    class="text-primary text-decoration-none mb-4 d-inline-block">Zurück</a>
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
    <form>
      <div class="form-grid">
        <div class="form-group">
          <label for="firstname">Vorname</label>
          <input
            vorname="vorname"
            class="form-control"
            type="text"
            bind:value={account.vorname}
            required
          />
        </div>

        <div class="form-group">
          <label for="lastname">Nachname</label>
          <input
            nachname="nachname"
            class="form-control"
            type="text"
            bind:value={account.nachname}
            required
          />
        </div>
      </div>

      <div class="form-group">
        <label for="email">E-Mail Adresse</label>
        <input
          email="email"
          class="form-control"
          type="email"
          bind:value={account.email}
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Passwort</label>
        <input
          password="password"
          class="form-control"
          type="password"
          bind:value={account.password}
          required
        />
      </div>

      <div class="form-group">
        <label for="password-confirm">Passwort wiederholen</label>
        <input type="password" id="password-confirm" required />
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

{#if form?.success}
  <p>Erfolgreich registriert!</p>
{/if}
