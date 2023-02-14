![Dashboard](/images/finance_dashboard.webp "dashboard")

## Features

The application includes several features that allow users to better manage and track their financial data. One of the main features is the budget management feature, which allows users to set a budget for each expense category and track their progress towards that budget. This feature allows users to better plan and manage their finances, and identify areas where they are or are not exceeding their budget.

Another feature of the app is the ability to check for incoming entries, which allows users to keep track of all incoming payments and income. This feature can be used to ensure that all payments have been received, and to identify any discrepancies or missing payments.

The application also has a functionality that allows for tracking of expenses on a daily basis, which enables users to forecast and plan for future expenses.

In addition, the app provides an overview of the overall financial status of the trip, giving users a clear picture of their financial situation.

## Installation

### Python libraries

During the installation process, the user must run the command `pip install -r requirements.txt` in order to install all the necessary dependencies for the application. 

**Note**: If you encounter issues with the Pillow library, you can resolve them by uninstalling and reinstalling with the following command:

```bash
pip uninstall Pillow
pip install Pillow
```

### Database

The user is required to edit the settings.py file in order to configure the database for the application. Specifically, the user must create a `dashboard_budget` database in MySQL.

Once the database is created, you need to follow these steps:

- `python manage.py makemigrations`: This command generates migration files for changes you made to your models.

- `python manage.py migrate`: This command applies the changes to your database schema that are defined in the generated migration files.

- `python manage.py migrate --run-syncdb`: This command performs the same actions as migrate and also runs the syncdb command, which creates any necessary database tables for installed apps that do not have migrations.

### Running the application

After that, the user must create a **superuser** by running the command `python manage.py createsuperuser`. Once the superuser is created, you can run the application by running the command `python manage.py runserver`.

## In app configuration

A few configurations must be completed in the app's "Settings" page.


- **Origin of Income**: This configuration displays the sources of each income.

- **Means of Payment**: This configuration shows how payments were made, helping to keep track of their transactions and expenses.

- **Expense Category**: This configuration categorizes expenses into different categories, such as food, transportation, entertainment, etc. This helps to understand where they are spending their money and make adjustments as needed to stay within their budget.

- **Date of Trip**: This configuration allows to specify the date of the trip, which can be useful for budgeting and planning purposes. This feature can help users understand the total cost of their trip and make adjustments to their spending as needed.


## Pages

here the settings page:

![Settings page](/images/finance_settings.webp "Settings page")

here the revenues page:

![Revenue page](/images/finance_recettes.webp "Revenue page")

here the expenses page:

![Expenses page](/images/finance_depenses.webp "Expenses page")

Every time you want to add information to the app, such as settings, expenses, or income, you need to fill out a form. For example:

![Revenue page form](/images/finance_depenses_form.webp "Revenue page form")