import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0058:0101",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw088.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1165/",
            id: "0058",
            name: "ZWProductPage",
            type: "0101",
          },
          {
            text:
              'Press and hold the "Learn" for 3 seconds will trigger sending the Wake up notification command.',
            name: "WakeupDescription",
          },
          {
            text:
              "Short press the “Exclude” button on the Key Fob, it will go into exclusion state and its red LED will blink slowly to wait excluding other slave Z-Wave devices from its network.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Use this procedure only in the event that the primary controller is missing or otherwise inoperable.\n\nPress and hold the “Mode” button and “Learn” button for 20 seconds and then release.",
            name: "ResetDescription",
          },
          {
            text:
              "Key Fob Gen5 is a fully functional Z-wave remote controller, which can include, exclude and control the other Z-Wave certified devices.  It also can be acted a secondary controller in a network.  \n\nIt is a four buttons design. You can use each button to control your home’s Z-Wave devices and build a Z-Wave network for them. \n\nProducts that are Z-Wave certified can be used and communicate with other Z-Wave certified devices.",
            name: "Description",
          },
          { text: "ZW088-A", id: "0058", name: "Identifier", type: "0101" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1178/Instructions - Aeon Labs Key Fob Gen5 MCert.pdf",
            name: "ProductManual",
          },
          { text: "Key Fob Gen5", name: "Name" },
          {
            text:
              "Short press the “Include” button on the Key Fob, it will go into inclusion state and its blue LED will blink slowly to wait including other slave Z-Wave devices.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0058",
            name: "FrequencyName",
            type: "0101",
          },
          {
            text: "https://products.z-wavealliance.org/products/1177/",
            id: "0058",
            name: "ZWProductPage",
            type: "0201",
          },
          {
            text: "Australia / New Zealand",
            id: "0058",
            name: "FrequencyName",
            type: "0201",
          },
          { text: "ZW088-B", id: "0058", name: "Identifier", type: "0201" },
          {
            text: "https://products.z-wavealliance.org/products/1178/",
            id: "0058",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "ZW088-C", id: "0058", name: "Identifier", type: "0001" },
          {
            text: "CEPT (Europe)",
            id: "0058",
            name: "FrequencyName",
            type: "0001",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1165/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1177/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1178/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { action: "remove", id: "32" },
      { action: "remove", id: "38" },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "250",
            label: "Mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Enable selective Group Mode or Scene Mode when the Key Fob is in Use mode",
            Item: [
              { label: "Group", value: "0" },
              { label: "Scene", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "255",
            label: "Reset configuration",
            type: "button",
            units: "",
            value: "0",
            write_only: "true",
            Help: "Reset configuration set up to default setting",
          },
        ],
      },
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
