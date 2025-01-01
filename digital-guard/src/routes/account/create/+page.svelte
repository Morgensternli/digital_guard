<script>
  let { form } = $props();
</script>

<a
    href="/movies"
    class="text-primary text-decoration-none mb-4 d-inline-block">Zurück</a>
<h1>Füge einen neuen Account hinzu</h1>
<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input name="name" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Year</label>
    <input name="year" class="form-control" type="number" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Length</label>
    <input name="length" class="form-control" type="text" />
  </div>
  <button type="submit" class="btn btn-primary">Add Movie</button>
</form>

{#if form?.success}
  <p>Movie created</p>
{/if}
