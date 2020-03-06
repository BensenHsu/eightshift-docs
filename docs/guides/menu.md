---
id: menu
title: Menu
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--boilerplate-red?style=for-the-badge&logo=wordpress&labelColor=2a2a2a)](https://github.com/infinum/eightshift-boilerplate/blob/develop/src/menu/class-menu.php)

Menu class is located in `project`. It extends `Eightshift_Libs\Menu\Menu` class.

This class is used to add all custom project implementation for menus.

To add the custom menu, you must provide an array for custom menu locations as explained in the documentation from the [official WordPress docs](https://developer.wordpress.org/reference/functions/register_nav_menus/).

```php
/**
   * Return all menu poistions
   *
   * @return array Of menu positions with name and slug.
   *
   * @since 1.0.0
   */
  public function get_menu_positions() : array {
    return [
      'header_main_default' => esc_html__( 'Header Main', 'eightshift-boilerplate' ),
    ];
  }
```

## BEM Menu helper

We are providing a BEM menu helper that will create a normal WordPress menu but with HTML classes specific to the [BEM methodology](http://getbem.com/).

To use it just call this helper in your template.

```PHP
use Eightshift_Libs\Menu\Menu;

Menu::bem_menu( 'header_main_default', 'main-navigation' );
```

You can also provide multiple parameters to the helper. All the details are [found here](https://github.com/infinum/eightshift-libs/blob/404aeab50beef38f788c864d7c0312858b097e81/src/menu/class-menu.php#L69).