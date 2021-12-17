# git hooks
git hook이란 git에서 이벤트가 발생했을 때 특정 스크립트를 실행시키는 기능을 말한다.
git hook을 이용하면 커밋/전 후와 같은 다양한 이벤트에 hook을 걸 수 있다.  

기본적으로 .git/hooks 디렉토리 안에 훅 파일이 존재하지만 .git 디렉토리는 기본적으로 git ignore 대상이기 때문에 버전 관리가 되지 않는 단점이 있다.
따라서, 디렉토리를 만들고 훅을 생성한 후에 그곳을 hooks path로 설정해줘야 한다.

```shell script
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit
```

