# Angular MPA
An attempt to create an Angular application served by ASP.NET Core where some processing is left to the server before serving the client files.

The need behind this research is to support cases like
* complex skin variation commanded in response to certain attributes of the incoming request (e.g. the `Host` header)
* complex URL handling beyond what is supported by the [Angular Router subsystem](https://angular.io/api/router)

# Objectives
The current research has the following objectives
* Ideally best practices from both ASP.NET Core and Angular development should be followed and enforced
* Allow developers to use native tools for back-end and front-end
  - Visual Studio Code for front-end
  - Visual Studio for back-end
* The application should be built on demand and, ideally, in response to change to the source files
  - The Angular CLI should be used to build the client-side application
  - The .NET CLI should be used to build the server-side application
  - The ASP.NET development server (Kestrel) should be used to serve the application
* Server-side rendering for the first request should be supported
* The visitor should be able to experience a client-side application within a page
* ASP.NET Core should be responsible for selecting which controller/action the request should be routed to
  - Each server-page should be able to have a list of subpages
  - Subpages should be handled on the client via Angular routing
* The project should be CI/CD friendly
  - Switching environments while building/publishing the application should be supported

# First specimen
The first specimen is constructed by
* Generating a new ASP.NET Core application using the `mvc` template
* Generating a new Angular application using the Angular CLI

# Second specimen
The second speciment is constructed by
* Generating a new ASP.NET Core application using the `angular` template
