import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0159:0052:0001",
            name: "OzwInfoPage",
          },
          { text: "images/qubino/ZMNHSDx.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2252/",
            id: "0052",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "CEPT (Europe)",
            id: "0052",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "•\tPress push button I1 five times within 3s (5 times change switch state within 3 seconds) in the first 60 seconds after the module is connected to the power supply or\n•\tpress service button S (only applicable for 24 V SELV supply voltage)  for more than 6 second.\n\nPlease use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "•\tConnect module to power supply (with \ntemperature sensor connected - if purchased),\n•\tenable add/remove mode on main controller\n•\tauto-inclusion (works for about 5 seconds after connected to power supply) or\n•\tpress service button S for more than 2 second or\n•\tpress push button I1 three times within 3s (3 times change switch state within 3 seconds).\n\nNOTE1: For auto-inclusion procedure, first set main controller into inclusion mode and then connect module to power supply.\nNOTE2: When connecting temperature sensor to module that has already been included, you have to exclude module first. Switch off power supply, connect the sensor and re-include the module.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2252/Qubino_DIN Dimmer PLUS extended manual_eng_2.3.pdf",
            name: "ProductManual",
          },
          { text: "DIN Dimmer", name: "Name" },
          {
            text:
              "DIN Dimmer is a DIN rail mounted dimmer for light bulbs. You can control it either remotely through the Z-Wave network or through wall switches. It also measures power consumption and supports the connection of a digital temperature sensor.",
            name: "Description",
          },
          { text: "ZMNHSD1", id: "0052", name: "Identifier", type: "0001" },
          {
            text:
              "•\tConnect module to power supply \n•\tbring module within maximum 1 meter (3 feet) of the main controller,\n•\tenable add/remove mode on main controller,\n•\tpress push button I1 five times within 3s (5 times change switch state within 3 seconds) in the first 60 seconds after the module is connected to the power supply or\n•\tpress service button S (only applicable for 24 V SELV supply voltage)  for more than 6 second.\nBy this function all parameters of the module are set to default values and own ID is deleted.\nIf push button I1 is pressed three times within 3s (or service button S is pressed more than 2 and less than 6 seconds) module is excluded, but configuration parameters are not set to default values. \n\nNOTE 1: If the module is included with parameter 1 value 3, 4 or 5 and module reset is done, wait at least 30s before next inclusion.\n\nNOTE 2: Please use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2252/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            value: "0",
            Help: "",
            Item: [
              { label: "Mono-stable(push button)", value: "0" },
              { label: "Bi-stable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Working mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Default value 0",
            Item: [
              { label: "Dimmer", value: "0" },
              { label: "Switch", value: "1" },
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
              "Flush dimmer module responds to commands ALL ON / ALL OFF that may be sent by the main controller or by other controller belonging to the system.\n\t\t\tDefault value 255.",
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
            label: "Automatic turning off output after set time",
            max: "32536",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "0 - Auto OFF disabled.\n\t\t\t1 second to 32536 seconds Auto OFF enabled with defined time, step is 1 second.\n\t\t\tDefault value 0.",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Automatic turning on output after set time",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "0 - Auto ON disabled.\n\t\t\t1 second to 32535 seconds Auto ON enabled with defined time, step is 1 second.\n\t\t\tDefault value 0.",
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Enable/Disable Double click function",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "If Double click function is enabled, a fast double click on the push button will set dimming power at maximum dimming value.\n\t\t\t\tDefault value 0.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Saving the state of the relay after a power failure",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Default value 0.",
            Item: [
              {
                label:
                  "Flush dimmer module saves its state before power failure (it returns to the last position saved before a power failure)",
                value: "0",
              },
              {
                label:
                  "Flush dimmer module does not save the state after a power failure, it returns to off position",
                value: "1",
              },
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
            value: "5",
            Help:
              "Set value from 0 - 100 (0% - 100%).\n\t\t\t0 - Reporting Disabled.\n\t\t\t1 - 100 = 1% - 100% Reporting enabled.\n\t\t\tPower report is send (push) only when actual power in Watts in real time change for more than set percentage comparing to previous actual power in Watts, step is 1%.\n\t\t\tDefault value 5.",
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
              "Set value means time interval (0 - 32767) in seconds, when power report is send.\n\t\t\t0 - Reporting Disabled.\n\t\t\t1 second to 32767 seconds reporting enabled.\n\t\t\tPower report is send with time interval set by entered value.\n\t\t\tDefault value 300 (power report in Watts is send each 300s).",
          },
          {
            genre: "config",
            index: "60",
            instance: "1",
            label: "Minimum dimming value",
            max: "98",
            min: "1",
            type: "byte",
            value: "1",
            Help:
              "1 - 98 = 1% - 98%, step is 1%. Minimum dimming values is set by entered value.\n\t\t\tDefault value 1 (Minimum dimming value is 1%).",
          },
          {
            genre: "config",
            index: "61",
            instance: "1",
            label: "Maximum dimming value",
            max: "99",
            min: "2",
            type: "byte",
            value: "99",
            Help:
              "2 - 99 = 2% - 99%, step is 1%. Maximum dimming values is set by entered value.\n\t\t\tDefault value 99 (Maximum dimming value is 99%).",
          },
          {
            genre: "config",
            index: "65",
            instance: "1",
            label: "Dimming time (soft on/off)",
            max: "255",
            min: "1",
            type: "short",
            value: "100",
            Help:
              "Set value means time of moving the Dimmer between min. and max. dimming values by short press of push button I1 or controlled through.\n\t\t\t1- 255 = 10mseconds - 2550mseconds (2,55s), step is 10mseconds.\n\t\t\tDefault value 100 (Dimming time between min. and max. dimming values is 1s).",
          },
          {
            genre: "config",
            index: "66",
            instance: "1",
            label: "Dimming time when key pressed",
            max: "255",
            min: "1",
            type: "short",
            value: "3",
            Help:
              "Time of moving the Dimmer between min. and max dimming values by continues hold of push button I1.\n\t\t\t1- 255 = 1 second - 255 seconds.\n\t\t\tDefault value 3 (Dimming time between min. and max. dimming values is 3s).",
          },
          {
            genre: "config",
            index: "67",
            instance: "1",
            label: "Ignore start level",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter is used with association group 4.\n\t\t\t\tA receiving device SHOULD respect the start level if the Ignore Start Level bit is 0.\n\t\t\t\tA receiving device MUST ignore the start level if the Ignore Start Level bit is 1.\n\t\t\t\tDefault value 0.",
            Item: [
              { label: "respect start level", value: "0" },
              { label: "ignore start level", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "68",
            instance: "1",
            label: "Dimming duration",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter is used with association group 3.\n\t\t\t\tThe Duration field MUST specify the time that the transition should take from the current value to the new target value.\n\t\t\t\tA supporting device SHOULD respect the specified Duration value.\n\t\t\t\tDefault value 0.",
            Item: [
              { label: "Respect start level", value: "0" },
              { label: "Ignore start level", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "110",
            instance: "1",
            label: "Temperature sensor offset settings",
            max: "32536",
            min: "1",
            type: "short",
            value: "32536",
            Help:
              "Set value is added or subtracted to actual measured value by sensor.\n\t\t\t32536 : offset is 0.0C.\n\t\t\tFrom 1 to 100 : value from 0.1 C to 10.0 C is added to actual measured temperature.\n\t\t\tFrom 1001 to 1100 : value from -0.1 C to -10.0 C is subtracted to actual measured temperature.\n\t\t\tDefault value 32536.\n\t\t\t",
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
              "If digital temperature sensor is connected, module reports measured temperature on temperature change defined by this parameter.\n\t\t\t0 : Reporting disabled.\n\t\t\t1- 127 = 0,1C - 12,7C, step is 0,1C.\n\t\t\tDefault value 5 = 0,5C change.\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Basic on/off", max_associations: "16" },
              {
                index: "3",
                label: "Start level change/stop level change",
                max_associations: "16",
              },
              {
                index: "4",
                label: "Multilevel set Flush dimmer",
                max_associations: "16",
              },
              {
                index: "5",
                label: "Multilevel sensor report temp sensor",
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
