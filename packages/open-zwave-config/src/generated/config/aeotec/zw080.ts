import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0050:0104",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw080.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1134/",
            id: "0050",
            name: "ZWProductPage",
            type: "0104",
          },
          {
            text:
              "Press and hold the Action button that you can find on the product's housing for 20 seconds and then release. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          { text: "N/A", name: "WakeupDescription" },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "ExclusionDescription",
          },
          { text: "ZW080-A17", id: "0050", name: "Identifier", type: "0104" },
          {
            text:
              "Aeon Labs Siren Gen5 is an siren Z-Wave device that when an emergency is happening it lets you know. Its 105dB Speaker System is always heard. Its super-bright LED system lights your path even when it’s dark. Siren provides a smart home with the perfect security and safety features that it needs.\nThose security and safety features are matched by smart features. Siren’s speaker system can access 5 different audio alerts, allowing your smart home to pick the alert best suited to the emergency. The speaker system’s volume can also be adjusted so that Siren is perfect for every space in every home.\nIt also act as a repeater that forward Z-Wave command messages to destination nodes if the originating controller is out of range from the destination node.\nBy taking advantage of the Z-Wave mesh network, commands can be routed to their destination via intermediary “listening” Z-Wave products. Products that are Z-Wave certified can be used and communicate with other Z-Wave certified devices.\nAlso a tool that can be programmed, scheduled, controlled and communicated with from anywhere in the world.",
            name: "Description",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, short press the product’s Action button that you can find on the product's housing.",
            name: "InclusionDescription",
          },
          { text: "Siren Gen5", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1141/Siren Gen5 Manual.pdf",
            name: "ProductManual",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0050",
            name: "FrequencyName",
            type: "0104",
          },
          {
            text: "https://products.z-wavealliance.org/products/1136/",
            id: "0050",
            name: "ZWProductPage",
            type: "0004",
          },
          { text: "ZW080-C15", id: "0050", name: "Identifier", type: "0004" },
          {
            text: "CEPT (Europe)",
            id: "0050",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text: "https://products.z-wavealliance.org/products/1141/",
            id: "0050",
            name: "ZWProductPage",
            type: "0204",
          },
          {
            text: "Australia / New Zealand",
            id: "0050",
            name: "FrequencyName",
            type: "0204",
          },
          { text: "ZW080-B21", id: "0050", name: "Identifier", type: "0204" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1134/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1136/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1141/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 6,
              },
            ],
          },
        ],
      },
    ],
    Protocol: [{ refreshonnodeinfoframe: "false" }],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "37",
            label: "Siren sound and Volume",
            size: "2",
            type: "list",
            units: "",
            value: "259",
            Help: "Select the Siren Sound and Volume",
            Item: [
              { label: "Sound 1 - Low Volume", value: "257" },
              { label: "Sound 1 - Mid Volume", value: "258" },
              { label: "Sound 1 - High Volume", value: "259" },
              { label: "Sound 2 - Low Volume", value: "513" },
              { label: "Sound 2 - Mid Volume", value: "514" },
              { label: "Sound 2 - High Volume", value: "515" },
              { label: "Sound 3 - Low Volume", value: "769" },
              { label: "Sound 3 - Mid Volume", value: "770" },
              { label: "Sound 3 - High Volume", value: "771" },
              { label: "Sound 4 - Low Volume", value: "1025" },
              { label: "Sound 4 - Mid Volume", value: "1026" },
              { label: "Sound 4 - High Volume", value: "1027" },
              { label: "Sound 5 - Low Volume", value: "1281" },
              { label: "Sound 5 - Mid Volume", value: "1282" },
              { label: "Sound 5 - High Volume", value: "1283" },
            ],
          },
          {
            genre: "config",
            index: "38",
            label: "Enable/disable the action button",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "Enable/disable to turn off the alarm sound via pressing the Action Button. ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "80",
            label: "Send Notifications",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Enable to send notifications to associated devices (Group 1) when the state of Siren changed",
            Item: [
              { label: "Nothing", value: "0" },
              { label: "Hail", value: "1" },
              { label: "Basic", value: "2" },
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
            Item: [{ label: "Aeon Labs Standard Product", value: "0" }],
          },
          {
            genre: "config",
            index: "252",
            label: "Enable/disable Lock Configuration",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Enable/disable Lock Configuration",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
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
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "LifeLine", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
