'use strict';

/**
 * cluster-subscription service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cluster-subscription.cluster-subscription');
