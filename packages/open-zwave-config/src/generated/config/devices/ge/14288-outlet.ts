import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3134:4952",
            name: "OzwInfoPage",
          },
          { text: "images/ge/14288-outlet.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2372/",
            id: "3134",
            name: "ZWProductPage",
            type: "4952",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2372/14315 QSG v0.pdf",
            name: "ProductManual",
          },
          { text: "In-Wall Tamper Resistant Smart Outlet", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "3134",
            name: "FrequencyName",
            type: "4952",
          },
          {
            text: "14315/ZW1002",
            id: "3134",
            name: "Identifier",
            type: "4952",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to\nremove a device from the Z-Wave network.\n2. Once the controller is ready to remove your device, press and\nrelease the manual/program button to remove it from the\nnetwork.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Follow the instructions for your Z-Wave certified\ncontroller to add a device to the Z-Wave network.\n2. Once the controller is ready to add your device, press and\nrelease the Program Button to add it in the network.",
            name: "InclusionDescription",
          },
          {
            text:
              "Press the button 3 times, then press and hold the button for at least 3\nseconds. The LED will blink 5 times to confirm.\nNOTE: This should only be used in the event your network’s primary\ncontroller is missing or otherwise inoperable",
            name: "ResetDescription",
          },
          {
            text:
              "Transform any home into a smart home with the Jasco Z-Wave Tamper Resistant Smart Outlet. The Jasco Z-Wave Tamper Resistant Smart Outlet enables wireless control of on/off functions from the Z-Wave controlled outlet, and is compatible with incandescent, LED, Xenon, Halogen, fluorescent and compact fluorescent bulbs. The tamper resistant duplex receptacle includes a blue LED indicator light to easily locate the receptacle in a dark room. The receptacle replaces your current electrical outlet, uses your existing wiring and provides a Z-Wave enabled outlet for the lamp or appliance that you would like to control and a standard pass-through AC outlet for other electrical appliances. Take control of your home lighting with Jasco Z-Wave Smart Lighting Controls!",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2236/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2372/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
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
            index: "3",
            label: "LED Light",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Sets when the LED on the outlet is lit.",
            Item: [
              {
                label: "LED On when load is Off, Led Off when load is On",
                value: "0",
              },
              {
                label:
                  "LED On when load is On, LED Off when laod is Off (Default)",
                value: "1",
              },
              { label: "LED always off", value: "2" },
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
              {
                index: "1",
                label: "Z-Wave Plus Lifeline",
                max_associations: "5",
              },
              {
                index: "2",
                label:
                  "Supports Basic Set and is controlled with the local load",
                max_associations: "5",
              },
              {
                index: "3",
                label:
                  "Supports Basic Set and is controlled by pressing the On or Off button",
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
