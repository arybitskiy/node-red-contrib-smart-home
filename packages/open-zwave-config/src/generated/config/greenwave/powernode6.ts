import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0099:0004:0003",
            name: "OzwInfoPage",
          },
          { text: "images/greenwave/powernode6.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/590/",
            id: "0004",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "http://www.greenwavereality.com/solutions/energymgmt/",
            name: "ProductPage",
          },
          {
            text:
              "Australia / New Zealand / CEPT (Europe) / CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0004",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "The PowerNode 6-Port allows users to connect up to 6 appliances, making them smart, energy conscious and controllable. Our patent-pending DeviceDNA technology instantly recognizes the device upon being plugged into the PowerNode, to facilitate identification of your devices.",
            name: "Description",
          },
          { text: "Multi socket PowerNode US", name: "Name" },
          {
            text: "MP220-B/NP222-B",
            id: "0004",
            name: "Identifier",
            type: "0003",
          },
          {
            text: "http://www.greenwavereality.com/about/contact/",
            name: "ProductSupport",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/54/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/56/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/57/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/590/xml",
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
              "Consumer variation required to send notification.\n\t  From 1 to 100, default 10",
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
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
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
              { index: "3", label: "Power level", max_associations: "1" },
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
