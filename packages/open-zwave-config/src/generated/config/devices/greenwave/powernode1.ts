import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0099:0002:0002",
            name: "OzwInfoPage",
          },
          { text: "images/greenwave/powernode1.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/629/",
            id: "0002",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "Single-socket PowerNode, UK.The single port version of the PowerNode, these devices communicate wirelessly to the Gateway, allowing for energy monitoring and device control. Our products come pre-configured to connect to the Gateway with minimal consumer set-up.",
            name: "Description",
          },
          {
            text:
              "CEPT (Europe) / Australia / New Zealand / U.S. / Canada / Mexico / CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "Greenwave Single socket PowerNode UK", name: "Name" },
          {
            text: "http://www.greenwavereality.com/solutions/energymgmt/",
            name: "ProductPage",
          },
          {
            text: "NS210-G-EN/NP210-G-EN",
            id: "0002",
            name: "Identifier",
            type: "0002",
          },
          {
            text: "http://www.greenwavereality.com/solutions/energymgmt/",
            name: "ProductSupport",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/52/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/55/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/58/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/589/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/629/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
            index: "0",
            instance: "1",
            label: "Power delta",
            max: "100",
            min: "1",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "Consumer variation required to send notification.\n        From 1 to 100, default 10",
          },
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "No communication light",
            max: "255",
            min: "1",
            type: "byte",
            value: "2",
            Help:
              "After how many minutes the GreenWave device should start flashing if the controller didn't communicate with this device",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Room color",
            read_only: "true",
            size: "1",
            type: "list",
            Help: "The room color (Corner wheel color) on the GreenWave device",
            Item: [
              { label: "Black (empty)", value: "128" },
              { label: "Green (1)", value: "129" },
              { label: "Dark Blue (2)", value: "130" },
              { label: "Red (3)", value: "131" },
              { label: "Yellow (4)", value: "132" },
              { label: "Purple (5)", value: "133" },
              { label: "Orange (6)", value: "134" },
              { label: "Light Blue (7)", value: "135" },
              { label: "Pink (8)", value: "136" },
              { label: "Locked", value: "137" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Power on relay",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help: "Relais state after a power loss",
            Item: [
              { label: "All OFF", value: "0" },
              { label: "Remember last state", value: "1" },
              { label: "All ON", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "LED on network error",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Enable/Disable the LED on network error",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
        ],
      },
      { action: "remove", id: "113" },
      { action: "remove", id: "135" },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Wheel", max_associations: "1" },
              { index: "2", label: "Relay health", max_associations: "1" },
              {
                auto: "true",
                index: "3",
                label: "Power level",
                max_associations: "1",
              },
              {
                index: "4",
                label: "Overcurrent protection",
                max_associations: "1",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
