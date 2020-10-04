Feature: Register into todoist
    As a new user I want to register into todoist

Scenario: I can register with google
Given I go to /users/showregister
When I click on "Continue with Google" button
Then I am taken to https://accounts.google.com/

Scenario: I can register with facebook
Given I go to /users/showregister
When I click on "Continue with Facebook" button
Then I am taken to https://www.facebook.com/login.php

Scenario: I can register with Apple
Given I go to /users/showregister
When I click on "Continue with Apple" button
Then I am taken to https://appleid.apple.com/

Scenario Outline: Email address is validated before registration
Given I go to /users/showregister
When I enter <email> in email field
And I click on Sign up with Email button
Then I cannot continue to next step
Examples:
|email                |
|test test@yopmail.com|
|test-testyopmail.com |
|test-test@yopmailcom |
|test$%&@yopmail.)(/  |
|                     |

Scenario: Successful registration
Given I go to /users/showregister
When I enter alexpradap+<EPOCH_TIME>@gmail.com in email field
And I click on Sign up with Email button
And I enter Alexander Prada in Your name field
And I enter Passw0rd! in Password field
And I clic on Sign up now
Then I am taken to https://todoist.com/setup