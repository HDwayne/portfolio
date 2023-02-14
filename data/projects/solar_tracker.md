![Solar Tracker](/images/solar_tracker_main.webp "Solar Tracker")


## How it works

The Solar Tracker uses precise calculations to determine the position of the sun. It employs relays to adjust the angle of the solar panel, ensuring that it is always in the optimal position for maximum energy production.

The requirements for the Solar Tracker project are that the panel must have the capability to rotate 360 degrees in azimuth and at least 70 degrees in elevation. The panel must also have the ability to be positioned completely horizontally.

The Solar Tracker operates using task-based programming with the FreeRTOS framework. The Solar Tracker starts by running a calibration routine, followed by the initialization of the Wi-Fi Task, Date and Time Update Task, and Sun Data Update Task. The system operates by continuously executing these tasks and updating the solar panel's position as necessary.

### Calibration

The Solar Tracker needs to be calibrated to ensure accurate tracking of the sun. During the calibration process, the system rotates the solar panel to its minimum and maximum points in azimuth to determine the rotation time. The system uses limit switches to detect the minimum and maximum positions of the solar panel's rotation. These positions can be configured in the code by setting the equivalent degrees, allowing the system to accurately know the current position and the rotation time by degree. The calibration process is performed once at the beginning of the system's operation. 

**Note**: For now, the calibration process is only focused on the azimuth axis. However, it is expected that the same process will be applied to the elevation axis in the future.

This code defines three constants related to the calibration of the solar tracker's azimuth axis.

- **AZIMUTH_MIN**: This constant defines the minimum azimuth angle, in degrees, that the panel can reach. By default, the value is set to 5 degrees.

- **AZIMUTH_MAX**: This constant defines the maximum azimuth angle, in degrees, that the panel can reach. By default, the value is set to 355 degrees.

- **MINIMUM_ROTATION_TIME**: This constant defines the minimum time required for the panel to rotate, in milliseconds. By default, the value is set to 2000 ms, meaning the motor cannot rotate the panel if the program tries to rotate it in less than 2 seconds (2000 ms). This constant serves as a safety limit to ensure that the motor has enough time to complete its rotation and prevent potential desynchronization of the panel's position.

### Wi-Fi Task

The Solar Tracker has a Wi-Fi task that allows it to connect to a Wi-Fi network. This task is responsible for establishing a connection to the Wi-Fi network and maintaining that connection. Once connected, the Solar Tracker can receive updates such as date and time information. The Wi-Fi task is important as it enables the Solar Tracker to stay updated but a offline version can be made.

**Note**: Maintaining that connection implies that in the future, a feature to send the current data of the Solar Tracker panel, such as its position and other relevant information, to a real-time database for remote monitoring and analysis can be made.

This code defines three constants related to the Solar Tracker's Wi-Fi task:

- **WIFI_SSID**: This constant defines the name of the Wi-Fi network to which the Solar Tracker will connect, specified as a string.

- **WIFI_PASSWORD**: This constant defines the password for the Wi-Fi network, also specified as a string.

- **WIFI_TIMEOUT**: This constant defines the timeout for the Wi-Fi connection, in milliseconds. In this case, the timeout is set to 20000 ms, meaning the Solar Tracker will wait for 20 seconds before timing out the connection attempt.

- **WIFI_DELAY**: This constant defines the time interval, in milliseconds, between each status check. In this case, the delay is set to 10 s, meaning the Solar Tracker will check the status of the Wi-Fi connection every 10 s.

### Date and Time Update Task

The Solar Tracker has a task that is responsible for updating its date and time information. This task uses Network Time Protocol (NTP) to synchronize the system's clock with a time server on the internet. This ensures that the Solar Tracker always has accurate date and time information, which is critical for making accurate calculations of the sun's position.

This code defines one constants related to the Solar Tracker's date and time update task:

- **ntpServer**: that specifies the address of the Network Time Protocol (NTP) server to be used by the Solar Tracker. The is a generic NTP server pool is "pool.ntp.org" which means that it will automatically choose the closest NTP server to the Solar Tracker based on its location. In my case, I used the french NTP server "fr.pool.ntp.org" to avoid any latency issues.

**Note**: UTC offset should not be changed. The Solar Tracker is based on Universal Time (UT) time. This means that the Solar Tracker is set to use the UT time standard and any changes to the UTC offset would affect the accuracy of its calculations.

### Sun Data Update Task

The Solar Tracker has a Sun Data Update Task that is responsible for updating information about the sun's position. This task uses the SolTrack library, which was created by Marc van der Sluys, Paul van Kan, and Jurgen Reintjes at the HAN University of Applied Sciences in Arnhem, the Netherlands. The SolTrack library contains algorithms and mathematical models that are used to calculate the sun's position based on the system's date and time information, as well as the latitude and longitude of the solar panel. The Sun Data Update Task uses this information to adjust the angle of the solar panel.

The solar panel will reposition itself based on the calculated sun data only if the current hour is between sunrise and sunset, and the azimuth is between AZIMUTH_MIN and AZIMUTH_MAX.

These constants define the parameters used by the SolTrack library to calculate the sun's position.

- **ST_DELAY**: Constant in ms, representing the delay between each computation of the sun's position.

- **ST_LATITUDE**: Constant in degrees, representing the latitude of the solar panel's location.

- **ST_LONGITUDE**: Constant in degrees, representing the longitude of the solar panel's location.

## How the program was executed, seen from the console

