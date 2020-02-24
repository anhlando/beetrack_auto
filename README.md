To run, follow these steps:

1.  npm install

2.  export BEETRACK_ENV=dev|aws|qa|mssql|...  

3.  npm run test [-- --grep @tag]

Notes:
 - You need to start selenoid server first (at localhost:4444)
 - To watch live session, go to localhost:8080 -> wait for the session to display and click on it to watch
 - To watch recorded videos, go to folder where selenoid_server is placed, go to /results/videos, and open the video you want to see
 - Set environment using 
    + MAC/Linux: export BEETRACK_ENV = dev|aws|qa|...  
    + Windows: set BEETRACK_ENV = dev|aws|...
    + If you don't set the BEETRACK_ENV, then it will be default to 'dev'
 - If you want to execute a set of tests using cucumber tags, input the tags using '-- --grep @tag1 @tag2'
    Ex: npm run test -- --grep @smoketest @e2e-test