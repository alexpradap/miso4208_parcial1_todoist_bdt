const {Given} = require('cucumber');
const {When} = require('cucumber');
const {Then} = require('cucumber');
const expect = require('chai').expect;

Given(/^I go to (.*)$/, (uri) => {
  browser.url(uri);
});

When('the banner is visible', () => {
  $('header + div._3o2D5').waitForExist(5000);
  $('header + div._3o2D5').waitForDisplayed(5000);
});

Then('it reads "Presentamos los Paneles: Una forma más visual de avanzar en tus proyectos"', () => {
  expect($('header + div._3o2D5 > div > div > p').getText()).to.include('Presentamos los Paneles: Una forma más visual de avanzar en tus proyectos');
});

When('I click on "Leer más"', () => {
  $('header + div._3o2D5 a').click();
});

Then(/^I am taken to (.*)$/, (uri) => {
  expect(browser.getUrl()).to.include(uri);
});

When('I click on X button', () => {
  $('header + div._3o2D5 > div > div > button').click();
});

Then('the banner is not visible', () => {
  expect($('header + div._3o2D5').isDisplayed()).to.equal(false);
});

When('the hero image is shown', () => {
  $('section._6_JOM div').waitForDisplayed(5000);
});

Then(/^It contains a copy that reads (.*)$/, (heroCopy) => {
  expect($('section._6_JOM div > h1').getText()).to.include(heroCopy);
});

Then('It contains a button with label Comienza ahora', () => {
  expect($('section._6_JOM div > a._2q_cf._2k-7Y._2Op4w._132Op._1jSu4.ga-get-started-button').getText()).to.equal('Comienza ahora');
});

When('I click on Comienza ahora', () => {
  $('section._6_JOM div > a._2q_cf._2k-7Y._2Op4w._132Op._1jSu4.ga-get-started-button').click();
});

When('the navigation bar is shown', () => {
  $('nav._2sK9Q').waitForDisplayed(5000);
});

Then('the Regístrate button is shown', () => {
  expect($('nav._2sK9Q > div > ul:nth-child(2) > li:nth-child(2) > a').isDisplayed()).to.equal(true);
});

When('I click on Regístrate', () => {
  $('nav._2sK9Q > div > ul:nth-child(2) > li:nth-child(2) > a').click();
});

Then('Inicia sesión is shown', () => {
  expect($('nav._2sK9Q > div > ul:nth-child(2) > li:nth-child(1) > a').isDisplayed()).to.equal(true);
});

When('I click on Inicia sesión', () => {
  $('nav._2sK9Q > div > ul:nth-child(2) > li:nth-child(1) > a').click();
});

When('I click on "Continue with Google" button', () => {
  $('a.ist_button_google').click();
});

When('I click on "Continue with Facebook" button', () => {
  $('a.ist_button_facebook').click();
});

When('I click on "Continue with Apple" button', () => {
  $('a.ist_button_apple').click();
});

When(/^I enter (.*) in email field$/, (email) => {
  if (email.includes('<EPOCH_TIME>')) {
    now = new Date();
    let secondsSinceEpoch = Math.round(now.getTime() / 1000);
    email = email.replace('<EPOCH_TIME>', secondsSinceEpoch.toString());
  }
  $('form input[type=email]').setValue(email);
});

When(/^I enter (.*) in password field$/, (password) => {
  $('form#login_form input[type=password]').setValue(password);
});

When('I click on log in button', () => {
  $('form#login_form button.submit_btn').click();
  browser.pause(3000);
});

Then(/^error message (.*) is shown$/, (error) => {
  expect($('div.error_block span').getText()).to.equal(error);
});

When('I click on Sign up with Email button', () => {
  $('form button#step_one_submit').click();
});

Then('I cannot continue to next step', () => {
  expect(browser.getUrl()).to.include('/users/showregister');
});

When(/^I enter (.*) in Your name field$/, (full_name) => {
  let name_field = $('form input#full_name');
  name_field.waitForDisplayed(5000);
  name_field.click();
  name_field.setValue(full_name);
});

When(/^I enter (.*) in Password field$/, (password) => {
  $('form input#pwd').setValue(password);
});

When('I clic on Sign up now', () => {
  $('form button#step_two_submit').click();
  $('h1.tdo-title').waitForDisplayed(5000);
});