<script>
  import "./styles.css";
  export let form;

  let password = "";
  let strength = "";

  function calculatePasswordStrength(password) {
    if (!password) return 'schwach';

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[\W]/.test(password)) score++;

    if (score <= 2) return 'schwach';
    if (score === 3) return 'mittel';
    return 'stark';
  }

  function checkStrength() {
    strength = calculatePasswordStrength(password);
  }
</script>

<div class="container">
  <div>
    <a href="/" class="btn btn-outline-dark" role="button" aria-pressed="true">Zurück</a>
  </div>
  
  <h1>Registriere dich für Digital Guard</h1>
  <div class="info-section">
    <h3>Sichern Sie Ihre digitale Zukunft</h3>
    <p>
      Mit Digital Guard treffen Sie heute die richtigen Entscheidungen für morgen.
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
      <div class="signup-grid">
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
        <input
          name="password"
          bind:value={password}
          class="form-control"
          placeholder="Passwort eingeben"
          on:input={checkStrength}
          type="password"
          required
        />
        {#if strength}
          <div class="mt-2">
            <p class:text-danger ={strength === 'schwach'}
               class:text-warning ={strength === 'mittel'}
               class:text-success ={strength === 'stark'}>
              Passwortstärke: {strength}
            </p>
          </div>
        {/if}
      </div>

      <div class="form-footer">
        <div class="checkbox-group">
          <input type="checkbox" id="terms" required />
          <label for="terms">Ich akzeptiere die AGBs</label>
        </div>
        <button type="submit" class="submit">Registrieren</button>
      </div>
    </form>
  </div>
</div>
