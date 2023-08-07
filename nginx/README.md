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

# Domain

Currently owning a domain of www.vvasylkovskyi.com

# Certificate Via Lets Encrypt

https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04

### Using Wildcard

https://medium.com/@utkarsh_verma/how-to-obtain-a-wildcard-ssl-certificate-from-lets-encrypt-and-setup-nginx-to-use-wildcard-cfb050c8b33f
