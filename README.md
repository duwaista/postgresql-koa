## Первый запуск проекта
1. Установка зависимостей:
``` npm install ```

2. Установка Knex:
``` npm i knex -g ```

3. Создать файл `knexfile.js` на основе `knexfile.template.js`
4. EZ

#### Запуск проекта:
``` npm start ```

#### Запуск миграции:
``` npm run migrate ```

#### Откат миграции:
``` npm run unmigrate ```

#### Запуск Seed:
``` npm run seed ```

#### Пример файла миграции:
```js

export const up = async (knex) => {
  await knex.schema.createTable("<имя_таблицы>", table => {
    table.increments();
    table.string("<название_поля>").notNullable();
  });
}

export const down = async (knex) => {
  await knex.schema.dropTableIfExists("<имя_таблицы>");
}
```

#### Пример сида:
```js

export const seed = async (knex) => {
  await knex('<имя_таблицы>').del();
  await knex('<имя_таблицы>').insert({
    <название_поля>: ''
  });
}

```
