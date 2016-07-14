const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var files = ['*.js', './lib/**/*.js', './routes/**/*.js', './models/**/*.js'];
