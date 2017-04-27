/**
 * Mocker the server configuration
 */

import supertest from 'supertest';

import server from '../server';
import '../config/database';

export default supertest(server);

