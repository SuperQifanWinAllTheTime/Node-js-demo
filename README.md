# Node-js-demo
This web page use Mangodb as Database stroage<br>
Node js as back-end<br>
Ejs as front-end 
## Project info:
Mangodb v3.6<br>
Node js v6.9.3<br>
Mangoose v5.1.7<br>
Express v4.16.3<br>
Project view : ejs<br>

## IDE:
IntelliJ Community<br>
Sublime Text Build 3126<br>
Mongo Plugin V0.7.3<br>
Mango shell v3.6.5<br>
## Configuration
start Mangodb by using cmd:<br>
"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --dbpath="c:\data\db"<br>
Mangodb data will be store in "c:\data\db"<br>
start server by use cmd <br>
dir to coresponding file location<br>
and use command: node app
## Server
generate a local server by using express<br>
Defult server has been set to http://localhost:8080<br>
by using app.listen(8080)
## Insert
Process:<br>
After user submit the data<br>
The url will sent a quest to the server<br>
After the server get the request<br>
The server will render to corresponding functoin<br>
Then insert to databse by function <br>
If success, it will render to a complete page<br>
### Insert page:<br>
![507fb8c6465769c0434b654bfc4abda](https://user-images.githubusercontent.com/15969187/42065357-8028e4e6-7b08-11e8-8621-62b190c39b5a.png)<br>
### Complete page:<br>
![f6455360804e257abc15481619f722f](https://user-images.githubusercontent.com/15969187/42065358-8267fa80-7b08-11e8-8088-4df6840082f7.png)<br>
### mongodb view:<br>
![4d1338accbe4fad19c7fe4c471ec91d](https://user-images.githubusercontent.com/15969187/42065359-8430fb8c-7b08-11e8-8852-be12a1fe9ec1.png)<br>


## search
Process:<br>
After user submit the query<br>
The url will sent a quest to the server<br>
After the server get the request<br>
The server will render to corresponding functoin<br>
Then search in databse by function <br>
If success, it will render to a result page<br>
### Search Page:<br>
![3b2554e43b60d4cbd8db7d00520e446](https://user-images.githubusercontent.com/15969187/42065413-c72638ee-7b08-11e8-90ad-0c5d8ef0d63d.png)<br>
### Result Page:<br>
![a5978be15a1bbacb1d6083220385a6b](https://user-images.githubusercontent.com/15969187/42065415-c8111102-7b08-11e8-8263-d6ca8baf95f0.png)<br>
## upload
now user are able to upload a file thorugh up load file page

## Dashboard
A basic static dashboard that allow user view and operate <br>
### demo:
![50f3dfca28ee8d77469d688b38e64a7](https://user-images.githubusercontent.com/15969187/42065495-2a967f4c-7b09-11e8-9928-f6ec51b02136.png)