This example demonstrates how the program operates when the ESP starts. I recommend to use the PlatformIO platform for easier development and deployment.

    calibration: Determine time to rotate
    Azimuth: rotate left
    Azimuth: rotate stop
    calibration: left limit switch reached
    Azimuth: rotate Right
    Azimuth: rotate stop
    calibration: right limit switch reached
    calibration:
            duration of rotation: 22000 ms 
            duration of rotation for 1°: 62 ms
    keepWiFiAlive task created
    UpdateDateTime task created
    WiFi disconnected, connecting...
    Update solar data: Date time not initialized
    UpdateSolarData task created
    WiFi connected
    Update solar data: Date time not initialized
    ------------------------------------------------------------------------
    Rise time:          7.13933,    azimuth sunrise:     111.99278°
    Transit time:      12.13860,    altitude culmination:     29.97897°
    Set time:          17.14677,    azimuth sunset:     248.18599°

    Corrected azimuth, altitude:         193.107951°  29.033228°
    ------------------------------------------------------------------------
    azimuth: rotate 355.000000° to 193.107951°
    azimuth: time to rotate, 10037 ms
    Azimuth: rotate left
    Azimuth: rotate stop
    azimuth: new actual azimuth, 193.107951°


## Hardware

The Solar Tracker hardware includes the following components:

- **ESP32 microcontroller** (Devkit V1)
- **4 relay module** for controlling the azimuth motor and soon the elevation motor (AZDelivery 4 Channel Relay Module 5V with Optocoupler Low-Level-Trigger)
- **2 limit switches** are used to determine the maximum and minimum rotation range for the azimuth axis.
- **ESP32 expansion card** with power supply and voltage regulator for the ESP32 (DUBEUYEW SP-Cow ESP32 Deployment Card Expansion Card for 30PIN ESP32)
- **AC-DC 220V to 12V converter** for powering the motor (S-120-12)
- **12V 5 r/min motor** for positioning the panel in azimuth (XD-60GA775 ECETROMECHANICAL)

The following electrical schema represents the connections for the azimuth rotation of the solar panel. It includes the ESP32 microcontroller, the 4-channel relay module, the 2 limit switches, and the motor. This diagram serves as a starting point and can be modified to fit specific requirements and configurations.

![electrical Schema](/images/solar_tracker_schema.webp "electrical Schema")

several macros are defined in the code to define the connections between the ESP32 microcontroller and the hardware components of the Solar Tracker. The left and right limit switches are connected to GPIO pins 16 and 17, respectively, and have a debouncing time of 300 milliseconds. The left and right rotation of the azimuth motor are controlled by relays connected to GPIO pins 25 and 33, respectively.

**Note**: Debouncing is a technique used to eliminate unwanted triggering of digital signals due to electrical noise. In the context of the Solar Tracker project, the limit switches used for detecting the azimuth rotation limits need to be debounced to avoid false triggering caused by electrical noise. The debouncing time is defined in the code as 300 ms, which means that the limit switch signals will be ignored for 300 ms after a change is detected.

## construction of the support

The solar tracker was designed using **SolidWorks**, and all parts including dimensions are available on **GitHub** for reference.

### wooden frame

The wooden frame is a custom-made structure that is designed to hold and position two solar panels. It is constructed using 6 separate pieces of wood that are joined together to form a sturdy base. The Wood Support is an essential component of the Solar Tracker system, as it provides a stable platform for the panels to rest on. The Wood Support is designed to accommodate solar panels with a total size of 1605mm x 2176mm, and provides a total area of 1.73 square meters of surface area for capturing the sun's energy.

The frame is composed of 6 pieces with the following dimensions:
- 68x68x2245 mm
- 68x68x2109 mm
- 68x68x1544 mm

![Wood Support](/images/solar_tracker_wood_structure.webp "Wood Support")

### The mast

The mast is a crucial component of the solar tracker system that allows for the wooden frame holding the solar panels to rotate in two axes. The mast is divided into two parts to facilitate the azimuth rotation of the wooden frame. The elevation rotation is achieved through the use of two complete ball bearings (SKF UCP 207). These bearings provide a smooth and reliable rotation mechanism for the wooden frame along the elevation axis.

The mast stands at a height of 1.70m.

![Mast](/images/solar_tracker_mast.webp "Mast")

The motor used for positioning the solar panels (azimuth) is mounted on a fully 3D printed support. This support is attached to the mast and allows for easy detachment of the motor for maintenance or replacement purposes.

![Motor Support](/images/solar_tracker_motor_support.webp "Motor Support")

## Conclusion

This solar tracker project is still underway and, although it is a prototype, it has shown promising results and should progress as my finances become available. Some parts of the project may be costly, but I am committed to making it fully operational. Currently, work continues on the elevation axis, and some adjustments should be made in the near future. Nevertheless, the 3D printed motor mount mounted on the mast has proven to be a reliable solution.

Here are some pictures of the prototype.
![Solar Tracker Prototype construction](/images/solar_tracker_prototype_construction.webp "Solar Tracker Prototype")
![Solar Tracker Prototype 3D print 1](/images/solar_tracker_prototype_3dprint1.webp "Solar Tracker Prototype")
![Solar Tracker Prototype 3D print 2](/images/solar_tracker_prototype_3dprint2.webp "Solar Tracker Prototype")
![Solar Tracker Prototype electrical](/images/solar_tracker_prototype_electrical.webp "Solar Tracker Prototype")