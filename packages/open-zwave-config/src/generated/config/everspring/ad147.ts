import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0003:0003",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/ad147.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1527/",
            id: "0003",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "1. Put the Z-Wave Controller into exclusion mode.\n2. Press the link key three times within 1.5 seconds to put the unit into exclusion mode.",
            name: "ExclusionDescription",
          },
          {
            text:
              "1. Put the Z-Wave Controller into inclusion mode.\n2. Press the link key three times within 1.5 seconds to put the unit into inclusion mode.",
            name: "InclusionDescription",
          },
          { text: "wireless dimmer plug", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0003",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1527/Manual - AD147_20151007-A501112259R01.pdf",
            name: "ProductManual",
          },
          { text: "AD147-2", id: "0003", name: "Identifier", type: "0003" },
          {
            text:
              "1. Press the link key three times within 1.5 seconds to put the unit into exclusion mode.\n2. Within 1 second of step 1, press link key again and hold it until LED is off (about 5 seconds).\n3. Node ID is excluded.  The device reverts to factory default state and will be in auto-inclusion mode for 4 minutes.\n4. Use this procedure only in the event that the network primary controller is missing, or otherwise inoperable",
            name: "ResetDescription",
          },
          { text: "NR", name: "WakeupDescription" },
          {
            text:
              "The mini Dimmer Plug is designed to control the on/off status of lighting and appliance load in your house. The unit also provides dimmer function which is only applicable to light bulbs. At 220-240V voltage, this Dimmer Plug can support connected load of 6W - 250W.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1065/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1527/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 4,
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
            label: "Basic Set Command value",
            max: "255",
            min: "0",
            type: "short",
            units: "",
            value: "255",
            Help:
              "\n\t0 is off. 1 to 99 sets output level at specified value. \n255 sets output level at last memorized level\n      ",
          },
          {
            genre: "config",
            index: "2",
            label: "Delay Time",
            max: "25",
            min: "3",
            type: "byte",
            units: "seconds",
            value: "3",
            Help: "\n\tDelaying time to report to Group 1\n      ",
          },
          {
            genre: "config",
            index: "3",
            label: "Last Status",
            max: "1",
            min: "0",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "\n\tRemember the last status: 0 (do not remember) | 1 (remember)\n      ",
          },
          {
            genre: "config",
            index: "4",
            label: "Output Mode",
            max: "1",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help: "\n\tOutput mode setting: 0 (dimming) | 1 (on/off)\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Reports", max_associations: "1" },
              { index: "2", label: "Basic", max_associations: "4" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
