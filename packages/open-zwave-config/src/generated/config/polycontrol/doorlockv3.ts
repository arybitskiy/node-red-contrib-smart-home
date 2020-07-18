import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 15,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010E:0001:0009",
            name: "OzwInfoPage",
          },
          { text: "images/polycontrol/doorlockv3.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3340/",
            id: "0001",
            name: "ZWProductPage",
            type: "0009",
          },
          { text: "Danalock V3-BTZU-IL", name: "Name" },
          {
            text:
              "1. Set the controller in inclusion mode\n2. Push the switch once.\n3. Wait 5 seconds.",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Set the controller in exclusion mode\n2. Push the switch once.\n3. Wait 5 seconds.",
            name: "ExclusionDescription",
          },
          {
            text: "Danalock V3-BTZU-IL",
            id: "0001",
            name: "Identifier",
            type: "0009",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3340/Danalock_V3_Product_manual_Z_Wave_V_0.9.4.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The Danalock can be set to factory settings by pushing the switch ten times. Please use this procedure only when the primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "CEPT (Europe) / U.S. / Canada / Mexico / Australia / New Zealand / Japan / Australia / New Zealand / CEPT (Europe) / U.S. / Canada / Mexico / Australia / New Zealand / Japan / Brazil / South Korea / Russia / Israel",
            id: "0001",
            name: "FrequencyName",
            type: "0009",
          },
          {
            text:
              "Danalock supports:\n- S0/S2 Z-Wave Security\n- Bluetooth Smart \n- Twist Assist\n- Auto Lock\n- Hold And Release\n- Back To Back",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2556/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2601/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2629/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2630/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2644/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3217/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 8,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3295/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 9,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3311/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 10,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3312/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 11,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3337/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 12,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3338/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 13,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3339/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 14,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3340/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 15,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Twist Assist",
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
            index: "2",
            instance: "1",
            label: "Hold and Release",
            max: "2147483647",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "0",
            Help:
              "\n                0 Disable.\n                1 to 2147483647 Enable, time in seconds.\n            ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Block to Block",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "BLE Temporary Allowed",
            max: "2147483647",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "0",
            Help:
              "\n                0 Disable.\n                1 to 2147483647 Enable, time in seconds.\n            ",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "BLE Always Allowed",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Autolock",
            max: "2147483647",
            min: "0",
            size: "4",
            type: "int",
            units: "seconds",
            value: "0",
            Help:
              "\n                0 Disable.\n                1 to 2147483647 Enable, time in seconds.\n            ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;
