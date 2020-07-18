import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0208:0005:0101",
            name: "OzwInfoPage",
          },
          { text: "images/hank/hkzw-so01-smartplug.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1789/",
            id: "0005",
            name: "ZWProductPage",
            type: "0101",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0005",
            name: "FrequencyName",
            type: "0101",
          },
          {
            text:
              "Set the Z-Wave network main controller into remove mode. Triple click the Z-button, the LED will blink slowly, which indicates the inclusion is successful.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Smart Plug is a Z-Wave Switch plugin module specifically used to enable Z-Wave command and control (on/off) of any plug-in tool. It can report wattage consumption or kWh energy usage.Smart Plug is also a security Z-Wave device and supports the Over The Air (OTA) feature for the product’s firmware upgrade.",
            name: "Description",
          },
          { text: "HKZW-SO01", id: "0005", name: "Identifier", type: "0101" },
          {
            text:
              "Press and hold the Z-button for more than 20 seconds, the LED will blink faster and faster when the button is pressed. If holding time more than 20seconds, the LED indicator will be on for 3 seconds then it blinking slowly, which indicates the reseting is successful. Use this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1789/HKZW-SO01_manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Set the Z-Wave network main controller into learning mode. Short press the Z-button, the LED will keep turning on or off, which indicates the inclusion is successful.",
            name: "InclusionDescription",
          },
          { text: "Smart Plug", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1789/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
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
            index: "20",
            instance: "1",
            label: "Overload Protection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Smart Plug keep detecting the load power, once the current exceeds 16.5a for more than 5s, smart plug's relay will turn off",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Device status after power failure",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Define how the plug reacts after the power supply is back on.\n                  0 - Smart Plug memorizes its state after a power failure.\n                  1 - Smart Plug does not memorize its state after a power failure. Connected device will be on after the power supply is reconnected.\n                  2 - Smart Plug does not memorize its state after a power failure. Connected device will be off after the power supply is reconnected.\n            ",
            Item: [
              { label: "Memorize", value: "0" },
              { label: "On", value: "1" },
              { label: "Off", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "Notification when load status change",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n              Smart Plug can send notifications to association device(Group Lifeline) when state of smart plug's load change\n              0 - The function is disabled\n              1 - Send Basic report.\n              2 - Send Basic report only when Load condition is not changed by Z-WAVE Command\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Basic", value: "1" },
              { label: "Basic without Z-WAVE Command", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "27",
            instance: "1",
            label: "Indicator Modes",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "After smart plug being included into a Z-Wave network, the LED in the device will indicator the state of load.\n              0 - The LED will follow the status(on/off) of its load\n              1 - When the state of Switch's load changed, THe LED will follow the status(on/off) of its load, but the red LED will turn off after 5 seconds if there is no any switch action.\n            ",
            Item: [
              { label: "Enabled", value: "0" },
              { label: "Disabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "151",
            instance: "1",
            label: "Threshold of power report",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            units: "W",
            value: "50",
            Help:
              "\n            Power threshold to be interpereted, when the change value of load power exceeds the setting threshold, the smart plug will send meter report to association device(Group Lifeline)\n          ",
          },
          {
            genre: "config",
            index: "152",
            instance: "1",
            label: "Percentage threshold of power report",
            max: "i255",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n            Power percentage threshold to be interpreted, when change value of the load power exceeds the setting threshold, the smart plug will send meter report to association device(Group Lifeline).\n          ",
          },
          {
            genre: "config",
            index: "171",
            instance: "1",
            label: "Power report frequency",
            max: "2678400",
            min: "5",
            size: "4",
            type: "int",
            units: "seconds",
            value: "30",
            Help:
              "\n            The interval of sending power report to association device(Group Lifeline).\n            0 - The function is disabled.\n          ",
          },
          {
            genre: "config",
            index: "172",
            instance: "1",
            label: "Energy report frequency",
            max: "2678400",
            min: "5",
            size: "4",
            type: "int",
            units: "seconds",
            value: "300",
            Help:
              "\n            The interval of sending power report to association device(Group Lifeline).\n            0 - The function is disabled.\n          ",
          },
          {
            genre: "config",
            index: "173",
            instance: "1",
            label: "Voltage report frequency",
            max: "2678400",
            min: "5",
            size: "4",
            type: "int",
            units: "seconds",
            value: "0",
            Help:
              "\n            The interval of sending voltage report to association device(Group Lifeline).\n            0 - The function is disabled.\n          ",
          },
          {
            genre: "config",
            index: "174",
            instance: "1",
            label: "Electricity report frequency",
            max: "2678400",
            min: "5",
            size: "4",
            type: "int",
            units: "seconds",
            value: "0",
            Help:
              "\n            The interval of sending electricity report to association device(Group Lifeline).\n            0 - The function is disabled.\n          ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
