'use strict';

/**
 * mps-subscription service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mps-subscription.mps-subscription');
