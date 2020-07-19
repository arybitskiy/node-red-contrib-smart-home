import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0007:0004",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/an180.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1456/",
            id: "0007",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text:
              "1. Put the Z-Wave Controller into inclusion mode.\n2. Press the link key three times within 1.5 seconds to put the unit into inclusion mode.",
            name: "InclusionDescription",
          },
          { text: "AN180-2", id: "0007", name: "Identifier", type: "0004" },
          { text: "on/off mini plug", name: "Name" },
          {
            text:
              "The On/Off Mini Plug is a Z-WaveTM enabled device which is fully compatible with any Z-WaveTM enabled network. Z-WaveTM enabled devices displaying the Z-WaveTM logo can also be used with it regardless of the manufacturer, and ours can also be used in other manufacturer’s Z-WaveTM enabled networks. Inclusion of this unit on other manufacturer’s Wireless Controller menu allows remote operation of the unit and the connected load.\n\nThe On/Off Mini Plug is designed to control the on/off status of appliances load in your house.  At 220-240V voltage, this Plug can support up to 1500W resistive.",
            name: "Description",
          },
          { text: "NR", name: "WakeupDescription" },
          {
            text:
              "1. Press the link key three times within 1.5 seconds to put the unit into exclusion mode.\n2. Within 1 second of step 1, press link key again and hold it until LED is off (about 5 seconds).\n3. Node ID is excluded.  The device reverts to factory default state and will be in auto-inclusion mode for 4 minutes.\n4. Use this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Put the Z-Wave Controller into exclusion mode.\n2. Press the link key three times within 1.5 seconds to put the unit into exclusion mode.",
            name: "ExclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0007",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1456/Manual_AN180_20150901-A501112261R02-rev.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1066/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1456/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
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
            label: "Basic Set",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "255",
            Help: "Basic Set Command value",
          },
          {
            genre: "config",
            index: "2",
            label: "Delay",
            max: "25",
            min: "3",
            size: "2",
            type: "short",
            value: "3",
            Help:
              "\n                The delaying time to report to Group 1\n            ",
          },
          {
            genre: "config",
            index: "3",
            label: "Remember Last",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                Remember the last status on plug\n            ",
            Item: [
              { label: "Do not remember", value: "0" },
              { label: "Remember", value: "1" },
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
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Basic Set", max_associations: "4" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
