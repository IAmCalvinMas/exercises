<?php

  $config['base_url'] = site_url($url);
  $config['total_rows'] = isset( $paginationRows ) ? $paginationRows : 0;
  $config['per_page'] = $itemsPerPage;
  $config['full_tag_open'] = '<ul class="pagination  d-flex justify-content-center">';
  $config['full_tag_close'] = '</ul>';

  $config['first_tag_open'] = '<li class="page-item">';
  $config['first_tag_close'] = '</li>';

  $config['last_tag_open'] = '<li class="page-item">';
  $config['last_tag_close'] = '</li>';

  $config['next_tag_open'] = '<li class="page-item">';
  $config['next_tag_close'] = '</li>';

  $config['prev_tag_open'] = '<li class="page-item">';
  $config['prev_tag_close'] = '</li>';

  $config['cur_tag_open'] = '<li class="page-item active"><a class="page-link bg-danger border-danger">';
  $config['cur_tag_close'] = '</a></li>';

  $config['num_tag_open'] = '<li class="page-item">';
  $config['num_tag_close'] = '</li>';

  $config['attributes'] = array('class' => 'page-link text-dark');

  $this->pagination->initialize($config);

  echo $this->pagination->create_links();

?>
