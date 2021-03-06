import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/031E:0001:0007",
            name: "OzwInfoPage",
          },
          { text: "images/inovelli/lzw40.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3657",
            id: "0001",
            name: "ZWProductPage",
            type: "0007",
          },
          {
            text:
              "https://inovelli.com/shop/z-wave-smart-bulbs/z-wave-smart-bulb/",
            name: "ProductPage",
          },
          {
            text:
              "https://inovelli.com/shop/z-wave-smart-bulbs/z-wave-smart-bulb/",
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
            type: "0007",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=product_documents/3657/LZW40%20-%20Manual%20(Compressed).pdf",
            name: "ProductManual",
          },
          {
            text:
              "You may power on/off the bulb 6x (between 0.5-2 seconds each time) until the bulb factory resets.",
            name: "ResetDescription",
          },
          {
            text:
              "With 806 lumens and smooth dimming, this bulb has it all. Best part? It's powered by Z-Wave Plus technology. Imagine walking into a room, tapping a switch (hopefully Inovelli) and your ilumin lights come on to a beautiful movie scene. Or as you're winding down for the night, the lights gradually dim off as you drift to sleep. These are some of the many things you can do with smart bulbs and we're excited to be able to share them with you.",
            name: "Description",
          },
          { text: "LZW40 Dimmable Bulb", name: "Name" },
          { text: "LZW40", id: "0001", name: "Identifier", type: "0007" },
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
            ],
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
