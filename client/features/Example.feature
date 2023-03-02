@Example
Feature: Example Feature

  This demonstrates the transitive pure ESM issue

  Scenario:
    Given pure ESM transitive dependency
    When cucumber is executed
    Then Error [ERR_REQUIRE_ESM] is thrown
