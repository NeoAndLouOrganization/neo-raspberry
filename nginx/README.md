# Setup Nginx For Linux

https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04#step-5-%E2%80%93-setting-up-server-blocks-(recommended)

# Setup Nginx For Mac

- First, add domain in `/etc/hosts`

- Nginx config file is here: `/usr/local/etc/nginx/nginx.conf`

https://medium.com/@VenuThomas/what-is-nginx-and-how-to-set-it-up-on-mac-107a2482a33a

## Install

`$ brew install nginx`

## Start

`$ brew services start nginx`
`$ nginx`

Start with arbitrary file
`$ nginx -c /Users/vvl02/git/neo-raspberry/nginx/nginx.conf`

## Stop

`$ brew services stop nginx`
`$ nginx -s stop`

## Update Config

Check where the configuration file is first:

`nginx -t`

Update file

# Convert to HTTPS and install SSL certificate

- Getting a domain - https://dcc.godaddy.com/domains
- Settings up a domain registrar - https://docs.digitalocean.com/tutorials/dns-registrars/
- Install Nginx - https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04#step-5-%E2%80%93-setting-up-server-blocks-(recommended)
- Install SSL - https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04
- Note we need to configure both DNS for `my-domain-name.com` and `www.my-domain-name.com`.
- Note we need to configure both DNS for `A` class and `AAAA` class
- Finally - configure Nginx forwarding https://gist.github.com/soheilhy/8b94347ff8336d971ad0

```
    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ...

    location /api {
            proxy_pass http://127.0.0.1:8081;
    }
```

## Domain

Currently owning a domain of www.vvasylkovskyi.com

## Certificate Via Lets Encrypt

https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04

### Using Wildcard

https://medium.com/@utkarsh_verma/how-to-obtain-a-wildcard-ssl-certificate-from-lets-encrypt-and-setup-nginx-to-use-wildcard-cfb050c8b33f
