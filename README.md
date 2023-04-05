# RESTFUL_API

CBIT-SEM-RESULT

<h2>BASE URL:</h2>https://lime-tame-ostrich.cyclic.app/

<h2>DISCLAIMER:</h2>
currently as of today this API can only fetch the marks details of IT-1,IT-2,IT-3 only(excluding LE's) of R-20 regulation(batch 2020). 


<h1>API USAGE</h1>

<h3>1. REGISTER YOUR SELF TO GET AN API KEY</h3>

<button style="color=green">GET/ </button>register /your-name/ your-password

<b>eg: https://lime-tame-ostrich.cyclic.app/register/this_is_my_name/this_is_my_password</b>

This returns the API key so store it somewhere.

<h3> 2.CHECK YOUR API KEY IN CASE IT'S LOST</H3>

<button style="color=green">GET/ </button>check /your-name/ your-password
<b>eg: https://lime-tame-ostrich.cyclic.app/check/this_is_my_name/this_is_my_password</b>

<h3>3.USING API</h3>

<button style="color=green">GET/ </button>result /sem-no / your-rollno / your-API-key
<b>eg: https://lime-tame-ostrich.cyclic.app/result/2/160120737114/$2b$10$FCvQjjeatLh0bldmR1uHlu0d$pb$URT6nfBnzz.aOQSFvOi9otDe6</b>

Above request fetches the 2 sem results of rollno 160120737114.

<h2>POINTS TO BE UNDERSTOOD</h2>
<h4>1. The RESTful API stated above is pure JSON API.</h4>

<h4>2. every ERROR producing results has a error property along with the error so make sure you first check the error property in code to know the request status.</h4>

<h4>3. The only NON-error property JSON response i.e the result of a person successfully fetched</h4>
