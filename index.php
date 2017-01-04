<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">
    <title>Angular Repeater</title>
</head>
<body>
    <div class="container py-1" ng-app="DemoApp" ng-controller="DemoController as Ctrl">
        <div class="row">
            <div class="col-xs-12">
                <h1 class="mb-2">Angular Repeater</h1>
                <p>Directive that supports recursion</p>
            </div>
        </div>
        <hr class="my-2">
        <div class="row">
            <div class="col-md-6">
                <h6>
                    JSON data: 
                    <select  class="custom-select" ng-model="myJson" ng-change="ChangeData()"
                    ng-options="option.label for option in myJsonOptions track by option.url"></select>
                </h6>
                <pre><code>{{jsonData | json}}</code></pre>
            </div>
            <div class="col-md-6" ng-if="jsonData">
                <recursive-repeater json-data="jsonData"></recursive-repeater>
            </div>
        </div>
    </div>
    <script src="/bower_components/angular/angular.min.js"></script>
    <script src="/bower_components/jquery/dist/jquery.min.js"></script>
    <script src="/bower_components/tether/dist/js/tether.min.js"></script>
    <script src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="/demo/dist/demo.js"></script>
</body>
</html>