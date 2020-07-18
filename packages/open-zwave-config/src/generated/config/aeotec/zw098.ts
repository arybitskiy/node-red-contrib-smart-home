import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 10,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0062:0103",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw098.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1829/",
            id: "0062",
            name: "ZWProductPage",
            type: "0103",
          },
          {
            text:
              "Aeotec LED Bulb is a low-cost Z-Wave LED module which allows control (on/off/dim) with the use of Z-Wave. \nIt’s a bulb has a Smart RGB LED, which can be used to add colour to your home. The bulb has 5 main colour channels available for you to adjust: Red, Green, Blue, Warm White and Cold White. You can configure its colour according to your favour.\nThe LED Bulb is also a security Z-Wave device and supports the Over The Air (OTA) feature for the product’s firmware upgrade.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1851/LED Bulb manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, press the external switch of LED Bulb to turn off and then press the external switch again to turn on it, repeat the operation 3 times.",
            name: "ExclusionDescription",
          },
          { text: "ZW098-A52", id: "0062", name: "Identifier", type: "0103" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0062",
            name: "FrequencyName",
            type: "0103",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, press the external switch of LED Bulb to turn it off and then press the external switch again to turn it on.",
            name: "InclusionDescription",
          },
          { text: "N/A", name: "WakeupDescription" },
          { text: "LED Bulb", name: "Name" },
          {
            text:
              "Turn the controller of Z-Wave network into exclusion mode, press the external switch of LED Bulb to turn off and then press the external switch again to turn on it, repeat the operation 3 times.\nAfter the LED Bulb is excluded from network, it will be reset to factory default state.\nUse this procedure only in the event that your primary network controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/1844/",
            id: "0062",
            name: "ZWProductPage",
            type: "0203",
          },
          {
            text: "Australia / New Zealand",
            id: "0062",
            name: "FrequencyName",
            type: "0203",
          },
          { text: "ZW098-B55", id: "0062", name: "Identifier", type: "0203" },
          {
            text: "https://products.z-wavealliance.org/products/1851/",
            id: "0062",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "CEPT (Europe)",
            id: "0062",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "ZW098-C55", id: "0062", name: "Identifier", type: "0003" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1315/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1368/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1379/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1380/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1594/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1829/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 8,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1844/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 9,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1851/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 10,
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
            label: "State after re-power",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "The Bulb state after re-power on it.",
            Item: [
              { label: "The last state before re-power on", value: "0" },
              { label: "Always On", value: "1" },
              { label: "Always Off", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "32",
            label: "Send out a report when the color is changed",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/disable to send out a report when the color is changed",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Hail CC", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "33",
            label: "Get the Bulb color value",
            max: "4294967295",
            min: "0",
            read_only: "true",
            size: "4",
            type: "int",
            value: "0",
            Help:
              "\n\t\t\tValue 1 = Reserved.\n\t\t\tValue 2 = Red color value.\n\t\t\tValue 3 = Green color value.\n\t\t\tValue 4 = Blue color value.\n\t\t\tNote: This parameter is a get-only parameter\n\t\t\t",
          },
          {
            genre: "config",
            index: "34",
            label: "Use External Switch to turn on/off the bulb",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/disable the function of using External Switch to turn on/off the bulb",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "35",
            label: "Use External Switch to changes the bulb color",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Enable/disable the function of using External Switch to changes the bulb color",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "36",
            label: "Colorful mode",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Reboot/save/exit Colorful mode",
            Item: [
              { label: "Un-reboot Colorful mode", value: "0" },
              { label: "Reboot Colorful mode", value: "1" },
              { label: "Exit Colorful mode", value: "2" },
              {
                label:
                  "Save the current Colorful mode value and then to be exited",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "37",
            label: "Colorful mode configuration",
            max: "4294967295",
            min: "0",
            size: "4",
            type: "int",
            value: "157483008",
            Help:
              "Colorful mode configuration (See https://aeotec.freshdesk.com/helpdesk/attachments/6035749140)",
          },
          {
            genre: "config",
            index: "38",
            label: "Change speed",
            max: "4294967295",
            min: "0",
            size: "4",
            type: "int",
            value: "50332416",
            Help:
              "\n\t\t\tValue 1: the speed from OFF to ON.\n\t\t\tValue 2: the speed from ON to OFF.\n\t\t\tValue 3: pause time of ON.\n\t\t\tValue 4: pause time of OFF.\n\t\t\t",
          },
          {
            genre: "config",
            index: "39",
            label:
              "Color index configuration when the bulb is in Multi color mode",
            max: "4294967295",
            min: "0",
            size: "4",
            type: "int",
            value: "2271560481",
            Help:
              "Color index configuration when the bulb is in Multi color mode (See https://aeotec.freshdesk.com/helpdesk/attachments/6035749140)",
          },
          {
            genre: "config",
            index: "80",
            label: "Send notifications to associated devices (Lifeline)",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "Enable to send notifications to associated devices (Lifeline) when the state of LED Bulb is changed",
            Item: [
              { label: "Nothing", value: "0" },
              { label: "Hail", value: "1" },
              { label: "Basic", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "112",
            label: "Dimmer mode",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable to send notifications to associated devices (Lifeline) when the state of LED Bulb is changed",
            Item: [
              { label: "Parabolic curve", value: "0" },
              { label: "Index curve", value: "1" },
              { label: "(Parabolic + Index)/2", value: "2" },
              { label: "Linear", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "252",
            label: "Lock/Unlock Configuration",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Lock/ unlock all configuration parameters",
            Item: [
              { label: "Unlock", value: "0" },
              { label: "Lock", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "255",
            label: "Reset To Factory Defaults",
            size: "4",
            type: "list",
            value: "1",
            write_only: "true",
            Help: "Reset to factory defaults",
            Item: [
              { label: "Reset to factory default setting", value: "0" },
              { label: "Normal", value: "1" },
              {
                label:
                  "Reset to factory default setting and removed from the z-wave network",
                value: "1431655765",
              },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Retransmit", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
