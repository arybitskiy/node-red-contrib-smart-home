import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:001A:0003",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsc26103.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/776/",
            id: "001A",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "http://aeotec.com/z-wave-in-wall-switches",
            name: "ProductPage",
          },
          {
            text:
              "U.S. / Canada / Mexico / CEPT (Europe) / Australia / New Zealand",
            id: "001A",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "It has long been thought that a house becomes a home when we make it reflect who we are, when we personalise it, when we fill it with objects we treasure. And all of that remains true, but it no longer needs to be just the objects we put in our home that personalises it. Like the music that gently fills the background of your favourite restaurant, Aeotec’s Micro Switches create the perfect ambiance for your home, and then some. They also give you the perfect control and the perfect, intelligent automation. \n\nAcross three different Micro controllers, each one letting you perfect everything from your home’s lights to its appliances and to its motorised doors and curtains, you’ll find that the same magic has been built right into the tiny body of each switch.",
            name: "Description",
          },
          { text: "Micro Switch G2", name: "Name" },
          {
            text: "DSC26103-ZWAU",
            id: "001A",
            name: "Identifier",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/709/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/768/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/776/xml",
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
            label: "Blinking behavior",
            max: "65535",
            min: "0",
            type: "short",
            units: "",
            value: "0",
            write_only: "true",
            Help:
              "\n\tThis is actually a double byte value. The LSB defines the total time the device needs to blink in seconds. The MSB defines the on/off interval of the blink in tenths of seconds.\n      ",
          },
          {
            genre: "config",
            index: "80",
            label: "Notification status",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Enables automatic notifications to associated devices whenever there is a state change.",
            Item: [
              { label: "None", value: "0" },
              { label: "Hail", value: "1" },
              { label: "Basic", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "120",
            label: "Turn external button mode",
            size: "1",
            type: "list",
            units: "",
            value: "255",
            Help: "Turn external button mode",
            Item: [
              { label: "Momentary button", value: "0" },
              { label: "2 state switch", value: "1" },
              { label: "3 way switch", value: "2" },
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
            value: "0",
            write_only: "true",
            Help: "Reset to the default configuration.",
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
              {
                index: "2",
                label: "Retransmit Switch CC",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
