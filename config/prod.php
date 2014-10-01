<?php

// configure your app for the production environment

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__ . '/../templates',
));

$app['twig.options'] = array('cache' => __DIR__.'/../var/cache/twig');

$app->register(new Silex\Provider\SessionServiceProvider());

$app->register(new Silex\Provider\SecurityServiceProvider(), array(
    'security.firewalls' => array(
        'default' => array(
            'pattern' => '^.*$',
            'anonymous' => true,
            'form' => array(
                'login_path' => '/',
                'check_path' => 'login_check',
                'default_target_path'=> '/',
                'always_use_default_target_path' => true
            ),
            'logout' => array('logout_path' => '/logout'),
            'users' => array(
                'party' => array('ROLE_USER', 'KKcmZvi2WUS+LJs28NwhZf1wf+Msmr4Rdd5T7rMEF1WI6rT9nCOzz0nTf+npu7LbZXO31ch8A2w0J1yX5vZ0Ag=='),
            ),
        ),
    ),
    'security.access_rules' => array(
        array('^/.+$', 'ROLE_USER')
    )
));
