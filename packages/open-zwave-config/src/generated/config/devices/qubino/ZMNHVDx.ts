import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0159:0053:0001",
            name: "OzwInfoPage",
          },
          { text: "images/qubino/ZMNHVDx.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2241/",
            id: "0053",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2241/Qubino_Flush Dimmer 0-10V PLUS extended manual_eng_2.2.pdf",
            name: "ProductManual",
          },
          {
            text:
              "•\tPress push button I1 five times within 3s (5 times change switch state within 3 seconds) in the first 60 seconds after the module is connected to the power supply or\n•\tpress service button S (only applicable for 24 V SELV supply voltage)  for more than 6 second.\n\nPlease use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          { text: "Qubino Flush Dimmer 0-10V", name: "Name" },
          {
            text:
              "The Qubino Flush Dimmer 0-10V is a universal dimmer with a standard 0-10V output and a multi-function input, which may be a push button or switch, a potentiometer or a 0-10V signal. It also measures power consumption and supports the connection of a digital temperature sensor.",
            name: "Description",
          },
          {
            text:
              "•\tConnect module to power supply \n•\tbring module within maximum 1 meter (3 feet) of the main controller,\n•\tenable add/remove mode on main controller,\n•\tpress push button I1 five times within 3s (5 times change switch state within 3 seconds) in the first 60 seconds after the module is connected to the power supply or\n•\tpress service button S (only applicable for 24 V SELV supply voltage)  for more than 6 second.\nBy this function all parameters of the module are set to default values and own ID is deleted.\nIf push button I1 is pressed three times within 3s (or service button S is pressed more than 2 and less than 6 seconds) module is excluded, but configuration parameters are not set to default values. \n\nNOTE 1: If the module is included with parameter 1 value 3, 4 or 5 and module reset is done, wait at least 30s before next inclusion.\n\nNOTE 2: Please use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ExclusionDescription",
          },
          {
            text:
              "CEPT (Europe) / Australia / New Zealand / U.S. / Canada / Mexico",
            id: "0053",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "ZMNHVD3", id: "0053", name: "Identifier", type: "0001" },
          {
            text:
              "•\tConnect module to power supply (with \ntemperature sensor connected - if purchased),\n•\tenable add/remove mode on main controller\n•\tauto-inclusion (works for about 5 seconds after connected to power supply) or\n•\tpress service button S for more than 2 second or\n•\tpress push button I1 three times within 3s (3 times change switch state within 3 seconds).\n\nNOTE1: For auto-inclusion procedure, first set main controller into inclusion mode and then connect module to power supply.\nNOTE2: When connecting temperature sensor to module that has already been included, you have to exclude module first. Switch off power supply, connect the sensor and re-include the module.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2196/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2216/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2241/xml",
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
            label: "Input 1 type",
            max: "5",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "NOTE: After parameter change to value 3, 4 or 5 first exclude module (without setting parameters to default value) then wait at least 30s and then re include the module!",
            Item: [
              { label: "Mono-stable switch", value: "0" },
              { label: "Bi-stable switch", value: "1" },
              { label: "Potentiometer", value: "2" },
              { label: "Temperature sensor", value: "3" },
              { label: "Illumination sensor", value: "4" },
              { label: "General purpose sensor", value: "5" },
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
            index: "11",
            instance: "1",
            label: "Automatic turning off output after set time",
            max: "32535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "0 => Auto OFF disabled. 1 - 32535  => 1 second (0,01s) - 32535 seconds (325,35s). Auto OFF enabled with define time, step is 1s or 10ms according to parameter 15. Default value 0",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Automatic turning on output after set time",
            max: "32535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "0 - Auto OFF disabled. 1 - 32535  => 1 second (0,01s) - 32535 seconds (325,35s). Auto ON enabled with define time, step is 1s or 10ms according to parameter 15. Default value 0",
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Double click function",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Saving the state of the device after a power failure",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Saves state before power failure", value: "0" },
              {
                label: "After a power failure, it returns to off position",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "52",
            instance: "1",
            label: "Auto or manual selection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\tThis parameter is influencing on the software only when the value of parameter number 1 is set to value 3, 4 or 5.\n\t\t\tIn manual mode regulation (how the input influence on output) is disabled.\n\t\t\t",
            Item: [
              { label: "Manual", value: "0" },
              { label: "Auto", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "53",
            instance: "1",
            label: "PID value inside deadband",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\tNOTE: When ZERO PID inside deadband is forced to zero. \n\t\t\tLast value means that PID remains on same level as was before entering into deadband.\n\t\t\t",
            Item: [
              { label: "Zero", value: "0" },
              { label: "Last value", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "54",
            instance: "1",
            label: "PID deadband",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "1",
            Help:
              "\n\t\t\t0 to 100 => 0 to 100%, step is 1%. \n\t\t\tDefault value 1.\n\t\t\tNOTE: This parameter defines the zone where PID is not active. If the temperature difference between actual and setpoint is bigger than PID deadband, then the PID will start to regulate the system, otherwise the PID is zero or fixed.\n\t\t\t",
          },
          {
            genre: "config",
            index: "55",
            instance: "1",
            label: "- Integral sampling time",
            max: "127",
            min: "0",
            size: "1",
            type: "byte",
            units: "seconde",
            value: "5",
            Help:
              "\n\t\t\t0 to 127 => 0 to 127s, step is 1s. \n\t\t\tDefault value 1.\n\t\t\tParameter defines the time between samples. On each sample the controller capture difference between SP-act.\n\t\t\t",
          },
          {
            genre: "config",
            index: "56",
            instance: "1",
            label: "P parameter",
            max: "1000",
            min: "0",
            type: "short",
            value: "100",
            Help:
              "\n\t\t\t0 to 1000, step is 1. \n\t\t\tDefault value 100.\n\t\t\t",
          },
          {
            genre: "config",
            index: "57",
            instance: "1",
            label: "I parameter",
            max: "1000",
            min: "0",
            type: "short",
            value: "1",
            Help:
              "\n\t\t\t0 to 1000, step is 1. \n\t\t\tDefault value 1.\n\t\t\t",
          },
          {
            genre: "config",
            index: "58",
            instance: "1",
            label: "D parameter",
            max: "1000",
            min: "0",
            type: "short",
            value: "1",
            Help:
              "\n\t\t\t0 to 1000, step is 1. \n\t\t\tDefault value 1.\n\t\t\t",
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
          {
            genre: "config",
            index: "140",
            instance: "1",
            label: "Input I1 Sensor reporting",
            max: "10000",
            min: "0",
            type: "short",
            value: "5",
            Help:
              "\n\t\t\tIf analogue sensor is connected, module reports measured value on change defined by this parameter.\n\t\t\t0 - Reporting disabled.\n\t\t\t1 to 10000, step is 0.1. \t\t\t\n\t\t\tDefault value 5 => 0.5C.\n            ",
          },
          {
            genre: "config",
            index: "141",
            instance: "1",
            label: "1 Input I1 0-10V reporting threshold",
            max: "100",
            min: "0",
            type: "byte",
            value: "5",
            Help:
              "Parameter is associated with Association group No. 2.\n\t\t\tBelow this value, the Association No. 2 will report Basic Set 0xFF and above this value will report Basic Set 0xFF.\n\t\t\tBasic Set is reported only, when the input value changes for more than 10% (1V). \n\t\t\tDefault setting: 5 (0.5V)\n\t\t\t1 to 100 => (0,1 to 10V) \n            ",
          },
          {
            genre: "config",
            index: "143",
            instance: "1",
            label: "Minimum sensor range value",
            max: "20000",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "\n\t\t\tValue that must correspond to minimum sensor range value.\n\t\t\tValid only if parameter 1 is set to values 3, 4 or 5).\n\t\t\tdefault value 0 = 0.0C / 0Lux / 0.0%rh\n\t\t\t0 to 10000 => value from 0 to 1000 (resolution 0,1)\n\t\t\t10001 to 20000 => value from -0,1 to -1000 (resolution 0,1)\n\t\t\tNOTE: Minimum value must not be higher than maximum value!\n            ",
          },
          {
            genre: "config",
            index: "144",
            instance: "1",
            label: "Maximum sensor range value",
            max: "20000",
            min: "0",
            type: "short",
            value: "1000",
            Help:
              "\n\t\t\tValue that must correspond to maximum sensor range value.\n\t\t\tValid only if parameter 1 is set to values 3, 4 or 5).\n\t\t\tdefault value 1000 = 100.0C / 100Lux / 100.0%rh\n\t\t\t0 to 10000 => value from 0 to 1000 (resolution 0,1)\n\t\t\t10001 to 20000 => value from -0,1 to -1000 (resolution 0,1)\n\t\t\tNOTE: Maximum value must not be lower than minimum value!\n            ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "6",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label: "Basic on/off of the input I1 state",
                max_associations: "16",
              },
              { index: "3", label: "Level change I1", max_associations: "16" },
              {
                index: "4",
                label: "Multilevel set of the Flush Dimmer",
                max_associations: "16",
              },
              {
                index: "5",
                label: "Multilevel sensor report analogue sensor",
                max_associations: "16",
              },
              {
                index: "6",
                label: "Multilevel sensor report temperature sensor",
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
