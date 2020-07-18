import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          { text: "images/oomi/ft118.png", name: "ProductPic" },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, press  the Z-Wave Button on Range Extender 6.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Oomi Range Extender is a Z-Wave mesh network repeater which can extend the range of communication between Z-Wave products and assist other devices to reach each other in your Z-Wave network. Clone of Aeotec ZW117 extender 6.\nThe Range Extender can also communicate securely via AES 128 wireless Z-Wave commands and supports Over-The-Air (OTA) firmware upgrades.",
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
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, press the Z-Wave Button on Range Extender 6.",
            name: "InclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0076",
            name: "FrequencyName",
            type: "0004",
          },
          { text: "FT118-C15", id: "0076", name: "Identifier", type: "0004" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial version, cloned from Aeotec ZW117 xml",
                author: "Jeff Thompson",
                date: "27 April 2020",
                revision: 1,
              },
              {
                text: "Add Product Pic",
                author: "Justin Hammond",
                date: "24 June 2020",
                revision: 2,
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
