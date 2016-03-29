# Client Side code deployment

This tool is for deploying client side code for web apps to the Blink Mobile CDN.

## Setting scope

`blinkm client scope <your bucket name>`

`<your bucket name>` is supplied by Blink Mobile


## Scope Information

`blinkm client scope`

Will tell you what your bucket name and region are currently set to.

## Deploying files

`blinkm client deploy <path-to-files>`

When uploading, the specified path will become the root folder in the CDN:

```
www/
   + index.html
   + js/
       + app.js
   + img/
       + logo.png
       + cta.jpg
   + css/
       + layout.css
       + bootstrap.css
```

when you deploy the folder structure on the cdn becomes

```
index.html
js/
  + app.js
img/
  + logo.png
  + cta.jpg
css/
  + layout.css
  + bootstrap.css
```