<?php
/**
 * Plugin Name: Dustin.
 * Plugin URI: http://github.com/Purdom/dustin
 * Description: Stuff for Dustin's site.
 * Version: 1.0.0
 * Author: Jeremy Boggs and Purdom Lindblad
 */

function dustin_scripts_method() {
	wp_enqueue_script(
		'dustin_script',
		plugins_url( '/dustin.js' , __FILE__ ),
    array( 'jquery')
   	);
}

add_action( 'wp_enqueue_scripts', 'dustin_scripts_method' );
