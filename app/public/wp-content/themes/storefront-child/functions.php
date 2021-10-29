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
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles(){
  wp_enqueue_style('parent_style',get_template_directory_uri().'style.css');
}


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

/* fonction ajouter script externe */
add_action( 'wp_enqueue_scripts', 'enqueue_Rhinos_modal' );
function enqueue_Rhinos_modal() {
    wp_enqueue_script( 'rhinos_modal', get_stylesheet_directory_uri() . '/assets/custom-js/rhinos_registration_modal.js', array( 'jquery' ) );
}
?>

<?php
/**-------- registration's user 's modal ------------*/
function user_login(){
  if ( is_user_logged_in() ){
    echo 'Welcome, registered user!';
    ?>
    <button type="button" id="logout-button"><p>Logout</p></button>
    <?php
  }else{
    echo'
    <form method="post" action="estore.local/wp-login.php" id="loginform" name="loginform">
      <p>
        <label for="user_login">Identifiant</label>
        <input type="text" tabindex="10" size="20" value="" id="user_login" name="log">
      </p>
      <p>
        <label for="user_pass">Mot de passe</label>
        <input type="password" tabindex="20" size="20" value="" id="user_pass" name="pwd">
      </p>
      <p><label><input type="checkbox" tabindex="90" value="forever" id="rememberme" name="rememberme">Rester connecter</label>
      | <a href="estore.local/wp-login.php?action=lostpassword">Mot de passe oublié</a></p>
      <p>
        <input type="submit" tabindex="100" value="Se connecter" id="wp-submit" name="wp-submit">
        <input type="hidden" value="estore.local" name="redirect_to">
      </p>
    </form>'
    ?>
    <button type="button" id="new-user">New User ?</button>
    <?php
  }
}
