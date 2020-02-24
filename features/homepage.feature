Feature: verify the Beetrack homepage
  
  @smoketest @login
  Scenario: login as admin and see the Dashboard page along with user menu
    Given Testcase key is "BTMS-3"
    Given I go to page "/"
    Then I expect to see page title is "Quản lý tài sản - Đăng nhập"
    When I login with "admin" and "123456"
    Then I see user menu Dashboard
    And I expect to see page title is "Quản lý tài sản - Dashboard"

  @smoketest @error @login
  Scenario Outline: login with invalid info
    Given Testcase key is "DEMO-2"
    Given I go to page "/"
    Then I expect to see page title is "Quản lý tài sản - Đăng nhập"
    When I login with "<username>" and "<password>"
    Then I expect to see the error message to inform that login info is not correct
      Examples:
      |username|password|
      |invalid | invalid|
      |admin   | invalid|
      |invalid |  123456|
  
  @smoketest @error1 @login
  Scenario Outline: login with correct username and an invalid password (less than 6 characters)
    Given Testcase key is "DEMO-3"
    Given I go to page "/"
    Then I expect to see page title is "Quản lý tài sản - Đăng nhập"
    When I login with "<username>" and "<password>"
    Then I expect to see the warning message to inform that password "<password>" is too short
      Examples:
      |username|password|
      |admin   | 1      |
      |admin   | 12     |
      |admin   | 123    |
      |admin   | 1234   |
      |admin   | 12345  |

  @smoketest @login
  Scenario: login as admin and verify the Beetrack webapp version
    Given Testcase key is "DEMO-1"
    Given I login to Beetrack as admin
    Then I expect to see the webapp version is "v3.3.1"

  @smoketest @login
  Scenario: login as admin and verify the UI of Dashboard page
    Given Testcase key is "DEMO-4"
    Given I login to Beetrack as admin
    Then I expect to see page title is "Quản lý tài sản - Dashboard"
    And I expect that the UI of Dashboard page is displayed correctly

