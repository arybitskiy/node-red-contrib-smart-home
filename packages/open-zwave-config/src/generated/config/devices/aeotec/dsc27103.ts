import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:001B:0003",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsc27103.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/773/",
            id: "001B",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "http://aeotec.com/z-wave-in-wall-switches",
            name: "ProductPage",
          },
          { text: "Micro Illuminator G2", name: "Name" },
          {
            text: "DSC27103-ZWAU",
            id: "001B",
            name: "Identifier",
            type: "0003",
          },
          {
            text:
              "It has long been thought that a house becomes a home when we make it reflect who we are, when we personalise it, when we fill it with objects we treasure. And all of that remains true, but it no longer needs to be just the objects we put in our home that personalises it. Like the music that gently fills the background of your favourite restaurant, Aeotec’s Micro Switches create the perfect ambiance for your home, and then some. They also give you the perfect control and the perfect, intelligent automation. \n\nAcross three different Micro controllers, each one letting you perfect everything from your home’s lights to its appliances and to its motorised doors and curtains, you’ll find that the same magic has been built right into the tiny body of each switch.",
            name: "Description",
          },
          {
            text:
              "U.S. / Canada / Mexico / CEPT (Europe) / Australia / New Zealand",
            id: "001B",
            name: "FrequencyName",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/706/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/765/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/773/xml",
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
            index: "2",
            label: "Make SEI blink",
            max: "65535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n\t  Configuration Value 1 is to Specify the time that SEI need blink (0-255), the unit is second;\n\t  Configuration Value 2 is to Specify the Cycle of on/off (0-255), the unit of it is 0.1 second.",
          },
          {
            genre: "config",
            index: "13",
            label: "CRC16 encapsulation",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Enable/Disable CRC16 encapsulation",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "80",
            label: "Notification status",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Defines the automated status notification of an associated device when status changes",
            Item: [
              { label: "Nothing", value: "0" },
              { label: "Hail", value: "1" },
              { label: "Basic", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "120",
            label: "Turn external button",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "255",
            Help: "Turn external button mode",
            Item: [
              { label: "Momentary button", value: "0" },
              { label: "2 state switch", value: "1" },
              { label: "3 way switch ", value: "2" },
              { label: "Unidentified", value: "255" },
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
              { label: "AT&T", value: "1" },
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
            label: "Reset device",
            type: "button",
            units: "",
            write_only: "true",
            Help: "Reset to the default configuration.",
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
