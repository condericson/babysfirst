/**
 * Mocker the server configuration
 */

import supertest from 'supertest';

import server from '../server';
import './database';

export default supertest(server);
