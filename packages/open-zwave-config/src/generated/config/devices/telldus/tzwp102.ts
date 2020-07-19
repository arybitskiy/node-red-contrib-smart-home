import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0176:0003:0003",
            name: "OzwInfoPage",
          },
          { text: "images/telldus/tzwp102.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2892/",
            id: "0003",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "TZWP-102", id: "0003", name: "Identifier", type: "0003" },
          {
            text: "CEPT (Europe)",
            id: "0003",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "Plug-in Switch Mini", name: "Name" },
          {
            text:
              "1.\tSet the Z-Wave network main controller into removing mode.\n2.\tShort press Z-button twice.\n3.\tThe LED keep blink to the end of remove exclusion, If the remove for exclusion is successful, The LED will keep slow flash, Otherwise, LED will be in power indication mode.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2892/TZWP-102_technical-manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Reset Smart Plug to factory Default:\n1.\tMake sure that the Smart Plug has been connected to the power supply.\n2.\tPress and hold the Z-button for 5 seconds.\n3.\tIf holding time is more than one second, the LED will blink faster and faster. If holding time is more than 5 seconds, the LED will be solid for 3 seconds to indicate that the resetting is successful. Otherwise, repeat step 2.\n\n Use this procedure only in the event that the network primary controller missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "1.\tSet the Z-Wave network main controller into learning mode.\n2.\tShort press the Z-button twice\n3.\tThe LED keep blink to the end of add inclusion, If the add for inclusion is successful, LED will turn on within 2 seconds and Then will be in power indication mode, Otherwise, The LED will keep slow flash.",
            name: "InclusionDescription",
          },
          {
            text:
              "Smart Plug can be included and operated in any Z-Wave network with other Z-Wave certified devices from other manufacturers and/or other applications. All non-battery operated nodes within the network will act as repeaters regardless of vendor to increase reliability of the network.\nSmart Plug is also a security Z-Wave device and supports the Over The Air (OTA) feature for the product’s firmware upgrade.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2892/xml",
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
            index: "1",
            label: "Overcurrent protection",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                If the current exceeds 16A for more than 5 sec, the load will be switched off. Default 1.\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Remember device status after power failure",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Define how the plug will react after the power supply is back on. Default 0.\n            ",
            Item: [
              { label: "Remember status", value: "0" },
              { label: "Always on", value: "1" },
              { label: "Always off", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Send status in Lifeline when Load status change",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                Smart Plug can send notifications to associated devices in Lifeline when the status of the plug is changed. Default 1.\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Send Basic Report", value: "1" },
              {
                label:
                  "Send Basic Report only when Load status is not changed by Z-Wave Command",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "LED Indicator",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Configure LED mode. Default 0.\n            ",
            Item: [
              { label: "The LED follows the load status", value: "0" },
              {
                label: "When operating plug, the LED is lit for 5 seconds",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "16",
            label: "Send report on change of power consumption (W)",
            max: "2500",
            min: "0",
            size: "2",
            type: "short",
            units: "Watts",
            value: "50",
            Help:
              "\n                This parameter will send a power report automatically if the power value changes of x W (Watts) compared to the last report. Default 50.\n            ",
          },
          {
            genre: "config",
            index: "17",
            label: "Send report on change of power consumption (%)",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n                This parameter will send a power report automatically if the power value changes of x % compared to the last report. Default 10.\n            ",
          },
          {
            genre: "config",
            index: "101",
            label: "Power (W) report interval",
            max: "2678400",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "600",
            Help:
              "\n                This parameter defines the period of sending power reports. Default 600.\n                                0=Disabled, 5-2678400 seconds\n            ",
          },
          {
            genre: "config",
            index: "102",
            label: "Energy (kWh) report interval",
            max: "2678400",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "3600",
            Help:
              "\n                This parameter defines the period of sending energy reports. Default 3600.\n                                0=Disabled, 5-2678400 seconds\n            ",
          },
          {
            genre: "config",
            index: "103",
            label: "Voltage (V) report interval",
            max: "2678400",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "0",
            Help:
              "\n                This parameter defines the period of sending voltage reports. Default 0.\n                                0=Disabled, 5-2678400 seconds\n            ",
          },
          {
            genre: "config",
            index: "104",
            label: "Current (A) report interval",
            max: "2678400",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "0",
            Help:
              "\n                This parameter defines the period of sending current reports. Default 0.\n                                0=Disabled, 5-2678400 seconds\n            ",
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
