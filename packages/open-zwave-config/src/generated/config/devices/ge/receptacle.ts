import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 7,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0063:3530:5252",
            name: "OzwInfoPage",
          },
          { text: "images/ge/receptacle.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/724/",
            id: "3530",
            name: "ZWProductPage",
            type: "5252",
          },
          {
            text: "http://www.jascoproducts.com/support/",
            name: "ProductSupport",
          },
          {
            text:
              "Transform any home into a smart home with the GE Z-Wave Tamper Resistant Smart Outlet. The GE Z-Wave Tamper Resistant Smart Outlet enables wireless control of on/off functions from the Z-Wave controlled outlet, and is compatible with incandescent, LED, Xenon, Halogen, fluorescent and compact fluorescent bulbs. The tamper resistant duplex receptacle includes a blue LED indicator light to easily locate the receptacle in a dark room. The receptacle replaces your current electrical outlet, uses your existing wiring and provides a Z-Wave enabled outlet for the lamp or appliance that you would like to control and a standard pass-through AC outlet for other electrical appliances. Take control of your home lighting with Jasco Z-Wave Smart Lighting Controls!",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3530",
            name: "FrequencyName",
            type: "5252",
          },
          { text: "http://www.ezzwave.com", name: "ProductPage" },
          { text: "In-Wall Tamper Resistant Smart Outlet", name: "Name" },
          {
            text: "45636/ZW1001",
            id: "3530",
            name: "Identifier",
            type: "5252",
          },
          {
            text: "https://products.z-wavealliance.org/products/1212/",
            id: "3031",
            name: "ZWProductPage",
            type: "4952",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3031",
            name: "FrequencyName",
            type: "4952",
          },
          { text: "45705", id: "3031", name: "Identifier", type: "4952" },
          {
            text: "https://products.z-wavealliance.org/products/2732/",
            id: "3133",
            name: "ZWProductPage",
            type: "4952",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified controller to\nremove a device from the Z-Wave network.\n2. Once the controller is ready to remove your device, press and\nrelease the manual/program button to remove it from the\nnetwork.",
            name: "ExclusionDescription",
          },
          {
            text:
              "1. Follow the instructions for your Z-Wave certified\ncontroller to add a device to the Z-Wave network.\n2. Once the controller is ready to add your device, press and\nrelease the Program Button to add it in the network.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3133",
            name: "FrequencyName",
            type: "4952",
          },
          {
            text:
              "Press the button 3 times, then press and hold the button for at least 3\nseconds. The LED will blink 5 times to confirm.\nNOTE: This should only be used in the event your network’s primary\ncontroller is missing or otherwise inoperable",
            name: "ResetDescription",
          },
          {
            text: "14288/ZW1002",
            id: "3133",
            name: "Identifier",
            type: "4952",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2732/14288 QSG v1.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/657/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/724/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1195/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1212/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2732/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 7,
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
            value: "0",
            Help: "Sets when the LED on the outlet is lit.",
            Item: [
              { label: "LED on when outlet off", value: "0" },
              { label: "LED on when outlet on", value: "1" },
              { label: "LED always off", value: "2" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
