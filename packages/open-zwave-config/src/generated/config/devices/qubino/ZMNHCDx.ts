import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 7,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0159:0052:0003",
            name: "OzwInfoPage",
          },
          { text: "images/qubino/ZMNHCDx.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2505/",
            id: "0052",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "•\tConnect module to power supply (with \ntemperature sensor connected - if purchased),\n•\tauto-inclusion (works for about 5 seconds after connected to power supply) or\n•\tpress push button I1 three times within 3s (3 times change switch state within 3 seconds) or\n•\tpress service button S (only applicable for 24 V SELV supply voltage) for more than 2 second.\n\nNOTE1: For auto-inclusion procedure, first set main controller into inclusion mode and then connect module to power supply.\n\nNOTE2: When connecting temperature sensor to module that has already been included, you have to exclude module first. Switch off power supply, connect the sensor and re-include the module.",
            name: "InclusionDescription",
          },
          {
            text:
              "•\tConnect module to power supply \n•\tbring module within maximum 1 meter (3 feet) of the main controller,\n•\tenable add/remove mode on main controller,\n•\tpress push button I1 five times within 3s (5 times change switch state within 3 seconds) in the first 60 seconds after the module is connected to the power supply or\n•\tpress service button S (only applicable for 24 V SELV supply voltage)  for more than 6 second.\nBy this function all parameters of the module are set to default values and own ID is deleted.\n\nIf push button I1 is pressed three times within 3s (or service button S is pressed more than 2 and less than 6 seconds) module is excluded, but configuration parameters are not set to default values. \n\nNOTE: Please use this procedure only when the network primary controller is missing or otherwise inoperable.\n\nNOTE: If the module is included with parameters 71 with value different to default and module reset is done, wait at least 30s before next inclusion",
            name: "ExclusionDescription",
          },
          {
            text:
              "•\tpress push button I1 five times within 3s (5 times change switch state within 3 seconds) in the first 60 seconds after the module is connected to the power supply or\n•\tpress service button S (only applicable for 24 V SELV supply voltage)  for more than 6 second.\n\nNOTE: Please use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "This Z-Wave module is used to control the motor of blinds, rollers, shades, venetian blinds, etc … The module can be controlled either through a Z-Wave network or through the wall switch. Precise positioning is supported for motors equipped with mechanical or electronic end switches. The module is designed to be mounted inside a “flush mounting box”, hidden behind a traditional wall switch. Module measures power consumption of motor and support connection of digital temperature sensor. It is designed to act as repeater in order to improve range and stability of Z-Wave network.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2505/Qubino_Flush Shutter PLUS extended manual_eng_2.2.pdf",
            name: "ProductManual",
          },
          { text: "ZMNHCD3", id: "0052", name: "Identifier", type: "0003" },
          { text: "Flush Shutter", name: "Name" },
          {
            text:
              "CEPT (Europe) / Australia / New Zealand / U.S. / Canada / Mexico",
            id: "0052",
            name: "FrequencyName",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2376/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2504/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2505/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 7,
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
              "Flush 1 relay module responds to commands ALL ON / ALL OFF that may be sent by the main controller or by other controller belonging to the system.",
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
            label: "Power reporting in Watts on power change for Q1 or Q2",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "1",
            Help:
              "Set value from 0 - 100 (0% - 100%). 0 - Reporting Disabled. 1 - 100 = 1% - 100% Reporting enabled. Power report is send (push) only when actual power (in Watts) in real time changes for more than set percentage comparing to previous actual power in Watts, step is 1%. Default value 1",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Power reporting in Watts by time interval for Q1 or Q2",
            max: "65535",
            min: "0",
            type: "short",
            units: "s",
            value: "300",
            Help:
              "Set value means time interval (0 - 65535) in seconds, when power report is send. 0 - Reporting Disabled. 1 - 65535 = 1second - 65535 seconds. Reporting enabled. Power report is send with time interval set by entered value. Default value 300 (power report in Watts is send each 300s)",
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
              "This parameter defines selection between two available operating modes",
            Item: [
              { label: "Shutter mode", value: "0" },
              {
                label: "Venetian mode (up/down and slate rotation)",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "72",
            instance: "1",
            label: "Slats tilting full turn time",
            max: "65535",
            min: "0",
            type: "short",
            units: "s",
            value: "150",
            Help:
              "\n\t\t\t\tThis parameter defines the time necessary for slats to make full turn (180 degrees)\n\t\t\t\tdefault value 150 = 1,5 seconds\n\t\t\t\t0 - Tilting time disabled\n\t\t\t\t1 - 32767 = 0,01seconds - 327,67 seconds\n\t\t\t\t",
          },
          {
            genre: "config",
            index: "73",
            instance: "1",
            label: "Slats position",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter defines slats position after up/down movement through Z-wave or push-buttons\n\t\t\t\tSlats return to previously set position only in case of\n\t\t\t\t",
            Item: [
              { label: "Z-wave control", value: "0" },
              {
                label:
                  "Z-wave control, push-button operation or when the lower limit switch is reached",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "74",
            instance: "1",
            label: "Motor moving up/down time",
            max: "65535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "This parameter defines shutter motor moving time of complete opening or complete closing.\n\t\t\t\tDefault value 0\n\t\t\t\t0 - moving time disabled (working with limit switches).\n\t\t\t\t1 - 65535 = 0,1seconds - 6553,5seconds\n\t\t\t\tAfter that time motor is stopped (relay goes to off state)",
          },
          {
            genre: "config",
            index: "76",
            instance: "1",
            label: "Motor operation detection",
            max: "127",
            min: "0",
            type: "byte",
            units: "w",
            value: "10",
            Help:
              "\n\t\t\t\tPower threshold to be interpreted when motor reach the limit switch.\n\t\t\t\tdefault value 10 = 10W\n\t\t\t\t0 - 127 = 1-127 W. The value 0 means reaching a limit switch will not be detected.\n\t\t\t",
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
              "By modifying the parameters setting from 0 to 1 a Shutter enters the calibration mode",
            Item: [
              { label: "Default", value: "0" },
              { label: "Start calibration process", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "85",
            instance: "1",
            label: "Power consumption max delay time",
            max: "50",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t\tThis parameter defines the max time before motor power consumption is read after one of the relays is switched ON.\n\t\t\t\tIf there is no power consumption during this max time (motor not connected, damaged or requires higher time to start, motor in end position) the relay will switch OFF.\n\t\t\t\tTime is defined by entering it manually.\n\t\t\t\tdefault value 0 = time is set automatically\n\t\t\t\t3 - 50 = 0,3seconds - 5seconds (100ms resolution)\n\t\t\t\t",
          },
          {
            genre: "config",
            index: "90",
            instance: "1",
            label: "Time delay for next motor movement",
            max: "30",
            min: "1",
            type: "byte",
            units: "",
            value: "5",
            Help:
              "\n\t\t\t\tThis parameter defines the minimum time delay between next motor movement (minimum time between switching motor off and on again).\n\t\t\t\tdefault value 5 = 500ms\n\t\t\t\t1 - 30 = 0,1seconds - 3seconds (100ms resolution)\n\t\t\t\t",
          },
          {
            genre: "config",
            index: "110",
            instance: "1",
            label: "Temperature sensor offset settings",
            max: "65535",
            min: "1",
            type: "short",
            value: "32536",
            Help:
              "\n\t\t\t\tSet value is added or subtracted to actual measured value by sensor.\n\t\t\t\tdefault value 32536\n\t\t\t\t32536 - offset is 0.0C\n\t\t\t\tFrom 1 to 100 - value from 0.1 C to 10.0 C is added to actual measured temperature.\n\t\t\t\tFrom 1001 to 1100 - value from -0.1 C to -10.0 C is subtracted to actual measured temperature.\n\t\t\t",
          },
          {
            genre: "config",
            index: "120",
            instance: "1",
            label: "Digital temperature sensor reporting",
            max: "127",
            min: "0",
            type: "byte",
            units: "",
            value: "5",
            Help:
              "\n\t\t\t\tIf digital temperature sensor is connected, module reports measured temperature on temperature change defined by this parameter\n\t\t\t\tdefault value 5 = 0,5C\n\t\t\t\t0 - Reporting disabled\n\t\t\t\t1-127 = 0,1C - 12,7C, step is 0,1C\n\t\t\t\t",
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
                label:
                  "basic on/off (triggered at change of the input I1 state and reflecting its state)",
                max_associations: "16",
              },
              {
                index: "3",
                label:
                  "basic on/off (triggered at change of the input I2 state and reflecting its state)",
                max_associations: "16",
              },
              {
                index: "4",
                label:
                  "basic on/off (triggered at sensing moving direction of roller: up=FF, down=0)",
                max_associations: "16",
              },
              {
                index: "5",
                label:
                  "basic on/off (triggered at reaching roller position: bottom=FF, top=0)",
                max_associations: "16",
              },
              {
                index: "6",
                label:
                  "basic on/off (triggered at reaching roller position: bottom=FF, not bottom=0)",
                max_associations: "16",
              },
              {
                index: "7",
                label:
                  "multilevel set (triggered at changes of value of the Flush shutter DC position)",
                max_associations: "16",
              },
              {
                index: "8",
                label:
                  "multilevel set (triggered at changes of value of slats tilting position)",
                max_associations: "16",
              },
              {
                index: "9",
                label:
                  "multilevel sensor report (triggered at change of temperature sensor)",
                max_associations: "16",
              },
            ],
          },
        ],
      },
      { action: "remove", id: "32" },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
    ],
  },
};

export default config;
