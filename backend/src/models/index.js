'use strict';

import fs        from 'fs';
import path      from 'path';
import Sequelize from 'sequelize';

const basename = path.basename( __filename );
const env = process.env.NODE_ENV || 'development';
const config = require( __dirname + '/../config/config.json' )[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize( process.env[config.use_env_variable], config );
} else {
  sequelize = new Sequelize( config.database, config.username, config.password, config );
}

fs
  .readdirSync( __dirname )
  .filter( file => {
    return (file.indexOf( '.' ) !== 0) && (file !== basename) && (file.slice( -3 ) === '.js');
  } )
  .forEach( file => {
    const model = sequelize['import']( path.join( __dirname, file ) );
    db[model.name] = model;
  } );

db['Users'].hasMany(db['RefreshTokens'],
    {foreignKey: 'userId', targetKey: 'id'});
db['Users'].hasMany(db['Advertisements'],
    {foreignKey: 'userId', targetKey: 'id'});

db['RefreshTokens'].belongsTo(db['Users'],
    {foreignKey: 'userId', targetKey: 'id'});

db['Advertisements'].belongsTo(db['Users'],
    {foreignKey: 'userId', targetKey: 'id'});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
