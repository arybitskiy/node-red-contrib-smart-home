import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0081:0102",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw129.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2232/",
            id: "0081",
            name: "ZWProductPage",
            type: "0102",
          },
          {
            text:
              "Press and hold the Action button that you can find on the product's housing for 20 seconds and then release. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2234/Aeon Labs WallMote manual.pdf",
            name: "ProductManual",
          },
          { text: "WallMote", name: "Name" },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Aeotec WallMote is an intelligent Z-Wave remote controller that mounted on a wall. It has 2 touch buttons that you can easily control the Z-Wave devices in your home network via touching, long pressing or sliding the button areas. \nIts surface has a RGB LED to indicate the button actions also accompanied by touch beep and vibration. \nThe WallMote Quad is also a security Z-Wave device and supports Over The Air (OTA) feature for the products firmware upgrade.",
            name: "Description",
          },
          { text: "ZW129-A", id: "0081", name: "Identifier", type: "0102" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0081",
            name: "FrequencyName",
            type: "0102",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "InclusionDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2233/",
            id: "0081",
            name: "ZWProductPage",
            type: "0202",
          },
          {
            text: "Australia / New Zealand",
            id: "0081",
            name: "FrequencyName",
            type: "0202",
          },
          { text: "ZW129-B", id: "0081", name: "Identifier", type: "0202" },
          {
            text: "https://products.z-wavealliance.org/products/2234/",
            id: "0081",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "ZW129-C", id: "0081", name: "Identifier", type: "0002" },
          {
            text: "CEPT (Europe)",
            id: "0081",
            name: "FrequencyName",
            type: "0002",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2232/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2233/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2234/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
              },
              {
                text: "Remove CentralScene from Endpoints - RemoveCC",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "25 Jun 2019",
                revision: 6,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ GetSupported: [false] }] },
      { id: "37", Compatibility: [{ GetSupported: [false] }] },
      { id: "38", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Touch sound",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This will enable or disable the sound effects when you press or touch  the sensing area",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Touch vibration",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This will enable or disable the vibration effects when you press or  touch the sensing area",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Button slide function",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This will enable or disable control by sliding the button area",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Report type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "To configure which report will be sent when pressing the buttons",
            Item: [
              { label: "Send nothing", value: "0" },
              { label: "Send Central Scene Command Notification", value: "1" },
              {
                label:
                  "Send Central Scene Command Notification and Configuration report",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Color when button is pressed",
            type: "int",
            units: "",
            value: "65280",
            Help:
              "\n                To configure which color will be displayed when the button is pressed.\n                Value 1: (msb) Red.\n                Value 2: Green.\n                Value 3: Blue.\n                Value 4: Reserved\n            ",
          },
          {
            genre: "config",
            index: "33",
            label: "Test the LED, buzzer and vibrator",
            read_only: "true",
            type: "int",
            units: "",
            value: "0",
            Help:
              "\n                Get the LED Strip color value\n                Value 1: (msb) Red.\n                Value 2: Green.\n                Value 3: Blue.\n                Value 4: buzzer and vibrator. (1=ON, 0=OFF)\n            ",
          },
          {
            genre: "config",
            index: "39",
            label: "Set the low battery value",
            max: "50",
            min: "10",
            type: "byte",
            units: "%",
            value: "20",
            Help:
              "\n                Set the low battery value.\n                Range: 10% - 50%.",
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
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label: "On/Off control via Button 1",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Dimmer control via Button 1",
                max_associations: "5",
              },
              {
                index: "4",
                label: "On/Off control via Button 2",
                max_associations: "5",
              },
              {
                index: "5",
                label: "Dimmer control via Button 2",
                max_associations: "5",
              },
            ],
          },
        ],
      },
      {
        id: "96",
        Compatibility: [{ RemoveCC: [{ text: "true", index: "91" }] }],
      },
    ],
  },
};

export default config;
