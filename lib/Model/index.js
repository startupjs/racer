import util from '../util';
import Model from './Model';

// Extend model on both server and client //
import './unbundle';
import './events';
import './paths';
import './collections';
import './mutators';
import './setDiff';

import './connection';
import './subscriptions';
import './Query';
import './contexts';

import './fn';
import './filter';
import './refList';
import './ref';

// Extend model for server //
if (util.isServer) import('./bundle');
if (util.isServer) import('./connection.server');

export default Model;
