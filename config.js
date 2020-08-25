module.exports = { 
    DB_URL: process.env.DB_URL || "postgresql://dunder_mifflin@localhost/knex-practice",
    TEST_DB_URL: process.env.TEST_DB_URL || "postgresql://dunder_mifflin@localhost/knex-practice-test"
}