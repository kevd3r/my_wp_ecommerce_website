<?php
/**
 * Tests area.
 * php version 5.6
 *
 * @package Screenfeed/sf-adminbar-tools
 *
 * @see Screenfeed\AdminbarTools\var_dump()
 * @see Screenfeed\AdminbarTools\var_export()
 */

namespace Screenfeed\AdminbarTools;

defined( 'ABSPATH' ) || exit; // @phpstan-ignore-line

global $wpdb, $wp_filter, $wp_rewrite; // phpcs:ignore Squiz.PHP.GlobalKeyword.NotAllowed


function storefront_site_title_or_logo( $echo = trues ) {
    if ( function_exists( 'the_custom_logo' ) && has_custom_logo() ) {
      $logo = get_custom_logo();
      $mainTitle = get_bloginfo('name');
      $html = is_home() ? '<div><h1 class="logo">' . $logo . '</h1><h2>'.$mainTitle.'</h2></div>' : $logo,$mainTitle;
      
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
  
    echo $html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
  }
  