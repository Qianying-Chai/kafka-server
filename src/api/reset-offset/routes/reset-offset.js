'use strict';

/**
 * reset-offset router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::reset-offset.reset-offset');
