## Warning

Due to recent reforms at the Paul Sabatier University and the implementation of a new bachelor degree system. The current version of the Windows application no longer usable. This is because the changes to the bachelor degree system have altered the way that the groups function, which the application relies on to provide users with schedules and other information. As a result, the application can no longer be used to access the updated Celcat schedules.

## Installation

To install the Windows application, follow these steps:

- Visit the Releases section on Github.
- Download the NotYet_V1.0.0.zip file (10.7 Mo) if you already have the framework installed on your computer.
- Or (recommended), download the NotYet_V1.0.0_win-x64.zip file (70.6 Mo) if you do not have the framework installed and want it included in the installation package.
- Extract the contents of the zip file.
- you can launch the application and start using it.

**Framework**: The application is built with .NET 6.0 targeting Windows 10 version 22000.0. This means that the application is designed to run on Windows 10 operating systems. The specific version of Windows 10 targeted is 22000.0, but the application may work on other versions of Windows 10 as well.

**Note:** All the data saved in the database by the application is stored in the `AppData\Local\NotYet` file on your computer. If you want to fully delete the application, you can simply delete this file. This will remove all the data associated with the application from your computer.

## How to use

To use the Paul Sabatier University Windows application, you need to follow these steps:

- Click on the `groupe` text at the top to go to the settings page.
- Use the `actualiser` button to retrieve all the available groups from the Celcat API.
- Wait for all groups to be added to the database.
- Select a group from the list.
- Click on the top button again to access the calendar and view your schedule and navigate through the days.

**Note:** if you have classes on the weekends, you can enable the option to display them on the calendar. To do this, go to the settings page and activate the option to include weekends in the schedule display.

## Interfaces

### Home page

![Home page](/images/notyet_main_merged.png "Home page")

On the home page of the application, you can find the following features:

- Navigation buttons to switch between the home page and the settings page.
- A display of all the classes for the current day.
- A day navigator for the calendar, allowing you to move forward or backward in time to view different dates.
- A display of the time remaining until the end of the current day.

### Settings page

![Settings page](/images/notyet_settings_merged.png "Settings page")

On the settings page, you can find the following options:

- A toggle button to enable or disable the display of classes on weekends.
- A button to delete all data from the database of the application.
- A button to refresh all the Celcat groups available in the application.
- A list of all the available Celcat groups, allowing you to select the group that you want to view the schedule for.
