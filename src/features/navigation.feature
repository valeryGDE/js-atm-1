@test
Feature: Navigation

  Background: Open Home page
    When I open "home" page
    Then Page title should be equal to "EPAM | Software Engineering & Product Development Services"

  Scenario: Appropriate page should open after clicking the tab
    When I click "<TabName>" tab
    Then Page title should be equal to "<Title>"

    Examples: 
      | TabName  | Title                                |
      | services | Services \| EPAM                     |
      | insights | Discover our Latest Insights \| EPAM |
