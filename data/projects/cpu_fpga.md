I recommend reviewing the project report for a better understanding, available [here](/docs/Rapport_TER_Zybo.pdf).

For detailed setup and project instructions, refer to the dedicated [online documentation](https://ter-zybo.github.io/Documentations/docs/pmodenc_linux/).

## VHDL Project: Counter Control with PMODENC Rotary Encoder and LED Display

This project is available on [github](https://github.com/TER-Zybo/PmodENC_VHDL).

This repositories demonstrates how to build a VHDL-based design using Xilinx Vivado to control a counter with a PMODENC rotary encoder. The counter's value is displayed on 4 LEDs on the Zybo Z7-20 FPGA board.

## IP Block (source) - PmodENC with Debouncer and AXI GPIO

This project is available on [github](https://github.com/TER-Zybo/PetaENC_Project).

![Design 2](/images/cpu_fpga_design_2.png "Design 2")

> This project was built with Vivado 2023.1. Please check branches to find updated versions.

This repository contains a Vivado project for the PmodENC rotary encoder. The project includes all necessary components, such as a debouncer and AXI GPIO, before it was transformed into an [IP block](https://github.com/TER-Zybo/PetaENC_IP).

## IP Block (ready to use) - Debouncer and AXI GPIO for the PmodENC

This project is available on [github](https://github.com/TER-Zybo/PetaENC_IP).

> This project was built with Vivado 2023.1. Please check branches to find updated versions.

This repositories provide an IP block design that includes a debouncer and AXI GPIO for the PmodENC rotary encoder. This IP block can be integrated into a Vivado project to facilitate the use of a debounced encoder input in FPGA designs.

## Baremetal C Application for Displaying Encoder Values on Serial Interface

This project is available on [github](https://github.com/TER-Zybo/PmodENC_Baremetal).

![Design 1](/images/cpu_fpga_design_1.png "Design 1")

This repositories involves creating a baremetal C application that reads encoder values from Digilent PmodENC module and displays them on a serial interface. The system uses a Zynq-7000 SoC with a hardware design configured in Vivado and the application developed in Vitis.

The hardware design includes:
- **ZYNQ7 Processing System**: Manages the overall operation and interfaces with the encoder.
- **Processor System Reset**: Ensures the system starts in a known state.
- **AXI Interconnect**: Facilitates communication between the processing system and peripherals.
- **PmodENC**: Official xilinx ip, connected via AXI Lite GPIO for reading encoder values.

## Linux C Application for Displaying Encoder Values

This project is available on [github](https://github.com/TER-Zybo/PmodENC_Linux).

![design](/images/cpu_fpga_design.png "Design")

> Project built with Vivado 2023.1. Please check branches to find updated versions.

This repositories demonstrates how to create a Linux C application that reads encoder values from Digilent PmodENC rotary encoder and displays them. The process begins with a hardware block design in Vivado, followed by transitioning to writing the C application directly in the Linux user space.
