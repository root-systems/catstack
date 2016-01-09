Feature: New Todo

  Background:
    Given I visit TODOMVC
    And I make sure that there are no todos

  Scenario: Pressing enter creates the todo
    When I enter a new todo
    Then it should be appended to the todo list

  Scenario: Pressing enter clears the input
    When I enter a new todo
    Then the input should be cleared

  Scenario: The input should be trimmed
    When I enter a new todo with extra spaces
    Then the input should be trimmed

  Scenario: An empty todo should not be added
    When I enter a new todo
    And I enter a new todo that is empty
    Then it should not add it to the list
