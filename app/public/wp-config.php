<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'F1zcs7ofZAwwtghszroh/Kwui/0b0clB5CHakbaeNP9wRbWxsWk9zqOo/EKR7tO1TlEZi7x9uRVs8ZL8msBpsA==');
define('SECURE_AUTH_KEY',  '371Q7gQlxpNUoc96rTnhWr9fQPMaxoMh1QlaWX6npw+yeKNMJMuBqECflItRFcviceCfGa0LLGBwmcd/EUmtbA==');
define('LOGGED_IN_KEY',    'ClARlpcvGPVXvC6E4sjkoCESCo+osAkGU2thDfnCqChn3KwAwAQpwZx5B6IjJNEJPa/y7/20CUcLVOtN8I+mIA==');
define('NONCE_KEY',        '7tIDkmoFT/KMrIGzH4mbDeAXKjcG1dDL267JlYwZYSrlVuNfi7CboBRhX2KwbJD8fxMOFVqqdPt5G7f8fpyTMw==');
define('AUTH_SALT',        'HD7Q3A9hITPuzPOwsVQdO9HLbnWX8W7P7Aq8mk++JwZ+zBL8U8uNBwZF2syiTqwt5Whfa2AKIZ4efqfJQMIwsw==');
define('SECURE_AUTH_SALT', 'FZh+irOui/ViwGVhFYBFyAKyui8uqtGZFm3qRvm/CTjdPC/dH2EOxlGHHGnP8ewRV4Ub12HRao3ZbhFchP2FHA==');
define('LOGGED_IN_SALT',   'cZYnwD9QzML8phOt0KJ8RDQAPFxaBDOzfsLvk1rqZenmTQuST5QV4Jj8TLR6EVoQdaPiyRDF/HAV3QcRwgzBJw==');
define('NONCE_SALT',       'eWreigzCGTZxsDl7ykeX2CJ/6866g7Ol1mjVhXqTa+LFc9gNdfzj9dXqNn6K0lTim0QaPOmWFLUdmRZ90hiuQg==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
