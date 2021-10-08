<?php
/**
 * The template used for displaying page content in template-homepage.php
 *
 * @package storefront
 */

?>
<?php
echo do_shortcode('[smartslider3 slider="3"]');
?>
<?php
$featured_image = get_the_post_thumbnail_url( get_the_ID(), 'thumbnail' );
?>
<div class="bottom-banner">
	<?php 
		$image = get_field('image_front');
		$size = 'full'; // (thumbnail, medium, large, full or custom size)
		if( $image ) {
    echo wp_get_attachment_image( $image, $size );
	}?>
</div>
<div id="post-<?php the_ID(); ?>" <?php post_class(); ?> style="<?php storefront_homepage_content_styles(); ?>" data-featured-image="<?php echo esc_url( $featured_image ); ?>">
	<div class="col-full">
		<?php
		/**
		 * Functions hooked in to storefront_page add_action
		 *
		 * @hooked storefront_homepage_header      - 10
		 * @hooked storefront_page_content         - 20
		 */
		do_action( 'storefront_homepage' );
		?>
	</div>
</div><!-- #post-## -->
