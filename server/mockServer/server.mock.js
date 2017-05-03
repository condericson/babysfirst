/**
 * Mocker the server configuration
 */

import supertest from 'supertest';

import server from '../index';
import '../config/database';

export default supertest(server);
