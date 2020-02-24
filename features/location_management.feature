Feature: as a QA of Beetrack, I want to make sure that all the Location management functions are working properly
    
    @location @smoketest
    Scenario: check the UI of the Location page
        Given I login to Beetrack as admin 
        And I open "Location" page
        Then I expect to see "Quản lý vị trí" header
        And I expect that the UI of Location page is displayed correctly

    # @location @smoketest 
    # Scenario: add new location successfully
    #     Given I login to Beetrack as admin
    #     And I open "Location" page
    #     When I click "Add Location" button
    #     Then I expect to see "Tài sản mới" header
    #     When I add new asset with info below
    #         | parentCategory | category | status | ownerId | locationId | price |
    #         | Thiết bị       | Màn hình dell| Chưa sử dụng | ABC | Thiết bị 1 | 1000000|
    # #     Then I expect to see "Tài sản đã được thêm thành công" dialog
    # #     When I open "Assets list" page
    # #     And I search for "[above]" asset
    # #     Then I expect to see it displays in the list
    @location @smoketest
    Scenario: search and found an asset 
        Given I login to Beetrack as admin
        And I open "Location" page
        When I search for asset "Thiết bị 1"
        Then I expect to see the search result displayed
    @location @smoketest
    Scenario: search and not found an asset
        Given I login to Beetrack as admin
        And I open "Location" page
        When I search for asset "Invalid search keyword"
        Then I expect to see the 'No result' message 
    @location @smoketest
    Scenario: edit a location
        Given I login to Beetrack as admin
        And I open "Location" page
        When I search for asset "Thiết bị 1"
        Then I expect to see the search result displayed
        When I select asset "Thiết bị 1"
        And I click "Edit Location" button
        Then I see "Edit Location" dialog displayed

    # Scenario: 
