# Contact Management Application

## Setup Instructions

### Prerequisites

- .NET 6 SDK
- Node.js (LTS version)
- Angular CLI


### Backend Setup (ContactManagementAPI)
1. Navigate to the backend project directory:
   ```sh
   cd ContactManagementApp/ContactManagementAPI

2. Restore the .NET dependencies:
   dotnet restore

3. Run the backend server:
   dotnet run



### Frontend Setup (ContactManagement)
1. Navigate to the frontend project directory:
   cd ContactManagementApp/ContactManagement

2. Install the Angular dependencies:
   npm install

2. Run the Angular development server:
   ng serve 


### Running the Application
1. Ensure the backend server is running on http://localhost:5000 or https://localhost:5001.
2. Ensure the frontend server is running on http://localhost:4200.
3. Open a web browser and navigate to http://localhost:4200 to view the application.


### Design Decisions and Application Structure
### Backend (ContactManagementAPI)
1. Framework: .NET 6
2. Architecture: RESTful API
3. Data Storage: JSON file to simulate a database
4. Error Handling: Global error handling to return appropriate responses

### Frontend (ContactManagement)
1. Framework: Angular 18
2. Styling: Bootstrap
3. State Management: RxJS
4. Forms: Angular Reactive Forms
5. Components Communication: @Input() and @Output() decorators for component interactions


### Application Structure
1. ContactManagementAPI/: Contains the .NET backend project.
2. ContactManagement/: Contains the Angular frontend project.
3. README.md: Provides setup instructions, running instructions, and a brief explanation of design decisions and application structure.


### Branching Strategy
1. main: Contains the production-ready code.
2. development: Used for ongoing development and feature integration.
3. feature/*: Branches for individual features and bug fixes.   


