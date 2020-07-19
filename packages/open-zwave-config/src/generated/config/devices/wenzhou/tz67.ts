import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0118:0611:0202",
            name: "OzwInfoPage",
          },
          { text: "images/wenzhou/tz67.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/887/",
            id: "0611",
            name: "ZWProductPage",
            type: "0202",
          },
          {
            text: "http://www.tkbhome.com/guestbook.php",
            name: "ProductSupport",
          },
          { text: "TZ67C", id: "0611", name: "Identifier", type: "0202" },
          {
            text: "CEPT (Europe) / China",
            id: "0611",
            name: "FrequencyName",
            type: "0202",
          },
          { text: "Dimmer Module", name: "Name" },
          {
            text:
              "FEATURES:\n• Provides wireless dimming of lights, and ON/OFF control of lights connected to the Plug-In Lamp Module.\n• Plugs directly into wall outlet and provides a switched 230 VAC source. The programming button on the module is also a manual on and off switch.\n• Each Plug-In Lamp Module functions as an automatic repeater to other Z-WAVE Modules to ensure full home coverage.",
            name: "Description",
          },
          {
            text: "http://www.tkbhome.com/?cn-p-d-149.html",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/36/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/885/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/886/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/887/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
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
            instance: "1",
            label: "LED-Behaviour",
            size: "1",
            type: "list",
            value: "0",
            Help: "Defines the behavior of the blue LED. Default: 0",
            Item: [
              { label: "Blue Indicator Off", value: "0" },
              { label: "Blue Indicator On", value: "1" },
            ],
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
