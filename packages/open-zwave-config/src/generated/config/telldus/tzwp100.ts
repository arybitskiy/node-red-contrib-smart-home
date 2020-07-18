import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0176:0001:0003",
            name: "OzwInfoPage",
          },
          { text: "images/telldus/tzwp100.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1536/",
            id: "0001",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "Tripple click the button on the device",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1536/manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The slim design makes this plugin switch fit almost everywhere. You can even have two switches connected into a standard 2-way wall outlet at the same time. It has a repeater function for the Z-Wave network so you can extend the range of your smart home system. Easy to install and to include in the powerful Telldus Live! system. Control lights and other electronic devices up to 2300 W (resistive load). Option to turn off indication LED. 500 chip, Z-Wave Plus.",
            name: "Description",
          },
          { text: "Plug-in Switch (Schuko)", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text: "Tripple click the button on the device",
            name: "InclusionDescription",
          },
          { text: "TZWP-100", id: "0001", name: "Identifier", type: "0003" },
          {
            text:
              "Press and hold the button until the LED starts flashing white (approx. 6 seconds).\nPress the button once more, short. \n\nPlease note!  Only use the reset procedure when the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1536/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
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
            index: "1",
            label: "Countdown timer",
            max: "254",
            min: "0",
            size: "1",
            type: "byte",
            units: "minutes",
            value: "0",
            Help:
              "\n                Number of minutes before it shutdown automatically (0 = disabled).\n            ",
          },
          {
            genre: "config",
            index: "2",
            label: "Power state",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                Define how the plug will react after the power supply is back on.\n            ",
            Item: [
              { label: "Always off", value: "0" },
              { label: "Remember status", value: "1" },
              { label: "Always on", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "LED indicator",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "100",
            Help:
              "\n                Set the intensity of the LED indicator (0-100).\n            ",
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
              {
                index: "2",
                label: "Control other devices",
                max_associations: "10",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
