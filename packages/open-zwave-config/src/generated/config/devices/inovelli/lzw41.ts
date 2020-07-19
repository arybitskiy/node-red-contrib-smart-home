import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/031E:0001:0006",
            name: "OzwInfoPage",
          },
          { text: "images/inovelli/lzw41.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3614",
            id: "0001",
            name: "ZWProductPage",
            type: "0006",
          },
          {
            text:
              "https://inovelli.com/shop/z-wave-smart-bulbs/z-wave-cct-smart-bulb/",
            name: "ProductPage",
          },
          {
            text:
              "https://inovelli.com/shop/z-wave-smart-bulbs/z-wave-cct-smart-bulb/",
            name: "ProductSupport",
          },
          {
            text:
              "Put your HUB in Exclusion mode and turn the power to the bulb on/off/on.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0006",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=product_documents/3614/LZW41%20Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "You may power on/off the bulb 6x (between 0.5-2 seconds each time) until the bulb factory resets.",
            name: "ResetDescription",
          },
          {
            text:
              "With 806 lumens, tunable white, and smooth dimming, this bulb has it all. Best part? It's powered by Z-Wave Plus technology. Imagine walking into a room, tapping a switch (hopefully Inovelli) and your ilumin lights come on to a beautiful movie scene. Or as you're winding down for the night, switch from cool white to warm and gradually dim off the lights as you drift to sleep. These are some of the many things you can do with smart bulbs and we're excited to be able to share them with you.",
            name: "Description",
          },
          { text: "LZW41 Tunable White Bulb", name: "Name" },
          { text: "LZW41", id: "0001", name: "Identifier", type: "0006" },
          {
            text:
              "Put your HUB in Inclusion mode and turn the power to the bulb on/off/on.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial commit",
                author: "Eric Maycock - ericm@inovelli.com",
                date: "22 Jan 2020",
                revision: 1,
              },
              {
                text: "Fix config parameter numbers",
                author: "Eric Maycock - ericm@inovelli.com",
                date: "22 Jan 2020",
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
            type: "list",
            size: "1",
            index: "2",
            label: "Default State",
            min: "0",
            max: "2",
            value: "0",
            Help:
              "\n      When Power is restored\n      Range: 0-2\n      Default: 0\n      ",
            Item: [
              { value: "0", label: "Previous" },
              { value: "1", label: "On" },
              { value: "2", label: "Off" },
            ],
          },
          {
            genre: "config",
            type: "short",
            size: "2",
            index: "81",
            label: "Color Adjustment (Warm White)",
            min: "1387",
            max: "4999",
            value: "2700",
            Help:
              "\n      Changes the Kelvin from 2700k (1387) to 4999k (4999)\n      Range: 1387-4999\n      Default: 2700\n      ",
          },
          {
            genre: "config",
            type: "short",
            size: "2",
            index: "82",
            label: "Color Adjustment (Cool White)",
            min: "5000",
            max: "6500",
            value: "6500",
            Help:
              "\n      Changes the Kelvin from 5000k (5000) to 6500k (6500)\n      Range: 5000-6500\n      Default: 6500\n      ",
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
