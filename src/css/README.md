
# Stylesheet Folder

The `Virtual Atom Smasher` is going to automatically look for a `src/css/style.css` file in this folder. 

**WARNING:** By default, there is a `style.less` that you can start working on, but **don't forget to compile** it to `style.css` before you commit!

For example, using lessc:

```sh
lessc style.less --clean-css="--s1 --advanced --compatibility=ie8" > style.css
```
