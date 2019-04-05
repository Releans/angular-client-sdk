# Getting started

The Releans SDK enables developers to use Releans Services in their code. You can get started in minutes.

## How to Build

The generated SDK requires AngularJS framework to work. If you do not already have angular downloaded, please go ahead and do it from [here](https://angularjs.org/).
You will also need to download and link [angular-moment](https://cdnjs.cloudflare.com/ajax/libs/angular-moment/1.0.1/angular-moment.min.js) and [moment.js](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js) with your project because the SDK internally uses moment.js.

## How to Use

The following section describes how to use the generated SDK in an existing/new project.

### 1. Configure Angular and Generated SDK
Perform the following steps to configure angular and the SDK:
+ Make a `scripts` folder inside the root folder of the project. If you already have a `scripts` folder, skip to the next step.
+ Move the `angular.min.js` file inside the scripts folder. 
+ Move the `ReleansAPILib` folder inside the scripts folder.
+ If any of the Custom Types in your API have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will need to download angular-moment and moment.js. Move these 2 files into the `scripts` folder as well.

![folder-structure-image](https://apidocs.io/illustration/angularjs?step=folderStructure&workspaceFolder=Releans%20API-Angular&projectName=ReleansAPILib)

### 2. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![open-folder-image](https://apidocs.io/illustration/angularjs?step=openFolder&workspaceFolder=Releans%20API-Angular)

### 3. Create an Angular Application
Since Angular JS is used for client-side web development, in order to use the generated library, you will have to develop an application first.
If you already have an angular application, [skip to Step 6](#6-include-sdk-references-in-html-file). Otherwise, follow these steps to create one:

+ In the IDE, click on `File` and choose `New File` to create a new file.
+ Add the following starting code in the file:
```js
var app = angular.module('myApp', []);
app.controller('testController', function($scope) 
{

});
```
+ Save it with the name `app.js` in the `scripts` folder.


### 4. Create HTML File
Skip to the next step if you are working with an existing project and already have an html file. Otherwise follow the steps to create one:
+ Inside the IDE, right click on the project folder name and select the `New File` option to create a new test file.
+ Save it with an appropriate name such as `index.html` in the root of your project folder.
`index.html` should look like this:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Angular Project</title>
	<script></script>
</head>

<body>
</body>

</html>
```

![initial-html-code-image](https://apidocs.io/illustration/angularjs?step=initialCode&workspaceFolder=Releans%20API-Angular)

### 5. Including links to Angular in HTML file
Your HTML file needs to have a link to `angular.min.js` file to use Angular-JS. Add the link using `script` tags inside the `head` section of `index.html` like:
```html
<script src="scripts/angular.min.js" ></script>
```
If any of the Custom Types that you have defined have `Date`/`Datetime` type fields or any endpoint has `Date`/`Datetime` response, you will also need to link to angular-moment and moment.js like:
```html
<script src="scripts/angular.min.js" ></script>
<script src="scripts/moment.min.js" ></script>
<script src="scripts/angular-moment.min.js" ></script>
```

### 6. Include SDK references in HTML file
Import the reference to the generated SDK files inside your html file like:
```html
<head>
    ...
    <!-- Helper files -->
    <script src="scripts/ReleansAPILib/Module.js"></script>
    <script src="scripts/ReleansAPILib/Configuration.js"></script>
    <script src="scripts/ReleansAPILib/ModelFactory.js"></script>
    <script src="scripts/ReleansAPILib/ObjectMapper.js"></script>
    <script src="scripts/ReleansAPILib/APIHelper.js"></script>
    <script src="scripts/ReleansAPILib/Http/Client/HttpContext.js"></script>
    <script src="scripts/ReleansAPILib/Http/Client/HttpClient.js"></script>
    <script src="scripts/ReleansAPILib/Http/Request/HttpRequest.js"></script>
    <script src="scripts/ReleansAPILib/Http/Response/HttpResponse.js"></script>

    <!-- API Controllers -->
    <script src="scripts/ReleansAPILib/Controllers/BaseController.js"></script>
    <script src="scripts/ReleansAPILib/Controllers/MessageController.js"></script>
    <script src="scripts/ReleansAPILib/Controllers/SenderController.js"></script>
    <script src="scripts/ReleansAPILib/Controllers/BalanceController.js"></script>


    <!-- Models -->
    <script src="scripts/ReleansAPILib/Models/BaseModel.js"></script>
    <script src="scripts/ReleansAPILib/Models/Response2001.js"></script>
    <script src="scripts/ReleansAPILib/Models/Response200.js"></script>
    <script src="scripts/ReleansAPILib/Models/Response2002.js"></script>

    ...
</head>
```
> The `Module.js` file should be imported before the other files. After `Module.js`, `Configuration.js` should be imported.
> The `ModelFactory.js` file is needed by `ObjectMapper.js` file. The `ObjectMapper` in turn, is needed by `BaseController.js`.

### 7. Including link to `app.js` in HTML file
Link your `app.js` file to your `index.html` file like:
```html
<head>
	...
	<script src="scripts/app.js"></script>
</head>
```
> The link to app.js needs to be included at the very end of the head tag, after the SDK references have been added

### 8. Initializing the Angular App
You need to initialize your app and the controller associated with your view inside your `index.html` file. Do so like:
+ Add ng-app directive to initialize your app inside the `body` tag.
```html
<body ng-app="myApp">
```
+ Add ng-controller directive to initialize your controller and bind it with your view (`index.html` file).
```html
...
<body ng-app="myApp">
	<div ng-controller="testController">
		...
	</div>
	...
</body>
...
```

### 9. Consuming the SDK 
In order to use the generated SDK's modules, controllers and factories, the project needs to be added as a dependency in your angular app's module. This will be done inside the `app.js` file.
Add the dependency like this:

```js
var app = angular.module('myApp', ['ReleansAPILib']);
```
At this point, the SDK has been successfully included in your project. Further steps include using a service/factory from the generated SDK. To see working example of this, please head on [over here](#list-of-controllers) and choose any class to see its functions and example usage.  

### 10. Running The App
To run the app, simply open up the `index.html` file in a browser.

![app-running](https://apidocs.io/illustration/angularjs?step=appRunning)

## Initialization


The Angular Application can be initialized as following:
```JavaScript
var app = angular.module('myApp', [ReleansAPILib]);
// now controllers/services can be created which import
// the factories provided by the sdk
```
### Authentication
In order to setup authentication and initialization of the Angular App, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthAccessToken | OAuth 2.0 Access Token |



```js
var app = angular.module('myApp', [ReleansAPILib]);

app.run(function(Configuration) {
    // Configuration parameters and credentials
    Configuration.oAuthAccessToken = 'oAuthAccessToken'; // OAuth 2.0 Access Token
    
});
```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [MessageController](#message_controller)
* [SenderController](#sender_controller)
* [BalanceController](#balance_controller)

## <a name="message_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MessageController") MessageController

### Get singleton instance

The singleton instance of the ``` MessageController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, MessageController){
	});
```

### <a name="get_all_messages"></a>![Method: ](https://apidocs.io/img/method.png ".MessageController.getAllMessages") getAllMessages

> List all messages sent by the account.


```javascript
function getAllMessages(accept)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MessageController){
        var accept = '*/*';


		var result = MessageController.getAllMessages(accept);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_view_message"></a>![Method: ](https://apidocs.io/img/method.png ".MessageController.getViewMessage") getViewMessage

> Return the details of the message.


```javascript
function getViewMessage(id, accept)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| accept |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MessageController){
        var id = 'id';
        var accept = '*/*';


		var result = MessageController.getViewMessage(id, accept);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_send_sms_message"></a>![Method: ](https://apidocs.io/img/method.png ".MessageController.createSendSMSMessage") createSendSMSMessage

> Send a single message.


```javascript
function createSendSMSMessage(accept, senderId, mobileNumber, message)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  | TODO: Add a parameter description |
| senderId |  ``` Required ```  | Sender id to send the message from. |
| mobileNumber |  ``` Required ```  | The mobile number supposed to receive the message. |
| message |  ``` Required ```  | Message text. |



#### Example Usage

```javascript


	app.controller("testController", function($scope, MessageController){
        var accept = 'Accept';
        var senderId = 'senderId';
        var mobileNumber = 'mobileNumber';
        var message = 'message';


		var result = MessageController.createSendSMSMessage(accept, senderId, mobileNumber, message);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sender_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SenderController") SenderController

### Get singleton instance

The singleton instance of the ``` SenderController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, SenderController, Response200, Response2001){
	});
