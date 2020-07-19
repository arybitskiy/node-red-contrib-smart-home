import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 14,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1000:0102",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgd212.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1729/",
            id: "1000",
            name: "ZWProductPage",
            type: "0102",
          },
          { text: "FGD-212", id: "1000", name: "Identifier", type: "0102" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2836/FGD-212-EN-T-v1.3.pdf",
            name: "ProductManual",
          },
          {
            text:
              '1) Disconnect the power supply, remove the Dimmer from the wall switch box, than connect the power supply.\n2) Locate the B-button on the housing.\n3) Click and hold the B-button to enter the menu mode.\n4) Release and click the B-button to choose "Device reset" option in the menu that is signalled with the yellow LED indicator colour.\n5) After few seconds the device will be restarted, which is signalled with the red LED indicator colour and entering the calibration mode. \nNote! Resetting the device is not the recommended way of removing the device from the Z-Wave network. Use reset procedure only if the primary controller is missing or inoperable.',
            name: "ResetDescription",
          },
          {
            text:
              "1) Switch off the mains voltage.\n2) Open the wall switch box.\n3) Connect the Dimmer in accordance with one of the diagrams attached in the manual.\n4) Switch on the mains voltage.\n5) Wait for the calibration process to end. Light may blink. The device will be switched off once the process is completed.\n6) Set the main Z-Wave controller in add mode (see the controller’s manual).\n7) Quickly, three times press the B-button or key connected to the S1 terminal.\n8) Wait for the device to be added to system. Successful adding will be confirmed by the controller.\n9) Arrange the antenna and close the wall switch box.",
            name: "InclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "0102",
          },
          {
            text:
              "FIBARO Dimmer 2 can switch or dim connected light source either through radio waves or through the wall switch connected directly to it. Dimmer 2 is equipped with a smart algorithm of light source detection which makes configuration easier and ensures high compatibility of the device. It may be used as a switch with non-dimmable light sources in 3-wire connection. Active power and energy consumption allows to monitor and reduce electricity bills. Dimmer 2 is compatible with any Z-Wave or Z-Wave Plus Controller.\n\nFIBARO Dimmer 2\nProduct Identifier: FGD-212\nBrand Name: FIBARO\nZ-Wave Certification Number: ZC10-15090017\nZ-Wave Certification Date: 9/16/2015\nZ-Wave Protocol Implementation Conformance Statement:   View    Download\n\nRemotely controlled light dimming module is designed to work with various types of light sources in 2 or 3-wire connection so it can operate with or without neutral lead. FIBARO Dimmer can switch or dim connected light source either through radio waves or through the wall switch connected directly to it. Dimmer 2 is equipped with a smart algorithm of light source detection which makes configuration easier and ensures high compatibility of the device. It may be used as a switch with non-dimmable light sources in 3-wire connection. Active power and energy consumption allows to monitor and reduce electricity bills. Dimmer 2 is compatible with any Z-Wave or Z-Wave Plus Controller.\n\nAs a dimmer it operates under the following loads:\n• 230V operated conventional incandescent and halogen light sources\n• ELV electronic transformers (12V operated halogen lamps and dimmable LED bulbs)\n• MLV ferromagnetic transformers with 12V operated halogen lamps\n• dimmable LED bulbs\n• dimmable compact fluorescent CFL tube lamps\n• supported dimmable light sources with minimal power of 5VA (power factor > 0.5) using FIBARO Bypass FGB-002\n\nWithout dimming function it may work with:\n• compact fluorescent lamps\n• fluorescent tube lamps with electronic ballast\n• LED bulbs (power factor > 0.7)\n• supported light sources with minimal power of 5VA (power factor > 0.5) using FIBARO Bypass FGB-002\n\nhttps://www.youtube.com/watch?v=K35uFXoa5c0",
            name: "Description",
          },
          { text: "FIBARO Dimmer 2", name: "Name" },
          {
            text:
              "The FIBARO Dimmer 2 is powered with mains voltage so it is always awake.",
            name: "WakeupDescription",
          },
          {
            text:
              "1) Set the main controller in remove mode (see the controller’s manual)\n2) Quickly, three times press the B-button or key connected to the S1 terminal.\n3) Wait for the device to be removed from the system. Successful removing will be confirmed by the controller.",
            name: "ExclusionDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2836/",
            id: "2000",
            name: "ZWProductPage",
            type: "0102",
          },
          {
            text: "U.S. / Canada / Mexico / CEPT (Europe)",
            id: "2000",
            name: "FrequencyName",
            type: "0102",
          },
          { text: "FGD-212", id: "2000", name: "Identifier", type: "0102" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1348/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 8,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1504/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 9,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1525/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 10,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1729/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 11,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1736/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 12,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2836/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 13,
              },
              {
                text:
                  "Fix duplicate label https://github.com/OpenZWave/open-zwave/issues/1854",
                author:
                  "Peter Gebruers for NoukNouk - peter.gebruers@gmail.com",
                date: "28 Jun 2019",
                revision: 14,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Minimum brightness level",
            max: "98",
            min: "1",
            type: "byte",
            units: "%",
            value: "1",
            Help:
              "Parameter is set automatically during the calibration process. Options for changing parameter 1-98. Default 1.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Maximum brightness level",
            max: "99",
            min: "2",
            type: "byte",
            units: "%",
            value: "99",
            Help:
              "Parameter is set automatically during the calibration process. Options for changing parameter 2-99. Default 99.",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Incandescence level of dimmable compact fluorescent lamps",
            max: "99",
            min: "1",
            type: "byte",
            units: "%",
            value: "1",
            Help:
              "Virtual value set as a percentage level between parameters MIN (1%) and MAX. (99%). The Dimmer will set to this value after first switch on. It is required for warming up and switching dimmable compact fluorescent lamps and certain types of light sources. Options for changing parameter 1-99. Default 1.",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Incandescence time of dimmable compact fluorescent lamps",
            max: "255",
            min: "0",
            type: "short",
            units: "sec",
            value: "0",
            Help:
              "This parameter determines the time required for switching compact fluorescent lamps and certain types of light sources. Setting this parameter to 0 will disable the incandescence functionality. Available settings: 0-255 (0s - 25,5s)",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "The percentage of a dimming step at automatic control",
            max: "99",
            min: "1",
            type: "byte",
            units: "%",
            value: "1",
            Help: "Available settings: 1-99 Default: 1",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Time of a dimming step at automatic control",
            max: "255",
            min: "0",
            type: "short",
            units: "sec",
            value: "1",
            Help: "Available settings: 0-255 (0s - 2,55s) Default setting: 1",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "The percentage of a dimming step at manual control",
            max: "99",
            min: "1",
            type: "byte",
            units: "%",
            value: "1",
            Help: "Available settings: 1-99 Default: 1",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Time of a dimming step at manual control",
            max: "255",
            min: "0",
            type: "short",
            units: "sec",
            value: "5",
            Help: "Available settings: 0-255 (0s - 2,55s) Default setting: 1",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Saving state before power failure",
            size: "1",
            type: "list",
            value: "1",
            Help: "Saving state before power failure. Default 1.",
            Item: [
              {
                label:
                  "State NOT saved at power failure, all outputs are set to OFF upon power restore",
                value: "0",
              },
              {
                label:
                  "State saved at power failure, all outputs are set to previous state upon power restore",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Timer functionality (auto - off)",
            max: "32767",
            min: "0",
            type: "short",
            units: "sec",
            value: "0",
            Help:
              "Available settings: 0 - Function disabled; 1-32767 - time to turn off measured in seconds (1s - 9,1h) Default setting: 0",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Enable/Disable ALL ON/OFF",
            size: "2",
            type: "list",
            value: "255",
            Help: "Enable/Disable ALL ON/OFF. Default 255.",
            Item: [
              { label: "ALL ON active / ALL OFF active", value: "255" },
              { label: "ALL ON disabled/ ALL OFF disabled", value: "0" },
              { label: "ALL ON disabled/ ALL OFF active", value: "1" },
              { label: "ALL ON active / ALL OFF disabled", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Force auto-calibration",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Changing value of this parameter will force the calibration process.",
            Item: [
              { label: "idle", value: "0" },
              {
                label:
                  "Start auto-calibration of the load without Fibaro Bypass",
                value: "1",
              },
              {
                label: "Start auto-calibration of the load with Fibaro Bypass",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Auto-calibration status",
            read_only: "true",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter determines operating mode of the Dimmer (automatic/manual settings).",
            Item: [
              {
                label:
                  "calibration procedure not performed or Dimmer operates on manual settings",
                value: "0",
              },
              {
                label: "Dimmer operates on auto-calibration settings",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Burnt out bulb detection",
            max: "99",
            min: "1",
            type: "byte",
            units: "%",
            value: "30",
            Help:
              "Function based on the sudden power variation of a specific value, interpreted as a LOAD ERROR. Available settings: 0 - function disabled; 1-99 - percentage value of power variation, compared to standard power consumption, measured during the calibration procedure (to be interpreted as load error/burnt out bulb) Default setting: 30",
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "Time delay of a burnt out bulb",
            max: "255",
            min: "0",
            type: "short",
            units: "%",
            value: "5",
            Help:
              "Time of delay (in seconds) for power variation detection, interpreted as a LOAD ERROR or OVERLOAD detection (too much power connected to the Dimmer). Available settings: 0 - detection of a burnt out bulb disabled; 1-255 - delay time in seconds; Default setting: 5",
          },
          {
            genre: "config",
            index: "19",
            instance: "1",
            label: "Forced switch on brightness level",
            max: "99",
            min: "0",
            type: "byte",
            units: "%",
            value: "0",
            Help:
              "If the parameter is active, switching on the Dimmer (S1 single click) will always set this brightness level. Available settings: 0 - function disabled; 1-99 - percentage level of brightness; Default setting: 0",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Inputs Button/Switch configuration",
            size: "1",
            type: "list",
            value: "0",
            Help: "Binary inputs type configuration. Default 0.",
            Item: [
              { label: "Mono-stable input (button)", value: "0" },
              { label: "Bi-stable input (switch)", value: "1" },
              {
                label:
                  "Role blind switch (UP / DOWN) - two switch keys operate the Dimmer",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "The value sent to associated devices on single click",
            size: "1",
            type: "list",
            value: "0",
            Help: "The value sent to associated devices on single click.",
            Item: [
              {
                label:
                  "0xFF value is sent, which will set associated devices to their last saved state.",
                value: "0",
              },
              {
                label:
                  "Current Dimmer state is sent, which will synchronize brightness level of associated devices (other Dimmers for example).",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "Assign toggle switch status to the device status",
            size: "1",
            type: "list",
            value: "0",
            Item: [
              {
                label: "Device changes status on switch status change",
                value: "0",
              },
              {
                label: "Device status is synchronized with switch status",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "23",
            instance: "1",
            label: "Double click option",
            size: "1",
            type: "list",
            value: "1",
            Help: "Double-click set lighting at 100%. Default 1.",
            Item: [
              { label: "Disable double click", value: "0" },
              { label: "Enable double click", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label:
              "Command frames sent in 2-nd and 3-rd association groups (S1 associations)",
            type: "byte",
            value: "0",
            Help:
              "Parameter determines, which actions will not result in sending frames to association groups. Parameter values may be combined, e.g. 1+2=3 means that associations on switching on or off the Dimmer (single click) will not be sent.\nAvailable settings: 0-31\n0 - all actions send to association groups;\n1 - do not send when switching on the Dimmer (single click);\n2 - do not send when switching off the Dimmer (single click);\n4 - do not send when changing dimming level (holding and releasing);\n8 - do not send on double click;\n16 - send 0xFF value on double click;\nDefault setting: 0",
          },
          {
            genre: "config",
            index: "25",
            instance: "1",
            label:
              "Command frames sent in 4-th and 5-th association groups (S2 associations)",
            type: "byte",
            value: "0",
            Help:
              "Parameter determines, which actions will not result in sending frames to association groups. Parameter values may be combined, e.g. 1+2=3 means that associations on switching on or off the Dimmer (single click) will not be sent.\nAvailable settings: 0-31\n0 - all actions send to association groups;\n1 - do not send when switching on the Dimmer (single click);\n2 - do not send when switching off the Dimmer (single click);\n4 - do not send when changing dimming level (holding and releasing);\n8 - do not send on double click;\n16 - send 0xFF value on double click;\nDefault setting: 0",
          },
          {
            genre: "config",
            index: "26",
            instance: "1",
            label: "The function of 3-way switch",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Switch no. 2 controls the Dimmer additionally (in 3-way switch mode). Function disabled for parameter 20 set to 2 (roller blind switch)",
            Item: [
              { label: "3-way switch function for S2 disabled", value: "0" },
              { label: "3-way switch function for S2 enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "27",
            instance: "1",
            label: "Associations in Z-Wave network security mode",
            type: "byte",
            value: "15",
            Help:
              "This parameter defines how commands are sent in specified association groups: as secure or non-secure. Parameter is active only in Z-Wave network security mode. It does not apply to 1st Lifeline group. Parameter values may be combined, e.g. 1+2=3 means that 2nd & 3rd group are sent as secure.\nAvailable settings: 0-15\n0 - all groups (II-V) sent as non-secure;\n1 - 2nd group sent as secure;\n2 - 3rd group sent as secure;\n4 - 4th group sent as secure;\n8 - 5th group sent as secure;\n15 - all groups (II-V) sent as secure;\nDefault setting: 15",
          },
          {
            genre: "config",
            index: "28",
            instance: "1",
            label: "Scene activation functionality",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "SCENE ID depends on the switch type configurations. Default 0.",
            Item: [
              { label: "Functionality deactivated", value: "0" },
              { label: "Functionality activated", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "29",
            instance: "1",
            label: "Switch functionality of S1 and S2",
            size: "1",
            type: "list",
            value: "0",
            Item: [
              { label: "standard mode", value: "0" },
              { label: "S1 operates as S2, S2 operates as S1", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Load control mode",
            size: "1",
            type: "list",
            value: "2",
            Help: "Forced auto-calibration will set this parameter value to 2.",
            Item: [
              { label: "forced leading edge control", value: "0" },
              { label: "forced trailing edge control", value: "1" },
              {
                label:
                  "control mode selected automatically (based on auto-calibration)",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "31",
            instance: "1",
            label: "Load control mode recognized during auto-calibration",
            read_only: "true",
            size: "1",
            type: "list",
            value: "0",
            Help: "Load control mode recognized during auto-calibration.",
            Item: [
              { label: "leading edge", value: "0" },
              { label: "trailing edge", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "32",
            instance: "1",
            label: "On/Off mode",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "This mode is necessary while connecting non-dimmable light sources. Setting this parameter to 1 automatically ignores brightening/dimming time settings. Forced auto-calibration will set this parameter’s value to 2",
            Item: [
              {
                label: "on/off mode disabled (dimming is possible)",
                value: "0",
              },
              {
                label: "on/off mode enabled (dimming is not possible)",
                value: "1",
              },
              { label: "mode selected automatically", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "33",
            instance: "1",
            label: "Dimmability of the load",
            read_only: "true",
            size: "1",
            type: "list",
            value: "0",
            Help: "Dimmability of the load",
            Item: [
              { label: "Load recognized as dimmable", value: "0" },
              { label: "Load recognized as non-dimmable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "34",
            instance: "1",
            label: "Soft-Start functionality",
            size: "1",
            type: "list",
            value: "1",
            Help: "Time required to warm up the filament of halogen bulb.",
            Item: [
              { label: "no soft-start", value: "0" },
              { label: "short soft-start (0.1s)", value: "1" },
              { label: "long soft-start (0.5s)", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "35",
            instance: "1",
            label: "Auto-calibration after power on",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter determines the trigger of auto-calibration procedure, e.g. power on, load error, etc.",
            Item: [
              {
                label: "No auto-calibration of the load after power on",
                value: "0",
              },
              {
                label: "Auto-calibration performed after first power on",
                value: "1",
              },
              {
                label: "Auto-calibration performed after each power on",
                value: "2",
              },
              {
                label:
                  "Auto-calibration performed after first power on or after each LOAD ERROR alarm (no load, load failure, burnt out bulb)",
                value: "3",
              },
              {
                label:
                  "Auto-calibration performed after each power on or after each LOAD ERROR alarm (no load, load failure, burnt out bulb),",
                value: "4",
              },
            ],
          },
          {
            genre: "config",
            index: "37",
            instance: "1",
            label: "Behaviour of the Dimmer after OVERCURRENT or SURGE",
            size: "1",
            type: "list",
            value: "1",
            Help: "Behaviour of the Dimmer after OVERCURRENT or SURGE",
            Item: [
              {
                label:
                  "device permanently disabled until re-enabling by comand or external switch",
                value: "0",
              },
              { label: "three attempts to turn on the load", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "38",
            instance: "1",
            label: "Brightness level correction for flickering loads",
            max: "255",
            min: "0",
            type: "short",
            value: "255",
            Help:
              "Correction reduces spontaneous flickering of some capacitive load (e.g. dimmable lEDs) at certain brightness levels in 2-wire installation. In countries using ripple-control, correction may cause changes in brightness. In this case it is necessary to disable correction or adjust time of correction for flickering loads. Available settings: 0 - automatic correction disabled 1-254 - duration of correction in seconds 255 - automatic correction always enabled Default setting: 255",
          },
          {
            genre: "config",
            index: "39",
            instance: "1",
            label: "Power limit - OVERLOAD",
            max: "350",
            min: "1",
            type: "short",
            units: "Watt",
            value: "250",
            Help:
              "Reaching the defined value will result in turning off the load. Additional apparent power limit of 350VA is active by default. Available settings: 0 - functionality disabled; 1-350 - 1W-350W; Default setting: 250",
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Response to General Purpose Alarm",
            size: "1",
            type: "list",
            value: "3",
            Help: "Response to General Purpose Alarm; Default 3.",
            Item: [
              {
                label: "No reaction - no response to alarm frames",
                value: "0",
              },
              {
                label:
                  "ALARM DIMMER ON - device turn ON upon receipt of alarm frame",
                value: "1",
              },
              {
                label:
                  "ALARM DIMMER OFF - device will turn OFF upon receipt of alarm frame",
                value: "2",
              },
              {
                label:
                  "ALARM FLASHING - device will turn ON and OFF periodically",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "41",
            instance: "1",
            label: "Response to Water Flooding Alarm",
            size: "1",
            type: "list",
            value: "2",
            Help: "Response to Water Flooding Alarm; Default 2.",
            Item: [
              {
                label: "No reaction - no response to alarm frames",
                value: "0",
              },
              {
                label:
                  "ALARM DIMMER ON - device turn ON upon receipt of alarm frame",
                value: "1",
              },
              {
                label:
                  "ALARM DIMMER OFF - device will turn OFF upon receipt of alarm frame",
                value: "2",
              },
              {
                label:
                  "ALARM FLASHING - device will turn ON and OFF periodically",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Response to Smoke, CO or CO2 Alarm",
            size: "1",
            type: "list",
            value: "3",
            Help: "Response to Smoke, CO or CO2 Alarm; Default 3.",
            Item: [
              {
                label: "No reaction - no response to alarm frames",
                value: "0",
              },
              {
                label:
                  "ALARM DIMMER ON - device turn ON upon receipt of alarm frame",
                value: "1",
              },
              {
                label:
                  "ALARM DIMMER OFF - device will turn OFF upon receipt of alarm frame",
                value: "2",
              },
              {
                label:
                  "ALARM FLASHING - device will turn ON and OFF periodically",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "43",
            instance: "1",
            label: "Response to Temperature Alarm",
            size: "1",
            type: "list",
            value: "1",
            Help: "Response to Temperature Alarm; Default 1.",
            Item: [
              {
                label: "No reaction - no response to alarm frames",
                value: "0",
              },
              {
                label:
                  "ALARM DIMMER ON - device turn ON upon receipt of alarm frame",
                value: "1",
              },
              {
                label:
                  "ALARM DIMMER OFF - device will turn OFF upon receipt of alarm frame",
                value: "2",
              },
              {
                label:
                  "ALARM FLASHING - device will turn ON and OFF periodically",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "44",
            instance: "1",
            label: "Time of alarm state",
            max: "32767",
            min: "1",
            type: "short",
            units: "sec",
            value: "600",
            Help:
              "Alarm state may be cancelled earlier, as a result of pressing the switches or sending the Z-Wave command frame.",
          },
          {
            genre: "config",
            index: "45",
            instance: "1",
            label: "OVERLOAD alarm report",
            size: "1",
            type: "list",
            value: "1",
            Help: "OVERLOAD alarm report (load power consumption too high)",
            Item: [
              { label: "No reaction", value: "0" },
              { label: "Send an alarm frame", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "46",
            instance: "1",
            label: "LOAD ERROR alarm report",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "LOAD ERROR alarm report (no load, load failure, burnt out bulb)",
            Item: [
              { label: "No reaction", value: "0" },
              { label: "Send an alarm frame", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "47",
            instance: "1",
            label: "OVERCURRENT alarm report",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "OVERCURRENT alarm report (short circuit, burnt out bulb causing overcurrent)",
            Item: [
              { label: "No reaction", value: "0" },
              { label: "Send an alarm frame", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "48",
            instance: "1",
            label: "SURGE alarm report",
            size: "1",
            type: "list",
            value: "1",
            Help: "SURGE alarm report (Dimmer output overvoltage)",
            Item: [
              { label: "No reaction", value: "0" },
              { label: "Send an alarm frame", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "49",
            instance: "1",
            label: "OVERHEAT and VOLTAGE DROP alarm report",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "OVERHEAT (critical temperature) and VOLTAGE DROP (low voltage) alarm report",
            Item: [
              { label: "No reaction", value: "0" },
              { label: "Send an alarm frame", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "50",
            instance: "1",
            label: "Active power reports",
            max: "100",
            min: "0",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "The parameter defines the power level change that will result in a new power report being sent. The value is a percentage of the previous report. Available settings:\n0 - power reports disabled;\n1-100 (1-100%) - power report threshold;\nDefault setting: 10 (10%)",
          },
          {
            genre: "config",
            index: "52",
            instance: "1",
            label: "Periodic active power and energy reports",
            max: "32767",
            min: "0",
            type: "short",
            units: "sec",
            value: "3600",
            Help:
              "Parameter 52 defines a time period between consecutive reports. Timer is reset and counted from zero after each report. Available settings:\n0 - periodic reports disabled;\n1-32767 (1-32767 seconds);\nDefault setting: 3600 (3600s)",
          },
          {
            genre: "config",
            index: "53",
            instance: "1",
            label: "Energy reports",
            max: "255",
            min: "0",
            type: "short",
            units: "kWh",
            value: "10",
            Help:
              "Energy level change which will result in sending a new energy report. Available settings:\n0 - energy reports disabled; \n1-255 (0,01 - 2,55 kWh) - report triggering threshold;\nDefault setting: 10 (0,1 kWh)",
          },
          {
            genre: "config",
            index: "54",
            instance: "1",
            label: "Self-measurement",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "The Dimmer may include active power and energy consumed by itself in reports sent to the main controller.",
            Item: [
              { label: "Self-measurement inactive", value: "0" },
              { label: "Self-measurement active", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "58",
            instance: "1",
            label: "Method of calculating the active power",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter defines how to calculate active power. This parameter is useful in a case of 2-wire connection with light sources other than resistive. The parameter is set to 0 after forced auto-calibration.",
            Item: [
              {
                label: "power measurement based on the standard algorithm",
                value: "0",
              },
              {
                label: "approximation based on the calibration data",
                value: "1",
              },
              { label: "approximation based on the control angle", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "59",
            instance: "1",
            label: "Approximated power at the maximum brightness level",
            max: "500",
            min: "0",
            type: "short",
            units: "Watt",
            value: "0",
            Help:
              "This parameter determines the approximate value of the power that will be reported by the device at its maximum brightness level. This parameter works only when parameter 58 has a value other than 0. Available settings: 0-500 (0-500W) - power consumed by the load at the maximum brightness level. Default setting: 0",
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "On/Off(S1)", max_associations: "8" },
              { index: "3", label: "Dimmer(S1)", max_associations: "8" },
              { index: "4", label: "On/Off(S2)", max_associations: "8" },
              { index: "5", label: "Dimmer(S2)", max_associations: "8" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
