Feature: Homepage
    As a user I want to be able to navigate through home page

Scenario: The notice banner is visible
  Given I go to /es
    When the banner is visible
    Then it reads "Presentamos los Paneles: Una forma más visual de avanzar en tus proyectos"

Scenario: The notice banner contains a link to /kanban-board
  Given I go to /es
    When the banner is visible
    And I click on "Leer más"
    Then I am taken to /kanban-board

Scenario: The notice banner can be dismissed
  Given I go to /es
    When the banner is visible
    And I click on X button
    Then the banner is not visible

Scenario: The hero image is shown
  Given I go to /es
    When the hero image is shown
    Then It contains a copy that reads Organízalo todo

Scenario: The hero has a CTA
  Given I go to /es
    When the hero image is shown
    Then It contains a button with label Comienza ahora

Scenario: Hero CTA takes me to registration
  Given I go to /es
    When the hero image is shown
    And I click on Comienza ahora
    Then I am taken to /users/showregister

Scenario: The registration button is shown
  Given I go to /es
    When the navigation bar is shown
    Then the Regístrate button is shown

Scenario: Registration button leads user to registration flow
  Given I go to /es
    When the navigation bar is shown
    And I click on Regístrate
    Then I am taken to /users/showregister

Scenario: Login button is shown
  Given I go to /es
    When the navigation bar is shown
    Then Inicia sesión is shown

Scenario: Login leads user to login page
  Given I go to /es
    When the navigation bar is shown
    And I click on Inicia sesión
    Then I am taken to /users/showlogin
