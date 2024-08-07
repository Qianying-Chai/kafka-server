'use strict';

/**
 * reset-offset service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reset-offset.reset-offset');
