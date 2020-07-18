import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:001D:0008",
            name: "OzwInfoPage",
          },
          { text: "images/philio/psr03-1b.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1176/",
            id: "001D",
            name: "ZWProductPage",
            type: "0008",
          },
          {
            text:
              "1. Have Z-Wave ™  Controller entered remove mode.\n2. Hold down the central key, then press the top-right \nkey three times within 1.5 seconds to enter the \nremove mode.\nNode ID has been excluded.",
            name: "ExclusionDescription",
          },
          { text: "PSR03", id: "001D", name: "Identifier", type: "0008" },
          {
            text:
              "Notice: Use this procedure only in the event that the primary controller is lost or otherwise inoperable.\n1. Hold down the central key, then press the top-right key four times within 1.5 seconds and do not release the top-right key in the 4 th  pressed, and the LED will light ON.\n2. After 3 seconds the LED will turn OFF, after that within 2 seconds, release the keys. If successful, the LED will light ON one second. Otherwise, the LED will flash once.\n3. IDs are remove and all settings will reset to factory \ndefault.",
            name: "ResetDescription",
          },
          { text: "Remote", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "001D",
            name: "FrequencyName",
            type: "0008",
          },
          {
            text:
              "The Remote PSR03 is a simple control can control AV device through Z-Wave-to-IR extender, and it can also controls 8 lighting groups ON/OFF via basic set, based on Z-Wave™  technology.\nIt is a Z-Wave™ plus product, it supports the security, OTA... Those newest features of the  Z-Wave™  technology.  Z-Wave™ is a wireless communication protocol designed for home automation, specifically to remotely control   applications in residential and light commercial environments. The technology uses a low-power RF radio embedded or retrofitted into home electronics devices and systems, such as lighting, home access control, entertainment systems and household appliances.",
            name: "Description",
          },
          {
            text:
              "After the device adding to the network, it will wake-up once per day in default. When it wake-up it will broadcast the “Wake Up Notification” message  to  the  network,  and  wake-up  10  seconds  for  receive  the setting commands. The wake-up interval minimum setting is 30 minutes, and maximum setting is 120 hours. And the interval step is 30 minutes. If the user want to wake-up the device immediately, please press the button once. The device will wake-up 10 seconds.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1176/PSR03_Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Have Z-Wave TM  Controller entered add mode.\n2. Hold down the central key, then press the top-right key three times within 1.5 seconds to enter the add mode.\n3. After add successful, the device will wake to receive the setting command from Z-Wave ™ Controller about 20 seconds.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1176/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
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
            index: "2",
            label: "Basic Set Level",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "255",
            Help:
              "\n                Setting the BASIC command value to turn on the light.\n                The 0xFF(-1) means turn on the light.\n                For dimmer equipment 1 to 99 means the light strength.\n                0 means turn off the light.\n            ",
          },
          {
            genre: "config",
            index: "7",
            label: "Customer function",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Customer function switch, using bit control.\n            ",
            Item: [
              { label: "Switch AV control", value: "0" },
              { label: "Lighting group control", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "10",
            label: "Auto Report Battery Time",
            max: "127",
            min: "0",
            type: "short",
            value: "12",
            Help:
              "\n                The interval time for auto report the battery level.\n                0 means turn off auto report battery.\n                Each tick means 30 minutes.\n                The default value is 12(6 hours).\n            ",
          },
          {
            genre: "config",
            index: "82",
            label: "Association Group 2 Basic Set Level",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n                Setting the BASIC command value to turn on the light in the association group 2.\n                0 means using the value of configuration 2 to set.\n            ",
          },
          {
            genre: "config",
            index: "83",
            label: "Association Group 3 Basic Set Level",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n                Setting the BASIC command value to turn on the light in the association group 3.\n                0 means using the value of configuration 2 to set.\n            ",
          },
          {
            genre: "config",
            index: "84",
            label: "Association Group 4 Basic Set Level",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n                Setting the BASIC command value to turn on the light in the association group 4.\n                0 means using the value of configuration 2 to set.\n            ",
          },
          {
            genre: "config",
            index: "85",
            label: "Association Group 5 Basic Set Level",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n                Setting the BASIC command value to turn on the light in the association group 5.\n                0 means using the value of configuration 2 to set.\n            ",
          },
          {
            genre: "config",
            index: "86",
            label: "Association Group 6 Basic Set Level",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n                Setting the BASIC command value to turn on the light in the association group 6.\n                0 means using the value of configuration 2 to set.\n            ",
          },
          {
            genre: "config",
            index: "87",
            label: "Association Group 7 Basic Set Level",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n                Setting the BASIC command value to turn on the light in the association group 7.\n                0 means using the value of configuration 2 to set.\n            ",
          },
          {
            genre: "config",
            index: "88",
            label: "Association Group 8 Basic Set Level",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n                Setting the BASIC command value to turn on the light in the association group 8.\n                0 means using the value of configuration 2 to set.\n            ",
          },
          {
            genre: "config",
            index: "89",
            label: "Association Group 9 Basic Set Level",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n                Setting the BASIC command value to turn on the light in the association group 9.\n                0 means using the value of configuration 2 to set.\n            ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "9",
            Group: [
              {
                index: "1",
                label: "Z-Wave Plus Lifeline",
                max_associations: "4",
              },
              { index: "2", label: "Top-left Key", max_associations: "4" },
              { index: "3", label: "Top-right Key", max_associations: "4" },
              { index: "4", label: "Bottom-left Key", max_associations: "4" },
              { index: "5", label: "Bottom-right Key", max_associations: "4" },
              { index: "6", label: "Top-left Key", max_associations: "4" },
              { index: "7", label: "Top-right Key", max_associations: "4" },
              { index: "8", label: "Bottom-left Key", max_associations: "4" },
              { index: "9", label: "Bottom-right Key", max_associations: "4" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
