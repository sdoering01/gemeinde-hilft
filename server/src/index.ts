import { port } from './config';
import { app } from './app';
import { knex } from './database/database';

const startup = async () => {
    await knex.migrate.latest();

    app.listen(port, () => console.log(`Listening on port ${port}`));
};

startup().catch(console.error);
