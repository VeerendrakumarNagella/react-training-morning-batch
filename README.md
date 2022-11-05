# Practice changes

## git clone

git clone <url>

git clone https://github.com/VeerendrakumarNagella/react-training-morning-batch.git


## Branch creation and checkout

git checkout develop
  
git checkout -b "<feature_branch>"
  
ex: git checkout -b "feature/header-changes"
  
Do your code changes

## Code push

git status
  
git add . / git add -A
  
git commit -m "<commit message>"
  
ex: git commit -m "header changes added"
  
git pull origin develop
  
git merge develop
  
if(!merge conflicts) {
  
  if (branch in remote) {
  
    git push
  
  }
  
  else {
  
    git push --set-upstream origin <feature_branch>
  
  }
  
}
  else {
  
  // resolve merge conflicts
  
  git status
  
  git add .
  
  git commit -m "<commit message>"
  
  if (branch in remote) {
  
    git push
  
  }
  
  else {
  
    git push --set-upstream origin <feature_branch>
  
  }
  
}
