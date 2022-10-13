server app with express and postgres

### How connect to local postgres

```javascript
const db =  new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
```

### How connect to database on [railway](https://www.railway.app)

```javascript
const db = new Sequelize(DB_URI, {
  define: {
    timestamps: false
  }
});
```