```

### <a name="get_sender_name_details"></a>![Method: ](https://apidocs.io/img/method.png ".SenderController.getSenderNameDetails") getSenderNameDetails

> Return the details of the sender name.


```javascript
function getSenderNameDetails(id, accept)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| accept |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SenderController){
        var id = 'sender-id';
        var accept = '*/*';


		var result = SenderController.getSenderNameDetails(id, accept);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="create_sender_name"></a>![Method: ](https://apidocs.io/img/method.png ".SenderController.createSenderName") createSenderName

> Create a new sender id to send messages using it


```javascript
function createSenderName(accept, contentType, body)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SenderController, Response200){
        var accept = 'text/plain';
        var contentType = 'text/plain';
        var body = 'Your sender name';


		var result = SenderController.createSenderName(accept, contentType, body);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



### <a name="get_all_senders"></a>![Method: ](https://apidocs.io/img/method.png ".SenderController.getAllSenders") getAllSenders

> List all senders names associated with the account


```javascript
function getAllSenders(accept)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, SenderController, Response2001){
        var accept = '*/*';


		var result = SenderController.getAllSenders(accept);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="balance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".BalanceController") BalanceController

### Get singleton instance

The singleton instance of the ``` BalanceController ``` class can be accessed via Dependency Injection.

```js
	app.controller("testController", function($scope, BalanceController, Response2002){
	});
```

### <a name="get_balance"></a>![Method: ](https://apidocs.io/img/method.png ".BalanceController.getBalance") getBalance

> Get your available balance


```javascript
function getBalance(accept)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accept |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript


	app.controller("testController", function($scope, BalanceController, Response2002){
        var accept = 'text/plain';


		var result = BalanceController.getBalance(accept);
        //Function call returns a promise
        result.then(function(success){
			//success case
			//getting context of response
			console.log(success.getContext());
		},function(err){
			//failure case
		});

	});
```



[Back to List of Controllers](#list_of_controllers)



