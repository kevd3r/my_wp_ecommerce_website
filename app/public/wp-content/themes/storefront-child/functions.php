<?php

/**
 * Storefront automatically loads the core CSS even if using a child theme as it is more efficient
 * than @importing it in the child theme style.css file.
 *
 * Uncomment the line below if you'd like to disable the Storefront Core CSS.
 *
 * If you don't plan to dequeue the Storefront Core CSS you can remove the subsequent line and as well
 * as the sf_child_theme_dequeue_style() function declaration.
 */
//add_action( 'wp_enqueue_scripts', 'sf_child_theme_dequeue_style', 999 );

/**
 * Dequeue the Storefront Parent theme core CSS
 */
function sf_child_theme_dequeue_style() {
    wp_dequeue_style( 'storefront-style' );
    wp_dequeue_style( 'storefront-woocommerce-style' );
}

/**
 * Note: DO NOT! alter or remove the code above this text and only add your custom PHP functions below this text.
 */



 /**
  * changing Header's content
  */
 /**
  * toggling the word 'menu' in mobile's frontpage
  */
  function storefront_primary_navigation() {
    ?>
    <nav id="site-navigation" class="main-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Primary Navigation', 'storefront' ); ?>">
    <button class="menu-toggle" aria-controls="site-navigation" aria-expanded="false"><span><?php echo esc_html( apply_filters( 'storefront_menu_toggle_text', __('' ) ) ); ?></span></button>
        <?php
        wp_nav_menu(
            array(
                'theme_location'  => 'primary',
                'container_class' => 'primary-navigation',
            )
        );

        wp_nav_menu(
            array(
                'theme_location'  => 'handheld',
                'container_class' => 'handheld-navigation',
            )
        );
        ?>
    </nav><!-- #site-navigation -->
    <?php
}

/**
 * putting logo & title at top header
 */
function storefront_site_title_or_logo( $echo = true ) {
  if ( function_exists( 'the_custom_logo' ) && has_custom_logo() ) {
    $logo = get_custom_logo();
    $mainTitle = '<h2 class="main-title" style="font-weight: bold;white-space:nowrap;">'.get_bloginfo( 'name' ).'</h2>';
    $html = is_home() ? '<h1 class="logo">' . $logo . '</h1>' : $logo;
  } else {
    $tag = is_home() ? 'h1' : 'div';
    $html = '<' . esc_attr( $tag ) . ' class="beta site-title"><a href="' . esc_url( home_url( '/' ) ) . '" rel="home">' . esc_html( get_bloginfo( 'name' ) ) . '</a></' . esc_attr( $tag ) . '>';
    if ( '' !== get_bloginfo( 'description' ) ) {
      $html .= '<p class="site-description">' . esc_html( get_bloginfo( 'description', 'display' ) ) . '</p>';
    }
  }
  if ( ! $echo ) {
    return $html;
  }

  echo $html, $mainTitle; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}

/**
 * menu on top header
 */
function storefront_site_branding() {
  ?>
  <div class="site-branding">
    <?php storefront_site_title_or_logo(); ?>
  </div>
  <?php
}

function storefront_page_content() {
  ?>
  <div class="entry-content">
    <?php the_content(); ?>
  
    <?php
      wp_link_pages(
        array(
          'before' => '<div class="page-links">' . __( 'Pages:', 'storefront' ),
          'after'  => '</div>',
        )
      );
    ?>
  </div><!-- .entry-content -->
  <?php
}

function rhinos_menu_search_and_register() {
  $links = array(
    'my-account' => array(
      'priority' => 10,
      'callback' => 'storefront_handheld_footer_bar_account_link',
    ),
    'search'     => array(
      'priority' => 20,
      'callback' => 'storefront_handheld_footer_bar_search',
    ),
    'cart'       => array(
      'priority' => 30,
      'callback' => 'storefront_handheld_footer_bar_cart_link',
    ),
  );
  if ( did_action( 'woocommerce_blocks_enqueue_cart_block_scripts_after' ) || did_action( 'woocommerce_blocks_enqueue_checkout_block_scripts_after' ) ) {
    return;
  }

  if ( wc_get_page_id( 'myaccount' ) === -1 ) {
    unset( $links['my-account'] );
  }

  if ( wc_get_page_id( 'cart' ) === -1 ) {
    unset( $links['cart'] );
  }

  $links = apply_filters( 'storefront_handheld_footer_bar_links', $links );
  ?>
  <div class="storefront-handheld-footer-bar">
    <ul class="columns-<?php echo count( $links ); ?>">
      <?php foreach ( $links as $key => $link ) : ?>
        <li class="<?php echo esc_attr( $key ); ?>">
          <?php
          if ( $link['callback'] ) {
            call_user_func( $link['callback'], $key, $link );
          }
          ?>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
  <?php
}
