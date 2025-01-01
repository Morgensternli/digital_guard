<script>
  import "./styles.css";
  let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg navbar-dark custom-bg">
  <a class="navbar-brand" href="/">Digital Guard</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/account">Meine Accounts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/vertrauenspersonen">Vertrauenspersonen</a>
      </li>
      </ul>
  </div>
</nav>

<div class="container mt-3">
  {@render children()}
</div>
