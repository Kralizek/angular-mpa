@echo off
start "Angular" /d WebApp\ClientApp ng build --output-path ..\wwwroot\dist --deployUrl=./dist/ --watch true
start ".NET" /d WebApp dotnet watch run 