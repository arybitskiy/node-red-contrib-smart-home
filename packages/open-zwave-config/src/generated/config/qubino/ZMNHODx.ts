import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0159:0053:0003",
            name: "OzwInfoPage",
          },
          { text: "images/qubino/ZMNHODx.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2976/",
            id: "0053",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "•\tConnect module to power supply \n•\tbring module within maximum 1 meter (3 feet) of the main controller,\n•\tenable add/remove mode on main controller,\nIf service button S is pressed more than 2 and less than 6 seconds (or if push button I1 is pressed three times within 3s) module is excluded, but configuration parameters are not set to default values.\n\nNOTE: Please use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0053",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "The Qubino Flush Shutter DC is ideal for controlling the 12–24V DC motors of blinds, rollers, shades, venetian blinds and similar sunscreens. You can control it either remotely through the Z-Wave network or through wall switches. It also measures power consumption and supports the connection of a digital temperature sensor.",
            name: "Description",
          },
          { text: "ZMNHOD3", id: "0053", name: "Identifier", type: "0003" },
          {
            text:
              "•\tConnect module to power supply (with \ntemperature sensor connected - if purchased),\n•\tauto-inclusion (works for about 5 seconds after connected to power supply) or\n•\tpress service button S for more than 2 second or\n•\tpress push button I1 three times within 3s (3 times change switch state within 3 seconds).\n\nNOTE1: For auto-inclusion procedure, first set main controller into inclusion mode and then connect module to power supply.\n\nNOTE2: When connecting temperature sensor to module that has already been included, you have to exclude module first. Switch off power supply, connect the sensor and re-include the module.",
            name: "InclusionDescription",
          },
          { text: "Flush Shutter DC", name: "Name" },
          {
            text:
              "press service button S for more than 6 second or\n•\tpress push button I1 five times within 3s (5 times change switch state within 3 seconds) in the first 60 seconds after the module is connected to the power supply.\nBy this function all parameters of the module are set to default values and own ID is deleted.\n\nNOTE: Please use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2976/Qubino_Flush Shutter DC PLUS extended manual_eng_2.2.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2976/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
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
            index: "10",
            instance: "1",
            label: "Activate / deactivate functions ALL ON/ALL OFF",
            max: "255",
            min: "0",
            size: "2",
            type: "list",
            value: "255",
            Help:
              "Responds to commands ALL ON / ALL OFF that may be sent by the main controller or by other controller belonging to the system.",
            Item: [
              { label: "ALL ON active, ALL OFF active", value: "255" },
              {
                label: "ALL ON is not active ALL OFF is not active",
                value: "0",
              },
              { label: "ALL ON is not active ALL OFF active", value: "1" },
              { label: "ALL ON active ALL OFF is not active", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Power reporting in Watts on power change",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "1",
            Help:
              "Set value from 0 - 100 (0% - 100%). 0 - Reporting Disabled. 1 to 100 = 1% to 100% Reporting enabled.\n                Power report is send (push) only when actual power (in Watts) in real time changes for more\n                than set percentage comparing to previous actual power in Watts, step is 1%. Default value 1",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Power reporting in Watts by time interval",
            max: "32767",
            min: "0",
            type: "short",
            value: "300",
            Help:
              "Set value means time interval (0 - 32767) in seconds, when power report is send.\n                0 - Reporting Disabled.\n                1 - 32767) = 1second - 32767) seconds, Reporting enabled.\n                Power report is send with time interval set by entered value.",
          },
          {
            genre: "config",
            index: "45",
            instance: "1",
            label: "Self-measurement",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Module may include power and energy used by module itself in reports sent to the main controller",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Eable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "71",
            instance: "1",
            label: "Operating modes",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Defines selection between two available operating modes. 0 Shutter mode\n                1 Venetian mode (up/down and slate tilting)\n                Note: When setting parameter, module needs to be reconfigured! Please check detailed description in this manual.\n            ",
            Item: [
              { label: "Shutter", value: "0" },
              { label: "Venetian", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "72",
            instance: "1",
            label: "Slats tilting full turn time",
            max: "32767",
            min: "0",
            type: "short",
            value: "150",
            Help:
              "\n                Defines the time necessary for slats to make full turn (180 degrees).\n                0 Tilting time disabled\n                1 to 32767 = 0,01seconds to 327,67 seconds\n                Note: If time set is too high, this will result that after full turn, shutter will start move up or down, for time remaining.\n            ",
          },
          {
            genre: "config",
            index: "73",
            instance: "1",
            label: "Slats position",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "\n                This parameter defines slats position after up/down movement through UI or push buttons, return to previously set position only in case of\n                0 - UI control.\n                1 - UI control, momentary switch operation, or when the limit switch is reached.\n                2 - UI control, Push button, Limit switch is reached, after receiving a STOP control frame from UI.\n                ( Default value 2 )\n            ",
            Item: [
              { label: "UI control", value: "0" },
              {
                label:
                  "UI control, momentary switch operation, limit switch is reached",
                value: "1",
              },
              {
                label:
                  "UI control, push button, limit switch is reached, STOP Frame",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "74",
            instance: "1",
            label: "Motor moving up/down time",
            max: "32767",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "\n                Defines shutter motor moving time of complete opening or complete closing.\n                0 - moving time disabled (working with limit switches)\n                1 - 32767 = 0,1seconds - 3276,7seconds. After that time motor is stopped (relay goes to off state)\n                See complete note in documentation.\n            ",
          },
          {
            genre: "config",
            index: "76",
            instance: "1",
            label: "Motor operation detection",
            max: "100",
            min: "5",
            type: "byte",
            value: "6",
            Help:
              "Power threshold to be interpreted when motor reach the limit switch.\n                Available settings: 5 to 100 (0,5 W to 10 W), step is 0,1W.",
          },
          {
            genre: "config",
            index: "78",
            instance: "1",
            label: "Forced Shutter calibration",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "By modifying the parameters setting, Shutter enters the calibration mode.\n                (after shutter performs the calibration process, completing full cycle - up, down and up,\n                set the parameter value back to default. )\n            ",
            Item: [
              { label: "Default", value: "0" },
              { label: "Start calibration process", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "80",
            instance: "1",
            label: "Power reporting to controller",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                Defines if reporting regarding power level, multilevel, etc.., are reported to controller or not.\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "85",
            instance: "1",
            label: "Power consumption max delay time",
            max: "50",
            min: "3",
            type: "byte",
            value: "8",
            Help:
              "Defines the max time before motor power consumption is read after one of the relays is switched ON.\n                If there is no power consumption during this max time\n                (motor not connected, damaged or requires higher time to start, motor in end position,...) the relay will switch OFF.\n                Available settings: 3 - 50 = 0,3 seconds - 5 seconds (100ms resolution).\n            ",
          },
          {
            genre: "config",
            index: "86",
            instance: "1",
            label: "Power consumption at limit switch delay time",
            max: "50",
            min: "3",
            type: "byte",
            value: "8",
            Help:
              "Defines the max time at limit switch, when power consumption is below power threshold.\n                If the power consumption during this time is below power threshold (par. 76), the active output will switch off, means that limit switch is reached.\n                Available settings: 3 - 50 = 0,3 seconds - 5 seconds (100ms resolution).\n            ",
          },
          {
            genre: "config",
            index: "90",
            instance: "1",
            label: "Delay time between outputs",
            max: "30",
            min: "1",
            type: "byte",
            value: "5",
            Help:
              "Defines the time delay between output relay switching (time between switching up/down and vice versa).\n                Available settings: 1 - 30 = 0,1 seconds - 3 seconds (100ms resolution).\n            ",
          },
          {
            genre: "config",
            index: "110",
            instance: "1",
            label: "Temperature sensor offset settings",
            max: "1100",
            min: "1",
            type: "short",
            value: "32536",
            Help:
              "\n                From 1 to 100 - value from 0.1 C to 10.0 C is added to actual measured temperature.\n                From 1001 to 1100 - value from -0.1 C to -10.0 C is subtracted to actual measured temperature.\n            ",
          },
          {
            genre: "config",
            index: "120",
            instance: "1",
            label: "Digital temperature sensor reporting",
            max: "127",
            min: "0",
            type: "byte",
            value: "5",
            Help:
              "If digital temperature sensor is connected, module reports measured temperature on temperature change defined by this parameter.\n                Available settings: 0 - Reporting disabled.\n                1 - 127 = 0,1C - 12,7C, step is 0,1C.\n            ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "9",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label: "Basic on/off of the input I1 state",
                max_associations: "16",
              },
              {
                index: "3",
                label: "Basic on/off of the input I2 state",
                max_associations: "16",
              },
              {
                index: "4",
                label: "Flush shutter DC direction",
                max_associations: "16",
              },
              {
                index: "5",
                label: "Stop level change",
                max_associations: "16",
              },
              {
                index: "6",
                label: "Triggered at reaching roller position",
                max_associations: "16",
              },
              {
                index: "7",
                label: "Flush shutter DC position",
                max_associations: "16",
              },
              {
                index: "8",
                label: "Slats tilting position",
                max_associations: "16",
              },
              {
                index: "9",
                label: "Temperature sensor",
                max_associations: "16",
              },
            ],
          },
        ],
      },
      { action: "remove", id: "32" },
    ],
  },
};

export default config;
