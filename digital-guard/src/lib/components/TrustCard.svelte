<script>
  import { enhance } from "$app/forms";
  let { vertrauensperson } = $props();
</script>

<div class="trusted-person">
  <div class="person-avatar">{vertrauensperson.vorname.substring(0,1)}{vertrauensperson.nachname.substring(0,1)}</div>
  <div class="person-info">
    <div>
      Vertrauensperson: {vertrauensperson.vorname} {vertrauensperson.nachname}
    </div>
    <div>
      Benutzer: {vertrauensperson.beziehung}
    </div>
  </div>
  <form method="POST" action="?/delete" >
    <input type="hidden" name="id" value={vertrauensperson._id}>
    <button class="btn btn-danger">Entfernen</button>
  </form>

</div>