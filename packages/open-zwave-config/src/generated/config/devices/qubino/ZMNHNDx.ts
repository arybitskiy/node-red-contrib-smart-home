import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0159:0053:0002",
            name: "OzwInfoPage",
          },
          { text: "images/qubino/ZMNHNDx.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2536/",
            id: "0053",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "•\tConnect module to power supply \n•\tbring module within maximum 1 meter (3 feet) of the main controller,\n•\tenable add/remove mode on main controller,\n•\tpress service button S for more than 6 second or\n•\tpress push button I1 five times within 3s (5 times change switch state within 3 seconds) in the first 60 seconds after the module is connected to the power supply.\nBy this function all parameters of the module are set to default values and own ID is deleted.\nIf service button S is pressed more than 2 and less than 6 seconds (or if push button I1 is pressed three times within 3s) module is excluded, but configuration parameters are not set to default values.\n\nNOTE: If the module is included with parameters 71 with value different to default and module reset is done, wait at least 30s before next inclusion.\n\nNOTE: Please use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ExclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0053",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "The Qubino Flush Shutter DC is ideal for controlling the 12–24V DC motors of blinds, rollers, shades, venetian blinds and similar sunscreens. You can control it either remotely through the Z-Wave network or through wall switches. It also measures power consumption and supports the connection of a digital temperature sensor.",
            name: "Description",
          },
          {
            text:
              "•\tConnect module to power supply (with \ntemperature sensor connected - if purchased),\n•\tauto-inclusion (works for about 5 seconds after connected to power supply) or\n•\tpress service button S for more than 2 second or\n•\tpress push button I1 three times within 3s (3 times change switch state within 3 seconds).\n\nNOTE1: For auto-inclusion procedure, first set main controller into inclusion mode and then connect module to power supply.\n\nNOTE2: When connecting temperature sensor to module that has already been included, you have to exclude module first. Switch off power supply, connect the sensor and re-include the module.",
            name: "InclusionDescription",
          },
          {
            text:
              "press service button S for more than 6 second or\n•\tpress push button I1 five times within 3s (5 times change switch state within 3 seconds) in the first 60 seconds after the module is connected to the power supply.\nBy this function all parameters of the module are set to default values and own ID is deleted.\nIf service button S is pressed more than 2 and less than 6 seconds (or if push button I1 is pressed three times within 3s) module is excluded, but configuration parameters are not set to default values.\n\nNOTE: Please use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          { text: "Flush Shutter DC", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2536/Qubino_Flush Shutter DC PLUS extended manual_eng_2.2.pdf",
            name: "ProductManual",
          },
          { text: "ZMNHOD1", id: "0053", name: "Identifier", type: "0002" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1336/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2536/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
              },
              {
                text: "Enable MapRootToEndPoint in MultiChannel Class",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "26 Jun 2019",
                revision: 6,
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
            label: "Input 2 contact type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "NO (normaly open) input type", value: "0" },
              { label: "NC (normaly close) input type", value: "1" },
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
              "Flush 1 relay module responds to commands ALL ON / ALL OFF that may be sent by the main controller or by other controller belonging to the system",
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
            label: "Automatic turning off relay after set time",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n\t\t\t0 => Auto OFF disabled. \n\t\t\t1 - 32535  => 1 second (0,01s) - 32535 seconds (325,35s). \n\t\t\tAuto OFF enabled with define time, step is 1s or 10ms according to parameter 15. Default value 0",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Automatic turning on relay after set time",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n\t\t\t0 - Auto OFF disabled. \n\t\t\t1 - 32535  => 1 second (0,01s) - 32535 seconds (325,35s).\n\t\t\tAuto ON enabled with define time, step is 1s or 10ms according to parameter 15. Default value 0",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Automatic turning on/off seconds or milliseconds selection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "seconds", value: "0" },
              { label: "milliseconds", value: "1" },
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
            Help: "",
            Item: [
              {
                label:
                  "Flush 1 relay module saves its state before power failure (it returns to the last position saved before a power failure)",
                value: "0",
              },
              {
                label:
                  "Flush 1 relay module does not save the state after a power failure, it returns to off position.",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "63",
            instance: "1",
            label: "Output switch selection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              {
                label: "When system is turned off the output is 0V (NC)",
                value: "0",
              },
              {
                label:
                  "When system is turned off the output is 230V or 24V (NO)",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "80",
            instance: "1",
            label: "Reporting to controller",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n\t\t\tAvailable from SW version S1 Only \n\t\t\tThis parameter defines if reporting regarding power level, multilevel, etc, are reported to controller or not. \n\t\t\tNOTE: Disabling reporting is recommended in case Z-wave modules communicate in association groups without using main controller.\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "100",
            instance: "1",
            label:
              "Enable / Disable Endpoints I2 or select notification type and event",
            max: "9",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "",
            Item: [
              { label: "Endpoint, I2 disabled", value: "0" },
              {
                label: "Home Security; Motion Detection, unknown location",
                value: "1",
              },
              {
                label:
                  "Carbon Monoxide; Carbon Monoxide detected, unknown location",
                value: "2",
              },
              {
                label:
                  "Carbon Dioxide; Carbon Dioxide detected, unknown location",
                value: "3",
              },
              {
                label: "Water Alarm; Water Leak detected, unknown location",
                value: "4",
              },
              {
                label: "Heat Alarm; Overheat detected, unknown location",
                value: "5",
              },
              {
                label: "Smoke Alarm; Smoke detected, unknown location",
                value: "6",
              },
              { label: "Sensor binary", value: "9" },
            ],
          },
          {
            genre: "config",
            index: "110",
            instance: "1",
            label: "Temperature sensor offset settings",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "32535",
            Help:
              "Set value is added or subtracted to actual measured value by sensor. \n\t\t\tAvailable configuration parameters : default value 32536. 32536  offset is 0.0C. \n\t\t\tFrom 1 to 100 = value from 0.1C to 10.0C is added to actual measured temperature.\n\t\t\tFrom 1001 to 1100 = value from -0.1 C to -10.0 C is subtracted to actual measured temperature.",
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
              "If digital temperature sensor is connected, module reports measured temperature on temperature change defined by this parameter. \n\t\t\tAvailable configuration parameters : 0 = reporting disabled. 1 to 127 = 0,1C to 12,7C, step is 0,1C. Default value is 5 = 0,5C",
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
              {
                index: "2",
                label: "Basic on/off of the output state",
                max_associations: "16",
              },
              {
                index: "3",
                label: "Basic on/off of the input I2 state",
                max_associations: "16",
              },
              {
                index: "4",
                label: "Binary Sensor Report of the input I2 state",
                max_associations: "16",
              },
              {
                index: "5",
                label: "Notification Report of the input I2 state",
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
