import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3037:4952",
            name: "OzwInfoPage",
          },
          { text: "images/ge/14292-toggle-switch.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2502/",
            id: "3037",
            name: "ZWProductPage",
            type: "4952",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to include a device to the Z-Wave network. \n2. Once the controller is ready to include your device, press up and release on the toggle to include it in the network. \n3. Once your controller has confirmed that the device has been included, refresh the Z-Wave network to optimize performance.",
            name: "InclusionDescription",
          },
          {
            text: "14292/ZW4003",
            id: "3037",
            name: "Identifier",
            type: "4952",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to exclude a device from the Z-Wave network. \n2. Once the controller is ready to exclude your device, press up and release on the toggle to exclude it from the network.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2502/Binder2.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Transform any home into a smart home with the GE Z-Wave Smart Toggle Switch. The In-Wall Smart Toggle Switch can easily replaces any standard in-wall switch and remotely controls a light in your home. Your home will be equipped with ultimate flexibility with the GE Z-Wave Smart Toggle Switch, capable of being used by itself or with up to four add-on switches. Screw terminal installation provides improved space efficiency when replacing existing switches and the integrated LED indicator light allows you to easily locate the switch in a dark room. The GE Z-Wave In-Wall Smart Toggle Switch is compatible with any Z-Wave certified gateway, providing access to many popular home automation systems. Take control of your home lighting with GE Z-Wave Smart Lighting Controls!",
            name: "Description",
          },
          { text: "In-Wall Smart Toggle Switch (White)", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "3037",
            name: "FrequencyName",
            type: "4952",
          },
          {
            text:
              "1. Quickly press ON (up) 3 times then immediately press the OFF (Down) button 3 times. Note: This should only be used in the event your networks primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/2055/",
            id: "3038",
            name: "ZWProductPage",
            type: "4952",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3038",
            name: "FrequencyName",
            type: "4952",
          },
          {
            text: "14293/ZW4003",
            id: "3038",
            name: "Identifier",
            type: "4952",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1856/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2055/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2502/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            index: "4",
            label: "Invert Switch",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Change the top of the switch to OFF and the bottom of the switch to ON, if the switch was installed upside down.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              {
                index: "2",
                label: "Basic - Local Load",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Basic - Double Tap",
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
