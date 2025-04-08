# back-office-frontend

## 環境要求

- Node.js：>= v22.12.0
- npm：>= v10.9.0

## 初始化專案

```shell
npm install
```

## 在 local 端執行

依不同環境 (dev、staging、prod)，執行各環境所屬的指令來啟動 dev server：

```shell
npm run dev:dev
```

或

```shell
npm run dev:staging
```

或

```shell
npm run dev:prod
```

## 打包程式碼

依不同環境 (dev、staging、prod)，執行各環境所屬的 build 指令後，打包目錄為專案根目錄中的 `dist` 目錄：

```shell
npm run build:dev
```

或

```shell
npm run build:staging
```

或

```shell
npm run build:prod
```