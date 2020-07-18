import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0371:00bd:0004",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw189.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3616",
            id: "0371",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text: "CEPT (Europe)",
            id: "0371",
            name: "FrequencyName",
            type: "0004",
          },
          { text: "ZW189-C", id: "0371", name: "Identifier", type: "0004" },
          {
            text: "https://products.z-wavealliance.org/products/3616",
            id: "0371",
            name: "ZWProductPage",
            type: "0104",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0371",
            name: "FrequencyName",
            type: "0104",
          },
          { text: "ZW189-A", id: "0371", name: "Identifier", type: "0104" },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, press  the Z-Wave Button on Range Extender 7.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Aeotec Range Extender 7 is a Z-Wave mesh network repeater which can extend the range of communication between Z-Wave products and assist other devices to reach each other in your Z-Wave network.\n        The Range Extender can also communicate securely via AES 128 wireless Z-Wave commands and supports Over-The-Air (OTA) firmware upgrades.",
            name: "Description",
          },
          { text: "Range Extender 7", name: "Name" },
          {
            text:
              "Press and hold the Z-Wave Button for 20 seconds and then release it.\n        Use this procedure only in the event that your primary network controller is missing or inoperable.",
            name: "ResetDescription",
          },
          { name: "ProductManual" },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, press the Z-Wave Button on Range Extender 7.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial version",
                author: "Jean-Francois Auger - nechry@gmail.com",
                date: "05 nov 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
