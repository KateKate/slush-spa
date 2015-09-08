import gulp from 'gulp';
import install from 'gulp-install';
import conflict from 'gulp-conflict';
import template from 'gulp-template';
import rename from 'gulp-rename';
import inquirer from 'inquirer';
import path from 'path';

const _ = require('underscore.string');

function format(string) {
  const username = string.toLowerCase();
  return username.replace(/\s/g, '');
}

const defaults = (() => {
  const workingDirName = path.basename(process.cwd());

  let homeDir, osUserName;
  if (process.platform === 'win32') {
    homeDir = process.env.USERPROFILE;
    osUserName = process.env.USERNAME || path.basename(homeDir).toLowerCase();
  }
  else {
    homeDir = process.env.HOME || process.env.HOMEPATH;
    osUserName = homeDir && homeDir.split('/').pop() || 'root';
  }

  const configFile = path.join(homeDir, '.gitconfig');
  let user = {};

  if (require('fs').existsSync(configFile)) {
    user = require('iniparser').parseSync(configFile).user;
  }

  return {
    appName: workingDirName,
    userName: osUserName || format(user.name || ''),
    authorName: user.name || '',
    authorEmail: user.email || ''
  };

})();

gulp.task('default', (done) => {
  const prompts = [{
    name: 'appName',
    message: 'What is the name of your project?',
    default: defaults.appName
  }, {
    name: 'appDescription',
    message: 'What is the description?'
  }, {
    name: 'appVersion',
    message: 'What is the version of your project?',
    default: '0.1.0'
  }, {
    name: 'authorName',
    message: 'What is the author name?',
    default: defaults.authorName
  }, {
    name: 'authorEmail',
    message: 'What is the author email?',
    default: defaults.authorEmail
  }, {
    name: 'userName',
    message: 'What is the github username?',
    default: defaults.userName
  }, {
    type: 'confirm',
    name: 'moveon',
    message: 'Continue?'
  }];

  inquirer.prompt(prompts, (answers) => {
    if (!answers.moveon) {
      return done();
    }
    answers.appNameSlug = _.slugify(answers.appName);
    gulp.src(__dirname + '/templates/**')
    .pipe(template(answers))
    .pipe(rename( (file) => {
      if (file.basename[0] === '_') {
        file.basename = '.' + file.basename.slice(1);
      }
    }))
    .pipe(conflict('./'))
    .pipe(gulp.dest('./'))
    .pipe(install())
    .on('end', () => {
      done();
    });
  });
});
