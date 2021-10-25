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

<div id="post-<?php the_ID(); ?>" <?php post_class(); ?> style="<?php storefront_homepage_content_styles(); ?>" data-featured-image="<?php echo esc_url( $featured_image ); ?>">
	<div class="col-full">
		<div class="main-title">
			<h2><?php the_field('main_title'); ?></h2>
		</div>
		<div class="shopBtn">
			<a href="estore.local/shop/"><button id="shopNow"><p>➔</p></button></a>
					<p>SHOP NOW </p>
		</div>
		<div id="bottom-banner">
		
    	<?php 
				$image = get_field('image_front');
				$size = 'full'; // (thumbnail, medium, large, full or custom size)
				if( $image ) {
    		echo wp_get_attachment_image( $image, $size );
			}?>

			<div id="1rst-front">
				<h2><?php the_field('title_front'); ?></h2>
				<p><?php the_field('comment_front');?></p>
			</div>

			<?php 
				$image = get_field('image_2nd__front');
				$size = 'full'; // (thumbnail, medium, large, full or custom size)
				if( $image ) {
    		echo wp_get_attachment_image( $image, $size );
			}?>

			<div id="2nd-front">
				<h2><?php the_field('title_2nd_front'); ?></h2>
				<p><?php the_field('comment_2nd_front');?></p>
			</div>

			<?php 
				$image = get_field('image_3rd_front');
				$size = 'full'; // (thumbnail, medium, large, full or custom size)
				if( $image ) {
    		echo wp_get_attachment_image( $image, $size );
			}?>

			<div id="3rd-front">
				<h2><?php the_field('title_3rd_front'); ?></h2>
				<p><?php the_field('comment_3rd_front');?></p>
			</div>
  	</div>


		<?php
		/**
		 * Functions hooked in to storefront_page add_action
		 *
		 * @hooked storefront_homepage_header      - 10
		 * @hooked storefront_page_content         - 20
		 */
		do_action( 'storefront_homepage' );
		user_datas();
		?>
	</div>
</div><!-- #post-## -->
