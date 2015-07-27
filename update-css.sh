echo "Updating src/css/style.css..."
cd src/css
lessc style.less --clean-css="--s1 --advanced --compatibility=ie8" > style.css
