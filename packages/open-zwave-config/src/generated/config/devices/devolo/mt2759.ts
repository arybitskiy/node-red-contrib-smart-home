import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0175:0052:0002",
            name: "OzwInfoPage",
          },
          { text: "images/devolo/mt2759.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2645/",
            id: "0052",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "REMOVAL FROM A ZWAVE NETWORK (Z-WAVE EXCLUSION)\n\n1. Connect the device to the power supply\n2. Make sure the device is within direct range of your Z-Wave gateway (hub) or use a hand-held Z-Wave remote to perform exclusion \n3. Enable add/remove mode on your Z-Wave gateway (hub)\n4. Toggle the switch connected to the I1 terminal 3 times within 5 seconds\nOR\nIf the device is powered by 24 V SELV supply, press and hold the S (Service) button between 2 and 6 seconds\n5. The device will be removed from your network but any custom configuration parameters will not be erased",
            name: "ExclusionDescription",
          },
          {
            text:
              "FACTORY RESET\n\n1. Connect the device to the power supply\n2. Within the first minute (60 seconds) the device is connected to the power supply, toggle the switch connected to the I1 terminal 5 times within 5 seconds (5 times change switch state)\nOR\nIf the device is powered by 24 V SELV supply, press and hold the S (Service) button for more than 6 seconds\n\n*By resetting the device, all custom parameters previously set on the device will return to their default values, and the owner ID will be deleted. Use this reset procedure only when the main gateway (hub) is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/2645/Manual_Devolo_HCswitch_FM.pdf",
            name: "ProductManual",
          },
          { text: "MT2759", id: "0052", name: "Identifier", type: "0002" },
          { text: "Home Control Switch FM", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0052",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "AUTOMATICALLY ADDING THE DEVICE TO A Z-WAVE NETWORK (AUTO INCLUSION) \n\n1. Enable add/remove mode on your Z-Wave gateway (hub) \n2. Connect the device to the power supply (with the temperature sensor already connected – sold separately*).\n3. Auto-inclusion will be initiated within 5 seconds of connection to the power supply and the device will automatically enrol in your network\n\nMANUALLY ADDING THE DEVICE TO A Z-WAVE NETWORK (MANUAL INCLUSION)\n\n1. Enable add/remove mode on your Z-Wave gateway (hub) \n2. Connect the device to the power supply (with the temperature sensor already connected*) \n3. Toggle the switch connected to the I1 terminal 3 times within 5 seconds \nOR\nIf the device is powered by 24 V SELV supply, press and hold the S (Service) button between 2 and 6 seconds\n4. A new multi-channel device will appear on your dashboard\n*If connecting the temperature sensor, switch off the power supply and make sure the device is excluded from your network BEFORE connecting the sensor.\n\n\n*Make sure the device is excluded from your network before connecting the temperature sensor. Switch off the power supply, connect the temperature sensor, and re-include the device to your network.",
            name: "InclusionDescription",
          },
          {
            text:
              "The Switch FM controls on/off function for one electrical device. It measures power consumption of the connected device, and can be paired with a digital temperature sensor (sold separately). It supports push-button/momentary switches and toggle switches (default).\n\nThe connection of a digital temperature sensor means you can create complex scenes and control any device relative to a set temperature range. The Devolo Switch FM also acts as a Z-Wave repeater to improve the range and stability of the Z-Wave network.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Version - Copied from qubino/ZMNHADx.xml",
                author: "github.com/nicoh88",
                date: "19 May 2020",
                revision: 1,
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
            index: "3",
            instance: "1",
            label: "Input 3 contact type",
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
              "Switch FM module responds to commands ALL ON / ALL OFF that may be sent by the main controller or by other controller belonging to the system.",
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
            type: "short",
            value: "0",
            Help:
              "0 => Auto OFF disabled. 1 - 32535  => 1 second (0,01s) - 32535 seconds (325,35s). Auto OFF enabled with define time, step is 1s or 10ms according to parameter 15. Default value 0",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Automatic turning on relay after set time",
            max: "32535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "0 - Auto OFF disabled. 1 - 32535  => 1 second (0,01s) - 32535 seconds (325,35s). Auto ON enabled with define time, step is 1s or 10ms according to parameter 15. Default value 0",
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
                  "Switch FM module saves its state before power failure (it returns to the last position saved before a power failure)",
                value: "0",
              },
              {
                label:
                  "Switch FM module does not save the state after a power failure, it returns to off position.",
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
            value: "10",
            Help:
              "Set value from 0 - 100 (0%- 100%). 0 = Reporting Disabled. 1 - 100 = 1% - 100% and reporting enabled. Power report is send (push) only when actual power in Watts in real time change for more than set percentage comparing to previous actual power in Watts, step is 1%. Default value 10%",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Power reporting in Watts by time interval",
            max: "32535",
            min: "0",
            type: "short",
            value: "300",
            Help:
              "Set value means time interval (0 - 32535) in seconds, when power report is send. 0 = Reporting Disabled. 1 - 32535 = 1 second - 32535 seconds and reporting enabled. Power report is send with time interval set by entered value. Default value 300 (power report in Watts is send each 300s)",
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
            index: "100",
            instance: "1",
            label:
              "Enable / Disable Endpoints I2 or select notification type and event",
            max: "9",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
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
            index: "101",
            instance: "1",
            label:
              "Enable / Disable Endpoints I3 or select notification type and event",
            max: "9",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Endpoint, I3 disabled", value: "0" },
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
        id: "142",
        Compatibility: [{ ForceInstances: [false] }],
        Associations: [
          {
            num_groups: "9",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                auto: "true",
                index: "2",
                label: "basic on/off (Output Q)",
                max_associations: "16",
              },
              {
                index: "3",
                label: "Input I2 basic report",
                max_associations: "16",
              },
              {
                index: "4",
                label: "Input I2 notification report",
                max_associations: "16",
              },
              {
                index: "5",
                label: "Input I2 binary sensor report",
                max_associations: "16",
              },
              {
                index: "6",
                label: "Input I3 basic report",
                max_associations: "16",
              },
              {
                index: "7",
                label: "Input I3 notification report",
                max_associations: "16",
              },
              {
                index: "8",
                label: "Input I3 binary sensor report",
                max_associations: "16",
              },
              {
                auto: "true",
                index: "9",
                label: "Multilevel sensor report",
                max_associations: "16",
              },
            ],
          },
        ],
      },
      {
        id: "96",
        Compatibility: [{ MapRootToEndpoint: [true] }],
        Instance: [
          { index: "1", label: "Load" },
          { index: "2", label: "i2" },
          { index: "3", label: "i3" },
          { index: "4", label: "Temp Sensor" },
        ],
      },
      { action: "add", id: "113", Compatibility: [{ GetSupported: [false] }] },
    ],
  },
};

export default config;
