Feature: as a QA of Beetrack, I want to make sure that all the Report management functions are working properly
    
    @report @smoketest
    Scenario: check the UI of the Report page
        Given I login to Beetrack as admin 
        And I open "Report" page
        Then I expect to see "Báo Cáo" header
        And I expect that the UI of Report page is displayed correctly

    @asset @smoketest @test
    Scenario: add new asset successfully
        Given I login to Beetrack as admin
        And I open "Assets" page
        When I click "Add Asset" button
        Then I expect to see "Tài sản mới" header
        When I add new asset with info below
            | parentCategory | category | status | ownerId | locationId | price |
            | Thiết bị       | Màn hình dell| Chưa sử dụng | ABC | Thiết bị 1 | 1000000|
        Then I expect to see "Tài sản đã được thêm thành công" dialog
        When I open "Assets list" page
        And I search for above asset
        Then I expect to see it displays in the list

    @asset @smoketest
    Scenario: search and found an asset 
        Given I login to Beetrack as admin
        And I open "Assets" page
        When I search for asset "Acer"
        Then I expect to see the search result displayed

    Scenario: search and not found an asset
        Given I login to Beetrack as admin
        And I open "Assets" page
        When I search for asset "Acer_Invalid_Search"
        Then I expect to see the 'No result' message displayed
    Scenario: edit an asset
        Given I login to Beetrack as admin
        And I open "Assets" page
        When I search for asset "Acer"
        Then I expect to see the search result displayed
        When I select asset "Acer"
        And I click "Update Status" button
        Then I expect to see the "Update Asset Status" dialog displayed

    # Scenario: 
