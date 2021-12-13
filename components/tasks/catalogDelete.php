<article>
  <header>
    <h5>DELETE CATALOG ITEM</h5>
    <p>Deleting this item wil also delete your customer orders.</p>
  </header><br>
  <?php

    if($error != null){

    echo "
      <div class='alert alert-danger' role='alert'>
        <span class='text-capitalize'>$error</span>
      </div>
      ";
    }
  ?>
  <section class="card border-danger">
    <header class='card-header bg-danger text-white'>
      <ion-icon name="trash" class="align-middle"></ion-icon>
      DELETE ITEM
    </header>
    <section class="card-body">
      <?php echo form_open(current_url()); ?>
        <label for="deletePassword" class="form-label">
          <ion-icon name="lock-closed" class="align-middle"></ion-icon>
          Password
        </label>
        <div class='row'>
          <div class='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
            <input type="password" name="deletePassword" class="form-control"
            id="deletePassword" aria-describedby="passwordHelp">
            <small id="passwordHelp" class="form-text text-danger">
              <?php echo form_error("deletePassword"); ?>
            </small>
          </div>
        </div><br>
        <div>
          <button type="submit" name="catalogDeleteSubmitBtn"
            class="btn btn-danger btn-sm">
            <ion-icon name="trash" class="align-middle"></ion-icon>
            Delete Item
          </button>
        </div>
      </form>
    </section>
  </section>
</article>
