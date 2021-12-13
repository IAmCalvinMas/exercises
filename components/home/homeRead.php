<main>
  <header>
    <h5 class="text-uppercase">
      Browse all the stores in South Africa <b>&amp;</b> even place orders.
    </h5>
  </header>
  <nav>
    <ul class="list-inline">
      <li class="list-inline-item">
        <a href="<?php echo site_url('store/add'); ?>"
          class="btn btn-dark btn-sm" type="button">
          <ion-icon name="storefront" class="align-middle"></ion-icon>
          create your online store
        </a>
      </li>
    </ul>
  </nav><br>
  <section>
  <?php


    if( isset($catalogResultsPanel) && $searchResultsNumRows > 0 ) {

      echo $catalogResultsPanel;
    }
    else if( isset($storeResultsPanel) && $searchResultsNumRows > 0 ) {

      echo $storeResultsPanel;
    }
    else {

        foreach($cookieNames as $cookie){

          delete_cookie($cookie);
        }

      redirect('home/error/5');
    }
  ?>
  </section>
</main>
