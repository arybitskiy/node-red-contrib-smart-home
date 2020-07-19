import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0075:0104",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw117.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1966/",
            id: "0075",
            name: "ZWProductPage",
            type: "0104",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0075",
            name: "FrequencyName",
            type: "0104",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, press  the Z-Wave Button on Range Extender 6.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Aeotec Range Extender is a Z-Wave mesh network repeater which can extend the range of communication between Z-Wave products and assist other devices to reach each other in your Z-Wave network. \nThe Range Extender can also communicate securely via AES 128 wireless Z-Wave commands and supports Over-The-Air (OTA) firmware upgrades.",
            name: "Description",
          },
          { text: "Range Extender 6", name: "Name" },
          {
            text:
              "Press and hold the Z-Wave Button for 20 seconds and then release it.\nUse this procedure only in the event that your primary network controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1998/Range Extender 6 manual.pdf",
            name: "ProductManual",
          },
          { text: "ZW117-A01", id: "0075", name: "Identifier", type: "0104" },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, press the Z-Wave Button on Range Extender 6.",
            name: "InclusionDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/1994/",
            id: "0075",
            name: "ZWProductPage",
            type: "0204",
          },
          { text: "ZW117-B21", id: "0075", name: "Identifier", type: "0204" },
          {
            text: "Australia / New Zealand",
            id: "0075",
            name: "FrequencyName",
            type: "0204",
          },
          {
            text: "https://products.z-wavealliance.org/products/1998/",
            id: "0075",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text: "CEPT (Europe)",
            id: "0075",
            name: "FrequencyName",
            type: "0004",
          },
          { text: "ZW117-C15", id: "0075", name: "Identifier", type: "0004" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1966/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1994/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1998/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 5,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "82",
            instance: "1",
            label: "LED when the Range Extender relays Z-Wave message",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Set the default status of the LED when the Range Extender relays Z-Wave message.",
            Item: [
              { label: "On for 2 seconds", value: "0" },
              { label: "Off", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "200",
            label: "Partner ID",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Partner ID",
            Item: [
              { label: "Aeon Labs Standard (Default)", value: "0" },
              { label: "Others", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "252",
            label: "Configuration Locked",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Enable/disable Configuration Locked",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "254",
            label: "Device tag",
            max: "65535",
            min: "0",
            type: "short",
            units: "",
            value: "0",
            Help: "Device tag.",
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
