# login

## TODO

- [ ] http => https

- [ ] 防御XSS（中间件识别参数）

- [ ] 防御CSRF（egg配置、前端调整）

- [ ] 防御暴力破解（Redis次数、IP锁定、MAC地址锁定）

- [ ] 权限控制

- [ ] SSO 单点登录

## QuickStart

### Development

```bash
npm i
npm run dev
open http://localhost:7001/
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npx sequelize db:migrate` to grade the database.
- Use `npx sequelize db:migrate:undo` 回退一个变更.
- Use `npx sequelize db:migrate:undo:all` 回退到初始状态.
