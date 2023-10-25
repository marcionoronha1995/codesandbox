## …or create a new repository on the command line

```md
echo "# codesandbox" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:marcionoronha1995/codesandbox.git/
git push -u origin main
```
## …or push an existing repository from the command line
```md
git remote add origin git@github.com:marcionoronha1995/codesandbox.git/
git branch -M main
git push -u origin main
```