Feature: Homepage
    As a user I want to be able to login into todoist

Scenario: I can login with google
Given I go to /users/showlogin
When I click on "Continue with Google" button
Then I am taken to https://accounts.google.com/

Scenario: I can login with facebook
Given I go to /users/showlogin
When I click on "Continue with Facebook" button
Then I am taken to https://www.facebook.com/login.php

Scenario: I can login with Apple
Given I go to /users/showlogin
When I click on "Continue with Apple" button
Then I am taken to https://appleid.apple.com/

Scenario Outline: I can only login with email and password
Given I go to /users/showlogin
When I enter <email> in email field
And I enter <password> in password field
And I click on log in button
Then error message <error> is shown
Examples:
|email                    |password|error                  |
|                         |         |Invalid email address.|
|                         |Passw0rd!|Invalid email address.|
|alexpradap+1234@gmail.com|         |Blank password.       |

Scenario: Log in successful
Given I go to /users/showlogin
When I enter alexpradap+1234@gmail.com in email field
And I enter Passw0rd! in password field
And I click on log in button
Then I am taken to https://todoist.com/app/