import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0159:0051:0002",
            name: "OzwInfoPage",
          },
          { text: "images/qubino/ZMNHBDx.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1528/",
            id: "0051",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "ZMNHB", id: "0051", name: "Identifier", type: "0002" },
          {
            text:
              "Please use this procedure only in the event that your network primary controller is missing or otherwise inoperable.\n\nIf the service button S is pressed for mor ethan 6 seconds the module will be reset to the factory defoult state",
            name: "ResetDescription",
          },
          {
            text:
              "Module Exclusion/Reset (Removing from Z-Wave network)\n•\tConnect module to power supply\n•\tbring module within maximum 1 meter (3feet) of the main controller, \n•\tenable add/remove mode on main controller,\n•\tpress service button S for more than 6 second or\n•\tpress push button I1 five  times within 3s ( 5\ttimes change switch state within 3 seconds) in the first 60 seconds after the module is connected to the power supply.\nBy this function all parameters of the module are set to   default values and own ID is deleted.\nIf service button S is pressed more than 2 and less than 6second module is excluded, but configuration parameters are not set to default values",
            name: "ExclusionDescription",
          },
          {
            text:
              "Flush 2 relays module is used for switching on or off two electrical devices (e.g. lights, fans, etc ...). The module can be controlled either through Z-Wave network or through the wall switches.\nThe module is designed to be mounted inside a “flush mounting box”, hidden behind a traditional wall switch.\nModule measures power consumption of two electrical devices and supports connection of digital temperature sensor. It is designed to act as repeater in order to improve range and stability of Z-wave network.",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0051",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "Module Inclusion (Adding to Z-Wave network)\n•\tConnect module to power supply (with \ntemperature sensor connected - if purchased),\n•\tenable add/remove mode on main controller\n•\tauto-inclusion (works for about 5 seconds after connected to power supply) or\n•\tpress service button S for more than 2 second or\n•\tpress push button I1 three times within 3s (3 times change switch state within 3 seconds).\nNOTE1: For auto-inclusion procedure, first set main controller into inclusion mode and then connect module to power supply.\nNOTE2: When connecting temperature sensor to module that has already been included, you have to exclude module first. Switch off power supply , connect the sensor and re-include the module.",
            name: "InclusionDescription",
          },
          { text: "Qubino Flush 2 relays", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1528/Qubino_Flush 2 Relay PLUS extended manual_eng_2.2.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1528/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 5,
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
            label: "Input 1 switch type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "",
            Item: [
              { label: "Mono-stable switch type (push button)", value: "0" },
              { label: "Bi-stable switch type", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Input 2 switch type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "",
            Item: [
              { label: "Mono-stable switch type (push button)", value: "0" },
              { label: "Bi-stable switch type", value: "1" },
            ],
          },
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
              "Flush 2 relays module responds to commands ALL ON / ALL OFF that may be sent by the main controller or by other controller belonging to the system.",
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
            index: "11",
            instance: "1",
            label: "Turn off Q1 after set time",
            max: "32535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "When Q1 relay is ON it goes automatically OFF after set time. The timer is reset to zero every time the module receives an ON command from any source. Value is in 1s or 10ms depending on parameter 15",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Turn on Q1 after set time",
            max: "32535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "When Q1 relay is OFF it goes automatically ON after set time. The timer is reset to zero every time the module receives an OFF command from any source. Value is in 1s or 10ms depending on parameter 15",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Turning off Q2 after set time",
            max: "32535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "When Q2 relay is ON it goes automatically OFF after set time. The timer is reset to zero every time the module receives an ON command from any source. Value is in 1s or 10ms depending on parameter 15",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Turning on Q2 after set time",
            max: "32535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "When Q2 relay is OFF it goes automatically ON after set time. The timer is reset to zero every time the module receives an OFF command from any source. Value is in 1s or 10ms depending on parameter 15",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Turning on/off s or ms selection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Select the time units for auto on/off configuration. Applies tot he whole device",
            Item: [
              { label: "1 Second", value: "0" },
              { label: "10 Milliseconds", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Saving the state of the 2 relays after a power failure",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              {
                label:
                  "Flush 2 relays module saves its state before power failure (it returns to the last position saved before a power failure)",
                value: "0",
              },
              {
                label:
                  "Flush 2 relays module does not save the state after a power failure, it returns to off position.",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Power reporting in Watts on power change for Q1",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "1",
            Help:
              "Set value from 0 - 100 (0%- 100%). 0 - Reporting Disabled. 1 - 100 = 1% - 100% Reporting enabled. Power report is send (push) only when actual power in Watts in real time change for more than set percentage comparing to previous actual power in Watts, step is 1%. Default value 1",
          },
          {
            genre: "config",
            index: "41",
            instance: "1",
            label: "Power reporting in Watts on power change for Q2",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "1",
            Help:
              "Set value from 0 - 100 (0%- 100%). 0 - Reporting Disabled. 1 - 100 = 1% - 100% Reporting enabled. Power report is send (push) only when actual power in Watts in real time change for more than set percentage comparing to previous actual power in Watts, step is 1%. Default value 1",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Power reporting in Watts by time interval for Q1",
            max: "65535",
            min: "0",
            type: "short",
            value: "300",
            Help:
              "Set value means time interval (0 1 65535) in seconds, when power report is send. 0 - Reporting Disabled. 1 - 65535 = 1 second - 65535 seconds. Reporting enabled. Power report is send with time interval set by entered value. Default value 300 (power report in Watts is send each 300s)",
          },
          {
            genre: "config",
            index: "43",
            instance: "1",
            label: "Power reporting in Watts by time interval for Q2",
            max: "65535",
            min: "0",
            type: "short",
            value: "300",
            Help:
              "Set value means time interval (0 1 65535) in seconds, when power report is send. 0 - Reporting Disabled. 1 - 65535 = 1 second - 65535 seconds. Reporting enabled. Power report is send with time interval set by entered value. Default value 300 (power report in Watts is send each 300s)",
          },
          {
            genre: "config",
            index: "63",
            instance: "1",
            label: "Output Q1 switch selection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Type of device that is connected to the output (NC or NO)",
            Item: [
              {
                label: "When the switch is turned off the output is 0V (NC)",
                value: "0",
              },
              {
                label:
                  "When the switch is turned off the output is 230V or 24V (NO)",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "64",
            instance: "1",
            label: "Output Q2 switch selection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Type of device that is connected to the output (NC or NO)",
            Item: [
              {
                label: "When the switch is turned off the output is 0V (NC)",
                value: "0",
              },
              {
                label:
                  "When the switch is turned off the output is 230V or 24V (NO)",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "110",
            instance: "1",
            label: "Temperature sensor offset settings",
            max: "32535",
            min: "0",
            type: "short",
            value: "32535",
            Help:
              "Set value is added or subtracted to actual measured value by sensor. Available configuration parameters : default value 32536. 32536  offset is 0.0C. From 1 to 100 = value from 0.1C to 10.0C is added to actual measured temperature. From 1001 to 1100 = value from -0.1 C to -10.0 C is subtracted to actual measured temperature.",
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
              "If digital temperature sensor is connected, module reports measured temperature on temperature change defined by this parameter. Available configuration parameters : 0 = reporting disabled. 1 to 127 = 0,1C to 12,7C, step is 0,1C. Default value is 5 = 0,5C",
          },
        ],
      },
      {
        id: "37",
        TriggerRefreshValue: [
          {
            Genre: "user",
            Index: "0",
            Instance: "1",
            RefreshClassValue: [
              {
                CommandClass: "37",
                Index: "0",
                Instance: "2",
                RequestFlags: "0",
              },
              {
                CommandClass: "37",
                Index: "0",
                Instance: "3",
                RequestFlags: "0",
              },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "8",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label:
                  "Basic on/off triggered at the change of output Q1 and reflecting its state",
                max_associations: "16",
              },
              {
                index: "3",
                label:
                  "Switch binary report triggered at the changes of output Q1 and reflecting its state",
                max_associations: "16",
              },
              {
                index: "4",
                label:
                  "Power meter report triggered at the changes of output Q1 and reflecting its state",
                max_associations: "16",
              },
              {
                index: "5",
                label:
                  "Basic on/off triggered at the change of output Q2 and reflecting its state",
                max_associations: "16",
              },
              {
                index: "6",
                label:
                  "Switch binary report triggered at the changes of output Q2 and reflecting its state",
                max_associations: "16",
              },
              {
                index: "7",
                label:
                  "Power meter report triggered at the changes of output Q2 and reflecting its state",
                max_associations: "16",
              },
              {
                index: "8",
                label: "Multilevel sensor report",
                max_associations: "16",
              },
            ],
          },
        ],
      },
      { action: "remove", id: "32" },
      { id: "142", Compatibility: [{ ForceInstances: [true] }] },
    ],
  },
};

export default config;
