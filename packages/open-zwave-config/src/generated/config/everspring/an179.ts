import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0008:0004",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/an179.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1058/",
            id: "0008",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text:
              "The In-Wall On/Off Module is a Z-Wave enabled device which is fully compatible with any Z-Wave enabled network.  Z-Wave enabled devices displaying the Z-Wave logo can also be used with it regardless of the manufacturer, and ours can also be used in other manufacturer’s Z-Wave enabled networks.  Inclusion of this unit on other manufacturer’s Wireless Controller menu allows remote operation of the unit and the connected load.  Z-Wave node in the system also acts as a repeater, so the RF signal can reach its intended receiver by routing around obstacles and radio dead spots.\n\nThe In-Wall On/Off Module is designed to control the on/off status of lighting and appliances load in your house.  Two sets of dry contacts provide more wiring applications.  For security, the unit can detect overheating and will turn off relay automatically to avoid damage.  At 230V voltage, this module can support up to 2500W resistive, 1200W incandescent, 700W motor, or 320W (40W*8) fluorescent load.",
            name: "Description",
          },
          { text: "NR", name: "WakeupDescription" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1058/Manual_AN179_20140808.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Put the Z-Wave Controller into inclusion mode.\n2. Press the link key three times within 1.5 seconds to put the unit into inclusion mode.",
            name: "InclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0008",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text:
              "1.  Put the Z-Wave Controller into exclusion mode.\n2.  Press the link key three times within 1.5 seconds to put the unit into exclusion mode.",
            name: "ExclusionDescription",
          },
          { text: "In-Wall On/Off Switch Module", name: "Name" },
          { text: "AN179-0", id: "0008", name: "Identifier", type: "0004" },
          {
            text:
              "(This procedure should only be used when the primary controller is no longer operational.)\n1.  Press the link key three times within 1.5 seconds to put the unit into exclusion mode.\n2.  Within 1 second of step 1, press link key again and hold until LED is off (about 5 sec.).\n3.  Node ID is excluded, and the unit is returned to the factory default state.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1058/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
          {
            genre: "config",
            index: "4",
            label: "Switching type",
            max: "1",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n        0: Single Pole Double Throw (1: Toggle switch)\n      ",
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
