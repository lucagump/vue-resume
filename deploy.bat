
cd dist

echo www.git.lucamartinelli.com > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lucagump/lucagump.github.io.git master

cd ..